// Page-side manager for the Python worker: start-up, run queue, interactive
// input, time limits, Stop, and automatic restart after termination.

import harnessSource from "./harness.py?raw";
import type {
  FromWorker,
  PythonOutcome,
  RunMode,
  RunStatus,
  TranscriptEvent,
  ToWorker,
} from "./protocol";

export type RuntimeState = "idle" | "loading" | "ready" | "running" | "awaiting-input" | "error";

export interface RunOptions {
  code: string;
  mode?: RunMode;
  /** Predefined input lines (grading). When omitted, input() asks the page. */
  inputs?: string[];
  /** Active execution time limit in ms (time spent waiting for the user's input is not counted). */
  timeoutMs?: number;
  outputLimit?: number;
  onWrite?: (stream: "stdout" | "stderr" | "result", text: string) => void;
  onInputRequest?: (prompt: string) => void;
}

export interface RunResult extends PythonOutcome {
  transcript: TranscriptEvent[];
  stdout: string;
  durationMs: number;
  /** Message produced by the lab itself (not by Python), e.g. time limit reached. */
  labNotice: string | null;
}

interface ActiveRun {
  id: number;
  opts: RunOptions;
  resolve: (r: RunResult) => void;
  written: TranscriptEvent[];
  timer: ReturnType<typeof setTimeout> | null;
  remainingMs: number;
  segmentStart: number;
  started: number;
}

type Listener = () => void;

const DEFAULT_TIMEOUT = 10_000;
const DEFAULT_OUTPUT_LIMIT = 200_000;

function resolveIndexURL(): string {
  const base = import.meta.env.BASE_URL || "/";
  return new URL(`${base}pyodide/`, self.location.href).href;
}

export class PythonRunner {
  private worker: Worker | null = null;
  private readyPromise: Promise<void> | null = null;
  private active: ActiveRun | null = null;
  private queue: Promise<unknown> = Promise.resolve();
  private nextId = 1;
  /** Every requested run gets a sequence number; Stop cancels all runs requested so far. */
  private requested = 0;
  private cancelledUpTo = 0;
  private listeners = new Set<Listener>();
  private _state: RuntimeState = "idle";
  private _version = "";
  private _initError: string | null = null;
  /** Increments whenever the interpreter restarts (notebook variables are lost). */
  private _generation = 0;

  get state() {
    return this._state;
  }
  get version() {
    return this._version;
  }
  get initError() {
    return this._initError;
  }
  get generation() {
    return this._generation;
  }

  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private setState(s: RuntimeState) {
    this._state = s;
    this.listeners.forEach((fn) => fn());
  }

  /** Start the interpreter (idempotent). Resolves once Python is ready. */
  ensureReady(): Promise<void> {
    if (this.readyPromise) return this.readyPromise;
    this.setState("loading");
    this._initError = null;
    const worker = new Worker(new URL("./python.worker.ts", import.meta.url), { type: "module" });
    this.worker = worker;
    this._generation++;
    this.readyPromise = new Promise<void>((resolve, reject) => {
      const onMessage = (e: MessageEvent<FromWorker>) => {
        const msg = e.data;
        if (msg.type === "ready") {
          this._version = msg.version;
          this.setState("ready");
          resolve();
        } else if (msg.type === "init-error") {
          this._initError = msg.message;
          this.setState("error");
          this.readyPromise = null;
          this.worker?.terminate();
          this.worker = null;
          reject(new Error(msg.message));
        } else {
          this.handleMessage(msg);
        }
      };
      worker.addEventListener("message", onMessage);
      worker.addEventListener("error", (e) => {
        this._initError = e.message || "The Python worker failed to start.";
        if (this._state === "loading") {
          this.setState("error");
          this.readyPromise = null;
          reject(new Error(this._initError));
        }
      });
      const indexURL = resolveIndexURL();
      // Hosts that refuse .zip files can ship the same archive under another name (VITE_PYODIDE_STDLIB).
      const stdLibURL = indexURL + (import.meta.env.VITE_PYODIDE_STDLIB || "python_stdlib.zip");
      this.post({ type: "init", indexURL, stdLibURL, harnessSource });
    });
    return this.readyPromise;
  }

  private post(msg: ToWorker) {
    this.worker?.postMessage(msg);
  }

  /** Run code. Runs are queued so grading can run many test cases in order. */
  run(opts: RunOptions): Promise<RunResult> {
    const seq = ++this.requested;
    const job = this.queue.then(() => this.runNow(opts, seq));
    this.queue = job.catch(() => undefined);
    return job;
  }

