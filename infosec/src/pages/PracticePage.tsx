import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ListChecks, Play, RotateCcw } from "lucide-react";
import { PracticeCard } from "../components/questions/PracticeCard";
import { KIND_LABEL, STYLE_LABEL } from "../components/ui/Chip";
import { EmptyState, PageHeader } from "../components/ui/PageHeader";
import { TOPICS, TOPIC_BY_ID, UNITS } from "../data/course";
import { QUESTIONS } from "../data/questions";
import type { Difficulty, Question, QuestionKind, QuestionStyle, UnitId } from "../data/types";
import { mulberry32, newSeed, seededShuffle } from "../exam/engine";
import { topicMastery, untouchedTopics, weakTopics } from "../lib/analytics";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";

type Mode = "all" | "unseen" | "wrong" | "weak";

function Select<T extends string>({ id, label, value, onChange, options }: { id: string; label: string; value: T; onChange: (v: T) => void; options: [T, string][] }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label htmlFor={id} className="label">{label}</label>
      <select id={id} className="input" value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </div>
  );
}

export function PracticePage() {
  const [params] = useSearchParams();
  const [unit, setUnit] = useState<UnitId | "all">((params.get("unit") as UnitId) || (params.get("topic") ? TOPIC_BY_ID[params.get("topic")!]?.unitId : undefined) || "all");
  const [topic, setTopic] = useState<string>(params.get("topic") || "all");
  const [kind, setKind] = useState<QuestionKind | "all">("all");
  const [style, setStyle] = useState<QuestionStyle | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [mode, setMode] = useState<Mode>((params.get("mode") as Mode) || "all");
  const [size, setSize] = useState(10);
  const [session, setSession] = useState<{ ids: string[]; i: number; startRecords: Record<string, number> } | null>(null);

  const questions = useProgress((s) => s.questions);
  const mistakes = useProgress((s) => s.mistakes);
  const attempts = useExams((s) => s.attempts);
  const mastery = useMemo(() => topicMastery(questions, attempts), [questions, attempts]);
  const weak = useMemo(() => {
    const w = weakTopics(mastery, 8).map((x) => x.topicId);
    return w.length ? w : untouchedTopics(mastery).slice(0, 6);
  }, [mastery]);

  const pool = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (unit !== "all" && q.unitId !== unit) return false;
      if (topic !== "all" && q.topicId !== topic) return false;
      if (kind !== "all" && q.kind !== kind) return false;
      if (style !== "all" && q.style !== style) return false;
      if (difficulty !== "all" && q.difficulty !== difficulty) return false;
      if (mode === "unseen" && questions[q.id]) return false;
      if (mode === "wrong" && !(mistakes[q.id] && !mistakes[q.id].resolved)) return false;
      if (mode === "weak" && !weak.includes(q.topicId)) return false;
      return true;
    });
  }, [unit, topic, kind, style, difficulty, mode, questions, mistakes, weak]);

  const start = () => {
    const ids = seededShuffle(pool, mulberry32(newSeed()))
      .slice(0, size)
      .map((q) => q.id);
    setSession({ ids, i: 0, startRecords: Object.fromEntries(ids.map((id) => [id, questions[id]?.attempts ?? 0])) });
  };

  if (session) {
    const qs = session.ids.map((id) => QUESTIONS.find((q) => q.id === id)!) as Question[];
    const finished = session.i >= qs.length;
    if (finished) {
      const answered = qs.filter((q) => (questions[q.id]?.attempts ?? 0) > (session.startRecords[q.id] ?? 0));
      const right = answered.filter((q) => questions[q.id]?.lastCorrect).length;
      return (
        <div className="mx-auto max-w-2xl space-y-5">
          <PageHeader eyebrow="Practice" title="Session complete" />
          <div className="card space-y-3 p-6 text-center">
            <p className="font-display text-5xl font-bold">{right}/{answered.length}</p>
            <p className="text-muted">correct on your latest try (partial answers count as not correct).</p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button className="btn-primary" onClick={start}><RotateCcw size={16} /> New session, same filters</button>
              <button className="btn-secondary" onClick={() => setSession(null)}>Change filters</button>
            </div>
          </div>
          <ul className="card divide-y divide-line">
            {qs.map((q) => (
              <li key={q.id} className="flex items-start justify-between gap-3 px-4 py-2.5 text-sm">
                <span className="min-w-0">{q.prompt.replace(/___/g, "…").slice(0, 110)}{q.prompt.length > 110 ? "…" : ""}</span>
                <span className={questions[q.id]?.lastCorrect ? "shrink-0 text-success-text" : "shrink-0 text-danger-text"}>{questions[q.id]?.lastCorrect ? "✓" : "✕"}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    const q = qs[session.i];
    return (
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="flex items-center justify-between gap-2">
          <button className="btn-ghost btn-sm" onClick={() => setSession(null)}>← End session</button>
          <span className="text-sm text-subtle">Question {session.i + 1} of {qs.length}</span>
        </div>
        <PracticeCard key={q.id} q={q} index={session.i} total={qs.length} onNext={() => setSession({ ...session, i: session.i + 1 })} />
        <button className="btn-ghost btn-sm" onClick={() => setSession({ ...session, i: session.i + 1 })}>Skip →</button>
      </div>
    );
  }

  const topics = TOPICS.filter((t) => unit === "all" || t.unitId === unit);
  return (
    <div>
      <PageHeader eyebrow="Practice" title="Practice quizzes" description={`${QUESTIONS.length} questions across all seven question formats. Immediate feedback, explanation and source reference after every answer.`} />
      <div className="card space-y-5 p-5">
        <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Practice mode">
          {([
            ["all", "All questions"],
            ["unseen", "Not attempted yet"],
            ["wrong", "My open mistakes"],
            ["weak", "Weak topics"],
          ] as [Mode, string][]).map(([m, l]) => (
            <button key={m} role="radio" aria-checked={mode === m} className={mode === m ? "btn-primary btn-sm" : "btn-secondary btn-sm"} onClick={() => setMode(m)}>
              {l}
            </button>
          ))}
        </div>
        {mode === "weak" && (
          <p className="text-sm text-muted">
            Focus topics: {weak.map((t) => TOPIC_BY_ID[t].title).join(", ") || "—"}
            {weakTopics(mastery).length === 0 && " (none below 60% yet — showing topics you have not practised)"}
          </p>
        )}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Select id="f-unit" label="Chapter / lab" value={unit} onChange={(v) => { setUnit(v); setTopic("all"); }} options={[["all", "All"], ...UNITS.map((u) => [u.id, `${u.short} — ${u.title}`] as [UnitId, string])]} />
          <Select id="f-topic" label="Topic" value={topic} onChange={setTopic} options={[["all", "All topics"], ...topics.map((t) => [t.id, t.title] as [string, string])]} />
          <Select id="f-kind" label="Question type" value={kind} onChange={setKind} options={[["all", "All types"], ...(Object.entries(KIND_LABEL) as [QuestionKind, string][])]} />
          <Select id="f-style" label="Focus" value={style} onChange={setStyle} options={[["all", "Everything"], ...(Object.entries(STYLE_LABEL) as [QuestionStyle, string][])]} />
          <Select id="f-diff" label="Difficulty" value={difficulty} onChange={setDifficulty} options={[["all", "All"], ["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"]]} />
          <Select id="f-size" label="Questions per session" value={String(size)} onChange={(v) => setSize(+v)} options={[["5", "5"], ["10", "10"], ["20", "20"], ["40", "40"]]} />
        </div>
        <div className="flex flex-wrap items-center gap-3 border-t border-line pt-4">
          <button className="btn-primary" onClick={start} disabled={!pool.length}>
            <Play size={16} /> Start ({Math.min(size, pool.length)} of {pool.length})
          </button>
          {!pool.length && <span className="text-sm text-muted">No questions match these filters.</span>}
        </div>
      </div>
      {mode === "wrong" && !pool.length && (
        <div className="mt-6">
          <EmptyState icon={<ListChecks size={26} />} title="No open mistakes">Questions you answer incorrectly will appear here.</EmptyState>
        </div>
      )}
    </div>
  );
}
