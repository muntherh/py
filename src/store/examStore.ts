// Exam attempts, persisted so the timer and answers survive refreshes.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ExamAnswer, ExamAttempt, ExamResult } from "../exam/engine";
import { idbStorage } from "./idbStorage";

interface ExamState {
  attempts: ExamAttempt[];
  addAttempt: (a: ExamAttempt) => void;
  setAnswer: (attemptId: string, qid: string, answer: Omit<ExamAnswer, "updatedAt">) => void;
  toggleFlag: (attemptId: string, qid: string) => void;
  setCurrent: (attemptId: string, index: number) => void;
  beginGrading: (attemptId: string, submittedAt: number, auto: boolean) => void;
  finishGrading: (attemptId: string, result: ExamResult) => void;
  deleteAttempt: (attemptId: string) => void;
  resetAll: () => void;
}

function update(attempts: ExamAttempt[], id: string, fn: (a: ExamAttempt) => ExamAttempt): ExamAttempt[] {
  return attempts.map((a) => (a.id === id ? fn(a) : a));
}

export const useExams = create<ExamState>()(
  persist(
    (set, get) => ({
      attempts: [],
      addAttempt: (a) => set({ attempts: [...get().attempts, a] }),
      setAnswer: (attemptId, qid, answer) =>
        set({
          attempts: update(get().attempts, attemptId, (a) =>
            // Answers are frozen once the attempt leaves "in_progress" or the deadline passed.
            a.status !== "in_progress" || Date.now() >= a.deadline
              ? a
              : { ...a, answers: { ...a.answers, [qid]: { ...answer, updatedAt: Date.now() } } },
          ),
        }),
      toggleFlag: (attemptId, qid) =>
        set({
          attempts: update(get().attempts, attemptId, (a) => ({
            ...a,
            flagged: a.flagged.includes(qid) ? a.flagged.filter((x) => x !== qid) : [...a.flagged, qid],
          })),
        }),
      setCurrent: (attemptId, index) => set({ attempts: update(get().attempts, attemptId, (a) => ({ ...a, current: index })) }),
      beginGrading: (attemptId, submittedAt, auto) =>
        set({
          attempts: update(get().attempts, attemptId, (a) =>
            a.status === "in_progress" ? { ...a, status: "grading", submittedAt, autoSubmitted: auto } : a,
          ),
        }),
      finishGrading: (attemptId, result) =>
        set({ attempts: update(get().attempts, attemptId, (a) => ({ ...a, status: "submitted", result })) }),
      deleteAttempt: (attemptId) => set({ attempts: get().attempts.filter((a) => a.id !== attemptId) }),
      resetAll: () => set({ attempts: [] }),
    }),
    { name: "pml-exams", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);

export function activeAttemptFor(attempts: ExamAttempt[], examId: string): ExamAttempt | undefined {
  return attempts.find((a) => a.examId === examId && a.status === "in_progress");
}
