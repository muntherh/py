/// <reference lib="webworker" />
// Web Worker that hosts the Pyodide (CPython-in-WebAssembly) interpreter.
// Student code never runs on the page's main thread: it runs here, and the page
// can terminate this worker at any time (Stop button / time limit).

import type { FromWorker, ToWorker } from "./protocol";

declare const self: DedicatedWorkerGlobalScope;

interface PyProxyLike {
  toJs(opts?: unknown): unknown;
  destroy?: () => void;
}
interface HarnessModule {
  configure(write: (stream: string, text: string) => void, requestInput: (prompt: string) => Promise<string | undefined>): void;
  run(code: string, mode: string, inputs: unknown, outputLimit: number): Promise<PyProxyLike>;
  transcript(): PyProxyLike;
  reset_notebook(): void;
}
interface PyodideLike {
  version: string;
  FS: { writeFile(path: string, data: string): void };
  pyimport(name: string): HarnessModule;
  toPy(value: unknown): unknown;
}

let harness: HarnessModule | null = null;
let pyodide: PyodideLike | null = null;
let currentRunId = -1;
const pendingInputs = new Map<number, (value: string | undefined) => void>();

function post(msg: FromWorker) {
  self.postMessage(msg);
}

async function init(indexURL: string, stdLibURL: string, harnessSource: string) {
  try {
    const mod = (await import(/* @vite-ignore */ `${indexURL}pyodide.mjs`)) as {
      loadPyodide: (opts: Record<string, unknown>) => Promise<PyodideLike>;
    };
    pyodide = await mod.loadPyodide({ indexURL, stdLibURL });
    pyodide.FS.writeFile("/home/pyodide/pml_harness.py", harnessSource);
    harness = pyodide.pyimport("pml_harness");
    harness.configure(
      (stream: string, text: string) => {
        post({ type: "write", id: currentRunId, stream: stream as "stdout", text });
      },
      (prompt: string) =>
        new Promise<string | undefined>((resolve) => {
          pendingInputs.set(currentRunId, resolve);
          post({ type: "input-request", id: currentRunId, prompt });
        }),
    );
    post({ type: "ready", version: pyodide.version });
  } catch (err) {
    post({ type: "init-error", message: err instanceof Error ? err.message : String(err) });
  }
}

self.onmessage = async (event: MessageEvent<ToWorker>) => {
  const msg = event.data;
  if (msg.type === "init") {
    await init(msg.indexURL, msg.stdLibURL, msg.harnessSource);
    return;
  }
  if (msg.type === "input-response") {
    const resolve = pendingInputs.get(msg.id);
    pendingInputs.delete(msg.id);
    // null = cancelled -> Python raises EOFError (undefined maps to None).
    resolve?.(msg.value === null ? undefined : msg.value);
    return;
  }
  if (msg.type === "reset-notebook") {
    harness?.reset_notebook();
    return;
  }
  if (msg.type === "run") {
    if (!harness || !pyodide) return;
    currentRunId = msg.id;
    const started = performance.now();
    const inputs = msg.inputs ? pyodide.toPy(msg.inputs) : undefined;
    const result = await harness.run(msg.code, msg.mode, inputs, msg.outputLimit);
    const outcome = result.toJs({ dict_converter: Object.fromEntries }) as {
      status: string;
      error: string | null;
      error_type: string | null;
      line: number | null;
    };
    result.destroy?.();
    const t = harness.transcript();
    const transcript = t.toJs() as [string, string][];
    t.destroy?.();
    post({
      type: "done",
      id: msg.id,
      outcome: {
        status: outcome.status as never,
        error: outcome.error ?? null,
        errorType: outcome.error_type ?? null,
        line: outcome.line ?? null,
      },
      transcript: transcript as never,
      durationMs: Math.round(performance.now() - started),
    });
  }
};
