// Data model for curriculum, questions and exams.
// Every educational item carries SourceRefs pointing at real slides/pages/cells.

export type TopicId = "t2" | "t3" | "t4";
export type Difficulty = "easy" | "medium" | "hard";

export type SourceFileId =
  | "topic2"
  | "topic3"
  | "topic4"
  | "pe1"
  | "pe3"
  | "lab-ch2-practice-ii"
  | "lab-ch3-ii"
  | "lab-ch3-iii"
  | "lab-ch3-iiii"
  | "lab-ch4-iiii";

export interface SourceRef {
  file: SourceFileId;
  /** Slide numbers (pptx), page numbers (pdf) or cell numbers (notebook). */
  units: number[];
  /** Exercise number inside a PDF page, when relevant. */
  item?: string;
  /** What the cited unit shows, in a few words. */
  note?: string;
}

/**
 * How an item relates to the source material.
 * - "source": taken from the source (wording may be lightly edited for clarity)
 * - "adapted": a variation of a source example/exercise
 * - "original": a new practice item written for this platform that tests a concept the source teaches
 */
export type Origin = "source" | "adapted" | "original";

export interface Concept {
  id: string;
  topicId: TopicId;
  title: string;
  summary: string;
  sources: SourceRef[];
  mistakes: string[];
  difficulty: Difficulty;
  prerequisites: string[];
  examEligible: boolean;
}

export interface CodeLineNote {
  line: number;
  text: string;
}

export interface LessonExample {
  title: string;
  code: string;
  /** Inputs typed by the user when the example runs (used for the expected-output transcript). */
  inputs?: string[];
  /**
   * Exact terminal transcript produced by real Python: prompts and typed input are shown
   * as they would appear in a terminal (prompt + typed value + newline). Verified by script.
   */
  output: string;
  /** Set when the example intentionally raises an error; output then ends with the error line. */
  raises?: string;
  lineNotes?: CodeLineNote[];
  source: SourceRef;
  origin: Origin;
}

export interface CommonMistake {
  title: string;
  wrong?: string;
  right?: string;
  explanation: string;
}

export interface LessonSection {
  heading: string;
  /** Paragraphs. Supports `inline code` and **bold**. */
  body: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  source?: SourceRef;
}

export interface Lesson {
  id: string;
  topicId: TopicId;
  order: number;
  title: string;
  conceptIds: string[];
  sources: SourceRef[];
  /** Simple-English explanation. */
  explanation: LessonSection[];
  keyPoints: string[];
  examples: LessonExample[];
  mistakes: CommonMistake[];
  tryIt: { prompt: string; starterCode: string; inputsHint?: string };
  /** IDs of practice MCQs used as the quick knowledge check. */
  quickCheck: string[];
  /** Notes about errors/ambiguities found in the source slides for this lesson. */
  sourceNotes?: string[];
}

// ---------------------------------------------------------------- questions

export type QuestionKind = "mcq" | "tracing" | "error" | "coding";

interface QuestionBase {
  id: string;
  kind: QuestionKind;
  topicId: TopicId;
  conceptIds: string[];
  difficulty: Difficulty;
  sources: SourceRef[];
  origin: Origin;
  prompt: string;
  code?: string;
}

export interface McqQuestion extends QuestionBase {
  kind: "mcq";
  options: string[];
  /** When true, the correct option is exactly the stdout of `code` (checked by the verifier). */
  answerIsOutput?: boolean;
}

export interface TracingQuestion extends QuestionBase {
  kind: "tracing";
  code: string;
  /** Lines typed by the user when the program runs (shown to the student). */
  inputs?: string[];
}

export interface ErrorQuestion extends QuestionBase {
  kind: "error";
  code: string;
  options: string[];
  /** The exception class Python really raises for `code` (verified by running it). */
  errorType: string;
  /** Line number Python reports (verified when given). */
  errorLine?: number;
  /** Inputs needed to reach the error, if the program reads input. */
  inputs?: string[];
}

export type OutputCheck =
  /** stdout contains the text (whitespace-normalised; case-insensitive unless caseSensitive). */
  | { type: "contains"; text: string; caseSensitive?: boolean; label?: string }
  | { type: "notContains"; text: string; caseSensitive?: boolean; label?: string }
  /** Some number printed in stdout equals value (default tolerance 0.01). Accepts 9, 9.0, 9.00. */
  | { type: "number"; value: number; tolerance?: number; label?: string }
  | { type: "notNumber"; value: number; tolerance?: number; label?: string }
  /** stdout matches a regular expression. */
  | { type: "regex"; pattern: string; flags?: string; label?: string }
  /** The fragments appear in stdout in this order (case-insensitive unless caseSensitive). */
  | { type: "order"; texts: string[]; caseSensitive?: boolean; label?: string }
  /** The program called input() at least this many times. */
  | { type: "minInputs"; count: number; label?: string };

export interface CodingTest {
  id: string;
  description: string;
  inputs: string[];
  hidden: boolean;
  checks: OutputCheck[];
}

export interface CodeRequirement {
  /** Regex tested against the code with comments removed. */
  pattern: string;
  flags?: string;
  /** When true the pattern must NOT appear. */
  forbid?: boolean;
  message: string;
}

export interface CodingQuestion extends QuestionBase {
  kind: "coding";
  starterCode: string;
  /** Example interaction shown to the student (a terminal transcript). */
  sampleRun?: string;
  tests: CodingTest[];
  requirements?: CodeRequirement[];
  /** Progressive hints: concept, logic, structure, full explanation (level 4 is gated). */
  hints: [string, string, string, string];
  /** Reference solution (practice: here; exams: in the lazily-loaded answer key). Must pass every test. */
  solution?: string;
}

export type Question = McqQuestion | TracingQuestion | ErrorQuestion | CodingQuestion;

/** Answer key entry (kept separate from exam questions; loaded lazily for exams). */
export interface AnswerKey {
  /** mcq / error: index of the correct option. tracing: exact expected stdout. coding: reference solution code. */
  answer: number | string;
  explanation: string;
}

export interface PracticeMcq extends McqQuestion {
  answer: number;
  explanation: string;
}

// ---------------------------------------------------------------- exercises

export interface PracticeExercise extends CodingQuestion {
  /** Short title for listings. */
  title: string;
  category: "write" | "complete" | "fix" | "modify";
  solution: string;
}

// ---------------------------------------------------------------- exams

export interface ExamSection {
  kind: QuestionKind;
  title: string;
  pointsEach: number;
  questionIds: string[];
}

export interface ExamDefinition {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  durationMinutes: number;
  description: string;
  sections: ExamSection[];
}
