import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { AnswerValue } from "../data/types";
import { gradeAttempt, type ExamAttempt } from "../exam/engine";
import { idbStorage } from "./idbStorage";

interface ExamState {
  attempts: ExamAttempt[];
  start: (a: ExamAttempt) => void;
  answer: (attemptId: string, qid: string, value: AnswerValue | undefined) => void;
  toggleFlag: (attemptId: string, qid: string) => void;
  setCurrent: (attemptId: string, index: number) => void;
  submit: (attemptId: string, now: number, auto: boolean) => ExamAttempt | undefined;
  remove: (attemptId: string) => void;
  resetAll: () => void;
}

function patch(attempts: ExamAttempt[], id: string, fn: (a: ExamAttempt) => ExamAttempt): ExamAttempt[] {
  return attempts.map((a) => (a.id === id ? fn(a) : a));
}

export const useExams = create<ExamState>()(
  persist(
    (set, get) => ({
      attempts: [],
      start: (a) => set({ attempts: [a, ...get().attempts] }),
      answer: (id, qid, value) =>
        set({
          attempts: patch(get().attempts, id, (a) => {
            if (a.status !== "in_progress") return a;
            const answers = { ...a.answers };
            if (value) answers[qid] = value;
            else delete answers[qid];
            return { ...a, answers };
          }),
        }),
      toggleFlag: (id, qid) =>
        set({
          attempts: patch(get().attempts, id, (a) => ({ ...a, flagged: a.flagged.includes(qid) ? a.flagged.filter((x) => x !== qid) : [...a.flagged, qid] })),
        }),
      setCurrent: (id, index) => set({ attempts: patch(get().attempts, id, (a) => ({ ...a, current: index })) }),
      submit: (id, now, auto) => {
        let done: ExamAttempt | undefined;
        set({
          attempts: patch(get().attempts, id, (a) => {
            if (a.status !== "in_progress") return a;
            done = { ...a, status: "submitted", submittedAt: now, autoSubmitted: auto, result: gradeAttempt(a, now) };
            return done;
          }),
        });
        return done;
      },
      remove: (id) => set({ attempts: get().attempts.filter((a) => a.id !== id) }),
      resetAll: () => set({ attempts: [] }),
    }),
    { name: "isma-exams", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
