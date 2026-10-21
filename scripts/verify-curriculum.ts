/**
 * Curriculum verification (PHASE 12).
 *
 * Automatically verifies structure, scope and every machine-checkable fact by
 * running code in the same Pyodide build + harness that the app uses:
 *   - lesson example outputs, tracing answers, "output" MCQs, error questions,
 *   - coding exercise reference solutions against their tests.
 * Checks that need human judgement (does the cited slide really support the
 * question?) are written to docs/audit/manual-review.md with the cited source text.
 *
 * Usage: npx tsx scripts/verify-curriculum.ts [--only lessons,mcq,exercises,exams] [--no-python]
 */
import { Worker } from "node:worker_threads";
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { CONCEPTS, CONCEPT_MAP } from "../src/data/concepts";
import { SOURCE_FILES, SOURCE_FILE_LIST, isUnitInScope, formatSourceRef } from "../src/data/sources";
import { LESSONS } from "../src/data/lessons/index";
import { PRACTICE_MCQS, PRACTICE_MCQ_MAP } from "../src/data/practice/mcq";
import { EXERCISES } from "../src/data/practice/exercises";
import { EXAM_QUESTIONS } from "../src/data/exams/questions";
import { EXAM_ANSWERS } from "../src/data/exams/answers";
import { EXAMS } from "../src/data/exams/exams";
import type { CodingQuestion, Question, SourceRef } from "../src/data/types";
import { gradeCoding, renderTerminal, tracingMatches, type ExecResult } from "../src/grading/checks";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const onlyArg = args.find((a) => a.startsWith("--only"));
const ONLY = onlyArg ? (onlyArg.split("=")[1] ?? args[args.indexOf(onlyArg) + 1] ?? "").split(",") : null;
const NO_PY = args.includes("--no-python");
const want = (part: string) => !ONLY || ONLY.includes(part);

// ------------------------------------------------------------------ reporting
type Status = "pass" | "fail" | "manual";
interface CheckResult {
  id: string;
  title: string;
  status: Status;
  details: string[];
}
const checks: CheckResult[] = [];
function record(id: string, title: string, failures: string[], manual: string[] = []) {
  const status: Status = failures.length ? "fail" : manual.length ? "manual" : "pass";
  checks.push({ id, title, status, details: failures.length ? failures : manual });
  const icon = status === "pass" ? "PASS  " : status === "fail" ? "FAIL  " : "REVIEW";
  console.log(`${icon} ${id} ${title}${failures.length ? ` (${failures.length} problem(s))` : ""}`);
  for (const d of (failures.length ? failures : manual).slice(0, 40)) console.log(`         - ${d}`);
}

// ------------------------------------------------------------------ python pool
class PyPool {
  private worker: Worker | null = null;
  private ready: Promise<void> | null = null;
  private nextId = 1;
  version = "";

  private start() {
    this.worker = new Worker(new URL("./py-worker.mjs", import.meta.url));
    this.ready = new Promise((resolve, reject) => {
      const onMsg = (m: { type: string; version?: string }) => {
        if (m.type === "ready") {
          this.version = m.version ?? "";
          this.worker!.off("message", onMsg);
          resolve();
        }
      };
      this.worker!.on("message", onMsg);
      this.worker!.once("error", reject);
    });
  }

  async run(code: string, inputs: string[] = [], mode: "script" | "notebook" = "script", timeoutMs = 10_000): Promise<ExecResult> {
    if (!this.worker) this.start();
    await this.ready;
    const id = this.nextId++;
    const w = this.worker!;
    return new Promise<ExecResult>((resolve) => {
      const timer = setTimeout(() => {
        w.off("message", onMsg);
        void w.terminate();
        this.worker = null;
        resolve({ status: "timeout", errorType: null, error: null, line: null, stdout: "", transcript: [], labNotice: "timeout" });
      }, timeoutMs);
      const onMsg = (m: ExecResult & { type: string; id: number }) => {
        if (m.type === "result" && m.id === id) {
          clearTimeout(timer);
          w.off("message", onMsg);
          resolve(m);
        }
      };
      w.on("message", onMsg);
      w.postMessage({ id, code, inputs, mode });
    });
  }

