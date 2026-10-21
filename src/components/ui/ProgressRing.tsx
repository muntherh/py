import type { ReactNode } from "react";

/** Circular meter. `color` is any CSS colour (use a token var). */
export function ProgressRing({
  value,
  max = 100,
  size = 56,
  stroke = 6,
  color = "var(--primary)",
  label,
  children,
}: {
  value: number;
  max?: number;
  size?: number;
  stroke?: number;
  color?: string;
  label: string;
  children?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = max > 0 ? Math.max(0, Math.min(1, value / max)) : 0;
  return (
    <div className="relative grid shrink-0 place-items-center" style={{ width: size, height: size }} role="img" aria-label={`${label}: ${Math.round(pct * 100)}%`}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--surface-3)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ transition: "stroke-dashoffset .6s ease" }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-xs font-semibold text-ink tabular-nums">{children}</span>
    </div>
  );
}
