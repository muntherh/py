import { useState } from "react";
import { Table2, BarChart3 } from "lucide-react";

export interface BarDatum {
  label: string;
  value: number | null;
  /** Text shown in the tooltip (defaults to value). */
  detail?: string;
}

/**
 * Single-series horizontal bar chart (0–max scale): ≤24px bars, 4px rounded data
 * end, value at the tip in text colour, per-bar hover tooltip, and a table view.
 */
export function BarChart({ title, data, max = 100, unit = "%", emptyLabel = "No data yet" }: { title: string; data: BarDatum[]; max?: number; unit?: string; emptyLabel?: string }) {
  const [asTable, setAsTable] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  return (
    <figure className="space-y-3" aria-label={title}>
      <div className="flex items-center justify-between gap-2">
        <figcaption className="text-sm font-semibold text-ink">{title}</figcaption>
        <button className="btn-ghost btn-sm" onClick={() => setAsTable(!asTable)} aria-pressed={asTable}>
          {asTable ? <BarChart3 size={14} /> : <Table2 size={14} />} {asTable ? "Chart view" : "Table view"}
        </button>
      </div>
      {asTable ? (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line text-left text-xs text-subtle">
              <th className="py-1.5 font-medium">Item</th>
              <th className="py-1.5 text-right font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label} className="border-b border-line/60">
                <td className="py-1.5 text-muted">{d.label}</td>
                <td className="py-1.5 text-right tabular-nums">{d.value === null ? emptyLabel : (d.detail ?? `${d.value}${unit}`)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="relative">
          {/* recessive gridlines at 0 / 50 / 100 */}
          <div className="pointer-events-none absolute inset-y-0 right-14 left-28 sm:left-36" aria-hidden>
            {[0, 50, 100].map((g) => (
              <div key={g} className="absolute inset-y-0 w-px bg-line/70" style={{ left: `${g}%` }} />
            ))}
          </div>
          <ul className="relative space-y-2">
            {data.map((d, i) => {
              const pct = d.value === null ? 0 : Math.max(0, Math.min(100, (d.value / max) * 100));
              return (
                <li key={d.label} className="flex items-center gap-2" onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                  <span className="w-26 shrink-0 truncate text-xs text-muted sm:w-34" title={d.label}>
                    {d.label}
                  </span>
                  <div className="relative h-6 flex-1" tabIndex={0} onFocus={() => setHover(i)} onBlur={() => setHover(null)} aria-label={`${d.label}: ${d.value === null ? emptyLabel : (d.detail ?? `${d.value}${unit}`)}`}>
                    {d.value !== null && (
                      <div className="absolute inset-y-0.5 left-0 rounded-r-[4px] bg-primary transition-[width] duration-500" style={{ width: `max(${pct}%, 2px)` }} />
                    )}
                    {hover === i && (
                      <div role="tooltip" className="absolute -top-9 z-10 rounded-lg border border-line bg-surface-3 px-2 py-1 text-xs whitespace-nowrap text-ink shadow-card" style={{ left: `min(${pct}%, 70%)` }}>
                        {d.label}: {d.value === null ? emptyLabel : (d.detail ?? `${d.value}${unit}`)}
                      </div>
                    )}
                  </div>
                  <span className="w-12 shrink-0 text-right text-xs font-medium tabular-nums text-ink">{d.value === null ? "—" : `${Math.round(d.value)}${unit}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </figure>
  );
}
