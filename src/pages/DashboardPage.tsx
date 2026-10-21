import { Link } from "react-router-dom";
import clsx from "clsx";
import { Activity, ArrowRight, BookOpen, CheckCircle2, Circle, Gauge, ListChecks, TerminalSquare, Timer, TriangleAlert } from "lucide-react";
import { Chip } from "../components/ui/Chip";
import { Logo } from "../components/ui/Logo";
import { ProgressRing } from "../components/ui/ProgressRing";
import { TOPICS } from "../data/sources";
import { LESSONS } from "../data/lessons/index";
import { EXERCISES } from "../data/practice/exercises";
import { PRACTICE_MCQS } from "../data/practice/mcq";
import { EXAMS } from "../data/exams/exams";
import { CONCEPT_MAP } from "../data/concepts";
import { useProgress } from "../store/progressStore";
import { useExams } from "../store/examStore";
import { allReadiness, conceptEvidence, conceptStats, lessonForConcept, lessonsForTopic, topicMastery, weakConcepts } from "../lib/analytics";
import { TOPIC_STYLE } from "../lib/topicStyle";
import { useNow } from "../lib/useNow";
import { formatDuration, remainingMs } from "../exam/engine";

const READY = {
  ready: { text: "Ready", tone: "success" as const },
  almost: { text: "Almost there", tone: "warning" as const },
  "not-yet": { text: "Not yet", tone: "neutral" as const },
};

