// Pure grading logic shared by the app and scripts/verify-curriculum.ts.

import type { CodeRequirement, CodingQuestion, OutputCheck } from "../data/types";
import type { PythonOutcome, TranscriptEvent } from "../runtime/protocol";

export interface ExecResult extends PythonOutcome {
  stdout: string;
  transcript: TranscriptEvent[];
  labNotice?: string | null;
}

export type Runner = (code: string, inputs: string[]) => Promise<ExecResult>;

export type FailureCategory =
  | "pass"
  | "syntax_error"
  | "runtime_error"
  | "timeout"
  | "no_output"
  | "wrong_output"
  | "missing_requirement";

export interface TestResult {
  testId: string;
  description: string;
  hidden: boolean;
  passed: boolean;
  category: FailureCategory;
  failedChecks: string[];
  /** Terminal view of the run (prompts + typed input + output). Not shown for hidden tests. */
  terminal: string;
  errorType: string | null;
  error: string | null;
}

export interface RequirementResult {
  message: string;
  passed: boolean;
}

export interface CodingGrade {
  questionId: string;
  tests: TestResult[];
  requirements: RequirementResult[];
  /** 0..1 */
  fraction: number;
  passedAll: boolean;
  /** Most important problem, for the summary line. */
  headline: FailureCategory;
  syntaxError: string | null;
}

/** Collapse whitespace so spacing differences don't matter. */
export function normalizeWs(s: string): string {
  return s.replace(/[\t  ]+/g, " ").replace(/\s*\n\s*/g, "\n").trim();
}

const NUMBER_RE = /-?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?/g;

export function extractNumbers(s: string): number[] {
  return (s.match(NUMBER_RE) ?? []).map(Number).filter((n) => Number.isFinite(n));
}

export function renderTerminal(transcript: TranscriptEvent[]): string {
  let out = "";
  for (const [kind, text] of transcript) {
    if (kind === "input") out += `${text}\n`;
    else if (kind === "result") out += `${text}\n`;
    else out += text;
  }
  return out;
}

function checkLabel(c: OutputCheck): string {
  if (c.label) return c.label;
  switch (c.type) {
    case "contains":
      return `Output should contain “${c.text}”`;
    case "notContains":
      return `Output should not contain “${c.text}”`;
    case "number":
      return `Output should include the value ${c.value}`;
    case "notNumber":
      return `Output should not include the value ${c.value}`;
    case "regex":
      return `Output should match the required format`;
    case "order":
      return `Output should show, in order: ${c.texts.map((t) => `“${t}”`).join(" → ")}`;
    case "minInputs":
      return `Program should read at least ${c.count} value(s) with input()`;
  }
}

export function evaluateCheck(c: OutputCheck, stdout: string, transcript: TranscriptEvent[]): boolean {
  const norm = normalizeWs(stdout).replace(/\n/g, " ");
  switch (c.type) {
    case "contains": {
      const t = normalizeWs(c.text).replace(/\n/g, " ");
      return c.caseSensitive ? norm.includes(t) : norm.toLowerCase().includes(t.toLowerCase());
    }
    case "notContains": {
      const t = normalizeWs(c.text).replace(/\n/g, " ");
      return c.caseSensitive ? !norm.includes(t) : !norm.toLowerCase().includes(t.toLowerCase());
    }
    case "number": {
      const tol = c.tolerance ?? 0.01;
      return extractNumbers(stdout).some((n) => Math.abs(n - c.value) <= tol);
    }
    case "notNumber": {
      const tol = c.tolerance ?? 0.01;
      return !extractNumbers(stdout).some((n) => Math.abs(n - c.value) <= tol);
    }
    case "regex":
      return new RegExp(c.pattern, c.flags ?? "").test(stdout);
    case "order": {
      const hay = c.caseSensitive ? norm : norm.toLowerCase();
      let pos = 0;
      for (const raw of c.texts) {
        const t = normalizeWs(c.caseSensitive ? raw : raw.toLowerCase());
        const idx = hay.indexOf(t, pos);
        if (idx < 0) return false;
        pos = idx + t.length;
      }
      return true;
    }
    case "minInputs":
      return transcript.filter(([k]) => k === "prompt").length >= c.count;
  }
}

/** Remove # comments (outside string literals) so requirements look at real code. */
export function stripComments(code: string): string {
  const out: string[] = [];
  for (const line of code.split("\n")) {
    let quote: string | null = null;
    let cut = line.length;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (quote) {
        if (ch === "\\") i++;
        else if (ch === quote) quote = null;
      } else if (ch === "'" || ch === '"') quote = ch;
      else if (ch === "#") {
        cut = i;
        break;
      }
    }
    out.push(line.slice(0, cut));
  }
  return out.join("\n");
}

