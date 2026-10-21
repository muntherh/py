// @vitest-environment node
// Real Python execution tests: the app's harness inside Pyodide (CPython 3.13).
import { beforeAll, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { loadPyodide } from "pyodide";

type Res = { status: string; error_type?: string; error?: string; line?: number };
let h: { run: (...a: unknown[]) => Promise<{ toJs: (o: unknown) => Res }>; transcript: () => { toJs: () => [string, string][] }; configure: (...a: unknown[]) => void };
let py: { toPy: (v: unknown) => unknown };
let answers: (string | undefined)[] = [];

beforeAll(async () => {
  const indexURL = fileURLToPath(new URL("../../node_modules/pyodide/", import.meta.url));
  const p = await loadPyodide({ indexURL });
  (p as unknown as { FS: { writeFile: (a: string, b: string) => void } }).FS.writeFile("/home/pyodide/pml_harness.py", readFileSync(new URL("../../src/runtime/harness.py", import.meta.url), "utf8"));
  h = (p as unknown as { pyimport: (n: string) => typeof h }).pyimport("pml_harness");
  py = p as unknown as typeof py;
  h.configure(() => undefined, async () => answers.shift());
}, 120_000);

async function run(code: string, opts: { inputs?: string[]; mode?: string; limit?: number } = {}) {
  const r = (await h.run(code, opts.mode ?? "script", opts.inputs ? py.toPy(opts.inputs) : undefined, opts.limit ?? 200000)).toJs({ dict_converter: Object.fromEntries });
  const t = h.transcript().toJs();
  return { ...r, stdout: t.filter(([k]) => k === "stdout").map(([, s]) => s).join(""), transcript: t };
}

describe("Python harness (real CPython via Pyodide)", () => {
  it("prints output", async () => {
    const r = await run('print("Hello World")');
    expect(r.status).toBe("ok");
    expect(r.stdout).toBe("Hello World\n");
  });
  it("reports genuine SyntaxError text with line number", async () => {
    const r = await run("x = 10\nif x > 5\n    print(x)");
    expect(r.status).toBe("syntax_error");
    expect(r.line).toBe(2);
    expect(r.error).toContain("SyntaxError: expected ':'");
  });
  it("reports IndentationError", async () => {
    const r = await run("if True:\nprint(1)");
    expect(r.error_type).toBe("IndentationError");
  });
  it("shows the source line for compiler-stage errors", async () => {
    const r = await run("print(1)\nbreak");
    expect(r.error).toContain("break");
    expect(r.error).toContain("'break' outside loop");
  });
  it("produces a traceback limited to the student's file", async () => {
    const r = await run("a = 5\nprint(a / 0)");
    expect(r.status).toBe("runtime_error");
    expect(r.error).toContain('File "main.py", line 2');
    expect(r.error).toContain("ZeroDivisionError: division by zero");
    expect(r.error).not.toContain("pml_harness");
  });
  it("feeds queued input lines and records prompts separately from stdout", async () => {
    const r = await run('n = input("Name: ")\nage = int(input("Age: "))\nprint("Hi", n, age + 1)', { inputs: ["Sara", "20"] });
    expect(r.stdout).toBe("Hi Sara 21\n");
    expect(r.transcript.filter(([k]) => k === "prompt").map(([, t]) => t)).toEqual(["Name: ", "Age: "]);
  });
  it("raises EOFError when input runs out", async () => {
    const r = await run("x = input()\ny = input()", { inputs: ["1"] });
    expect(r.error_type).toBe("EOFError");
  });
  it("supports interactive input and while loops", async () => {
    answers = ["3", "4", "5"];
    const r = await run("total = 0\ni = 0\nwhile i < 3:\n    total += int(input())\n    i += 1\nprint(total / 3)");
    expect(r.stdout).toBe("4.0\n");
  });
  it("keeps variables between notebook cells and displays the last expression", async () => {
    await run("x = 21", { mode: "notebook" });
    const r = await run("x * 2", { mode: "notebook" });
    expect(r.transcript).toContainEqual(["result", "42"]);
  });
  it("starts every script with a fresh namespace", async () => {
    await run("leftover = 1");
    const r = await run("print(leftover)");
    expect(r.error_type).toBe("NameError");
  });
  it("stops runaway output at the limit", async () => {
    const r = await run('i = 0\nwhile i < 100000:\n    print("x" * 50)\n    i += 1', { limit: 10000 });
    expect(r.status).toBe("output_limit");
  });
  it("explains input() inside a function instead of hanging", async () => {
    const r = await run("def f():\n    return input()\nf()");
    expect(r.error_type).toBe("RuntimeError");
    expect(r.error).toContain("input() can only be used in the main program body");
  });
});
