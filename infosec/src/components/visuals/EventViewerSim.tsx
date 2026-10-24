// Lab 5 simulator: Event Viewer with Windows Logs tree, Actions pane, Filter Current Log and Find.
// Procedure follows Lab Manual pg. 12–13. The events are SAMPLE data written for practice.
import { useMemo, useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronRight, Filter, Search } from "lucide-react";

type Level = "Information" | "Warning" | "Error" | "Success Audit" | "Failure Audit";
type LogName = "Application" | "Security" | "System";
interface Ev {
  id: number;
  log: LogName;
  level: Level;
  hoursAgo: number;
  source: string;
  eventId: number;
  text: string;
}

const EVENTS: Ev[] = [
  { id: 1, log: "Application", level: "Information", hoursAgo: 0.2, source: "Application", eventId: 1000, text: "The application service started successfully." },
  { id: 2, log: "Application", level: "Warning", hoursAgo: 0.7, source: "Disk Monitor", eventId: 2013, text: "Low disk space on drive C:." },
  { id: 3, log: "Application", level: "Error", hoursAgo: 5, source: "Application Error", eventId: 1001, text: "Faulting application stopped working; unsaved data may be lost." },
  { id: 4, log: "Application", level: "Information", hoursAgo: 30, source: "Installer", eventId: 11707, text: "Product installation completed successfully." },
  { id: 5, log: "Application", level: "Warning", hoursAgo: 80, source: "Backup", eventId: 524, text: "Backup completed with warnings: security catalog not updated." },
  { id: 6, log: "Application", level: "Error", hoursAgo: 200, source: "Database", eventId: 17053, text: "Database service failed to start: loss of functionality." },
  { id: 7, log: "Application", level: "Information", hoursAgo: 400, source: "Security Center", eventId: 15, text: "Security product status updated." },
  { id: 8, log: "Security", level: "Success Audit", hoursAgo: 0.1, source: "Security-Auditing", eventId: 4624, text: "An account was successfully logged on. Account: student." },
  { id: 9, log: "Security", level: "Failure Audit", hoursAgo: 0.4, source: "Security-Auditing", eventId: 4625, text: "An account failed to log on. Account: admin. Reason: unknown user name or bad password." },
  { id: 10, log: "Security", level: "Failure Audit", hoursAgo: 0.45, source: "Security-Auditing", eventId: 4625, text: "An account failed to log on. Account: admin." },
  { id: 11, log: "Security", level: "Success Audit", hoursAgo: 50, source: "Security-Auditing", eventId: 4672, text: "Special privileges assigned to new logon (task requiring increased privileges)." },
  { id: 12, log: "System", level: "Error", hoursAgo: 3, source: "Disk", eventId: 7, text: "The device has a bad block (hardware failure)." },
  { id: 13, log: "System", level: "Information", hoursAgo: 10, source: "Kernel-General", eventId: 12, text: "The operating system started." },
];

const LEVELS: Level[] = ["Information", "Warning", "Error", "Success Audit", "Failure Audit"];
const ICON: Record<Level, string> = { Information: "ℹ️", Warning: "⚠️", Error: "⛔", "Success Audit": "🔑", "Failure Audit": "🔒" };
const PERIODS = [
  { id: "any", label: "Any time", h: Infinity },
  { id: "hour", label: "Last hour", h: 1 },
  { id: "day", label: "Last 24 hours", h: 24 },
  { id: "week", label: "Last 7 days", h: 168 },
  { id: "month", label: "Last 30 days", h: 720 },
];

const TASKS = [
  { q: "Open the Application log and select the Error event about data loss. Which tab shows its deep contents?", check: (s: SimState) => s.log === "Application" && s.selected === 3 && s.tab === "Details" },
  { q: "In the Application log, filter to show only Warning and Error events from the last 7 days.", check: (s: SimState) => s.log === "Application" && s.levels.length === 2 && s.levels.includes("Warning") && s.levels.includes("Error") && s.period === "week" },
  { q: "Use Find to locate the event containing the keyword “Security” in the Application log.", check: (s: SimState) => s.log === "Application" && s.found === 5 },
  { q: "Open the Security log and select a Failure Audit event (failed logon).", check: (s: SimState) => s.log === "Security" && (s.selected === 9 || s.selected === 10) },
];

interface SimState {
  log: LogName | null;
  selected: number | null;
  tab: "General" | "Details";
  levels: Level[];
  period: string;
  found: number | null;
}

