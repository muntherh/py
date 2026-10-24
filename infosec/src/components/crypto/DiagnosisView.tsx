import clsx from "clsx";
import { CheckCircle2, XCircle } from "lucide-react";
import type { Diagnosis } from "../../crypto/ciphers";

/** Shows a validated final answer: overall verdict, the likely cause, and per-letter mistakes. */
export function DiagnosisView({ diag }: { diag: Diagnosis }) {
  return (
    <div className={clsx("animate-fade-up space-y-2 rounded-2xl border p-4 text-sm", diag.correct ? "border-success/50 bg-success-soft" : "border-danger/50 bg-danger-soft")} role="status" aria-live="polite">
      <p className="flex items-center gap-2 font-semibold">
        {diag.correct ? <CheckCircle2 size={18} className="text-success" /> : <XCircle size={18} className="text-danger" />}
        {diag.correct ? "Correct!" : `Not yet — ${Math.round(diag.fraction * 100)}% of positions match`}
      </p>
      <p>{diag.summary}</p>
      {!diag.correct && diag.issues.length > 0 && (
        <ul className="space-y-1">
          {diag.issues.slice(0, 6).map((iss) => (
            <li key={iss.index} className="font-mono text-[13px]">
              <span className="font-sans font-semibold">Position {iss.index + 1}</span>: expected <b>{iss.expected}</b>, you wrote <b>{iss.got}</b>
              {iss.reason && <span className="font-sans"> — {iss.reason}</span>}
            </li>
          ))}
          {diag.issues.length > 6 && <li className="text-muted">…and {diag.issues.length - 6} more.</li>}
        </ul>
      )}
    </div>
  );
}
