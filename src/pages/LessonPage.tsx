import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Lightbulb, Play, XCircle, BookMarked } from "lucide-react";
import { LESSON_MAP, LESSONS } from "../data/lessons/index";
import { PRACTICE_MCQ_MAP } from "../data/practice/mcq";
import { CONCEPT_MAP } from "../data/concepts";
import { topicById } from "../data/sources";
import type { Lesson, LessonExample, PracticeMcq } from "../data/types";
import { useProgress } from "../store/progressStore";
import { CodeBlock, TerminalBlock } from "../components/code/CodeBlock";
import { CodeRunner } from "../components/code/CodeRunner";
import { McqOptions } from "../components/questions/McqOptions";
import { SourceCitation } from "../components/SourceCitation";
import { RichText } from "../components/ui/RichText";
import { Chip, OriginChip } from "../components/ui/Chip";
import { EmptyState } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { lessonsForTopic } from "../lib/analytics";
import { EXERCISES } from "../data/practice/exercises";

export function LessonPage() {
  const { lessonId = "" } = useParams();
  const lesson = LESSON_MAP[lessonId];
  if (!lesson)
    return (
      <EmptyState title="Lesson not found">
        <Link to="/learn" className="text-primary-text underline">
          Back to lessons
        </Link>
      </EmptyState>
    );
  return <LessonView key={lesson.id} lesson={lesson} />;
}