export function checkRequirement(req: CodeRequirement, code: string): boolean {
  const found = new RegExp(req.pattern, req.flags ?? "m").test(stripComments(code));
  return req.forbid ? !found : found;
}

function friendlyRuntime(errorType: string | null): string | null {
  if (errorType === "EOFError")
    return "Your program asked for more input than this test provides — check how many times you call input().";
  return null;
}

/** Run every test case of a coding question and grade the behaviour. */
export async function gradeCoding(
  q: Pick<CodingQuestion, "id" | "tests" | "requirements">,
  code: string,
  run: Runner,
): Promise<CodingGrade> {
  const tests: TestResult[] = [];
  let syntaxError: string | null = null;
  for (const t of q.tests) {
    if (syntaxError) {
      tests.push({
        testId: t.id,
        description: t.description,
        hidden: t.hidden,
        passed: false,
        category: "syntax_error",
        failedChecks: ["The program has a syntax error, so it could not run."],
        terminal: "",
        errorType: "SyntaxError",
        error: syntaxError,
      });
      continue;
    }
    const r = await run(code, t.inputs);
    const terminal = renderTerminal(r.transcript);
    if (r.status === "syntax_error") {
      syntaxError = r.error;
      tests.push({
        testId: t.id,
        description: t.description,
        hidden: t.hidden,
        passed: false,
        category: "syntax_error",
        failedChecks: ["The program has a syntax error, so it could not run."],
        terminal,
        errorType: r.errorType,
        error: r.error,
      });
      continue;
    }
    if (r.status === "runtime_error" || r.status === "exit" || r.status === "worker_error") {
      const hint = friendlyRuntime(r.errorType);
      tests.push({
        testId: t.id,
        description: t.description,
        hidden: t.hidden,
        passed: false,
        category: "runtime_error",
        failedChecks: [hint ?? `The program stopped with ${r.errorType ?? "an error"}.`],
        terminal,
        errorType: r.errorType,
        error: r.error ?? r.labNotice ?? null,
      });
      continue;
    }
    if (r.status === "timeout" || r.status === "output_limit" || r.status === "stopped") {
      tests.push({
        testId: t.id,
        description: t.description,
        hidden: t.hidden,
        passed: false,
        category: "timeout",
        failedChecks: [r.labNotice ?? "The program did not finish in time."],
        terminal,
        errorType: null,
        error: r.labNotice ?? null,
      });
      continue;
    }
    const failed = t.checks.filter((c) => !evaluateCheck(c, r.stdout, r.transcript)).map(checkLabel);
    const empty = r.stdout.trim() === "";
    tests.push({
      testId: t.id,
      description: t.description,
      hidden: t.hidden,
      passed: failed.length === 0,
      category: failed.length === 0 ? "pass" : empty ? "no_output" : "wrong_output",
      failedChecks: failed,
      terminal,
      errorType: null,
      error: null,
    });
  }
  const requirements = (q.requirements ?? []).map((req) => ({
    message: req.message,
    passed: checkRequirement(req, code),
  }));
  const units = tests.length + requirements.length;
  const passedUnits = tests.filter((t) => t.passed).length + requirements.filter((r) => r.passed).length;
  const fraction = units === 0 ? 0 : passedUnits / units;
  const order: FailureCategory[] = [
    "syntax_error",
    "runtime_error",
    "timeout",
    "no_output",
    "wrong_output",
    "missing_requirement",
  ];
  let headline: FailureCategory = "pass";
  for (const cat of order) {
    if (cat === "missing_requirement" ? requirements.some((r) => !r.passed) : tests.some((t) => t.category === cat)) {
      headline = cat;
      break;
    }
  }
  return {
    questionId: q.id,
    tests,
    requirements,
    fraction,
    passedAll: passedUnits === units && units > 0,
    headline,
    syntaxError,
  };
}

/** Compare a typed output prediction with the real output (spacing-insensitive, case-sensitive). */
export function tracingMatches(studentAnswer: string, expected: string): boolean {
  const norm = (s: string) =>
    s
      .replace(/\r/g, "")
      .split("\n")
      .map((l) => l.replace(/[\t ]+/g, " ").trim())
      .join("\n")
      .replace(/^\n+|\n+$/g, "");
  return norm(studentAnswer) === norm(expected);
}

export const CATEGORY_TEXT: Record<FailureCategory, string> = {
  pass: "Passed",
  syntax_error: "Syntax error",
  runtime_error: "Runtime error",
  timeout: "Did not finish (time/output limit)",
  no_output: "No output",
  wrong_output: "Incorrect output",
  missing_requirement: "Missing requirement",
};
