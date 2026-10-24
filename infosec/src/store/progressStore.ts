// Learning progress: lessons, question attempts, mistakes, flashcards, crypto drills, activity.
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Question } from "../data/types";
import { idbStorage } from "./idbStorage";

export interface QuestionRecord {
  attempts: number;
  correct: number;
  /** Sum of fractions (partial credit) — used for mastery. */
  scoreSum: number;
  lastCorrect: boolean;
  lastAt: number;
}

export interface MistakeEntry {
  qid: string;
  /** Snapshot so generated (exam-only) questions can be reviewed later. */
  question: Question;
  from: "practice" | "exam" | "crypto";
  timesWrong: number;
  lastWrongAt: number;
  lastAnswer: string;
  resolved: boolean;
}

export interface FlashcardRecord {
  /** Leitner box 0–4 (0 = new/again). */
  box: number;
  seen: number;
  lastAt: number;
}

export interface ActivityItem {
  at: number;
  kind: "lesson" | "practice" | "exam" | "flashcard" | "crypto";
  text: string;
  link?: string;
}

interface ProgressState {
  completedLessons: Record<string, number>;
  questions: Record<string, QuestionRecord>;
  mistakes: Record<string, MistakeEntry>;
  flashcards: Record<string, FlashcardRecord>;
  cryptoSolved: number;
  cryptoAttempts: number;
  activity: ActivityItem[];
  markLesson: (id: string, done: boolean, title: string) => void;
  recordAnswer: (q: Question, fraction: number, correct: boolean, answerText: string, from: MistakeEntry["from"]) => void;
  /** Exam results feed the mistake notebook only (exam marks are counted from the attempt itself). */
  recordExamMistakes: (items: { q: Question; correct: boolean; answerText: string }[], title: string, score: string) => void;
  resolveMistake: (qid: string, resolved: boolean) => void;
  removeMistake: (qid: string) => void;
  rateFlashcard: (id: string, knew: boolean) => void;
  recordCrypto: (correct: boolean, label: string) => void;
  log: (item: Omit<ActivityItem, "at">) => void;
  resetAll: () => void;
}

const empty = {
  completedLessons: {},
  questions: {},
  mistakes: {},
  flashcards: {},
  cryptoSolved: 0,
  cryptoAttempts: 0,
  activity: [] as ActivityItem[],
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...empty,
      markLesson: (id, done, title) => {
        const next = { ...get().completedLessons };
        if (done) next[id] = Date.now();
        else delete next[id];
        set({ completedLessons: next });
        if (done) get().log({ kind: "lesson", text: `Completed “${title}”`, link: `/learn/${id}` });
      },
      recordAnswer: (q, fraction, correct, answerText, from) => {
        const prev = get().questions[q.id];
        const rec: QuestionRecord = {
          attempts: (prev?.attempts ?? 0) + 1,
          correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
          scoreSum: (prev?.scoreSum ?? 0) + fraction,
          lastCorrect: correct,
          lastAt: Date.now(),
        };
        const mistakes = { ...get().mistakes };
        const m = mistakes[q.id];
        if (!correct) {
          mistakes[q.id] = {
            qid: q.id,
            question: q,
            from,
            timesWrong: (m?.timesWrong ?? 0) + 1,
            lastWrongAt: Date.now(),
            lastAnswer: answerText,
            resolved: false,
          };
        } else if (m && !m.resolved) {
          // Answering a past mistake correctly marks it resolved (it stays in the notebook history).
          mistakes[q.id] = { ...m, resolved: true };
        }
        set({ questions: { ...get().questions, [q.id]: rec }, mistakes });
      },
      recordExamMistakes: (items, title, score) => {
        const mistakes = { ...get().mistakes };
        for (const { q, correct, answerText } of items) {
          const m = mistakes[q.id];
          if (!correct) mistakes[q.id] = { qid: q.id, question: q, from: "exam", timesWrong: (m?.timesWrong ?? 0) + 1, lastWrongAt: Date.now(), lastAnswer: answerText, resolved: false };
        }
        set({ mistakes });
        get().log({ kind: "exam", text: `${title}: ${score} / 20` });
      },
      resolveMistake: (qid, resolved) => {
        const m = get().mistakes[qid];
        if (m) set({ mistakes: { ...get().mistakes, [qid]: { ...m, resolved } } });
      },
      removeMistake: (qid) => {
        const next = { ...get().mistakes };
        delete next[qid];
        set({ mistakes: next });
      },
      rateFlashcard: (id, knew) => {
        const prev = get().flashcards[id] ?? { box: 0, seen: 0, lastAt: 0 };
        const box = knew ? Math.min(4, prev.box + 1) : 0;
        set({ flashcards: { ...get().flashcards, [id]: { box, seen: prev.seen + 1, lastAt: Date.now() } } });
      },
      recordCrypto: (correct, label) => {
        set({ cryptoAttempts: get().cryptoAttempts + 1, cryptoSolved: get().cryptoSolved + (correct ? 1 : 0) });
        get().log({ kind: "crypto", text: `${correct ? "Solved" : "Attempted"}: ${label}`, link: "/crypto" });
      },
      log: (item) => set({ activity: [{ ...item, at: Date.now() }, ...get().activity].slice(0, 60) }),
      resetAll: () => set({ ...empty, activity: [] }),
    }),
    { name: "isma-progress", storage: createJSONStorage(() => idbStorage), version: 1 },
  ),
);
