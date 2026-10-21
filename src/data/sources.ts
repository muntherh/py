// Registry of the course files supplied by the student, with assessment scope.
// Slide/page/cell numbers here were established from the files themselves
// (see docs/curriculum for the full per-slide transcriptions).

import type { SourceFileId, SourceRef, TopicId } from "./types";

export interface TopicInfo {
  id: TopicId;
  number: number;
  title: string;
  shortTitle: string;
  sourceFile: SourceFileId;
  description: string;
}

export const TOPICS: TopicInfo[] = [
  {
    id: "t2",
    number: 2,
    title: "Variables, Expressions and Statements",
    shortTitle: "Variables & Expressions",
    sourceFile: "topic2",
    description:
      "Values and data types, strings and escape sequences, variables and naming rules, operators, expressions, precedence, input/output and comments.",
  },
  {
    id: "t3",
    number: 3,
    title: "Conditional Execution",
    shortTitle: "Conditionals",
    sourceFile: "topic3",
    description:
      "if statements, alternative execution (if…else), conditional expressions, chained conditionals (elif) and nested conditions.",
  },
  {
    id: "t4",
    number: 4,
    title: "Iteration: While Loops (slides 1–18)",
    shortTitle: "While Loops",
    sourceFile: "topic4",
    description:
      "What iteration is, the while loop (syntax, flow, conditions), counting and accumulating with while, and while loops with conditionals.",
  },
];

export type UnitLabel = "Slide" | "Page" | "Cell";

export interface ScopeRange {
  from: number;
  to: number;
}

export interface SourceFile {
  id: SourceFileId;
  fileName: string;
  title: string;
  kind: "pptx" | "pdf" | "notebook";
  unitLabel: UnitLabel;
  totalUnits: number;
  topicIds: TopicId[];
  /** Units that may be used for lessons and questions. */
  inScope: ScopeRange[];
  /** Human-readable explanation of what is excluded and why. */
  scopeNote: string;
  /** Units with known errors that must not be used as an answer source. */
  doNotUseAsAnswer?: { unit: number; reason: string }[];
  /** Preview image path pattern for a unit, if images exist ({n} = unit number). */
  preview?: string;
  /** For PDFs: exercise number -> page. */
  items?: Record<string, number>;
}

