import { useMemo } from "react";
import clsx from "clsx";
import { ArrowDown, ArrowUp, Check, X } from "lucide-react";
import type { AnswerValue, Question } from "../../data/types";
import { mulberry32, seededShuffle } from "../../exam/engine";
import { RichText } from "../ui/RichText";

export interface DisplayOrder {
  optionOrder?: number[];
  rights?: string[];
  scrambled?: string[];
}

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** Stable display order for practice: seeded by the question id, never already solved. */
export function defaultDisplay(q: Question): DisplayOrder {
  const rand = mulberry32(hash(q.id));
  if (q.kind === "match") return { rights: seededShuffle([...new Set(q.pairs.map((p) => p[1]))], rand) };
  if (q.kind === "order") {
    let sc = seededShuffle(q.items, rand);
    for (let i = 0; i < 6 && sc.every((x, j) => x === q.items[j]); i++) sc = seededShuffle(q.items, rand);
    return { scrambled: sc };
  }
  if (q.kind === "mcq") return { optionOrder: seededShuffle(q.options.map((_, i) => i), rand) };
  return {};
}

function blankParts(prompt: string): string[] {
  return prompt.split("___");
}

/**
 * Renders the answer area for one question.
 * `reveal` shows correct/incorrect marks (practice feedback and exam review); `disabled` locks input.
 */
