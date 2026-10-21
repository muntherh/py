import { Fragment, type ReactNode } from "react";

/** Renders a string with `inline code` and **bold** segments. */
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts: ReactNode[] = [];
  const re = /(`[^`]+`|\*\*[^*]+\*\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={k++}>{text.slice(last, m.index)}</Fragment>);
    const tok = m[0];
    if (tok.startsWith("`")) parts.push(<code key={k++} className="inline-code">{tok.slice(1, -1)}</code>);
    else parts.push(<strong key={k++} className="font-semibold text-ink">{tok.slice(2, -2)}</strong>);
    last = m.index + tok.length;
  }
  if (last < text.length) parts.push(<Fragment key={k++}>{text.slice(last)}</Fragment>);
  return <span className={className}>{parts}</span>;
}