export function DashboardPage() {
  const { completedLessons, practice, exercises, activity, lessonVisits } = useProgress();
  const attempts = useExams((s) => s.attempts);
  const now = useNow(1000);
  const stats = conceptStats(conceptEvidence(practice, exercises, attempts));
  const weak = weakConcepts(stats, 4);
  const readiness = allReadiness(completedLessons, practice, exercises);
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
  const started = doneLessons > 0 || answered > 0 || submitted.length > 0;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* hero */}
      <section className="relative overflow-hidden rounded-[1.75rem] bg-hero px-6 py-7 text-hero-text sm:px-9 sm:py-9" aria-label="Welcome">
        <div className="pointer-events-none absolute -right-12 -bottom-14 opacity-25 sm:top-1/2 sm:right-8 sm:bottom-auto sm:-translate-y-1/2 sm:opacity-100" aria-hidden>
          <Logo size={240} className="rotate-[8deg] drop-shadow-[0_20px_60px_rgba(107,79,250,0.55)] max-sm:h-48 max-sm:w-48" />
        </div>
        <div className="relative max-w-xl space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-lavender">Introduction to Programming · Python</p>
          <h1 className="font-display text-3xl leading-tight font-bold sm:text-[2.6rem]">{started ? "Welcome back. Keep the streak going." : "Learn it, run it, then test yourself."}</h1>
          <p className="max-w-md text-[15px] leading-relaxed text-hero-text/80">
            Lessons built from your course slides, a real Python lab in the browser, and six timed practice exams.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {continueLesson && (
              <Link to={`/learn/${continueLesson.id}`} className="btn bg-white px-4 py-2.5 text-[#2b1e86] hover:bg-lavender">
                <BookOpen size={16} /> {started ? `Continue: ${continueLesson.title}` : "Start the first lesson"}
              </Link>
            )}
            <Link to="/lab" className="btn border border-white/25 px-4 py-2.5 text-hero-text hover:bg-white/10">
              <TerminalSquare size={16} /> Open the Python lab
            </Link>
          </div>
        </div>
      </section>

      {active && (
        <Link to={`/exams/attempt/${active.id}`} className="flex items-center justify-between gap-3 rounded-2xl border border-warning/50 bg-warning-soft p-4">
          <span className="flex items-center gap-2 font-medium text-warning-text">
            <Timer size={18} /> Exam {EXAMS.find((e) => e.id === active.examId)?.number} is in progress
          </span>
          <span className="text-sm text-warning-text tabular-nums">{formatDuration(remainingMs(active, now))} left · Resume →</span>
        </Link>
      )}

      {/* stats */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Your progress">
        <Stat label="Lessons" value={`${doneLessons}/${LESSONS.length}`} ring={{ v: doneLessons, m: LESSONS.length }} />
        <Stat label="Practice accuracy" value={answered ? `${Math.round((correct / answered) * 100)}%` : "—"} sub={`${answered} of ${PRACTICE_MCQS.length} answered`} ring={{ v: answered ? correct : 0, m: answered || 1, color: "var(--t3)" }} />
        <Stat label="Exercises solved" value={`${solved}/${EXERCISES.length}`} ring={{ v: solved, m: EXERCISES.length, color: "var(--t4)" }} />
        <Stat label="Best exam" value={best !== null ? `${best}%` : "—"} sub={`${submitted.length} exam(s) taken`} ring={{ v: best ?? 0, m: 100, color: "var(--success)" }} />
      </section>

      {/* topics */}
      <section aria-labelledby="topics-h" className="space-y-3">
        <div className="flex items-end justify-between">
          <h2 id="topics-h" className="font-display text-xl font-semibold">
            Your topics
          </h2>
          <Link to="/learn" className="text-sm font-medium text-primary-text hover:underline">
            All lessons →
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {TOPICS.map((t) => {
            const lessons = lessonsForTopic(t.id);
            const done = lessons.filter((l) => completedLessons[l.id]).length;
            const m = topicMastery(stats, t.id);
            const next = lessons.find((l) => !completedLessons[l.id]) ?? lessons[0];
            const st = TOPIC_STYLE[t.id];
            return (
              <article key={t.id} className="card flex flex-col gap-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <span className={clsx("chip border-transparent", st.chip)}>Topic {t.number}</span>
                    <h3 className="mt-2 text-lg leading-snug font-semibold">{t.shortTitle}</h3>
                  </div>
                  <ProgressRing value={done} max={lessons.length || 1} size={58} color={st.color} label={`Topic ${t.number} lessons completed`}>
                    {done}/{lessons.length}
                  </ProgressRing>
                </div>
                <p className="text-sm text-muted">{m.mastery === null ? "Mastery estimate appears after a few answers." : `Mastery estimate: ${Math.round(m.mastery * 100)}%`}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {next && (
                    <Link to={`/learn/${next.id}`} className="btn-secondary btn-sm min-w-0">
                      <BookOpen size={13} /> <span className="truncate">{done === lessons.length ? "Review" : "Next"}: {next.title}</span>
                    </Link>
                  )}
                  <Link to={`/practice?topic=${t.id}`} className="btn-ghost btn-sm">
                    <ListChecks size={13} /> Practise
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* readiness */}
      <section className="card space-y-4 p-5 sm:p-6" aria-labelledby="ready-h">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 id="ready-h" className="flex items-center gap-2 font-display text-xl font-semibold">
              <Gauge size={19} className="text-primary-text" /> Exam Readiness Mode
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-muted">Based on your real work in each topic. It is only guidance: every exam is open at any time.</p>
          </div>
          <Link to="/exams" className="btn-primary btn-sm">
            <Timer size={14} /> Go to exams
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {readiness.map((r) => {
            const t = TOPICS.find((x) => x.id === r.topicId)!;
            return (
              <div key={r.topicId} className="rounded-2xl bg-surface-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <span className={clsx("h-2.5 w-2.5 rounded-full", TOPIC_STYLE[t.id].dot)} /> Topic {t.number}
                  </p>
                  <Chip tone={READY[r.status].tone}>{READY[r.status].text}</Chip>
                </div>
                <ul className="mt-3 space-y-2">
                  {r.items.map((i) => (
                    <li key={i.label} className="flex gap-2 text-xs">
                      {i.met ? <CheckCircle2 size={15} className="mt-px shrink-0 text-success" /> : <Circle size={15} className="mt-px shrink-0 text-subtle" />}
                      <span>
                        <span className="font-medium text-ink">{i.label}</span>
                        <span className="block text-muted">{i.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card space-y-3 p-5" aria-labelledby="rev-h">
          <h2 id="rev-h" className="flex items-center gap-2 font-display text-lg font-semibold">
            <TriangleAlert size={17} className="text-warning" /> Areas to revise
          </h2>
          {weak.length === 0 ? (
            <p className="text-sm text-muted">Nothing flagged yet. After you answer questions, submit exercises or take an exam, weak concepts show up here with the slides to review.</p>
          ) : (
            <ul className="space-y-2">
              {weak.map((w) => {
                const lesson = lessonForConcept(w.conceptId);
                const c = CONCEPT_MAP[w.conceptId];
                return (
                  <li key={w.conceptId} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-surface-2 p-3 text-sm">
                    <span className="min-w-0">
                      <span className="block font-medium text-ink">{c?.title}</span>
                      <span className="text-xs text-muted">
                        {Math.round((w.mastery ?? 0) * 100)}% on {w.n} answer(s) · slides {c?.sources[0].units[0]}–{c?.sources[0].units[c.sources[0].units.length - 1]}
                      </span>
                    </span>
                    <span className="flex gap-1">
                      {lesson && (
                        <Link to={`/learn/${lesson.id}`} className="btn-ghost btn-sm">
                          Lesson
                        </Link>
                      )}
                      <Link to={`/practice?concept=${w.conceptId}`} className="btn-ghost btn-sm">
                        Practise
                      </Link>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
        <section className="card space-y-3 p-5" aria-labelledby="act-h">
          <h2 id="act-h" className="flex items-center gap-2 font-display text-lg font-semibold">
            <Activity size={17} className="text-primary-text" /> Recent activity
          </h2>
          {activity.length === 0 ? (
            <p className="text-sm text-muted">Nothing yet. Your lessons, answers and exams will appear here.</p>
          ) : (
            <ul className="space-y-2.5 text-sm">
              {activity.slice(0, 6).map((a, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className={clsx("mt-1.5 h-2 w-2 shrink-0 rounded-full", a.kind === "exam" ? "bg-warning" : a.kind === "exercise" ? "bg-t4" : a.kind === "lesson" ? "bg-success" : "bg-primary")} />
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

      <section className="grid gap-3 sm:grid-cols-3" aria-label="Shortcuts">
        {[
          { to: "/lab", title: "Python lab", text: "A notebook like Jupyter, in your browser.", icon: TerminalSquare, tone: "bg-t2-soft text-t2-text" },
          { to: "/practice", title: "Practice questions", text: `${PRACTICE_MCQS.length} questions with explanations.`, icon: ListChecks, tone: "bg-t3-soft text-t3-text" },
          { to: "/exams", title: "Exam simulator", text: "Six 30-minute exams: easy to hard.", icon: Timer, tone: "bg-t4-soft text-t4-text" },
        ].map(({ to, title, text, icon: Icon, tone }) => (
          <Link key={to} to={to} className="card group flex items-center gap-3 p-4 transition-transform hover:-translate-y-0.5">
            <span className={clsx("grid h-11 w-11 shrink-0 place-items-center rounded-2xl", tone)}>
              <Icon size={20} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-ink">{title}</span>
              <span className="block text-sm text-muted">{text}</span>
            </span>
            <ArrowRight size={16} className="text-subtle transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </section>
    </div>
  );
}

function Stat({ label, value, sub, ring }: { label: string; value: string; sub?: string; ring: { v: number; m: number; color?: string } }) {
  return (
    <div className="card flex items-center gap-3 p-3.5 sm:p-4">
      <span className="max-sm:hidden">
        <ProgressRing value={ring.v} max={ring.m} size={46} stroke={5} color={ring.color} label={label} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-subtle">{label}</p>
        <p className="font-display text-xl leading-tight font-bold tabular-nums">{value}</p>
        {sub && <p className="truncate text-[11px] text-muted">{sub}</p>}
      </div>
    </div>
  );
}
