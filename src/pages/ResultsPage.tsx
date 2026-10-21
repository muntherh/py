import { Link } from "react-router-dom";
import { Trophy, Timer, ListChecks, Code2, Target } from "lucide-react";
import { PageHeader, StatCard, EmptyState } from "../components/ui/PageHeader";
import { BarChart } from "../components/charts/BarChart";
import { EXAMS } from "../data/exams/exams";
import { PRACTICE_MCQ_MAP } from "../data/practice/mcq";
import { EXERCISES } from "../data/practice/exercises";
import { TOPICS } from "../data/sources";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";
import { conceptEvidence, conceptStats, examDifficultyAverages, topicMastery } from "../lib/analytics";
import { formatDuration } from "../exam/engine";
import { DifficultyChip, Chip } from "../components/ui/Chip";

export function ResultsPage() {
  const attempts = useExams((s) => s.attempts);
  const { practice, exercises } = useProgress();
  const submitted = attempts.filter((a) => a.status === "submitted" && a.result).sort((a, b) => (b.submittedAt ?? 0) - (a.submittedAt ?? 0));
  const avg = submitted.length ? Math.round((submitted.reduce((s, a) => s + a.result!.percentage, 0) / submitted.length) * 10) / 10 : null;
  const best = submitted.reduce<number | null>((m, a) => (m === null ? a.result!.percentage : Math.max(m, a.result!.percentage)), null);
  const byDiff = examDifficultyAverages(attempts);
  const stats = conceptStats(conceptEvidence(practice, exercises, attempts));

  const bestPerExam = EXAMS.map((e) => {
    const s = submitted.filter((a) => a.examId === e.id);
    const b = s.length ? Math.max(...s.map((a) => a.result!.percentage)) : null;
    return { label: `Exam ${e.number} (${e.difficulty})`, value: b, detail: b === null ? "Not taken yet" : `${b}% best of ${s.length} attempt(s)` };
  });

  const practiceByTopic = TOPICS.map((t) => {
    const recs = Object.entries(practice).filter(([id]) => PRACTICE_MCQ_MAP[id]?.topicId === t.id);
    const ok = recs.filter(([, r]) => r.lastCorrect).length;
    return { label: `Topic ${t.number}`, value: recs.length ? Math.round((ok / recs.length) * 100) : null, detail: recs.length ? `${ok} of ${recs.length} correct (latest answers)` : "No answers yet" };
  });

  const answered = Object.keys(practice).length;
  const correct = Object.values(practice).filter((r) => r.lastCorrect).length;
  const solved = EXERCISES.filter((e) => exercises[e.id]?.passed).length;

  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader eyebrow="My Results" title="Your performance" description="Everything here is calculated from your own answers in this browser." />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Exams submitted" value={submitted.length} icon={<Timer size={18} />} sub={avg !== null ? `Average ${avg}%` : "No exams yet"} />
        <StatCard label="Best exam score" value={best !== null ? `${best}%` : "—"} icon={<Trophy size={18} />} />
        <StatCard label="Practice accuracy" value={answered ? `${Math.round((correct / answered) * 100)}%` : "—"} sub={`${correct}/${answered} correct (latest answers)`} icon={<ListChecks size={18} />} />
        <StatCard label="Coding exercises solved" value={`${solved}/${EXERCISES.length}`} icon={<Code2 size={18} />} />
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {(["easy", "medium", "hard"] as const).map((d) => (
          <div key={d} className="card flex items-center justify-between p-4">
            <div>
              <p className="label">Average score · {d}</p>
              <p className="mt-1 text-2xl font-semibold tabular-nums">{byDiff[d].avg !== null ? `${byDiff[d].avg}%` : "—"}</p>
              <p className="text-xs text-muted">{byDiff[d].count} attempt(s)</p>
            </div>
            <DifficultyChip difficulty={d} />
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card p-5">
          <BarChart title="Best score per exam" data={bestPerExam} emptyLabel="Not taken yet" />
        </div>
        <div className="card p-5">
          <BarChart title="Practice accuracy by topic" data={practiceByTopic} emptyLabel="No answers yet" />
        </div>
      </div>

      <section className="card p-5" aria-labelledby="mastery-h">
        <h2 id="mastery-h" className="flex items-center gap-2 font-semibold">
          <Target size={17} /> Topic mastery estimates
        </h2>
        <p className="mt-1 text-xs text-subtle">A simple estimate combining your latest practice answers, best exercise scores and exam points for each topic. It needs at least 3 pieces of evidence and is a study guide, not a grade.</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {TOPICS.map((t) => {
            const m = topicMastery(stats, t.id);
            return (
              <div key={t.id} className="rounded-xl bg-surface-2 p-3">
                <p className="text-sm font-medium">Topic {t.number}: {t.shortTitle}</p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">{m.mastery === null ? "—" : `${Math.round(m.mastery * 100)}%`}</p>
                <p className="text-xs text-muted">{m.mastery === null ? `Not enough evidence yet (${m.n} item(s))` : `based on ${m.n} answer(s)`}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="card p-5" aria-labelledby="hist-h">
        <h2 id="hist-h" className="mb-3 font-semibold">
          Exam history
        </h2>
        {submitted.length === 0 ? (
          <EmptyState title="No exams submitted yet">
            <Link to="/exams" className="btn-primary mt-2">
              Go to the Exam Simulator
            </Link>
          </EmptyState>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] text-sm">
              <thead>
                <tr className="border-b border-line text-left text-xs text-subtle">
                  <th className="py-2 font-medium">Exam</th>
                  <th className="py-2 font-medium">Submitted</th>
                  <th className="py-2 text-right font-medium">Score</th>
                  <th className="py-2 text-right font-medium">Time</th>
                  <th className="py-2" />
                </tr>
              </thead>
              <tbody>
                {submitted.map((a) => {
                  const e = EXAMS.find((x) => x.id === a.examId);
                  return (
                    <tr key={a.id} className="border-b border-line/60">
                      <td className="py-2">
                        Exam {e?.number}: {e?.title} {a.autoSubmitted && <Chip tone="warning">time ran out</Chip>}
                      </td>
                      <td className="py-2 text-muted">{new Date(a.submittedAt ?? a.deadline).toLocaleString()}</td>
                      <td className="py-2 text-right tabular-nums">
                        {a.result!.score}/{a.result!.maxScore} ({a.result!.percentage}%)
                      </td>
                      <td className="py-2 text-right tabular-nums">{formatDuration(a.result!.timeSpentMs)}</td>
                      <td className="py-2 text-right">
                        <Link to={`/exams/attempt/${a.id}/review`} className="btn-ghost btn-sm">
                          Review
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
