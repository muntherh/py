// React hook around the shared Python runner: console entries, input prompts, stop.
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { pythonRunner, type RunResult } from "../../runtime/PythonRunner";
import type { RunMode } from "../../runtime/protocol";
import { useSettings } from "../../store/settingsStore";

export type ConsoleKind = "stdout" | "stderr" | "prompt" | "input" | "result" | "error" | "notice" | "meta";
export interface ConsoleEntry {
  kind: ConsoleKind;
  text: string;
}

export function useRuntimeState() {
  return useSyncExternalStore(
    (fn) => pythonRunner.subscribe(fn),
    () => pythonRunner.state,
  );
}

export function useRunner() {
  const runtimeState = useRuntimeState();
  const [entries, setEntries] = useState<ConsoleEntry[]>([]);
  const [awaitingInput, setAwaitingInput] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  /** True while this run waits behind another program (e.g. another cell waiting for input). */
  const [queued, setQueued] = useState(false);
  const [lastResult, setLastResult] = useState<RunResult | null>(null);
  const timeoutSeconds = useSettings((s) => s.timeoutSeconds);
  const pending = useRef<ConsoleEntry[]>([]);
  const frame = useRef<number | null>(null);
  const mounted = useRef(true);
  const ownsRun = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      if (frame.current) cancelAnimationFrame(frame.current);
      // Leaving the page must not leave a program running (it would block later runs).
      if (ownsRun.current) pythonRunner.stop();
    };
  }, []);

  const flush = useCallback(() => {
    frame.current = null;
    if (!mounted.current || pending.current.length === 0) return;
    const batch = pending.current;
    pending.current = [];
    setEntries((prev) => {
      const next = [...prev];
      for (const e of batch) {
        const last = next[next.length - 1];
        if (last && last.kind === e.kind && (e.kind === "stdout" || e.kind === "stderr")) next[next.length - 1] = { ...last, text: last.text + e.text };
        else next.push(e);
      }
      return next.length > 5000 ? next.slice(-5000) : next;
    });
  }, []);

  const push = useCallback(
    (e: ConsoleEntry) => {
      pending.current.push(e);
      if (frame.current === null) frame.current = requestAnimationFrame(flush);
    },
    [flush],
  );

  const clear = useCallback(() => {
    pending.current = [];
    setEntries([]);
    setLastResult(null);
  }, []);

  const run = useCallback(
    async (code: string, opts: { mode?: RunMode; keepOutput?: boolean } = {}) => {
      if (!opts.keepOutput) clear();
      setRunning(true);
      ownsRun.current = true;
      setQueued(pythonRunner.state === "running" || pythonRunner.state === "awaiting-input");
      const result = await pythonRunner.run({
        onStart: () => mounted.current && setQueued(false),
        code,
        mode: opts.mode ?? "script",
        timeoutMs: timeoutSeconds * 1000,
        onWrite: (stream, text) => push({ kind: stream === "result" ? "result" : stream, text: stream === "result" ? `${text}\n` : text }),
        onInputRequest: (prompt) => {
          push({ kind: "prompt", text: prompt });
          setAwaitingInput(prompt);
        },
      });
      ownsRun.current = false;
      if (!mounted.current) return result;
      setQueued(false);
      setAwaitingInput(null);
      if (result.error) push({ kind: "error", text: result.error });
      if (result.labNotice) push({ kind: "notice", text: result.labNotice });
      if (result.status === "exit") push({ kind: "meta", text: `Program exited (SystemExit ${result.error ?? ""}).` });
      push({
        kind: "meta",
        text:
          result.status === "ok"
            ? `✓ Finished in ${result.durationMs} ms`
            : result.status === "syntax_error" || result.status === "runtime_error"
              ? `✗ Stopped with ${result.errorType}${result.line ? ` on line ${result.line}` : ""}`
              : "",
      });
      setLastResult(result);
      setRunning(false);
      return result;
    },
    [clear, push, timeoutSeconds],
  );

  const submitInput = useCallback(
    (value: string) => {
      push({ kind: "input", text: `${value}\n` });
      setAwaitingInput(null);
      pythonRunner.provideInput(value);
    },
    [push],
  );

  const cancelInput = useCallback(() => {
    push({ kind: "notice", text: "Input cancelled — Python receives end-of-file (EOFError).\n" });
    setAwaitingInput(null);
    pythonRunner.provideInput(null);
  }, [push]);

  const stop = useCallback(() => {
    if (ownsRun.current) pythonRunner.stop();
  }, []);

  return { runtimeState, entries, awaitingInput, running, queued, lastResult, run, submitInput, cancelInput, stop, clear, push };
}
