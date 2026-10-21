import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import clsx from "clsx";
import {
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  Circle,
  CircleDot,
  Eraser,
  FilePlus2,
  FolderOpen,
  Loader2,
  NotebookPen,
  Play,
  PlayCircle,
  Plus,
  RefreshCcw,
  Save,
  Square,
  SquareTerminal,
  Trash2,
  Dumbbell,
} from "lucide-react";
import { PageHeader } from "../components/ui/PageHeader";
import { CodeEditor } from "../components/code/CodeEditor";
import { OutputConsole } from "../components/code/OutputConsole";
import { useRunner, useRuntimeState } from "../components/code/useRunner";
import { CodeRunner } from "../components/code/CodeRunner";
import { RuntimeBadge } from "../components/code/RuntimeBadge";
import { QueuedNotice } from "../components/code/QueuedNotice";
import { ConfirmDialog } from "../components/ui/Dialog";
import { DifficultyChip, Chip } from "../components/ui/Chip";
import { pythonRunner } from "../runtime/PythonRunner";
import { useLab, type NotebookCell } from "../store/labStore";
import { useProgress } from "../store/progressStore";
import { EXERCISES } from "../data/practice/exercises";
import { TOPICS } from "../data/sources";
import type { TopicId } from "../data/types";

type Tab = "notebook" | "script" | "exercises";

export function LabPage() {
  const [params, setParams] = useSearchParams();
  const tab = (params.get("tab") as Tab) || "notebook";
  const tabs: { id: Tab; label: string; icon: typeof NotebookPen }[] = [
    { id: "notebook", label: "Notebook", icon: NotebookPen },
    { id: "script", label: "Script editor", icon: SquareTerminal },
    { id: "exercises", label: `Exercises (${EXERCISES.length})`, icon: Dumbbell },
  ];
  return (
    <div className="animate-fade-up">
      <PageHeader
        eyebrow="Python Coding Lab"
        title="Write and run real Python"
        description="Your code runs in a real Python 3 interpreter (Pyodide, compiled to WebAssembly) inside an isolated background worker. Errors and tracebacks are exactly what Python produces."
      />
      <div role="tablist" aria-label="Lab sections" className="mb-5 flex flex-wrap gap-1 rounded-2xl border border-line bg-surface p-1">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setParams({ tab: id })}
            className={clsx("flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors", tab === id ? "bg-primary-soft text-primary-text" : "text-muted hover:text-ink")}
          >
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>
      {tab === "notebook" && <Notebook />}
      {tab === "script" && <ScriptEditor />}
      {tab === "exercises" && <ExerciseList />}
    </div>
  );
}

// ------------------------------------------------------------------ notebook

function Notebook() {
  const cells = useLab((s) => s.cells);
  const addCell = useLab((s) => s.addCell);
  const resetNotebook = useLab((s) => s.resetNotebook);
  const runtime = useRuntimeState();
  const [counter, setCounter] = useState(0);
  const runners = useRef(new Map<string, () => Promise<boolean>>());
  const clearers = useRef(new Map<string, () => void>());
  const [runningAll, setRunningAll] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);
  const [kernelGen, setKernelGen] = useState(pythonRunner.generation);
  const [kernelNotice, setKernelNotice] = useState<string | null>(null);

  useEffect(() => {
    return pythonRunner.subscribe(() => {
      if (pythonRunner.generation !== kernelGen) {
        setKernelGen(pythonRunner.generation);
        if (counter > 0) setKernelNotice("The Python kernel was restarted — variables from earlier cells are gone. Re-run the cells you need.");
      }
    });
  }, [kernelGen, counter]);

  const counterRef = useRef(0);
  const nextCount = () => {
    counterRef.current += 1;
    setCounter(counterRef.current);
    return counterRef.current;
  };

  async function runAll() {
    setRunningAll(true);
    for (const c of useLab.getState().cells) {
      const fn = runners.current.get(c.id);
      if (fn) {
        const ok = await fn();
        if (!ok) break;
      }
    }
    setRunningAll(false);
  }

  function restartKernel() {
    pythonRunner.restart();
    counterRef.current = 0;
    setCounter(0);
    setKernelNotice("Kernel restarted. All variables were cleared.");
  }

  return (
    <div className="space-y-4">
      <div className="card flex flex-wrap items-center gap-2 p-2.5">
        <button className="btn-primary btn-sm" onClick={runAll} disabled={runningAll}>
          {runningAll ? <Loader2 size={14} className="animate-spin" /> : <PlayCircle size={14} />} Run all
        </button>
        <button className="btn-secondary btn-sm" onClick={() => addCell()}>
          <Plus size={14} /> Add cell
        </button>
        <button className="btn-secondary btn-sm" onClick={restartKernel}>
          <RefreshCcw size={14} /> Restart kernel
        </button>
        <button className="btn-ghost btn-sm" onClick={() => clearers.current.forEach((fn) => fn())}>
          <Eraser size={14} /> Clear outputs
        </button>
        <button className="btn-ghost btn-sm" onClick={() => setConfirmReset(true)}>
          <Trash2 size={14} /> Reset notebook
        </button>
        <div className="ml-auto flex items-center gap-2">
          <span className="hidden text-xs text-subtle sm:inline">Shift+Enter runs a cell</span>
          <RuntimeBadge state={runtime} />
        </div>
      </div>
      {kernelNotice && (
        <p className="rounded-xl border border-warning/40 bg-warning-soft px-3 py-2 text-sm text-warning-text" role="status">
          {kernelNotice}{" "}
          <button className="underline" onClick={() => setKernelNotice(null)}>
            Dismiss
          </button>
        </p>
      )}
      <div className="space-y-3">
        {cells.map((c, i) => (
          <NotebookCellView
            key={c.id}
            cell={c}
            index={i}
            total={cells.length}
            nextCount={nextCount}
            register={(run, clear) => {
              runners.current.set(c.id, run);
              clearers.current.set(c.id, clear);
              return () => {
                runners.current.delete(c.id);
                clearers.current.delete(c.id);
              };
            }}
          />
        ))}
      </div>
      <button className="btn-secondary w-full border-dashed" onClick={() => addCell()}>
        <Plus size={15} /> Add a code cell
      </button>
      <ConfirmDialog
        open={confirmReset}
        title="Reset the notebook?"
        message="All cells will be replaced by the welcome cells. Your saved script files and exercise progress are not affected."
        confirmLabel="Reset notebook"
        danger
        onCancel={() => setConfirmReset(false)}
        onConfirm={() => {
          resetNotebook();
          restartKernel();
          setConfirmReset(false);
        }}
      />
    </div>
  );
}

