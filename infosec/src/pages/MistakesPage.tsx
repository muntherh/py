import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, NotebookPen, RotateCcw, Trash2 } from "lucide-react";
import { PracticeCard, QuestionMeta } from "../components/questions/PracticeCard";
import { SourceCitation } from "../components/SourceCitation";
import { EmptyState, PageHeader } from "../components/ui/PageHeader";
import { RichText } from "../components/ui/RichText";
import { TOPIC_BY_ID, UNITS } from "../data/course";
import type { UnitId } from "../data/types";
import { useProgress } from "../store/progressStore";

export function MistakesPage() {
  const mistakes = useProgress((s) => s.mistakes);
  const resolve = useProgress((s) => s.resolveMistake);
  const remove = useProgress((s) => s.removeMistake);
  const [show, setShow] = useState<"open" | "resolved">("open");
  const [unit, setUnit] = useState<UnitId | "all">("all");
  const [retry, setRetry] = useState<string | null>(null);

  const list = Object.values(mistakes)
    .filter((m) => (show === "open" ? !m.resolved : m.resolved))
    .filter((m) => unit === "all" || m.question.unitId === unit)
    .sort((a, b) => b.timesWrong - a.timesWrong || b.lastWrongAt - a.lastWrongAt);
  const openCount = Object.values(mistakes).filter((m) => !m.resolved).length;

  return (
    <div>
      <PageHeader
        eyebrow="Progress"
        title="Mistake notebook"
        description="Every question you got wrong in practice, mock exams or No-Calculator Mode. Retry it; answering correctly marks it resolved."
        actions={openCount > 0 ? <Link to="/practice?mode=wrong" className="btn-primary"><RotateCcw size={15} /> Retry all open mistakes</Link> : undefined}
      />
      <div className="mb-5 flex flex-wrap items-center gap-2">
        <button className={show === "open" ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => setShow("open")}>Open ({openCount})</button>
        <button className={show === "resolved" ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => setShow("resolved")}>Resolved ({Object.keys(mistakes).length - openCount})</button>
        <select className="input w-auto" value={unit} onChange={(e) => setUnit(e.target.value as UnitId | "all")} aria-label="Filter by chapter or lab">
          <option value="all">All chapters & labs</option>
          {UNITS.map((u) => <option key={u.id} value={u.id}>{u.short} — {u.title}</option>)}
        </select>
      </div>
      {list.length === 0 ? (
        <EmptyState icon={<NotebookPen size={26} />} title={show === "open" ? "No open mistakes" : "Nothing resolved yet"}>
          {show === "open" ? "Great — or you haven't practised yet. Wrong answers will be collected here automatically." : "Retry a mistake correctly to resolve it."}
        </EmptyState>
      ) : (
        <div className="space-y-4">
          {list.map((m) =>
            retry === m.qid ? (
              <div key={m.qid} className="space-y-2">
                <PracticeCard q={m.question} />
                <button className="btn-ghost btn-sm" onClick={() => setRetry(null)}>Close retry</button>
              </div>
            ) : (
              <article key={m.qid} className="card space-y-3 p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <QuestionMeta q={m.question} />
                  <span className="text-xs text-subtle">wrong {m.timesWrong}× · last {new Date(m.lastWrongAt).toLocaleDateString()} · from {m.from}</span>
                </div>
                <p className="text-xs text-subtle">{TOPIC_BY_ID[m.question.topicId]?.title}</p>
                <h2 className="font-semibold leading-relaxed"><RichText text={m.question.prompt.replace(/___/g, "_____")} /></h2>
                <p className="text-sm"><span className="text-subtle">Your answer:</span> <span className="text-danger-text">{m.lastAnswer || "(blank)"}</span></p>
                <details className="text-sm">
                  <summary className="cursor-pointer text-primary-text">Show explanation</summary>
                  <div className="mt-2 space-y-2 rounded-xl bg-surface-2 p-3 leading-relaxed">
                    <RichText text={m.question.explanation} />
                    <div><SourceCitation refs={m.question.sources} compact /></div>
                  </div>
                </details>
                <div className="flex flex-wrap gap-2">
                  <button className="btn-primary btn-sm" onClick={() => setRetry(m.qid)}><RotateCcw size={14} /> Retry</button>
                  <button className="btn-secondary btn-sm" onClick={() => resolve(m.qid, !m.resolved)}><CheckCircle2 size={14} /> {m.resolved ? "Reopen" : "Mark understood"}</button>
                  <Link to={`/learn/${m.question.topicId}`} className="btn-ghost btn-sm">Lesson</Link>
                  <button className="btn-ghost btn-sm ml-auto" onClick={() => remove(m.qid)} aria-label="Remove from notebook"><Trash2 size={14} /></button>
                </div>
              </article>
            ),
          )}
        </div>
      )}
    </div>
  );
}