export const SOURCE_FILES: Record<SourceFileId, SourceFile> = {
  topic2: {
    id: "topic2",
    fileName: "Topic 2 - Variables expressions and statements.pptx",
    title: "Topic 2 — Variables, Expressions and Statements",
    kind: "pptx",
    unitLabel: "Slide",
    totalUnits: 83,
    topicIds: ["t2"],
    inScope: [{ from: 1, to: 83 }],
    scopeNote: "All 83 slides are in scope (slide 83 is the reference list).",
    preview: "sources/t2-{n}.webp",
  },
  topic3: {
    id: "topic3",
    fileName: "Topic 3 - Conditional Execution.pptx",
    title: "Topic 3 — Conditional Execution",
    kind: "pptx",
    unitLabel: "Slide",
    totalUnits: 50,
    topicIds: ["t3"],
    inScope: [{ from: 1, to: 50 }],
    scopeNote: "All 50 slides are in scope.",
    preview: "sources/t3-{n}.webp",
  },
  topic4: {
    id: "topic4",
    fileName: "Topic 4 - Iterations.pptx",
    title: "Topic 4 — Iteration",
    kind: "pptx",
    unitLabel: "Slide",
    totalUnits: 55,
    topicIds: ["t4"],
    inScope: [{ from: 1, to: 18 }],
    scopeNote:
      "Scope ends before slide 19, the section title “Infinite loop”. Slides 19–55 (infinite loops, for loops, range(), " +
      "loops with conditions, break, continue, nested loops) are excluded and never used for lessons, questions or answers.",
    preview: "sources/t4-{n}.webp",
  },
  pe1: {
    id: "pe1",
    fileName: "Practice_Exercises-I.pdf",
    title: "Practice Exercises I (Worked Examples)",
    kind: "pdf",
    unitLabel: "Page",
    totalUnits: 1,
    topicIds: ["t2"],
    inScope: [{ from: 1, to: 1 }],
    scopeNote: "One page, exercises 1–5 (input/output and arithmetic). All in scope.",
    preview: "sources/pe1-{n}.webp",
    items: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1 },
  },
  pe3: {
    id: "pe3",
    fileName: "Practice_ExercisesIIII.pdf",
    title: "Practice Exercises III (Conditionals)",
    kind: "pdf",
    unitLabel: "Page",
    totalUnits: 2,
    topicIds: ["t3"],
    inScope: [{ from: 1, to: 2 }],
    scopeNote: "Two pages, exercises 1–7 (conditional execution). All in scope.",
    preview: "sources/pe3-{n}.webp",
    items: { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 2 },
  },
  "lab-ch2-practice-ii": {
    id: "lab-ch2-practice-ii",
    fileName: "Ch2__Practice__II_1.ipynb",
    title: "Chapter 2 Practice II (notebook)",
    kind: "notebook",
    unitLabel: "Cell",
    totalUnits: 13,
    topicIds: ["t2"],
    inScope: [{ from: 1, to: 13 }],
    scopeNote:
      "All cells are Topic 2 material. Cells are numbered from the top of the notebook, counting every cell.",
  },
  "lab-ch3-ii": {
    id: "lab-ch3-ii",
    fileName: "Ch3_Lab_exercise_II.html",
    title: "Chapter 3 Lab Exercise II (notebook export)",
    kind: "notebook",
    unitLabel: "Cell",
    totalUnits: 33,
    topicIds: ["t2", "t3"],
    inScope: [{ from: 1, to: 33 }],
    scopeNote: "All cells are in scope (Topics 2–3). Cells are numbered from the top, counting every cell.",
    doNotUseAsAnswer: [
      {
        unit: 11,
        reason:
          "Compares the strings 'raining' and 'no transport' with True, which is always False, so it always prints “Stay on Campus”. Cell 12 is the runnable fix (but see cell 12's note).",
      },
      {
        unit: 12,
        reason:
          "Runs correctly, but combines the two cases with `and` while the task in cell 10 says “raining OR no transport”, so it only chooses online when both are true.",
      },
      {
        unit: 25,
        reason:
          "Tests daily_hours against the weekly thresholds (35/20). The task and cell 24's table use weekly hours; cell 27 is the correct version.",
      },
    ],
  },
  "lab-ch3-iii": {
    id: "lab-ch3-iii",
    fileName: "Ch3_Lab_exercise_III.html",
    title: "Chapter 3 Lab Exercise III (notebook export)",
    kind: "notebook",
    unitLabel: "Cell",
    totalUnits: 32,
    topicIds: ["t2", "t3"],
    inScope: [{ from: 1, to: 32 }],
    scopeNote: "All cells are in scope (Topics 2–3). Cells are numbered from the top, counting every cell.",
    doNotUseAsAnswer: [
      {
        unit: 4,
        reason:
          "Uses / instead of // for the free pizzas, so free pizzas can be fractional; cell 3 (// ) matches the sample output.",
      },
      {
        unit: 29,
        reason:
          "The task says “below 50 → Failed” but says nothing about marks from 50 to 59; the code in cell 30 prints “Failed” for every mark below 60.",
      },
    ],
  },
  "lab-ch3-iiii": {
    id: "lab-ch3-iiii",
    fileName: "Ch3_Lab_exercise_IIII.html",
    title: "Chapter 3 Lab Exercise IIII (notebook export)",
    kind: "notebook",
    unitLabel: "Cell",
    totalUnits: 28,
    topicIds: ["t2", "t3"],
    inScope: [{ from: 1, to: 28 }],
    scopeNote:
      "All cells are in scope. Cells 1–8 are Topic 2 revision; cells 10–28 are Topic 3 (incl. solutions to Practice Exercises III Q3–Q5).",
    doNotUseAsAnswer: [
      { unit: 2, reason: "The list of ‘declarations’ (e.g. “A -value”) is ambiguous and cannot be checked reliably." },
      { unit: 3, reason: "Uses curly quotes and Print (capital P), so as written it raises errors; intended answer unclear." },
      { unit: 4, reason: "Uses curly quotes and Print (capital P); intended answer unclear." },
      {
        unit: 12,
        reason:
          "The grade ranges use upper limits like total <= 89, which leave gaps: a total such as 89.5 matches no branch, Grade is never assigned, and print raises NameError.",
      },
    ],
  },
  "lab-ch4-iiii": {
    id: "lab-ch4-iiii",
    fileName: "Ch4_Lab_exercise_IIII.html",
    title: "Chapter 4 Lab Exercise IIII (notebook export)",
    kind: "notebook",
    unitLabel: "Cell",
    totalUnits: 24,
    topicIds: ["t3", "t4"],
    inScope: [
      { from: 1, to: 4 },
      { from: 12, to: 13 },
    ],
    scopeNote:
      "Only cells 1–4 (rainfall decision, while loop version) and 12–13 (practice hours with a while loop) are in scope. " +
      "Cells 5–11 and 14–24 use for loops, range(), break, continue or while True, which come after the Topic 4 cut-off.",
    doNotUseAsAnswer: [
      {
        unit: 4,
        reason:
          "Computes avg = total/days inside the loop (divides by the last day's value instead of 3) and only checks the last day for ≥ 40 mm.",
      },
    ],
  },
};

export const SOURCE_FILE_LIST = Object.values(SOURCE_FILES);

export function topicById(id: TopicId): TopicInfo {
  const t = TOPICS.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown topic ${id}`);
  return t;
}

export function isUnitInScope(file: SourceFileId, unit: number): boolean {
  const f = SOURCE_FILES[file];
  return f.inScope.some((r) => unit >= r.from && unit <= r.to);
}

export function formatSourceRef(ref: SourceRef): string {
  const f = SOURCE_FILES[ref.file];
  const units = ref.units;
  const label = units.length > 1 ? `${f.unitLabel}s` : f.unitLabel;
  const unitText = compressRanges(units);
  const item = ref.item ? ` · Exercise ${ref.item}` : "";
  return `${f.title} | ${label} ${unitText}${item}`;
}

export function compressRanges(nums: number[]): string {
  const sorted = [...new Set(nums)].sort((a, b) => a - b);
  const parts: string[] = [];
  let start = sorted[0];
  let prev = sorted[0];
  for (let i = 1; i <= sorted.length; i++) {
    const n = sorted[i];
    if (n === prev + 1) {
      prev = n;
      continue;
    }
    parts.push(start === prev ? `${start}` : `${start}–${prev}`);
    start = n;
    prev = n;
  }
  return parts.join(", ");
}

export function previewUrl(file: SourceFileId, unit: number): string | null {
  const f = SOURCE_FILES[file];
  if (!f.preview || !isUnitInScope(file, unit)) return null;
  return f.preview.replace("{n}", String(unit));
}