export function EventViewerSim() {
  const [opened, setOpened] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [st, setSt] = useState<SimState>({ log: null, selected: null, tab: "General", levels: [], period: "any", found: null });
  const [filterOpen, setFilterOpen] = useState(false);
  const [draft, setDraft] = useState<{ levels: Level[]; period: string }>({ levels: [], period: "any" });
  const [findOpen, setFindOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [findMsg, setFindMsg] = useState("");
  const [task, setTask] = useState(0);

  const list = useMemo(() => {
    if (!st.log) return [];
    const p = PERIODS.find((x) => x.id === st.period)!;
    return EVENTS.filter((e) => e.log === st.log && (st.levels.length === 0 || st.levels.includes(e.level)) && e.hoursAgo <= p.h);
  }, [st]);
  const sel = EVENTS.find((e) => e.id === st.selected);
  const t = TASKS[task];
  const taskDone = t?.check(st);

  const findNext = () => {
    if (!keyword.trim()) return;
    const k = keyword.toLowerCase();
    const start = st.found ? list.findIndex((e) => e.id === st.found) + 1 : 0;
    const hit = [...list.slice(start), ...list.slice(0, start)].find((e) => `${e.text} ${e.source} ${e.level}`.toLowerCase().includes(k));
    if (hit) {
      setSt({ ...st, found: hit.id, selected: hit.id });
      setFindMsg(`Found in event ${hit.eventId} (${hit.level}).`);
    } else setFindMsg(`“${keyword}” was not found in this view.`);
  };

  if (!opened)
    return (
      <div className="space-y-3 rounded-2xl border border-line-strong bg-surface-2 p-4">
        <p className="text-sm font-semibold">Step 1 — Open Event Viewer</p>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-line bg-surface px-3 py-2 text-sm">
            <Search size={15} /> <span className="text-muted">Windows Search:</span> <span className="font-mono">Event Viewer</span>
          </div>
          <button className="btn-primary btn-sm" onClick={() => setOpened(true)}>Open Event Viewer (Desktop app)</button>
        </div>
      </div>
    );

  return (
    <div className="space-y-3">
      {t && (
        <div className={clsx("rounded-xl border p-3 text-sm", taskDone ? "border-success/50 bg-success-soft" : "border-primary/40 bg-primary-soft")} aria-live="polite">
          <p className="font-semibold">Task {task + 1}/{TASKS.length}: {t.q}</p>
          {taskDone && (
            <button className="btn-primary btn-sm mt-2" onClick={() => setTask(task + 1)}>
              ✓ Done — next task
            </button>
          )}
        </div>
      )}
      {!t && <p className="rounded-xl bg-success-soft p-3 text-sm text-success-text">All tasks complete — you can perform every Lab 5 procedure.</p>}

      <div className="grid gap-2 rounded-2xl border border-line-strong bg-surface-2 p-2 text-sm lg:grid-cols-[11rem_minmax(0,1fr)_11rem]" aria-label="Simulated Event Viewer">
        {/* Tree */}
        <nav className="rounded-xl bg-surface p-2" aria-label="Event Viewer tree">
          <p className="px-1 text-xs text-subtle">Event Viewer (Local)</p>
          <button className="flex w-full items-center gap-1 rounded px-1 py-1 text-left hover:bg-surface-3" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />} Windows Logs
          </button>
          {expanded &&
            (["Application", "Security", "System"] as LogName[]).map((l) => (
              <button key={l} className={clsx("ml-5 block w-[calc(100%-1.25rem)] rounded px-2 py-1 text-left", st.log === l ? "bg-primary-btn text-white" : "hover:bg-surface-3")} onClick={() => setSt({ ...st, log: l, selected: null, found: null, levels: [], period: "any" })}>
                {l}
              </button>
            ))}
        </nav>

        {/* List + details */}
        <div className="min-w-0 space-y-2 rounded-xl bg-surface p-2">
          {!st.log ? (
            <p className="p-3 text-muted">Step 2 — expand “Windows Logs” and click “Application”.</p>
          ) : (
            <>
              <p className="text-xs text-subtle">
                {st.log} · {list.length} event(s){st.levels.length || st.period !== "any" ? " (filtered)" : ""}
              </p>
              <div className="max-h-56 overflow-auto rounded-lg border border-line">
                <table className="data-table min-w-max text-xs">
                  <thead>
                    <tr>
                      <th>Level</th>
                      <th>Date and Time</th>
                      <th>Source</th>
                      <th>Event ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {list.map((e) => (
                      <tr key={e.id} className={clsx("cursor-pointer", st.selected === e.id ? "bg-primary-soft" : "hover:bg-surface-2")} onClick={() => setSt({ ...st, selected: e.id })} tabIndex={0} onKeyDown={(k) => k.key === "Enter" && setSt({ ...st, selected: e.id })} aria-selected={st.selected === e.id}>
                        <td>{ICON[e.level]} {e.level}</td>
                        <td>{e.hoursAgo < 1 ? `${Math.round(e.hoursAgo * 60)} min ago` : e.hoursAgo < 48 ? `${Math.round(e.hoursAgo)} h ago` : `${Math.round(e.hoursAgo / 24)} days ago`}</td>
                        <td>{e.source}</td>
                        <td>{e.eventId}</td>
                      </tr>
                    ))}
                    {!list.length && (
                      <tr>
                        <td colSpan={4} className="text-subtle">No events match the current filter.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {sel && (
                <div className="rounded-lg border border-line p-2">
                  <div className="mb-2 flex gap-1">
                    {(["General", "Details"] as const).map((tb) => (
                      <button key={tb} className={clsx("rounded-md px-2 py-1 text-xs", st.tab === tb ? "bg-primary-btn text-white" : "bg-surface-2")} onClick={() => setSt({ ...st, tab: tb })}>
                        {tb}
                      </button>
                    ))}
                  </div>
                  {st.tab === "General" ? (
                    <p>{sel.text}</p>
                  ) : (
                    <pre className="overflow-x-auto rounded bg-surface-2 p-2 text-[11px]">{`System
  Provider  [Name] ${sel.source}
  EventID   ${sel.eventId}
  Level     ${sel.level}
  Channel   ${sel.log}
EventData
  ${sel.text}`}</pre>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Actions pane */}
        <div className="rounded-xl bg-surface p-2">
          <p className="mb-1 text-xs font-semibold">Actions</p>
          <button className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left hover:bg-surface-3 disabled:opacity-40" disabled={!st.log} onClick={() => { setDraft({ levels: st.levels, period: st.period }); setFilterOpen(true); }}>
            <Filter size={13} /> Filter Current Log…
          </button>
          <button className="flex w-full items-center gap-1.5 rounded px-2 py-1.5 text-left hover:bg-surface-3 disabled:opacity-40" disabled={!st.log} onClick={() => setFindOpen(true)} title="Same as right-clicking the log → Find">
            <Search size={13} /> Find…
          </button>
          {(st.levels.length > 0 || st.period !== "any") && (
            <button className="w-full rounded px-2 py-1.5 text-left text-xs text-primary-text hover:bg-surface-3" onClick={() => setSt({ ...st, levels: [], period: "any" })}>
              Clear Filter
            </button>
          )}
        </div>
      </div>

      {filterOpen && (
        <div className="rounded-2xl border border-primary/50 bg-surface p-4 animate-fade-up" role="dialog" aria-label="Filter Current Log">
          <p className="mb-2 font-semibold">Filter Current Log</p>
          <label className="mb-3 flex flex-wrap items-center gap-2 text-sm">
            Logged:
            <select className="input w-auto py-1" value={draft.period} onChange={(e) => setDraft({ ...draft, period: e.target.value })}>
              {PERIODS.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </label>
          <fieldset className="mb-3">
            <legend className="mb-1 text-sm">Event level:</legend>
            <div className="flex flex-wrap gap-3">
              {LEVELS.map((l) => (
                <label key={l} className="flex items-center gap-1.5 text-sm">
                  <input type="checkbox" className="accent-[var(--primary)]" checked={draft.levels.includes(l)} onChange={() => setDraft({ ...draft, levels: draft.levels.includes(l) ? draft.levels.filter((x) => x !== l) : [...draft.levels, l] })} /> {l}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="flex gap-2">
            <button className="btn-primary btn-sm" onClick={() => { setSt({ ...st, levels: draft.levels, period: draft.period, selected: null }); setFilterOpen(false); }}>OK</button>
            <button className="btn-secondary btn-sm" onClick={() => setFilterOpen(false)}>Cancel</button>
          </div>
          <p className="mt-2 text-xs text-subtle">The manual also allows a Custom range (From / To) — not simulated here.</p>
        </div>
      )}

      {findOpen && (
        <div className="rounded-2xl border border-primary/50 bg-surface p-4 animate-fade-up" role="dialog" aria-label="Find">
          <p className="mb-2 font-semibold">Find</p>
          <div className="flex flex-wrap gap-2">
            <label className="sr-only" htmlFor="ev-find">Find what</label>
            <input id="ev-find" className="input max-w-xs py-1" placeholder="Find what: e.g. Security" value={keyword} onChange={(e) => setKeyword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && findNext()} />
            <button className="btn-primary btn-sm" onClick={findNext}>Find Next</button>
            <button className="btn-secondary btn-sm" onClick={() => { setFindOpen(false); setFindMsg(""); }}>Close</button>
          </div>
          {findMsg && <p className="mt-2 text-sm" role="status">{findMsg}</p>}
        </div>
      )}
      <p className="text-xs text-subtle">Simulation for revision. Sample events are illustrative; the steps follow Lab Manual pg. 12–13.</p>
    </div>
  );
}
