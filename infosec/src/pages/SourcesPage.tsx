import { useMemo, useState } from "react";
import clsx from "clsx";
import { AlertTriangle, Info } from "lucide-react";
import { SourceCitation } from "../components/SourceCitation";
import { PageHeader } from "../components/ui/PageHeader";
import { formatSource, SOURCE_FILES } from "../data/course";
import { FLASHCARDS } from "../data/flashcards";
import { LESSONS } from "../data/lessons";
import { QUESTIONS } from "../data/questions";
import { MISSING_INFO, SOURCE_NOTES } from "../data/sourceNotes";
import type { SourceFile } from "../data/types";

export function useCoverage() {
  return useMemo(() => {
    const cov: Record<string, { lessons: number; questions: number; cards: number }> = {};
    const add = (file: SourceFile, u: number, k: "lessons" | "questions" | "cards") => {
      const c = (cov[`${file}-${u}`] ??= { lessons: 0, questions: 0, cards: 0 });
      c[k]++;
    };
    for (const l of LESSONS) for (const b of l.blocks) for (const u of b.source.units) add(b.source.file, u, "lessons");
    for (const q of QUESTIONS) for (const r of q.sources) for (const u of r.units) add(r.file, u, "questions");
    for (const c of FLASHCARDS) for (const u of c.source.units) add(c.source.file, u, "cards");
    return cov;
  }, []);
}

export function SourcesPage() {
  const cov = useCoverage();
  const [file, setFile] = useState<SourceFile>("L1");
  const f = SOURCE_FILES[file];
  return (
    <div className="space-y-8">
      <PageHeader eyebrow="About" title="Sources & coverage" description="This platform uses only five files: Lectures 1–4 and the Lab Manual Part I. Only Labs 4, 5 and 6 (pg. 8–16) are in scope; Labs 1–3 and Lab 7 are excluded. The course files themselves are not published here — every lesson and question gives the slide or page to look up in your own copy." />

      <section className="card p-5">
        <h2 className="mb-3 font-display text-lg font-bold">Coverage matrix</h2>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {(Object.keys(SOURCE_FILES) as SourceFile[]).map((k) => (
            <button key={k} className={file === k ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => setFile(k)}>{SOURCE_FILES[k].title}</button>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2">
          {f.inScope.map((u) => {
            const c = cov[`${file}-${u}`] ?? { lessons: 0, questions: 0, cards: 0 };
            const empty = c.lessons + c.questions + c.cards === 0;
            return (
              <div key={u} className={clsx("rounded-xl border p-2 text-xs", empty ? "border-line bg-surface-2 text-subtle" : "border-line-strong")}>
                <p className="mb-1 font-semibold text-ink">{file === "LAB" ? `pg. ${u}` : `Slide ${u}`}</p>
                <p>{c.lessons} lesson · {c.questions} Q · {c.cards} card</p>
              </div>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-subtle">Uncovered slides are title, textbook-reference or “Thank you” slides. A unit test enforces that every content slide and every Lab 4–6 page is taught.</p>
      </section>

      <section className="card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold"><AlertTriangle size={18} className="text-warning" /> Issues found in the course files</h2>
        <ul className="space-y-3">
          {SOURCE_NOTES.map((n, i) => (
            <li key={i} className={clsx("rounded-xl border p-3 text-sm", n.severity === "review" ? "border-warning/40 bg-warning-soft" : "border-line bg-surface-2")}>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className={clsx("chip", n.severity === "review" ? "border-transparent bg-warning text-bg" : "border-line text-muted")}>{n.severity === "review" ? "Needs review" : "Info"}</span>
                <SourceCitation refs={[n.ref]} compact />
              </div>
              <p>{n.note}</p>
              <p className="mt-1 text-muted"><b>Handling:</b> {n.handling}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card p-5">
        <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold"><Info size={18} /> Not specified in the course files</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
          {MISSING_INFO.map((m) => <li key={m}>{m}</li>)}
        </ul>
      </section>

      <section className="card p-5 text-sm text-muted">
        <h2 className="mb-2 font-display text-lg font-bold text-ink">Files</h2>
        <ul className="space-y-1">
          {(Object.keys(SOURCE_FILES) as SourceFile[]).map((k) => (
            <li key={k}>{SOURCE_FILES[k].title} — {formatSource({ file: k, units: SOURCE_FILES[k].inScope, lab: k === "LAB" ? 4 : undefined }).replace(/^Lab Manual, Lab 4,/, "Lab Manual,")} in scope</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
