import { useState, type ReactNode } from "react";
import { Play, Square, RotateCcw, Eraser, Loader2, Lightbulb } from "lucide-react";
import { CodeEditor } from "./CodeEditor";
import { OutputConsole } from "./OutputConsole";
import { useRunner } from "./useRunner";
import { explainError } from "../../lib/errorGuide";
import { SourceCitation } from "../SourceCitation";
import { RuntimeBadge } from "./RuntimeBadge";

/** Editor + toolbar + console. Runs the student's code for real in the Python worker. */
export function CodeRunner({
  code,
  onChange,
  initialCode,
  ariaLabel = "Python code editor",
  minHeight,
  extraActions,
  showReset = true,
}: {
  code: string;
  onChange: (v: string) => void;
  initialCode?: string;
  ariaLabel?: string;
  minHeight?: string;
  extraActions?: ReactNode;
  showReset?: boolean;
}) {
  const r = useRunner();
  const [showTip, setShowTip] = useState(true);
  const result = r.lastResult;
  const tip = result ? explainError(result.errorType, result.error) : null;
  const busy = r.running;
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-primary" onClick={() => r.run(code)} disabled={busy} data-testid="run-button">
          {busy ? <Loader2 size={16} className="animate-spin" /> : <Play size={16} />} Run
        </button>
        <button className="btn-secondary" onClick={r.stop} disabled={!busy} data-testid="stop-button">
          <Square size={14} /> Stop
        </button>
        {showReset && initialCode !== undefined && (
          <button className="btn-ghost" onClick={() => onChange(initialCode)} disabled={busy} title="Restore the starting code">
            <RotateCcw size={15} /> Reset code
          </button>
        )}
        <button className="btn-ghost" onClick={r.clear} disabled={busy}>
          <Eraser size={15} /> Clear output
        </button>
        {extraActions}
        <div className="ml-auto">
          <RuntimeBadge state={r.runtimeState} awaiting={r.awaitingInput !== null} />
        </div>
      </div>
      <CodeEditor value={code} onChange={onChange} onRun={() => !busy && r.run(code)} errorLine={result?.line ?? null} ariaLabel={ariaLabel} minHeight={minHeight} />
      <OutputConsole entries={r.entries} awaitingInput={r.awaitingInput} onSubmitInput={r.submitInput} onCancelInput={r.cancelInput} />
      {tip && showTip && (
        <div className="flex gap-3 rounded-xl border border-accent/30 bg-accent-soft p-3 text-sm" role="note">
          <Lightbulb size={18} className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
          <div className="min-w-0 space-y-1.5">
            <p className="font-semibold text-ink">
              {tip.title} <span className="ml-1 text-xs font-normal text-muted">· built-in error guide (not AI)</span>
            </p>
            <p className="text-muted">{tip.tip}</p>
            {tip.source && <SourceCitation refs={[tip.source]} compact />}
          </div>
          <button className="btn-ghost btn-sm ml-auto self-start" onClick={() => setShowTip(false)} aria-label="Hide tip">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
