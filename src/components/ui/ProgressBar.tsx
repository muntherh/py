import clsx from "clsx";

export function ProgressBar({
  value,
  max = 100,
  tone = "primary",
  label,
  className,
  color: explicit,
}: {
  value: number;
  max?: number;
  tone?: "primary" | "success" | "warning" | "danger" | "accent";
  label: string;
  className?: string;
  /** Any CSS colour; overrides `tone`. */
  color?: string;
}) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (value / max) * 100)) : 0;
  const color = { primary: "bg-primary", success: "bg-success", warning: "bg-warning", danger: "bg-danger", accent: "bg-accent" }[tone];
  return (
    <div
      className={clsx("h-2 w-full overflow-hidden rounded-full bg-surface-3", className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={Math.round(value)}
    >
      <div className={clsx("h-full rounded-full transition-[width] duration-500", !explicit && color)} style={{ width: `${pct}%`, background: explicit }} />
    </div>
  );
}
