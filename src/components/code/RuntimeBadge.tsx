import clsx from "clsx";
import type { RuntimeState } from "../../runtime/PythonRunner";

const TEXT: Record<RuntimeState, string> = {
  idle: "Python idle",
  loading: "Loading Python…",
  ready: "Python ready",
  running: "Running…",
  "awaiting-input": "Waiting for input",
  error: "Python failed to load",
};

export function RuntimeBadge({ state, awaiting }: { state: RuntimeState; awaiting?: boolean }) {
  const s: RuntimeState = awaiting ? "awaiting-input" : state;
  const dot = {
    idle: "bg-subtle",
    loading: "bg-warning animate-pulse-dot",
    ready: "bg-success",
    running: "bg-accent animate-pulse-dot",
    "awaiting-input": "bg-sky-400 animate-pulse-dot",
    error: "bg-danger",
  }[s];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs text-muted" data-testid="runtime-badge" data-state={s}>
      <span className={clsx("h-2 w-2 rounded-full", dot)} aria-hidden />
      {TEXT[s]}
    </span>
  );
}
