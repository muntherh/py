import { describe, expect, it } from "vitest";
import type { CryptoQ, FillQ, MatchQ, OrderQ, ShortQ } from "../../src/data/types";
import { grade, ideaHit, marksFor, norm } from "../../src/grading/grade";

const base = { unitId: "ch1" as const, topicId: "ch1-cia", difficulty: "easy" as const, objective: "o", explanation: "e", sources: [], origin: "original" as const, style: "concept" as const };

describe("normalisation", () => {
  it("ignores case, punctuation and extra spaces", () => {
    expect(norm("  Integrity!! ")).toBe("integrity");
    expect(norm("Full   Control")).toBe("full control");
  });
});

describe("fill", () => {
  const q: FillQ = { ...base, id: "f", kind: "fill", prompt: "___ and ___", blanks: [["threat"], ["vulnerability", "weakness"]] };
  it("accepts alternatives, case-insensitive", () => {
    expect(grade(q, { kind: "fill", values: ["Threat", "WEAKNESS"] }).correct).toBe(true);
  });
  it("gives per-blank partial credit and names the wrong blank", () => {
    const g = grade(q, { kind: "fill", values: ["threat", "risk"] });
    expect(g.fraction).toBe(0.5);
    expect(g.feedback[0]).toMatch(/Blank 2/);
  });
});

describe("match and order", () => {
  const m: MatchQ = { ...base, id: "m", kind: "match", prompt: "p", pairs: [["Interception", "Confidentiality"], ["Modification", "Integrity"], ["Fabrication", "Integrity"]] };
  it("allows the same right answer twice", () => {
    expect(grade(m, { kind: "match", map: { 0: "Confidentiality", 1: "Integrity", 2: "Integrity" } }).correct).toBe(true);
    expect(grade(m, { kind: "match", map: { 0: "Integrity", 1: "Integrity", 2: "Integrity" } }).fraction).toBeCloseTo(2 / 3);
  });
  const o: OrderQ = { ...base, id: "o", kind: "order", prompt: "p", items: ["a", "b", "c", "d"] };
  it("scores positions", () => {
    expect(grade(o, { kind: "order", items: ["a", "b", "d", "c"] }).fraction).toBe(0.5);
  });
});

describe("short answers (keyword ideas)", () => {
  const q: ShortQ = { ...base, id: "s", kind: "short", prompt: "p", modelAnswer: "m", ideas: [{ label: "change", any: ["modif*", "alter*"] }, { label: "ids", any: ["ids"] }] };
  it("supports stems and whole-word matching", () => {
    expect(ideaHit("data was modified", q.ideas[0])).toBe(true);
    expect(ideaHit("he considers it", q.ideas[1])).toBe(false);
    expect(ideaHit("an IDS alerts", q.ideas[1])).toBe(true);
  });
  it("partial credit per idea", () => {
    expect(grade(q, { kind: "short", text: "it was altered" }).fraction).toBe(0.5);
  });
});

describe("crypto", () => {
  const q: CryptoQ = { ...base, id: "c", kind: "crypto", style: "calculation", prompt: "p", spec: { cipher: "route", mode: "decrypt", text: "HIDHOXDLEETG", rows: 4, cols: 3, fill: "rows", route: "spiral-tl" }, answer: "HIDETHEGOLDX" };
  it("accepts a decryption with or without padding", () => {
    expect(grade(q, { kind: "crypto", text: "hide the gold" }).correct).toBe(true);
    expect(grade(q, { kind: "crypto", text: "HIDETHEGOLDX" }).correct).toBe(true);
  });
});

describe("marks", () => {
  it("rounds partial credit down to half marks", () => {
    expect(marksFor({ fraction: 0.74, correct: false, feedback: [] }, 2)).toBe(1);
    expect(marksFor({ fraction: 0.75, correct: false, feedback: [] }, 2)).toBe(1.5);
    expect(marksFor({ fraction: 0.4, correct: false, feedback: [] }, 0.5)).toBe(0);
    expect(marksFor({ fraction: 1, correct: true, feedback: [] }, 0.5)).toBe(0.5);
  });
  it("unanswered scores 0", () => {
    const q: FillQ = { ...base, id: "f2", kind: "fill", prompt: "___", blanks: [["x"]] };
    expect(grade(q, undefined).fraction).toBe(0);
  });
});
