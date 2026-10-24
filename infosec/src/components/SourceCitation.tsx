import { useState } from "react";
import { BookOpen } from "lucide-react";
import { formatSource, shortSource, SOURCE_FILES } from "../data/course";
import type { SourceRef } from "../data/types";
import { Dialog } from "./ui/Dialog";

/**
 * A small citation chip. It opens the exact reference so the student can find it in their
 * own copy of the course files. The slides and Lab Manual are not published with the site.
 */
export function SourceCitation({ refs, compact }: { refs: SourceRef[]; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  if (!refs.length) return null;
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="chip cursor-pointer border-line bg-surface-2 text-muted hover:border-primary hover:text-primary-text"
        title="Show where this comes from in your course files"
      >
        <BookOpen size={12} aria-hidden />
        {compact ? refs.map(shortSource).join(" · ") : refs.map(formatSource).join(" · ")}
      </button>
      <Dialog open={open} onClose={() => setOpen(false)} title="Source reference">
        <div className="space-y-3 text-sm">
          <ul className="space-y-2">
            {refs.map((r, i) => (
              <li key={i} className="rounded-xl border border-line bg-surface-2 p-3">
                <p className="font-semibold">{formatSource(r)}</p>
                <p className="text-muted">{SOURCE_FILES[r.file].title}</p>
              </li>
            ))}
          </ul>
          <p className="text-xs text-subtle">
            Open your own copy of the lecture slides or the Lab Manual at this {refs.some((r) => r.file === "LAB") ? "page" : "slide"}. The course files are not published on this site. Slide numbers are positions in the file (1 = title slide); Lab Manual pages use the printed “pg.” number.
          </p>
        </div>
      </Dialog>
    </>
  );
}
