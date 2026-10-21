import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Flag, Loader2, Send, Timer, CheckCircle2 } from "lucide-react";
import { EXAMS } from "../data/exams/exams";
import { EXAM_QUESTION_MAP } from "../data/exams/questions";
import type { ExamDefinition, Question } from "../data/types";
import { useExams } from "../store/examStore";
import { formatDuration, isAnswered, pointsFor, remainingMs, type ExamAttempt } from "../exam/engine";
import { onGradingProgress, submitAttempt } from "../exam/submit";
import { useNow } from "../lib/useNow";
import { McqOptions } from "../components/questions/McqOptions";
import { CodeBlock, TerminalBlock } from "../components/code/CodeBlock";
import { CodeRunner } from "../components/code/CodeRunner";
import { ConfirmDialog } from "../components/ui/Dialog";
import { RichText } from "../components/ui/RichText";
import { EmptyState } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { KIND_LABEL } from "../components/exam/examMeta";

export function ExamTakePage() {
  const { attemptId = "" } = useParams();
  const attempt = useExams((s) => s.attempts.find((a) => a.id === attemptId));
  const now = useNow(500);
  if (!attempt) return <EmptyState title="Exam attempt not found" />;
  const exam = EXAMS.find((e) => e.id === attempt.examId);
  if (!exam) return <EmptyState title="Exam not found" />;
  if (attempt.status === "submitted") return <Navigate to={`/exams/attempt/${attempt.id}/review`} replace />;
  if (attempt.status === "grading" || now >= attempt.deadline) return <GradingScreen attempt={attempt} timeUp={attempt.autoSubmitted || now >= attempt.deadline} />;
  return <ExamSession attempt={attempt} exam={exam} now={now} />;
}

function GradingScreen({ attempt, timeUp }: { attempt: ExamAttempt; timeUp: boolean }) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<{ done: number; total: number } | null>(null);
  useEffect(() => onGradingProgress((id, done, total) => id === attempt.id && setProgress({ done, total })), [attempt.id]);
  useEffect(() => {
    if (attempt.status === "submitted") navigate(`/exams/attempt/${attempt.id}/review`, { replace: true });
  }, [attempt.status, attempt.id, navigate]);
  return (
    <div className="mx-auto max-w-lg py-16 text-center" role="status" aria-live="polite" data-testid="grading-screen">
      <Loader2 size={36} className="mx-auto animate-spin text-primary" />
      <h1 className="mt-4 text-xl font-semibold">{timeUp ? "Time is up — your exam was submitted automatically" : "Submitting your exam"}</h1>
      <p className="mt-2 text-sm text-muted">Grading your answers. Coding answers are run against their test cases in Python, which can take a few seconds.</p>
      {progress && <ProgressBar className="mt-5" value={progress.done} max={progress.total} label="Grading progress" />}
    </div>
  );
}

function ExamTimer({ deadline, now }: { deadline: number; now: number }) {
  const ms = remainingMs({ deadline }, now);
  const min = ms / 60000;
  const [announce, setAnnounce] = useState("");
  const said = useRef(new Set<number>());
  useEffect(() => {
    for (const mark of [10, 5, 1]) {
      if (min <= mark && min > mark - 0.1 && !said.current.has(mark)) {
        said.current.add(mark);
        setAnnounce(`${mark} minute${mark > 1 ? "s" : ""} remaining`);
      }
    }
  }, [min]);
  return (
    <div
      className={clsx(
        "flex items-center gap-2 rounded-xl border px-3 py-1.5 font-mono text-lg font-semibold tabular-nums",
        min <= 1 ? "border-danger/60 bg-danger-soft text-danger-text" : min <= 5 ? "border-warning/60 bg-warning-soft text-warning-text" : "border-line bg-surface-2 text-ink",
      )}
      data-testid="exam-timer"
      data-remaining-ms={ms}
    >
      <Timer size={18} aria-hidden />
      <span aria-label={`Time remaining ${formatDuration(ms)}`}>{formatDuration(ms)}</span>
      <span className="sr-only" aria-live="assertive">
        {announce}
      </span>
    </div>
  );
}

