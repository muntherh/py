import type { PracticeExercise } from "../types";
import { EXERCISES_T2 } from "./exercises-t2";
import { EXERCISES_T3 } from "./exercises-t3";
import { EXERCISES_T4 } from "./exercises-t4";

export const EXERCISES: PracticeExercise[] = [...EXERCISES_T2, ...EXERCISES_T3, ...EXERCISES_T4];
export const EXERCISE_MAP: Record<string, PracticeExercise> = Object.fromEntries(EXERCISES.map((e) => [e.id, e]));