function NotebookCellView({
  cell,
  index,
  total,
  nextCount,
  register,
}: {
  cell: NotebookCell;
  index: number;
  total: number;
  nextCount: () => number;
  register: (run: () => Promise<boolean>, clear: () => void) => () => void;
}) {
  const setCellCode = useLab((s) => s.setCellCode);
  const removeCell = useLab((s) => s.removeCell);
  const moveCell = useLab((s) => s.moveCell);
  const addCell = useLab((s) => s.addCell);
  const r = useRunner();
  const [count, setCount] = useState<number | null>(null);
  const codeRef = useRef(cell.code);
  codeRef.current = cell.code;

  const run = async () => {
    setCount(null);
    const res = await r.run(codeRef.current, { mode: "notebook" });
    setCount(nextCount());
    return res.status === "ok";
  };
  const runRef = useRef(run);
  runRef.current = run;

  useEffect(() => register(() => runRef.current(), r.clear), [register, r.clear]);

  return (
    <div className={clsx("group card overflow-hidden", r.running && "ring-1 ring-accent/60")} data-testid="notebook-cell">
      <div className="flex items-start gap-2 p-2.5">
        <div className="w-12 shrink-0 pt-2 text-right font-mono text-xs text-subtle" aria-label="Execution count">
          [{r.running ? "*" : (count ?? " ")}]
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <CodeEditor value={cell.code} onChange={(v) => setCellCode(cell.id, v)} onRun={() => !r.running && void run()} errorLine={r.lastResult?.line ?? null} ariaLabel={`Notebook cell ${index + 1}`} minHeight="60px" />
          {r.queued && <QueuedNotice runtimeState={r.runtimeState} />}
          {(r.entries.length > 0 || r.awaitingInput !== null) && (
            <OutputConsole entries={r.entries} awaitingInput={r.awaitingInput} onSubmitInput={r.submitInput} onCancelInput={r.cancelInput} minHeight="2.5rem" />
          )}
        </div>
        <div className="flex shrink-0 flex-col gap-1">
          {r.running ? (
            <button className="btn-secondary btn-sm" onClick={r.stop} aria-label={`Stop cell ${index + 1}`}>
              <Square size={13} />
            </button>
          ) : (
            <button className="btn-primary btn-sm" onClick={() => void run()} aria-label={`Run cell ${index + 1}`}>
              <Play size={13} />
            </button>
          )}
          <button className="btn-ghost btn-sm" onClick={() => moveCell(cell.id, -1)} disabled={index === 0} aria-label="Move cell up">
            <ArrowUp size={13} />
          </button>
          <button className="btn-ghost btn-sm" onClick={() => moveCell(cell.id, 1)} disabled={index === total - 1} aria-label="Move cell down">
            <ArrowDown size={13} />
          </button>
          <button className="btn-ghost btn-sm" onClick={() => addCell(cell.id)} aria-label="Insert cell below">
            <Plus size={13} />
          </button>
          <button className="btn-ghost btn-sm" onClick={() => removeCell(cell.id)} aria-label="Delete cell">
            <Trash2 size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ script editor

const DEFAULT_SCRIPT = `# Script editor: the whole file runs like "python main.py".\nnum1 = int(input("Enter a number : "))\nnum2 = int(input("Enter another number : "))\nresult = num1 + num2\nprint(result)\n`;

function ScriptEditor() {
  const files = useLab((s) => s.files);
  const saveFile = useLab((s) => s.saveFile);
  const deleteFile = useLab((s) => s.deleteFile);
  const [name, setName] = useState("main.py");
  const [code, setCode] = useState(files["main.py"]?.code ?? DEFAULT_SCRIPT);
  const [dirty, setDirty] = useState(false);
  const [toDelete, setToDelete] = useState<string | null>(null);
  const list = useMemo(() => Object.values(files).sort((a, b) => b.updatedAt - a.updatedAt), [files]);
  const cleanName = name.trim() || "untitled.py";

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
      <div className="card space-y-3 p-4">
        <div className="flex flex-wrap items-end gap-2">
          <label className="min-w-[12rem] flex-1">
            <span className="label">File name</span>
            <input className="input mt-1 font-mono" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <button
            className="btn-secondary"
            onClick={() => {
              saveFile(cleanName, code);
              setDirty(false);
            }}
          >
            <Save size={15} /> Save
          </button>
          <button
            className="btn-ghost"
            onClick={() => {
              setName("untitled.py");
              setCode("");
              setDirty(false);
            }}
          >
            <FilePlus2 size={15} /> New
          </button>
        </div>
        {dirty && <p className="text-xs text-warning-text">Unsaved changes</p>}
        <CodeRunner
          code={code}
          onChange={(v) => {
            setCode(v);
            setDirty(true);
          }}
          initialCode={files[cleanName]?.code ?? DEFAULT_SCRIPT}
          ariaLabel="Script editor"
          minHeight="320px"
        />
      </div>
      <aside className="card h-fit space-y-2 p-4" aria-label="Saved files">
        <h2 className="label flex items-center gap-2">
          <FolderOpen size={14} /> Saved files
        </h2>
        {list.length === 0 && <p className="text-sm text-muted">No saved files yet. Files are stored in this browser.</p>}
        <ul className="space-y-1">
          {list.map((f) => (
            <li key={f.name} className="flex items-center gap-1">
              <button
                className={clsx("min-w-0 flex-1 truncate rounded-lg px-2 py-1.5 text-left font-mono text-sm hover:bg-surface-2", f.name === cleanName ? "text-primary-text" : "text-ink")}
                onClick={() => {
                  setName(f.name);
                  setCode(f.code);
                  setDirty(false);
                }}
              >
                {f.name}
              </button>
              <button className="btn-ghost btn-sm" onClick={() => setToDelete(f.name)} aria-label={`Delete ${f.name}`}>
                <Trash2 size={13} />
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <ConfirmDialog
        open={toDelete !== null}
        title="Delete file?"
        message={`“${toDelete}” will be removed from this browser.`}
        confirmLabel="Delete"
        danger
        onCancel={() => setToDelete(null)}
        onConfirm={() => {
          if (toDelete) deleteFile(toDelete);
          setToDelete(null);
        }}
      />
    </div>
  );
}

// ------------------------------------------------------------------ exercises

function ExerciseList() {
  const records = useProgress((s) => s.exercises);
  const [topic, setTopic] = useState<TopicId | "all">("all");
  const [status, setStatus] = useState<"all" | "solved" | "todo">("all");
  const list = EXERCISES.filter((e) => (topic === "all" || e.topicId === topic) && (status === "all" || (status === "solved" ? records[e.id]?.passed : !records[e.id]?.passed)));
  if (EXERCISES.length === 0) return <p className="text-sm text-muted">Exercises are being prepared.</p>;
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <select className="input w-auto max-w-full" value={topic} onChange={(e) => setTopic(e.target.value as TopicId | "all")} aria-label="Filter by topic">
          <option value="all">All topics</option>
          {TOPICS.map((t) => (
            <option key={t.id} value={t.id}>
              Topic {t.number}: {t.shortTitle}
            </option>
          ))}
        </select>
        <select className="input w-auto max-w-full" value={status} onChange={(e) => setStatus(e.target.value as "all")} aria-label="Filter by status">
          <option value="all">All statuses</option>
          <option value="todo">Not solved yet</option>
          <option value="solved">Solved</option>
        </select>
        <span className="self-center text-sm text-muted">
          {EXERCISES.filter((e) => records[e.id]?.passed).length} of {EXERCISES.length} solved
        </span>
      </div>
      <ul className="grid gap-3 md:grid-cols-2">
        {list.map((e) => {
          const rec = records[e.id];
          const Icon = rec?.passed ? CheckCircle2 : rec?.attempts ? CircleDot : Circle;
          return (
            <li key={e.id}>
              <Link to={`/lab/exercise/${e.id}`} className="card flex h-full items-start gap-3 p-4 transition-colors hover:border-primary">
                <Icon size={20} className={clsx("mt-0.5 shrink-0", rec?.passed ? "text-success" : rec?.attempts ? "text-warning" : "text-subtle")} aria-label={rec?.passed ? "Solved" : rec?.attempts ? "Attempted" : "Not started"} />
                <div className="min-w-0 space-y-1.5">
                  <p className="font-medium text-ink">{e.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    <Chip>Topic {TOPICS.find((t) => t.id === e.topicId)?.number}</Chip>
                    <DifficultyChip difficulty={e.difficulty} />
                    {rec?.attempts ? <Chip tone="neutral">Best {Math.round(rec.bestFraction * 100)}%</Chip> : null}
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