function ExamSession({ attempt, exam, now }: { attempt: ExamAttempt; exam: ExamDefinition; now: number }) {
  const setCurrent = useExams((s) => s.setCurrent);
  const toggleFlag = useExams((s) => s.toggleFlag);
  const [confirm, setConfirm] = useState(false);
  const flushers = useRef(new Set<() => void>());
  const index = Math.min(attempt.current, attempt.order.length - 1);
  const qid = attempt.order[index];
  const q = EXAM_QUESTION_MAP[qid];
  const answered = attempt.order.filter((id) => isAnswered(EXAM_QUESTION_MAP[id], attempt.answers[id])).length;
  const unanswered = attempt.order.length - answered;

  const go = (i: number) => {
    flushers.current.forEach((f) => f());
    setCurrent(attempt.id, Math.max(0, Math.min(attempt.order.length - 1, i)));
  };

  const sectionOf = (id: string) => exam.sections.find((s) => s.questionIds.includes(id))!;

  return (
    <div className="space-y-4">
      <div className="sticky top-0 z-20 -mx-4 flex flex-wrap items-center gap-3 border-b border-line bg-bg/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="min-w-0 flex-1">
          <p className="label text-primary-text">Exam {exam.number}</p>
          <p className="truncate font-semibold">{exam.title}</p>
        </div>
        <div className="hidden w-40 sm:block">
          <ProgressBar value={answered} max={attempt.order.length} label="Questions answered" tone="success" />
          <p className="mt-1 text-xs text-muted">
            {answered}/{attempt.order.length} answered
          </p>
        </div>
        <ExamTimer deadline={attempt.deadline} now={now} />
        <button
          className="btn-primary"
          onClick={() => {
            flushers.current.forEach((f) => f());
            setConfirm(true);
          }}
          data-testid="submit-exam"
        >
          <Send size={15} /> Submit
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-[230px_minmax(0,1fr)]">
        <nav aria-label="Question navigator" className="card h-fit space-y-3 p-3 lg:sticky lg:top-24">
          {exam.sections.map((s) => (
            <div key={s.kind}>
              <p className="label mb-1.5">{KIND_LABEL[s.kind]}</p>
              <div className="flex flex-wrap gap-1.5">
                {attempt.order.map((id, i) =>
                  s.questionIds.includes(id) ? (
                    <button
                      key={id}
                      onClick={() => go(i)}
                      aria-current={i === index ? "step" : undefined}
                      aria-label={`Question ${i + 1}${isAnswered(EXAM_QUESTION_MAP[id], attempt.answers[id]) ? ", answered" : ", not answered"}${attempt.flagged.includes(id) ? ", flagged" : ""}`}
                      className={clsx(
                        "relative grid h-9 w-9 place-items-center rounded-lg border text-sm font-medium tabular-nums transition-colors",
                        i === index ? "border-primary bg-primary text-white" : isAnswered(EXAM_QUESTION_MAP[id], attempt.answers[id]) ? "border-success/50 bg-success-soft text-success-text" : "border-line bg-surface-2 text-muted hover:border-line-strong",
                      )}
                      data-testid={`nav-q-${i + 1}`}
                    >
                      {i + 1}
                      {attempt.flagged.includes(id) && <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-warning ring-2 ring-surface" aria-hidden />}
                    </button>
                  ) : null,
                )}
              </div>
            </div>
          ))}
          <div className="space-y-1 border-t border-line pt-2 text-[11px] text-subtle">
            <p className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-success-soft ring-1 ring-success/50" /> Answered
            </p>
            <p className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-surface-2 ring-1 ring-line" /> Not answered ({unanswered})
            </p>
            <p className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-warning" /> Flagged ({attempt.flagged.length})
            </p>
          </div>
        </nav>

        <section className="card min-w-0 space-y-4 p-5" aria-label={`Question ${index + 1}`} data-testid="exam-question" data-qid={qid}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">Question {index + 1}</span> of {attempt.order.length} · {KIND_LABEL[q.kind]} · {pointsFor(exam, qid)} points
            </p>
            <button className={clsx("btn-sm", attempt.flagged.includes(qid) ? "btn bg-warning-soft text-warning-text" : "btn-ghost")} onClick={() => toggleFlag(attempt.id, qid)} aria-pressed={attempt.flagged.includes(qid)}>
              <Flag size={14} /> {attempt.flagged.includes(qid) ? "Flagged" : "Flag for review"}
            </button>
          </div>
          <QuestionAnswer key={qid} attempt={attempt} q={q} registerFlush={(f) => (flushers.current.add(f), () => flushers.current.delete(f))} sectionTitle={sectionOf(qid).title} />
          <div className="flex flex-wrap justify-between gap-2 border-t border-line pt-4">
            <button className="btn-secondary" onClick={() => go(index - 1)} disabled={index === 0}>
              <ArrowLeft size={15} /> Previous
            </button>
            {index < attempt.order.length - 1 ? (
              <button className="btn-primary" onClick={() => go(index + 1)} data-testid="next-question">
                Next <ArrowRight size={15} />
              </button>
            ) : (
              <button className="btn-primary" onClick={() => (flushers.current.forEach((f) => f()), setConfirm(true))}>
                <CheckCircle2 size={15} /> Finish & submit
              </button>
            )}
          </div>
        </section>
      </div>

      <ConfirmDialog
        open={confirm}
        title="Submit your exam?"
        message={
          <div className="space-y-2">
            <p>
              You have answered <strong className="text-ink">{answered}</strong> of {attempt.order.length} questions.
            </p>
            {unanswered > 0 && <p className="text-warning-text">{unanswered} question(s) are still unanswered and will score 0.</p>}
            {attempt.flagged.length > 0 && <p className="text-warning-text">{attempt.flagged.length} question(s) are flagged for review.</p>}
            <p>Time remaining: {formatDuration(remainingMs(attempt, now))}. After submitting you cannot change your answers.</p>
          </div>
        }
        confirmLabel="Submit exam"
        onCancel={() => setConfirm(false)}
        onConfirm={() => {
          setConfirm(false);
          void submitAttempt(attempt.id, false);
        }}
      />
    </div>
  );
}

function QuestionAnswer({ attempt, q, registerFlush, sectionTitle }: { attempt: ExamAttempt; q: Question; registerFlush: (f: () => void) => () => void; sectionTitle: string }) {
  const setAnswer = useExams((s) => s.setAnswer);
  const saved = attempt.answers[q.id];
  const [text, setText] = useState(saved?.text ?? "");
  const [code, setCode] = useState(saved?.code ?? (q.kind === "coding" ? q.starterCode : ""));
  const dirty = useRef(false);
  const latest = useRef({ text, code });
  latest.current = { text, code };

  // Typed answers are saved shortly after typing stops, and flushed on navigation/submit.
  const flush = () => {
    if (!dirty.current) return;
    dirty.current = false;
    if (q.kind === "tracing") setAnswer(attempt.id, q.id, { text: latest.current.text });
    if (q.kind === "coding") setAnswer(attempt.id, q.id, { code: latest.current.code });
  };
  const flushRef = useRef(flush);
  flushRef.current = flush;
  useEffect(() => registerFlush(() => flushRef.current()), [registerFlush]);
  useEffect(() => () => flushRef.current(), []);
  useEffect(() => {
    if (!dirty.current) return;
    const id = setTimeout(() => flushRef.current(), 400);
    return () => clearTimeout(id);
  }, [text, code]);

  return (
    <div className="space-y-4">
      <p className="label">{sectionTitle}</p>
      <div className="space-y-2">
        {q.prompt.split("\n").filter(Boolean).map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-ink">
            <RichText text={p} />
          </p>
        ))}
      </div>
      {q.code && q.kind !== "coding" && <CodeBlock code={q.code} />}
      {q.kind === "tracing" && q.inputs && q.inputs.length > 0 && (
        <p className="rounded-lg bg-surface-2 px-3 py-2 text-sm text-muted">
          When the program runs, the user types: <span className="font-mono text-ink">{q.inputs.map((x) => JSON.stringify(x)).join(", ")}</span> (one per input() call, in order).
        </p>
      )}
      {(q.kind === "mcq" || q.kind === "error") && (
        <McqOptions name={q.id} options={q.options} order={attempt.optionOrder[q.id]} selected={saved?.choice} onSelect={(i) => setAnswer(attempt.id, q.id, { choice: i })} />
      )}
      {q.kind === "tracing" && (
        <label className="block">
          <span className="label">Type the exact output printed by the program</span>
          <textarea
            className="input mt-1.5 min-h-36 font-mono"
            value={text}
            onChange={(e) => {
              dirty.current = true;
              setText(e.target.value);
            }}
            onBlur={() => flushRef.current()}
            spellCheck={false}
            placeholder={"One line of output per line, e.g.\n10\n20"}
            data-testid="tracing-answer"
          />
          <span className="mt-1 block text-xs text-subtle">Write each printed line on its own line. Extra spaces between words are ignored; capital letters and punctuation matter.</span>
        </label>
      )}
      {q.kind === "coding" && (
        <div className="space-y-3">
          {q.sampleRun !== undefined && <TerminalBlock title="Sample run" text={q.sampleRun} />}
          <CodeRunner
            code={code}
            onChange={(v) => {
              dirty.current = true;
              setCode(v);
            }}
            initialCode={q.starterCode}
            ariaLabel="Exam coding answer editor"
            minHeight="240px"
          />
          <p className="text-xs text-subtle">Your program is graded after submission with visible and hidden test cases. Different correct programs are all accepted.</p>
        </div>
      )}
    </div>
  );
}
