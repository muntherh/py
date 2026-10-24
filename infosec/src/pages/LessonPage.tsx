import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, Languages, ListChecks, Star } from "lucide-react";
import { PracticeCard } from "../components/questions/PracticeCard";
import { SourceCitation } from "../components/SourceCitation";
import { UnitChip } from "../components/ui/Chip";
import { RichText } from "../components/ui/RichText";
import { Visual } from "../components/visuals";
import { UNIT_BY_ID } from "../data/course";
import { LESSONS, LESSON_BY_ID } from "../data/lessons";
import { QUESTIONS } from "../data/questions";
import { useProgress } from "../store/progressStore";
import { useSettings } from "../store/settingsStore";
import { NotFoundPage } from "./NotFoundPage";

export function LessonPage() {
  const { lessonId = "" } = useParams();
  return <LessonView key={lessonId} lessonId={lessonId} />;
}

function LessonView({ lessonId }: { lessonId: string }) {
  const lesson = LESSON_BY_ID[lessonId];
  const showArabic = useSettings((s) => s.showArabic);
  const setSettings = useSettings((s) => s.set);
  const done = useProgress((s) => !!s.completedLessons[lessonId]);
  const markLesson = useProgress((s) => s.markLesson);
  const [openAr, setOpenAr] = useState<Record<number, boolean>>({});
  const checks = useMemo(() => QUESTIONS.filter((q) => q.topicId === lesson?.topicId && (q.kind === "mcq" || q.kind === "tf")).slice(0, 3), [lesson]);
  const [checkIndex, setCheckIndex] = useState(0);

  if (!lesson) return <NotFoundPage />;
  const idx = LESSONS.indexOf(lesson);
  const prev = LESSONS[idx - 1];
  const next = LESSONS[idx + 1];
  const unit = UNIT_BY_ID[lesson.unitId];

  return (
    <article className="mx-auto max-w-3xl">
      <Link to={`/learn#${unit.id}`} className="mb-4 inline-flex items-center gap-1 text-sm text-muted hover:text-ink">
        <ArrowLeft size={15} /> {unit.kind === "chapter" ? `Chapter ${unit.number}` : `Lab ${unit.number}`} · {unit.title}
      </Link>
      <header className="mb-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <UnitChip unitId={lesson.unitId} />
          {done && <span className="chip border-transparent bg-success-soft text-success-text"><CheckCircle2 size={12} /> Completed</span>}
        </div>
        <h1 className="font-display text-3xl leading-tight font-bold">{lesson.title}</h1>
        <p className="mt-2 text-[15px] text-muted">{lesson.summary}</p>
        <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 py-2 text-sm">
          <input type="checkbox" className="accent-[var(--primary)]" checked={showArabic} onChange={(e) => setSettings({ showArabic: e.target.checked })} />
          <Languages size={16} /> Show Arabic explanations <span lang="ar" dir="rtl">(الشرح بالعربية)</span>
        </label>
      </header>

      <div className="space-y-6">
        {lesson.blocks.map((b, i) => (
          <section key={i} className="card space-y-3 p-5 sm:p-6" aria-labelledby={`b-${i}`}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 id={`b-${i}`} className="font-display text-xl font-bold">{b.heading}</h2>
              <SourceCitation refs={[b.source]} compact />
            </div>
            {b.body.map((p, j) => (
              <p key={j} className="text-[15.5px] leading-relaxed text-muted">
                <RichText text={p} />
              </p>
            ))}
            {b.bullets && (
              <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-muted marker:text-electric">
                {b.bullets.map((x, j) => (
                  <li key={j}><RichText text={x} /></li>
                ))}
              </ul>
            )}
            {b.table && (
              <div className="overflow-x-auto rounded-xl border border-line">
                <table className="data-table">
                  <thead>
                    <tr>{b.table.headers.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.table.rows.map((r, j) => (
                      <tr key={j}>{r.map((c, k) => <td key={k} className={k === 0 ? "font-semibold text-ink" : "text-muted"}><RichText text={c} /></td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {b.visual && <Visual name={b.visual} />}
            {b.ar && (showArabic || openAr[i]) ? (
              <div lang="ar" dir="rtl" className="rounded-xl border border-line bg-surface-2 p-4 text-[15px] text-ink">
                {b.ar}
              </div>
            ) : (
              b.ar && (
                <button className="btn-ghost btn-sm" onClick={() => setOpenAr({ ...openAr, [i]: true })}>
                  <Languages size={14} /> <span lang="ar" dir="rtl">عرض الشرح بالعربية</span>
                </button>
              )
            )}
          </section>
        ))}

        <section className="card space-y-3 border-primary/40 p-5" aria-labelledby="kp">
          <h2 id="kp" className="flex items-center gap-2 font-display text-lg font-bold"><Star size={18} className="text-electric" /> Key points to memorise</h2>
          <ul className="space-y-1.5 text-[15px]">
            {lesson.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2"><span className="text-electric">▸</span><RichText text={k} /></li>
            ))}
          </ul>
        </section>

        {lesson.traps && (
          <section className="space-y-2 rounded-2xl border border-warning/40 bg-warning-soft p-5" aria-labelledby="traps">
            <h2 id="traps" className="flex items-center gap-2 font-display text-lg font-bold text-warning-text"><AlertTriangle size={18} /> Exam traps</h2>
            <ul className="space-y-1.5 text-[15px]">
              {lesson.traps.map((t, i) => <li key={i}><RichText text={t} /></li>)}
            </ul>
          </section>
        )}

        {checks.length > 0 && (
          <section aria-labelledby="qc" className="space-y-3">
            <h2 id="qc" className="flex items-center gap-2 font-display text-lg font-bold"><ListChecks size={18} /> Quick check ({checkIndex + 1}/{checks.length})</h2>
            <PracticeCard key={checks[checkIndex].id} q={checks[checkIndex]} onNext={checkIndex < checks.length - 1 ? () => setCheckIndex(checkIndex + 1) : undefined} />
            <Link to={`/practice?topic=${lesson.topicId}`} className="text-sm text-primary-text hover:underline">All practice questions for this topic →</Link>
          </section>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <button className={done ? "btn-secondary" : "btn-primary"} onClick={() => markLesson(lesson.id, !done, lesson.title)}>
            <CheckCircle2 size={16} /> {done ? "Mark as not done" : "Mark lesson complete"}
          </button>
          <div className="flex flex-wrap gap-2">
            {prev && <Link to={`/learn/${prev.id}`} className="btn-ghost"><ArrowLeft size={15} /> Previous</Link>}
            {next && <Link to={`/learn/${next.id}`} className="btn-secondary">Next: {next.title.length > 28 ? next.title.slice(0, 28) + "…" : next.title} <ArrowRight size={15} /></Link>}
          </div>
        </div>
      </div>
    </article>
  );
}
