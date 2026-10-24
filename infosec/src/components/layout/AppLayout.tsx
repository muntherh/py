import { useEffect, useRef, useState, type ComponentType } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { BarChart3, BookOpenText, Brain, FlaskConical, House, Layers, Library, ListChecks, Menu, Moon, NotebookPen, Settings, Sun, Timer, X, Zap } from "lucide-react";
import { formatDuration, remainingMs } from "../../exam/engine";
import { useNow } from "../../lib/useNow";
import { useExams } from "../../store/examStore";
import { useSettings } from "../../store/settingsStore";
import { Logo } from "../ui/Logo";

type Item = { to: string; label: string; short: string; icon: ComponentType<{ size?: number; className?: string }>; end?: boolean };

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Study",
    items: [
      { to: "/", label: "Dashboard", short: "Home", icon: House, end: true },
      { to: "/learn", label: "Lessons & Lab tutorials", short: "Learn", icon: BookOpenText },
      { to: "/crypto", label: "Cryptography Lab", short: "Crypto", icon: FlaskConical },
      { to: "/flashcards", label: "Flashcards", short: "Cards", icon: Layers },
    ],
  },
  {
    title: "Practise",
    items: [
      { to: "/practice", label: "Practice quizzes", short: "Practice", icon: ListChecks },
      { to: "/exams", label: "Mock exams (20 marks)", short: "Exams", icon: Timer },
      { to: "/revision", label: "Last-minute revision", short: "Revision", icon: Zap },
    ],
  },
  {
    title: "Progress",
    items: [
      { to: "/mistakes", label: "Mistake notebook", short: "Mistakes", icon: NotebookPen },
      { to: "/progress", label: "Progress & weak topics", short: "Progress", icon: BarChart3 },
    ],
  },
  {
    title: "About",
    items: [
      { to: "/sources", label: "Sources & coverage", short: "Sources", icon: Library },
      { to: "/settings", label: "Settings", short: "Settings", icon: Settings },
    ],
  },
];
const ALL = GROUPS.flatMap((g) => g.items);
const TABS = ["/", "/learn", "/crypto", "/practice", "/exams"];

function ThemeToggle() {
  const theme = useSettings((s) => s.theme);
  const set = useSettings((s) => s.set);
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button className="btn-ghost btn-sm rounded-full" onClick={() => set({ theme: next })} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <Logo size={36} />
      <span className="leading-tight">
        <span className="block font-display text-[15px] font-bold tracking-tight text-ink">CSSY1208 Academy</span>
        <span className="block text-[11px] font-medium text-subtle">Information Security · Midterm</span>
      </span>
    </span>
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
                  clsx("flex items-center gap-3 rounded-xl px-3 py-2 text-[14px] font-medium transition-colors", isActive ? "bg-primary-btn text-white shadow-[0_6px_20px_-8px_var(--primary)]" : "text-muted hover:bg-surface-2 hover:text-ink")
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
  if (!active || location.pathname === `/exams/attempt/${active.id}`) return null;
  return (
    <Link to={`/exams/attempt/${active.id}`} className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-warning/40 bg-warning-soft px-4 py-2.5 text-sm font-medium text-warning-text">
      <Timer size={16} /> {active.title} in progress · {formatDuration(remainingMs(active, now))} left
      <span className="ml-auto underline">Return to exam</span>
    </Link>
  );
}

function MoreSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  const extra = ALL.filter((i) => !TABS.includes(i.to));
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="More pages">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" onClick={onClose} />
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
            <NavLink key={to} to={to} onClick={onClose} className={({ isActive }) => clsx("flex flex-col items-center gap-1.5 rounded-2xl px-2 py-3.5 text-xs font-medium", isActive ? "bg-primary-soft text-primary-text" : "bg-surface-2 text-muted")}>
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
    <nav aria-label="Tab bar" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="mx-auto grid max-w-lg grid-cols-6">
        {tabs.map(({ to, short, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={({ isActive }) => clsx("flex flex-col items-center gap-0.5 py-2 text-[10.5px] font-semibold", isActive ? "text-primary-text" : "text-subtle")}>
            {({ isActive }) => (
              <>
                <span className={clsx("grid h-7 w-11 place-items-center rounded-full transition-colors", isActive && "bg-primary-soft")}>
                  <Icon size={19} />
                </span>
                {short}
              </>
            )}
          </NavLink>
        ))}
        <button onClick={onMore} className={clsx("flex flex-col items-center gap-0.5 py-2 text-[10.5px] font-semibold", moreActive ? "text-primary-text" : "text-subtle")} aria-label="More pages">
          <span className={clsx("grid h-7 w-11 place-items-center rounded-full", moreActive && "bg-primary-soft")}>
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
  const first = useRef(true);
  const inExam = /^\/exams\/attempt\/[^/]+$/.test(location.pathname);
  const moreActive = !TABS.some((t) => (t === "/" ? location.pathname === "/" : location.pathname.startsWith(t)));

  useEffect(() => {
    setMore(false);
    if (first.current) first.current = false;
    else document.getElementById("main")?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-full lg:grid lg:grid-cols-[276px_minmax(0,1fr)]">
      <a href="#main" className="sr-only z-50 rounded-lg bg-primary-btn px-3 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2">
        Skip to content
      </a>
      <aside className="sticky top-0 hidden h-screen flex-col gap-6 overflow-y-auto border-r border-line bg-surface/70 px-4 py-5 backdrop-blur lg:flex">
        <Link to="/" className="rounded-xl px-2 py-1">
          <Wordmark />
        </Link>
        <SideNav />
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between gap-2 rounded-2xl bg-surface-2 px-3 py-2.5">
            <span className="flex items-center gap-2 text-xs text-muted"><Brain size={14} /> Chapters 1–4 · Labs 4–6</span>
            <ThemeToggle />
          </div>
          <p className="px-1 text-[11px] leading-relaxed text-subtle">Self-study tool built from your course files. Not an official university product.</p>
        </div>
      </aside>

      <div className="min-w-0">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-2 border-b border-line bg-surface/90 px-4 py-2.5 backdrop-blur lg:hidden">
          <Link to="/">
            <Wordmark />
          </Link>
          <ThemeToggle />
        </header>
        <main id="main" tabIndex={-1} className={clsx("mx-auto w-full max-w-6xl px-4 py-6 outline-none sm:px-6 lg:px-10 lg:py-9", inExam ? "pb-10" : "pb-28 lg:pb-12")}>
          <ActiveExamBanner />
          <Outlet />
        </main>
      </div>
      {!inExam && <BottomTabs onMore={() => setMore(true)} moreActive={moreActive} />}
      <MoreSheet open={more} onClose={() => setMore(false)} />
    </div>
  );
}
