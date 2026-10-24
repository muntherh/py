import clsx from "clsx";
import type { ReactNode } from "react";
import { UNIT_BY_ID } from "../../data/course";
import type { Difficulty, QuestionKind, QuestionStyle, UnitId } from "../../data/types";
import { UNIT_COLOR } from "../../lib/unitStyle";

type Tone = "neutral" | "primary" | "success" | "warning" | "danger";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-surface-2 text-muted",
  primary: "border-transparent bg-primary-soft text-primary-text",
  success: "border-transparent bg-success-soft text-success-text",
  warning: "border-transparent bg-warning-soft text-warning-text",
  danger: "border-transparent bg-danger-soft text-danger-text",
};

export function Chip({ tone = "neutral", children, className, title }: { tone?: Tone; children: ReactNode; className?: string; title?: string }) {
  return (
    <span className={clsx("chip", tones[tone], className)} title={title}>
      {children}
    </span>
  );
}

export function DifficultyChip({ difficulty }: { difficulty: Difficulty }) {
  const tone: Tone = difficulty === "easy" ? "success" : difficulty === "medium" ? "warning" : "danger";
  return <Chip tone={tone}>{difficulty[0].toUpperCase() + difficulty.slice(1)}</Chip>;
}

export function UnitChip({ unitId }: { unitId: UnitId }) {
  const u = UNIT_BY_ID[unitId];
  return (
    <span className="chip border-transparent" style={{ background: `color-mix(in srgb, ${UNIT_COLOR[unitId]} 16%, transparent)`, color: UNIT_COLOR[unitId] }}>
      {u.short}
    </span>
  );
}

export const KIND_LABEL: Record<QuestionKind, string> = {
  mcq: "Multiple choice",
  tf: "True / False",
  fill: "Fill in the blanks",
  match: "Matching",
  order: "Ordering",
  short: "Short answer",
  crypto: "Cryptography",
};

export const STYLE_LABEL: Record<QuestionStyle, string> = {
  concept: "Concept",
  definition: "Definition",
  scenario: "Scenario",
  procedure: "Procedure",
  calculation: "Calculation",
  alphabet: "Alphabet table",
};

export function OriginChip({ origin }: { origin: "source" | "original" }) {
  return origin === "source" ? (
    <Chip tone="primary" title="This question appears in the slides or Lab Manual (lightly edited).">From course material</Chip>
  ) : (
    <Chip title="Written for this platform from facts in the cited source — not an official university question.">Practice item</Chip>
  );
}
