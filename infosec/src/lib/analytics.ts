// Mastery and readiness computed from practice records and exam results. Pure functions.
import { TOPICS, UNITS } from "../data/course";
import { QUESTION_BY_ID } from "../data/questions";
import type { UnitId } from "../data/types";
import type { ExamAttempt } from "../exam/engine";
import type { QuestionRecord } from "../store/progressStore";

export interface Mastery {
  /** 0..1, or null when nothing has been attempted. */
  score: number | null;
  /** Number of evidence points (practice questions answered + exam items). */
  evidence: number;
}

export function topicMastery(questions: Record<string, QuestionRecord>, attempts: ExamAttempt[]): Record<string, Mastery> {
  const acc: Record<string, { sum: number; n: number }> = {};
  const add = (topicId: string, v: number) => {
    const a = (acc[topicId] ??= { sum: 0, n: 0 });
    a.sum += v;
    a.n += 1;
  };
  for (const [qid, rec] of Object.entries(questions)) {
    const q = QUESTION_BY_ID[qid];
    // Generated questions (No-Calculator Mode) are not in the bank; their mistakes are kept in the notebook instead.
    if (!q || rec.attempts === 0) continue;
    // Weight the latest result more than old ones: average of overall rate and last result.
    const rate = rec.scoreSum / rec.attempts;
    add(q.topicId, (rate + (rec.lastCorrect ? 1 : 0)) / 2);
  }
  for (const a of attempts) {
    if (a.status !== "submitted" || !a.result) continue;
    for (const r of a.result.items) {
      const item = a.items.find((i) => i.question.id === r.qid);
      if (item) add(item.question.topicId, r.marks ? r.earned / r.marks : 0);
    }
  }
  const out: Record<string, Mastery> = {};
  for (const t of TOPICS) {
    const a = acc[t.id];
    out[t.id] = a ? { score: a.sum / a.n, evidence: a.n } : { score: null, evidence: 0 };
  }
  return out;
}

export function unitMastery(topic: Record<string, Mastery>): Record<UnitId, Mastery> {
  const out = {} as Record<UnitId, Mastery>;
  for (const u of UNITS) {
    const ts = TOPICS.filter((t) => t.unitId === u.id).map((t) => topic[t.id]);
    const seen = ts.filter((m) => m.score !== null);
    out[u.id] = {
      score: seen.length ? seen.reduce((s, m) => s + (m.score ?? 0), 0) / ts.length : null,
      evidence: ts.reduce((s, m) => s + m.evidence, 0),
    };
  }
  return out;
}

/** Weak topics: practised but below 60%, weakest first; then topics never practised. */
export function weakTopics(topic: Record<string, Mastery>, limit = 6): { topicId: string; score: number | null }[] {
  const practised = TOPICS.filter((t) => topic[t.id].score !== null && (topic[t.id].score ?? 0) < 0.6)
    .map((t) => ({ topicId: t.id, score: topic[t.id].score }))
    .sort((a, b) => (a.score ?? 0) - (b.score ?? 0));
  return practised.slice(0, limit);
}

export function untouchedTopics(topic: Record<string, Mastery>): string[] {
  return TOPICS.filter((t) => topic[t.id].score === null).map((t) => t.id);
}

/**
 * A study-readiness indicator (0–100). Guidance only — it is not a prediction of the exam mark.
 * 30% lessons completed, 50% average topic mastery (untouched topics count as 0), 20% best mock-exam percentage.
 */
export function readiness(completedLessons: number, totalLessons: number, topic: Record<string, Mastery>, attempts: ExamAttempt[]): number {
  const lessons = totalLessons ? completedLessons / totalLessons : 0;
  const ms = TOPICS.map((t) => topic[t.id].score ?? 0);
  const mastery = ms.reduce((a, b) => a + b, 0) / ms.length;
  const best = Math.max(0, ...attempts.filter((a) => a.result).map((a) => a.result!.percentage / 100));
  return Math.round((0.3 * lessons + 0.5 * mastery + 0.2 * best) * 100);
}
