# Python Mastery Lab execution harness.
#
# Runs inside Pyodide (a real CPython interpreter compiled to WebAssembly) in a
# Web Worker. Student code is executed for real; this module only:
#   * routes print() output to the browser as it is written,
#   * lets input() ask the browser for a line of text (interactive mode) or
#     read from a queue of predefined lines (grading mode),
#   * trims harness frames out of tracebacks so students see only their file.
#
# input() support: a worker cannot block while waiting for the page, so calls
# to input(...) in module-level code are rewritten (via the AST, keeping line
# numbers) to `await __pml_input__(...)` and the module is compiled with
# PyCF_ALLOW_TOP_LEVEL_AWAIT. The original source is always compiled first,
# unmodified, so syntax errors are exactly the ones CPython reports.

import ast
import builtins
import inspect
import linecache
import sys
import traceback

FILENAME = "main.py"

_js_write = None          # callable(stream: str, text: str)
_js_request_input = None  # async callable(prompt: str) -> str | None (None = EOF)
_output_limit = 200_000
_output_count = 0
_input_queue = None       # list[str] in grading mode, None in interactive mode
_events = []              # transcript for grading: (kind, text)
_notebook_globals = None


class OutputLimitExceeded(Exception):
    pass


def _is_nullish(value):
    # Pyodide maps JS undefined -> None and JS null -> JsNull.
    return value is None or type(value).__name__ == "JsNull"


class _Stream:
    """Minimal text stream that forwards writes to the page immediately."""

    def __init__(self, name):
        self.name = name

    def write(self, s):
        global _output_count
        if not isinstance(s, str):
            raise TypeError(f"write() argument must be str, not {type(s).__name__}")
        _output_count += len(s)
        if _output_count > _output_limit:
            raise OutputLimitExceeded()
        _events.append((self.name, s))
        if _js_write is not None:
            _js_write(self.name, s)
        return len(s)

    def flush(self):
        pass

    def writable(self):
        return True

    def isatty(self):
        return False

    @property
    def encoding(self):
        return "utf-8"


_stdout = _Stream("stdout")
_stderr = _Stream("stderr")


async def __pml_input__(prompt=""):
    prompt = str(prompt)
    _events.append(("prompt", prompt))
    if _input_queue is not None:
        # Grading mode: echo the prompt to the transcript only (not to stdout).
        if not _input_queue:
            raise EOFError("EOF when reading a line")
        value = str(_input_queue.pop(0))
        _events.append(("input", value))
        return value
    value = await _js_request_input(prompt)
    if _is_nullish(value):
        raise EOFError("EOF when reading a line")
    value = str(value)
    _events.append(("input", value))
    return value


def _sync_input_unsupported(prompt=""):
    raise RuntimeError(
        "input() can only be used in the main program body in this browser lab "
        "(not inside a function, lambda or class)."
    )


class _InputRewriter(ast.NodeTransformer):
    """Rewrite input(...) -> await __pml_input__(...) outside nested scopes."""

    def __init__(self):
        self.scope_depth = 0
        self.rewrote = False

    def _nested(self, node):
        self.scope_depth += 1
        self.generic_visit(node)
        self.scope_depth -= 1
        return node

    visit_FunctionDef = _nested
    visit_AsyncFunctionDef = _nested
    visit_Lambda = _nested
    visit_ClassDef = _nested
    # Generator expressions run in their own frame; awaiting inside one would
    # turn it into an async generator, so leave them alone too.
    visit_GeneratorExp = _nested

    def visit_Call(self, node):
        self.generic_visit(node)
        if (
            self.scope_depth == 0
            and isinstance(node.func, ast.Name)
            and node.func.id == "input"
        ):
            self.rewrote = True
            new_call = ast.Call(
                func=ast.Name(id="__pml_input__", ctx=ast.Load()),
                args=node.args,
                keywords=node.keywords,
            )
            return ast.copy_location(
                ast.Await(value=ast.copy_location(new_call, node)), node
            )
        return node


def _display_hook_tree(tree):
    """Notebook mode: show the value of a trailing bare expression, like Jupyter."""
    if tree.body and isinstance(tree.body[-1], ast.Expr):
        last = tree.body[-1]
        call = ast.Call(
            func=ast.Name(id="__pml_display__", ctx=ast.Load()),
            args=[last.value],
            keywords=[],
        )
        tree.body[-1] = ast.copy_location(ast.Expr(value=ast.copy_location(call, last)), last)
    return tree


