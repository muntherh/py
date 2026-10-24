import { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff, RotateCcw } from "lucide-react";
import { ALPHABET } from "../../crypto/ciphers";

/**
 * The Lab Manual's alphabet table (pg. 13): two rows of 13, letter above number.
 * Click a letter to highlight it. `highlight` marks letters used in a worked example.
 */
export function AlphabetTable({ highlight = [], compact }: { highlight?: number[]; compact?: boolean }) {
  const [hideNums, setHideNums] = useState(false);
  const [sel, setSel] = useState<number | null>(null);
  const rows = [ALPHABET.slice(0, 13).split(""), ALPHABET.slice(13).split("")];
  return (
    <div className="space-y-2">
      <div className="overflow-x-auto">
        <table className="mx-auto border-collapse font-mono" aria-label="Alphabet table: A equals 0 through Z equals 25">
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((ch, i) => {
                  const n = r * 13 + i;
                  const on = sel === n || highlight.includes(n);
                  return (
                    <td key={ch} className="p-0">
                      <button
                        type="button"
                        onClick={() => setSel(sel === n ? null : n)}
                        aria-pressed={sel === n}
                        className={clsx(
                          "flex flex-col items-center justify-center border border-line-strong transition-colors",
                          compact ? "h-11 w-7 sm:w-9" : "h-14 w-6 min-[400px]:w-7 sm:h-16 sm:w-11",
                          on ? "bg-primary-btn text-white" : "bg-surface-2 hover:bg-surface-3",
                        )}
                      >
                        <span className={clsx("font-bold", compact ? "text-sm" : "text-sm sm:text-lg")}>{ch}</span>
                        <span className="sr-only"> = </span>
                        <span className={clsx(compact ? "text-[10px]" : "text-[11px] sm:text-sm", on ? "text-white/90" : "text-electric", hideNums && !on && "invisible")}>{n}</span>
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!compact && (
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <button type="button" className="btn-secondary btn-sm" onClick={() => setHideNums(!hideNums)}>
            {hideNums ? <Eye size={14} /> : <EyeOff size={14} />} {hideNums ? "Show numbers" : "Hide numbers (self-test)"}
          </button>
          {sel !== null && (
            <span className="rounded-lg bg-primary-soft px-2.5 py-1 font-mono text-primary-text" aria-live="polite">
              {ALPHABET[sel]} = {sel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/** Practice building the table from memory: type every number (or letter) and get cell-by-cell feedback. */
export function AlphabetBuilder() {
  const [mode, setMode] = useState<"numbers" | "letters">("numbers");
  const [vals, setVals] = useState<string[]>(() => new Array(26).fill(""));
  const [checked, setChecked] = useState(false);
  const expected = (n: number) => (mode === "numbers" ? String(n) : ALPHABET[n]);
  const isRight = (n: number) => vals[n].trim().toUpperCase() === expected(n);
  const score = vals.filter((_, n) => isRight(n)).length;
  const firstWrong = vals.findIndex((_, n) => !isRight(n));
  const reset = (m = mode) => {
    setMode(m);
    setVals(new Array(26).fill(""));
    setChecked(false);
  };
  const rows = [0, 1].map((r) => Array.from({ length: 13 }, (_, i) => r * 13 + i));
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Builder mode">
        <button role="tab" aria-selected={mode === "numbers"} className={mode === "numbers" ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => reset("numbers")}>
          Letters given → write the numbers
        </button>
        <button role="tab" aria-selected={mode === "letters"} className={mode === "letters" ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => reset("letters")}>
          Numbers given → write the letters
        </button>
      </div>
      <div className="overflow-x-auto pb-1">
        <table className="mx-auto border-collapse font-mono">
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((n) => (
                  <td key={n} className="p-0">
                    <div className={clsx("flex h-16 w-6 min-[400px]:w-7 flex-col items-center justify-center border border-line-strong sm:w-11", checked && vals[n].trim() && (isRight(n) ? "bg-success-soft" : "bg-danger-soft"))}>
                      {mode === "numbers" ? <span className="font-bold sm:text-lg">{ALPHABET[n]}</span> : <span className="text-xs text-electric sm:text-sm">{n}</span>}
                      <input
                        aria-label={mode === "numbers" ? `Number for ${ALPHABET[n]}` : `Letter for ${n}`}
                        className="w-full bg-transparent text-center text-xs font-semibold outline-none focus:bg-primary-soft sm:text-sm"
                        maxLength={2}
                        inputMode={mode === "numbers" ? "numeric" : "text"}
                        value={vals[n]}
                        onChange={(e) => {
                          const next = [...vals];
                          next[n] = e.target.value;
                          setVals(next);
                          setChecked(false);
                        }}
                      />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-primary" onClick={() => setChecked(true)}>
          Check my table
        </button>
        <button className="btn-secondary" onClick={() => reset()}>
          <RotateCcw size={15} /> Clear
        </button>
        {checked && (
          <p className="text-sm" role="status">
            <strong>{score}/26</strong> correct.
            {firstWrong >= 0 ? ` First mistake: ${mode === "numbers" ? `${ALPHABET[firstWrong]} should be ${firstWrong}` : `${firstWrong} should be ${ALPHABET[firstWrong]}`}.` : " Perfect — you can build the table from memory."}
          </p>
        )}
      </div>
      <p className="text-xs text-subtle">Tip: row 1 is A–M = 0–12, row 2 is N–Z = 13–25. Check-points: E = 4, J = 9, N = 13, T = 19.</p>
    </div>
  );
}