  async close() {
    await this.worker?.terminate();
  }
}
const py = new PyPool();

// ------------------------------------------------------------------ helpers
function lastErrorLine(err: string | null): string {
  if (!err) return "";
  const lines = err.trim().split("\n");
  return lines[lines.length - 1].trim();
}

function stripStringsAndComments(code: string): string {
  // Remove string literal contents (incl. triple-quoted) and comments.
  let out = "";
  let i = 0;
  while (i < code.length) {
    const ch = code[i];
    if (ch === "#") {
      while (i < code.length && code[i] !== "\n") i++;
      continue;
    }
    if (ch === "'" || ch === '"') {
      const triple = code.slice(i, i + 3) === ch.repeat(3);
      const q = triple ? ch.repeat(3) : ch;
      i += q.length;
      while (i < code.length && code.slice(i, i + q.length) !== q) {
        if (code[i] === "\\") {
          i += 2; // escape (incl. backslash-newline continuation)
          continue;
        }
        if (!triple && code[i] === "\n") break;
        i++;
      }
      i += q.length;
      out += '""';
      continue;
    }
    out += ch;
    i++;
  }
  return out;
}

const FORBIDDEN: [RegExp, string][] = [
  [/^\s*for\s/m, "for loop (Topic 4 slide 22+, excluded)"],
  [/\brange\s*\(/, "range() (Topic 4 slide 25+, excluded)"],
  [/^\s*break\b/m, "break (Topic 4 slide 36+, excluded)"],
  [/^\s*continue\b/m, "continue (Topic 4 slide 41+, excluded)"],
  [/\bwhile\s+True\b/, "while True / infinite loop (Topic 4 slide 19+, excluded)"],
  [/^\s*def\s/m, "functions (not in the supplied material)"],
  [/\blambda\b/, "lambda (not taught)"],
  [/^\s*(try|except|finally)\b/m, "exception handling (not taught)"],
  [/^\s*(import|from)\s/m, "import (not taught)"],
  [/\b(str|round|len|max|min|abs|sum|sorted|list|dict|set|tuple|bool|eval|exit|quit)\s*\(/, "built-in function not taught in the slides"],
  [/\.\s*[A-Za-z_]\w*\s*\(/, "method call (string/list methods are not taught)"],
  [/\[/, "lists / indexing (not taught)"],
  [/\bin\b/, "membership operator `in` (not taught)"],
  [/\bis\b/, "identity operator `is` (not taught)"],
  [/\bpass\b/, "pass (not taught)"],
  [/\bsep\s*=/, "print(sep=...) (not taught)"],
];

function syllabusViolations(code: string | undefined, where: string): string[] {
  if (!code) return [];
  const problems: string[] = [];
  const bare = stripStringsAndComments(code);
  for (const [re, why] of FORBIDDEN) if (re.test(bare)) problems.push(`${where}: uses ${why}`);
  if (/\bf(["'])[^"'\n]*\{[^}\n]*:[^}\n]*\}/.test(code)) problems.push(`${where}: f-string format spec (e.g. :.2f) is not taught`);
  if (/[“”‘’]/.test(bare)) problems.push(`${where}: curly quotes outside string literals`);
  return problems;
}

function checkRefs(refs: SourceRef[] | undefined, where: string, failures: string[], manual: string[]) {
  if (!refs || refs.length === 0) {
    failures.push(`${where}: no source reference`);
    return;
  }
  for (const r of refs) {
    const f = SOURCE_FILES[r.file];
    if (!f) {
      failures.push(`${where}: unknown source file "${r.file}"`);
      continue;
    }
    if (!r.units?.length) failures.push(`${where}: reference to ${f.fileName} has no ${f.unitLabel.toLowerCase()} numbers`);
    for (const u of r.units ?? []) {
      if (!Number.isInteger(u) || u < 1 || u > f.totalUnits)
        failures.push(`${where}: ${f.unitLabel} ${u} does not exist in ${f.fileName} (1–${f.totalUnits})`);
      else if (!isUnitInScope(r.file, u))
        failures.push(`${where}: ${f.unitLabel} ${u} of ${f.fileName} is OUTSIDE the permitted scope`);
      const bad = f.doNotUseAsAnswer?.find((d) => d.unit === u);
      if (bad) manual.push(`${where}: cites ${f.fileName} ${f.unitLabel} ${u}, which has a known error (${bad.reason}) — confirm it is cited as the task source, not as the answer`);
    }
  }
}

// ------------------------------------------------------------------ source text (for manual review packet)
const transcriptText: Record<string, Record<number, string>> = {};
function loadTranscripts() {
  const decks: [string, string[]][] = [
    ["topic2", ["topic2_part1.md", "topic2_part2.md"]],
    ["topic3", ["topic3.md"]],
    ["topic4", ["topic4.md"]],
  ];
  for (const [id, files] of decks) {
    transcriptText[id] = {};
    for (const f of files) {
      const p = join(ROOT, "docs/curriculum/transcripts", f);
      if (!existsSync(p)) continue;
      const text = readFileSync(p, "utf8");
      const parts = text.split(/^## Slide (\d+)/m);
      for (let i = 1; i < parts.length; i += 2) transcriptText[id][Number(parts[i])] = parts[i + 1].trim();
    }
  }
  const labs = JSON.parse(readFileSync(join(ROOT, "src/data/generated/labCells.json"), "utf8")) as Record<
    string,
    { n: number; text: string; output: string }[]
  >;
  for (const [id, cells] of Object.entries(labs)) {
    transcriptText[id] = {};
    for (const c of cells) transcriptText[id][c.n] = `${c.text}${c.output ? `\n--- output ---\n${c.output}` : ""}`;
  }
  transcriptText.pe1 = { 1: readFileSync(join(ROOT, "docs/curriculum/Practice_Exercises-I.txt"), "utf8") };
  const pe3 = readFileSync(join(ROOT, "docs/curriculum/Practice_Exercises-III.txt"), "utf8");
  transcriptText.pe3 = { 1: pe3, 2: pe3 };
}

const reviewPacket: string[] = [];
function addReview(itemId: string, kind: string, conceptIds: string[], text: string, refs: SourceRef[]) {
  const lines = [`### ${itemId} (${kind})`, "", `**Concepts:** ${conceptIds.map((c) => CONCEPT_MAP[c]?.title ?? c).join("; ")}`, "", `**Item:** ${text.replace(/\n/g, " ").slice(0, 400)}`, ""];
  for (const r of refs) {
    lines.push(`**Cited:** ${formatSourceRef(r)}`);
    for (const u of r.units.slice(0, 3)) {
      const src = transcriptText[r.file]?.[u];
      if (src) lines.push("", "```text", src.slice(0, 700).replace(/```/g, "'''"), "```");
    }
  }
  reviewPacket.push(lines.join("\n"));
}

// concept-to-source overlap heuristic
function refsOverlapConcepts(refs: SourceRef[], conceptIds: string[]): boolean {
  for (const cid of conceptIds) {
    const c = CONCEPT_MAP[cid];
    if (!c) continue;
    for (const cr of c.sources)
      for (const r of refs) if (cr.file === r.file && r.units.some((u) => cr.units.includes(u))) return true;
  }
  return false;
}

// ------------------------------------------------------------------ checks
const allIds = new Map<string, string>();
function claimId(id: string, where: string, failures: string[]) {
  if (allIds.has(id)) failures.push(`duplicate id "${id}" (${where} and ${allIds.get(id)})`);
  else allIds.set(id, where);
}

async function verifyLessons() {
  const failures: string[] = [];
  const manual: string[] = [];
  const exampleFails: string[] = [];
  for (const l of LESSONS) {
    claimId(l.id, "lesson", failures);
    checkRefs(l.sources, `lesson ${l.id}`, failures, manual);
    for (const c of l.conceptIds) if (!CONCEPT_MAP[c]) failures.push(`lesson ${l.id}: unknown concept ${c}`);
    if (!l.explanation.length) failures.push(`lesson ${l.id}: no explanation`);
    if (!l.examples.length) failures.push(`lesson ${l.id}: no examples`);
    if (l.quickCheck.length < 2) failures.push(`lesson ${l.id}: quick check needs at least 2 questions`);
    for (const q of l.quickCheck) if (!PRACTICE_MCQ_MAP[q]) failures.push(`lesson ${l.id}: quick-check question ${q} not found in practice bank`);
    for (const s of l.explanation) if (s.source) checkRefs([s.source], `lesson ${l.id} section "${s.heading}"`, failures, manual);
    failures.push(...syllabusViolations(l.tryIt.starterCode, `lesson ${l.id} try-it starter`));
    for (const m of l.mistakes) failures.push(...syllabusViolations(m.right, `lesson ${l.id} mistake "${m.title}" (correct version)`));
    for (const [i, ex] of l.examples.entries()) {
      const where = `lesson ${l.id} example ${i + 1} "${ex.title}"`;
      checkRefs([ex.source], where, failures, manual);
      if (!ex.raises) failures.push(...syllabusViolations(ex.code, where));
      if (NO_PY) continue;
      const r = await py.run(ex.code, ex.inputs ?? []);
      const terminal = renderTerminal(r.transcript);
      if (ex.raises) {
        if (r.status !== "runtime_error" && r.status !== "syntax_error") exampleFails.push(`${where}: expected an error (${ex.raises}) but status was ${r.status}`);
        else if (lastErrorLine(r.error) !== ex.raises.trim()) exampleFails.push(`${where}: error line is "${lastErrorLine(r.error)}" but lesson says "${ex.raises}"`);
      } else if (r.status !== "ok") {
        exampleFails.push(`${where}: did not run cleanly (${r.status}: ${lastErrorLine(r.error)})`);
      }
      if (terminal.replace(/\s+$/, "") !== ex.output.replace(/\s+$/, ""))
        exampleFails.push(`${where}: stated output does not match real Python.\n           stated: ${JSON.stringify(ex.output)}\n           actual: ${JSON.stringify(terminal)}`);
    }
  }
  record("C1-lessons", `Lessons: structure, citations and scope (${LESSONS.length} lessons)`, failures, manual);
  if (!NO_PY) record("C2-lesson-outputs", `Lesson example outputs match real Python (${LESSONS.reduce((n, l) => n + l.examples.length, 0)} examples)`, exampleFails);
}

async function verifyMcqs() {
  const failures: string[] = [];
  const manual: string[] = [];
  const outFails: string[] = [];
  for (const q of PRACTICE_MCQS) {
    claimId(q.id, "practice mcq", failures);
    checkQuestionBase(q, failures, manual);
    if (q.options.length < 3) failures.push(`${q.id}: needs at least 3 options`);
    const normOpts = q.options.map((o) => o.trim().toLowerCase());
    if (new Set(normOpts).size !== normOpts.length) failures.push(`${q.id}: duplicate options`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) failures.push(`${q.id}: answer index ${q.answer} out of range`);
    if (!q.explanation?.trim()) failures.push(`${q.id}: missing explanation`);
    if (q.answerIsOutput && !NO_PY) await checkOutputMcq(q.id, q.code, q.options[q.answer], outFails);
  }
  record("C3-practice-mcq", `Practice multiple-choice bank: keys, options, citations (${PRACTICE_MCQS.length} questions)`, failures, manual);
  if (!NO_PY) record("C4-mcq-outputs", "Output-type multiple-choice answers match real Python", outFails);
}

async function checkOutputMcq(id: string, code: string | undefined, option: string, fails: string[]) {
  if (!code) {
    fails.push(`${id}: answerIsOutput set but no code`);
    return;
  }
  const r = await py.run(code, []);
  if (r.status !== "ok") {
    // An error can be the right answer if the option names it.
    const line = lastErrorLine(r.error);
    if (!line || !option.includes(line.split(":")[0])) fails.push(`${id}: code raised ${line || r.status}, but the keyed option is "${option}"`);
    return;
  }
  if (!tracingMatches(option, r.stdout)) fails.push(`${id}: keyed option ${JSON.stringify(option)} != real output ${JSON.stringify(r.stdout)}`);
}

function checkQuestionBase(q: Question, failures: string[], manual: string[]) {
  checkRefs(q.sources, q.id, failures, manual);
  if (!q.conceptIds.length) failures.push(`${q.id}: no concept`);
  for (const c of q.conceptIds) {
    const concept = CONCEPT_MAP[c];
    if (!concept) failures.push(`${q.id}: unknown concept ${c}`);
    else if (concept.topicId !== q.topicId && !q.conceptIds.some((x) => CONCEPT_MAP[x]?.topicId === q.topicId))
      failures.push(`${q.id}: topic ${q.topicId} but concepts are from another topic`);
  }
  if (!q.prompt.trim()) failures.push(`${q.id}: empty prompt`);
  if (/infinite/i.test(q.prompt)) failures.push(`${q.id}: mentions infinite loops (excluded topic)`);
  if (q.kind !== "error") failures.push(...syllabusViolations(q.code, `${q.id} code`));
  if (q.kind === "coding") {
    failures.push(...syllabusViolations(q.starterCode, `${q.id} starter`));
    failures.push(...syllabusViolations(q.solution, `${q.id} solution`));
  }
  if (!refsOverlapConcepts(q.sources, q.conceptIds))
    manual.push(`${q.id}: cited ${q.sources.map(formatSourceRef).join("; ")} is not among the slides listed for its concept(s) — confirm the citation`);
  addReview(q.id, q.kind, q.conceptIds, q.prompt + (q.code ? `\n${q.code}` : ""), q.sources);
}

async function verifyCodingQuestion(q: CodingQuestion, solution: string | undefined, failures: string[], manual: string[]) {
  if (!solution) {
    failures.push(`${q.id}: no reference solution`);
    return;
  }
  if (q.tests.length < 2) failures.push(`${q.id}: needs at least 2 tests`);
  if (!q.tests.some((t) => !t.hidden)) failures.push(`${q.id}: needs at least one visible test`);
  if (!q.tests.some((t) => t.hidden)) failures.push(`${q.id}: needs at least one hidden test`);
  if (q.tests[0]?.hidden) failures.push(`${q.id}: the first test must be visible (it matches the sample run)`);
  if (q.hints.length !== 4 || q.hints.some((h) => !h.trim())) failures.push(`${q.id}: needs 4 non-empty hints`);
  for (const t of q.tests) if (!t.checks.length) failures.push(`${q.id}/${t.id}: test has no checks`);
  if (NO_PY) return;
  const runner = (code: string, inputs: string[]) => py.run(code, inputs);
  const g = await gradeCoding(q, solution, runner);
  if (!g.passedAll) {
    for (const t of g.tests.filter((x) => !x.passed))
      failures.push(`${q.id}: reference solution FAILS ${t.testId} (${t.category}): ${t.failedChecks.join("; ")}${t.error ? ` | ${lastErrorLine(t.error)}` : ""}\n           terminal: ${JSON.stringify(t.terminal)}`);
    for (const r of g.requirements.filter((x) => !x.passed)) failures.push(`${q.id}: reference solution misses requirement "${r.message}"`);
  }
  if (q.sampleRun !== undefined && q.tests[0]) {
    const r = await py.run(solution, q.tests[0].inputs);
    const term = renderTerminal(r.transcript);
    if (term.replace(/\s+$/, "") !== q.sampleRun.replace(/\s+$/, ""))
      failures.push(`${q.id}: sampleRun does not match the solution run with the first test's inputs.\n           sample: ${JSON.stringify(q.sampleRun)}\n           actual: ${JSON.stringify(term)}`);
  }
  if (q.starterCode.trim()) {
    const s = await gradeCoding(q, q.starterCode, runner);
    if (s.passedAll) manual.push(`${q.id}: the starter code already passes every test — tests may be too weak`);
  }
}

async function verifyExercises() {
  const failures: string[] = [];
  const manual: string[] = [];
  for (const e of EXERCISES) {
    claimId(e.id, "exercise", failures);
    checkQuestionBase(e, failures, manual);
    if (!e.title) failures.push(`${e.id}: missing title`);
    await verifyCodingQuestion(e, e.solution, failures, manual);
  }
  record("C5-exercises", `Practical exercises: tests, hints, solutions pass, citations (${EXERCISES.length} exercises)`, failures, manual);
}

async function verifyExams() {
  const failures: string[] = [];
  const manual: string[] = [];
  const pyFails: string[] = [];
  const qMap = new Map(EXAM_QUESTIONS.map((q) => [q.id, q]));
  for (const q of EXAM_QUESTIONS) {
    claimId(q.id, "exam question", failures);
    if (PRACTICE_MCQ_MAP[q.id]) failures.push(`${q.id}: exam question id collides with practice bank`);
    const leaked = Object.keys(q).filter((k) => ["answer", "explanation", "solution"].includes(k));
    if (leaked.length) failures.push(`${q.id}: exam question object contains answer data (${leaked.join(", ")})`);
    checkQuestionBase(q, failures, manual);
    const key = EXAM_ANSWERS[q.id];
    if (!key) {
      failures.push(`${q.id}: no answer key`);
      continue;
    }
    if (!key.explanation?.trim()) failures.push(`${q.id}: answer key has no explanation`);
    if (q.kind === "mcq" || q.kind === "error") {
      if (typeof key.answer !== "number" || key.answer < 0 || key.answer >= q.options.length) failures.push(`${q.id}: answer index invalid`);
      const normOpts = q.options.map((o) => o.trim().toLowerCase());
      if (new Set(normOpts).size !== normOpts.length) failures.push(`${q.id}: duplicate options`);
      if (q.kind === "mcq" && q.answerIsOutput && !NO_PY && typeof key.answer === "number") await checkOutputMcq(q.id, q.code, q.options[key.answer], pyFails);
      if (q.kind === "error" && !NO_PY) {
        const r = await py.run(q.code, q.inputs ?? []);
        if (r.status !== "runtime_error" && r.status !== "syntax_error") pyFails.push(`${q.id}: code was expected to raise ${q.errorType} but status was ${r.status}`);
        else {
          if (r.errorType !== q.errorType) pyFails.push(`${q.id}: real error is ${r.errorType}, question says ${q.errorType}`);
          if (q.errorLine !== undefined && r.line !== q.errorLine) pyFails.push(`${q.id}: real error line is ${r.line}, question says ${q.errorLine}`);
        }
      }
    } else if (q.kind === "tracing") {
      if (typeof key.answer !== "string") failures.push(`${q.id}: tracing answer must be the expected output string`);
      else if (!NO_PY) {
        const r = await py.run(q.code, q.inputs ?? []);
        if (r.status !== "ok") pyFails.push(`${q.id}: tracing code does not run cleanly (${r.status} ${lastErrorLine(r.error)})`);
        else if (!tracingMatches(key.answer, r.stdout)) pyFails.push(`${q.id}: keyed output ${JSON.stringify(key.answer)} != real ${JSON.stringify(r.stdout)}`);
      }
    } else if (q.kind === "coding") {
      await verifyCodingQuestion(q, typeof key.answer === "string" ? key.answer : undefined, pyFails, manual);
    }
  }
  record("C6-exam-questions", `Exam questions: keys, citations, scope, no answers in question data (${EXAM_QUESTIONS.length})`, failures, manual);
  if (!NO_PY) record("C7-exam-answers-python", "Exam answers verified by running code (tracing, error, output MCQ, coding)", pyFails);

  // exam configuration
  const cfg: string[] = [];
  if (EXAMS.length !== 6) cfg.push(`expected exactly 6 exams, found ${EXAMS.length}`);
  const wantDiff = ["easy", "easy", "medium", "medium", "hard", "hard"];
  const used = new Map<string, string>();
  for (const [i, e] of [...EXAMS].sort((a, b) => a.number - b.number).entries()) {
    if (e.number !== i + 1) cfg.push(`${e.id}: exam numbers must be 1–6`);
    if (e.difficulty !== wantDiff[i]) cfg.push(`${e.id}: difficulty ${e.difficulty}, expected ${wantDiff[i]}`);
    if (e.durationMinutes !== 30) cfg.push(`${e.id}: duration ${e.durationMinutes} min, expected 30`);
    const ids = e.sections.flatMap((s) => s.questionIds);
    if (new Set(ids).size !== ids.length) cfg.push(`${e.id}: duplicate question ids inside the exam`);
    let total = 0;
    const byKind: Record<string, number> = {};
    for (const s of e.sections) {
      for (const id of s.questionIds) {
        const q = qMap.get(id);
        if (!q) cfg.push(`${e.id}: question ${id} not found`);
        else {
          if (q.kind !== s.kind) cfg.push(`${e.id}: ${id} is ${q.kind} but placed in ${s.kind} section`);
          if (q.difficulty !== e.difficulty) manual.push(`${e.id}: ${id} is marked ${q.difficulty} in a ${e.difficulty} exam`);
        }
        if (used.has(id)) cfg.push(`${id} is used in both ${used.get(id)} and ${e.id}`);
        used.set(id, e.id);
        total += s.pointsEach;
        byKind[s.kind] = (byKind[s.kind] ?? 0) + s.pointsEach;
      }
    }
    const target: Record<string, number> = { mcq: 0.4, tracing: 0.2, error: 0.1, coding: 0.3 };
    for (const [k, v] of Object.entries(target)) {
      const share = (byKind[k] ?? 0) / (total || 1);
      if (Math.abs(share - v) > 0.05) cfg.push(`${e.id}: ${k} is ${(share * 100).toFixed(0)}% of points (target ${v * 100}%)`);
    }
    const topics = new Set(ids.map((id) => qMap.get(id)?.topicId));
    if (topics.size < 3) cfg.push(`${e.id}: covers only ${[...topics].join(", ")} — should sample all permitted topics`);
  }
  record("C8-exam-config", "Six exams: numbering, difficulty, 30-minute timing, composition, no duplicates", cfg);
}

function coverage() {
  const rows: string[] = [
    "| Concept | Topic | Lessons | Practice MCQ | Exercises | Exam items | Status |",
    "|---|---|---:|---:|---:|---:|---|",
  ];
  const problems: string[] = [];
  for (const c of CONCEPTS) {
    const nL = LESSONS.filter((l) => l.conceptIds.includes(c.id)).length;
    const nM = PRACTICE_MCQS.filter((q) => q.conceptIds.includes(c.id)).length;
    const nE = EXERCISES.filter((q) => q.conceptIds.includes(c.id)).length;
    const nX = EXAM_QUESTIONS.filter((q) => q.conceptIds.includes(c.id)).length;
    const missing = [nL ? "" : "lesson", nM + nE ? "" : "practice", nX ? "" : "exam"].filter(Boolean);
    if (missing.length) problems.push(`${c.id} (${c.title}) has no ${missing.join(", ")} coverage`);
    rows.push(`| ${c.title} (\`${c.id}\`) | ${c.topicId.toUpperCase()} | ${nL} | ${nM} | ${nE} | ${nX} | ${missing.length ? `⚠ missing ${missing.join(", ")}` : "✓ covered"} |`);
  }
  record("C9-coverage", `Every permitted concept is covered by lessons, practice and exams (${CONCEPTS.length} concepts)`, problems);
  const fileRows = ["| Source file | Scope | Items citing it |", "|---|---|---:|"];
  const allRefs: SourceRef[] = [
    ...LESSONS.flatMap((l) => [...l.sources, ...l.examples.map((e) => e.source)]),
    ...PRACTICE_MCQS.flatMap((q) => q.sources),
    ...EXERCISES.flatMap((q) => q.sources),
    ...EXAM_QUESTIONS.flatMap((q) => q.sources),
  ];
  const untracked: string[] = [];
  for (const f of SOURCE_FILE_LIST) {
    const n = allRefs.filter((r) => r.file === f.id).length;
    if (n === 0) untracked.push(`${f.fileName} is never cited`);
    fileRows.push(`| ${f.fileName} | ${f.inScope.map((r) => `${f.unitLabel}s ${r.from}–${r.to}`).join(", ")} | ${n} |`);
  }
  record("C10-sources-tracked", "All supplied source files are registered and used", untracked);
  return { conceptTable: rows.join("\n"), fileTable: fileRows.join("\n") };
}

// ------------------------------------------------------------------ main
async function main() {
  loadTranscripts();
  console.log("Python Mastery Lab — curriculum verification\n");
  // concept records
  const cf: string[] = [];
  const cm: string[] = [];
  for (const c of CONCEPTS) {
    claimId(c.id, "concept", cf);
    checkRefs(c.sources, `concept ${c.id}`, cf, cm);
    for (const p of c.prerequisites) if (!CONCEPT_MAP[p]) cf.push(`concept ${c.id}: unknown prerequisite ${p}`);
  }
  record("C0-concepts", `Concept records: citations exist and are in scope (${CONCEPTS.length})`, cf, cm);
  const t4Excluded = Object.entries(SOURCE_FILES.topic4.inScope).length === 1 && SOURCE_FILES.topic4.inScope[0].to === 18;
  record("C0-topic4-boundary", "Topic 4 scope ends at slide 18 (slide 19 = “Infinite loop” section title)", t4Excluded ? [] : ["topic4 scope is not 1–18"]);

  if (want("lessons")) await verifyLessons();
  if (want("mcq")) await verifyMcqs();
  if (want("exercises")) await verifyExercises();
  if (want("exams")) await verifyExams();
  const { conceptTable, fileTable } = !ONLY ? coverage() : { conceptTable: "", fileTable: "" };
  await py.close();

  const pass = checks.filter((c) => c.status === "pass").length;
  const fail = checks.filter((c) => c.status === "fail").length;
  const manual = checks.filter((c) => c.status === "manual").length;
  console.log(`\n${pass} passed, ${fail} failed, ${manual} need manual review`);

  if (!ONLY) {
    const outDir = join(ROOT, "docs/audit");
    mkdirSync(outDir, { recursive: true });
    const section = (s: Status, title: string) => {
      const list = checks.filter((c) => c.status === s);
      return [`## ${title} (${list.length})`, "", ...list.map((c) => [`### ${c.id} — ${c.title}`, "", ...c.details.map((d) => `- ${d.replace(/\n\s*/g, " ")}`), ""].join("\n"))].join("\n");
    };
    const report = [
      "# Curriculum Audit Report",
      "",
      `Generated by \`npm run verify:content\` on ${new Date().toISOString().slice(0, 10)}. Python checks ran in Pyodide ${py.version || "(skipped)"} using the app's own execution harness.`,
      "",
      `**Summary:** ${pass} passed · ${fail} failed · ${manual} require manual review`,
      "",
      "Automated checks can prove structural facts (references exist and are in scope, answer keys are valid, code outputs and errors are real). ",
      "Whether a cited slide *semantically* supports an item cannot be proven by a script: those items are listed in `manual-review.md` together with the cited source text for human review.",
      "",
      section("fail", "Failed checks"),
      section("manual", "Checks requiring manual review"),
      section("pass", "Passed checks"),
      "## Coverage matrix",
      "",
      conceptTable,
      "",
      "## Source files",
      "",
      fileTable,
      "",
    ].join("\n");
    writeFileSync(join(outDir, "curriculum-audit.md"), report);
    writeFileSync(
      join(outDir, "manual-review.md"),
      ["# Manual review packet", "", "Each item with the source text it cites (from the slide transcriptions in docs/curriculum).", "", ...reviewPacket].join("\n\n"),
    );
    console.log(`Reports written to docs/audit/`);
  }
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(2);
});
