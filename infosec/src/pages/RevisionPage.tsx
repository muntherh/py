import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Printer, Zap } from "lucide-react";
import { AlphabetTable } from "../components/crypto/AlphabetTable";
import { SourceCitation } from "../components/SourceCitation";
import { PageHeader } from "../components/ui/PageHeader";
import { RichText } from "../components/ui/RichText";
import { pg, UNITS } from "../data/course";
import { lessonsForUnit } from "../data/lessons";
import { QUESTIONS } from "../data/questions";
import type { TfQ } from "../data/types";
import { mulberry32, newSeed, seededShuffle } from "../exam/engine";
import { UNIT_COLOR } from "../lib/unitStyle";
import { useProgress } from "../store/progressStore";

function RapidFire() {
  const [seed, setSeed] = useState(() => newSeed());
  const qs = useMemo(() => seededShuffle(QUESTIONS.filter((q): q is TfQ => q.kind === "tf"), mulberry32(seed)).slice(0, 10), [seed]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [last, setLast] = useState<null | { ok: boolean; q: TfQ }>(null);
  const record = useProgress((s) => s.recordAnswer);
  const q = qs[i];
  const pick = (v: boolean) => {
    const ok = v === q.answer;
    record(q, ok ? 1 : 0, ok, v ? "True" : "False", "practice");
    setLast({ ok, q });
    setScore(score + (ok ? 1 : 0));
    setI(i + 1);
  };
  return (
    <div className="card space-y-4 p-5">
      <h2 className="flex items-center gap-2 font-display text-lg font-bold"><Zap size={18} className="text-warning" /> Rapid-fire True / False</h2>
      {q ? (
        <>
          <p className="text-xs text-subtle">{i + 1}/10 · score {score}</p>
          <p className="min-h-14 text-[16px] font-medium leading-relaxed">{q.prompt}</p>
          <div className="grid grid-cols-2 gap-2">
            <button className="btn-secondary" onClick={() => pick(true)}>True</button>
            <button className="btn-secondary" onClick={() => pick(false)}>False</button>
          </div>
        </>
      ) : (
        <div className="space-y-2 text-center">
          <p className="font-display text-3xl font-bold">{score}/10</p>
          <button className="btn-primary" onClick={() => { setSeed(newSeed()); setI(0); setScore(0); setLast(null); }}>Again</button>
        </div>
      )}
      {last && (
        <p className={clsx("rounded-xl p-3 text-sm", last.ok ? "bg-success-soft" : "bg-danger-soft")} aria-live="polite">
          {last.ok ? "✓ Correct. " : `✕ It was ${last.q.answer ? "True" : "False"}. `}
          {last.q.explanation}
        </p>
      )}
    </div>
  );
}

export function RevisionPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Last-minute"
        title="Last-minute revision"
        description="Everything to re-read the night before: every key point, the formulas, the alphabet table and a quick drill."
        actions={<button className="btn-secondary no-print" onClick={() => window.print()}><Printer size={16} /> Print</button>}
      />

      <section className="card space-y-4 p-5">
        <h2 className="font-display text-xl font-bold">Cryptography formula sheet (Lab 6)</h2>
        <AlphabetTable compact />
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-xl bg-surface-2 p-3"><p className="font-semibold">Caesar (monoalphabetic)</p><p className="font-mono">E(x) = (x + K) mod 26</p><p className="font-mono">D(c) = (c − K) mod 26</p><p className="text-xs text-subtle">K between 1 and 25 · SECRET, K=3 → VHFUHW</p></div>
          <div className="rounded-xl bg-surface-2 p-3"><p className="font-semibold">Vigenère (polyalphabetic)</p><p className="font-mono">E(i) = (Pi + Ki) mod 26</p><p className="font-mono">D(i) = (Ci − Ki) mod 26</p><p className="text-xs text-subtle">Repeat the key: WORD → WORDWO · SECRET → OSTUAH</p></div>
          <div className="rounded-xl bg-surface-2 p-3"><p className="font-semibold">Rail Fence (transposition)</p><p>Zig-zag down/up over the rails, read row by row.</p><p className="text-xs text-subtle">MUSCAT, depth 3 → MAUCTS · CIPHERTEXT → CEXIHRETPT</p></div>
          <div className="rounded-xl bg-surface-2 p-3"><p className="font-semibold">Route (transposition)</p><p>Fill the grid (pad X), read along the route.</p><p className="text-xs text-subtle">HIDETHEGOLD, 3×4 clockwise spiral → HIDHOXDLEETG</p></div>
        </div>
        <p className="text-sm">mod 26 by hand: <b>≥ 26 → subtract 26</b>; <b>negative → add 26</b>. No calculator allowed. <SourceCitation refs={[pg(6, 13, 14, 15, 16)]} compact /></p>
        <Link to="/crypto?tab=nocalc" className="btn-primary no-print">No-Calculator drill</Link>
      </section>

      <RapidFire />

      {UNITS.map((u) => (
        <section key={u.id} className="card p-5">
          <h2 className="mb-3 font-display text-xl font-bold"><span style={{ color: UNIT_COLOR[u.id] }}>{u.kind === "chapter" ? `Chapter ${u.number}` : `Lab ${u.number}`}</span> · {u.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {lessonsForUnit(u.id).map((l) => (
              <div key={l.id} className="space-y-1.5">
                <Link to={`/learn/${l.id}`} className="font-semibold hover:underline">{l.title}</Link>
                <ul className="space-y-1 text-sm text-muted">
                  {l.keyPoints.map((k, i) => <li key={i} className="flex gap-1.5"><span className="text-electric">▸</span><RichText text={k} /></li>)}
                </ul>
                {l.traps && <p className="text-xs text-warning-text">⚠ {l.traps[0]}</p>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
