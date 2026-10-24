import { answerText } from "../components/questions/PracticeCard";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";

/** Submit (grade) an attempt and copy its wrong answers into the mistake notebook. */
export function finishExam(attemptId: string, now: number, auto: boolean) {
  const done = useExams.getState().submit(attemptId, now, auto);
  if (!done?.result) return done;
  const items = done.items.map((it) => {
    const r = done.result!.items.find((x) => x.qid === it.question.id)!;
    return { q: it.question, correct: r.status === "correct", answerText: answerText(it.question, done.answers[it.question.id]) };
  });
  useProgress.getState().recordExamMistakes(items, done.title, String(done.result.score));
  return done;
}
