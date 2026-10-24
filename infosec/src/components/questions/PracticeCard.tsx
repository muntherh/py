import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { CheckCircle2, FlaskConical, Lightbulb, RotateCcw, XCircle } from "lucide-react";
import { TOPIC_BY_ID } from "../../data/course";
import type { AnswerValue, Grade, Question } from "../../data/types";
import { grade } from "../../grading/grade";
import { useProgress } from "../../store/progressStore";
import { SourceCitation } from "../SourceCitation";
import { Chip, DifficultyChip, KIND_LABEL, OriginChip, STYLE_LABEL, UnitChip } from "../ui/Chip";
import { RichText } from "../ui/RichText";
import { QuestionView } from "./QuestionView";

export function answerText(q: Question, a: AnswerValue | undefined): string {
  if (!a) return "(no answer)";
  switch (a.kind) {
    case "mcq":
      return q.kind === "mcq" ? q.options[a.choice] ?? "" : "";
    case "tf":
      return a.value ? "True" : "False";
    case "fill":
      return a.values.join(" | ");
    case "match":
      return q.kind === "match" ? q.pairs.map((p, i) => `${p[0]} → ${a.map[i] ?? "?"}`).join("; ") : "";
    case "order":
      return a.items.join(" → ");
    case "short":
    case "crypto":
      return a.text;
  }
}

export function cryptoLabLink(q: Question): string | null {
  if (q.kind !== "crypto") return null;
  const s = q.spec;
  const p = new URLSearchParams({ cipher: s.cipher, mode: s.mode, text: s.text });
  if (s.cipher === "caesar") p.set("key", String(s.key));
  if (s.cipher === "vigenere") p.set("key", s.key);
  if (s.cipher === "rail") p.set("depth", String(s.depth));
  if (s.cipher === "route") {
    p.set("rows", String(s.rows));
    p.set("cols", String(s.cols));
    p.set("fill", s.fill);
    p.set("route", s.route);
  }
  return `/crypto?${p.toString()}`;
}

export function QuestionMeta({ q }: { q: Question }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <UnitChip unitId={q.unitId} />
      <Chip>{KIND_LABEL[q.kind]}</Chip>
      {q.style !== "concept" && <Chip>{STYLE_LABEL[q.style]}</Chip>}
      <DifficultyChip difficulty={q.difficulty} />
      <OriginChip origin={q.origin} />
    </div>
  );
}

export function FeedbackPanel({ q, g }: { q: Question; g: Grade }) {
  const partial = !g.correct && g.fraction > 0;
  return (
    <div className={clsx("animate-fade-up space-y-3 rounded-2xl border p-4", g.correct ? "border-success/50 bg-success-soft" : partial ? "border-warning/50 bg-warning-soft" : "border-danger/50 bg-danger-soft")} role="status" aria-live="polite">
      <p className="flex items-center gap-2 font-semibold">
        {g.correct ? <CheckCircle2 size={20} className="text-success" /> : <XCircle size={20} className={partial ? "text-warning" : "text-danger"} />}
        {g.correct ? "Correct" : partial ? `Partly correct (${Math.round(g.fraction * 100)}%)` : "Not quite"}
      </p>
      {!g.correct && g.feedback.length > 0 && (
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {g.feedback.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}
      <div className="text-sm leading-relaxed">
        <p className="label mb-1 flex items-center gap-1.5">
          <Lightbulb size={13} /> Explanation
        </p>
        <RichText text={q.explanation} />
      </div>
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <span>Learning objective: {q.objective}</span>
      </div>
      <SourceCitation refs={q.sources} />
    </div>
  );
}

/** One self-contained practice question with immediate, deterministic feedback. */
export function PracticeCard({ q, index, total, onNext, from = "practice" }: { q: Question; index?: number; total?: number; onNext?: () => void; from?: "practice" | "exam" | "crypto" }) {
  const [value, setValue] = useState<AnswerValue | undefined>();
  const [result, setResult] = useState<Grade | null>(null);
  const record = useProgress((s) => s.recordAnswer);
  const lab = cryptoLabLink(q);

  const check = () => {
    const g = grade(q, value ?? (q.kind === "order" ? undefined : undefined));
    setResult(g);
    record(q, g.fraction, g.correct, answerText(q, value), from);
  };

  return (
    <article className="card space-y-4 p-5 sm:p-6" aria-label={`Question ${index !== undefined ? index + 1 : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <QuestionMeta q={q} />
        {index !== undefined && total !== undefined && (
          <span className="font-mono text-xs text-subtle">
            {index + 1} / {total}
          </span>
        )}
      </div>
      <p className="text-xs text-subtle">{TOPIC_BY_ID[q.topicId]?.title}</p>
      {q.kind !== "fill" && (
        <h2 className="text-[17px] leading-relaxed font-semibold">
          <RichText text={q.prompt} />
        </h2>
      )}
      <QuestionView q={q} value={value} onChange={(v) => !result && setValue(v)} disabled={!!result} reveal={!!result} />
      <div className="flex flex-wrap items-center gap-2">
        {!result ? (
          <>
            <button className="btn-primary" onClick={check} disabled={!value}>
              Check answer
            </button>
            {lab && (
              <Link to={lab} className="btn-secondary" title="Open a step-by-step worksheet for this problem">
                <FlaskConical size={16} /> Work it out in the Crypto Lab
              </Link>
            )}
            {!value && <span className="text-xs text-subtle">Answer first, then check.</span>}
          </>
        ) : (
          <>
            {onNext && (
              <button className="btn-primary" onClick={onNext} autoFocus>
                Next question
              </button>
            )}
            <button
              className="btn-secondary"
              onClick={() => {
                setResult(null);
                setValue(undefined);
              }}
            >
              <RotateCcw size={15} /> Try again
            </button>
            {lab && (
              <Link to={lab} className="btn-ghost">
                <FlaskConical size={16} /> See every step
              </Link>
            )}
          </>
        )}
      </div>
      {result && <FeedbackPanel q={q} g={result} />}
    </article>
  );
}
