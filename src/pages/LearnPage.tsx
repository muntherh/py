import { Link } from "react-router-dom";
import { CheckCircle2, Circle, ArrowRight, Info } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { SourceCitation } from "../components/SourceCitation";
import { TOPICS, SOURCE_FILES } from "../data/sources";
import { lessonsForTopic } from "../lib/analytics";
import { useProgress } from "../store/progressStore";
import { TOPIC_STYLE } from "../lib/topicStyle";
import clsx from "clsx";

export function LearnPage() {
  const completed = useProgress((s) => s.completedLessons);
  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader
        eyebrow="Learn"
        title="Lessons"
        description="Study each topic in order. Every lesson explains the slides in simple English, shows runnable examples with real output, lists common mistakes, and links to the exact slides it is based on."
      />
      <p className="flex gap-2 rounded-xl border border-line bg-surface-2 p-3 text-sm text-muted">
        <Info size={16} className="mt-0.5 shrink-0 text-accent-text" />
        Topic 1 (Introduction) was not among the supplied files, so it is not included. Topic 4 covers slides 1–18 only (up to the “Infinite loop” section).
      </p>
      {TOPICS.map((t) => {
        const lessons = lessonsForTopic(t.id);
        const done = lessons.filter((l) => completed[l.id]).length;
        const next = lessons.find((l) => !completed[l.id]) ?? lessons[0];
        const st = TOPIC_STYLE[t.id];
        return (
          <section key={t.id} className="card p-5" aria-labelledby={`topic-${t.id}`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <span className={clsx("chip border-transparent", st.chip)}>Topic {t.number}</span>
                <h2 id={`topic-${t.id}`} className="mt-2 text-2xl font-bold">
                  {t.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{t.description}</p>
              </div>
              {next && (
                <Link to={`/learn/${next.id}`} className="btn-primary shrink-0">
                  {done === 0 ? "Start" : done === lessons.length ? "Review" : "Continue"} <ArrowRight size={15} />
                </Link>
              )}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <ProgressBar value={done} max={lessons.length || 1} label={`Topic ${t.number} lessons completed`} color={st.color} />
              <span className="shrink-0 text-xs text-muted tabular-nums">
                {done}/{lessons.length}
              </span>
            </div>
            <ol className="mt-4 grid gap-2 md:grid-cols-2">
              {lessons.map((l, i) => (
                <li key={l.id}>
                  <Link to={`/learn/${l.id}`} className="flex items-center gap-3 rounded-xl border border-transparent bg-surface-2 px-3 py-2.5 text-sm transition-colors hover:border-line-strong hover:bg-surface">
                    {completed[l.id] ? <CheckCircle2 size={18} className="shrink-0 text-success" aria-label="Completed" /> : <Circle size={18} className="shrink-0 text-subtle" aria-label="Not completed" />}
                    <span className={clsx("grid h-6 w-6 shrink-0 place-items-center rounded-lg text-[11px] font-bold tabular-nums", st.chip)}>{i + 1}</span>
                    <span className="min-w-0 flex-1 truncate text-ink">{l.title}</span>
                  </Link>
                </li>
              ))}
              {lessons.length === 0 && <li className="text-sm text-muted">Lessons for this topic are being prepared.</li>}
            </ol>
            <SourceCitation className="mt-4" refs={[{ file: t.sourceFile, units: SOURCE_FILES[t.sourceFile].inScope.flatMap((r) => Array.from({ length: r.to - r.from + 1 }, (_, k) => r.from + k)) }]} />
          </section>
        );
      })}
    </div>
  );
}
