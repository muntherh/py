import type { PracticeMcq } from "../types";
import { MCQ_T2A } from "./mcq-t2a";
import { MCQ_T2B } from "./mcq-t2b";
import { MCQ_T3 } from "./mcq-t3";
import { MCQ_T4 } from "./mcq-t4";

export const PRACTICE_MCQS: PracticeMcq[] = [...MCQ_T2A, ...MCQ_T2B, ...MCQ_T3, ...MCQ_T4];
export const PRACTICE_MCQ_MAP: Record<string, PracticeMcq> = Object.fromEntries(PRACTICE_MCQS.map((q) => [q.id, q]));
