// Mock exam engine: seeded paper generation, deadlines and grading. Pure functions.
//
// IMPORTANT: the official question distribution and duration of the CSSY1208 midterm
// were NOT provided. The blueprint and default duration below are PRACTICE SETTINGS.

import { caesar, railDecrypt, railEncrypt, routeDecrypt, routeEncrypt, ROUTE_LABELS, FILL_LABELS, vigenere } from "../crypto/ciphers";
import { pg } from "../data/course";
import { QUESTIONS } from "../data/questions";
import type { AnswerValue, CryptoQ, CryptoSpec, Difficulty, Question, QuestionKind, UnitId } from "../data/types";
import { grade, marksFor } from "../grading/grade";

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

// ------------------------------------------------------------------ blueprint (practice setting)
type SlotFilter = { kind: QuestionKind; units: UnitId[]; style?: Question["style"]; cipher?: "substitution" | "transposition"; /** Overrides the section's marksEach. */ marks?: number };

export interface SectionPlan {
  key: string;
  title: string;
  instructions: string;
  marksEach: number;
  slots: SlotFilter[];
}

const CH: UnitId[] = ["ch1", "ch2", "ch3", "ch4"];

export const BLUEPRINT: SectionPlan[] = [
  {
    key: "A",
    title: "Section A — Multiple choice",
    instructions: "Choose the one best answer.",
    marksEach: 0.5,
    slots: ["ch1", "ch2", "ch3", "ch4", "ch1", "ch2", "ch3", "ch4"].map((u) => ({ kind: "mcq" as const, units: [u as UnitId] })),
  },
  {
    key: "B",
    title: "Section B — True or False",
    instructions: "Decide whether each statement is true or false.",
    marksEach: 0.5,
    slots: [
      { kind: "tf", units: ["ch1"] },
      { kind: "tf", units: ["ch2"] },
      { kind: "tf", units: ["ch3"] },
      { kind: "tf", units: ["ch4"] },
      { kind: "tf", units: ["lab4"] },
      { kind: "tf", units: ["lab5"] },
    ],
  },
  {
    key: "C",
    title: "Section C — Fill in the blanks",
    instructions: "Write the missing word(s). Each blank carries an equal share of the marks.",
    marksEach: 1,
    slots: [
      { kind: "fill", units: CH },
      { kind: "fill", units: ["lab6"], style: "alphabet" },
    ],
  },
  {
    key: "D",
    title: "Section D — Matching and ordering",
    instructions: "Match each item (2 marks), then put the steps in the correct order (1 mark).",
    marksEach: 1,
    slots: [
      { kind: "match", units: [...CH, "lab4", "lab5", "lab6"], marks: 2 },
      { kind: "order", units: [...CH, "lab4", "lab5", "lab6"], marks: 1 },
    ],
  },
  {
    key: "E",
    title: "Section E — Short answer",
    instructions: "Answer in one to three sentences. Marks are awarded for each key idea.",
    marksEach: 2,
    slots: [
      { kind: "short", units: ["ch1", "ch2"] },
      { kind: "short", units: ["ch3", "ch4", "lab4", "lab5"] },
    ],
  },
  {
    key: "F",
    title: "Section F — Cryptography (no calculator)",
    instructions: "Show your working on paper using the alphabet table (A = 0 … Z = 25). Type only the final answer.",
    marksEach: 2,
    slots: [
      { kind: "crypto", units: ["lab6"], cipher: "substitution" },
      { kind: "crypto", units: ["lab6"], cipher: "transposition" },
    ],
  },
];

export function blueprintTotal(plan: SectionPlan[] = BLUEPRINT): number {
  return plan.reduce((s, sec) => s + sec.slots.reduce((t, slot) => t + (slot.marks ?? sec.marksEach), 0), 0);
}

export const DEFAULT_DURATION: Record<Difficulty, number> = { easy: 40, medium: 45, hard: 50 };

export const PAPERS: { id: string; title: string; difficulty: Difficulty; seed: number }[] = [
  { id: "easy-a", title: "Easy Paper A", difficulty: "easy", seed: 11_001 },
  { id: "easy-b", title: "Easy Paper B", difficulty: "easy", seed: 11_002 },
  { id: "medium-a", title: "Medium Paper A", difficulty: "medium", seed: 22_001 },
  { id: "medium-b", title: "Medium Paper B", difficulty: "medium", seed: 22_002 },
  { id: "hard-a", title: "Hard Paper A", difficulty: "hard", seed: 33_001 },
  { id: "hard-b", title: "Hard Paper B", difficulty: "hard", seed: 33_002 },
];

