import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { BookOpen, Dices, PenLine, Timer } from "lucide-react";
import { AlphabetBuilder, AlphabetTable } from "../components/crypto/AlphabetTable";
import { DiagnosisView } from "../components/crypto/DiagnosisView";
import { RailWorksheet } from "../components/crypto/RailWorksheet";
import { RouteWorksheet } from "../components/crypto/RouteWorksheet";
import { SubstitutionWorksheet } from "../components/crypto/SubstitutionWorksheet";
import { SourceCitation } from "../components/SourceCitation";
import { Chip } from "../components/ui/Chip";
import { PageHeader } from "../components/ui/PageHeader";
import { clean, FILL_LABELS, ROUTE_LABELS, type Fill, type Mode, type RouteKind } from "../crypto/ciphers";
import { pg } from "../data/course";
import type { CryptoQ, Difficulty } from "../data/types";
import { formatDuration, generateCrypto, mulberry32, newSeed } from "../exam/engine";
import { diagnoseCrypto } from "../grading/grade";
import { useNow } from "../lib/useNow";
import { useProgress } from "../store/progressStore";

type Tab = "alphabet" | "caesar" | "vigenere" | "rail" | "route" | "nocalc" | "manual";

const TABS: { id: Tab; label: string }[] = [
  { id: "alphabet", label: "Alphabet table" },
  { id: "caesar", label: "Caesar" },
  { id: "vigenere", label: "Vigenère" },
  { id: "rail", label: "Rail Fence" },
  { id: "route", label: "Route" },
  { id: "nocalc", label: "No-Calculator Mode" },
  { id: "manual", label: "Manual exercises" },
];

/** Exercises exactly as they appear in the Lab Manual (Lab 6, pg. 14–16). */
const MANUAL: { title: string; params: Record<string, string>; answer: string; page: number[]; kind: string }[] = [
  { title: "Caesar solved example: SECRET, K = 3", params: { cipher: "caesar", mode: "encrypt", text: "SECRET", key: "3" }, answer: "VHFUHW", page: [14], kind: "Solved example" },
  { title: "Caesar question: CRYPTO, K = 7", params: { cipher: "caesar", mode: "encrypt", text: "CRYPTO", key: "7" }, answer: "JYFWAV", page: [14], kind: "Question" },
  { title: "Vigenère solved example: SECRET, key WORD", params: { cipher: "vigenere", mode: "encrypt", text: "SECRET", key: "WORD" }, answer: "OSTUAH", page: [14, 15], kind: "Solved example" },
  { title: "Rail Fence solved example: MUSCAT, depth 3", params: { cipher: "rail", mode: "encrypt", text: "MUSCAT", depth: "3" }, answer: "MAUCTS", page: [15], kind: "Solved example" },
  { title: "Rail Fence question: CIPHERTEXT, depth 3", params: { cipher: "rail", mode: "encrypt", text: "CIPHERTEXT", depth: "3" }, answer: "CEXIHRETPT", page: [15, 16], kind: "Question" },
  { title: "Route Example 1: HIDETHEGOLD, 3 cols × 4 rows, spiral clockwise from top-left", params: { cipher: "route", mode: "encrypt", text: "HIDETHEGOLD", rows: "4", cols: "3", fill: "rows", route: "spiral-tl" }, answer: "HIDHOXDLEETG", page: [16], kind: "Example" },
  { title: "Route Example 2, Key 1: WE ARE DISCOVERED FLEE AT ONCE, top-right corner down to the left", params: { cipher: "route", mode: "encrypt", text: "WEAREDISCOVEREDFLEEATONCE", rows: "5", cols: "5", fill: "columns", route: "corner-tr" }, answer: "TONCEADOEFLEEECRVERSADIEW", page: [16], kind: "Example" },
  { title: "Route Example 2, spiral model from the top-right corner", params: { cipher: "route", mode: "encrypt", text: "WEAREDISCOVEREDFLEEATONCE", rows: "5", cols: "5", fill: "columns", route: "spiral-tr" }, answer: "TONCEADOERAEWDVFLEEECSIER", page: [16], kind: "Example" },
];

