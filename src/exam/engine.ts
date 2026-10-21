// Exam engine: deterministic randomisation, deadlines and grading.
// Pure functions (no React, no storage) so they can be unit tested.

import type { AnswerKey, ExamDefinition, Question, TopicId } from "../data/types";
import { gradeCoding, tracingMatches, type CodingGrade, type Runner } from "../grading/checks";

export interface ExamAnswer {
  /** mcq/error: ORIGINAL option index (independent of display shuffle). */
  choice?: number;
  /** tracing: typed output. */
  text?: string;
  /** coding: program source. */
  code?: string;
  updatedAt: number;
}

export type AttemptStatus = "in_progress" | "grading" | "submitted";

export interface QuestionResult {
  qid: string;
  kind: Question["kind"];
  topicId: TopicId;
  conceptIds: string[];
  points: number;
  maxPoints: number;
  status: "correct" | "partial" | "incorrect" | "unanswered";
  coding?: CodingGrade;
}

export interface ExamResult {
  score: number;
  maxScore: number;
  percentage: number;
  timeSpentMs: number;
  correct: number;
  partial: number;
  incorrect: number;
  unanswered: number;
  byTopic: Partial<Record<TopicId, { earned: number; max: number }>>;
  byConcept: Record<string, { earned: number; max: number }>;
  byKind: Partial<Record<Question["kind"], { earned: number; max: number }>>;
  questions: QuestionResult[];
}

export interface ExamAttempt {
  id: string;
  examId: string;
  seed: number;
  startedAt: number;
  deadline: number;
  status: AttemptStatus;
  submittedAt: number | null;
  autoSubmitted: boolean;
  /** Question ids in display order (sections stay in order, questions shuffled within). */
  order: string[];
  /** Display position -> original option index, per mcq/error question. */
  optionOrder: Record<string, number[]>;
  answers: Record<string, ExamAnswer>;
  flagged: string[];
  current: number;
  result: ExamResult | null;
}

// ------------------------------------------------------------------ randomness
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(items: T[], rand: () => number): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function newSeed(): number {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) return crypto.getRandomValues(new Uint32Array(1))[0];
  return Math.floor(Math.random() * 2 ** 32);
}

// ------------------------------------------------------------------ attempts
export function createAttempt(
  exam: ExamDefinition,
  questions: Record<string, Question>,
  now: number,
  seed: number,
  id: string,
): ExamAttempt {
  const rand = mulberry32(seed);
  const order: string[] = [];
  for (const section of exam.sections) order.push(...seededShuffle(section.questionIds, rand));
  const optionOrder: Record<string, number[]> = {};
  for (const qid of order) {
    const q = questions[qid];
    if (q && (q.kind === "mcq" || q.kind === "error")) {
      optionOrder[qid] = seededShuffle(
        q.options.map((_, i) => i),
        rand,
      );
    }
  }
  return {
    id,
    examId: exam.id,
    seed,
    startedAt: now,
    deadline: now + exam.durationMinutes * 60_000,
    status: "in_progress",
    submittedAt: null,
    autoSubmitted: false,
    order,
    optionOrder,
    answers: {},
    flagged: [],
    current: 0,
    result: null,
  };
}

export function remainingMs(attempt: Pick<ExamAttempt, "deadline">, now: number): number {
  return Math.max(0, attempt.deadline - now);
}

export function isExpired(attempt: Pick<ExamAttempt, "deadline" | "status">, now: number): boolean {
  return attempt.status === "in_progress" && now >= attempt.deadline;
}

export function pointsFor(exam: ExamDefinition, qid: string): number {
  for (const s of exam.sections) if (s.questionIds.includes(qid)) return s.pointsEach;
  return 0;
}

export function isAnswered(q: Question, a: ExamAnswer | undefined): boolean {
  if (!a) return false;
  if (q.kind === "mcq" || q.kind === "error") return a.choice !== undefined;
  if (q.kind === "tracing") return !!a.text && a.text.trim() !== "";
  return !!a.code && a.code.trim() !== "" && a.code.trim() !== q.starterCode.trim();
}

// ------------------------------------------------------------------ grading
export async function gradeAttempt(
  attempt: ExamAttempt,
  exam: ExamDefinition,
  questions: Record<string, Question>,
  keys: Record<string, AnswerKey>,
  run: Runner,
  submittedAt: number,
  onProgress?: (done: number, total: number) => void,
): Promise<ExamResult> {
  const results: QuestionResult[] = [];
  let i = 0;
  for (const qid of attempt.order) {
    const q = questions[qid];
    const key = keys[qid];
    const max = pointsFor(exam, qid);
    const a = attempt.answers[qid];
    onProgress?.(i++, attempt.order.length);
    if (!q || !key) continue;
    const base = { qid, kind: q.kind, topicId: q.topicId, conceptIds: q.conceptIds, maxPoints: max };
    if (!isAnswered(q, a)) {
      results.push({ ...base, points: 0, status: "unanswered" });
      continue;
    }
    if (q.kind === "mcq" || q.kind === "error") {
      const ok = a!.choice === key.answer;
      results.push({ ...base, points: ok ? max : 0, status: ok ? "correct" : "incorrect" });
    } else if (q.kind === "tracing") {
      const ok = tracingMatches(a!.text ?? "", String(key.answer));
      results.push({ ...base, points: ok ? max : 0, status: ok ? "correct" : "incorrect" });
    } else {
      const grade = await gradeCoding(q, a!.code ?? "", run);
      // Half-point granularity keeps partial credit readable.
      const pts = Math.round(grade.fraction * max * 2) / 2;
      results.push({
        ...base,
        points: pts,
        status: grade.passedAll ? "correct" : pts > 0 ? "partial" : "incorrect",
        coding: grade,
      });
    }
  }
  onProgress?.(attempt.order.length, attempt.order.length);
  return summarize(results, attempt, submittedAt);
}

export function summarize(results: QuestionResult[], attempt: Pick<ExamAttempt, "startedAt" | "deadline">, submittedAt: number): ExamResult {
  const byTopic: ExamResult["byTopic"] = {};
  const byConcept: ExamResult["byConcept"] = {};
  const byKind: ExamResult["byKind"] = {};
  for (const r of results) {
    const t = (byTopic[r.topicId] ??= { earned: 0, max: 0 });
    t.earned += r.points;
    t.max += r.maxPoints;
    const k = (byKind[r.kind] ??= { earned: 0, max: 0 });
    k.earned += r.points;
    k.max += r.maxPoints;
    for (const c of r.conceptIds) {
      const e = (byConcept[c] ??= { earned: 0, max: 0 });
      e.earned += r.points / r.conceptIds.length;
      e.max += r.maxPoints / r.conceptIds.length;
    }
  }
  const score = results.reduce((s, r) => s + r.points, 0);
  const maxScore = results.reduce((s, r) => s + r.maxPoints, 0);
  const end = Math.min(submittedAt, attempt.deadline);
  return {
    score,
    maxScore,
    percentage: maxScore ? Math.round((score / maxScore) * 1000) / 10 : 0,
    timeSpentMs: Math.max(0, end - attempt.startedAt),
    correct: results.filter((r) => r.status === "correct").length,
    partial: results.filter((r) => r.status === "partial").length,
    incorrect: results.filter((r) => r.status === "incorrect").length,
    unanswered: results.filter((r) => r.status === "unanswered").length,
    byTopic,
    byConcept,
    byKind,
    questions: results,
  };
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
