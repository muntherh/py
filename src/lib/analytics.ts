// Learning analytics computed from the student's own recorded answers.
// Mastery values are simple evidence-weighted estimates, not psychometric scores.
import { CONCEPTS, CONCEPT_MAP } from "../data/concepts";
import { LESSONS } from "../data/lessons/index";
import { PRACTICE_MCQ_MAP } from "../data/practice/mcq";
import { EXERCISES } from "../data/practice/exercises";
import { EXAMS } from "../data/exams/exams";
import { TOPICS } from "../data/sources";
import type { Difficulty, TopicId } from "../data/types";
import type { ExamAttempt } from "../exam/engine";
import type { ExerciseRecord, PracticeRecord } from "../store/progressStore";

export interface Evidence {
  earned: number;
  max: number;
  n: number;
}

export interface ConceptStat extends Evidence {
  conceptId: string;
  mastery: number | null;
}

const MIN_EVIDENCE = 2;

function add(map: Record<string, Evidence>, id: string, earned: number, max: number) {
  const e = (map[id] ??= { earned: 0, max: 0, n: 0 });
  e.earned += earned;
  e.max += max;
  e.n += 1;
}

export function conceptEvidence(
  practice: Record<string, PracticeRecord>,
  exercises: Record<string, ExerciseRecord>,
  attempts: ExamAttempt[],
): Record<string, Evidence> {
  const ev: Record<string, Evidence> = {};
  for (const [qid, rec] of Object.entries(practice)) {
    const q = PRACTICE_MCQ_MAP[qid];
    if (!q) continue;
    // The latest answer counts most: it reflects current understanding.
    for (const c of q.conceptIds) add(ev, c, rec.lastCorrect ? 1 : 0, 1);
  }
  for (const ex of EXERCISES) {
    const rec = exercises[ex.id];
    if (!rec || rec.attempts === 0) continue;
    for (const c of ex.conceptIds) add(ev, c, rec.bestFraction * 2, 2);
  }
  for (const a of attempts) {
    if (a.status !== "submitted" || !a.result) continue;
    for (const r of a.result.questions) for (const c of r.conceptIds) add(ev, c, (r.points / (r.maxPoints || 1)) * 2, 2);
  }
  return ev;
}

export function conceptStats(ev: Record<string, Evidence>): ConceptStat[] {
  return CONCEPTS.map((c) => {
    const e = ev[c.id] ?? { earned: 0, max: 0, n: 0 };
    return { conceptId: c.id, ...e, mastery: e.n >= MIN_EVIDENCE && e.max > 0 ? e.earned / e.max : null };
  });
}

export function topicMastery(stats: ConceptStat[], topic: TopicId): { mastery: number | null; n: number } {
  const s = stats.filter((x) => CONCEPT_MAP[x.conceptId]?.topicId === topic);
  const earned = s.reduce((a, b) => a + b.earned, 0);
  const max = s.reduce((a, b) => a + b.max, 0);
  const n = s.reduce((a, b) => a + b.n, 0);
  return { mastery: n >= 3 && max > 0 ? earned / max : null, n };
}

export function weakConcepts(stats: ConceptStat[], limit = 5): ConceptStat[] {
  return stats
    .filter((s) => s.mastery !== null && s.mastery < 0.6)
    .sort((a, b) => (a.mastery ?? 0) - (b.mastery ?? 0))
    .slice(0, limit);
}

export function lessonForConcept(conceptId: string) {
  return LESSONS.find((l) => l.conceptIds.includes(conceptId));
}

export function lessonsForTopic(topic: TopicId) {
  return LESSONS.filter((l) => l.topicId === topic);
}

export function examDifficultyAverages(attempts: ExamAttempt[]): Record<Difficulty, { avg: number | null; count: number }> {
  const out: Record<Difficulty, { sum: number; count: number }> = { easy: { sum: 0, count: 0 }, medium: { sum: 0, count: 0 }, hard: { sum: 0, count: 0 } };
  for (const a of attempts) {
    if (a.status !== "submitted" || !a.result) continue;
    const exam = EXAMS.find((e) => e.id === a.examId);
    if (!exam) continue;
    out[exam.difficulty].sum += a.result.percentage;
    out[exam.difficulty].count += 1;
  }
  const res = {} as Record<Difficulty, { avg: number | null; count: number }>;
  for (const d of ["easy", "medium", "hard"] as Difficulty[]) res[d] = { avg: out[d].count ? Math.round((out[d].sum / out[d].count) * 10) / 10 : null, count: out[d].count };
  return res;
}

// ---------------------------------------------------------------- readiness

export interface ReadinessItem {
  label: string;
  met: boolean;
  detail: string;
}
export interface TopicReadiness {
  topicId: TopicId;
  status: "ready" | "almost" | "not-yet";
  items: ReadinessItem[];
}

export function topicReadiness(
  topic: TopicId,
  completedLessons: Record<string, number>,
  practice: Record<string, PracticeRecord>,
  exercises: Record<string, ExerciseRecord>,
): TopicReadiness {
  const lessons = lessonsForTopic(topic);
  const done = lessons.filter((l) => completedLessons[l.id]).length;
  const answered = Object.entries(practice).filter(([id]) => PRACTICE_MCQ_MAP[id]?.topicId === topic);
  const correct = answered.filter(([, r]) => r.lastCorrect).length;
  const acc = answered.length ? correct / answered.length : 0;
  const topicEx = EXERCISES.filter((e) => e.topicId === topic);
  const solved = topicEx.filter((e) => exercises[e.id]?.passed).length;
  const needEx = Math.min(3, topicEx.length);
  const items: ReadinessItem[] = [
    { label: "Lessons completed", met: lessons.length > 0 && done >= Math.ceil(lessons.length * 0.8), detail: `${done} of ${lessons.length} (target 80%)` },
    {
      label: "Practice accuracy",
      met: answered.length >= 8 && acc >= 0.7,
      detail: answered.length ? `${Math.round(acc * 100)}% on ${answered.length} question(s) (target 70% on 8+)` : "No practice answers yet (target 70% on 8+)",
    },
    { label: "Coding exercises solved", met: solved >= needEx, detail: `${solved} of ${topicEx.length} solved (target ${needEx})` },
  ];
  const metCount = items.filter((i) => i.met).length;
  return { topicId: topic, status: metCount === items.length ? "ready" : metCount >= 2 ? "almost" : "not-yet", items };
}

export function allReadiness(completed: Record<string, number>, practice: Record<string, PracticeRecord>, exercises: Record<string, ExerciseRecord>) {
  return TOPICS.map((t) => topicReadiness(t.id, completed, practice, exercises));
}
