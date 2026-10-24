import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, BookOpenText, Calculator, FileText, FlaskConical, Layers, ListChecks, NotebookPen, Timer, Zap } from "lucide-react";
import { ProgressBar, ProgressRing } from "../components/ui/ProgressBar";
import { StatCard } from "../components/ui/PageHeader";
import { EXAM, TOPIC_BY_ID, UNITS } from "../data/course";
import { FLASHCARDS } from "../data/flashcards";
import { LESSONS, lessonsForUnit } from "../data/lessons";
import { QUESTIONS } from "../data/questions";
import { readiness, topicMastery, unitMastery, weakTopics } from "../lib/analytics";
import { UNIT_COLOR } from "../lib/unitStyle";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";

export function DashboardPage() {
  const progress = useProgress();
  const attempts = useExams((s) => s.attempts);
  const topic = topicMastery(progress.questions, attempts);
  const units = unitMastery(topic);
  const weak = weakTopics(topic, 4);
  const doneLessons = Object.keys(progress.completedLessons).length;
  const ready = readiness(doneLessons, LESSONS.length, topic, attempts);
  const submitted = attempts.filter((a) => a.result);
  const best = submitted.length ? Math.max(...submitted.map((a) => a.result!.score)) : null;
  const openMistakes = Object.values(progress.mistakes).filter((m) => !m.resolved).length;
  const nextLesson = LESSONS.find((l) => !progress.completedLessons[l.id]);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-[#1e3a8a] bg-hero p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#2563eb]/40 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-[#0ea5e9]/25 blur-3xl" aria-hidden />
        <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-[#7dd3fc] uppercase">{EXAM.title}</p>
            <h1 className="mt-2 font-display text-3xl leading-tight font-bold sm:text-4xl">Information Security Midterm Academy</h1>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#cbd5f5]">
              Everything for CSSY1208 — Chapters 1–4 and Labs 4, 5 and 6 — built only from your lecture slides and Lab Manual, with a source reference on every lesson and question.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to={nextLesson ? `/learn/${nextLesson.id}` : "/learn"} className="btn bg-white text-[#0b1a4a] hover:bg-[#dbeafe]">
                <BookOpenText size={16} /> {nextLesson ? (doneLessons ? "Continue learning" : "Start learning") : "Review lessons"}
              </Link>
              <Link to="/exams" className="btn border border-white/25 bg-white/10 text-white hover:bg-white/20">
                <Timer size={16} /> Take a 20-mark mock exam
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4">
            <ProgressRing value={ready} size={88} stroke={9} color="#38bdf8" label={`Study readiness ${ready} percent`}>
              <span className="font-display text-xl font-bold">{ready}%</span>
            </ProgressRing>
            <div className="text-sm">
              <p className="font-semibold">Study readiness</p>
              <p className="max-w-[12rem] text-xs text-[#cbd5f5]">Guidance from lessons, practice and mocks — not a mark prediction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam facts */}
      <section aria-labelledby="facts" className="card p-5">
        <h2 id="facts" className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
          <FileText size={18} className="text-electric" /> Official exam notice
        </h2>
        <ul className="grid gap-2 text-sm sm:grid-cols-2">
          <li className="rounded-xl bg-surface-2 p-3"><b>{EXAM.marks} marks</b> · {EXAM.format}</li>
          <li className="rounded-xl bg-surface-2 p-3">Theory: <b>{EXAM.theory}</b></li>
          <li className="rounded-xl bg-surface-2 p-3">{EXAM.labs}</li>
          <li className="rounded-xl bg-surface-2 p-3"><b>{EXAM.alphabet}</b></li>
          <li className="flex items-center gap-2 rounded-xl bg-warning-soft p-3 text-warning-text sm:col-span-2">
            <Calculator size={16} /> <b>{EXAM.calculator}</b> Practise mod 26 by hand in No-Calculator Mode.
          </li>
        </ul>
        <p className="mt-3 text-xs text-subtle">The question distribution and duration were not announced. Mock-exam layouts and timers on this site are practice settings, not official rules.</p>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4" aria-label="Your numbers">
        <StatCard label="Lessons completed" value={`${doneLessons}/${LESSONS.length}`} icon={<BookOpenText size={18} />} />
        <StatCard label="Questions answered" value={Object.keys(progress.questions).length} sub={`of ${QUESTIONS.length} in the bank`} icon={<ListChecks size={18} />} />
        <StatCard label="Best mock exam" value={best === null ? "—" : `${best}/20`} sub={`${submitted.length} attempt(s)`} icon={<Timer size={18} />} />
        <StatCard label="Open mistakes" value={openMistakes} sub={<Link to="/mistakes" className="underline">Review them</Link>} icon={<NotebookPen size={18} />} />
      </section>

      {/* Units */}
      <section aria-labelledby="units-h">
        <div className="mb-3 flex items-end justify-between gap-2">
          <h2 id="units-h" className="font-display text-xl font-bold">Your syllabus</h2>
          <Link to="/progress" className="text-sm text-primary-text hover:underline">Detailed progress</Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {UNITS.map((u) => {
            const ls = lessonsForUnit(u.id);
            const done = ls.filter((l) => progress.completedLessons[l.id]).length;
            const m = units[u.id];
            return (
              <Link key={u.id} to={`/learn#${u.id}`} className="card group flex flex-col gap-3 p-4 transition-colors hover:border-line-strong">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold tracking-wider uppercase" style={{ color: UNIT_COLOR[u.id] }}>{u.kind === "chapter" ? `Chapter ${u.number}` : `Lab ${u.number}`}</span>
                  <ArrowRight size={16} className="text-subtle transition-transform group-hover:translate-x-0.5" />
                </div>
                <p className="font-semibold leading-snug">{u.title}</p>
                <div className="mt-auto space-y-1.5 text-xs text-muted">
                  <div className="flex justify-between"><span>Lessons</span><span>{done}/{ls.length}</span></div>
                  <ProgressBar value={done} max={ls.length} label={`${u.title} lessons`} color={UNIT_COLOR[u.id]} />
                  <div className="flex justify-between"><span>Mastery</span><span>{m.score === null ? "not practised" : `${Math.round(m.score * 100)}%`}</span></div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
            <AlertTriangle size={18} className="text-warning" /> Weak topics
          </h2>
          {weak.length ? (
            <ul className="space-y-2">
              {weak.map((w) => (
                <li key={w.topicId} className="flex items-center justify-between gap-2 text-sm">
                  <span>{TOPIC_BY_ID[w.topicId].title}</span>
                  <span className="font-mono text-danger-text">{Math.round((w.score ?? 0) * 100)}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted">No weak topics yet. Answer some practice questions and they will appear here.</p>
          )}
          <Link to="/practice?mode=weak" className="btn-secondary mt-4">Practise weak topics</Link>
        </div>
        <div className="card p-5">
          <h2 className="mb-3 font-display text-lg font-bold">Quick start</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              { to: "/crypto?tab=alphabet", icon: FlaskConical, t: "Build the alphabet table" },
              { to: "/crypto?tab=nocalc", icon: Calculator, t: "No-Calculator drill" },
              { to: "/flashcards", icon: Layers, t: `Flashcards (${FLASHCARDS.length})` },
              { to: "/revision", icon: Zap, t: "Last-minute revision" },
            ].map(({ to, icon: Icon, t }) => (
              <Link key={to} to={to} className="flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 py-3 text-sm font-medium hover:border-primary">
                <Icon size={17} className="text-electric" /> {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {progress.activity.length > 0 && (
        <section className="card p-5">
          <h2 className="mb-3 font-display text-lg font-bold">Recent activity</h2>
          <ul className="space-y-1.5 text-sm">
            {progress.activity.slice(0, 6).map((a, i) => (
              <li key={i} className="flex justify-between gap-3">
                <span className="min-w-0 truncate">{a.link ? <Link to={a.link} className="hover:underline">{a.text}</Link> : a.text}</span>
                <span className="shrink-0 text-xs text-subtle">{new Date(a.at).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
