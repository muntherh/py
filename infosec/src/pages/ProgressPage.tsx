import { Link } from "react-router-dom";
import clsx from "clsx";
import { BarChart3 } from "lucide-react";
import { PageHeader, StatCard } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { TOPICS, UNITS } from "../data/course";
import { FLASHCARDS } from "../data/flashcards";
import { LESSONS, lessonsForUnit } from "../data/lessons";
import { QUESTIONS } from "../data/questions";
import { readiness, topicMastery, unitMastery, weakTopics } from "../lib/analytics";
import { UNIT_COLOR } from "../lib/unitStyle";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";

export function ProgressPage() {
  const p = useProgress();
  const attempts = useExams((s) => s.attempts);
  const topic = topicMastery(p.questions, attempts);
  const units = unitMastery(topic);
  const weak = weakTopics(topic, 10);
  const done = Object.keys(p.completedLessons).length;
  const answered = Object.values(p.questions);
  const correct = answered.filter((r) => r.lastCorrect).length;
  const exams = attempts.filter((a) => a.result).slice().reverse();

  return (
    <div className="space-y-8">
      <PageHeader eyebrow="Progress" title="Progress & weak topics" description="Saved on this device (IndexedDB) — no account needed. Export or reset it in Settings." />
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Study readiness" value={`${readiness(done, LESSONS.length, topic, attempts)}%`} sub="guidance, not a mark" icon={<BarChart3 size={18} />} />
        <StatCard label="Lessons" value={`${done}/${LESSONS.length}`} />
        <StatCard label="Questions (latest correct)" value={`${correct}/${answered.length}`} sub={`${QUESTIONS.length} in bank`} />
        <StatCard label="Crypto problems solved" value={`${p.cryptoSolved}/${p.cryptoAttempts}`} sub={`Flashcards learned: ${FLASHCARDS.filter((c) => (p.flashcards[c.id]?.box ?? 0) >= 3).length}/${FLASHCARDS.length}`} />
      </section>

      <section className="card p-5">
        <h2 className="mb-4 font-display text-lg font-bold">Mastery by chapter and lab</h2>
        <div className="space-y-6">
          {UNITS.map((u) => {
            const m = units[u.id];
            const ls = lessonsForUnit(u.id);
            return (
              <div key={u.id} className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold"><span style={{ color: UNIT_COLOR[u.id] }}>{u.short}</span> · {u.title}</p>
                  <p className="text-xs text-subtle">lessons {ls.filter((l) => p.completedLessons[l.id]).length}/{ls.length} · mastery {m.score === null ? "—" : `${Math.round(m.score * 100)}%`}</p>
                </div>
                <ProgressBar value={(m.score ?? 0) * 100} label={`${u.title} mastery`} color={UNIT_COLOR[u.id]} />
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {TOPICS.filter((t) => t.unitId === u.id).map((t) => {
                    const tm = topic[t.id];
                    const pct = tm.score === null ? null : Math.round(tm.score * 100);
                    return (
                      <Link key={t.id} to={`/practice?topic=${t.id}`} className="flex items-center justify-between gap-2 rounded-lg px-2 py-1 text-sm hover:bg-surface-2">
                        <span className="min-w-0 truncate text-muted">{t.title}</span>
                        <span className={clsx("shrink-0 font-mono text-xs", pct === null ? "text-subtle" : pct < 60 ? "text-danger-text" : pct < 80 ? "text-warning-text" : "text-success-text")}>{pct === null ? "—" : `${pct}%`}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="mb-3 font-display text-lg font-bold">Weak-topic revision</h2>
        {weak.length ? (
          <ul className="space-y-2">
            {weak.map((w) => (
              <li key={w.topicId} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span>{TOPICS.find((t) => t.id === w.topicId)!.title} <span className="font-mono text-danger-text">({Math.round((w.score ?? 0) * 100)}%)</span></span>
                <span className="flex gap-2">
                  <Link to={`/learn/${w.topicId}`} className="btn-secondary btn-sm">Re-read lesson</Link>
                  <Link to={`/practice?topic=${w.topicId}`} className="btn-primary btn-sm">Practise</Link>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">No topic is below 60% yet. Topics appear here after you practise them.</p>
        )}
      </section>

      <section className="card p-5">
        <h2 className="mb-3 font-display text-lg font-bold">Mock exam history</h2>
        {exams.length ? (
          <div className="flex h-40 items-end gap-2 overflow-x-auto" role="img" aria-label="Mock exam scores over time">
            {exams.map((a) => (
              <Link key={a.id} to={`/exams/attempt/${a.id}/review`} className="flex min-w-10 flex-col items-center gap-1" title={`${a.title}: ${a.result!.score}/20`}>
                <span className="text-xs font-mono">{a.result!.score}</span>
                <span className="w-8 rounded-t-md bg-primary" style={{ height: `${Math.max(4, (a.result!.score / 20) * 110)}px` }} />
                <span className="text-[10px] text-subtle">{new Date(a.startedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">No submitted mock exams yet. <Link to="/exams" className="text-primary-text underline">Take one</Link>.</p>
        )}
      </section>
    </div>
  );
}
