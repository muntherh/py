import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isExpired } from "../../exam/engine";
import { useNow } from "../../lib/useNow";
import { finishExam } from "../../lib/finishExam";
import { useExams } from "../../store/examStore";

/** Auto-submits any exam whose deadline has passed, even if its page is not open. */
export function ExamWatcher() {
  const attempts = useExams((s) => s.attempts);
  const now = useNow(1000);
  const navigate = useNavigate();
  useEffect(() => {
    for (const a of attempts) {
      if (isExpired(a, now)) {
        finishExam(a.id, a.deadline, true);
        navigate(`/exams/attempt/${a.id}/review`);
      }
    }
  }, [attempts, now, navigate]);
  return null;
}
