import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { ArrowLeft, BookOpen, CheckCircle2, Clock, Dumbbell, MinusCircle, RotateCcw, XCircle, AlertCircle, Trophy, Filter } from "lucide-react";
import { EXAMS } from "../data/exams/exams";
import { EXAM_QUESTION_MAP } from "../data/exams/questions";
import type { AnswerKey, Question } from "../data/types";
import { CONCEPT_MAP } from "../data/concepts";
import { TOPICS } from "../data/sources";
import { useExams } from "../store/examStore";
import { formatDuration, type ExamAttempt, type QuestionResult } from "../exam/engine";
import { lessonForConcept } from "../lib/analytics";
import { CodeBlock, TerminalBlock } from "../components/code/CodeBlock";
import { McqOptions } from "../components/questions/McqOptions";
import { GradeReport } from "../components/questions/GradeReport";
import { SourceCitation } from "../components/SourceCitation";
import { RichText } from "../components/ui/RichText";
import { Chip, OriginChip } from "../components/ui/Chip";
import { EmptyState, StatCard } from "../components/ui/PageHeader";
import { BarChart } from "../components/charts/BarChart";
import { KIND_LABEL } from "../components/exam/examMeta";

export function ExamReviewPage() {
  const { attemptId = "" } = useParams();
  const attempt = useExams((s) => s.attempts.find((a) => a.id === attemptId));
  const [keys, setKeys] = useState<Record<string, AnswerKey> | null>(null);
  useEffect(() => {
    if (attempt?.status === "submitted") void import("../data/exams/answers").then((m) => setKeys(m.EXAM_ANSWERS));
  }, [attempt?.status]);
  if (!attempt) return <EmptyState title="Attempt not found" />;
  if (attempt.status !== "submitted" || !attempt.result) return <Navigate to={`/exams/attempt/${attempt.id}`} replace />;
  if (!keys) return <p className="py-10 text-center text-sm text-muted">Loading review…</p>;
  return <Review attempt={attempt} keys={keys} />;
}

const STATUS = {
  correct: { icon: CheckCircle2, text: "Correct", cls: "text-success-text", tone: "success" as const },
  partial: { icon: AlertCircle, text: "Partially correct", cls: "text-warning-text", tone: "warning" as const },
  incorrect: { icon: XCircle, text: "Incorrect", cls: "text-danger-text", tone: "danger" as const },
  unanswered: { icon: MinusCircle, text: "Not answered", cls: "text-subtle", tone: "neutral" as const },
};