function Section({ id, letter, title, children }: { id: string; letter: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 space-y-3" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="flex items-center gap-2.5 text-lg font-semibold">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary-soft text-xs font-bold text-primary-text">{letter}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function LessonView({ lesson }: { lesson: Lesson }) {
  const navigate = useNavigate();
  const completed = useProgress((s) => s.completedLessons);
  const markComplete = useProgress((s) => s.markLessonComplete);
  const visit = useProgress((s) => s.visitLesson);
  const [tryCode, setTryCode] = useState(lesson.tryIt.starterCode);
  useState(() => visit(lesson.id));

  const topic = topicById(lesson.topicId);
  const topicLessons = lessonsForTopic(lesson.topicId);
  const pos = topicLessons.findIndex((l) => l.id === lesson.id);
  const globalIdx = LESSONS.findIndex((l) => l.id === lesson.id);
  const prev = LESSONS[globalIdx - 1];
  const next = LESSONS[globalIdx + 1];
  const done = !!completed[lesson.id];
  const topicDone = topicLessons.filter((l) => completed[l.id]).length;
  const related = EXERCISES.filter((e) => e.conceptIds.some((c) => lesson.conceptIds.includes(c))).slice(0, 4);

  const toc = [
    ["explain", "Explanation"],
    ["key", "Key concepts"],
    ["examples", "Examples"],
    ["mistakes", "Common mistakes"],
    ["try", "Try it yourself"],
    ["check", "Knowledge check"],
    ["sources", "Sources"],
  ];

  return (
    <div className="grid gap-8 animate-fade-up xl:grid-cols-[minmax(0,1fr)_220px]">
      <article className="min-w-0 space-y-8">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <Link to="/learn" className="btn-ghost btn-sm">
              <ArrowLeft size={14} /> Lessons
            </Link>
            <span className="text-subtle">/</span>
            <span className="text-muted">
              Topic {topic.number}: {topic.title}
            </span>
          </div>
          <p className="label text-primary-text">
            Topic {topic.number} · Lesson {pos + 1} of {topicLessons.length}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{lesson.title}</h1>
          <div className="flex flex-wrap gap-1.5">
            {lesson.conceptIds.map((c) => (
              <Chip key={c} tone="primary">
                {CONCEPT_MAP[c]?.title ?? c}
              </Chip>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ProgressBar value={topicDone} max={topicLessons.length} label="Topic progress" tone="success" />
            <span className="shrink-0 text-xs text-muted">
              {topicDone}/{topicLessons.length} lessons done
            </span>
          </div>
          <SourceCitation refs={lesson.sources} />
        </div>

        <Section id="explain" letter="A" title="Explanation">
          <div className="space-y-5">
            {lesson.explanation.map((s, i) => (
              <div key={i} className="card space-y-2.5 p-5">
                <h3 className="font-semibold text-ink">{s.heading}</h3>
                {s.body.map((p, j) => (
                  <p key={j} className="text-[15px] leading-relaxed text-muted">
                    <RichText text={p} />
                  </p>
                ))}
                {s.bullets && (
                  <ul className="list-disc space-y-1 pl-5 text-[15px] text-muted marker:text-primary">
                    {s.bullets.map((b, j) => (
                      <li key={j}>
                        <RichText text={b} />
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[20rem] text-sm">
                      <thead>
                        <tr className="border-b border-line text-left">
                          {s.table.headers.map((h) => (
                            <th key={h} className="px-2 py-1.5 font-semibold text-ink">
                              <RichText text={h} />
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, r) => (
                          <tr key={r} className="border-b border-line/60">
                            {row.map((cell, c) => (
                              <td key={c} className="px-2 py-1.5 text-muted">
                                <RichText text={cell} />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {s.source && <SourceCitation refs={[s.source]} compact />}
              </div>
            ))}
          </div>
        </Section>

        <Section id="key" letter="B" title="Key concepts">
          <ul className="card grid gap-2 p-5 sm:grid-cols-2">
            {lesson.keyPoints.map((k, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-success" />
                <RichText text={k} />
              </li>
            ))}
          </ul>
        </Section>

        <Section id="examples" letter="C" title="Python examples, line by line">
          <div className="space-y-5">
            {lesson.examples.map((ex, i) => (
              <ExampleCard key={i} ex={ex} n={i + 1} />
            ))}
          </div>
        </Section>

        <Section id="mistakes" letter="D" title="Common mistakes">
          <div className="grid gap-4">
            {lesson.mistakes.map((m, i) => (
              <div key={i} className="card space-y-3 p-5">
                <h3 className="flex items-center gap-2 font-semibold">
                  <AlertTriangle size={16} className="text-warning" /> {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  <RichText text={m.explanation} />
                </p>
                {(m.wrong || m.right) && (
                  <div className="grid gap-3 md:grid-cols-2">
                    {m.wrong && (
                      <div>
                        <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-danger-text">
                          <XCircle size={13} /> Wrong
                        </p>
                        <CodeBlock code={m.wrong} title="Wrong" />
                      </div>
                    )}
                    {m.right && (
                      <div>
                        <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-success-text">
                          <CheckCircle2 size={13} /> Right
                        </p>
                        <CodeBlock code={m.right} title="Right" />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section id="try" letter="E" title="Try it yourself">
          <div className="card space-y-3 p-5">
            <p className="text-[15px] leading-relaxed text-ink">
              <RichText text={lesson.tryIt.prompt} />
            </p>
            {lesson.tryIt.inputsHint && <p className="text-sm text-muted">{lesson.tryIt.inputsHint}</p>}
            <CodeRunner code={tryCode} onChange={setTryCode} initialCode={lesson.tryIt.starterCode} ariaLabel="Try it yourself editor" minHeight="160px" />
            {related.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 border-t border-line pt-3 text-sm">
                <span className="text-subtle">Graded exercises on this lesson:</span>
                {related.map((e) => (
                  <Link key={e.id} to={`/lab/exercise/${e.id}`} className="chip border-line bg-surface-2 text-muted hover:text-ink">
                    {e.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section id="check" letter="F" title="Quick knowledge check">
          <div className="space-y-4">
            {lesson.quickCheck.map((qid) => {
              const q = PRACTICE_MCQ_MAP[qid];
              return q ? <QuickCheck key={qid} q={q} /> : null;
            })}
          </div>
        </Section>

        <Section id="sources" letter="G" title="Source references">
          <div className="card space-y-3 p-5">
            <SourceCitation refs={lesson.sources} compact />
            {lesson.sourceNotes && lesson.sourceNotes.length > 0 && (
              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <BookMarked size={15} className="text-accent-text" /> Notes about the slides
                </h3>
                <p className="text-xs text-subtle">Places where a slide differs from what real Python does, or is unclear. The lesson always shows real Python behaviour.</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
                  {lesson.sourceNotes.map((n, i) => (
                    <li key={i}>
                      <RichText text={n} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Section>

        <div className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold">{done ? "Lesson completed" : "Finished this lesson?"}</p>
            <p className="text-sm text-muted">Mark it complete to track your progress. You can undo this at any time.</p>
          </div>
          <button className={clsx(done ? "btn-secondary" : "btn-primary")} onClick={() => markComplete(lesson.id, !done, lesson.title)} data-testid="complete-lesson">
            <CheckCircle2 size={16} /> {done ? "Mark as not complete" : "Mark lesson complete"}
          </button>
        </div>

        <nav className="flex flex-wrap justify-between gap-2" aria-label="Lesson navigation">
          {prev ? (
            <button className="btn-secondary" onClick={() => navigate(`/learn/${prev.id}`)}>
              <ArrowLeft size={15} /> {prev.title}
            </button>
          ) : (
            <span />
          )}
          {next && (
            <button className="btn-primary" onClick={() => navigate(`/learn/${next.id}`)}>
              {next.title} <ArrowRight size={15} />
            </button>
          )}
        </nav>
      </article>

      <aside className="hidden xl:block">
        <nav className="sticky top-6 space-y-1 text-sm" aria-label="On this page">
          <p className="label mb-2">On this page</p>
          {toc.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => (e.preventDefault(), document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }))} className="block rounded-lg px-2 py-1 text-muted hover:bg-surface-2 hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

function ExampleCard({ ex, n }: { ex: LessonExample; n: number }) {
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState(ex.code);
  return (
    <div className="card space-y-3 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-semibold">
          Example {n}: {ex.title}
        </h3>
        <OriginChip origin={ex.origin} />
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <CodeBlock code={ex.code} />
        <div className="space-y-2">
          {ex.inputs && ex.inputs.length > 0 && (
            <p className="text-xs text-muted">
              Typed input: <span className="font-mono text-ink">{ex.inputs.map((x) => JSON.stringify(x)).join(", ")}</span>
            </p>
          )}
          <TerminalBlock title="Expected output (real Python)" text={ex.output} />
          {ex.raises && <p className="rounded-lg border border-danger/40 bg-danger-soft px-3 py-2 font-mono text-xs text-danger-text">{ex.raises}</p>}
        </div>
      </div>
      {ex.lineNotes && ex.lineNotes.length > 0 && (
        <div className="rounded-xl border border-line bg-surface-2 p-3">
          <p className="label mb-2">Line by line</p>
          <ol className="space-y-1.5 text-sm">
            {ex.lineNotes.map((l, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-14 shrink-0 font-mono text-xs text-primary-text">line {l.line}</span>
                <span className="text-muted">
                  <RichText text={l.text} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <SourceCitation refs={[ex.source]} compact />
        <button className="btn-secondary btn-sm" onClick={() => setOpen(!open)} aria-expanded={open}>
          <Play size={13} /> {open ? "Hide editor" : "Run & edit this example"} <ChevronDown size={13} className={clsx("transition-transform", open && "rotate-180")} />
        </button>
      </div>
      {open && <CodeRunner code={code} onChange={setCode} initialCode={ex.code} ariaLabel={`Editor for example ${n}`} minHeight="120px" />}
    </div>
  );
}

function QuickCheck({ q }: { q: PracticeMcq }) {
  const record = useProgress((s) => s.recordPractice);
  const [choice, setChoice] = useState<number | undefined>();
  const [checked, setChecked] = useState(false);
  const right = choice === q.answer;
  return (
    <div className="card space-y-3 p-5">
      <p className="text-[15px] font-medium text-ink">
        <RichText text={q.prompt} />
      </p>
      {q.code && <CodeBlock code={q.code} />}
      <McqOptions name={q.id} options={q.options} selected={choice} onSelect={(i) => !checked && setChoice(i)} correct={checked ? q.answer : undefined} disabled={checked} />
      <div className="flex flex-wrap items-center gap-2">
        {!checked ? (
          <button
            className="btn-primary btn-sm"
            disabled={choice === undefined}
            onClick={() => {
              setChecked(true);
              record(q.id, choice!, choice === q.answer, q.prompt.slice(0, 60));
            }}
          >
            Check answer
          </button>
        ) : (
          <button
            className="btn-secondary btn-sm"
            onClick={() => {
              setChecked(false);
              setChoice(undefined);
            }}
          >
            Try again
          </button>
        )}
      </div>
      {checked && (
        <div className={clsx("rounded-xl border p-3 text-sm", right ? "border-success/40 bg-success-soft" : "border-danger/40 bg-danger-soft")} role="status">
          <p className={clsx("mb-1 flex items-center gap-1.5 font-semibold", right ? "text-success-text" : "text-danger-text")}>
            {right ? <CheckCircle2 size={16} /> : <Lightbulb size={16} />} {right ? "Correct!" : "Not quite."}
          </p>
          <p className="text-muted">
            <RichText text={q.explanation} />
          </p>
          <SourceCitation className="mt-2" refs={q.sources} compact />
        </div>
      )}
    </div>
  );
}
