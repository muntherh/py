import { useEffect, useRef, useState, type ComponentType } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import {
  BarChart3,
  GraduationCap,
  House,
  Library,
  ListChecks,
  Menu,
  Moon,
  RotateCcw,
  ScrollText,
  Settings,
  Sun,
  TerminalSquare,
  Timer,
  X,
} from "lucide-react";
import { useExams } from "../../store/examStore";
import { useSettings } from "../../store/settingsStore";
import { useNow } from "../../lib/useNow";
import { useResolvedTheme } from "../../lib/useResolvedTheme";
import { formatDuration, remainingMs } from "../../exam/engine";
import { EXAMS } from "../../data/exams/exams";
import { useRuntimeState } from "../code/useRunner";
import { RuntimeBadge } from "../code/RuntimeBadge";
import { Wordmark } from "../ui/Logo";

type Item = { to: string; label: string; short: string; icon: ComponentType<{ size?: number; className?: string }>; end?: boolean };

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Study",
    items: [
      { to: "/", label: "Dashboard", short: "Home", icon: House, end: true },
      { to: "/learn", label: "Learn", short: "Learn", icon: GraduationCap },
      { to: "/summaries", label: "Topic Summaries", short: "Summaries", icon: ScrollText },
    ],
  },
  {
    title: "Practise",
    items: [
      { to: "/lab", label: "Python Coding Lab", short: "Lab", icon: TerminalSquare },
      { to: "/practice", label: "Practice Questions", short: "Practice", icon: ListChecks },
      { to: "/exams", label: "Exam Simulator", short: "Exams", icon: Timer },
    ],
  },
  {
    title: "Progress",
    items: [
      { to: "/results", label: "My Results", short: "Results", icon: BarChart3 },
      { to: "/mistakes", label: "Mistake Review", short: "Mistakes", icon: RotateCcw },
    ],
  },
  {
    title: "About",
    items: [
      { to: "/sources", label: "Curriculum Sources", short: "Sources", icon: Library },
      { to: "/settings", label: "Settings", short: "Settings", icon: Settings },
    ],
  },
];
const ALL = GROUPS.flatMap((g) => g.items);
const TABS = ["/", "/learn", "/lab", "/practice", "/exams"];

