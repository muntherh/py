import clsx from "clsx";
import { CheckCircle2, EyeOff, XCircle, AlertTriangle } from "lucide-react";
import { CATEGORY_TEXT, type CodingGrade } from "../../grading/checks";
import { ProgressBar } from "../ui/ProgressBar";

const HEADLINE: Record<string, string> = {
  pass: "All tests passed — your program behaves correctly.",
  syntax_error: "Your program has a syntax error, so Python could not run it. Fix the line shown in the error.",
  runtime_error: "Your program crashed with a runtime error on at least one test.",
  timeout: "Your program did not finish on at least one test (check your loop condition and update).",
  no_output: "Your program ran but printed nothing for at least one test.",
  wrong_output: "Your program ran, but its output is not correct for at least one test.",
  missing_requirement: "The output is right, but a required construct is missing.",
};

export function GradeReport({ grade, showHiddenDetails = false }: { grade: CodingGrade; showHiddenDetails?: boolean }) {
  const passed = grade.tests.filter((t) => t.passed).length;
  const visible = grade.tests.filter((t) => !t.hidden);
  const hidden = grade.tests.filter((t) => t.hidden);
  return (
    <div className="space-y-3" data-testid="grade-report" data-passed={grade.passedAll}>
      <div className={clsx("rounded-xl border p-3", grade.passedAll ? "border-success/40 bg-success-soft" : "border-warning/40 bg-warning-soft")}>
        <p className={clsx("flex items-center gap-2 text-sm font-semibold", grade.passedAll ? "text-success-text" : "text-warning-text")}>
          {grade.passedAll ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
          {CATEGORY_TEXT[grade.headline]} · {Math.round(grade.fraction * 100)}%
        </p>
        <p className="mt-1 text-sm text-muted">{HEADLINE[grade.headline]}</p>
        <ProgressBar className="mt-2" value={grade.fraction * 100} tone={grade.passedAll ? "success" : "warning"} label="Score" />
        <p className="mt-1.5 text-xs text-muted">
          {passed} of {grade.tests.length} tests passed
          {grade.requirements.length > 0 && ` · ${grade.requirements.filter((r) => r.passed).length} of ${grade.requirements.length} requirements met`}
        </p>
      </div>
      {grade.syntaxError && (
        <pre className="overflow-x-auto rounded-xl border border-danger/40 bg-console p-3 font-mono text-xs whitespace-pre-wrap text-red-200">{grade.syntaxError}</pre>
      )}
      {grade.requirements.map((r) => (
        <p key={r.message} className={clsx("flex items-center gap-2 text-sm", r.passed ? "text-success-text" : "text-danger-text")}>
          {r.passed ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {r.message}
        </p>
      ))}
      <ul className="space-y-2">
        {visible.map((t) => (
          <li key={t.testId} className="rounded-xl border border-line bg-surface-2 p-3">
            <p className={clsx("flex items-center gap-2 text-sm font-medium", t.passed ? "text-success-text" : "text-danger-text")}>
              {t.passed ? <CheckCircle2 size={16} /> : <XCircle size={16} />} {t.description}
              <span className="ml-auto text-xs font-normal text-subtle">{CATEGORY_TEXT[t.category]}</span>
            </p>
            {!t.passed && t.failedChecks.length > 0 && (
              <ul className="mt-1.5 list-disc space-y-0.5 pl-6 text-xs text-muted">
                {t.failedChecks.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            )}
            {(t.terminal || t.error) && (
              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-subtle">Show what your program printed</summary>
                <pre className="mt-1.5 overflow-x-auto rounded-lg bg-console p-2.5 font-mono text-xs whitespace-pre-wrap text-slate-100">
                  {t.terminal || "(no output)"}
                  {t.error && <span className="text-red-300">{`\n${t.error}`}</span>}
                </pre>
              </details>
            )}
          </li>
        ))}
        {hidden.map((t, i) => (
          <li key={t.testId} className="flex items-center gap-2 rounded-xl border border-dashed border-line bg-surface-2 p-3 text-sm">
            <EyeOff size={15} className="text-subtle" />
            <span className="text-muted">Hidden test {i + 1}{showHiddenDetails ? ` — ${t.description}` : ""}</span>
            <span className={clsx("ml-auto flex items-center gap-1 text-xs", t.passed ? "text-success-text" : "text-danger-text")}>
              {t.passed ? <CheckCircle2 size={14} /> : <XCircle size={14} />} {t.passed ? "Passed" : CATEGORY_TEXT[t.category]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
