import type { Question, UnitId } from "../types";
import { CH1_QUESTIONS } from "./ch1";
import { CH2_QUESTIONS } from "./ch2";
import { CH3_QUESTIONS } from "./ch3";
import { CH4_QUESTIONS } from "./ch4";
import { LAB_QUESTIONS } from "./labs";

export const QUESTIONS: Question[] = [...CH1_QUESTIONS, ...CH2_QUESTIONS, ...CH3_QUESTIONS, ...CH4_QUESTIONS, ...LAB_QUESTIONS];

export const QUESTION_BY_ID: Record<string, Question> = Object.fromEntries(QUESTIONS.map((q) => [q.id, q]));

export function questionsForUnit(unitId: UnitId): Question[] {
  return QUESTIONS.filter((q) => q.unitId === unitId);
}
