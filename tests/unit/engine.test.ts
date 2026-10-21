import { describe, expect, it } from "vitest";
import { createAttempt, formatDuration, gradeAttempt, isAnswered, isExpired, mulberry32, remainingMs, seededShuffle } from "../../src/exam/engine";
import type { AnswerKey, ExamDefinition, Question } from "../../src/data/types";

const exam: ExamDefinition = {
  id: "e",
  number: 1,
  title: "T",
  difficulty: "easy",
  durationMinutes: 30,
  description: "",
  sections: [
    { kind: "mcq", title: "MC", pointsEach: 2, questionIds: ["m1", "m2", "m3"] },
    { kind: "tracing", title: "Tr", pointsEach: 2, questionIds: ["t1"] },
    { kind: "coding", title: "Code", pointsEach: 6, questionIds: ["c1"] },
  ],
};
const base = { topicId: "t2" as const, conceptIds: ["t2-arithmetic"], difficulty: "easy" as const, sources: [{ file: "topic2" as const, units: [29] }], origin: "original" as const, prompt: "?" };
const questions: Record<string, Question> = {
  m1: { ...base, id: "m1", kind: "mcq", options: ["a", "b", "c", "d"] },
  m2: { ...base, id: "m2", kind: "mcq", options: ["a", "b", "c", "d"] },
  m3: { ...base, id: "m3", kind: "mcq", options: ["a", "b", "c", "d"], topicId: "t3", conceptIds: ["t3-if"] },
  t1: { ...base, id: "t1", kind: "tracing", code: "print(1)" },
  c1: {
    ...base,
    id: "c1",
    kind: "coding",
    starterCode: "# write here",
    hints: ["a", "b", "c", "d"],
    tests: [
      { id: "a", description: "", inputs: [], hidden: false, checks: [{ type: "contains", text: "ok" }] },
      { id: "b", description: "", inputs: [], hidden: true, checks: [{ type: "contains", text: "yes" }] },
    ],
  },
};
const keys: Record<string, AnswerKey> = {
  m1: { answer: 2, explanation: "" },
  m2: { answer: 0, explanation: "" },
  m3: { answer: 1, explanation: "" },
  t1: { answer: "1\n", explanation: "" },
  c1: { answer: "print('ok yes')", explanation: "" },
};

describe("seeded randomisation", () => {
  it("is deterministic for a seed and a true permutation", () => {
    const a = seededShuffle([1, 2, 3, 4, 5, 6, 7, 8], mulberry32(42));
    const b = seededShuffle([1, 2, 3, 4, 5, 6, 7, 8], mulberry32(42));
    expect(a).toEqual(b);
    expect([...a].sort()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("keeps sections in order and shuffles only within them", () => {
    const at = createAttempt(exam, questions, 1000, 7, "x");
    expect(new Set(at.order.slice(0, 3))).toEqual(new Set(["m1", "m2", "m3"]));
    expect(at.order.slice(3)).toEqual(["t1", "c1"]);
    expect(Object.keys(at.optionOrder).sort()).toEqual(["m1", "m2", "m3"]);
    expect(createAttempt(exam, questions, 1000, 7, "y").order).toEqual(at.order);
  });
});

describe("deadline", () => {
  it("is fixed at start + 30 minutes and survives re-computation", () => {
    const at = createAttempt(exam, questions, 1_000_000, 1, "x");
    expect(at.deadline).toBe(1_000_000 + 30 * 60_000);
    expect(remainingMs(at, 1_000_000 + 60_000)).toBe(29 * 60_000);
    expect(isExpired(at, at.deadline - 1)).toBe(false);
    expect(isExpired(at, at.deadline)).toBe(true);
    expect(formatDuration(29 * 60_000 + 5_000)).toBe("29:05");
  });
});

describe("grading", () => {
  it("scores by ORIGINAL option index regardless of display shuffle, with partial coding credit", async () => {
    const at = createAttempt(exam, questions, 0, 99, "x");
    at.answers = {
      m1: { choice: 2, updatedAt: 1 }, // correct
      m2: { choice: 3, updatedAt: 1 }, // wrong
      t1: { text: "1", updatedAt: 1 }, // correct
      c1: { code: "print('ok')", updatedAt: 1 }, // passes 1 of 2 tests
    };
    const run = async (code: string) => ({
      status: "ok" as const,
      errorType: null,
      error: null,
      line: null,
      stdout: code.includes("ok") ? "ok\n" : "",
      transcript: [["stdout", code.includes("ok") ? "ok\n" : ""]] as ["stdout", string][],
    });
    const r = await gradeAttempt(at, exam, questions, keys, run, 10 * 60_000);
    expect(r.maxScore).toBe(2 * 3 + 2 + 6);
    expect(r.score).toBe(2 + 2 + 3);
    expect(r.correct).toBe(2);
    expect(r.incorrect).toBe(1);
    expect(r.partial).toBe(1);
    expect(r.unanswered).toBe(1);
    expect(r.byTopic.t3).toEqual({ earned: 0, max: 2 });
    expect(r.timeSpentMs).toBe(10 * 60_000);
  });
  it("treats unchanged starter code as unanswered", () => {
    expect(isAnswered(questions.c1, { code: "# write here", updatedAt: 1 })).toBe(false);
    expect(isAnswered(questions.c1, { code: "print(1)", updatedAt: 1 })).toBe(true);
  });
  it("caps time spent at the deadline for late submissions", async () => {
    const at = createAttempt(exam, questions, 0, 1, "x");
    const r = await gradeAttempt(at, exam, questions, keys, async () => ({ status: "ok", errorType: null, error: null, line: null, stdout: "", transcript: [] }), 99 * 60_000);
    expect(r.timeSpentMs).toBe(30 * 60_000);
  });
});
