import { useMemo, useState } from "react";
import clsx from "clsx";
import { CheckCircle2, Eye, EyeOff, Lightbulb, RotateCcw } from "lucide-react";
import { caesar, clean, diagnoseCaesar, diagnoseVigenere, vigenere, type Mode } from "../../crypto/ciphers";
import { useProgress } from "../../store/progressStore";
import { AlphabetTable } from "./AlphabetTable";
import { DiagnosisView } from "./DiagnosisView";

type Cipher = "caesar" | "vigenere";

interface Column {
  key: string;
  label: string;
  /** Expected value for a row, as text. */
  expected: (i: number) => string;
  /** Why the expected value is what it is. */
  why: (i: number) => string;
  given?: boolean;
}

function wrapNote(raw: number, result: number): string {
  if (raw >= 26) return `${raw} is 26 or more → ${raw} − 26 = ${result}`;
  if (raw < 0) return `${raw} is negative → ${raw} + 26 = ${result}`;
  return `${raw} is already between 0 and 25`;
}

/**
 * Paper-style worksheet for Caesar and Vigenère. The student fills every cell;
 * "Check" marks each cell and explains the first mistake. Hints come before the full solution.
 */
export function SubstitutionWorksheet({ cipher, text, keyValue, mode }: { cipher: Cipher; text: string; keyValue: string; mode: Mode }) {
  const msg = clean(text).slice(0, 24);
  const caesarKey = Math.max(1, Math.min(25, parseInt(keyValue, 10) || 3));
  const vigKey = clean(keyValue) || "KEY";
  const recordCrypto = useProgress((s) => s.recordCrypto);

  const cTrace = useMemo(() => caesar(msg, caesarKey, mode), [msg, caesarKey, mode]);
  const vTrace = useMemo(() => vigenere(msg, vigKey, mode), [msg, vigKey, mode]);
  const op = mode === "encrypt" ? "+" : "−";
  const inName = mode === "encrypt" ? "P" : "C";
  const outName = mode === "encrypt" ? "Ciphertext" : "Plaintext";

  const columns: Column[] =
    cipher === "caesar"
      ? [
          { key: "letter", label: mode === "encrypt" ? "Plaintext letter" : "Ciphertext letter", expected: (i) => cTrace.rows[i].letter, why: () => "", given: true },
          { key: "x", label: mode === "encrypt" ? "x (value)" : "c (value)", expected: (i) => String(cTrace.rows[i].x), why: (i) => `${cTrace.rows[i].letter} = ${cTrace.rows[i].x} in the alphabet table.` },
          { key: "raw", label: mode === "encrypt" ? `x + ${caesarKey}` : `c − ${caesarKey}`, expected: (i) => String(cTrace.rows[i].raw), why: (i) => `${cTrace.rows[i].x} ${op} ${caesarKey} = ${cTrace.rows[i].raw}.` },
          { key: "mod", label: "mod 26", expected: (i) => String(cTrace.rows[i].result), why: (i) => `${wrapNote(cTrace.rows[i].raw, cTrace.rows[i].result)}.` },
          { key: "out", label: `${outName} letter`, expected: (i) => cTrace.rows[i].out, why: (i) => `${cTrace.rows[i].result} = ${cTrace.rows[i].out} in the alphabet table.` },
        ]
      : [
          { key: "letter", label: `${inName} letter`, expected: (i) => vTrace.rows[i].letter, why: () => "", given: true },
          { key: "k", label: "Key letter", expected: (i) => vTrace.rows[i].keyLetter, why: () => `Repeat the key ${vigKey} under the message: ${vTrace.repeatedKey}.` },
          { key: "v", label: `${inName} value`, expected: (i) => String(vTrace.rows[i].v), why: (i) => `${vTrace.rows[i].letter} = ${vTrace.rows[i].v}.` },
          { key: "kv", label: "K value", expected: (i) => String(vTrace.rows[i].k), why: (i) => `${vTrace.rows[i].keyLetter} = ${vTrace.rows[i].k}.` },
          { key: "raw", label: mode === "encrypt" ? "P + K" : "C − K", expected: (i) => String(vTrace.rows[i].raw), why: (i) => `${vTrace.rows[i].v} ${op} ${vTrace.rows[i].k} = ${vTrace.rows[i].raw}.` },
          { key: "mod", label: "mod 26", expected: (i) => String(vTrace.rows[i].result), why: (i) => `${wrapNote(vTrace.rows[i].raw, vTrace.rows[i].result)}.` },
          { key: "out", label: `${outName} letter`, expected: (i) => vTrace.rows[i].out, why: (i) => `${vTrace.rows[i].result} = ${vTrace.rows[i].out}.` },
        ];

  const n = msg.length;
  const sig = `${cipher}|${msg}|${caesarKey}|${vigKey}|${mode}`;
  const [state, setState] = useState<{ sig: string; cells: Record<string, string>; checked: boolean; hint: number; reveal: boolean; final: string; finalChecked: boolean }>({
    sig,
    cells: {},
    checked: false,
    hint: 0,
    reveal: false,
    final: "",
    finalChecked: false,
  });
  // Reset when the problem changes.
  const st = state.sig === sig ? state : { sig, cells: {}, checked: false, hint: 0, reveal: false, final: "", finalChecked: false };
  const update = (patch: Partial<typeof st>) => setState({ ...st, ...patch });

  const revealedRow = (i: number) => st.reveal || (st.hint >= 2 && i === 0);
  const revealedCell = (i: number, c: Column) => revealedRow(i) || (st.hint >= 3 && (c.key === "x" || c.key === "v" || c.key === "kv" || c.key === "k"));
  const cellOk = (i: number, c: Column) => (st.cells[`${i}:${c.key}`] ?? "").trim().toUpperCase() === c.expected(i);

  // First mistake in reading order.
  let firstWrong: { i: number; c: Column } | null = null;
  let filled = 0;
  let right = 0;
  for (let i = 0; i < n; i++)
    for (const c of columns) {
      if (c.given || revealedCell(i, c)) continue;
      const v = (st.cells[`${i}:${c.key}`] ?? "").trim();
      if (!v) continue;
      filled++;
      if (cellOk(i, c)) right++;
      else firstWrong ??= { i, c };
    }
  let fillable = 0;
  for (let i = 0; i < n; i++) for (const c of columns) if (!c.given && !revealedCell(i, c)) fillable++;

  const diag = st.finalChecked ? (cipher === "caesar" ? diagnoseCaesar(msg, caesarKey, mode, st.final) : diagnoseVigenere(msg, vigKey, mode, st.final)) : null;
  const output = cipher === "caesar" ? cTrace.output : vTrace.output;

  const hints = [
    cipher === "caesar"
      ? mode === "encrypt"
        ? `Formula: E(x) = (x + K) mod 26 with K = ${caesarKey}. Convert each letter with the alphabet table, add ${caesarKey}, subtract 26 if the result is 26 or more.`
        : `Formula: D(c) = (c − K) mod 26 with K = ${caesarKey}. Convert each letter, subtract ${caesarKey}, add 26 if the result is negative.`
      : `First write the key ${vigKey} repeatedly under the message (${vTrace.repeatedKey}). Then ${mode === "encrypt" ? "E(i) = (Pi + Ki) mod 26" : "D(i) = (Ci − Ki) mod 26"} letter by letter.`,
    "The first row has been filled in for you as a model.",
    cipher === "caesar" ? "The value column is now filled in — finish the arithmetic." : "The key letters and both value columns are now filled in — finish the arithmetic.",
  ];

  return (
    <div className="space-y-5">
      <AlphabetTable compact />

      {cipher === "vigenere" && (
        <div className="card overflow-x-auto p-3">
          <p className="label mb-2">Key repetition</p>
          <div className="grid w-max gap-1 font-mono text-base" style={{ gridTemplateColumns: `5.5rem repeat(${n}, 2rem)` }}>
            <span className="text-xs text-subtle self-center">{inName === "P" ? "Plaintext" : "Ciphertext"}</span>
            {msg.split("").map((ch, i) => (
              <span key={i} className="grid h-8 place-items-center rounded bg-surface-2 font-bold">{ch}</span>
            ))}
            <span className="text-xs text-subtle self-center">Key</span>
            {msg.split("").map((_, i) => (
              <span key={i} className={clsx("grid h-8 place-items-center rounded", st.reveal || st.hint >= 3 ? "bg-primary-soft text-primary-text font-bold" : "bg-surface-2 text-subtle")}>
                {st.reveal || st.hint >= 3 ? vTrace.repeatedKey[i] : "?"}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="card overflow-x-auto">
        <table className="data-table min-w-max font-mono">
          <thead>
            <tr>
              <th scope="col">#</th>
              {columns.map((c) => (
                <th key={c.key} scope="col">{c.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i}>
                <td className="text-subtle">{i + 1}</td>
                {columns.map((c) => {
                  if (c.given) return <td key={c.key} className="text-lg font-bold">{c.expected(i)}</td>;
                  if (revealedCell(i, c)) return <td key={c.key} className="font-semibold text-primary-text">{c.expected(i)}</td>;
                  const id = `${i}:${c.key}`;
                  const v = st.cells[id] ?? "";
                  return (
                    <td key={c.key} className="p-1">
                      <input
                        aria-label={`Row ${i + 1}, ${c.label}`}
                        className={clsx(
                          "input w-16 px-2 py-1 text-center font-mono uppercase",
                          st.checked && v.trim() && (cellOk(i, c) ? "border-success bg-success-soft" : "border-danger bg-danger-soft"),
                        )}
                        value={v}
                        maxLength={4}
                        autoComplete="off"
                        onChange={(e) => update({ cells: { ...st.cells, [id]: e.target.value }, checked: false })}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button className="btn-primary" onClick={() => update({ checked: true })}>
          <CheckCircle2 size={16} /> Check my table
        </button>
        <button className="btn-secondary" onClick={() => update({ hint: Math.min(3, st.hint + 1) })} disabled={st.hint >= 3 || st.reveal}>
          <Lightbulb size={16} /> {st.hint === 0 ? "Hint" : `Next hint (${st.hint}/3)`}
        </button>
        <button className="btn-secondary" onClick={() => update({ reveal: !st.reveal })}>
          {st.reveal ? <EyeOff size={16} /> : <Eye size={16} />} {st.reveal ? "Hide solution" : "Show full solution"}
        </button>
        <button className="btn-ghost" onClick={() => update({ cells: {}, checked: false, hint: 0, reveal: false, final: "", finalChecked: false })}>
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

      {st.checked && (
        <div className={clsx("rounded-2xl border p-4 text-sm", firstWrong ? "border-danger/40 bg-danger-soft" : "border-success/40 bg-success-soft")} role="status" aria-live="polite">
          <p className="font-semibold">
            {right}/{filled} filled cells correct · {!st.reveal && fillable - filled > 0 ? `${fillable - filled} cell(s) still to fill` : "table complete"}
          </p>
          {firstWrong ? (
            <p className="mt-1">
              First mistake — row {firstWrong.i + 1}, <strong>{firstWrong.c.label}</strong>: you wrote “{(st.cells[`${firstWrong.i}:${firstWrong.c.key}`] ?? "").trim().toUpperCase()}”. {firstWrong.c.why(firstWrong.i)}
            </p>
          ) : (
            filled > 0 && <p className="mt-1">No mistakes so far.</p>
          )}
        </div>
      )}

      {st.reveal && (
        <div className="space-y-2 rounded-2xl border border-primary/40 bg-primary-soft p-4 text-sm">
          <p className="label">Every step</p>
          <ol className="space-y-1 font-mono text-[13px]">
            {(cipher === "caesar" ? cTrace.rows : vTrace.rows).map((r, i) => (
              <li key={i}>
                {i + 1}.{" "}
                {cipher === "caesar"
                  ? (() => {
                      const row = r as (typeof cTrace.rows)[number];
                      return `${row.letter} = ${row.x}; ${row.x} ${op} ${caesarKey} = ${row.raw}${row.raw !== row.result ? ` → ${row.result}` : ""} → ${row.out}`;
                    })()
                  : (() => {
                      const row = r as (typeof vTrace.rows)[number];
                      return `${row.letter}(${row.v}) ${op} ${row.keyLetter}(${row.k}) = ${row.raw}${row.raw !== row.result ? ` → ${row.result}` : ""} → ${row.out}`;
                    })()}
              </li>
            ))}
          </ol>
          <p className="pt-1 text-base">
            {outName}: <span className="font-mono font-bold tracking-[0.2em] text-primary-text">{output}</span>
          </p>
        </div>
      )}

      <div className="card space-y-3 p-4">
        <label htmlFor="final-sub" className="label block">Final answer</label>
        <div className="flex flex-wrap gap-2">
          <input
            id="final-sub"
            className="input max-w-sm font-mono text-lg tracking-[0.2em] uppercase"
            value={st.final}
            onChange={(e) => update({ final: e.target.value, finalChecked: false })}
            placeholder={`${n} letters`}
            autoComplete="off"
          />
          <button
            className="btn-primary"
            disabled={!st.final.trim()}
            onClick={() => {
              const d = cipher === "caesar" ? diagnoseCaesar(msg, caesarKey, mode, st.final) : diagnoseVigenere(msg, vigKey, mode, st.final);
              recordCrypto(d.correct, `${cipher === "caesar" ? "Caesar" : "Vigenère"} ${mode} ${msg}`);
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
