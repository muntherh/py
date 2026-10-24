import { useMemo, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, Eye, EyeOff, Lightbulb, RotateCcw } from "lucide-react";
import { clean, diagnoseRail, railDecrypt, railEncrypt, type Mode } from "../../crypto/ciphers";
import { useProgress } from "../../store/progressStore";
import { DiagnosisView } from "./DiagnosisView";

const RAIL_COLORS = ["var(--u1)", "var(--u3)", "var(--u4)", "var(--u5)", "var(--u2)", "var(--u6)"];

/** The zig-zag grid. `upto` limits how many letters are shown (for step-through). */
export function RailGrid({ grid, pattern, upto, placeholders, cell = 34 }: { grid: (string | null)[][]; pattern: number[]; upto: number; placeholders?: boolean; cell?: number }) {
  const depth = grid.length;
  const len = pattern.length;
  const pts = pattern.slice(0, upto).map((r, i) => `${i * cell + cell / 2},${r * cell + cell / 2}`);
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-grid p-2">
      <div className="relative" style={{ width: len * cell, height: depth * cell }}>
        <svg className="pointer-events-none absolute inset-0" width={len * cell} height={depth * cell} aria-hidden>
          {Array.from({ length: depth }, (_, r) => (
            <line key={r} x1={0} x2={len * cell} y1={r * cell + cell / 2} y2={r * cell + cell / 2} stroke="var(--border)" strokeDasharray="3 4" />
          ))}
          {upto > 1 && <polyline points={pts.join(" ")} fill="none" stroke="var(--electric)" strokeOpacity={0.45} strokeWidth={2} />}
        </svg>
        {pattern.map((r, i) => {
          const shown = i < upto;
          const ch = grid[r][i];
          return (
            <div
              key={i}
              className={clsx("absolute grid place-items-center rounded-md font-mono text-sm font-bold transition-all", shown ? "text-white shadow" : placeholders ? "border border-dashed border-line-strong text-subtle" : "opacity-0")}
              style={{ left: i * cell + 3, top: r * cell + 3, width: cell - 6, height: cell - 6, background: shown ? RAIL_COLORS[r % RAIL_COLORS.length] : undefined }}
              aria-label={shown ? `Column ${i + 1}, rail ${r + 1}: ${ch}` : undefined}
            >
              {shown ? ch : placeholders ? "•" : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function RailWorksheet({ text, depth, mode }: { text: string; depth: number; mode: Mode }) {
  const msg = clean(text).slice(0, 30);
  const d = Math.max(2, Math.min(6, depth));
  const trace = useMemo(() => (mode === "encrypt" ? railEncrypt(msg, d) : railDecrypt(msg, d)), [msg, d, mode]);
  const recordCrypto = useProgress((s) => s.recordCrypto);

  const sig = `${msg}|${d}|${mode}`;
  const blank = { sig, step: 0, rails: new Array<string>(d).fill(""), counts: new Array<string>(d).fill(""), checked: false, hint: 0, reveal: false, final: "", finalChecked: false };
  const [state, setState] = useState(blank);
  const st = state.sig === sig ? state : blank;
  const update = (patch: Partial<typeof st>) => setState({ ...st, ...patch });

  const shownUpto = st.reveal ? msg.length : st.step;
  const railOk = (r: number) => clean(st.rails[r] ?? "") === trace.rails[r];
  const countOk = (r: number) => st.counts[r]?.trim() === String(trace.counts[r]);
  const diag = st.finalChecked ? diagnoseRail(msg, d, mode, st.final) : null;

  const hints =
    mode === "encrypt"
      ? [
          `Follow the rail numbers: ${trace.pattern.map((r) => r + 1).join(" ")} — down to rail ${d}, then back up to rail 1, and so on.`,
          "Use the step button to watch the first letters being written diagonally.",
          `Rail 1 reads “${trace.rails[0]}”. Now read the other rails left to right.`,
        ]
      : [
          `Draw the zig-zag with placeholders first: the rail sequence is ${trace.pattern.map((r) => r + 1).join(" ")}. Count the placeholders on each rail.`,
          `The counts are ${trace.counts.join(", ")} — so cut the ciphertext into pieces of those lengths, top rail first.`,
          `The rails are: ${trace.rails.join(" | ")}. Now read along the zig-zag.`,
        ];

  return (
    <div className="space-y-5">
      <div className="card space-y-3 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="label">{mode === "encrypt" ? "Write the message in a zig-zag" : "Placeholders → fill rails → read the zig-zag"}</p>
          <div className="flex flex-wrap gap-1.5">
            <button className="btn-secondary btn-sm" onClick={() => update({ step: Math.max(0, st.step - 1) })} disabled={st.step === 0 || st.reveal}>
              ◀ Step back
            </button>
            <button className="btn-secondary btn-sm" onClick={() => update({ step: Math.min(msg.length, st.step + 1) })} disabled={st.step >= msg.length || st.reveal}>
              Step ▶
            </button>
            <button className="btn-ghost btn-sm" onClick={() => update({ step: msg.length })} disabled={st.reveal}>
              Show all
            </button>
          </div>
        </div>
        <RailGrid grid={trace.grid} pattern={trace.pattern} upto={shownUpto} placeholders />
        <p className="text-xs text-subtle" aria-live="polite">
          {shownUpto === 0
            ? mode === "encrypt"
              ? "Press Step to place letters one at a time."
              : "The dots are the placeholders: one per letter, in the zig-zag shape."
            : shownUpto < msg.length
              ? mode === "encrypt"
                ? `Placed ${shownUpto} of ${msg.length}: “${msg[shownUpto - 1]}” goes on rail ${trace.pattern[shownUpto - 1] + 1}.`
                : `Read ${shownUpto} of ${msg.length} along the zig-zag: “${trace.output.slice(0, shownUpto)}”.`
              : mode === "encrypt"
                ? `All letters placed. Now read each rail left to right, top rail first.`
                : `Reading the zig-zag gives: ${trace.output}`}
        </p>
      </div>

      {mode === "decrypt" && (
        <div className="card space-y-3 p-4">
          <p className="label">Step 1 — how many letters on each rail?</p>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: d }, (_, r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                Rail {r + 1}
                <input
                  className={clsx("input w-16 text-center font-mono", st.checked && st.counts[r]?.trim() && (countOk(r) ? "border-success bg-success-soft" : "border-danger bg-danger-soft"))}
                  inputMode="numeric"
                  value={st.counts[r] ?? ""}
                  onChange={(e) => {
                    const c = [...st.counts];
                    c[r] = e.target.value;
                    update({ counts: c, checked: false });
                  }}
                />
              </label>
            ))}
          </div>
        </div>
      )}

      <div className="card space-y-3 p-4">
        <p className="label">{mode === "encrypt" ? "Read each rail" : "Step 2 — cut the ciphertext into rails"}</p>
        <div className="space-y-2">
          {Array.from({ length: d }, (_, r) => (
            <label key={r} className="flex flex-wrap items-center gap-2 text-sm">
              <span className="w-14 font-semibold" style={{ color: RAIL_COLORS[r % RAIL_COLORS.length] }}>
                Rail {r + 1}
              </span>
              <input
                className={clsx("input max-w-xs font-mono tracking-[0.2em] uppercase", st.checked && st.rails[r]?.trim() && (railOk(r) ? "border-success bg-success-soft" : "border-danger bg-danger-soft"))}
                value={st.reveal ? trace.rails[r] : (st.rails[r] ?? "")}
                readOnly={st.reveal}
                onChange={(e) => {
                  const rails = [...st.rails];
                  rails[r] = e.target.value;
                  update({ rails, checked: false });
                }}
                aria-label={`Letters on rail ${r + 1}`}
              />
              {st.checked && st.rails[r]?.trim() && !railOk(r) && <span className="text-xs text-danger-text">{clean(st.rails[r]).length !== trace.counts[r] ? `should have ${trace.counts[r]} letters` : "letters or order differ"}</span>}
            </label>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-primary" onClick={() => update({ checked: true })}>
          <CheckCircle2 size={16} /> Check my work
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
          <p>Rail sequence: <span className="font-mono">{trace.pattern.map((r) => r + 1).join(" ")}</span></p>
          <p>Letters per rail: {trace.counts.join(", ")}</p>
          <p>Rails: <span className="font-mono">{trace.rails.join(" | ")}</span></p>
          <p className="pt-1 text-base">
            {mode === "encrypt" ? "Ciphertext" : "Plaintext"}: <span className="font-mono font-bold tracking-[0.2em] text-primary-text">{trace.output}</span>
          </p>
        </div>
      )}

      <div className="card space-y-3 p-4">
        <label htmlFor="final-rail" className="label block">Final answer</label>
        <div className="flex flex-wrap gap-2">
          <input id="final-rail" className="input max-w-sm font-mono text-lg tracking-[0.2em] uppercase" value={st.final} onChange={(e) => update({ final: e.target.value, finalChecked: false })} autoComplete="off" placeholder={`${msg.length} letters`} />
          <button
            className="btn-primary"
            disabled={!st.final.trim()}
            onClick={() => {
              recordCrypto(diagnoseRail(msg, d, mode, st.final).correct, `Rail Fence ${mode} ${msg}`);
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
