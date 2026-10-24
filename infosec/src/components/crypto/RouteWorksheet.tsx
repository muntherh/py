import { useMemo, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, Eye, EyeOff, Lightbulb, RotateCcw } from "lucide-react";
import { clean, diagnoseRoute, FILL_LABELS, fillOrder, ROUTE_LABELS, routeDecrypt, routeEncrypt, type Cell, type Fill, type Mode, type RouteKind } from "../../crypto/ciphers";
import { useProgress } from "../../store/progressStore";
import { DiagnosisView } from "./DiagnosisView";

/** Grid with optional route numbers and an SVG path through the first `upto` route cells. */
export function RouteGrid({ grid, order, upto, showNumbers, padding, cellInputs }: { grid: string[][]; order: Cell[]; upto: number; showNumbers: boolean; padding?: Set<string>; cellInputs?: (r: number, c: number) => React.ReactNode }) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;
  const size = 46;
  const stepOf = new Map(order.map(([r, c], i) => [`${r},${c}`, i]));
  const pts = order.slice(0, upto).map(([r, c]) => `${c * size + size / 2},${r * size + size / 2}`);
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-grid p-3">
      <div className="relative mx-auto" style={{ width: cols * size, height: rows * size }}>
        {grid.map((row, r) =>
          row.map((ch, c) => {
            const step = stepOf.get(`${r},${c}`) ?? 0;
            const visited = step < upto;
            const pad = padding?.has(`${r},${c}`);
            return (
              <div
                key={`${r}-${c}`}
                className={clsx("absolute grid place-items-center border border-line-strong font-mono text-lg font-bold", visited ? "bg-primary-soft text-primary-text" : "bg-surface-2", pad && "italic text-warning-text")}
                style={{ left: c * size, top: r * size, width: size, height: size }}
              >
                {cellInputs ? cellInputs(r, c) : ch}
                {showNumbers && <span className="absolute top-0.5 right-1 font-sans text-[10px] font-semibold text-electric">{step + 1}</span>}
              </div>
            );
          }),
        )}
        <svg className="pointer-events-none absolute inset-0" width={cols * size} height={rows * size} aria-hidden>
          <defs>
            <marker id="route-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--electric)" />
            </marker>
          </defs>
          {upto > 1 && <polyline points={pts.join(" ")} fill="none" stroke="var(--electric)" strokeWidth={3} strokeOpacity={0.7} strokeLinejoin="round" markerEnd="url(#route-arrow)" />}
          {upto >= 1 && <circle cx={order[0][1] * size + size / 2} cy={order[0][0] * size + size / 2} r={5} fill="var(--electric)" />}
        </svg>
      </div>
    </div>
  );
}

