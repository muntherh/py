// Learning progress: lessons, practice questions, coding exercises, activity.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { idbStorage } from "./idbStorage";

export interface PracticeRecord {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
  lastAt: number;
  lastChoice: number;
}

export interface ExerciseRecord {
  code: string;
  attempts: number;
  bestFraction: number;
  passed: boolean;
  lastSubmittedAt: number | null;
  hintsRevealed: number;
  updatedAt: number;
}

export interface ActivityItem {
  at: number;
  kind: "lesson" | "practice" | "exercise" | "exam";
  text: string;
  link?: string;
}

interface ProgressState {
  completedLessons: Record<string, number>;
  lessonVisits: Record<string, number>;
  practice: Record<string, PracticeRecord>;
  exercises: Record<string, ExerciseRecord>;
  activity: ActivityItem[];
  markLessonComplete: (lessonId: string, done: boolean, title: string) => void;
  visitLesson: (lessonId: string) => void;
  recordPractice: (qid: string, choice: number, correct: boolean, text: string) => void;
  saveExerciseCode: (exId: string, code: string) => void;
  recordExerciseSubmission: (exId: string, code: string, fraction: number, passed: boolean, title: string) => void;
  revealHint: (exId: string, level: number) => void;
  logActivity: (item: Omit<ActivityItem, "at">) => void;
  resetAll: () => void;
}

const empty = { completedLessons: {}, lessonVisits: {}, practice: {}, exercises: {}, activity: [] as ActivityItem[] };

function blankExercise(): ExerciseRecord {
  return { code: "", attempts: 0, bestFraction: 0, passed: false, lastSubmittedAt: null, hintsRevealed: 0, updatedAt: Date.now() };
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      markLessonComplete: (lessonId, done, title) => {
        const completed = { ...get().completedLessons };
        if (done) completed[lessonId] = Date.now();
        else delete completed[lessonId];
        set({ completedLessons: completed });
        if (done) get().logActivity({ kind: "lesson", text: `Completed lesson “${title}”`, link: `/learn/${lessonId}` });
      },
      visitLesson: (lessonId) => set({ lessonVisits: { ...get().lessonVisits, [lessonId]: Date.now() } }),
      recordPractice: (qid, choice, correct, text) => {
        const prev = get().practice[qid];
        const rec: PracticeRecord = {
          attempts: (prev?.attempts ?? 0) + 1,
          correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
          lastCorrect: correct,
          lastAt: Date.now(),
          lastChoice: choice,
        };
        set({ practice: { ...get().practice, [qid]: rec } });
        get().logActivity({ kind: "practice", text: `${correct ? "Correct" : "Incorrect"}: ${text}` });
      },
      saveExerciseCode: (exId, code) => {
        const prev = get().exercises[exId] ?? blankExercise();
        set({ exercises: { ...get().exercises, [exId]: { ...prev, code, updatedAt: Date.now() } } });
      },
      recordExerciseSubmission: (exId, code, fraction, passed, title) => {
        const prev = get().exercises[exId] ?? blankExercise();
        set({
          exercises: {
            ...get().exercises,
            [exId]: {
              ...prev,
              code,
              attempts: prev.attempts + 1,
              bestFraction: Math.max(prev.bestFraction, fraction),
              passed: prev.passed || passed,
              lastSubmittedAt: Date.now(),
              updatedAt: Date.now(),
            },
          },
        });
        get().logActivity({
          kind: "exercise",
          text: `${passed ? "Solved" : `Submitted (${Math.round(fraction * 100)}%)`} “${title}”`,
          link: `/lab/exercise/${exId}`,
        });
      },
      revealHint: (exId, level) => {
        const prev = get().exercises[exId] ?? blankExercise();
        set({ exercises: { ...get().exercises, [exId]: { ...prev, hintsRevealed: Math.max(prev.hintsRevealed, level) } } });
      },
      logActivity: (item) => set({ activity: [{ ...item, at: Date.now() }, ...get().activity].slice(0, 60) }),
      resetAll: () => set({ ...empty, activity: [] }),
    }),
    { name: "pml-progress", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