function ModeToggle({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return (
    <div className="inline-flex rounded-xl border border-line bg-surface-2 p-1" role="radiogroup" aria-label="Encrypt or decrypt">
      {(["encrypt", "decrypt"] as Mode[]).map((m) => (
        <button key={m} type="button" role="radio" aria-checked={mode === m} onClick={() => onChange(m)} className={clsx("rounded-lg px-3 py-1.5 text-sm font-medium capitalize", mode === m ? "bg-primary-btn text-white" : "text-muted hover:text-ink")}>
          {m}
        </button>
      ))}
    </div>
  );
}

function Field({ label, children, htmlFor }: { label: string; children: React.ReactNode; htmlFor: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label htmlFor={htmlFor} className="label">{label}</label>
      {children}
    </div>
  );
}

function NoCalculatorMode({ onOpen }: { onOpen: (params: Record<string, string>) => void }) {
  const [family, setFamily] = useState<"any" | "substitution" | "transposition">("any");
  const [level, setLevel] = useState<Difficulty>("medium");
  const [seed, setSeed] = useState(() => newSeed());
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [stoppedAt, setStoppedAt] = useState<number | null>(null);
  const now = useNow(1000);
  const recordCrypto = useProgress((s) => s.recordCrypto);
  const record = useProgress((s) => s.recordAnswer);

  const q: CryptoQ = useMemo(() => {
    const rand = mulberry32(seed);
    const fam = family === "any" ? (rand() < 0.5 ? "substitution" : "transposition") : family;
    return generateCrypto(fam, level, rand, `nocalc-${seed}`);
  }, [seed, family, level]);
  const diag = checked ? diagnoseCrypto(q.spec, answer) : null;

  const next = () => {
    setSeed(newSeed());
    setAnswer("");
    setChecked(false);
    setStartedAt(Date.now());
    setStoppedAt(null);
  };

  const params: Record<string, string> = { cipher: q.spec.cipher, mode: q.spec.mode, text: q.spec.text };
  if (q.spec.cipher === "caesar" || q.spec.cipher === "vigenere") params.key = String(q.spec.key);
  if (q.spec.cipher === "rail") params.depth = String(q.spec.depth);
  if (q.spec.cipher === "route") Object.assign(params, { rows: String(q.spec.rows), cols: String(q.spec.cols), fill: q.spec.fill, route: q.spec.route });

  return (
    <div className="space-y-5">
      <div className="card space-y-2 p-4 text-sm leading-relaxed">
        <p className="flex items-center gap-2 font-semibold"><PenLine size={16} /> Solve on paper, exactly like the exam</p>
        <ul className="list-disc space-y-1 pl-5 text-muted">
          <li>Calculators are not allowed: first draw the alphabet table (A = 0 … Z = 25) from memory.</li>
          <li>For each letter write: letter → number → add/subtract → reduce (subtract 26 if ≥ 26, add 26 if negative) → letter.</li>
          <li>For transpositions draw the zig-zag or the grid, and check that your answer uses exactly the same letters.</li>
          <li>Only type your final answer here. Hints are hidden until you check — just like the exam.</li>
        </ul>
      </div>
      <div className="flex flex-wrap items-end gap-3">
        <Field label="Cipher family" htmlFor="nc-family">
          <select id="nc-family" className="input" value={family} onChange={(e) => { setFamily(e.target.value as typeof family); next(); }}>
            <option value="any">Any</option>
            <option value="substitution">Substitution (Caesar / Vigenère)</option>
            <option value="transposition">Transposition (Rail Fence / Route)</option>
          </select>
        </Field>
        <Field label="Difficulty" htmlFor="nc-level">
          <select id="nc-level" className="input" value={level} onChange={(e) => { setLevel(e.target.value as Difficulty); next(); }}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </Field>
        <button className="btn-secondary" onClick={next}>
          <Dices size={16} /> New problem
        </button>
      </div>

      <article className="rounded-2xl border-2 border-dashed border-line-strong bg-surface p-5 sm:p-7" aria-label="Paper-style exercise">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="font-display text-sm font-bold tracking-wide text-electric uppercase">Exercise · 2 marks (practice)</span>
          <span className="flex items-center gap-1.5 font-mono text-sm text-muted" aria-label="Elapsed time">
            <Timer size={14} /> {formatDuration((stoppedAt ?? now) - startedAt)}
          </span>
        </div>
        <p className="font-serif text-lg leading-relaxed" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {q.prompt}
        </p>
        <p className="mt-2 text-xs text-subtle">Show your working on paper. Write the final answer in capital letters.</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <label htmlFor="nc-answer" className="sr-only">Final answer</label>
          <input id="nc-answer" className="input max-w-md font-mono text-lg tracking-[0.2em] uppercase" value={answer} onChange={(e) => { setAnswer(e.target.value); setChecked(false); }} autoComplete="off" placeholder="Final answer" />
          <button
            className="btn-primary"
            disabled={!answer.trim()}
            onClick={() => {
              const d = diagnoseCrypto(q.spec, answer);
              recordCrypto(d.correct, `No-calculator: ${q.prompt}`);
              record(q, d.fraction, d.correct, answer, "crypto");
              setChecked(true);
              setStoppedAt(Date.now());
            }}
          >
            Check
          </button>
        </div>
      </article>
      {diag && (
        <div className="space-y-3">
          <DiagnosisView diag={diag} />
          <div className="flex flex-wrap gap-2">
            <button className="btn-secondary" onClick={() => onOpen(params)}>Open the step-by-step worksheet</button>
            <button className="btn-primary" onClick={next}>Next problem</button>
          </div>
          {!diag.correct && (
            <p className="text-sm text-muted">
              Answer: <span className="font-mono font-bold tracking-widest">{q.answer}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function CryptoLabPage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get("tab") as Tab) || (params.get("cipher") as Tab) || "alphabet";
  const get = (k: string, d: string) => params.get(k) ?? d;
  const set = (patch: Record<string, string>) => {
    const next = new URLSearchParams(params);
    for (const [k, v] of Object.entries(patch)) next.set(k, v);
    setParams(next, { replace: true });
  };

  // Defaults per cipher = the manual's own solved examples.
  const defaults: Record<string, Record<string, string>> = {
    caesar: { text: "SECRET", key: "3", mode: "encrypt" },
    vigenere: { text: "SECRET", key: "WORD", mode: "encrypt" },
    rail: { text: "MUSCAT", depth: "3", mode: "encrypt" },
    route: { text: "HIDETHEGOLD", rows: "4", cols: "3", fill: "rows", route: "spiral-tl", mode: "encrypt" },
  };
  const val = (k: string) => get(k, defaults[tab]?.[k] ?? "");

  const openTab = (t: Tab, extra: Record<string, string> = {}) => {
    const next = new URLSearchParams({ tab: t, ...(defaults[t] ?? {}), ...extra });
    setParams(next);
  };

  useEffect(() => {
    if (!params.get("tab") && params.get("cipher")) set({ tab: params.get("cipher")! });
  }, []);

  const mode = (val("mode") as Mode) || "encrypt";

  return (
    <div>
      <PageHeader
        eyebrow="Lab 6 · Symmetric cryptography"
        title="Cryptography Lab"
        description={
          <>
            Paper-exam-style worksheets that teach the method step by step: fill every cell, get told exactly where you went wrong, take hints before the answer. Methods follow the Lab Manual (Lab 6, pg. 13–16).{" "}
            <SourceCitation refs={[pg(6, 13, 14, 15, 16)]} compact />
          </>
        }
      />
      <div className="mb-6 -mx-1 overflow-x-auto px-1 pb-1">
        <div className="flex w-max gap-1.5" role="tablist" aria-label="Cryptography tools">
          {TABS.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => openTab(t.id)} className={clsx("btn btn-sm", tab === t.id ? "bg-primary-btn text-white" : "border border-line bg-surface-2 text-muted hover:text-ink")}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "alphabet" && (
        <div className="space-y-6">
          <section className="card space-y-4 p-5">
            <h2 className="font-display text-xl font-bold">The alphabet table (A = 0 … Z = 25)</h2>
            <p className="text-sm text-muted">This is the table from the Lab Manual (pg. 13). The exam notice says to learn to make it — click letters to check values, or hide the numbers to test yourself.</p>
            <AlphabetTable />
          </section>
          <section className="card space-y-4 p-5">
            <h2 className="font-display text-xl font-bold">Build it from memory</h2>
            <AlphabetBuilder />
          </section>
        </div>
      )}

      {(tab === "caesar" || tab === "vigenere") && (
        <div className="space-y-5">
          <div className="card flex flex-wrap items-end gap-3 p-4">
            <Field label={mode === "encrypt" ? "Plaintext" : "Ciphertext"} htmlFor="in-text">
              <input id="in-text" className="input w-56 font-mono uppercase" value={val("text")} onChange={(e) => set({ text: clean(e.target.value) })} maxLength={24} />
            </Field>
            {tab === "caesar" ? (
              <Field label="Key K (1–25)" htmlFor="in-key">
                <input id="in-key" className="input w-24 font-mono" type="number" min={1} max={25} value={val("key")} onChange={(e) => set({ key: e.target.value })} />
              </Field>
            ) : (
              <Field label="Keyword" htmlFor="in-key">
                <input id="in-key" className="input w-36 font-mono uppercase" value={val("key")} onChange={(e) => set({ key: clean(e.target.value) })} maxLength={10} />
              </Field>
            )}
            <ModeToggle mode={mode} onChange={(m) => set({ mode: m })} />
            <SourceCitation refs={[tab === "caesar" ? pg(6, 13, 14) : pg(6, 14, 15)]} compact />
          </div>
          {clean(val("text")) ? <SubstitutionWorksheet cipher={tab} text={val("text")} keyValue={val("key")} mode={mode} /> : <p className="text-sm text-muted">Type a message to start.</p>}
        </div>
      )}

      {tab === "rail" && (
        <div className="space-y-5">
          <div className="card flex flex-wrap items-end gap-3 p-4">
            <Field label={mode === "encrypt" ? "Plaintext" : "Ciphertext"} htmlFor="in-text">
              <input id="in-text" className="input w-56 font-mono uppercase" value={val("text")} onChange={(e) => set({ text: clean(e.target.value) })} maxLength={30} />
            </Field>
            <Field label="Depth (rows)" htmlFor="in-depth">
              <input id="in-depth" className="input w-24 font-mono" type="number" min={2} max={6} value={val("depth")} onChange={(e) => set({ depth: e.target.value })} />
            </Field>
            <ModeToggle mode={mode} onChange={(m) => set({ mode: m })} />
            <SourceCitation refs={[pg(6, 15, 16)]} compact />
          </div>
          {clean(val("text")) ? <RailWorksheet text={val("text")} depth={parseInt(val("depth"), 10) || 3} mode={mode} /> : <p className="text-sm text-muted">Type a message to start.</p>}
        </div>
      )}

      {tab === "route" && (
        <div className="space-y-5">
          <div className="card flex flex-wrap items-end gap-3 p-4">
            <Field label={mode === "encrypt" ? "Plaintext" : "Ciphertext"} htmlFor="in-text">
              <input id="in-text" className="input w-64 font-mono uppercase" value={val("text")} onChange={(e) => set({ text: clean(e.target.value) })} maxLength={64} />
            </Field>
            <Field label="Columns" htmlFor="in-cols">
              <input id="in-cols" className="input w-20 font-mono" type="number" min={2} max={8} value={val("cols")} onChange={(e) => set({ cols: e.target.value })} />
            </Field>
            <Field label="Rows" htmlFor="in-rows">
              <input id="in-rows" className="input w-20 font-mono" type="number" min={2} max={8} value={val("rows")} onChange={(e) => set({ rows: e.target.value })} />
            </Field>
            <Field label="Write the grid" htmlFor="in-fill">
              <select id="in-fill" className="input" value={val("fill")} onChange={(e) => set({ fill: e.target.value })}>
                {(Object.keys(FILL_LABELS) as Fill[]).map((f) => (
                  <option key={f} value={f}>{FILL_LABELS[f]}</option>
                ))}
              </select>
            </Field>
            <Field label="Route" htmlFor="in-route">
              <select id="in-route" className="input" value={val("route")} onChange={(e) => set({ route: e.target.value })}>
                {(Object.keys(ROUTE_LABELS) as RouteKind[]).map((r) => (
                  <option key={r} value={r}>{ROUTE_LABELS[r]}</option>
                ))}
              </select>
            </Field>
            <ModeToggle mode={mode} onChange={(m) => set({ mode: m })} />
          </div>
          {(() => {
            const rows = parseInt(val("rows"), 10) || 4;
            const cols = parseInt(val("cols"), 10) || 3;
            const len = clean(val("text")).length;
            if (!len) return <p className="text-sm text-muted">Type a message to start.</p>;
            if (len > rows * cols) return <p className="rounded-xl bg-warning-soft p-3 text-sm text-warning-text">The message has {len} letters but the grid only has {rows * cols} cells. Make the grid bigger.</p>;
            return <RouteWorksheet text={val("text")} rows={rows} cols={cols} fill={val("fill") as Fill} route={val("route") as RouteKind} mode={mode} />;
          })()}
          <p className="text-xs text-subtle">
            Note: the manual's step 2 says to write row by row, but its Example 2 grid is filled column by column — both are supported so you can reproduce every example. <SourceCitation refs={[pg(6, 16)]} compact />
          </p>
        </div>
      )}

      {tab === "nocalc" && <NoCalculatorMode onOpen={(p) => openTab(p.cipher as Tab, p)} />}

      {tab === "manual" && (
        <div className="grid gap-3 md:grid-cols-2">
          {MANUAL.map((m) => (
            <article key={m.title} className="card flex flex-col gap-3 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <Chip tone="primary">{m.kind}</Chip>
                <SourceCitation refs={[pg(6, ...m.page)]} compact />
              </div>
              <h3 className="font-semibold">{m.title}</h3>
              <details className="text-sm">
                <summary className="cursor-pointer text-muted">Show the manual's answer</summary>
                <p className="mt-1 font-mono text-base font-bold tracking-widest text-primary-text">{m.answer}</p>
              </details>
              <button className="btn-secondary mt-auto self-start" onClick={() => openTab(m.params.cipher as Tab, m.params)}>
                <BookOpen size={15} /> Solve it step by step
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
