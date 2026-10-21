import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { BookOpen, CheckCircle2, Dumbbell, Lightbulb, RotateCcw } from "lucide-react";
import { PageHeader, EmptyState } from "../components/ui/PageHeader";
import { McqOptions } from "../components/questions/McqOptions";
import { CodeBlock } from "../components/code/CodeBlock";
import { SourceCitation } from "../components/SourceCitation";
import { RichText } from "../components/ui/RichText";
import { Chip } from "../components/ui/Chip";
import { PRACTICE_MCQ_MAP } from "../data/practice/mcq";
import { EXERCISES } from "../data/practice/exercises";
import { EXAM_QUESTION_MAP } from "../data/exams/questions";
import { EXAMS } from "../data/exams/exams";
import { CONCEPT_MAP } from "../data/concepts";
import type { PracticeMcq } from "../data/types";
import { useProgress } from "../store/progressStore";
import { useExams } from "../store/examStore";
import { lessonForConcept } from "../lib/analytics";
import { KIND_LABEL } from "../components/exam/examMeta";

export function MistakesPage() {
  const practice = useProgress((s) => s.practice);
  const exercises = useProgress((s) => s.exercises);
  const attempts = useExams((s) => s.attempts);

  const wrongPractice = useMemo(
    () =>
      Object.entries(practice)
        .filter(([id, r]) => !r.lastCorrect && PRACTICE_MCQ_MAP[id])
        .map(([id]) => PRACTICE_MCQ_MAP[id]),
    // Freeze the list while the page is open so retried questions stay visible.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const examMistakes = useMemo(() => {
    const latest = new Map<string, { attemptId: string; examNumber: number; status: string; points: number; max: number }>();
    for (const a of [...attempts].filter((x) => x.status === "submitted" && x.result).sort((x, y) => (x.submittedAt ?? 0) - (y.submittedAt ?? 0))) {
      const exam = EXAMS.find((e) => e.id === a.examId);
      for (const r of a.result!.questions) latest.set(r.qid, { attemptId: a.id, examNumber: exam?.number ?? 0, status: r.status, points: r.points, max: r.maxPoints });
    }
    return [...latest.entries()].filter(([, v]) => v.status !== "correct");
  }, [attempts]);

  const unsolved = EXERCISES.filter((e) => exercises[e.id]?.attempts && !exercises[e.id].passed);

  const conceptCounts = new Map<string, number>();
  for (const q of wrongPractice) for (const c of q.conceptIds) conceptCounts.set(c, (conceptCounts.get(c) ?? 0) + 1);
  for (const [qid] of examMistakes) for (const c of EXAM_QUESTION_MAP[qid]?.conceptIds ?? []) conceptCounts.set(c, (conceptCounts.get(c) ?? 0) + 1);
  for (const e of unsolved) for (const c of e.conceptIds) conceptCounts.set(c, (conceptCounts.get(c) ?? 0) + 1);
  const topConcepts = [...conceptCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6);

  const nothing = wrongPractice.length === 0 && examMistakes.length === 0 && unsolved.length === 0;

  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader eyebrow="Mistake Review" title="Learn from your mistakes" description="Questions you answered incorrectly most recently, exam questions you lost points on, and exercises not yet solved — grouped so you can revise the right slides." />
      {nothing ? (
        <EmptyState title="No mistakes recorded yet" icon={<CheckCircle2 size={28} />}>
          Answer practice questions, try exercises or take an exam. Anything you get wrong will appear here for review.
        </EmptyState>
      ) : (
        <>
          {topConcepts.length > 0 && (
            <section className="card p-5" aria-labelledby="rev-h">
              <h2 id="rev-h" className="font-semibold">
                Recommended revision
              </h2>
              <p className="mt-1 text-xs text-subtle">Concepts that appear most often in your mistakes.</p>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">
                {topConcepts.map(([c, n]) => {
                  const concept = CONCEPT_MAP[c];
                  const lesson = lessonForConcept(c);
                  return (
                    <li key={c} className="space-y-2 rounded-xl bg-surface-2 p-3">
                      <p className="text-sm font-medium">
                        {concept?.title ?? c} <span className="text-xs text-danger-text">· {n} mistake(s)</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {lesson && (
                          <Link to={`/learn/${lesson.id}`} className="btn-secondary btn-sm">
                            <BookOpen size={13} /> Lesson
                          </Link>
                        )}
                        <Link to={`/practice?concept=${c}`} className="btn-secondary btn-sm">
                          <Dumbbell size={13} /> Practice
                        </Link>
                      </div>
                      {concept && <SourceCitation refs={concept.sources.slice(0, 1)} compact />}
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {wrongPractice.length > 0 && (
            <section className="space-y-3" aria-labelledby="pm-h">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 id="pm-h" className="text-lg font-semibold">
                  Practice questions to retry ({wrongPractice.length})
                </h2>
                <Link to="/practice?mode=incorrect" className="btn-secondary btn-sm">
                  <RotateCcw size={13} /> Retry all in practice mode
                </Link>
              </div>
              {wrongPractice.map((q) => (
                <RetryCard key={q.id} q={q} />
              ))}
            </section>
          )}

          {examMistakes.length > 0 && (
            <section className="space-y-3" aria-labelledby="ex-h">
              <h2 id="ex-h" className="text-lg font-semibold">
                Exam questions with lost points ({examMistakes.length})
              </h2>
              <ul className="grid gap-2 md:grid-cols-2">
                {examMistakes.map(([qid, v]) => {
                  const q = EXAM_QUESTION_MAP[qid];
                  if (!q) return null;
                  return (
                    <li key={qid} className="card space-y-2 p-4">
                      <div className="flex flex-wrap gap-1.5">
                        <Chip>Exam {v.examNumber}</Chip>
                        <Chip>{KIND_LABEL[q.kind]}</Chip>
                        <Chip tone={v.status === "partial" ? "warning" : "danger"}>
                          {v.points}/{v.max} pts · {v.status === "unanswered" ? "not answered" : v.status}
                        </Chip>
                      </div>
                      <p className="line-clamp-2 text-sm text-ink">
                        <RichText text={q.prompt} />
                      </p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Link to={`/exams/attempt/${v.attemptId}/review`} className="btn-ghost btn-sm">
                          See explanation →
                        </Link>
                        <SourceCitation refs={q.sources.slice(0, 1)} compact />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {unsolved.length > 0 && (
            <section className="space-y-3" aria-labelledby="ux-h">
              <h2 id="ux-h" className="text-lg font-semibold">
                Exercises not solved yet ({unsolved.length})
              </h2>
              <ul className="grid gap-2 md:grid-cols-2">
                {unsolved.map((e) => (
                  <li key={e.id}>
                    <Link to={`/lab/exercise/${e.id}`} className="card flex items-center justify-between gap-2 p-4 hover:border-primary">
                      <span className="text-sm font-medium">{e.title}</span>
                      <Chip tone="warning">Best {Math.round((exercises[e.id]?.bestFraction ?? 0) * 100)}%</Chip>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}

function RetryCard({ q }: { q: PracticeMcq }) {
  const record = useProgress((s) => s.recordPractice);
  const last = useProgress((s) => s.practice[q.id]);
  const [choice, setChoice] = useState<number | undefined>();
  const [checked, setChecked] = useState(false);
  const right = choice === q.answer;
  const lesson = lessonForConcept(q.conceptIds[0]);
  return (
    <div className="card space-y-3 p-5">
      <div className="flex flex-wrap gap-1.5">
        {q.conceptIds.map((c) => (
          <Chip key={c} tone="primary">
            {CONCEPT_MAP[c]?.title}
          </Chip>
        ))}
        {last && <Chip tone={last.lastCorrect ? "success" : "danger"}>{last.lastCorrect ? "Now correct" : `Your last answer: ${String.fromCharCode(65 + last.lastChoice)} (options in original order)`}</Chip>}
      </div>
      <p className="font-medium text-ink">
        <RichText text={q.prompt} />
      </p>
      {q.code && <CodeBlock code={q.code} />}
      <McqOptions name={`retry-${q.id}`} options={q.options} selected={choice} onSelect={(i) => !checked && setChoice(i)} correct={checked ? q.answer : undefined} disabled={checked} />
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
        <div className={clsx("space-y-2 rounded-xl border p-3 text-sm", right ? "border-success/40 bg-success-soft" : "border-danger/40 bg-danger-soft")} role="status">
          <p className={clsx("flex items-center gap-1.5 font-semibold", right ? "text-success-text" : "text-danger-text")}>
            {right ? <CheckCircle2 size={15} /> : <Lightbulb size={15} />} {right ? "Correct now!" : "Still not right — read the explanation."}
          </p>
          <p className="text-muted">
            <RichText text={q.explanation} />
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <SourceCitation refs={q.sources} compact />
            {lesson && (
              <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
                <BookOpen size={13} /> {lesson.title}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
