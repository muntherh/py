import { useState, useSyncExternalStore } from "react";
import { Download, RefreshCcw, Trash2 } from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { ConfirmDialog } from "../components/ui/Dialog";
import { useSettings } from "../store/settingsStore";
import { useProgress } from "../store/progressStore";
import { useExams } from "../store/examStore";
import { useLab } from "../store/labStore";
import { pythonRunner } from "../runtime/PythonRunner";
import { RuntimeBadge } from "../components/code/RuntimeBadge";

export function SettingsPage() {
  const s = useSettings();
  const [confirm, setConfirm] = useState<null | "progress" | "exams" | "all">(null);
  const runtime = useSyncExternalStore((fn) => pythonRunner.subscribe(fn), () => pythonRunner.state);

  function exportData() {
    const data = {
      exportedAt: new Date().toISOString(),
      app: "Python Mastery Lab",
      progress: (({ completedLessons, practice, exercises, activity }) => ({ completedLessons, practice, exercises, activity }))(useProgress.getState()),
      exams: useExams.getState().attempts,
      lab: { cells: useLab.getState().cells, files: useLab.getState().files },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `python-mastery-lab-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-up">
      <PageHeader eyebrow="Settings" title="Preferences" description="Settings and progress are stored only in this browser (IndexedDB). No account is needed." />

      <section className="card space-y-4 p-5" aria-labelledby="app-h">
        <h2 id="app-h" className="font-semibold">
          Appearance
        </h2>
        <fieldset className="flex flex-wrap gap-2">
          <legend className="label mb-2">Theme</legend>
          {(["dark", "light"] as const).map((t) => (
            <label key={t} className={`btn-secondary cursor-pointer ${s.theme === t ? "border-primary text-primary-text" : ""}`}>
              <input type="radio" name="theme" className="sr-only" checked={s.theme === t} onChange={() => s.set({ theme: t })} />
              {t === "dark" ? "Dark navy" : "Light"}
            </label>
          ))}
        </fieldset>
      </section>

      <section className="card space-y-4 p-5" aria-labelledby="ed-h">
        <h2 id="ed-h" className="font-semibold">
          Code editor
        </h2>
        <label className="block">
          <span className="label">Font size: {s.editorFontSize}px</span>
          <input type="range" min={12} max={22} value={s.editorFontSize} onChange={(e) => s.set({ editorFontSize: Number(e.target.value) })} className="mt-2 w-full accent-[var(--primary)]" />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={s.showLineNumbers} onChange={(e) => s.set({ showLineNumbers: e.target.checked })} className="accent-[var(--primary)]" /> Show line numbers
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={s.lineWrap} onChange={(e) => s.set({ lineWrap: e.target.checked })} className="accent-[var(--primary)]" /> Wrap long lines
        </label>
        <p className="text-xs text-subtle">Shortcuts: Shift+Enter or Ctrl/Cmd+Enter runs the code · Tab indents · press Esc then Tab to move focus out of the editor · Ctrl/Cmd+F searches.</p>
      </section>

      <section className="card space-y-4 p-5" aria-labelledby="py-h">
        <h2 id="py-h" className="font-semibold">
          Python execution
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <RuntimeBadge state={runtime} />
          <span className="text-muted">{pythonRunner.version ? `Pyodide ${pythonRunner.version} (CPython 3.13 in WebAssembly)` : "Not loaded yet"}</span>
          <button className="btn-secondary btn-sm" onClick={() => pythonRunner.restart()}>
            <RefreshCcw size={13} /> Restart Python
          </button>
        </div>
        <label className="block">
          <span className="label">Execution time limit: {s.timeoutSeconds} seconds</span>
          <input type="range" min={3} max={60} value={s.timeoutSeconds} onChange={(e) => s.set({ timeoutSeconds: Number(e.target.value) })} className="mt-2 w-full accent-[var(--primary)]" />
          <span className="mt-1 block text-xs text-subtle">A program that runs longer than this (not counting time spent waiting for your input) is stopped. Output is limited to 200,000 characters.</span>
        </label>
        <p className="rounded-xl bg-surface-2 p-3 text-xs leading-relaxed text-muted">
          Your code runs in a separate Web Worker, so the page stays responsive and the program cannot touch the page. Stopping a program terminates that worker and starts a fresh interpreter. This isolates student code from the app, but it is not an operating-system sandbox; for high-stakes assessment, run code on an isolated server instead.
        </p>
      </section>

      <section className="card space-y-4 p-5" aria-labelledby="data-h">
        <h2 id="data-h" className="font-semibold">
          Your data
        </h2>
        <div className="flex flex-wrap gap-2">
          <button className="btn-secondary" onClick={exportData}>
            <Download size={15} /> Export progress (JSON)
          </button>
          <button className="btn-secondary" onClick={() => setConfirm("progress")}>
            <Trash2 size={15} /> Reset learning progress
          </button>
          <button className="btn-secondary" onClick={() => setConfirm("exams")}>
            <Trash2 size={15} /> Delete exam attempts
          </button>
          <button className="btn-danger" onClick={() => setConfirm("all")}>
            <Trash2 size={15} /> Reset everything
          </button>
        </div>
      </section>

      <ConfirmDialog
        open={confirm !== null}
        title={confirm === "exams" ? "Delete all exam attempts?" : confirm === "all" ? "Reset everything?" : "Reset learning progress?"}
        message={
          confirm === "exams"
            ? "All exam attempts, scores and reviews will be permanently deleted from this browser."
            : confirm === "all"
              ? "Lessons, practice history, exercise code, exam attempts, notebook cells, saved files and settings will all be deleted. This cannot be undone."
              : "Completed lessons, practice answers, exercise code and activity will be deleted. Exam attempts are kept."
        }
        confirmLabel="Yes, delete"
        danger
        onCancel={() => setConfirm(null)}
        onConfirm={() => {
          if (confirm === "progress" || confirm === "all") useProgress.getState().resetAll();
          if (confirm === "exams" || confirm === "all") useExams.getState().resetAll();
          if (confirm === "all") {
            useLab.setState({ files: {} });
            useLab.getState().resetNotebook();
            s.reset();
          }
          setConfirm(null);
        }}
      />
    </div>
  );
}
