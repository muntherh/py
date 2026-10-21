// Exam questions WITHOUT answers. Answer keys live in ./answers.ts, which the app
// loads only when an exam is submitted.
import type { Question } from "../types";
import { EXAM12_QUESTIONS } from "./questions-12";
import { EXAM34_QUESTIONS } from "./questions-34";
import { EXAM56_QUESTIONS } from "./questions-56";

export const EXAM_QUESTIONS: Question[] = [...EXAM12_QUESTIONS, ...EXAM34_QUESTIONS, ...EXAM56_QUESTIONS];
export const EXAM_QUESTION_MAP: Record<string, Question> = Object.fromEntries(EXAM_QUESTIONS.map((q) => [q.id, q]));
