// Content audit: structure, scope and correctness of every lesson, flashcard and question.
import { describe, expect, it } from "vitest";
import { caesar, railDecrypt, railEncrypt, routeDecrypt, routeEncrypt, vigenere } from "../../src/crypto/ciphers";
import { SOURCE_FILES, TOPICS, TOPIC_BY_ID, UNITS } from "../../src/data/course";
import { FLASHCARDS } from "../../src/data/flashcards";
import { LESSONS } from "../../src/data/lessons";
import { QUESTIONS } from "../../src/data/questions";
import type { CryptoSpec, SourceRef } from "../../src/data/types";
import { grade, ideaHit } from "../../src/grading/grade";

function engine(spec: CryptoSpec): string {
  if (spec.cipher === "caesar") return caesar(spec.text, spec.key, spec.mode).output;
  if (spec.cipher === "vigenere") return vigenere(spec.text, spec.key, spec.mode).output;
  if (spec.cipher === "rail") return spec.mode === "encrypt" ? railEncrypt(spec.text, spec.depth).output : railDecrypt(spec.text, spec.depth).output;
  return spec.mode === "encrypt"
    ? routeEncrypt(spec.text, spec.rows, spec.cols, spec.fill, spec.route).output
    : routeDecrypt(spec.text, spec.rows, spec.cols, spec.fill, spec.route).output;
}

function checkRef(ref: SourceRef, where: string) {
  const f = SOURCE_FILES[ref.file];
  expect(f, `${where}: unknown file ${ref.file}`).toBeTruthy();
  expect(ref.units.length, `${where}: empty units`).toBeGreaterThan(0);
  for (const u of ref.units) expect(f.inScope, `${where}: ${ref.file} unit ${u} out of scope`).toContain(u);
  if (ref.file === "LAB") {
    // Labs 1–3 are pg. 2–7 and Lab 7 is pg. 17–19: never cite them.
    expect(ref.lab, `${where}: LAB ref must name its lab`).toBeDefined();
    expect([4, 5, 6]).toContain(ref.lab);
    const pages: Record<number, number[]> = { 4: [8, 9, 10, 11], 5: [11, 12, 13], 6: [13, 14, 15, 16] };
    for (const u of ref.units) expect(pages[ref.lab!], `${where}: pg. ${u} is not part of Lab ${ref.lab}`).toContain(u);
  }
}

describe("units and scope", () => {
  it("has exactly Chapters 1–4 and Labs 4, 5, 6", () => {
    expect(UNITS.filter((u) => u.kind === "chapter").map((u) => u.number)).toEqual([1, 2, 3, 4]);
    expect(UNITS.filter((u) => u.kind === "lab").map((u) => u.number)).toEqual([4, 5, 6]);
  });
  it("lab manual scope is pg. 8–16 only", () => {
    expect(SOURCE_FILES.LAB.inScope).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16]);
  });
  it("no content mentions Labs 1, 2, 3 or 7 as study material", () => {
    const text = JSON.stringify([LESSONS, QUESTIONS, FLASHCARDS]);
    expect(text).not.toMatch(/\bLab ?[1237]\b(?!\d)/i);
  });
});

describe("lessons", () => {
  it("every topic has a lesson and every lesson block cites an in-scope source", () => {
    for (const t of TOPICS) expect(LESSONS.some((l) => l.topicId === t.id), `topic ${t.id} has no lesson`).toBe(true);
    for (const l of LESSONS) {
      expect(TOPIC_BY_ID[l.topicId]).toBeTruthy();
      expect(l.blocks.length).toBeGreaterThan(0);
      for (const b of l.blocks) {
        checkRef(b.source, `${l.id} / ${b.heading}`);
        expect(b.ar, `${l.id} / ${b.heading} has no Arabic`).toBeTruthy();
      }
    }
  });
  it("every slide of every lecture is cited by at least one lesson block (except title/reference slides)", () => {
    const skip: Record<string, number[]> = { L1: [1, 2], L2: [1, 2, 14], L3: [1, 2], L4: [1, 2, 3, 20] };
    for (const file of ["L1", "L2", "L3", "L4"] as const) {
      const cited = new Set(LESSONS.flatMap((l) => l.blocks.filter((b) => b.source.file === file).flatMap((b) => b.source.units)));
      for (const u of SOURCE_FILES[file].inScope) if (!skip[file].includes(u)) expect(cited.has(u), `${file} slide ${u} not taught`).toBe(true);
    }
  });
  it("every Lab 4–6 page is cited by a lesson", () => {
    const cited = new Set(LESSONS.flatMap((l) => l.blocks.filter((b) => b.source.file === "LAB").flatMap((b) => b.source.units)));
    for (const u of SOURCE_FILES.LAB.inScope) expect(cited.has(u), `pg. ${u}`).toBe(true);
  });
});

