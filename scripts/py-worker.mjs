// worker_threads worker: runs code with the app's own Python harness inside
// Pyodide (same interpreter build as the browser), in grading mode.
import { parentPort } from "node:worker_threads";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { loadPyodide } from "pyodide";

const harnessPath = new URL("../src/runtime/harness.py", import.meta.url);
// Explicit indexURL: under tsx (source maps on) Pyodide mis-detects its own folder.
const indexURL = fileURLToPath(new URL("../node_modules/pyodide/", import.meta.url));
const py = await loadPyodide({ indexURL });
py.FS.writeFile("/home/pyodide/pml_harness.py", readFileSync(harnessPath, "utf8"));
const h = py.pyimport("pml_harness");
h.configure(() => {}, async () => undefined);
parentPort.postMessage({ type: "ready", version: py.version });

parentPort.on("message", async (job) => {
  const inputs = py.toPy(job.inputs ?? []);
  const r = await h.run(job.code, job.mode ?? "script", inputs, 200000);
  const res = r.toJs({ dict_converter: Object.fromEntries });
  r.destroy();
  inputs.destroy();
  const t = h.transcript();
  const transcript = t.toJs();
  t.destroy();
  parentPort.postMessage({
    type: "result",
    id: job.id,
    status: res.status,
    errorType: res.error_type ?? null,
    error: res.error ?? null,
    line: res.line ?? null,
    transcript,
    stdout: transcript.filter(([k]) => k === "stdout").map(([, s]) => s).join(""),
  });
});
