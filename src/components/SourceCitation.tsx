import { useState } from "react";
import { BookOpenText, FileText, NotebookPen, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import labCells from "../data/generated/labCells.json";
import { SOURCE_FILES, compressRanges, previewUrl } from "../data/sources";
import type { SourceRef } from "../data/types";
import { Dialog } from "./ui/Dialog";

type LabCell = { n: number; type: string; text: string; output: string; images: string[] };
const LAB = labCells as Record<string, LabCell[]>;

function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function citationText(ref: SourceRef): string {
  const f = SOURCE_FILES[ref.file];
  const label = ref.units.length > 1 ? `${f.unitLabel}s` : f.unitLabel;
  return `${f.title} | ${label} ${compressRanges(ref.units)}${ref.item ? ` · Ex ${ref.item}` : ""}`;
}

export function SourceCitation({ refs, compact, className }: { refs: SourceRef[]; compact?: boolean; className?: string }) {
  const [open, setOpen] = useState<SourceRef | null>(null);
  if (!refs.length) return <span className="text-xs text-warning-text">Source: unverified</span>;
  return (
    <div className={clsx("flex min-w-0 max-w-full flex-wrap items-center gap-1.5", className)}>
      {!compact && <span className="label mr-0.5">Source</span>}
      {refs.map((r, i) => {
        const f = SOURCE_FILES[r.file];
        const Icon = f.kind === "pptx" ? BookOpenText : f.kind === "pdf" ? FileText : NotebookPen;
        return (
          <button
            key={i}
            type="button"
            onClick={() => setOpen(r)}
            className="inline-flex max-w-full items-center gap-1.5 rounded-lg border border-line bg-surface-2 px-2 py-1 text-left text-xs text-muted transition-colors hover:border-primary hover:text-ink"
            title="Open the original source"
          >
            <Icon size={13} className="shrink-0 text-primary-text" aria-hidden />
            <span className="truncate">{citationText(r)}</span>
          </button>
        );
      })}
      <SourcePreviewDialog source={open} onClose={() => setOpen(null)} />
    </div>
  );
}

export function SourcePreviewDialog({ source, onClose }: { source: SourceRef | null; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  if (!source) return <Dialog open={false} onClose={onClose} title="" children={null} />;
  const f = SOURCE_FILES[source.file];
  const units = source.units;
  const unit = units[Math.min(idx, units.length - 1)];
  const issue = f.doNotUseAsAnswer?.find((d) => d.unit === unit);
  return (
    <Dialog open onClose={() => (setIdx(0), onClose())} title={`${f.title} — ${f.unitLabel} ${unit}`} wide>
      <div className="space-y-3">
        <p className="text-xs text-muted">
          File: <span className="font-mono">{f.fileName}</span>
          {source.note ? ` · ${source.note}` : ""}
        </p>
        {issue && (
          <div className="flex gap-2 rounded-xl border border-warning/40 bg-warning-soft p-3 text-sm text-warning-text">
            <AlertTriangle size={16} className="mt-0.5 shrink-0" />
            <span>Known issue in this cell: {issue.reason}</span>
          </div>
        )}
        {f.kind === "notebook" ? <LabCellView file={source.file} unit={unit} /> : <SlideImage file={source.file} unit={unit} />}
        {units.length > 1 && (
          <div className="flex items-center justify-between gap-2">
            <button className="btn-secondary btn-sm" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>
              <ChevronLeft size={14} /> Previous
            </button>
            <span className="text-xs text-muted">
              {f.unitLabel} {unit} ({idx + 1} of {units.length})
            </span>
            <button className="btn-secondary btn-sm" disabled={idx >= units.length - 1} onClick={() => setIdx(idx + 1)}>
              Next <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </Dialog>
  );
}

function SlideImage({ file, unit }: { file: SourceRef["file"]; unit: number }) {
  const url = previewUrl(file, unit);
  if (!url) return <p className="text-sm text-warning-text">No preview is available for this {SOURCE_FILES[file].unitLabel.toLowerCase()} (outside the permitted scope).</p>;
  return (
    <img
      src={asset(url)}
      alt={`${SOURCE_FILES[file].title}, ${SOURCE_FILES[file].unitLabel.toLowerCase()} ${unit}`}
      className="w-full rounded-xl border border-line bg-white"
      loading="lazy"
    />
  );
}

function LabCellView({ file, unit }: { file: SourceRef["file"]; unit: number }) {
  const cell = LAB[file]?.find((c) => c.n === unit);
  if (!cell) return <p className="text-sm text-warning-text">Cell {unit} could not be found.</p>;
  return (
    <div className="space-y-2">
      <p className="label">{cell.type === "markdown" ? "Text cell" : "Code cell"}</p>
      <pre className="overflow-auto rounded-xl border border-line bg-code p-3 font-mono text-[13px] whitespace-pre-wrap text-ink">{cell.text || "(empty cell)"}</pre>
      {cell.output && (
        <>
          <p className="label">Saved output in the notebook</p>
          <pre className="overflow-auto rounded-xl border border-line bg-console p-3 font-mono text-[13px] whitespace-pre-wrap text-slate-100">{cell.output}</pre>
        </>
      )}
      {cell.images.map((img) => (
        <img key={img} src={asset(`sources/labs/${img}`)} alt="Sample output image from the notebook" className="max-w-full rounded-lg border border-line bg-white" />
      ))}
    </div>
  );
}
