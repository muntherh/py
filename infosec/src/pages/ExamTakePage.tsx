import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Flag, LayoutList, Send, Square, Timer } from "lucide-react";
import { QuestionView } from "../components/questions/QuestionView";
import { ConfirmDialog } from "../components/ui/Dialog";
import { RichText } from "../components/ui/RichText";
import { BLUEPRINT, formatDuration, remainingMs, type ExamAttempt, type ExamItem } from "../exam/engine";
import { isAnswered } from "../grading/grade";
import { finishExam } from "../lib/finishExam";
import { useNow } from "../lib/useNow";
import { useExams } from "../store/examStore";
import { NotFoundPage } from "./NotFoundPage";

function ItemBlock({ a, it, n }: { a: ExamAttempt; it: ExamItem; n: number }) {
  const answer = useExams((s) => s.answer);
  const toggleFlag = useExams((s) => s.toggleFlag);
  const q = it.question;
  const flagged = a.flagged.includes(q.id);
  return (
    <article className="card space-y-4 p-5 sm:p-6" aria-label={`Question ${n}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-display text-sm font-bold text-electric">
          Question {n} <span className="font-sans font-medium text-subtle">· {it.marks} mark{it.marks === 1 ? "" : "s"}</span>
        </p>
        <button className={clsx("btn-sm", flagged ? "btn bg-warning-soft text-warning-text" : "btn-ghost")} onClick={() => toggleFlag(a.id, q.id)} aria-pressed={flagged}>
          <Flag size={14} /> {flagged ? "Flagged" : "Flag for review"}
        </button>
      </div>
      {q.kind !== "fill" && (
        <h2 className="text-[17px] leading-relaxed font-semibold">
          <RichText text={q.prompt} />
        </h2>
      )}
      <QuestionView q={q} value={a.answers[q.id]} onChange={(v) => answer(a.id, q.id, v)} display={{ optionOrder: it.optionOrder, rights: it.rights, scrambled: it.scrambled }} idPrefix={`exam-${n}`} />
    </article>
  );
}

export function ExamTakePage() {
  const { attemptId = "" } = useParams();
  const a = useExams((s) => s.attempts.find((x) => x.id === attemptId));
  const setCurrent = useExams((s) => s.setCurrent);
  const now = useNow(500);
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const [paperView, setPaperView] = useState(false);

  if (!a) return <NotFoundPage />;
  if (a.status === "submitted") return <Navigate to={`/exams/attempt/${a.id}/review`} replace />;

  const left = remainingMs(a, now);
  const answered = a.items.filter((it) => isAnswered(it.question, a.answers[it.question.id])).length;
  const cur = Math.min(a.current, a.items.length - 1);
  const it = a.items[cur];
  const sectionOf = (i: number) => BLUEPRINT.find((s) => s.key === a.items[i].section)!;
  const low = left < 5 * 60_000;

  const submit = () => {
    finishExam(a.id, Date.now(), false);
    navigate(`/exams/attempt/${a.id}/review`);
  };

  return (
    <div className="space-y-5">
      <div className="sticky top-14 z-20 -mx-4 border-b border-line bg-bg/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border lg:top-2">
        <div className="flex flex-wrap items-center gap-3">
          <div className="min-w-0">
            <p className="truncate font-semibold">{a.title}</p>
            <p className="text-xs text-subtle">{answered}/{a.items.length} answered · 20 marks</p>
          </div>
          <div className={clsx("ml-auto flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-lg font-bold tabular-nums", low ? "bg-danger-soft text-danger-text" : "bg-surface-2")} role="timer" aria-label={`Time left ${formatDuration(left)}`}>
            <Timer size={18} /> {formatDuration(left)}
          </div>
          <button className="btn-primary" onClick={() => setConfirm(true)}>
            <Send size={15} /> Submit
          </button>
        </div>
      </div>

      <nav aria-label="Question navigator" className="card p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="label">Questions</p>
          <button className="btn-ghost btn-sm" onClick={() => setPaperView(!paperView)} aria-pressed={paperView}>
            {paperView ? <Square size={14} /> : <LayoutList size={14} />} {paperView ? "One at a time" : "Full paper view"}
          </button>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {a.items.map((x, i) => {
            const done = isAnswered(x.question, a.answers[x.question.id]);
            const fl = a.flagged.includes(x.question.id);
            return (
              <button
                key={x.question.id}
                onClick={() => {
                  setCurrent(a.id, i);
                  if (paperView) document.getElementById(`item-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={clsx(
                  "relative h-9 w-9 rounded-lg border font-mono text-sm font-semibold",
                  i === cur && !paperView ? "border-primary ring-2 ring-primary" : "border-line",
                  done ? "bg-primary-soft text-primary-text" : "bg-surface-2 text-muted",
                )}
                aria-label={`Question ${i + 1}${done ? ", answered" : ", not answered"}${fl ? ", flagged" : ""}`}
              >
                {i + 1}
                {fl && <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-warning" />}
              </button>
            );
          })}
        </div>
      </nav>

      {paperView ? (
        <div className="space-y-6">
          {a.items.map((x, i) => (
            <div key={x.question.id} id={`item-${i}`} className="scroll-mt-40 space-y-3">
              {(i === 0 || a.items[i - 1].section !== x.section) && (
                <div className="pt-2">
                  <h2 className="font-display text-lg font-bold">{sectionOf(i).title}</h2>
                  <p className="text-sm text-muted">{sectionOf(i).instructions}</p>
                </div>
              )}
              <ItemBlock a={a} it={x} n={i + 1} />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <h2 className="font-display text-lg font-bold">{sectionOf(cur).title}</h2>
            <p className="text-sm text-muted">{sectionOf(cur).instructions}</p>
          </div>
          <ItemBlock key={it.question.id} a={a} it={it} n={cur + 1} />
          <div className="flex items-center justify-between gap-2">
            <button className="btn-secondary" disabled={cur === 0} onClick={() => setCurrent(a.id, cur - 1)}>
              <ChevronLeft size={16} /> Previous
            </button>
            {cur < a.items.length - 1 ? (
              <button className="btn-primary" onClick={() => setCurrent(a.id, cur + 1)}>
                Next <ChevronRight size={16} />
              </button>
            ) : (
              <button className="btn-primary" onClick={() => setConfirm(true)}>
                <Send size={15} /> Finish & submit
              </button>
            )}
          </div>
        </div>
      )}

      <ConfirmDialog
        open={confirm}
        title="Submit your exam?"
        message={
          <>
            You answered <b>{answered}</b> of {a.items.length} questions{a.flagged.length ? ` and flagged ${a.flagged.length}` : ""}.{answered < a.items.length && " Unanswered questions score 0."} After submitting you will see your mark out of 20 and a full review.
          </>
        }
        confirmLabel="Submit and grade"
        onConfirm={submit}
        onCancel={() => setConfirm(false)}
      />
    </div>
  );
}
