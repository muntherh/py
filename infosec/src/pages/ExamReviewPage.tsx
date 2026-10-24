import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { CheckCircle2, CircleDashed, MinusCircle, RotateCcw, XCircle } from "lucide-react";
import { cryptoLabLink, QuestionMeta } from "../components/questions/PracticeCard";
import { QuestionView } from "../components/questions/QuestionView";
import { SourceCitation } from "../components/SourceCitation";
import { ProgressBar, ProgressRing } from "../components/ui/ProgressBar";
import { RichText } from "../components/ui/RichText";
import { TOPIC_BY_ID, UNITS } from "../data/course";
import { BLUEPRINT, formatDuration } from "../exam/engine";
import { UNIT_COLOR } from "../lib/unitStyle";
import { useExams } from "../store/examStore";
import { NotFoundPage } from "./NotFoundPage";

type FilterKey = "all" | "wrong" | "correct";

export function ExamReviewPage() {
  const { attemptId = "" } = useParams();
  const a = useExams((s) => s.attempts.find((x) => x.id === attemptId));
  const [filter, setFilter] = useState<FilterKey>("all");
  if (!a) return <NotFoundPage />;
  if (!a.result) return <Navigate to={`/exams/attempt/${a.id}`} replace />;
  const r = a.result;
  const byId = Object.fromEntries(r.items.map((x) => [x.qid, x]));
  const topics = Object.entries(r.byTopic).sort((x, y) => x[1].earned / x[1].max - y[1].earned / y[1].max);
  const weak = topics.filter(([, b]) => b.earned / b.max < 0.6);

  return (
    <div className="space-y-8">
      <section className="card grid gap-6 p-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-center">
        <ProgressRing value={r.score} max={20} size={132} stroke={12} color={r.percentage >= 50 ? "var(--success)" : "var(--danger)"} label={`Score ${r.score} out of 20`}>
          <div>
            <p className="font-display text-3xl font-bold">{r.score}</p>
            <p className="text-xs text-subtle">out of 20</p>
          </div>
        </ProgressRing>
        <div className="space-y-2">
          <p className="text-xs font-bold tracking-[0.12em] text-electric uppercase">Result</p>
          <h1 className="font-display text-2xl font-bold">{a.title}</h1>
          <p className="text-sm text-muted">
            {r.percentage}% · time used {formatDuration(r.timeSpentMs)} of {a.durationMinutes} min{a.autoSubmitted ? " · auto-submitted when time ran out" : ""}
          </p>
          <div className="flex flex-wrap gap-3 pt-1 text-sm">
            <span className="flex items-center gap-1 text-success-text"><CheckCircle2 size={15} /> {r.items.filter((i) => i.status === "correct").length} correct</span>
            <span className="flex items-center gap-1 text-warning-text"><MinusCircle size={15} /> {r.items.filter((i) => i.status === "partial").length} partial</span>
            <span className="flex items-center gap-1 text-danger-text"><XCircle size={15} /> {r.items.filter((i) => i.status === "incorrect").length} incorrect</span>
            <span className="flex items-center gap-1 text-subtle"><CircleDashed size={15} /> {r.items.filter((i) => i.status === "unanswered").length} unanswered</span>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <Link to="/exams" className="btn-secondary btn-sm"><RotateCcw size={14} /> Another paper</Link>
            <Link to="/mistakes" className="btn-ghost btn-sm">Mistake notebook</Link>
            {weak.length > 0 && <Link to="/practice?mode=weak" className="btn-primary btn-sm">Practise weak topics</Link>}
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-3 font-display text-lg font-bold">By chapter / lab</h2>
          <ul className="space-y-3">
            {UNITS.filter((u) => r.byUnit[u.id]).map((u) => {
              const b = r.byUnit[u.id]!;
              return (
                <li key={u.id} className="space-y-1 text-sm">
                  <div className="flex justify-between gap-2"><span>{u.short} · {u.title}</span><span className="font-mono">{b.earned}/{b.max}</span></div>
                  <ProgressBar value={b.earned} max={b.max} label={`${u.title} score`} color={UNIT_COLOR[u.id]} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="card p-5">
          <h2 className="mb-3 font-display text-lg font-bold">By section</h2>
          <ul className="space-y-3">
            {BLUEPRINT.map((s) => {
              const b = r.bySection[s.key];
              if (!b) return null;
              return (
                <li key={s.key} className="space-y-1 text-sm">
                  <div className="flex justify-between gap-2"><span>{s.title}</span><span className="font-mono">{b.earned}/{b.max}</span></div>
                  <ProgressBar value={b.earned} max={b.max} label={`${s.title} score`} />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="card p-5">
        <h2 className="mb-3 font-display text-lg font-bold">Topic-by-topic performance</h2>
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr><th>Topic</th><th>Marks</th><th>%</th><th></th></tr>
            </thead>
            <tbody>
              {topics.map(([t, b]) => {
                const pct = Math.round((b.earned / b.max) * 100);
                return (
                  <tr key={t}>
                    <td>{TOPIC_BY_ID[t]?.title ?? t}</td>
                    <td className="font-mono">{b.earned}/{b.max}</td>
                    <td className={clsx("font-mono", pct < 60 ? "text-danger-text" : "text-success-text")}>{pct}%</td>
                    <td><Link to={`/learn/${t}`} className="text-xs text-primary-text hover:underline">Lesson</Link> · <Link to={`/practice?topic=${t}`} className="text-xs text-primary-text hover:underline">Practise</Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-display text-xl font-bold">Detailed answer review</h2>
          <div className="flex gap-1.5" role="radiogroup" aria-label="Filter review">
            {(["all", "wrong", "correct"] as FilterKey[]).map((f) => (
              <button key={f} role="radio" aria-checked={filter === f} className={filter === f ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => setFilter(f)}>
                {f === "all" ? "All" : f === "wrong" ? "Lost marks" : "Full marks"}
              </button>
            ))}
          </div>
        </div>
        {a.items.map((it, i) => {
          const res = byId[it.question.id];
          if (filter === "wrong" && res.status === "correct") return null;
          if (filter === "correct" && res.status !== "correct") return null;
          const lab = cryptoLabLink(it.question);
          return (
            <article key={it.question.id} className={clsx("card space-y-3 border-l-4 p-5", res.status === "correct" ? "border-l-success" : res.status === "partial" ? "border-l-warning" : "border-l-danger")}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-display text-sm font-bold">Question {i + 1} · <span className="font-mono">{res.earned}/{res.marks}</span></p>
                <QuestionMeta q={it.question} />
              </div>
              {it.question.kind !== "fill" && <h3 className="font-semibold leading-relaxed"><RichText text={it.question.prompt} /></h3>}
              <QuestionView q={it.question} value={a.answers[it.question.id]} onChange={() => undefined} disabled reveal display={{ optionOrder: it.optionOrder, rights: it.rights, scrambled: it.scrambled }} idPrefix={`rev-${i}`} />
              {res.status !== "correct" && res.feedback.length > 0 && (
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                  {res.feedback.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              )}
              <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
                <p className="label mb-1">Explanation</p>
                <RichText text={it.question.explanation} />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <SourceCitation refs={it.question.sources} compact />
                {lab && <Link to={lab} className="text-xs text-primary-text hover:underline">Open every step in the Crypto Lab →</Link>}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
