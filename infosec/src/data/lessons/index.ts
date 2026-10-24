import type { Lesson, UnitId } from "../types";
import { CH1_LESSONS } from "./ch1";
import { CH2_LESSONS } from "./ch2";
import { CH3_LESSONS } from "./ch3";
import { CH4_LESSONS } from "./ch4";
import { LAB_LESSONS } from "./labs";

export const LESSONS: Lesson[] = [...CH1_LESSONS, ...CH2_LESSONS, ...CH3_LESSONS, ...CH4_LESSONS, ...LAB_LESSONS];

export const LESSON_BY_ID: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.id, l]));

export function lessonsForUnit(unitId: UnitId): Lesson[] {
  return LESSONS.filter((l) => l.unitId === unitId).sort((a, b) => a.order - b.order);
}
