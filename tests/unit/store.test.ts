import { beforeEach, describe, expect, it, vi } from "vitest";
import { useExams } from "../../src/store/examStore";
import { useProgress } from "../../src/store/progressStore";
import type { ExamAttempt } from "../../src/exam/engine";

function attempt(deadline: number): ExamAttempt {
  return { id: "a1", examId: "exam-1", seed: 1, startedAt: 0, deadline, status: "in_progress", submittedAt: null, autoSubmitted: false, order: ["q"], optionOrder: {}, answers: {}, flagged: [], current: 0, result: null };
}

describe("exam store", () => {
  beforeEach(() => useExams.setState({ attempts: [] }));
  it("saves answers while the attempt is running", () => {
    useExams.getState().addAttempt(attempt(Date.now() + 60_000));
    useExams.getState().setAnswer("a1", "q", { choice: 2 });
    expect(useExams.getState().attempts[0].answers.q.choice).toBe(2);
  });
  it("freezes answers after the deadline and after submission", () => {
    useExams.getState().addAttempt(attempt(Date.now() - 1));
    useExams.getState().setAnswer("a1", "q", { choice: 1 });
    expect(useExams.getState().attempts[0].answers.q).toBeUndefined();
    useExams.setState({ attempts: [attempt(Date.now() + 60_000)] });
    useExams.getState().beginGrading("a1", 5, false);
    useExams.getState().setAnswer("a1", "q", { choice: 1 });
    expect(useExams.getState().attempts[0].answers.q).toBeUndefined();
    expect(useExams.getState().attempts[0].status).toBe("grading");
  });
  it("records auto-submission", () => {
    vi.useFakeTimers();
    useExams.getState().addAttempt(attempt(1000));
    useExams.getState().beginGrading("a1", 1000, true);
    expect(useExams.getState().attempts[0].autoSubmitted).toBe(true);
    vi.useRealTimers();
  });
});

describe("progress store", () => {
  beforeEach(() => useProgress.getState().resetAll());
  it("tracks practice attempts and latest correctness", () => {
    const p = useProgress.getState();
    p.recordPractice("q1", 0, false, "x");
    p.recordPractice("q1", 2, true, "x");
    const r = useProgress.getState().practice.q1;
    expect(r).toMatchObject({ attempts: 2, correct: 1, lastCorrect: true, lastChoice: 2 });
  });
  it("keeps the best exercise score", () => {
    const p = useProgress.getState();
    p.recordExerciseSubmission("e1", "a", 0.75, false, "E");
    p.recordExerciseSubmission("e1", "b", 0.5, false, "E");
    expect(useProgress.getState().exercises.e1).toMatchObject({ bestFraction: 0.75, attempts: 2, passed: false, code: "b" });
  });
  it("marks lessons complete and can undo", () => {
    useProgress.getState().markLessonComplete("l1", true, "L");
    expect(useProgress.getState().completedLessons.l1).toBeTypeOf("number");
    useProgress.getState().markLessonComplete("l1", false, "L");
    expect(useProgress.getState().completedLessons.l1).toBeUndefined();
  });
});
