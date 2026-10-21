import { Link } from "react-router-dom";
import { Clock, PlayCircle, ShieldAlert, Trophy, History } from "lucide-react";
import { PageHeader, EmptyState } from "../components/ui/PageHeader";
import { DifficultyChip, Chip } from "../components/ui/Chip";
import { EXAMS } from "../data/exams/exams";
import { useExams, activeAttemptFor } from "../store/examStore";
import { KIND_LABEL, examTotals } from "../components/exam/examMeta";
import { useNow } from "../lib/useNow";
import { formatDuration, remainingMs } from "../exam/engine";

export function ExamsPage() {
  const attempts = useExams((s) => s.attempts);
  const now = useNow(1000);
  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader
        eyebrow="Exam Simulator"
        title="Six timed practice exams"
        description="Each exam lasts 30 minutes and mixes multiple choice, code tracing, error identification and practical coding. The timer keeps running if you refresh or close the page."
      />
      <p className="flex gap-2 rounded-xl border border-line bg-surface-2 p-3 text-sm text-muted">
        <ShieldAlert size={16} className="mt-0.5 shrink-0 text-warning" />
        This is a self-study simulator that runs entirely in your browser. Answer keys are loaded only after you submit, but a browser-only app cannot be made tamper-proof, so it is not a secure examination system.
      </p>
      {EXAMS.length === 0 && <EmptyState title="Exams are being prepared" />}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {EXAMS.map((exam) => {
          const done = attempts.filter((a) => a.examId === exam.id && a.status === "submitted" && a.result);
          const best = done.reduce<number | null>((m, a) => (m === null ? a.result!.percentage : Math.max(m, a.result!.percentage)), null);
          const active = activeAttemptFor(attempts, exam.id);
          const { items, points } = examTotals(exam);
          return (
            <article key={exam.id} className="card flex flex-col gap-4 p-5" data-testid={`exam-card-${exam.number}`}>
              <div className="flex items-start gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-xl font-bold ${exam.difficulty === "easy" ? "bg-success-soft text-success-text" : exam.difficulty === "medium" ? "bg-warning-soft text-warning-text" : "bg-danger-soft text-danger-text"}`}
                  aria-hidden
                >
                  {exam.number}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-subtle">Exam {exam.number}</p>
                  <h2 className="text-lg leading-snug font-semibold">{exam.title}</h2>
                </div>
                <DifficultyChip difficulty={exam.difficulty} />
              </div>
              <p className="text-sm text-muted">{exam.description}</p>
              <ul className="space-y-1 text-sm text-muted">
                {exam.sections.map((s) => (
                  <li key={s.kind} className="flex justify-between">
                    <span>{KIND_LABEL[s.kind]}</span>
                    <span className="tabular-nums">
                      {s.questionIds.length} × {s.pointsEach} pts
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                <Chip>
                  <Clock size={12} /> {exam.durationMinutes} min
                </Chip>
                <Chip>
                  {items} questions · {points} pts
                </Chip>
                {best !== null && (
                  <Chip tone="success">
                    <Trophy size={12} /> Best {best}%
                  </Chip>
                )}
                {done.length > 0 && (
                  <Chip>
                    <History size={12} /> {done.length} attempt(s)
                  </Chip>
                )}
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {active && active.deadline > now ? (
                  <Link to={`/exams/attempt/${active.id}`} className="btn-primary">
                    <PlayCircle size={16} /> Resume · {formatDuration(remainingMs(active, now))} left
                  </Link>
                ) : (
                  <Link to={`/exams/${exam.id}`} className="btn-primary">
                    <PlayCircle size={16} /> {done.length ? "Retake exam" : "Open exam"}
                  </Link>
                )}
                {done.length > 0 && (
                  <Link to={`/exams/attempt/${done[done.length - 1].id}/review`} className="btn-secondary">
                    Latest review
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
