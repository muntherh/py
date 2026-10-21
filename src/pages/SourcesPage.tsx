import { Fragment, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { AlertTriangle, BookOpenText, CheckCircle2, FileText, Images, NotebookPen, Scissors, XCircle } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { SourcePreviewDialog } from "../components/SourceCitation";
import { Chip } from "../components/ui/Chip";
import { RichText } from "../components/ui/RichText";
import { SOURCE_FILE_LIST, SOURCE_FILES, TOPICS, previewUrl } from "../data/sources";
import type { SourceFileId, SourceRef } from "../data/types";
import { CONCEPTS } from "../data/concepts";
import { LESSONS } from "../data/lessons/index";
import { PRACTICE_MCQS } from "../data/practice/mcq";
import { EXERCISES } from "../data/practice/exercises";
import { EXAM_QUESTIONS } from "../data/exams/questions";

const T4_INCLUDED: [string, string][] = [
  ["1", "Title"],
  ["2", "What is iteration? Definite vs indefinite iteration"],
  ["3–8", "The while loop: flowchart, syntax, how the condition is checked, comparison/logical operators, non-zero / 0 / None as conditions"],
  ["9–11", "Examples: print 1 to 5, the initialise–condition–update pattern, count down 5 to 1"],
  ["12–15", "Sum of 1 to 10, average and factorial exercises, average of N numbers, multiplication table"],
  ["16–18", "While loop and conditionals: pass/fail for 4 students, discounts for 3 products"],
];
const T4_EXCLUDED: [string, string][] = [
  ["19–21", "Infinite loops (while True, Ctrl+C) — first excluded slide is 19"],
  ["22–32", "for loops and range()"],
  ["33–35", "Loops with conditions (for-loop based)"],
  ["36–40", "break statement"],
  ["41–47", "continue statement, break and continue exercises"],
  ["48–55", "Nested loops"],
];

function asset(p: string) {
  return `${import.meta.env.BASE_URL}${p}`;
}

export function SourcesPage() {
  const [preview, setPreview] = useState<SourceRef | null>(null);
  const [browse, setBrowse] = useState<SourceFileId>("topic4");

  const coverage = useMemo(
    () =>
      CONCEPTS.map((c) => ({
        c,
        lessons: LESSONS.filter((l) => l.conceptIds.includes(c.id)).length,
        mcq: PRACTICE_MCQS.filter((q) => q.conceptIds.includes(c.id)).length,
        ex: EXERCISES.filter((q) => q.conceptIds.includes(c.id)).length,
        exam: EXAM_QUESTIONS.filter((q) => q.conceptIds.includes(c.id)).length,
      })),
    [],
  );

  const origins = useMemo(() => {
    const all = [...PRACTICE_MCQS, ...EXERCISES, ...EXAM_QUESTIONS];
    return {
      source: all.filter((q) => q.origin === "source").length,
      adapted: all.filter((q) => q.origin === "adapted").length,
      original: all.filter((q) => q.origin === "original").length,
    };
  }, []);

  const browseFile = SOURCE_FILES[browse];
  const browseUnits = browseFile.inScope.flatMap((r) => Array.from({ length: r.to - r.from + 1 }, (_, i) => r.from + i));

  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader
        eyebrow="Curriculum Sources"
        title="Where every lesson and question comes from"
        description="All content is built from the course files you supplied. This page shows the exact scope, the Topic 4 cut-off, known problems found in the files, and how every concept is covered."
      />

      <section className="card space-y-4 p-5" aria-labelledby="t4-h">
        <h2 id="t4-h" className="flex items-center gap-2 text-lg font-semibold">
          <Scissors size={18} className="text-primary-text" /> Topic 4 scope boundary
        </h2>
        <p className="text-sm text-muted">
          The boundary was taken from the slide deck itself: <strong className="text-ink">slide 19 is the section title “Infinite loop”</strong>. Slides 1–18 are in scope; slide 19 and every later slide are excluded and are never used for lessons, questions or answers.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-success/30 bg-success-soft p-4">
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-success-text">
              <CheckCircle2 size={16} /> Included (slides 1–18)
            </p>
            <ul className="space-y-1.5 text-sm">
              {T4_INCLUDED.map(([s, t]) => (
                <li key={s} className="flex gap-3">
                  <span className="w-12 shrink-0 font-mono text-xs text-muted">{s}</span>
                  <span className="text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-danger/30 bg-danger-soft p-4">
            <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-danger-text">
              <XCircle size={16} /> Excluded (slides 19–55)
            </p>
            <ul className="space-y-1.5 text-sm">
              {T4_EXCLUDED.map(([s, t]) => (
                <li key={s} className="flex gap-3">
                  <span className="w-12 shrink-0 font-mono text-xs text-muted">{s}</span>
                  <span className="text-ink">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-xs text-subtle">
          Note: slide 8 (in scope) shows <code className="inline-code">while 3:</code> printing “Hello” repeatedly. The platform teaches only its rule (non-zero numbers count as True, 0 and None as False) and asks no questions about loops that never end.
        </p>
      </section>

      <section className="card space-y-3 p-5" aria-labelledby="files-h">
        <h2 id="files-h" className="text-lg font-semibold">
          Supplied files
        </h2>
        <p className="flex gap-2 rounded-xl bg-surface-2 p-3 text-sm text-muted">
          <AlertTriangle size={16} className="mt-0.5 shrink-0 text-warning" />
          Topic 1 — Introduction was not supplied, so no content was created for it. Add the file to include it.
        </p>
        <ul className="space-y-3">
          {SOURCE_FILE_LIST.map((f) => {
            const Icon = f.kind === "pptx" ? BookOpenText : f.kind === "pdf" ? FileText : NotebookPen;
            return (
              <li key={f.id} className="rounded-xl border border-line bg-surface-2 p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 font-medium text-ink">
                      <Icon size={16} className="text-primary-text" /> {f.title}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-subtle">{f.fileName}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <Chip>
                      {f.totalUnits} {f.unitLabel.toLowerCase()}s
                    </Chip>
                    <Chip tone="success">In scope: {f.inScope.map((r) => (r.from === r.to ? `${r.from}` : `${r.from}–${r.to}`)).join(", ")}</Chip>
                    {f.topicIds.map((t) => (
                      <Chip key={t} tone="primary">
                        Topic {TOPICS.find((x) => x.id === t)?.number}
                      </Chip>
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted">{f.scopeNote}</p>
                {f.doNotUseAsAnswer && f.doNotUseAsAnswer.length > 0 && (
                  <details className="mt-2">
                    <summary className="cursor-pointer text-sm text-warning-text">Known errors in this file ({f.doNotUseAsAnswer.length}) — never used as answers</summary>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                      {f.doNotUseAsAnswer.map((d) => (
                        <li key={d.unit}>
                          <button className="text-primary-text underline" onClick={() => setPreview({ file: f.id, units: [d.unit] })}>
                            {f.unitLabel} {d.unit}
                          </button>
                          : <RichText text={d.reason} />
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <section className="card space-y-3 p-5" aria-labelledby="browse-h">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 id="browse-h" className="flex items-center gap-2 text-lg font-semibold">
            <Images size={18} /> Browse slides and pages
          </h2>
          <select className="input w-auto max-w-full" value={browse} onChange={(e) => setBrowse(e.target.value as SourceFileId)} aria-label="Choose a file to browse">
            {SOURCE_FILE_LIST.filter((f) => f.preview).map((f) => (
              <option key={f.id} value={f.id}>
                {f.title}
              </option>
            ))}
          </select>
        </div>
        <p className="text-xs text-subtle">Only in-scope slides are available. Click a slide to enlarge it.</p>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {browseUnits.map((u) => {
            const url = previewUrl(browse, u);
            return (
              <li key={u}>
                <button className="group block w-full overflow-hidden rounded-lg border border-line bg-white text-left transition-colors hover:border-primary" onClick={() => setPreview({ file: browse, units: [u] })}>
                  {url && <img src={asset(url)} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />}
                  <span className="block bg-surface-2 px-2 py-1 text-xs text-muted group-hover:text-ink">
                    {browseFile.unitLabel} {u}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="card space-y-3 p-5" aria-labelledby="cov-h">
        <h2 id="cov-h" className="text-lg font-semibold">
          Curriculum coverage matrix
        </h2>
        <p className="text-sm text-muted">
          Every permitted concept and how many lessons, practice questions, coding exercises and exam questions cover it. Items are labelled by origin: {origins.source} taken from the course material, {origins.adapted} adapted from it, {origins.original} new practice items that test
          concepts the material teaches.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] text-sm">
            <thead>
              <tr className="border-b border-line text-left text-xs text-subtle">
                <th className="py-2 font-medium">Concept</th>
                <th className="py-2 font-medium">Slides</th>
                <th className="py-2 text-right font-medium">Lessons</th>
                <th className="py-2 text-right font-medium">Practice MCQ</th>
                <th className="py-2 text-right font-medium">Exercises</th>
                <th className="py-2 text-right font-medium">Exam items</th>
              </tr>
            </thead>
            <tbody>
              {TOPICS.map((t) => (
                <Fragment key={t.id}>
                  <tr>
                    <td colSpan={6} className="pt-4 pb-1 text-xs font-semibold tracking-wide text-primary-text uppercase">
                      Topic {t.number}: {t.title}
                    </td>
                  </tr>
                  {coverage
                    .filter((row) => row.c.topicId === t.id)
                    .map(({ c, lessons, mcq, ex, exam }) => (
                      <tr key={c.id} className="border-b border-line/60">
                        <td className="py-1.5 pr-2 text-ink">{c.title}</td>
                        <td className="py-1.5 pr-2">
                          <button className="text-xs text-primary-text underline" onClick={() => setPreview(c.sources[0])}>
                            {c.sources[0].units.length > 1 ? `${c.sources[0].units[0]}–${c.sources[0].units[c.sources[0].units.length - 1]}` : c.sources[0].units[0]}
                          </button>
                        </td>
                        {[lessons, mcq, ex, exam].map((n, i) => (
                          <td key={i} className={clsx("py-1.5 text-right tabular-nums", n === 0 && i !== 2 ? "text-danger-text" : "text-muted")}>
                            {n}
                          </td>
                        ))}
                      </tr>
                    ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-subtle">
          The full automated audit (citations, scope, answer keys verified by running Python) is generated by <code className="inline-code">npm run verify:content</code> into <code className="inline-code">docs/audit/</code>.
        </p>
      </section>

      <section className="card space-y-3 p-5" aria-labelledby="notes-h">
        <h2 id="notes-h" className="text-lg font-semibold">
          Notes about the slides
        </h2>
        <p className="text-sm text-muted">Places where a slide differs from what real Python does or is unclear. Lessons always teach real Python behaviour and mention the difference.</p>
        {TOPICS.map((t) => {
          const notes = LESSONS.filter((l) => l.topicId === t.id).flatMap((l) => (l.sourceNotes ?? []).map((n) => ({ n, l })));
          return (
            <details key={t.id} className="rounded-xl border border-line bg-surface-2 p-3">
              <summary className="cursor-pointer text-sm font-medium">
                Topic {t.number} ({notes.length} notes)
              </summary>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted">
                {notes.map(({ n, l }, i) => (
                  <li key={i}>
                    <RichText text={n} />{" "}
                    <Link className="text-xs text-primary-text underline" to={`/learn/${l.id}`}>
                      ({l.title})
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </section>

      <SourcePreviewDialog source={preview} onClose={() => setPreview(null)} />
    </div>
  );
}
