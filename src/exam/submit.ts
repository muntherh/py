// Submits (or auto-submits) an attempt: freezes answers, lazily loads the
// answer keys, grades (running coding answers in the Python worker) and stores the result.
import { EXAMS } from "../data/exams/exams";
import { EXAM_QUESTION_MAP } from "../data/exams/questions";
import { pythonRunner } from "../runtime/PythonRunner";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";
import { useSettings } from "../store/settingsStore";
import { gradeAttempt } from "./engine";

const inFlight = new Set<string>();
type Listener = (attemptId: string, done: number, total: number) => void;
const listeners = new Set<Listener>();

export function onGradingProgress(fn: Listener): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export async function submitAttempt(attemptId: string, auto: boolean): Promise<void> {
  const store = useExams.getState();
  const attempt = store.attempts.find((a) => a.id === attemptId);
  if (!attempt) return;
  if (attempt.status === "in_progress") {
    // An auto-submission is recorded at the deadline, not at the moment we noticed it.
    store.beginGrading(attemptId, auto ? attempt.deadline : Math.min(Date.now(), attempt.deadline), auto);
  }
  if (inFlight.has(attemptId)) return;
  const frozen = useExams.getState().attempts.find((a) => a.id === attemptId);
  if (!frozen || frozen.status !== "grading") return;
  inFlight.add(attemptId);
  try {
    const exam = EXAMS.find((e) => e.id === frozen.examId);
    if (!exam) throw new Error(`Unknown exam ${frozen.examId}`);
    const { EXAM_ANSWERS } = await import("../data/exams/answers");
    const timeoutMs = Math.max(3, Math.min(useSettings.getState().timeoutSeconds, 10)) * 1000;
    const result = await gradeAttempt(
      frozen,
      exam,
      EXAM_QUESTION_MAP,
      EXAM_ANSWERS,
      (code, inputs) => pythonRunner.run({ code, inputs, timeoutMs }),
      frozen.submittedAt ?? Date.now(),
      (done, total) => listeners.forEach((fn) => fn(attemptId, done, total)),
    );
    useExams.getState().finishGrading(attemptId, result);
    useProgress.getState().logActivity({
      kind: "exam",
      text: `${exam.title}: ${result.score}/${result.maxScore} (${result.percentage}%)${frozen.autoSubmitted ? " — auto-submitted" : ""}`,
      link: `/exams/attempt/${attemptId}/review`,
    });
  } finally {
    inFlight.delete(attemptId);
  }
}

export function isGrading(attemptId: string): boolean {
  return inFlight.has(attemptId);
}
