import { describe, expect, it } from "vitest";
import { BLUEPRINT, PAPERS, blueprintTotal, buildPaper, createAttempt, generateCrypto, gradeAttempt, isExpired, mulberry32, remainingMs } from "../../src/exam/engine";
import { diagnoseCrypto } from "../../src/grading/grade";
import type { AnswerValue, Question } from "../../src/data/types";

function perfectAnswer(q: Question): AnswerValue {
  switch (q.kind) {
    case "mcq": return { kind: "mcq", choice: q.answer };
    case "tf": return { kind: "tf", value: q.answer };
    case "fill": return { kind: "fill", values: q.blanks.map((b) => b[0]) };
    case "match": return { kind: "match", map: Object.fromEntries(q.pairs.map((p, i) => [i, p[1]])) };
    case "order": return { kind: "order", items: q.items };
    case "short": return { kind: "short", text: q.modelAnswer };
    case "crypto": return { kind: "crypto", text: q.answer };
  }
}

describe("blueprint", () => {
  it("totals exactly 20 marks", () => {
    expect(blueprintTotal()).toBe(20);
  });
});

describe("paper generation", () => {
  const seeds = Array.from({ length: 150 }, (_, i) => 1000 + i * 7919);
  for (const level of ["easy", "medium", "hard"] as const) {
    it(`every ${level} paper totals 20, has no duplicates and covers all chapters and Labs 4–6`, () => {
      for (const seed of seeds) {
        const p = buildPaper(level, seed, "t");
        expect(p.total).toBe(20);
        expect(p.items.reduce((s, i) => s + i.marks, 0)).toBe(20);
        expect(new Set(p.items.map((i) => i.question.id)).size).toBe(p.items.length);
        const units = new Set(p.items.map((i) => i.question.unitId));
        for (const u of ["ch1", "ch2", "ch3", "ch4", "lab4", "lab5", "lab6"]) expect(units.has(u as never), `${level}/${seed} missing ${u}`).toBe(true);
        for (const ch of ["ch1", "ch2", "ch3", "ch4"]) {
          const marks = p.items.filter((i) => i.question.unitId === ch).reduce((s, i) => s + i.marks, 0);
          expect(marks, `${level}/${seed} ${ch}`).toBeGreaterThanOrEqual(1.5);
        }
        const lab6 = p.items.filter((i) => i.question.unitId === "lab6").reduce((s, i) => s + i.marks, 0);
        expect(lab6).toBeGreaterThanOrEqual(5);
      }
    });
  }
  it("is deterministic for a seed and changes order with the seed", () => {
    const a = buildPaper("medium", 42, "x");
    const b = buildPaper("medium", 42, "x");
    expect(a.items.map((i) => i.question.id)).toEqual(b.items.map((i) => i.question.id));
    const c = buildPaper("medium", 43, "x");
    expect(a.items.map((i) => i.question.id)).not.toEqual(c.items.map((i) => i.question.id));
  });
  it("same paper seed + different order seed = same questions, different order", () => {
    const a = buildPaper("medium", 22_001, "x", undefined, 1);
    const b = buildPaper("medium", 22_001, "x", undefined, 2);
    expect(new Set(a.items.map((i) => i.question.id))).toEqual(new Set(b.items.map((i) => i.question.id)));
    expect(a.items.map((i) => i.question.id)).not.toEqual(b.items.map((i) => i.question.id));
  });
  it("keeps sections in blueprint order", () => {
    const p = buildPaper("hard", 7, "x");
    const order = BLUEPRINT.map((s) => s.key);
    const seen = p.items.map((i) => i.section);
    expect([...new Set(seen)]).toEqual(order);
  });
  it("difficulty shifts the mix", () => {
    const share = (level: "easy" | "hard", d: string) => {
      let n = 0, t = 0;
      for (let s = 0; s < 60; s++) for (const it of buildPaper(level, s, "x").items) { t++; if (it.question.difficulty === d) n++; }
      return n / t;
    };
    expect(share("easy", "easy")).toBeGreaterThan(share("hard", "easy"));
    expect(share("hard", "hard")).toBeGreaterThan(share("easy", "hard"));
  });
  it("named papers all build", () => {
    for (const p of PAPERS) expect(buildPaper(p.difficulty, p.seed, p.title).total).toBe(20);
  });
});

describe("generated cryptography", () => {
  it("every generated question has a self-consistent answer", () => {
    const rand = mulberry32(99);
    for (let i = 0; i < 400; i++) {
      const level = (["easy", "medium", "hard"] as const)[i % 3];
      const q = generateCrypto(i % 2 ? "substitution" : "transposition", level, rand, `g${i}`);
      expect(diagnoseCrypto(q.spec, q.answer).correct, q.prompt).toBe(true);
      expect(q.answer.length).toBeGreaterThan(0);
    }
  });
});

describe("attempt grading", () => {
  const now = 1_000_000;
  it("perfect answers score 20/20; blank scores 0/20", () => {
    const a = createAttempt("p", "P", "medium", 5, 45, now, "a1");
    expect(gradeAttempt(a, now + 1000).score).toBe(0);
    for (const it of a.items) a.answers[it.question.id] = perfectAnswer(it.question);
    const r = gradeAttempt(a, now + 60_000);
    expect(r.score).toBe(20);
    expect(r.max).toBe(20);
    expect(r.percentage).toBe(100);
    expect(r.items.every((i) => i.status === "correct")).toBe(true);
    const unitMax = Object.values(r.byUnit).reduce((s, b) => s + b!.max, 0);
    expect(unitMax).toBe(20);
  });
  it("wrong MCQ costs exactly its marks; partial fill earns half-marks rounded down", () => {
    const a = createAttempt("p", "P", "easy", 9, 40, now, "a2");
    for (const it of a.items) a.answers[it.question.id] = perfectAnswer(it.question);
    const mcq = a.items.find((i) => i.question.kind === "mcq")!;
    const q = mcq.question as Extract<Question, { kind: "mcq" }>;
    a.answers[q.id] = { kind: "mcq", choice: (q.answer + 1) % q.options.length };
    expect(gradeAttempt(a, now).score).toBe(19.5);
  });
  it("timer helpers", () => {
    const a = createAttempt("p", "P", "easy", 1, 30, now, "a3");
    expect(remainingMs(a, now + 60_000)).toBe(29 * 60_000);
    expect(isExpired(a, now + 30 * 60_000)).toBe(true);
    expect(isExpired(a, now + 29 * 60_000)).toBe(false);
  });
});
