import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dices, Info, Play, Timer, Trash2 } from "lucide-react";
import { ConfirmDialog, Dialog } from "../components/ui/Dialog";
import { DifficultyChip } from "../components/ui/Chip";
import { EmptyState, PageHeader } from "../components/ui/PageHeader";
import type { Difficulty } from "../data/types";
import { BLUEPRINT, blueprintTotal, createAttempt, DEFAULT_DURATION, formatDuration, newSeed, PAPERS } from "../exam/engine";
import { useExams } from "../store/examStore";
import { useSettings } from "../store/settingsStore";

interface Pending {
  paperId: string;
  title: string;
  difficulty: Difficulty;
  seed: number;
}

export function ExamsPage() {
  const attempts = useExams((s) => s.attempts);
  const start = useExams((s) => s.start);
  const remove = useExams((s) => s.remove);
  const examMinutes = useSettings((s) => s.examMinutes);
  const navigate = useNavigate();
  const [pending, setPending] = useState<Pending | null>(null);
  const [minutes, setMinutes] = useState(45);
  const [del, setDel] = useState<string | null>(null);
  const active = attempts.find((a) => a.status === "in_progress");

  const open = (p: Pending) => {
    setMinutes(examMinutes ?? DEFAULT_DURATION[p.difficulty]);
    setPending(p);
  };
  const begin = () => {
    if (!pending) return;
    const id = `att-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;
    // Each attempt gets its own order seed for randomized question order; named papers keep their question set.
    const a = createAttempt(pending.paperId, pending.title, pending.difficulty, pending.seed, minutes, Date.now(), id);
    start(a);
    navigate(`/exams/attempt/${id}`);
  };

  return (
    <div>
      <PageHeader eyebrow="Exam simulator" title="Mock midterm exams" description="Paper-style mock exams worth exactly 20 marks, balanced across Chapters 1–4 and Labs 4–6. No hints until you submit." />

      <div className="mb-6 flex gap-3 rounded-2xl border border-warning/40 bg-warning-soft p-4 text-sm text-warning-text">
        <Info size={18} className="mt-0.5 shrink-0" />
        <p>
          <b>Practice settings, not official rules.</b> The real question distribution and exam duration were not announced. This simulator uses the blueprint below and a default of 40–50 minutes, which you can change.
        </p>
      </div>

      {active && (
        <Link to={`/exams/attempt/${active.id}`} className="card mb-6 flex items-center gap-3 border-primary p-4">
          <Timer className="text-electric" /> <span className="font-semibold">Resume: {active.title}</span>
          <span className="ml-auto btn-primary btn-sm">Continue</span>
        </Link>
      )}

      <section className="mb-8">
        <h2 className="mb-3 font-display text-xl font-bold">Choose a paper</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PAPERS.map((p) => {
            const past = attempts.filter((a) => a.paperId === p.id && a.result);
            return (
              <div key={p.id} className="card flex flex-col gap-2 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{p.title}</h3>
                  <DifficultyChip difficulty={p.difficulty} />
                </div>
                <p className="text-xs text-muted">20 marks · default {DEFAULT_DURATION[p.difficulty]} min · {past.length ? `best ${Math.max(...past.map((a) => a.result!.score))}/20` : "not attempted"}</p>
                <button className="btn-primary mt-auto" onClick={() => open({ paperId: p.id, title: p.title, difficulty: p.difficulty, seed: p.seed })} disabled={!!active}>
                  <Play size={15} /> Start
                </button>
              </div>
            );
          })}
          <div className="card flex flex-col gap-2 border-dashed p-4">
            <h3 className="font-semibold">New random paper</h3>
            <p className="text-xs text-muted">A freshly generated 20-mark paper with new cryptography problems.</p>
            <div className="mt-auto flex flex-wrap gap-1.5">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                <button key={d} className="btn-secondary btn-sm capitalize" disabled={!!active} onClick={() => open({ paperId: `random-${d}`, title: `Random ${d} paper`, difficulty: d, seed: newSeed() })}>
                  <Dices size={14} /> {d}
                </button>
              ))}
            </div>
          </div>
        </div>
        {active && <p className="mt-2 text-sm text-muted">Finish or submit your current exam before starting another.</p>}
      </section>

      <section className="mb-8">
        <h2 className="mb-3 font-display text-xl font-bold">Practice blueprint ({blueprintTotal()} marks)</h2>
        <div className="card overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr><th>Section</th><th>Questions</th><th>Marks</th></tr>
            </thead>
            <tbody>
              {BLUEPRINT.map((s) => {
                const marks = s.slots.reduce((t, slot) => t + (slot.marks ?? s.marksEach), 0);
                return (
                  <tr key={s.key}>
                    <td className="font-semibold">{s.title}</td>
                    <td className="text-muted">{s.slots.length} · {s.instructions}</td>
                    <td className="font-mono">{marks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-subtle">Every paper includes all four chapters, Lab 4 and Lab 5 items, an alphabet-table item and two cryptography calculations (Lab 6). Question order is randomized within each section.</p>
      </section>

      <section>
        <h2 className="mb-3 font-display text-xl font-bold">Your attempts</h2>
        {attempts.length === 0 ? (
          <EmptyState icon={<Timer size={26} />} title="No attempts yet">Start a paper above. Your results and a topic-by-topic report will appear here.</EmptyState>
        ) : (
          <ul className="card divide-y divide-line">
            {attempts.map((a) => (
              <li key={a.id} className="flex flex-wrap items-center gap-3 px-4 py-3 text-sm">
                <div className="min-w-0">
                  <p className="font-semibold">{a.title}</p>
                  <p className="text-xs text-subtle">{new Date(a.startedAt).toLocaleString()} · {a.durationMinutes} min{a.autoSubmitted ? " · auto-submitted" : ""}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  {a.result ? (
                    <>
                      <span className="font-display text-lg font-bold">{a.result.score}/20</span>
                      <span className="text-xs text-subtle">{formatDuration(a.result.timeSpentMs)}</span>
                      <Link to={`/exams/attempt/${a.id}/review`} className="btn-secondary btn-sm">Review</Link>
                    </>
                  ) : (
                    <Link to={`/exams/attempt/${a.id}`} className="btn-primary btn-sm">Continue</Link>
                  )}
                  <button className="btn-ghost btn-sm" aria-label={`Delete attempt ${a.title}`} onClick={() => setDel(a.id)}>
                    <Trash2 size={15} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Dialog open={!!pending} onClose={() => setPending(null)} title={pending ? `Start ${pending.title}` : "Start"}>
        <div className="space-y-4 text-sm">
          <ul className="list-disc space-y-1 pl-5 text-muted">
            <li>20 marks in six sections. Answer on paper first if you like, then enter your answers.</li>
            <li>No hints or feedback until you submit.</li>
            <li>The timer keeps running if you leave the page; when it ends the paper is submitted automatically.</li>
          </ul>
          <label className="flex flex-col gap-1">
            <span className="label">Duration (practice setting)</span>
            <select className="input" value={minutes} onChange={(e) => setMinutes(+e.target.value)}>
              {[20, 30, 40, 45, 50, 60, 75, 90].map((m) => (
                <option key={m} value={m}>{m} minutes</option>
              ))}
            </select>
          </label>
          <div className="flex justify-end gap-2">
            <button className="btn-secondary" onClick={() => setPending(null)}>Cancel</button>
            <button className="btn-primary" onClick={begin} autoFocus><Play size={15} /> Begin exam</button>
          </div>
        </div>
      </Dialog>
      <ConfirmDialog
        open={!!del}
        title="Delete this attempt?"
        message="Its score will be removed from your history. Mistakes already copied to the notebook stay there."
        confirmLabel="Delete"
        danger
        onConfirm={() => {
          if (del) remove(del);
          setDel(null);
        }}
        onCancel={() => setDel(null)}
      />
    </div>
  );
}
