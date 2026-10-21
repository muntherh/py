import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, RotateCcw, Shuffle, BookOpen } from "lucide-react";
import { PageHeader, EmptyState } from "../components/ui/PageHeader";
import { McqOptions } from "../components/questions/McqOptions";
import { CodeBlock } from "../components/code/CodeBlock";
import { SourceCitation } from "../components/SourceCitation";
import { RichText } from "../components/ui/RichText";
import { DifficultyChip, OriginChip, Chip } from "../components/ui/Chip";
import { ProgressBar } from "../components/ui/ProgressBar";
import { PRACTICE_MCQS } from "../data/practice/mcq";
import { CONCEPTS, CONCEPT_MAP } from "../data/concepts";
import { TOPICS } from "../data/sources";
import type { Difficulty, TopicId } from "../data/types";
import { useProgress } from "../store/progressStore";
import { mulberry32, seededShuffle } from "../exam/engine";
import { lessonForConcept } from "../lib/analytics";

type Mode = "all" | "unanswered" | "incorrect";

export function PracticePage() {
  const [params, setParams] = useSearchParams();
  const topic = (params.get("topic") as TopicId | null) ?? "all";
  const difficulty = (params.get("difficulty") as Difficulty | null) ?? "all";
  const concept = params.get("concept") ?? "all";
  const mode = (params.get("mode") as Mode | null) ?? "all";
  const [seed, setSeed] = useState<number | null>(null);
  const practice = useProgress((s) => s.practice);
  const record = useProgress((s) => s.recordPractice);
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | undefined>();
  const [checked, setChecked] = useState(false);
  const [session, setSession] = useState({ answered: 0, correct: 0 });

  const set = (k: string, v: string) => {
    const p = new URLSearchParams(params);
    if (v === "all") p.delete(k);
    else p.set(k, v);
    setParams(p, { replace: true });
    setIndex(0);
    setChecked(false);
    setChoice(undefined);
  };

  // The list is frozen per filter set (so answering doesn't reshuffle it mid-session).
  const list = useMemo(() => {
    let l = PRACTICE_MCQS.filter(
      (q) =>
        (topic === "all" || q.topicId === topic) &&
        (difficulty === "all" || q.difficulty === difficulty) &&
        (concept === "all" || q.conceptIds.includes(concept)) &&
        (mode === "all" || (mode === "unanswered" ? !practice[q.id] : practice[q.id] && !practice[q.id].lastCorrect)),
    );
    if (seed !== null) l = seededShuffle(l, mulberry32(seed));
    return l;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic, difficulty, concept, mode, seed]);

  const q = list[Math.min(index, list.length - 1)];
  const answeredTotal = Object.keys(practice).length;
  const correctTotal = Object.values(practice).filter((r) => r.lastCorrect).length;
  const incorrectCount = Object.values(practice).filter((r) => !r.lastCorrect).length;

  function go(i: number) {
    setIndex(i);
    setChecked(false);
    setChoice(undefined);
  }

  const lesson = q ? lessonForConcept(q.conceptIds[0]) : undefined;
  const right = q && choice === q.answer;

  return (
    <div className="space-y-5 animate-fade-up">
      <PageHeader
        eyebrow="Practice Questions"
        title="Multiple-choice practice"
        description="Untimed practice with instant feedback. Every question links to the slide it is based on."
        actions={
          <>
            <button className={clsx(seed !== null ? "btn-primary" : "btn-secondary")} onClick={() => (setSeed(seed === null ? Date.now() % 2 ** 31 : null), go(0))} aria-pressed={seed !== null}>
              <Shuffle size={15} /> {seed !== null ? "Shuffled" : "Shuffle"}
            </button>
            <button className="btn-secondary" onClick={() => set("mode", "incorrect")} disabled={incorrectCount === 0}>
              <RotateCcw size={15} /> Retry incorrect ({incorrectCount})
            </button>
          </>
        }
      />

      <div className="card grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label>
          <span className="label">Topic</span>
          <select className="input mt-1" value={topic} onChange={(e) => set("topic", e.target.value)}>
            <option value="all">All topics</option>
            {TOPICS.map((t) => (
              <option key={t.id} value={t.id}>
                Topic {t.number}: {t.shortTitle}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="label">Difficulty</span>
          <select className="input mt-1" value={difficulty} onChange={(e) => set("difficulty", e.target.value)}>
            <option value="all">All levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          <span className="label">Concept</span>
          <select className="input mt-1" value={concept} onChange={(e) => set("concept", e.target.value)}>
            <option value="all">All concepts</option>
            {CONCEPTS.filter((c) => topic === "all" || c.topicId === topic).map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="label">Show</span>
          <select className="input mt-1" value={mode} onChange={(e) => set("mode", e.target.value)}>
            <option value="all">All questions</option>
            <option value="unanswered">Not answered yet</option>
            <option value="incorrect">Last answer incorrect</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <span>
          This session: <strong className="text-ink">{session.correct}</strong>/{session.answered} correct
        </span>
        <span>
          Overall: <strong className="text-ink">{correctTotal}</strong> of {answeredTotal} questions answered correctly (latest attempt) · {PRACTICE_MCQS.length} in the bank
        </span>
      </div>

      {!q ? (
        <EmptyState title={mode === "incorrect" ? "No incorrect answers to retry" : "No questions match these filters"}>
          {mode !== "all" ? (
            <button className="btn-secondary mt-2" onClick={() => set("mode", "all")}>
              Show all questions
            </button>
          ) : (
            "Try a different topic or difficulty."
          )}
        </EmptyState>
      ) : (
        <div className="card space-y-4 p-5" data-testid="practice-question">
          <div className="flex flex-wrap items-center gap-2">
            <Chip tone="primary">
              Question {Math.min(index, list.length - 1) + 1} of {list.length}
            </Chip>
            <Chip>Topic {TOPICS.find((t) => t.id === q.topicId)?.number}</Chip>
            <DifficultyChip difficulty={q.difficulty} />
            <OriginChip origin={q.origin} />
            {practice[q.id] && (
              <Chip tone={practice[q.id].lastCorrect ? "success" : "danger"}>
                Last time: {practice[q.id].lastCorrect ? "correct" : "incorrect"} · {practice[q.id].attempts} attempt(s)
              </Chip>
            )}
          </div>
          <ProgressBar value={index + 1} max={list.length} label="Position in question list" />
          <p className="text-base font-medium text-ink">
            <RichText text={q.prompt} />
          </p>
          {q.code && <CodeBlock code={q.code} />}
          <McqOptions name={q.id} options={q.options} selected={choice} onSelect={(i) => !checked && setChoice(i)} correct={checked ? q.answer : undefined} disabled={checked} />
          <div className="flex flex-wrap gap-2">
            {!checked ? (
              <button
                className="btn-primary"
                disabled={choice === undefined}
                onClick={() => {
                  setChecked(true);
                  const ok = choice === q.answer;
                  record(q.id, choice!, ok, q.prompt.slice(0, 60));
                  setSession((s) => ({ answered: s.answered + 1, correct: s.correct + (ok ? 1 : 0) }));
                }}
                data-testid="check-answer"
              >
                Check answer
              </button>
            ) : (
              <button className="btn-primary" onClick={() => go(Math.min(index + 1, list.length - 1))} disabled={index >= list.length - 1}>
                Next question <ArrowRight size={15} />
              </button>
            )}
            <button className="btn-ghost" onClick={() => go(Math.max(0, index - 1))} disabled={index === 0}>
              <ArrowLeft size={15} /> Previous
            </button>
            <button className="btn-ghost" onClick={() => go(Math.min(index + 1, list.length - 1))} disabled={index >= list.length - 1}>
              Skip <ArrowRight size={15} />
            </button>
          </div>
          {checked && (
            <div className={clsx("space-y-2 rounded-xl border p-4 text-sm", right ? "border-success/40 bg-success-soft" : "border-danger/40 bg-danger-soft")} role="status">
              <p className={clsx("flex items-center gap-1.5 font-semibold", right ? "text-success-text" : "text-danger-text")}>
                {right ? <CheckCircle2 size={16} /> : <Lightbulb size={16} />} {right ? "Correct!" : `Not quite — the answer is ${String.fromCharCode(65 + q.answer)}.`}
              </p>
              <p className="leading-relaxed text-muted">
                <RichText text={q.explanation} />
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <SourceCitation refs={q.sources} compact />
                {lesson && (
                  <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
                    <BookOpen size={13} /> Review lesson: {lesson.title}
                  </Link>
                )}
              </div>
              <p className="text-xs text-subtle">Concept: {q.conceptIds.map((c) => CONCEPT_MAP[c]?.title).join(", ")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
