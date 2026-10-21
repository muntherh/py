import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { CornerDownLeft, X } from "lucide-react";
import type { ConsoleEntry } from "./useRunner";

export function OutputConsole({
  entries,
  awaitingInput,
  onSubmitInput,
  onCancelInput,
  minHeight = "6rem",
  maxHeight = "22rem",
  emptyText = "Output will appear here. Press Run (or Shift+Enter in the editor).",
}: {
  entries: ConsoleEntry[];
  awaitingInput: string | null;
  onSubmitInput: (v: string) => void;
  onCancelInput: () => void;
  minHeight?: string;
  maxHeight?: string;
  emptyText?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    const el = scroller.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries, awaitingInput]);

  useEffect(() => {
    if (awaitingInput !== null) {
      setValue("");
      inputRef.current?.focus();
    }
  }, [awaitingInput]);

  return (
    <div
      ref={scroller}
      className="overflow-auto rounded-xl border border-line bg-console p-3 font-mono text-[13px] leading-relaxed text-slate-100"
      style={{ minHeight, maxHeight }}
      data-testid="output-console"
    >
      <div role="log" aria-live="polite" aria-label="Program output">
        {entries.length === 0 && awaitingInput === null && <p className="font-sans text-xs text-slate-400">{emptyText}</p>}
        <pre className="whitespace-pre-wrap break-words">
          {entries.map((e, i) => (
            <span
              key={i}
              className={clsx(
                e.kind === "stderr" && "text-red-300",
                e.kind === "error" && "mt-1 block rounded-lg border border-red-500/40 bg-red-500/10 p-2 text-red-200",
                e.kind === "input" && "text-sky-300",
                e.kind === "result" && "text-violet-300",
                e.kind === "notice" && "mt-1 block font-sans text-xs text-amber-300",
                e.kind === "meta" && "mt-1 block font-sans text-[11px] text-slate-400",
              )}
              data-kind={e.kind}
            >
              {e.text}
            </span>
          ))}
        </pre>
      </div>
      {awaitingInput !== null && (
        <form
          className="mt-1 flex flex-wrap items-center gap-2"
          onSubmit={(ev) => {
            ev.preventDefault();
            onSubmitInput(value);
          }}
        >
          <label htmlFor="stdin-field" className="sr-only">
            Program input{awaitingInput ? `: ${awaitingInput}` : ""}
          </label>
          <input
            id="stdin-field"
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="min-w-[10rem] flex-1 rounded-md border border-sky-400/50 bg-slate-900 px-2 py-1 font-mono text-sm text-sky-200 focus:border-sky-300 focus:outline-none"
            placeholder="Type input and press Enter"
            autoComplete="off"
            spellCheck={false}
            data-testid="stdin-input"
          />
          <button type="submit" className="btn-sm btn rounded-md bg-sky-600 text-white hover:bg-sky-500">
            <CornerDownLeft size={14} /> Enter
          </button>
          <button type="button" onClick={onCancelInput} className="btn-sm btn rounded-md text-slate-300 hover:bg-slate-800" title="Cancel input (Python receives end-of-file)">
            <X size={14} /> Cancel
          </button>
        </form>
      )}
    </div>
  );
}
