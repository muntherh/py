import { useEffect } from "react";
import { useExams } from "../../store/examStore";
import { submitAttempt } from "../../exam/submit";
import { isExpired } from "../../exam/engine";

/**
 * Runs everywhere in the app: submits attempts whose deadline has passed
 * (also after the page was closed and reopened) and resumes interrupted grading.
 */
export function ExamWatcher() {
  const attempts = useExams((s) => s.attempts);
  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      for (const a of useExams.getState().attempts) {
        if (isExpired(a, now)) void submitAttempt(a.id, true);
        else if (a.status === "grading") void submitAttempt(a.id, a.autoSubmitted);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [attempts.length]);
  return null;
}
