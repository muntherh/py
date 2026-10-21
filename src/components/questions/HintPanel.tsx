import { useState } from "react";
import { Lightbulb, Lock } from "lucide-react";
import { RichText } from "../ui/RichText";

const LEVELS = ["Concept hint", "Logic hint", "Code structure hint", "Complete explanation"];

/**
 * Progressive hints. Levels unlock one at a time; level 4 (full explanation)
 * is available only after a submission or when explicitly requested.
 */
export function HintPanel({
  hints,
  revealed,
  onReveal,
  submitted,
}: {
  hints: [string, string, string, string];
  revealed: number;
  onReveal: (level: number) => void;
  submitted: boolean;
}) {
  const [confirmFull, setConfirmFull] = useState(false);
  return (
    <div className="space-y-2" aria-label="Hints">
      <p className="text-xs text-subtle">Hints are prepared, source-grounded guidance written for this exercise — not live AI.</p>
      {hints.map((h, i) => {
        const level = i + 1;
        const open = revealed >= level;
        const canOpen = revealed >= level - 1;
        const gated = level === 4 && !submitted;
        return (
          <div key={i} className="rounded-xl border border-line bg-surface-2">
            {open ? (
              <div className="space-y-1 p-3">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-primary-text">
                  <Lightbulb size={14} /> Level {level} · {LEVELS[i]}
                </p>
                <div className="text-sm leading-relaxed whitespace-pre-wrap text-muted">
                  {h.includes("\n") && /___|=|:\n/.test(h) ? <code className="block font-mono text-[13px] text-ink">{h}</code> : <RichText text={h} />}
                </div>
              </div>
            ) : (
              <button
                className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left text-sm text-muted hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!canOpen}
                onClick={() => (gated ? setConfirmFull(true) : onReveal(level))}
              >
                <span className="flex items-center gap-2">
                  <Lock size={14} /> Level {level} · {LEVELS[i]}
                </span>
                <span className="text-xs">{canOpen ? (gated ? "Reveal (before submitting)" : "Reveal") : "Unlock previous hint first"}</span>
              </button>
            )}
            {level === 4 && confirmFull && !open && (
              <div className="space-y-2 border-t border-line p-3 text-sm" role="alert">
                <p className="text-muted">The complete explanation shows how to solve the exercise. Reveal it before submitting?</p>
                <div className="flex gap-2">
                  <button className="btn-primary btn-sm" onClick={() => (setConfirmFull(false), onReveal(4))}>
                    Yes, show it
                  </button>
                  <button className="btn-secondary btn-sm" onClick={() => setConfirmFull(false)}>
                    Not yet
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
