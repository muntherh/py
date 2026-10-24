// Data model. Every lesson section, flashcard and question carries SourceRefs that
// point at a real slide (lectures) or printed page number (Lab Manual "pg. N").

import type { Fill, Mode, RouteKind } from "../crypto/ciphers";

export type UnitId = "ch1" | "ch2" | "ch3" | "ch4" | "lab4" | "lab5" | "lab6";
export type Difficulty = "easy" | "medium" | "hard";

/** L1–L4 = Lecture 1–4 slide decks; LAB = Lab Manual Part I. */
export type SourceFile = "L1" | "L2" | "L3" | "L4" | "LAB";

export interface SourceRef {
  file: SourceFile;
  /** Slide numbers (L1–L4, position in the deck) or printed page numbers (LAB). */
  units: number[];
  /** For LAB refs: which lab (pg. 11 and pg. 13 are shared by two labs). */
  lab?: 4 | 5 | 6;
  note?: string;
}

export interface Unit {
  id: UnitId;
  kind: "chapter" | "lab";
  number: number;
  title: string;
  titleAr: string;
  short: string;
  description: string;
  source: SourceFile;
}

export interface Topic {
  id: string;
  unitId: UnitId;
  title: string;
}

// ------------------------------------------------------------------ lessons
export interface LessonBlock {
  heading: string;
  /** Paragraphs. Supports **bold** and `code`. */
  body: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
  /** Optional Arabic explanation (official English terms stay visible). */
  ar?: string;
  /** Named interactive/diagram component rendered after the text. */
  visual?: string;
  source: SourceRef;
}

export interface Lesson {
  id: string;
  unitId: UnitId;
  topicId: string;
  order: number;
  title: string;
  summary: string;
  blocks: LessonBlock[];
  keyPoints: string[];
  /** Exam traps / common confusions. */
  traps?: string[];
}

export interface Flashcard {
  id: string;
  unitId: UnitId;
  topicId: string;
  term: string;
  definition: string;
  ar?: string;
  source: SourceRef;
}

// ------------------------------------------------------------------ questions
export type QuestionKind = "mcq" | "tf" | "fill" | "match" | "order" | "short" | "crypto";
/** What the question is about, independent of its answer format. */
export type QuestionStyle = "concept" | "definition" | "scenario" | "procedure" | "calculation" | "alphabet";

/** Provenance: "source" = taken from a slide/manual question; "original" = written for this platform from source facts. */
export type Origin = "source" | "original";

interface QBase {
  id: string;
  kind: QuestionKind;
  style: QuestionStyle;
  unitId: UnitId;
  topicId: string;
  difficulty: Difficulty;
  /** What the student should be able to do after answering this. */
  objective: string;
  prompt: string;
  explanation: string;
  sources: SourceRef[];
  origin: Origin;
}

export interface McqQ extends QBase {
  kind: "mcq";
  options: string[];
  answer: number;
}

export interface TfQ extends QBase {
  kind: "tf";
  answer: boolean;
}

export interface FillQ extends QBase {
  kind: "fill";
  /** Prompt contains one "___" per blank. Each blank lists every accepted answer. */
  blanks: string[][];
}

export interface MatchQ extends QBase {
  kind: "match";
  /** Correct pairs [left, right]. Rights are shuffled for display. */
  pairs: [string, string][];
}

export interface OrderQ extends QBase {
  kind: "order";
  /** Items in the correct order. Shuffled for display. */
  items: string[];
}

/** One required idea in a written answer: any listed keyword/phrase earns it. */
export interface KeyIdea {
  label: string;
  any: string[];
}

export interface ShortQ extends QBase {
  kind: "short";
  modelAnswer: string;
  ideas: KeyIdea[];
}

export type CryptoSpec =
  | { cipher: "caesar"; mode: Mode; text: string; key: number }
  | { cipher: "vigenere"; mode: Mode; text: string; key: string }
  | { cipher: "rail"; mode: Mode; text: string; depth: number }
  | { cipher: "route"; mode: Mode; text: string; rows: number; cols: number; fill: Fill; route: RouteKind };

export interface CryptoQ extends QBase {
  kind: "crypto";
  spec: CryptoSpec;
  /** Stored answer; a unit test proves it equals the engine's output. */
  answer: string;
}

export type Question = McqQ | TfQ | FillQ | MatchQ | OrderQ | ShortQ | CryptoQ;

// ------------------------------------------------------------------ answers & grading
export type AnswerValue =
  | { kind: "mcq"; choice: number }
  | { kind: "tf"; value: boolean }
  | { kind: "fill"; values: string[] }
  | { kind: "match"; /** left index -> chosen right text */ map: Record<number, string> }
  | { kind: "order"; items: string[] }
  | { kind: "short"; text: string }
  | { kind: "crypto"; text: string };

export interface Grade {
  /** 0..1 */
  fraction: number;
  correct: boolean;
  /** Human-readable feedback (which blanks/pairs/ideas were wrong). */
  feedback: string[];
}
