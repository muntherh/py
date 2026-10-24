import { useState } from "react";
import { Download, Trash2 } from "lucide-react";
import { ConfirmDialog } from "../components/ui/Dialog";
import { PageHeader } from "../components/ui/PageHeader";
import { useExams } from "../store/examStore";
import { useProgress } from "../store/progressStore";
import { useSettings } from "../store/settingsStore";

export function SettingsPage() {
  const s = useSettings();
  const [confirm, setConfirm] = useState(false);
  const exportData = () => {
    const data = { exportedAt: new Date().toISOString(), settings: { theme: s.theme, showArabic: s.showArabic, examMinutes: s.examMinutes }, progress: useProgress.getState(), exams: useExams.getState().attempts };
    const blob = new Blob([JSON.stringify(data, (_k, v) => (typeof v === "function" ? undefined : v), 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cssy1208-progress.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  return (
    <div className="max-w-2xl">
      <PageHeader eyebrow="Settings" title="Settings" />
      <div className="card divide-y divide-line">
        <div className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <p className="font-semibold">Theme</p>
            <p className="text-sm text-muted">Dark navy (default) or light.</p>
          </div>
          <select className="input w-auto" value={s.theme} onChange={(e) => s.set({ theme: e.target.value as "dark" | "light" })} aria-label="Theme">
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <label className="flex items-center justify-between gap-3 p-4">
          <span>
            <span className="block font-semibold">Show Arabic explanations by default</span>
            <span className="block text-sm text-muted">English terminology always stays visible.</span>
          </span>
          <input type="checkbox" className="h-5 w-5 accent-[var(--primary)]" checked={s.showArabic} onChange={(e) => s.set({ showArabic: e.target.checked })} />
        </label>
        <div className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <p className="font-semibold">Default mock-exam duration</p>
            <p className="text-sm text-muted">Practice setting — the official duration was not announced.</p>
          </div>
          <select className="input w-auto" value={s.examMinutes ?? ""} onChange={(e) => s.set({ examMinutes: e.target.value ? +e.target.value : null })} aria-label="Default exam duration">
            <option value="">By difficulty (40 / 45 / 50 min)</option>
            {[30, 40, 45, 50, 60, 90].map((m) => <option key={m} value={m}>{m} minutes</option>)}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div>
            <p className="font-semibold">Your data</p>
            <p className="text-sm text-muted">Stored only in this browser (IndexedDB).</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-secondary" onClick={exportData}><Download size={15} /> Export JSON</button>
            <button className="btn-danger" onClick={() => setConfirm(true)}><Trash2 size={15} /> Reset progress</button>
          </div>
        </div>
      </div>
      <ConfirmDialog
        open={confirm}
        title="Reset all progress?"
        message="Lessons, practice records, mistakes, flashcards and mock exam history will be deleted from this browser. This cannot be undone."
        confirmLabel="Reset everything"
        danger
        onConfirm={() => {
          useProgress.getState().resetAll();
          useExams.getState().resetAll();
          setConfirm(false);
        }}
        onCancel={() => setConfirm(false)}
      />
    </div>
  );
}
