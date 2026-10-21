import type { ExamDefinition } from "../types";
import { EXAM12_DEFS } from "./questions-12";
import { EXAM34_DEFS } from "./questions-34";
import { EXAM56_DEFS } from "./questions-56";

export const EXAMS: ExamDefinition[] = [...EXAM12_DEFS, ...EXAM34_DEFS, ...EXAM56_DEFS].sort((a, b) => a.number - b.number);
