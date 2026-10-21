import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Clock, PlayCircle, ListChecks, Save, Send, Flag, Timer } from "lucide-react";
import { EXAMS } from "../data/exams/exams";
import { EXAM_QUESTION_MAP } from "../data/exams/questions";
import { useExams, activeAttemptFor } from "../store/examStore";
import { createAttempt, newSeed } from "../exam/engine";
import { DifficultyChip } from "../components/ui/Chip";
import { ConfirmDialog } from "../components/ui/Dialog";
import { EmptyState } from "../components/ui/PageHeader";
import { KIND_LABEL, examTotals } from "../components/exam/examMeta";
import { allReadiness } from "../lib/analytics";
import { useProgress } from "../store/progressStore";
import { TOPICS } from "../data/sources";

export function ExamIntroPage() {
  const { examId = "" } = useParams();
  const exam = EXAMS.find((e) => e.id === examId);
  const attempts = useExams((s) => s.attempts);
  const addAttempt = useExams((s) => s.addAttempt);
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);
  const progress = useProgress();
  if (!exam) return <EmptyState title="Exam not found" />;
  const active = activeAttemptFor(attempts, exam.id);
  const { items, points } = examTotals(exam);
  const readiness = allReadiness(progress.completedLessons, progress.practice, progress.exercises);

  function start() {
    const id = `att-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
    addAttempt(createAttempt(exam!, EXAM_QUESTION_MAP, Date.now(), newSeed(), id));
    navigate(`/exams/attempt/${id}`);
  }

  const rules = [
    { icon: Timer, text: `You have ${exam.durationMinutes} minutes. The timer starts when you press Start and keeps running even if you refresh, close the tab or switch pages.` },
    { icon: Save, text: "Every answer is saved automatically as you work." },
    { icon: ListChecks, text: "Move freely between questions with the navigator. Unanswered questions are clearly marked." },
    { icon: Flag, text: "Flag questions you want to come back to." },
    { icon: Send, text: "Submit when you are done. When time runs out, the exam is submitted automatically with the answers saved so far." },
    { icon: PlayCircle, text: "In coding questions you can run your program as often as you like. Grading uses hidden test cases after submission. Hints are not available during the exam." },
  ];

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-up">
      <Link to="/exams" className="btn-ghost btn-sm">
        <ArrowLeft size={14} /> All exams
      </Link>
      <div className="card space-y-5 p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="label text-primary-text">Exam {exam.number}</p>
            <h1 className="text-2xl font-semibold">{exam.title}</h1>
            <p className="mt-1 text-sm text-muted">{exam.description}</p>
          </div>
          <DifficultyChip difficulty={exam.difficulty} />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-surface-2 p-3">
            <p className="label">Time</p>
            <p className="mt-1 flex items-center gap-1.5 text-lg font-semibold">
              <Clock size={16} /> {exam.durationMinutes} min
            </p>
          </div>
          <div className="rounded-xl bg-surface-2 p-3">
            <p className="label">Questions</p>
            <p className="mt-1 text-lg font-semibold">{items}</p>
          </div>
          <div className="rounded-xl bg-surface-2 p-3">
            <p className="label">Total points</p>
            <p className="mt-1 text-lg font-semibold">{points}</p>
          </div>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">Sections</h2>
          <table className="w-full text-sm">
            <tbody>
              {exam.sections.map((s) => (
                <tr key={s.kind} className="border-b border-line/60">
                  <td className="py-1.5 text-muted">{KIND_LABEL[s.kind]}</td>
                  <td className="py-1.5 text-right tabular-nums">{s.questionIds.length} questions</td>
                  <td className="py-1.5 text-right tabular-nums">{s.questionIds.length * s.pointsEach} pts</td>
                  <td className="py-1.5 text-right text-subtle tabular-nums">{Math.round(((s.questionIds.length * s.pointsEach) / points) * 100)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="mb-2 text-sm font-semibold">Instructions</h2>
          <ul className="space-y-2">
            {rules.map(({ icon: Icon, text }) => (
              <li key={text} className="flex gap-2.5 text-sm text-muted">
                <Icon size={16} className="mt-0.5 shrink-0 text-primary-text" /> {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
          <p className="mb-1.5 font-semibold">Exam readiness (based on your work so far — it never blocks you)</p>
          <ul className="grid gap-1 sm:grid-cols-3">
            {readiness.map((r) => (
              <li key={r.topicId} className="text-muted">
                Topic {TOPICS.find((t) => t.id === r.topicId)?.number}:{" "}
                <span className={r.status === "ready" ? "text-success-text" : r.status === "almost" ? "text-warning-text" : "text-subtle"}>
                  {r.status === "ready" ? "Ready" : r.status === "almost" ? "Almost ready" : "Not yet"}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {active ? (
            <Link to={`/exams/attempt/${active.id}`} className="btn-primary">
              <PlayCircle size={16} /> Resume your attempt
            </Link>
          ) : (
            <button className="btn-primary" onClick={() => setConfirm(true)} data-testid="start-exam">
              <PlayCircle size={16} /> Start exam
            </button>
          )}
        </div>
      </div>
      <ConfirmDialog
        open={confirm}
        title={`Start ${exam.title}?`}
        message={`The ${exam.durationMinutes}-minute timer starts immediately and cannot be paused.`}
        confirmLabel="Start now"
        onCancel={() => setConfirm(false)}
        onConfirm={start}
      />
    </div>
  );
}