describe("flashcards", () => {
  it("are well formed and cite in-scope sources", () => {
    const ids = new Set<string>();
    for (const c of FLASHCARDS) {
      expect(ids.has(c.id), `duplicate ${c.id}`).toBe(false);
      ids.add(c.id);
      expect(TOPIC_BY_ID[c.topicId]?.unitId).toBe(c.unitId);
      checkRef(c.source, c.id);
    }
  });
});

describe("question bank", () => {
  it("ids are unique", () => {
    expect(new Set(QUESTIONS.map((q) => q.id)).size).toBe(QUESTIONS.length);
  });

  it("every question has answer, explanation, source, difficulty, topic and objective", () => {
    for (const q of QUESTIONS) {
      expect(q.prompt.trim(), q.id).not.toBe("");
      expect(q.explanation.trim(), q.id).not.toBe("");
      expect(q.objective.trim(), q.id).not.toBe("");
      expect(["easy", "medium", "hard"]).toContain(q.difficulty);
      expect(TOPIC_BY_ID[q.topicId], `${q.id} topic`).toBeTruthy();
      expect(TOPIC_BY_ID[q.topicId].unitId, `${q.id} unit/topic mismatch`).toBe(q.unitId);
      expect(q.sources.length, q.id).toBeGreaterThan(0);
      for (const r of q.sources) checkRef(r, q.id);
    }
  });

  it("answers are structurally valid", () => {
    for (const q of QUESTIONS) {
      switch (q.kind) {
        case "mcq":
          expect(q.options.length, q.id).toBeGreaterThanOrEqual(3);
          expect(new Set(q.options).size, `${q.id} duplicate options`).toBe(q.options.length);
          expect(q.answer >= 0 && q.answer < q.options.length, q.id).toBe(true);
          break;
        case "fill":
          expect((q.prompt.match(/___/g) ?? []).length, `${q.id} blanks vs ___`).toBe(q.blanks.length);
          for (const b of q.blanks) expect(b.length, q.id).toBeGreaterThan(0);
          break;
        case "match":
          expect(q.pairs.length, q.id).toBeGreaterThanOrEqual(3);
          expect(new Set(q.pairs.map((p) => p[0])).size, `${q.id} duplicate lefts`).toBe(q.pairs.length);
          break;
        case "order":
          expect(q.items.length, q.id).toBeGreaterThanOrEqual(3);
          expect(new Set(q.items).size, `${q.id} duplicate items`).toBe(q.items.length);
          break;
        case "short":
          expect(q.ideas.length, q.id).toBeGreaterThan(0);
          break;
        default:
          break;
      }
    }
  });

  it("every crypto answer equals the cipher engine's output", () => {
    for (const q of QUESTIONS) if (q.kind === "crypto") expect(engine(q.spec), q.id).toBe(q.answer);
  });

  it("every correct answer grades as fully correct", () => {
    for (const q of QUESTIONS) {
      let g;
      if (q.kind === "mcq") g = grade(q, { kind: "mcq", choice: q.answer });
      else if (q.kind === "tf") g = grade(q, { kind: "tf", value: q.answer });
      else if (q.kind === "fill") g = grade(q, { kind: "fill", values: q.blanks.map((b) => b[0]) });
      else if (q.kind === "match") g = grade(q, { kind: "match", map: Object.fromEntries(q.pairs.map((p, i) => [i, p[1]])) });
      else if (q.kind === "order") g = grade(q, { kind: "order", items: q.items });
      else if (q.kind === "short") g = grade(q, { kind: "short", text: q.modelAnswer });
      else g = grade(q, { kind: "crypto", text: q.answer });
      expect(g.correct, `${q.id}: ${g.feedback.join(" | ")}`).toBe(true);
    }
  });

  it("short-answer model answers hit every idea, and an empty/irrelevant answer hits none", () => {
    for (const q of QUESTIONS)
      if (q.kind === "short") {
        for (const idea of q.ideas) expect(ideaHit(q.modelAnswer, idea), `${q.id}: ${idea.label}`).toBe(true);
        expect(grade(q, { kind: "short", text: "I do not know" }).fraction, q.id).toBeLessThan(0.5);
      }
  });

  it("covers all question kinds and every unit", () => {
    const kinds = new Set(QUESTIONS.map((q) => q.kind));
    for (const k of ["mcq", "tf", "fill", "match", "order", "short", "crypto"]) expect(kinds.has(k as never), k).toBe(true);
    const styles = new Set(QUESTIONS.map((q) => q.style));
    for (const s of ["definition", "scenario", "procedure", "calculation", "alphabet"]) expect(styles.has(s as never), s).toBe(true);
    for (const u of UNITS) expect(QUESTIONS.filter((q) => q.unitId === u.id).length, u.id).toBeGreaterThanOrEqual(12);
  });

  it("every topic has at least one question", () => {
    for (const t of TOPICS) expect(QUESTIONS.some((q) => q.topicId === t.id), t.id).toBe(true);
  });
});