function Review({ attempt, keys }: { attempt: ExamAttempt; keys: Record<string, AnswerKey> }) {
  const exam = EXAMS.find((e) => e.id === attempt.examId)!;
  const r = attempt.result!;
  const [filter, setFilter] = useState<"all" | "wrong">("all");

  const conceptRows = useMemo(
    () =>
      Object.entries(r.byConcept)
        .map(([id, v]) => ({ id, pct: v.max ? v.earned / v.max : 0, ...v }))
        .sort((a, b) => a.pct - b.pct),
    [r],
  );
  const weak = conceptRows.filter((c) => c.pct < 0.6);
  const strong = conceptRows.filter((c) => c.pct >= 0.8).reverse();

  const topicData = TOPICS.filter((t) => r.byTopic[t.id]).map((t) => {
    const v = r.byTopic[t.id]!;
    return { label: `Topic ${t.number}`, value: v.max ? Math.round((v.earned / v.max) * 100) : 0, detail: `${v.earned} / ${v.max} points (${v.max ? Math.round((v.earned / v.max) * 100) : 0}%)` };
  });
  const kindData = (["mcq", "tracing", "error", "coding"] as const)
    .filter((k) => r.byKind[k])
    .map((k) => {
      const v = r.byKind[k]!;
      return { label: KIND_LABEL[k], value: v.max ? Math.round((v.earned / v.max) * 100) : 0, detail: `${v.earned} / ${v.max} points` };
    });

  const shown = r.questions.filter((q) => filter === "all" || q.status !== "correct");

  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex flex-wrap items-center gap-2">
        <Link to="/exams" className="btn-ghost btn-sm">
          <ArrowLeft size={14} /> Exams
        </Link>
        <Link to={`/exams/${exam.id}`} className="btn-secondary btn-sm">
          <RotateCcw size={14} /> Retake this exam
        </Link>
      </div>
      <header className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="label text-primary-text">Exam {exam.number} · Review</p>
          <h1 className="text-2xl font-semibold">{exam.title}</h1>
          <p className="mt-1 text-sm text-muted">
            Submitted {new Date(attempt.submittedAt ?? attempt.deadline).toLocaleString()}
            {attempt.autoSubmitted && " · automatically when time ran out"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-5xl font-semibold tabular-nums" data-testid="exam-score">
            {r.score}
            <span className="text-2xl text-subtle">/{r.maxScore}</span>
          </p>
          <p className="text-sm text-muted">{r.percentage}%</p>
        </div>
      </header>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard label="Score" value={`${r.percentage}%`} icon={<Trophy size={18} />} />
        <StatCard label="Time spent" value={formatDuration(r.timeSpentMs)} sub={`of ${exam.durationMinutes}:00`} icon={<Clock size={18} />} />
        <StatCard label="Correct" value={r.correct} sub={r.partial ? `+ ${r.partial} partially` : undefined} icon={<CheckCircle2 size={18} />} />
        <StatCard label="Incorrect" value={r.incorrect} icon={<XCircle size={18} />} />
        <StatCard label="Unanswered" value={r.unanswered} icon={<MinusCircle size={18} />} />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card p-5">
          <BarChart title="Score by topic" data={topicData} />
        </div>
        <div className="card p-5">
          <BarChart title="Score by question type" data={kindData} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card space-y-2 p-5">
          <h2 className="font-semibold">Strengths</h2>
          {strong.length === 0 ? (
            <p className="text-sm text-muted">No concept reached 80% in this attempt yet.</p>
          ) : (
            <ul className="space-y-1.5 text-sm">
              {strong.slice(0, 6).map((c) => (
                <li key={c.id} className="flex justify-between gap-2">
                  <span className="text-ink">{CONCEPT_MAP[c.id]?.title ?? c.id}</span>
                  <span className="text-success-text tabular-nums">{Math.round(c.pct * 100)}%</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card space-y-2 p-5">
          <h2 className="font-semibold">Concepts to revise</h2>
          {weak.length === 0 ? (
            <p className="text-sm text-muted">Nothing below 60% — well done.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {weak.slice(0, 6).map((c) => {
                const lesson = lessonForConcept(c.id);
                return (
                  <li key={c.id} className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-ink">
                      {CONCEPT_MAP[c.id]?.title ?? c.id} <span className="text-danger-text tabular-nums">· {Math.round(c.pct * 100)}%</span>
                    </span>
                    <span className="flex gap-1">
                      {lesson && (
                        <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
                          <BookOpen size={13} /> Lesson
                        </Link>
                      )}
                      <Link to={`/practice?concept=${c.id}`} className="btn-ghost btn-sm">
                        <Dumbbell size={13} /> Practice
                      </Link>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <section className="space-y-4" aria-label="Question by question review">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold">Question-by-question review</h2>
          <button className="btn-secondary btn-sm" onClick={() => setFilter(filter === "all" ? "wrong" : "all")} aria-pressed={filter === "wrong"}>
            <Filter size={13} /> {filter === "all" ? "Show only mistakes" : "Show all questions"}
          </button>
        </div>
        {shown.map((qr) => (
          <QuestionReview key={qr.qid} n={attempt.order.indexOf(qr.qid) + 1} qr={qr} q={EXAM_QUESTION_MAP[qr.qid]} attempt={attempt} answerKey={keys[qr.qid]} />
        ))}
      </section>
    </div>
  );
}

function QuestionReview({ n, qr, q, attempt, answerKey }: { n: number; qr: QuestionResult; q: Question; attempt: ExamAttempt; answerKey: AnswerKey }) {
  const st = STATUS[qr.status];
  const a = attempt.answers[q.id];
  const lesson = lessonForConcept(q.conceptIds[0]);
  return (
    <article className="card space-y-4 p-5" data-testid="review-question">
      <div className="flex flex-wrap items-center gap-2">
        <span className={clsx("flex items-center gap-1.5 text-sm font-semibold", st.cls)}>
          <st.icon size={17} /> Question {n} · {st.text}
        </span>
        <Chip>{KIND_LABEL[q.kind]}</Chip>
        <Chip tone={st.tone}>
          {qr.points} / {qr.maxPoints} pts
        </Chip>
        <OriginChip origin={q.origin} />
      </div>
      {q.prompt.split("\n").filter(Boolean).map((p, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-ink">
          <RichText text={p} />
        </p>
      ))}
      {q.code && q.kind !== "coding" && <CodeBlock code={q.code} />}
      {q.kind === "tracing" && q.inputs && q.inputs.length > 0 && <p className="text-sm text-muted">Typed input: <span className="font-mono">{q.inputs.map((x) => JSON.stringify(x)).join(", ")}</span></p>}

      {(q.kind === "mcq" || q.kind === "error") && (
        <McqOptions name={`review-${q.id}`} options={q.options} order={attempt.optionOrder[q.id]} selected={a?.choice} onSelect={() => undefined} correct={answerKey.answer as number} disabled />
      )}
      {q.kind === "tracing" && (
        <div className="grid gap-3 md:grid-cols-2">
          <TerminalBlock title="Your answer" text={a?.text ?? ""} />
          <TerminalBlock title="Correct output (real Python)" text={String(answerKey.answer)} />
        </div>
      )}
      {q.kind === "coding" && (
        <div className="space-y-3">
          <CodeBlock code={a?.code ?? "(no code submitted)"} title="Your program" />
          {qr.coding && <GradeReport grade={qr.coding} />}
          <details className="rounded-xl border border-line bg-surface-2 p-3">
            <summary className="cursor-pointer text-sm font-medium">Show a reference solution</summary>
            <p className="mt-2 text-xs text-subtle">One correct solution — any program with the same behaviour earns full marks.</p>
            <CodeBlock className="mt-2" code={String(answerKey.answer)} title="Reference solution" />
          </details>
        </div>
      )}

      <div className="rounded-xl border border-line bg-surface-2 p-4 text-sm">
        <p className="mb-1 font-semibold text-ink">Explanation</p>
        <p className="leading-relaxed text-muted">
          <RichText text={answerKey.explanation} />
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-subtle">Concept: {q.conceptIds.map((c) => CONCEPT_MAP[c]?.title ?? c).join(", ")}</span>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <SourceCitation refs={q.sources} compact />
        {lesson && (
          <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
            <BookOpen size={13} /> Review lesson
          </Link>
        )}
        <Link to={`/practice?concept=${q.conceptIds[0]}`} className="btn-ghost btn-sm">
          <Dumbbell size={13} /> Practise this concept
        </Link>
      </div>
    </article>
  );
}
