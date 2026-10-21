import clsx from "clsx";

const src = (n: number) => `${import.meta.env.BASE_URL}brand/logo-${n}.png`;

/** The Python Mastery Lab mark (transparent PNG from the brand logo). */
export function Logo({ size = 40, className }: { size?: number; className?: string }) {
  const file = size <= 32 ? 64 : size <= 96 ? 192 : 512;
  return <img src={src(file)} width={size} height={size} alt="" aria-hidden className={clsx("shrink-0 select-none", className)} draggable={false} />;
}

export function Wordmark({ compact }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Logo size={compact ? 32 : 38} />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-bold tracking-tight text-ink">Python Mastery Lab</span>
        {!compact && <span className="block text-[11px] font-medium text-subtle">Introduction to Programming</span>}
      </span>
    </span>
  );
}
