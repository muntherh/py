// Loaded lazily (dynamic import) only after an exam is submitted.
import type { AnswerKey } from "../types";
import { EXAM12_ANSWERS } from "./answers-12";
import { EXAM34_ANSWERS } from "./answers-34";
import { EXAM56_ANSWERS } from "./answers-56";

export const EXAM_ANSWERS: Record<string, AnswerKey> = { ...EXAM12_ANSWERS, ...EXAM34_ANSWERS, ...EXAM56_ANSWERS };
