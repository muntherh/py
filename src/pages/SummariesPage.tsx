import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { AlertTriangle, ArrowRight, Printer } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { SourceCitation } from "../components/SourceCitation";
import { RichText } from "../components/ui/RichText";
import { DifficultyChip } from "../components/ui/Chip";
import { CONCEPTS } from "../data/concepts";
import { TOPICS } from "../data/sources";
import type { TopicId } from "../data/types";
import { lessonForConcept, lessonsForTopic } from "../lib/analytics";

export function SummariesPage() {
  const [topic, setTopic] = useState<TopicId>("t2");
  const t = TOPICS.find((x) => x.id === topic)!;
  const concepts = CONCEPTS.filter((c) => c.topicId === topic);
  const keyPoints = lessonsForTopic(topic).flatMap((l) => l.keyPoints.map((k) => ({ k, l })));
  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader
        eyebrow="Topic Summaries"
        title="Revision sheets"
        description="A complete summary of every concept in the permitted material, with the slides it comes from. Use it for quick revision before an exam."
        actions={
          <button className="btn-secondary" onClick={() => window.print()}>
            <Printer size={15} /> Print
          </button>
        }
      />
      <div role="tablist" aria-label="Topics" className="flex flex-wrap gap-1 rounded-2xl border border-line bg-surface p-1 print:hidden">
        {TOPICS.map((x) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={topic === x.id}
            onClick={() => setTopic(x.id)}
            className={clsx("rounded-xl px-3.5 py-2 text-sm font-medium transition-colors", topic === x.id ? "bg-primary-soft text-primary-text" : "text-muted hover:text-ink")}
          >
            Topic {x.number}: {x.shortTitle}
          </button>
        ))}
      </div>
      <section className="card p-5">
        <p className="label text-primary-text">Topic {t.number}</p>
        <h2 className="text-xl font-semibold">{t.title}</h2>
        <p className="mt-1 text-sm text-muted">{t.description}</p>
        {topic === "t4" && <p className="mt-2 text-sm text-warning-text">Scope: slides 1–18 only (up to, not including, the “Infinite loop” section on slide 19).</p>}
      </section>
      <div className="grid gap-4 lg:grid-cols-2">
        {concepts.map((c) => {
          const lesson = lessonForConcept(c.id);
          return (
            <article key={c.id} className="card flex min-w-0 flex-col gap-3 p-5 break-inside-avoid">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-ink">{c.title}</h3>
                <DifficultyChip difficulty={c.difficulty} />
              </div>
              <p className="text-sm leading-relaxed text-muted">
                <RichText text={c.summary} />
              </p>
              {c.mistakes.length > 0 && (
                <ul className="space-y-1 text-sm">
                  {c.mistakes.map((m) => (
                    <li key={m} className="flex gap-2 text-muted">
                      <AlertTriangle size={14} className="mt-0.5 shrink-0 text-warning" /> <RichText text={m} />
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto flex min-w-0 flex-wrap items-center justify-between gap-2 pt-1">
                <SourceCitation refs={c.sources} compact />
                {lesson && (
                  <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm print:hidden">
                    Lesson <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
      <section className="card p-5">
        <h2 className="mb-3 font-semibold">All key points for Topic {t.number}</h2>
        <ul className="grid gap-x-6 gap-y-1.5 text-sm text-muted md:grid-cols-2">
          {keyPoints.map(({ k, l }, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                <RichText text={k} /> <span className="text-xs text-subtle">({l.title})</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
