import type { Lesson } from "../types";
import { TOPIC2A_LESSONS } from "./topic2a";
import { TOPIC2B_LESSONS } from "./topic2b";
import { TOPIC3_LESSONS } from "./topic3";
import { TOPIC4_LESSONS } from "./topic4";

export const LESSONS: Lesson[] = [...TOPIC2A_LESSONS, ...TOPIC2B_LESSONS, ...TOPIC3_LESSONS, ...TOPIC4_LESSONS].sort((a, b) =>
  a.topicId === b.topicId ? a.order - b.order : a.topicId.localeCompare(b.topicId),
);

export const LESSON_MAP: Record<string, Lesson> = Object.fromEntries(LESSONS.map((l) => [l.id, l]));
