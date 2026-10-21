import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import clsx from "clsx";

const KEYWORDS = new Set(
  "and as assert async await break class continue def del elif else except finally for from global if import in is lambda nonlocal not or pass raise return try while with yield".split(" "),
);
const CONSTS = new Set(["True", "False", "None"]);
const BUILTINS = new Set(["print", "input", "int", "float", "type", "str", "complex", "bool"]);

/** Tiny display-only Python highlighter (no editor overhead). */
function highlight(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(#[^\n]*)|("""[\s\S]*?"""|'''[\s\S]*?'''|[fF]?"(?:\\.|[^"\\\n])*"?|[fF]?'(?:\\.|[^'\\\n])*'?)|(\b\d+(?:\.\d*)?(?:[eE][-+]?\d+)?[jJ]?\b)|([A-Za-z_]\w*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const [tok, comment, str, num, word] = m;
    if (comment) out.push(<span key={k++} className="text-subtle italic">{tok}</span>);
    else if (str) out.push(<span key={k++} className="tok-str">{tok}</span>);
    else if (num) out.push(<span key={k++} className="tok-num">{tok}</span>);
    else if (word && KEYWORDS.has(word)) out.push(<span key={k++} className="tok-kw">{tok}</span>);
    else if (word && CONSTS.has(word)) out.push(<span key={k++} className="tok-num">{tok}</span>);
    else if (word && BUILTINS.has(word)) out.push(<span key={k++} className="tok-fn">{tok}</span>);
    else out.push(tok);
    last = m.index + tok.length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

export function CodeBlock({ code, title, lineNumbers = true, className, highlightLines }: { code: string; title?: string; lineNumbers?: boolean; className?: string; highlightLines?: number[] }) {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <div className={clsx("overflow-hidden rounded-xl border border-line bg-code", className)}>
      <div className="flex items-center justify-between border-b border-line px-3 py-1.5">
        <span className="text-[11px] font-medium tracking-wide text-subtle uppercase">{title ?? "Python"}</span>
        <button
          type="button"
          className="btn-ghost btn-sm py-1"
          onClick={() => {
            void navigator.clipboard?.writeText(code).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            });
          }}
          aria-label="Copy code"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </button>
      </div>
      <pre className="overflow-x-auto py-2.5 font-mono text-[13px] leading-relaxed text-ink">
        {lines.map((line, i) => (
          <div key={i} className={clsx("flex px-3", highlightLines?.includes(i + 1) && "bg-warning-soft")}>
            {lineNumbers && <span className="mr-4 w-6 shrink-0 text-right text-subtle select-none">{i + 1}</span>}
            <code className="whitespace-pre">{highlight(line)}{line === "" ? " " : ""}</code>
          </div>
        ))}
      </pre>
    </div>
  );
}

export function TerminalBlock({ text, title = "Output" }: { text: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-console">
      <div className="border-b border-white/10 px-3 py-1.5 text-[11px] font-medium tracking-wide text-slate-400 uppercase">{title}</div>
      <pre className="overflow-x-auto px-3 py-2.5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-slate-100">{text === "" ? <span className="text-slate-400">(no output)</span> : text}</pre>
    </div>
  );
}
