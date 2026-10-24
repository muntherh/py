// Deterministic answer validation for every question kind. Pure functions.
import { diagnoseCaesar, diagnoseRail, diagnoseRoute, diagnoseVigenere, type Diagnosis } from "../crypto/ciphers";
import type { AnswerValue, CryptoSpec, Grade, KeyIdea, Question } from "../data/types";

/** Lower-case, unify quotes/dashes, drop punctuation, collapse spaces. */
export function norm(s: string): string {
  return s
    .toLowerCase()
    .replace(/[‘’`]/g, "'")
    .replace(/[–—−]/g, "-")
    .replace(/[^a-z0-9؀-ۿ+\-=/ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function ideaHit(text: string, idea: KeyIdea): boolean {
  const t = ` ${norm(text)} `;
  return idea.any.some((k) => {
    // A trailing * makes the keyword a stem ("modif*" matches "modified", "modification").
    const stem = k.endsWith("*");
    const n = norm(stem ? k.slice(0, -1) : k);
    // Whole-word match, so "ids" does not match "considers".
    const re = new RegExp(`(^|[^a-z0-9])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}${stem ? "" : "([^a-z0-9]|$)"}`);
    return re.test(t);
  });
}

export function diagnoseCrypto(spec: CryptoSpec, answer: string): Diagnosis {
  switch (spec.cipher) {
    case "caesar":
      return diagnoseCaesar(spec.text, spec.key, spec.mode, answer);
    case "vigenere":
      return diagnoseVigenere(spec.text, spec.key, spec.mode, answer);
    case "rail":
      return diagnoseRail(spec.text, spec.depth, spec.mode, answer);
    case "route":
      return diagnoseRoute(spec.text, spec.rows, spec.cols, spec.fill, spec.route, spec.mode, answer);
  }
}

export function isAnswered(q: Question, a: AnswerValue | undefined): boolean {
  if (!a || a.kind !== q.kind) return false;
  switch (a.kind) {
    case "mcq":
      return a.choice >= 0;
    case "tf":
      return typeof a.value === "boolean";
    case "fill":
      return a.values.some((v) => v.trim() !== "");
    case "match":
      return Object.values(a.map).some(Boolean);
    case "order":
      return a.items.length > 0;
    case "short":
    case "crypto":
      return a.text.trim() !== "";
  }
}

export function grade(q: Question, a: AnswerValue | undefined): Grade {
  if (!isAnswered(q, a)) return { fraction: 0, correct: false, feedback: ["Not answered."] };
  switch (q.kind) {
    case "mcq": {
      const ok = a!.kind === "mcq" && a!.choice === q.answer;
      return { fraction: ok ? 1 : 0, correct: ok, feedback: ok ? [] : [`Correct answer: ${q.options[q.answer]}`] };
    }
    case "tf": {
      const ok = a!.kind === "tf" && a!.value === q.answer;
      return { fraction: ok ? 1 : 0, correct: ok, feedback: ok ? [] : [`The statement is ${q.answer ? "True" : "False"}.`] };
    }
    case "fill": {
      const vals = a!.kind === "fill" ? a!.values : [];
      const feedback: string[] = [];
      let hit = 0;
      q.blanks.forEach((accepted, i) => {
        const v = norm(vals[i] ?? "");
        if (accepted.some((x) => norm(x) === v)) hit++;
        else feedback.push(`Blank ${i + 1}: expected “${accepted[0]}”${vals[i]?.trim() ? `, you wrote “${vals[i].trim()}”` : ""}.`);
      });
      return { fraction: hit / q.blanks.length, correct: hit === q.blanks.length, feedback };
    }
    case "match": {
      const map = a!.kind === "match" ? a!.map : {};
      const feedback: string[] = [];
      let hit = 0;
      q.pairs.forEach(([l, r], i) => {
        if (map[i] === r) hit++;
        else feedback.push(`${l} → ${r}`);
      });
      return { fraction: hit / q.pairs.length, correct: hit === q.pairs.length, feedback };
    }
    case "order": {
      const items = a!.kind === "order" ? a!.items : [];
      let hit = 0;
      q.items.forEach((it, i) => {
        if (items[i] === it) hit++;
      });
      const ok = hit === q.items.length;
      return { fraction: hit / q.items.length, correct: ok, feedback: ok ? [] : [`Correct order: ${q.items.map((x, i) => `${i + 1}. ${x}`).join("  ")}`] };
    }
    case "short": {
      const text = a!.kind === "short" ? a!.text : "";
      const missing = q.ideas.filter((idea) => !ideaHit(text, idea));
      const hit = q.ideas.length - missing.length;
      return {
        fraction: hit / q.ideas.length,
        correct: missing.length === 0,
        feedback: missing.map((m) => `Missing idea: ${m.label}`),
      };
    }
    case "crypto": {
      const text = a!.kind === "crypto" ? a!.text : "";
      const d = diagnoseCrypto(q.spec, text);
      return {
        fraction: d.correct ? 1 : d.fraction,
        correct: d.correct,
        feedback: d.correct ? [] : [d.summary, ...d.issues.slice(0, 4).map((i) => `Position ${i.index + 1}: ${i.reason}`)],
      };
    }
  }
}

/** Marks earned in an exam: half-mark granularity, rounded down so partial credit is never generous. */
export function marksFor(g: Grade, max: number): number {
  if (g.correct) return max;
  return Math.floor(g.fraction * max * 2) / 2;
}
