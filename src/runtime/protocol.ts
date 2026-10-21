// Message protocol between the page and the Python Web Worker.

export type RunMode = "script" | "notebook";

export type RunStatus =
  | "ok"
  | "syntax_error"
  | "runtime_error"
  | "exit"
  | "output_limit"
  // The statuses below are produced by the page-side runner, not by Python.
  | "timeout"
  | "stopped"
  | "worker_error";

export interface RunRequest {
  type: "run";
  id: number;
  code: string;
  mode: RunMode;
  /** Predefined input lines (grading). Omit for interactive input(). */
  inputs?: string[];
  outputLimit: number;
}

export type ToWorker =
  | { type: "init"; indexURL: string; harnessSource: string }
  | RunRequest
  | { type: "input-response"; id: number; value: string | null }
  | { type: "reset-notebook" };

export interface PythonOutcome {
  status: RunStatus;
  errorType: string | null;
  /** Full text exactly as Python formatted it (traceback or SyntaxError). */
  error: string | null;
  line: number | null;
}

/** Transcript event kinds: stdout/stderr from Python, prompt+input from input(), result from notebook display. */
export type TranscriptKind = "stdout" | "stderr" | "prompt" | "input" | "result";
export type TranscriptEvent = [TranscriptKind, string];

export type FromWorker =
  | { type: "ready"; version: string }
  | { type: "init-error"; message: string }
  | { type: "write"; id: number; stream: "stdout" | "stderr" | "result"; text: string }
  | { type: "input-request"; id: number; prompt: string }
  | {
      type: "done";
      id: number;
      outcome: PythonOutcome;
      transcript: TranscriptEvent[];
      durationMs: number;
    };