  private async runNow(opts: RunOptions, seq: number): Promise<RunResult> {
    if (seq <= this.cancelledUpTo) return this.syntheticResult("stopped", "Execution stopped by you before the program started.");
    try {
      await this.ensureReady();
    } catch (err) {
      return this.syntheticResult(
        "worker_error",
        `The Python runtime could not be loaded: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
    if (seq <= this.cancelledUpTo) return this.syntheticResult("stopped", "Execution stopped by you before the program started.");
    return new Promise<RunResult>((resolve) => {
      const id = this.nextId++;
      const run: ActiveRun = {
        id,
        opts,
        resolve,
        written: [],
        timer: null,
        remainingMs: opts.timeoutMs ?? DEFAULT_TIMEOUT,
        segmentStart: performance.now(),
        started: performance.now(),
      };
      this.active = run;
      this.setState("running");
      this.armTimer(run);
      this.post({
        type: "run",
        id,
        code: opts.code,
        mode: opts.mode ?? "script",
        inputs: opts.inputs,
        outputLimit: opts.outputLimit ?? DEFAULT_OUTPUT_LIMIT,
      });
    });
  }

  private armTimer(run: ActiveRun) {
    run.segmentStart = performance.now();
    run.timer = setTimeout(() => {
      const seconds = Math.round((run.opts.timeoutMs ?? DEFAULT_TIMEOUT) / 1000);
      this.abort(
        "timeout",
        `Execution stopped by the lab: the program ran for more than ${seconds} second(s) without finishing. ` +
          `Check for a loop whose condition never becomes False.`,
      );
    }, Math.max(0, run.remainingMs));
  }

  private pauseTimer(run: ActiveRun) {
    if (run.timer) clearTimeout(run.timer);
    run.timer = null;
    run.remainingMs -= performance.now() - run.segmentStart;
  }

  private handleMessage(msg: FromWorker) {
    const run = this.active;
    if (!run) return;
    if (msg.type === "write" && msg.id === run.id) {
      run.written.push([msg.stream, msg.text]);
      run.opts.onWrite?.(msg.stream, msg.text);
    } else if (msg.type === "input-request" && msg.id === run.id) {
      this.pauseTimer(run);
      this.setState("awaiting-input");
      run.opts.onInputRequest?.(msg.prompt);
    } else if (msg.type === "done" && msg.id === run.id) {
      if (run.timer) clearTimeout(run.timer);
      this.active = null;
      this.setState("ready");
      const transcript = msg.transcript;
      run.resolve({
        ...msg.outcome,
        transcript,
        stdout: transcript
          .filter(([k]) => k === "stdout")
          .map(([, t]) => t)
          .join(""),
        durationMs: msg.durationMs,
        labNotice:
          msg.outcome.status === "output_limit"
            ? "Execution stopped by the lab: the program printed too much output (output limit reached)."
            : null,
      });
    }
  }

  /** Reply to a pending input() call. Pass null to cancel (Python raises EOFError). */
  provideInput(value: string | null) {
    const run = this.active;
    if (!run || this._state !== "awaiting-input") return;
    this.setState("running");
    this.armTimer(run);
    this.post({ type: "input-response", id: run.id, value });
  }

  /** Stop the running program by terminating the worker, then restart it. */
  stop() {
    this.cancelledUpTo = this.requested;
    if (!this.active) return;
    this.abort("stopped", "Execution stopped by you. The Python interpreter was restarted.");
  }

  resetNotebook() {
    this.post({ type: "reset-notebook" });
  }

  /** Throw away the interpreter and start a fresh one. */
  restart() {
    this.worker?.terminate();
    this.worker = null;
    this.readyPromise = null;
    this.setState("idle");
    void this.ensureReady().catch(() => undefined);
  }

  private abort(status: RunStatus, notice: string) {
    const run = this.active;
    this.active = null;
    if (run?.timer) clearTimeout(run.timer);
    this.worker?.terminate();
    this.worker = null;
    this.readyPromise = null;
    this.setState("idle");
    if (run) {
      run.resolve({
        status,
        errorType: null,
        error: null,
        line: null,
        transcript: run.written,
        stdout: run.written
          .filter(([k]) => k === "stdout")
          .map(([, t]) => t)
          .join(""),
        durationMs: Math.round(performance.now() - run.started),
        labNotice: notice,
      });
    }
    // Warm up a fresh interpreter in the background.
    void this.ensureReady().catch(() => undefined);
  }

  private syntheticResult(status: RunStatus, notice: string): RunResult {
    return {
      status,
      errorType: null,
      error: null,
      line: null,
      transcript: [],
      stdout: "",
      durationMs: 0,
      labNotice: notice,
    };
  }
}

/** Shared interpreter used by the whole app (one worker). */
export const pythonRunner = new PythonRunner();
