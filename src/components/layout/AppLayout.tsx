import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  BarChart3,
  GraduationCap,
  LayoutDashboard,
  Library,
  ListChecks,
  Menu,
  RotateCcw,
  ScrollText,
  Settings,
  TerminalSquare,
  Timer,
  X,
} from "lucide-react";
import { useExams } from "../../store/examStore";
import { useNow } from "../../lib/useNow";
import { formatDuration, remainingMs } from "../../exam/engine";
import { EXAMS } from "../../data/exams/exams";
import { useRuntimeState } from "../code/useRunner";
import { RuntimeBadge } from "../code/RuntimeBadge";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/learn", label: "Learn", icon: GraduationCap },
  { to: "/summaries", label: "Topic Summaries", icon: ScrollText },
  { to: "/lab", label: "Python Coding Lab", icon: TerminalSquare },
  { to: "/practice", label: "Practice Questions", icon: ListChecks },
  { to: "/exams", label: "Exam Simulator", icon: Timer },
  { to: "/results", label: "My Results", icon: BarChart3 },
  { to: "/mistakes", label: "Mistake Review", icon: RotateCcw },
  { to: "/sources", label: "Curriculum Sources", icon: Library },
  { to: "/settings", label: "Settings", icon: Settings },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2.5 rounded-xl px-2 py-1.5" aria-label="Python Mastery Lab home">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/30">
        <TerminalSquare size={19} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-ink">Python Mastery Lab</span>
        <span className="block text-[11px] text-subtle">Intro to Programming</span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-0.5">
      {NAV.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            clsx(
              "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
              isActive ? "bg-primary-soft text-primary-text" : "text-muted hover:bg-surface-2 hover:text-ink",
            )
          }
        >
          <Icon size={18} className="shrink-0" aria-hidden />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function ActiveExamBanner() {
  const attempts = useExams((s) => s.attempts);
  const now = useNow(1000);
  const location = useLocation();
  const active = attempts.find((a) => a.status === "in_progress" && a.deadline > now);
  if (!active || location.pathname.startsWith(`/exams/attempt/${active.id}`)) return null;
  const exam = EXAMS.find((e) => e.id === active.examId);
  return (
    <Link
      to={`/exams/attempt/${active.id}`}
      className="flex items-center gap-2 rounded-xl border border-warning/40 bg-warning-soft px-3 py-1.5 text-xs font-medium text-warning-text"
    >
      <Timer size={14} /> {exam?.title ?? "Exam"} in progress · {formatDuration(remainingMs(active, now))} left — return
    </Link>
  );
}

export function AppLayout() {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();
  const runtime = useRuntimeState();
  const firstRender = useRef(true);
  useEffect(() => {
    setDrawer(false);
    // Move focus to the new page for screen readers — but not on first load, so
    // the skip link stays the first Tab stop.
    if (firstRender.current) firstRender.current = false;
    else document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-full lg:grid lg:grid-cols-[264px_1fr]">
      <a href="#main" className="sr-only z-50 rounded-lg bg-primary px-3 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>
      <aside className="sticky top-0 hidden h-screen flex-col gap-4 border-r border-line bg-surface/70 p-4 backdrop-blur lg:flex">
        <Brand />
        <NavList />
        <div className="mt-auto rounded-xl border border-line bg-surface-2 p-3 text-[11px] leading-relaxed text-subtle">
          Self-study simulator. Content is based on your course files: Topics 2–3 and Topic 4 up to slide 18.
        </div>
      </aside>

      {/* mobile top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between gap-2 border-b border-line bg-bg/85 px-4 py-2 backdrop-blur lg:hidden">
        <Brand />
        <button className="btn-ghost" onClick={() => setDrawer(true)} aria-label="Open navigation menu" aria-expanded={drawer}>
          <Menu size={20} />
        </button>
      </div>
      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <div className="absolute inset-0 bg-black/60" onClick={() => setDrawer(false)} />
          <div className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col gap-4 overflow-y-auto border-r border-line bg-surface p-4 animate-fade-up">
            <div className="flex items-center justify-between">
              <Brand />
              <button className="btn-ghost" onClick={() => setDrawer(false)} aria-label="Close navigation menu">
                <X size={20} />
              </button>
            </div>
            <NavList onNavigate={() => setDrawer(false)} />
          </div>
        </div>
      )}

      <div className="min-w-0">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-end gap-2 px-4 pt-4 sm:px-6 lg:px-8">
          <ActiveExamBanner />
          <RuntimeBadge state={runtime} />
        </div>
        <main id="main" tabIndex={-1} className="mx-auto max-w-7xl px-4 pt-4 pb-16 outline-none sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
