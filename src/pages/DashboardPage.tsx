import { Link } from "react-router-dom";
import clsx from "clsx";
import { ArrowRight, BookOpen, CheckCircle2, Circle, Code2, GraduationCap, ListChecks, Timer, Trophy, TriangleAlert, Activity, Gauge } from "lucide-react";
import { PageHeader, StatCard } from "../components/ui/PageHeader";
import { ProgressBar } from "../components/ui/ProgressBar";
import { Chip } from "../components/ui/Chip";
import { TOPICS } from "../data/sources";
import { LESSONS } from "../data/lessons/index";
import { EXERCISES } from "../data/practice/exercises";
import { PRACTICE_MCQS } from "../data/practice/mcq";
import { EXAMS } from "../data/exams/exams";
import { CONCEPT_MAP } from "../data/concepts";
import { useProgress } from "../store/progressStore";
import { useExams } from "../store/examStore";
import { allReadiness, conceptEvidence, conceptStats, lessonForConcept, lessonsForTopic, topicMastery, weakConcepts } from "../lib/analytics";
import { useNow } from "../lib/useNow";
import { formatDuration, remainingMs } from "../exam/engine";

const READY_TEXT = { ready: "Ready", almost: "Almost ready", "not-yet": "Not yet" };

export function DashboardPage() {
  const { completedLessons, practice, exercises, activity, lessonVisits } = useProgress();
  const attempts = useExams((s) => s.attempts);
  const now = useNow(1000);
  const stats = conceptStats(conceptEvidence(practice, exercises, attempts));
  const weak = weakConcepts(stats, 4);
  const readiness = allReadiness(completedLessons, practice, exercises);
  const readyCount = readiness.filter((r) => r.status === "ready").length;
  const submitted = attempts.filter((a) => a.status === "submitted" && a.result);
  const best = submitted.reduce<number | null>((m, a) => (m === null ? a.result!.percentage : Math.max(m, a.result!.percentage)), null);
  const active = attempts.find((a) => a.status === "in_progress" && a.deadline > now);
  const answered = Object.keys(practice).length;
  const correct = Object.values(practice).filter((r) => r.lastCorrect).length;
  const solved = EXERCISES.filter((e) => exercises[e.id]?.passed).length;
  const doneLessons = LESSONS.filter((l) => completedLessons[l.id]).length;
  const lastLessonId = Object.entries(lessonVisits).sort((a, b) => b[1] - a[1])[0]?.[0];
  const nextLesson = LESSONS.find((l) => !completedLessons[l.id]);
  const continueLesson = lastLessonId && !completedLessons[lastLessonId] ? LESSONS.find((l) => l.id === lastLessonId) : nextLesson;

  return (
    <div className="space-y-6 animate-fade-up">
      <PageHeader
        eyebrow="Dashboard"
        title="Welcome to Python Mastery Lab"
        description="Learn each topic, practise with real Python, then test yourself with timed exams. Everything is based on your course slides and exercises."
        actions={
          continueLesson && (
            <Link to={`/learn/${continueLesson.id}`} className="btn-primary">
              <BookOpen size={16} /> {doneLessons === 0 ? "Start learning" : "Continue learning"}
            </Link>
          )
        }
      />

      {active && (
        <Link to={`/exams/attempt/${active.id}`} className="card flex items-center justify-between gap-3 border-warning/50 bg-warning-soft p-4">
          <span className="flex items-center gap-2 font-medium text-warning-text">
            <Timer size={18} /> {EXAMS.find((e) => e.id === active.examId)?.title} is in progress
          </span>
          <span className="text-sm text-warning-text tabular-nums">{formatDuration(remainingMs(active, now))} left · Resume →</span>
        </Link>
      )}

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Lessons completed" value={`${doneLessons}/${LESSONS.length}`} sub={`${LESSONS.length - doneLessons} remaining`} icon={<GraduationCap size={18} />} />
        <StatCard label="Practice questions" value={answered} sub={answered ? `${Math.round((correct / answered) * 100)}% correct (latest)` : `${PRACTICE_MCQS.length} available`} icon={<ListChecks size={18} />} />
        <StatCard label="Exercises solved" value={`${solved}/${EXERCISES.length}`} icon={<Code2 size={18} />} />
        <StatCard label="Exams" value={submitted.length} sub={best !== null ? `Best score ${best}%` : "None taken yet"} icon={<Trophy size={18} />} />
      </div>

      <section className="card space-y-4 p-5" aria-labelledby="ready-h">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="ready-h" className="flex items-center gap-2 text-lg font-semibold">
              <Gauge size={18} className="text-primary-text" /> Exam Readiness Mode
            </h2>
            <p className="mt-1 text-sm text-muted">Based on your actual work: lessons completed, practice accuracy and solved coding exercises per topic. It is guidance only — you can take any exam at any time.</p>
          </div>
          <Chip tone={readyCount === readiness.length ? "success" : readyCount > 0 ? "warning" : "neutral"}>
            {readyCount}/{readiness.length} topics ready
          </Chip>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {readiness.map((r) => {
            const t = TOPICS.find((x) => x.id === r.topicId)!;
            return (
              <div key={r.topicId} className="rounded-xl border border-line bg-surface-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">
                    Topic {t.number}: {t.shortTitle}
                  </p>
                  <Chip tone={r.status === "ready" ? "success" : r.status === "almost" ? "warning" : "neutral"}>{READY_TEXT[r.status]}</Chip>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {r.items.map((i) => (
                    <li key={i.label} className="flex gap-2 text-xs">
                      {i.met ? <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-success" /> : <Circle size={14} className="mt-0.5 shrink-0 text-subtle" />}
                      <span>
                        <span className="text-ink">{i.label}</span> <span className="text-muted">— {i.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link to="/exams" className="btn-secondary btn-sm">
            <Timer size={14} /> Go to exams
          </Link>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="card space-y-4 p-5 lg:col-span-2" aria-labelledby="topics-h">
          <h2 id="topics-h" className="font-semibold">
            Topics
          </h2>
          {TOPICS.map((t) => {
            const lessons = lessonsForTopic(t.id);
            const done = lessons.filter((l) => completedLessons[l.id]).length;
            const m = topicMastery(stats, t.id);
            const next = lessons.find((l) => !completedLessons[l.id]) ?? lessons[0];
            return (
              <div key={t.id} className="rounded-xl bg-surface-2 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium">
                    Topic {t.number}: {t.title}
                  </p>
                  <span className="text-xs text-muted">{m.mastery === null ? "Mastery: not enough data yet" : `Mastery estimate: ${Math.round(m.mastery * 100)}%`}</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <ProgressBar value={done} max={lessons.length || 1} label={`Topic ${t.number} lesson progress`} tone="success" />
                  <span className="shrink-0 text-xs text-muted tabular-nums">
                    {done}/{lessons.length} lessons
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {next && (
                    <Link to={`/learn/${next.id}`} className="btn-secondary btn-sm">
                      <BookOpen size={13} /> {done === lessons.length ? "Review" : "Next"}: {next.title}
                    </Link>
                  )}
                  <Link to={`/practice?topic=${t.id}`} className="btn-ghost btn-sm">
                    <ListChecks size={13} /> Practice
                  </Link>
                </div>
              </div>
            );
          })}
        </section>

        <div className="space-y-4">
          <section className="card space-y-3 p-5" aria-labelledby="rev-h">
            <h2 id="rev-h" className="flex items-center gap-2 font-semibold">
              <TriangleAlert size={16} className="text-warning" /> Areas to revise
            </h2>
            {weak.length === 0 ? (
              <p className="text-sm text-muted">No weak areas detected yet. Recommendations appear after you answer practice questions, submit exercises or take an exam.</p>
            ) : (
              <ul className="space-y-2">
                {weak.map((w) => {
                  const lesson = lessonForConcept(w.conceptId);
                  const c = CONCEPT_MAP[w.conceptId];
                  return (
                    <li key={w.conceptId} className="rounded-xl bg-surface-2 p-3 text-sm">
                      <p className="font-medium text-ink">{c?.title}</p>
                      <p className="text-xs text-muted">
                        {Math.round((w.mastery ?? 0) * 100)}% on {w.n} answer(s) · review {c?.sources[0] ? `slides ${c.sources[0].units[0]}–${c.sources[0].units[c.sources[0].units.length - 1]}` : "the lesson"}
                      </p>
                      <div className="mt-1.5 flex gap-1">
                        {lesson && (
                          <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
                            Lesson
                          </Link>
                        )}
                        <Link to={`/practice?concept=${w.conceptId}`} className="btn-ghost btn-sm">
                          Practice
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
          <section className="card space-y-3 p-5" aria-labelledby="act-h">
            <h2 id="act-h" className="flex items-center gap-2 font-semibold">
              <Activity size={16} /> Recent activity
            </h2>
            {activity.length === 0 ? (
              <p className="text-sm text-muted">Nothing yet — start with the first lesson.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {activity.slice(0, 7).map((a, i) => (
                  <li key={i} className="flex gap-2">
                    <span className={clsx("mt-1.5 h-2 w-2 shrink-0 rounded-full", a.kind === "exam" ? "bg-warning" : a.kind === "exercise" ? "bg-accent" : a.kind === "lesson" ? "bg-success" : "bg-primary")} />
                    <span className="min-w-0">
                      {a.link ? (
                        <Link to={a.link} className="text-ink hover:underline">
                          {a.text}
                        </Link>
                      ) : (
                        <span className="text-ink">{a.text}</span>
                      )}
                      <span className="block text-xs text-subtle">{new Date(a.at).toLocaleString()}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>

      <section className="grid gap-3 md:grid-cols-3">
        {[
          { to: "/lab", title: "Python Coding Lab", text: "A Jupyter-style notebook and script editor running real Python.", icon: Code2 },
          { to: "/practice", title: "Practice questions", text: `${PRACTICE_MCQS.length} multiple-choice questions with explanations.`, icon: ListChecks },
          { to: "/exams", title: "Exam simulator", text: "Six 30-minute exams: 2 easy, 2 medium, 2 hard.", icon: Timer },
        ].map(({ to, title, text, icon: Icon }) => (
          <Link key={to} to={to} className="card group flex items-start gap-3 p-4 transition-colors hover:border-primary">
            <span className="rounded-xl bg-accent-soft p-2 text-accent-text">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-1 font-medium text-ink">
                {title} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="text-sm text-muted">{text}</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
