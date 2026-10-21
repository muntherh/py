import clsx from "clsx";
import { CheckCircle2, XCircle } from "lucide-react";
import { RichText } from "../ui/RichText";

/** Accessible radio-group for multiple choice. `order` maps display position -> original index. */
export function McqOptions({
  name,
  options,
  order,
  selected,
  onSelect,
  correct,
  disabled,
}: {
  name: string;
  options: string[];
  order?: number[];
  selected: number | undefined;
  onSelect: (originalIndex: number) => void;
  /** When set, show correctness feedback. */
  correct?: number;
  disabled?: boolean;
}) {
  const display = order ?? options.map((_, i) => i);
  // Decide once per question so all options share one font: code-like options in mono.
  const codeLike = options.every((o) => o.includes("\n") || (o.length <= 40 && /[=()'"[\]+*/%<>]|^\s*-?\d/.test(o)));
  const reveal = correct !== undefined;
  return (
    <div role="radiogroup" aria-label="Answer options" className="grid gap-2">
      {display.map((orig, pos) => {
        const isSel = selected === orig;
        const isRight = reveal && orig === correct;
        const isWrong = reveal && isSel && orig !== correct;
        const text = options[orig];
        const multiline = text.includes("\n");
        return (
          <label
            key={orig}
            data-option={orig}
            className={clsx(
              "flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors",
              disabled && "cursor-default",
              isRight ? "border-success/60 bg-success-soft" : isWrong ? "border-danger/60 bg-danger-soft" : isSel ? "border-primary bg-primary-soft" : "border-line bg-surface-2 hover:border-line-strong",
            )}
          >
            <input
              type="radio"
              name={name}
              className="mt-1 accent-[var(--primary)]"
              checked={isSel}
              disabled={disabled}
              onChange={() => onSelect(orig)}
            />
            <span className="mt-0.5 w-5 shrink-0 font-semibold text-subtle">{String.fromCharCode(65 + pos)}.</span>
            <span className="min-w-0 flex-1">
              {multiline || codeLike ? (
                <code className="font-mono text-[13px] whitespace-pre-wrap text-ink">{text}</code>
              ) : (
                <RichText text={text} className="text-ink" />
              )}
            </span>
            {isRight && <CheckCircle2 size={18} className="shrink-0 text-success" aria-label="Correct answer" />}
            {isWrong && <XCircle size={18} className="shrink-0 text-danger" aria-label="Your answer (incorrect)" />}
          </label>
        );
      })}
    </div>
  );
}