export function RouteWorksheet({ text, rows, cols, fill, route, mode }: { text: string; rows: number; cols: number; fill: Fill; route: RouteKind; mode: Mode }) {
  const r = Math.max(2, Math.min(8, rows));
  const c = Math.max(2, Math.min(8, cols));
  const msg = clean(text).slice(0, r * c);
  const trace = useMemo(() => (mode === "encrypt" ? routeEncrypt(msg, r, c, fill, route) : routeDecrypt(msg, r, c, fill, route)), [msg, r, c, fill, route, mode]);
  const recordCrypto = useProgress((s) => s.recordCrypto);

  const sig = `${msg}|${r}|${c}|${fill}|${route}|${mode}`;
  const blank = { sig, step: 0, cells: {} as Record<string, string>, checked: false, hint: 0, reveal: false, final: "", finalChecked: false };
  const [state, setState] = useState(blank);
  const st = state.sig === sig ? state : blank;
  const update = (patch: Partial<typeof st>) => setState({ ...st, ...patch });

  const fillCells = fillOrder(r, c, fill);
  const padding = new Set<string>();
  if (mode === "encrypt") fillCells.slice(msg.length).forEach(([a, b]) => padding.add(`${a},${b}`));
  const diag = st.finalChecked ? diagnoseRoute(msg, r, c, fill, route, mode, st.final) : null;
  const upto = st.reveal ? r * c : st.step;
  const showNumbers = st.reveal || st.hint >= 2;

  // The student fills the grid first (encrypt: by writing the message; decrypt: by following the route).
  const cellRight = (a: number, b: number) => (st.cells[`${a},${b}`] ?? "").trim().toUpperCase() === trace.grid[a][b];
  let firstWrong: string | null = null;
  let filled = 0;
  let ok = 0;
  for (const [a, b] of mode === "encrypt" ? fillCells : trace.order) {
    const v = (st.cells[`${a},${b}`] ?? "").trim();
    if (!v) continue;
    filled++;
    if (cellRight(a, b)) ok++;
    else
      firstWrong ??=
        mode === "encrypt"
          ? `Row ${a + 1}, column ${b + 1} should be “${trace.grid[a][b]}”${padding.has(`${a},${b}`) ? " (padding X)" : ""} — ${fill === "rows" ? "write left to right, row by row" : "write top to bottom, column by column"}.`
          : `Row ${a + 1}, column ${b + 1} is step ${trace.order.findIndex(([x, y]) => x === a && y === b) + 1} of the route, so it holds ciphertext letter “${trace.grid[a][b]}”.`;
  }

  const hints = [
    mode === "encrypt"
      ? `${FILL_LABELS[fill]}: put the ${msg.length} letters into the ${c} × ${r} grid${r * c > msg.length ? `, then pad the last ${r * c - msg.length} cell(s) with X` : ""}.`
      : `Count the cells: ${r * c}. The ciphertext letters go into the grid in route order — the first letter at the route's start.`,
    "Route numbers are now shown in each cell's corner: read (or place) letters in that order.",
    mode === "encrypt" ? `The route starts: ${trace.output.slice(0, Math.ceil(trace.output.length / 3))}…` : `The grid's first row reads: ${trace.grid[0].join("")}.`,
  ];

  return (
    <div className="space-y-5">
      <div className="card space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-sm">
            <p className="label">Grid {c} columns × {r} rows</p>
            <p className="text-muted">{FILL_LABELS[fill]} · Route: {ROUTE_LABELS[route]}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button className="btn-secondary btn-sm" onClick={() => update({ step: Math.max(0, st.step - 1) })} disabled={st.step === 0 || st.reveal}>
              ◀ Step back
            </button>
            <button className="btn-secondary btn-sm" onClick={() => update({ step: Math.min(r * c, st.step + 1) })} disabled={st.step >= r * c || st.reveal}>
              Follow route ▶
            </button>
            <button className="btn-ghost btn-sm" onClick={() => update({ step: r * c })} disabled={st.reveal}>
              Whole route
            </button>
          </div>
        </div>
        <RouteGrid
          grid={trace.grid}
          order={trace.order}
          upto={upto}
          showNumbers={showNumbers}
          padding={padding}
          cellInputs={
            st.reveal
              ? undefined
              : (a, b) => (
                  <input
                    aria-label={`Row ${a + 1}, column ${b + 1}`}
                    maxLength={1}
                    className={clsx("h-full w-full bg-transparent text-center uppercase outline-none focus:bg-primary-soft", st.checked && (st.cells[`${a},${b}`] ?? "").trim() && (cellRight(a, b) ? "bg-success-soft" : "bg-danger-soft"))}
                    value={st.cells[`${a},${b}`] ?? ""}
                    onChange={(e) => update({ cells: { ...st.cells, [`${a},${b}`]: e.target.value }, checked: false })}
                  />
                )
          }
        />
        <p className="text-xs text-subtle" aria-live="polite">
          {mode === "encrypt" ? "Type the message into the grid first, then follow the route to read the ciphertext." : "Place the ciphertext letters along the route, then read the grid in writing order."}
          {upto > 0 && upto < r * c && ` Route step ${upto}: row ${trace.order[upto - 1][0] + 1}, column ${trace.order[upto - 1][1] + 1}.`}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-primary" onClick={() => update({ checked: true })}>
          <CheckCircle2 size={16} /> Check my grid
        </button>
        <button className="btn-secondary" onClick={() => update({ hint: Math.min(3, st.hint + 1) })} disabled={st.hint >= 3 || st.reveal}>
          <Lightbulb size={16} /> {st.hint === 0 ? "Hint" : `Next hint (${st.hint}/3)`}
        </button>
        <button className="btn-secondary" onClick={() => update({ reveal: !st.reveal })}>
          {st.reveal ? <EyeOff size={16} /> : <Eye size={16} />} {st.reveal ? "Hide solution" : "Show full solution"}
        </button>
        <button className="btn-ghost" onClick={() => setState({ ...blank })}>
          <RotateCcw size={15} /> Reset
        </button>
      </div>

      {st.checked && (
        <div className={clsx("rounded-2xl border p-4 text-sm", firstWrong ? "border-danger/40 bg-danger-soft" : "border-success/40 bg-success-soft")} role="status">
          <p className="font-semibold">{ok}/{filled} filled cells correct{filled < r * c ? ` · ${r * c - filled} still empty` : ""}</p>
          {firstWrong && <p className="mt-1">First mistake: {firstWrong}</p>}
        </div>
      )}

      {st.hint > 0 && !st.reveal && (
        <ol className="space-y-1.5 rounded-2xl border border-warning/40 bg-warning-soft p-4 text-sm" aria-live="polite">
          {hints.slice(0, st.hint).map((h, i) => (
            <li key={i} className="flex gap-2">
              <Lightbulb size={15} className="mt-0.5 shrink-0 text-warning" /> <span>Hint {i + 1}: {h}</span>
            </li>
          ))}
        </ol>
      )}

      {st.reveal && (
        <div className="space-y-1 rounded-2xl border border-primary/40 bg-primary-soft p-4 text-sm">
          <p className="label">Solution</p>
          <p>Route order: <span className="font-mono">{trace.order.map(([a, b]) => trace.grid[a][b]).join(" ")}</span></p>
          {trace.padding > 0 && <p>{trace.padding} padding X{trace.padding > 1 ? "'s" : ""} {mode === "decrypt" ? "at the end can be dropped" : "added to fill the grid"}.</p>}
          <p className="pt-1 text-base">
            {mode === "encrypt" ? "Ciphertext" : "Plaintext"}: <span className="font-mono font-bold tracking-[0.2em] text-primary-text">{trace.output}</span>
          </p>
        </div>
      )}

      <div className="card space-y-3 p-4">
        <label htmlFor="final-route" className="label block">Final answer</label>
        <div className="flex flex-wrap gap-2">
          <input id="final-route" className="input max-w-md font-mono text-lg tracking-[0.2em] uppercase" value={st.final} onChange={(e) => update({ final: e.target.value, finalChecked: false })} autoComplete="off" />
          <button
            className="btn-primary"
            disabled={!st.final.trim()}
            onClick={() => {
              recordCrypto(diagnoseRoute(msg, r, c, fill, route, mode, st.final).correct, `Route ${mode} ${msg}`);
              update({ finalChecked: true });
            }}
          >
            Validate
          </button>
        </div>
        {diag && <DiagnosisView diag={diag} />}
      </div>
    </div>
  );
}