function ThemeToggle({ className }: { className?: string }) {
  const theme = useResolvedTheme();
  const set = useSettings((s) => s.set);
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button className={clsx("btn-ghost btn-sm rounded-full", className)} onClick={() => set({ theme: next })} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function SideNav() {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-5">
      {GROUPS.map((g) => (
        <div key={g.title}>
          <p className="mb-1.5 px-3 text-[11px] font-semibold tracking-[0.08em] text-subtle uppercase">{g.title}</p>
          <div className="flex flex-col gap-0.5">
            {g.items.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-3 rounded-xl px-3 py-2 text-[14px] font-medium transition-colors",
                    isActive ? "bg-primary-btn text-white shadow-sm shadow-primary/30" : "text-muted hover:bg-surface-2 hover:text-ink",
                  )
                }
              >
                <Icon size={18} className="shrink-0" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
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
    <Link to={`/exams/attempt/${active.id}`} className="mb-4 flex items-center gap-2 rounded-2xl border border-warning/40 bg-warning-soft px-4 py-2.5 text-sm font-medium text-warning-text">
      <Timer size={16} /> Exam {exam?.number} in progress · {formatDuration(remainingMs(active, now))} left
      <span className="ml-auto underline">Return</span>
    </Link>
  );
}

function MoreSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const extra = ALL.filter((i) => !TABS.includes(i.to));
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="More pages">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-line bg-surface px-4 pt-3 animate-fade-up" style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 20px)" }}>
        <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-surface-3" />
        <div className="mb-2 flex items-center justify-between">
          <p className="font-display text-lg font-semibold">More</p>
          <button className="btn-ghost btn-sm" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {extra.map(({ to, short, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                clsx("flex flex-col items-center gap-1.5 rounded-2xl px-2 py-3.5 text-xs font-medium", isActive ? "bg-primary-soft text-primary-text" : "bg-surface-2 text-muted")
              }
            >
              <Icon size={20} />
              {short}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function BottomTabs({ onMore, moreActive }: { onMore: () => void; moreActive: boolean }) {
  const tabs = TABS.map((t) => ALL.find((i) => i.to === t)!);
  return (
    <nav
      aria-label="Tab bar"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)", paddingLeft: "env(safe-area-inset-left, 0px)", paddingRight: "env(safe-area-inset-right, 0px)" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-6">
        {tabs.map(({ to, short, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => clsx("flex flex-col items-center gap-0.5 py-2 text-[10.5px] font-semibold", isActive ? "text-primary-text" : "text-subtle")}>
            {({ isActive }) => (
              <>
                <span className={clsx("grid h-7 w-12 place-items-center rounded-full transition-colors", isActive && "bg-primary-soft")}>
                  <Icon size={19} />
                </span>
                {short}
              </>
            )}
          </NavLink>
        ))}
        <button onClick={onMore} className={clsx("flex flex-col items-center gap-0.5 py-2 text-[10.5px] font-semibold", moreActive ? "text-primary-text" : "text-subtle")} aria-label="More pages">
          <span className={clsx("grid h-7 w-12 place-items-center rounded-full", moreActive && "bg-primary-soft")}>
            <Menu size={19} />
          </span>
          More
        </button>
      </div>
    </nav>
  );
}

export function AppLayout() {
  const [more, setMore] = useState(false);
  const location = useLocation();
  const runtime = useRuntimeState();
  const firstRender = useRef(true);
  const inExam = /^\/exams\/attempt\/[^/]+$/.test(location.pathname);
  const moreActive = !TABS.some((t) => (t === "/" ? location.pathname === "/" : location.pathname.startsWith(t)));

  useEffect(() => {
    setMore(false);
    // Move focus to the new page for screen readers — but not on first load, so
    // the skip link stays the first Tab stop.
    if (firstRender.current) firstRender.current = false;
    else document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-full lg:grid lg:grid-cols-[272px_1fr]">
      <a href="#main" className="sr-only z-50 rounded-lg bg-primary-btn px-3 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>

      <aside className="sticky top-0 hidden h-screen flex-col gap-6 overflow-y-auto border-r border-line bg-surface/80 px-4 py-5 backdrop-blur lg:flex">
        <Link to="/" className="rounded-xl px-2 py-1" aria-label="Python Mastery Lab home">
          <Wordmark />
        </Link>
        <SideNav />
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between gap-2 rounded-2xl bg-surface-2 px-3 py-2.5">
            <RuntimeBadge state={runtime} />
            <ThemeToggle />
          </div>
          <p className="px-1 text-[11px] leading-relaxed text-subtle">For practice: Topics 2–3 and Topic 4 up to slide 18.</p>
        </div>
      </aside>

      {/* phone / tablet top bar */}
      <header
        className="sticky z-30 flex items-center justify-between gap-2 border-b border-line bg-bg/85 py-2 backdrop-blur lg:hidden"
        style={{ top: "env(safe-area-inset-top, 0px)", paddingLeft: "max(16px, env(safe-area-inset-left, 0px))", paddingRight: "max(16px, env(safe-area-inset-right, 0px))" }}
      >
        <Link to="/" aria-label="Python Mastery Lab home">
          <Wordmark compact />
        </Link>
        <div className="flex items-center gap-1">
          <RuntimeBadge state={runtime} compact />
          <ThemeToggle />
        </div>
      </header>

      <div className="min-w-0">
        <main id="main" tabIndex={-1} className={clsx("mx-auto max-w-6xl px-4 pt-6 outline-none sm:px-6 lg:px-10 lg:pt-8", inExam ? "pb-16" : "pb-32 lg:pb-16")}>
          <ActiveExamBanner />
          <Outlet />
        </main>
      </div>

      {!inExam && <BottomTabs onMore={() => setMore(true)} moreActive={moreActive} />}
      <MoreSheet open={more} onClose={() => setMore(false)} />
    </div>
  );
}
