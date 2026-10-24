import { useMemo, useState } from "react";
import clsx from "clsx";
import { Check, RotateCcw, Shuffle, X } from "lucide-react";
import { SourceCitation } from "../components/SourceCitation";
import { UnitChip } from "../components/ui/Chip";
import { PageHeader } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { UNITS } from "../data/course";
import { FLASHCARDS } from "../data/flashcards";
import type { UnitId } from "../data/types";
import { mulberry32, newSeed, seededShuffle } from "../exam/engine";
import { useProgress } from "../store/progressStore";

type Deck = "due" | "all" | "new";

export function FlashcardsPage() {
  const records = useProgress((s) => s.flashcards);
  const rate = useProgress((s) => s.rateFlashcard);
  const [unit, setUnit] = useState<UnitId | "all">("all");
  const [deck, setDeck] = useState<Deck>("due");
  const [seed, setSeed] = useState(1);
  const [i, setI] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [showAr, setShowAr] = useState(false);
  const [reverse, setReverse] = useState(false);

  // Leitner: box 0–1 always due; box 2 every other session; boxes 3–4 = learned (only in "all").
  const cards = useMemo(() => {
    const base = FLASHCARDS.filter((c) => unit === "all" || c.unitId === unit).filter((c) => {
      const r = records[c.id];
      if (deck === "new") return !r;
      if (deck === "due") return !r || r.box < 3;
      return true;
    });
    return seededShuffle(base, mulberry32(seed));
  }, [unit, deck, seed]);

  const learned = FLASHCARDS.filter((c) => (records[c.id]?.box ?? 0) >= 3).length;
  const c = cards[i];
  const answer = (knew: boolean) => {
    rate(c.id, knew);
    setFlipped(false);
    setI(i + 1);
  };
  const restart = () => {
    setSeed(newSeed());
    setI(0);
    setFlipped(false);
  };

  return (
    <div>
      <PageHeader eyebrow="Memorise" title="Flashcards" description="Every key term and definition from the slides and Lab Manual. Cards you know move up; cards you miss come back." />
      <div className="mb-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex flex-wrap items-center gap-2">
          <select className="input w-auto" value={unit} onChange={(e) => { setUnit(e.target.value as UnitId | "all"); setI(0); }} aria-label="Chapter or lab">
            <option value="all">All chapters & labs</option>
            {UNITS.map((u) => <option key={u.id} value={u.id}>{u.short} — {u.title}</option>)}
          </select>
          {(["due", "new", "all"] as Deck[]).map((d) => (
            <button key={d} className={deck === d ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => { setDeck(d); setI(0); }}>
              {d === "due" ? "To learn" : d === "new" ? "Never seen" : "All cards"}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[var(--primary)]" checked={reverse} onChange={(e) => setReverse(e.target.checked)} /> Definition first</label>
          <label className="flex items-center gap-1.5"><input type="checkbox" className="accent-[var(--primary)]" checked={showAr} onChange={(e) => setShowAr(e.target.checked)} /> Arabic</label>
        </div>
      </div>
      <div className="mb-5 space-y-1">
        <div className="flex justify-between text-xs text-subtle"><span>Learned (box 3+)</span><span>{learned}/{FLASHCARDS.length}</span></div>
        <ProgressBar value={learned} max={FLASHCARDS.length} label="Flashcards learned" />
      </div>

      {c ? (
        <div className="mx-auto max-w-2xl space-y-4">
          <p className="text-center text-xs text-subtle">Card {i + 1} of {cards.length}</p>
          <button
            type="button"
            onClick={() => setFlipped(!flipped)}
            className={clsx("card flex min-h-64 w-full flex-col items-center justify-center gap-4 p-8 text-center transition-colors", flipped && "border-primary")}
          >
            <UnitChip unitId={c.unitId} />
            {!flipped ? (
              <p className={clsx("font-display font-bold", reverse ? "text-lg leading-relaxed" : "text-3xl")}>{reverse ? c.definition : c.term}</p>
            ) : (
              <div className="space-y-3 animate-pop">
                <p className={clsx(reverse ? "font-display text-3xl font-bold" : "text-lg leading-relaxed")}>{reverse ? c.term : c.definition}</p>
                {showAr && c.ar && <p lang="ar" dir="rtl" className="text-lg text-electric">{c.ar}</p>}
              </div>
            )}
            <span className="text-xs text-subtle">{flipped ? "" : "Tap or press Enter to reveal"}</span>
          </button>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <SourceCitation refs={[c.source]} compact />
          </div>
          {flipped ? (
            <div className="grid grid-cols-2 gap-2">
              <button className="btn border border-danger/50 bg-danger-soft text-danger-text" onClick={() => answer(false)}><X size={16} /> Didn't know</button>
              <button className="btn border border-success/50 bg-success-soft text-success-text" onClick={() => answer(true)} autoFocus><Check size={16} /> Knew it</button>
            </div>
          ) : (
            <button className="btn-primary w-full" onClick={() => setFlipped(true)}>Reveal</button>
          )}
        </div>
      ) : (
        <div className="card mx-auto max-w-lg space-y-3 p-8 text-center">
          <p className="font-display text-xl font-bold">{cards.length ? "Deck finished!" : "No cards in this deck"}</p>
          <p className="text-sm text-muted">{deck === "due" ? "Cards you knew three times in a row count as learned." : ""}</p>
          <div className="flex justify-center gap-2">
            <button className="btn-primary" onClick={restart}><Shuffle size={16} /> Shuffle & restart</button>
            <button className="btn-secondary" onClick={() => { setDeck("all"); restart(); }}><RotateCcw size={16} /> All cards</button>
          </div>
        </div>
      )}
    </div>
  );
}
