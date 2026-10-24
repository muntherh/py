import { useId } from "react";
import clsx from "clsx";

/** Shield + lock mark (inline SVG, theme-aware). */
export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  // Unique gradient id: the hidden sidebar copy must not shadow the visible header copy.
  const id = `lg-${useId().replace(/:/g, "")}`;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={clsx("shrink-0", className)} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0a1330" />
      <path d="M32 9 50 16v13c0 12.5-7.8 21.2-18 25-10.2-3.8-18-12.5-18-25V16z" fill="none" stroke={`url(#${id})`} strokeWidth="4" strokeLinejoin="round" />
      <rect x="24" y="29" width="16" height="12" rx="2.5" fill={`url(#${id})`} />
      <path d="M27 29v-4a5 5 0 0 1 10 0v4" fill="none" stroke="#60a5fa" strokeWidth="3" />
    </svg>
  );
}