def __pml_display__(value):
    if value is not None:
        _events.append(("result", repr(value)))
        if _js_write is not None:
            _js_write("result", repr(value))


def _format_exception(exc):
    """Format like CPython's top-level handler, keeping only student frames."""
    tb = exc.__traceback__
    frames = []
    while tb is not None:
        if tb.tb_frame.f_code.co_filename == FILENAME:
            frames.append(tb)
        tb = tb.tb_next
    # Re-link the kept frames (traceback objects are immutable in chain order,
    # so rebuild a new chain with types.TracebackType).
    import types

    new_tb = None
    for t in reversed(frames):
        new_tb = types.TracebackType(new_tb, t.tb_frame, t.tb_lasti, t.tb_lineno)
    exc = exc.with_traceback(new_tb)
    text = "".join(traceback.format_exception(type(exc), exc, new_tb))
    line = frames[-1].tb_lineno if frames else getattr(exc, "lineno", None)
    return text, line


def _reset_run_state(output_limit, inputs):
    global _output_count, _output_limit, _input_queue, _events
    _output_count = 0
    _output_limit = int(output_limit)
    _input_queue = None if _is_nullish(inputs) else [str(x) for x in inputs]
    _events = []


async def run(source, mode="script", inputs=None, output_limit=200_000):
    """Execute student source. Returns a dict describing the outcome.

    mode: "script"   fresh namespace, like running `python main.py`
          "notebook" persistent namespace shared between cells, like Jupyter
    inputs: None for interactive input(), or a list of lines for grading.
    """
    global _notebook_globals
    _reset_run_state(output_limit, inputs)
    old_out, old_err, old_input = sys.stdout, sys.stderr, builtins.input
    sys.stdout, sys.stderr = _stdout, _stderr
    builtins.input = _sync_input_unsupported
    result = {"status": "ok", "error": None, "line": None, "error_type": None}
    try:
        # 1) Compile the untouched source: real CPython syntax errors.
        try:
            compile(source, FILENAME, "exec", dont_inherit=True)
        except SyntaxError as exc:  # includes IndentationError / TabError
            exc.__traceback__ = None
            # Compiler-stage errors (e.g. 'break' outside loop) carry no source
            # text when compiled from a string; CPython shows it for files.
            lines = source.splitlines()
            if exc.text is None and exc.lineno and 0 < exc.lineno <= len(lines):
                exc.text = lines[exc.lineno - 1] + "\n"
            result.update(
                status="syntax_error",
                error_type=type(exc).__name__,
                error="".join(traceback.format_exception_only(type(exc), exc)),
                line=exc.lineno,
            )
            return result

        # 2) Rewrite input() calls and compile with top-level await allowed.
        tree = ast.parse(source, FILENAME)
        tree = _InputRewriter().visit(tree)
        if mode == "notebook":
            tree = _display_hook_tree(tree)
        ast.fix_missing_locations(tree)
        code = compile(
            tree, FILENAME, "exec", flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT, dont_inherit=True
        )
        linecache.cache[FILENAME] = (
            len(source), None, [l + "\n" for l in source.splitlines()], FILENAME
        )

        if mode == "notebook":
            if _notebook_globals is None:
                _notebook_globals = {"__name__": "__main__", "__builtins__": builtins}
            g = _notebook_globals
        else:
            g = {"__name__": "__main__", "__builtins__": builtins}
        g["__pml_input__"] = __pml_input__
        g["__pml_display__"] = __pml_display__

        try:
            maybe = eval(code, g)
            if inspect.iscoroutine(maybe):
                await maybe
        finally:
            g.pop("__pml_input__", None)
            g.pop("__pml_display__", None)
    except OutputLimitExceeded:
        result.update(status="output_limit", error_type="OutputLimitExceeded")
    except SystemExit as exc:
        result.update(status="exit", error_type="SystemExit", error=repr(exc.code))
    except BaseException as exc:  # noqa: BLE001 - report every student error
        text, line = _format_exception(exc)
        result.update(
            status="runtime_error",
            error_type=type(exc).__name__,
            error=text,
            line=line,
        )
    finally:
        sys.stdout, sys.stderr, builtins.input = old_out, old_err, old_input
    return result


def reset_notebook():
    global _notebook_globals
    _notebook_globals = None


def transcript():
    """Events of the last run as a list of [kind, text] pairs."""
    return [[k, t] for k, t in _events]


def configure(js_write, js_request_input):
    global _js_write, _js_request_input
    _js_write = js_write
    _js_request_input = js_request_input