const WEIGHTS: Record<Difficulty, Record<Difficulty, number>> = {
  easy: { easy: 6, medium: 2, hard: 0.2 },
  medium: { easy: 1.5, medium: 5, hard: 1.5 },
  hard: { easy: 0.3, medium: 2, hard: 6 },
};

function weightedPick<T extends { difficulty: Difficulty }>(pool: T[], level: Difficulty, rand: () => number): T | undefined {
  if (!pool.length) return undefined;
  const w = pool.map((q) => WEIGHTS[level][q.difficulty]);
  const total = w.reduce((a, b) => a + b, 0);
  let r = rand() * total;
  for (let i = 0; i < pool.length; i++) {
    r -= w[i];
    if (r <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

// ------------------------------------------------------------------ generated cryptography questions
const WORDS = ["SECRET", "ACCESS", "AUDIT", "ASSET", "THREAT", "RISK", "LOGGING", "FIREWALL", "MUSCAT", "POLICY", "BACKUP", "TOKEN", "PRIVACY", "BIOMETRIC", "INTEGRITY", "CONTROL", "DEFENSE", "IDENTITY"];
const KEYS = ["KEY", "WORD", "LOCK", "SAFE", "CODE", "OMAN"];

function pickInt(rand: () => number, a: number, b: number): number {
  return a + Math.floor(rand() * (b - a + 1));
}

function pickOf<T>(rand: () => number, xs: T[]): T {
  return xs[Math.floor(rand() * xs.length)];
}

function solve(spec: CryptoSpec): string {
  switch (spec.cipher) {
    case "caesar":
      return caesar(spec.text, spec.key, spec.mode).output;
    case "vigenere":
      return vigenere(spec.text, spec.key, spec.mode).output;
    case "rail":
      return spec.mode === "encrypt" ? railEncrypt(spec.text, spec.depth).output : railDecrypt(spec.text, spec.depth).output;
    case "route":
      return spec.mode === "encrypt"
        ? routeEncrypt(spec.text, spec.rows, spec.cols, spec.fill, spec.route).output
        : routeDecrypt(spec.text, spec.rows, spec.cols, spec.fill, spec.route).output;
  }
}

export function describeSpec(spec: CryptoSpec): string {
  const verb = spec.mode === "encrypt" ? "Encrypt" : "Decrypt";
  switch (spec.cipher) {
    case "caesar":
      return `${verb} ${spec.text} with the Caesar cipher, K = ${spec.key}.`;
    case "vigenere":
      return `${verb} ${spec.text} with the Vigenère cipher using the key ${spec.key}.`;
    case "rail":
      return `${verb} ${spec.text} with the Rail Fence cipher, depth ${spec.depth}.`;
    case "route":
      return `${verb} ${spec.text} with the Route cipher: ${spec.cols} columns × ${spec.rows} rows, ${FILL_LABELS[spec.fill].toLowerCase()}, route: ${ROUTE_LABELS[spec.route].toLowerCase()}${spec.mode === "encrypt" ? " (pad with X)" : ""}.`;
  }
}

/** Build a fresh, deterministic cryptography question for a paper. */
export function generateCrypto(kind: "substitution" | "transposition", level: Difficulty, rand: () => number, id: string): CryptoQ {
  let spec: CryptoSpec;
  const word = () => pickOf(rand, WORDS.filter((w) => (level === "easy" ? w.length <= 6 : level === "medium" ? w.length <= 8 : true)));
  if (kind === "substitution") {
    const useVig = level === "easy" ? rand() < 0.25 : level === "medium" ? rand() < 0.5 : rand() < 0.65;
    const decrypt = level === "hard" ? rand() < 0.6 : level === "medium" ? rand() < 0.3 : false;
    const plain = word();
    if (useVig) {
      const key = pickOf(rand, KEYS);
      const text = decrypt ? vigenere(plain, key, "encrypt").output : plain;
      spec = { cipher: "vigenere", mode: decrypt ? "decrypt" : "encrypt", text, key };
    } else {
      const key = level === "easy" ? pickInt(rand, 1, 5) : pickInt(rand, 3, 25);
      const text = decrypt ? caesar(plain, key, "encrypt").output : plain;
      spec = { cipher: "caesar", mode: decrypt ? "decrypt" : "encrypt", text, key };
    }
  } else {
    const useRoute = level === "easy" ? rand() < 0.3 : rand() < 0.5;
    const decrypt = level === "hard" ? rand() < 0.6 : level === "medium" ? rand() < 0.3 : false;
    const plain = word();
    if (useRoute) {
      const cols = level === "easy" ? 3 : pickInt(rand, 3, 4);
      const rows = Math.ceil(plain.length / cols);
      const route = level === "hard" ? pickOf(rand, ["spiral-tl", "spiral-tr", "corner-tr"] as const) : "spiral-tl";
      const fill = level === "hard" && rand() < 0.4 ? "columns" : "rows";
      const text = decrypt ? routeEncrypt(plain, rows, cols, fill, route).output : plain;
      spec = { cipher: "route", mode: decrypt ? "decrypt" : "encrypt", text, rows, cols, fill, route };
    } else {
      const depth = level === "easy" ? pickInt(rand, 2, 3) : level === "medium" ? 3 : pickInt(rand, 3, 4);
      const text = decrypt ? railEncrypt(plain, depth).output : plain;
      spec = { cipher: "rail", mode: decrypt ? "decrypt" : "encrypt", text, depth };
    }
  }
  const topicId = spec.cipher === "caesar" ? "lab6-caesar" : spec.cipher === "vigenere" ? "lab6-vigenere" : spec.cipher === "rail" ? "lab6-rail" : "lab6-route";
  const page = spec.cipher === "caesar" ? [14] : spec.cipher === "vigenere" ? [14, 15] : spec.cipher === "rail" ? [15] : [16];
  return {
    id,
    kind: "crypto",
    style: "calculation",
    unitId: "lab6",
    topicId,
    difficulty: level,
    origin: "original",
    objective: `${spec.mode === "encrypt" ? "Encrypt" : "Decrypt"} by hand with the ${spec.cipher === "rail" ? "Rail Fence" : spec.cipher === "vigenere" ? "Vigenère" : spec.cipher[0].toUpperCase() + spec.cipher.slice(1)} cipher.`,
    prompt: describeSpec(spec),
    spec,
    answer: solve(spec),
    explanation: `Method from the Lab Manual (Lab 6, pg. ${page.join("–")}). Open the Cryptography Lab with these settings to see every intermediate step.`,
    sources: [pg(6, 13, ...page)],
  };
}

// ------------------------------------------------------------------ papers and attempts
export interface ExamItem {
  question: Question;
  marks: number;
  section: string;
  /** Display order of MCQ options (original indices). */
  optionOrder?: number[];
  /** Display order of the match right-hand choices (unique texts). */
  rights?: string[];
  /** Starting order for ordering questions. */
  scrambled?: string[];
}

export interface Paper {
  title: string;
  difficulty: Difficulty;
  seed: number;
  items: ExamItem[];
  total: number;
}

/**
 * `seed` decides WHICH questions are on the paper; `orderSeed` decides their order and the
 * option/choice shuffles, so a named paper can be re-sat with a fresh order.
 */
export function buildPaper(difficulty: Difficulty, seed: number, title: string, bank: Question[] = QUESTIONS, orderSeed: number = seed): Paper {
  const rand = mulberry32(seed);
  const orand = mulberry32((orderSeed ^ 0x9e3779b9) >>> 0);
  const used = new Set<string>();
  const items: ExamItem[] = [];
  let gen = 0;
  for (const sec of BLUEPRINT) {
    const sectionItems: ExamItem[] = [];
    for (const slot of sec.slots) {
      let q: Question | undefined;
      if (slot.kind === "crypto") {
        // Mix the manual's own exercises with freshly generated ones.
        const fromBank = bank.filter(
          (x): x is CryptoQ =>
            x.kind === "crypto" &&
            !used.has(x.id) &&
            (slot.cipher === "substitution" ? ["caesar", "vigenere"] : ["rail", "route"]).includes(x.spec.cipher),
        );
        q = rand() < 0.35 ? weightedPick(fromBank, difficulty, rand) : undefined;
        q ??= generateCrypto(slot.cipher!, difficulty, rand, `gen-${seed}-${gen++}`);
      } else {
        const pool = bank.filter((x) => x.kind === slot.kind && slot.units.includes(x.unitId) && (!slot.style || x.style === slot.style) && !used.has(x.id));
        q = weightedPick(pool, difficulty, rand);
      }
      if (!q) throw new Error(`No question available for ${sec.key}/${slot.kind}/${slot.units.join(",")}`);
      used.add(q.id);
      const marks = slot.marks ?? sec.marksEach;
      const item: ExamItem = { question: q, marks, section: sec.key };
      if (q.kind === "mcq") item.optionOrder = seededShuffle(q.options.map((_, i) => i), orand);
      if (q.kind === "match") item.rights = seededShuffle([...new Set(q.pairs.map((p) => p[1]))], orand);
      if (q.kind === "order") {
        let sc = seededShuffle(q.items, orand);
        for (let tries = 0; tries < 5 && sc.every((x, i) => x === q!.items[i]); tries++) sc = seededShuffle(q.items, orand);
        item.scrambled = sc;
      }
      sectionItems.push(item);
    }
    // Randomized question order within each section.
    items.push(...seededShuffle(sectionItems, orand));
  }
  return { title, difficulty, seed, items, total: items.reduce((s, i) => s + i.marks, 0) };
}

export type AttemptStatus = "in_progress" | "submitted";

export interface ItemResult {
  qid: string;
  marks: number;
  earned: number;
  status: "correct" | "partial" | "incorrect" | "unanswered";
  feedback: string[];
}

export interface Breakdown {
  earned: number;
  max: number;
}

export interface ExamResult {
  score: number;
  max: number;
  percentage: number;
  timeSpentMs: number;
  items: ItemResult[];
  byUnit: Partial<Record<UnitId, Breakdown>>;
  byTopic: Record<string, Breakdown>;
  bySection: Record<string, Breakdown>;
}

export interface ExamAttempt {
  id: string;
  paperId: string;
  title: string;
  difficulty: Difficulty;
  seed: number;
  orderSeed: number;
  durationMinutes: number;
  startedAt: number;
  deadline: number;
  status: AttemptStatus;
  submittedAt: number | null;
  autoSubmitted: boolean;
  items: ExamItem[];
  answers: Record<string, AnswerValue>;
  flagged: string[];
  current: number;
  result: ExamResult | null;
}

export function createAttempt(paperId: string, title: string, difficulty: Difficulty, seed: number, durationMinutes: number, now: number, id: string, orderSeed: number = newSeed()): ExamAttempt {
  const paper = buildPaper(difficulty, seed, title, QUESTIONS, orderSeed);
  return {
    id,
    paperId,
    title,
    difficulty,
    seed,
    orderSeed,
    durationMinutes,
    startedAt: now,
    deadline: now + durationMinutes * 60_000,
    status: "in_progress",
    submittedAt: null,
    autoSubmitted: false,
    items: paper.items,
    answers: {},
    flagged: [],
    current: 0,
    result: null,
  };
}

export function remainingMs(a: Pick<ExamAttempt, "deadline">, now: number): number {
  return Math.max(0, a.deadline - now);
}

export function isExpired(a: Pick<ExamAttempt, "deadline" | "status">, now: number): boolean {
  return a.status === "in_progress" && now >= a.deadline;
}

export function gradeAttempt(a: Pick<ExamAttempt, "items" | "answers" | "startedAt" | "deadline">, submittedAt: number): ExamResult {
  const items: ItemResult[] = [];
  const byUnit: ExamResult["byUnit"] = {};
  const byTopic: ExamResult["byTopic"] = {};
  const bySection: ExamResult["bySection"] = {};
  for (const it of a.items) {
    const q = it.question;
    const ans = a.answers[q.id];
    const g = grade(q, ans);
    const earned = marksFor(g, it.marks);
    const status: ItemResult["status"] = g.feedback[0] === "Not answered." ? "unanswered" : g.correct ? "correct" : earned > 0 ? "partial" : "incorrect";
    items.push({ qid: q.id, marks: it.marks, earned, status, feedback: g.feedback });
    for (const [rec, key] of [
      [byUnit, q.unitId],
      [byTopic, q.topicId],
      [bySection, it.section],
    ] as const) {
      const b = ((rec as Record<string, Breakdown>)[key] ??= { earned: 0, max: 0 });
      b.earned += earned;
      b.max += it.marks;
    }
  }
  const score = items.reduce((s, i) => s + i.earned, 0);
  const max = items.reduce((s, i) => s + i.marks, 0);
  return {
    score,
    max,
    percentage: max ? Math.round((score / max) * 1000) / 10 : 0,
    timeSpentMs: Math.max(0, Math.min(submittedAt, a.deadline) - a.startedAt),
    items,
    byUnit,
    byTopic,
    bySection,
  };
}

export function formatDuration(ms: number): string {
  const total = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return h ? `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}` : `${m}:${String(s).padStart(2, "0")}`;
}
