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

export function RuntimeBadge({ state, awaiting, compact }: { state: RuntimeState; awaiting?: boolean; compact?: boolean }) {
  const s: RuntimeState = awaiting ? "awaiting-input" : state;
  const dot = {
    idle: "bg-subtle",
    loading: "bg-warning animate-pulse-dot",
    ready: "bg-success",
    running: "bg-accent animate-pulse-dot",
    "awaiting-input": "bg-sky-400 animate-pulse-dot",
    error: "bg-danger",
  }[s];
  if (compact)
    return (
      <span className="grid h-8 w-8 place-items-center" data-testid="runtime-badge" data-state={s} title={TEXT[s]}>
        <span className={clsx("h-2.5 w-2.5 rounded-full", dot)} aria-hidden />
        <span className="sr-only">{TEXT[s]}</span>
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-muted" data-testid="runtime-badge" data-state={s}>
      <span className={clsx("h-2 w-2 rounded-full", dot)} aria-hidden />
      {TEXT[s]}
    </span>
  );
}