export function QuestionView({
  q,
  value,
  onChange,
  disabled,
  reveal,
  display,
  idPrefix = "q",
}: {
  q: Question;
  value: AnswerValue | undefined;
  onChange: (v: AnswerValue | undefined) => void;
  disabled?: boolean;
  reveal?: boolean;
  display?: DisplayOrder;
  idPrefix?: string;
}) {
  const disp = useMemo(() => ({ ...defaultDisplay(q), ...display }), [q, display]);
  const base = `${idPrefix}-${q.id}`;

  if (q.kind === "mcq") {
    const order = disp.optionOrder ?? q.options.map((_, i) => i);
    const chosen = value?.kind === "mcq" ? value.choice : undefined;
    return (
      <fieldset className="space-y-2">
        <legend className="sr-only">Choose one answer</legend>
        {order.map((orig, pos) => {
          const isChosen = chosen === orig;
          const isRight = orig === q.answer;
          return (
            <label
              key={orig}
              className={clsx(
                "flex cursor-pointer items-start gap-3 rounded-xl border px-3.5 py-3 text-[15px] transition-colors",
                disabled && "cursor-default",
                reveal && isRight ? "border-success bg-success-soft" : reveal && isChosen ? "border-danger bg-danger-soft" : isChosen ? "border-primary bg-primary-soft" : "border-line bg-surface-2 hover:border-line-strong",
              )}
            >
              <input type="radio" name={base} className="mt-1 accent-[var(--primary)]" checked={isChosen} disabled={disabled} onChange={() => onChange({ kind: "mcq", choice: orig })} />
              <span className="font-mono text-xs font-bold text-subtle mt-0.5">{String.fromCharCode(65 + pos)}</span>
              <span className="min-w-0 flex-1">{q.options[orig]}</span>
              {reveal && isRight && <Check size={18} className="text-success shrink-0" aria-label="Correct answer" />}
              {reveal && isChosen && !isRight && <X size={18} className="text-danger shrink-0" aria-label="Your answer (incorrect)" />}
            </label>
          );
        })}
      </fieldset>
    );
  }

  if (q.kind === "tf") {
    const chosen = value?.kind === "tf" ? value.value : undefined;
    return (
      <div className="grid grid-cols-2 gap-2 sm:max-w-sm" role="radiogroup" aria-label="True or false">
        {[true, false].map((v) => {
          const isChosen = chosen === v;
          const isRight = q.answer === v;
          return (
            <button
              key={String(v)}
              type="button"
              role="radio"
              aria-checked={isChosen}
              disabled={disabled}
              onClick={() => onChange({ kind: "tf", value: v })}
              className={clsx(
                "btn border text-[15px]",
                reveal && isRight ? "border-success bg-success-soft text-success-text" : reveal && isChosen ? "border-danger bg-danger-soft text-danger-text" : isChosen ? "border-primary bg-primary-soft text-primary-text" : "border-line bg-surface-2 text-ink hover:bg-surface-3",
              )}
            >
              {v ? "True" : "False"}
            </button>
          );
        })}
      </div>
    );
  }

  if (q.kind === "fill") {
    const vals = value?.kind === "fill" ? value.values : [];
    const parts = blankParts(q.prompt);
    return (
      <div className="space-y-3">
        <p className="text-[15px] leading-[2.4]">
          {parts.map((p, i) => (
            <span key={i}>
              <RichText text={p} />
              {i < q.blanks.length && (
                <input
                  aria-label={`Blank ${i + 1}`}
                  className={clsx(
                    "input mx-1 inline-block w-36 py-1 align-baseline",
                    reveal && (q.blanks[i].some((a) => a.toLowerCase().trim() === (vals[i] ?? "").toLowerCase().trim()) ? "border-success" : "border-danger"),
                  )}
                  value={vals[i] ?? ""}
                  disabled={disabled}
                  autoComplete="off"
                  spellCheck={false}
                  onChange={(e) => {
                    const next = [...vals];
                    while (next.length < q.blanks.length) next.push("");
                    next[i] = e.target.value;
                    onChange(next.some((x) => x.trim()) ? { kind: "fill", values: next } : undefined);
                  }}
                />
              )}
            </span>
          ))}
        </p>
        {reveal && <p className="text-sm text-muted">Accepted: {q.blanks.map((b, i) => `(${i + 1}) ${b.join(" / ")}`).join("   ")}</p>}
      </div>
    );
  }

  if (q.kind === "match") {
    const map = value?.kind === "match" ? value.map : {};
    const rights = disp.rights ?? [...new Set(q.pairs.map((p) => p[1]))];
    return (
      <div className="space-y-2">
        {q.pairs.map(([left, right], i) => {
          const chosen = map[i] ?? "";
          const ok = chosen === right;
          return (
            <div key={i} className={clsx("grid gap-2 rounded-xl border p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center", reveal ? (ok ? "border-success bg-success-soft" : "border-danger bg-danger-soft") : "border-line bg-surface-2")}>
              <label htmlFor={`${base}-m${i}`} className="text-[15px] font-medium">{left}</label>
              <div>
                <select
                  id={`${base}-m${i}`}
                  className="input"
                  value={chosen}
                  disabled={disabled}
                  onChange={(e) => {
                    const next = { ...map, [i]: e.target.value };
                    if (!e.target.value) delete next[i];
                    onChange(Object.keys(next).length ? { kind: "match", map: next } : undefined);
                  }}
                >
                  <option value="">Choose…</option>
                  {rights.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
                {reveal && !ok && <p className="mt-1 text-sm text-success-text">Correct: {right}</p>}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (q.kind === "order") {
    const items = value?.kind === "order" ? value.items : (disp.scrambled ?? q.items);
    const move = (i: number, d: number) => {
      const j = i + d;
      if (j < 0 || j >= items.length) return;
      const next = [...items];
      [next[i], next[j]] = [next[j], next[i]];
      onChange({ kind: "order", items: next });
    };
    return (
      <div className="space-y-2">
        <p className="text-sm text-muted">Use the arrows to move each step into the correct position.</p>
        <ol className="space-y-2">
          {items.map((it, i) => {
            const ok = q.items[i] === it;
            return (
              <li key={it} className={clsx("flex items-center gap-2 rounded-xl border px-3 py-2", reveal ? (ok ? "border-success bg-success-soft" : "border-danger bg-danger-soft") : "border-line bg-surface-2")}>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface-3 font-mono text-xs font-bold">{i + 1}</span>
                <span className="min-w-0 flex-1 text-[15px]">{it}</span>
                {!disabled && (
                  <span className="flex shrink-0 gap-1">
                    <button type="button" className="btn-ghost btn-sm" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move “${it}” up`}>
                      <ArrowUp size={16} />
                    </button>
                    <button type="button" className="btn-ghost btn-sm" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label={`Move “${it}” down`}>
                      <ArrowDown size={16} />
                    </button>
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        {value?.kind !== "order" && !disabled && <p className="text-xs text-subtle">Not answered yet — move any step to record your order.</p>}
      </div>
    );
  }

  if (q.kind === "short") {
    const text = value?.kind === "short" ? value.text : "";
    return (
      <div className="space-y-2">
        <label htmlFor={`${base}-short`} className="sr-only">Your answer</label>
        <textarea
          id={`${base}-short`}
          className="input min-h-28 text-[15px] leading-relaxed"
          placeholder="Write your answer in your own words, as you would on paper…"
          value={text}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value.trim() ? { kind: "short", text: e.target.value } : undefined)}
        />
        {reveal && (
          <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
            <p className="label mb-1">Model answer</p>
            <p className="leading-relaxed">{q.modelAnswer}</p>
          </div>
        )}
      </div>
    );
  }

  // crypto
  const text = value?.kind === "crypto" ? value.text : "";
  return (
    <div className="space-y-2">
      <label htmlFor={`${base}-crypto`} className="text-sm text-muted">Final answer (letters only; spaces are ignored)</label>
      <input
        id={`${base}-crypto`}
        className={clsx("input font-mono text-lg tracking-[0.2em] uppercase", reveal && (text.toUpperCase().replace(/[^A-Z]/g, "") === q.answer || (q.spec.mode === "decrypt" && text.toUpperCase().replace(/[^A-Z]/g, "") === q.answer.replace(/X+$/, "")) ? "border-success" : "border-danger"))}
        value={text}
        disabled={disabled}
        autoComplete="off"
        spellCheck={false}
        onChange={(e) => onChange(e.target.value.trim() ? { kind: "crypto", text: e.target.value } : undefined)}
      />
      {reveal && (
        <p className="text-sm">
          Correct answer: <span className="font-mono font-bold tracking-widest text-success-text">{q.answer}</span>
          {q.spec.mode === "decrypt" && /X$/.test(q.answer) && <span className="text-muted"> (the final X is padding)</span>}
        </p>
      )}
    </div>
  );
}
