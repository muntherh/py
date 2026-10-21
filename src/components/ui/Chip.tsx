import clsx from "clsx";
import type { ReactNode } from "react";
import type { Difficulty } from "../../data/types";

type Tone = "neutral" | "primary" | "accent" | "success" | "warning" | "danger";

const tones: Record<Tone, string> = {
  neutral: "border-line bg-surface-2 text-muted",
  primary: "border-transparent bg-primary-soft text-primary-text",
  accent: "border-transparent bg-accent-soft text-accent-text",
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

export function OriginChip({ origin }: { origin: "source" | "adapted" | "original" }) {
  const map = {
    source: { t: "From course material", tone: "accent" as Tone, d: "Taken from the supplied course material (lightly cleaned up)." },
    adapted: { t: "Adapted", tone: "primary" as Tone, d: "A variation of an example or exercise in the course material." },
    original: { t: "New practice item", tone: "neutral" as Tone, d: "Written for this platform to test a concept the course material teaches — not a university question." },
  }[origin];
  return (
    <Chip tone={map.tone} title={map.d}>
      {map.t}
    </Chip>
  );
}
