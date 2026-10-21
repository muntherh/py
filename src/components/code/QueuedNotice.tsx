import { Hourglass } from "lucide-react";
import { pythonRunner, type RuntimeState } from "../../runtime/PythonRunner";

/** Shown when a run waits behind another program, so it never looks like nothing happened. */
export function QueuedNotice({ runtimeState }: { runtimeState: RuntimeState }) {
  const waitingForInput = runtimeState === "awaiting-input";
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-xl border border-warning/40 bg-warning-soft px-3 py-2 text-sm text-warning-text" role="status" data-testid="queued-notice">
      <Hourglass size={15} className="shrink-0" aria-hidden />
      <span className="min-w-0 flex-1">
        {waitingForInput
          ? "Waiting: another cell or program is waiting for you to type its input(). Answer it there, or cancel it to run this code now."
          : "Waiting: another program is still running. This code will run as soon as it finishes."}
      </span>
      {waitingForInput ? (
        <button className="btn-secondary btn-sm" onClick={() => pythonRunner.provideInput(null)}>
          Cancel the other input
        </button>
      ) : (
        <button className="btn-secondary btn-sm" onClick={() => pythonRunner.stopActive()}>
          Stop the other program
        </button>
      )}
    </div>
  );
}
