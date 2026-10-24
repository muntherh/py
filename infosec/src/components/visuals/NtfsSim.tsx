// Lab 4 simulator: a guided walk-through of Steps 1–10 (Lab Manual pg. 8–10) and an inheritance visualizer.
// The default permission entries are SAMPLE data for the simulation, not from the manual.
import { useState } from "react";
import clsx from "clsx";
import { CheckCircle2, File, Folder, FolderOpen, MousePointerClick, RotateCcw, ShieldCheck, ShieldX, UserPlus } from "lucide-react";

type Entry = { type: "Allow" | "Deny"; principal: string; access: string; inherited: boolean; appliesTo: string };

const START: Entry[] = [
  { type: "Allow", principal: "SYSTEM", access: "Full control", inherited: true, appliesTo: "This folder, subfolders and files" },
  { type: "Allow", principal: "Administrators", access: "Full control", inherited: true, appliesTo: "This folder, subfolders and files" },
  { type: "Allow", principal: "Users", access: "Read & execute", inherited: true, appliesTo: "This folder, subfolders and files" },
];

const STEPS = [
  "Right-click the folder “Confidential Data” and choose Properties.",
  "Open the Security tab, then click Advanced to see the ACL.",
  "Click Add to create a new permission entry.",
  "Click “Select a principal”, type the username and click Check Names.",
  "The name is resolved — click OK.",
  "Set the Type to Allow or Deny.",
  "Choose the Applies to scope.",
  "Tick the permission type(s) and click OK.",
  "Confirm the newly added user is listed in the ACL.",
  "Disable inheritance and choose the second option to remove all inherited permissions.",
];

const APPLIES = ["This folder only", "This folder, subfolders and files", "This folder and subfolders", "This folder and files", "Subfolders and files only"];
const PERMS = ["Full control", "Modify", "Read & execute", "Read", "Write"];

export function NtfsSim() {
  const [step, setStep] = useState(0);
  const [entries, setEntries] = useState<Entry[]>(START);
  const [name, setName] = useState("");
  const [resolved, setResolved] = useState(false);
  const [type, setType] = useState<"Allow" | "Deny">("Allow");
  const [applies, setApplies] = useState(APPLIES[1]);
  const [perms, setPerms] = useState<string[]>([]);
  const [msg, setMsg] = useState<string | null>(null);
  const [inhDialog, setInhDialog] = useState(false);
  const [inheritanceOn, setInheritanceOn] = useState(true);

  const expect = (n: number, action: () => void, label: string) => () => {
    if (step !== n) {
      setMsg(`Not yet: “${label}” is Step ${n + 1}. You are on Step ${step + 1}.`);
      return;
    }
    setMsg(null);
    action();
  };
  const reset = () => {
    setStep(0);
    setEntries(START);
    setName("");
    setResolved(false);
    setType("Allow");
    setApplies(APPLIES[1]);
    setPerms([]);
    setMsg(null);
    setInhDialog(false);
    setInheritanceOn(true);
  };
  const done = step >= STEPS.length;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_17rem]">
        {/* Simulated Windows */}
        <div className="min-w-0 space-y-3 rounded-2xl border border-line-strong bg-surface-2 p-3 text-sm" aria-label="Simulated Windows dialogs">
          {/* Explorer */}
          <div className="rounded-xl border border-line bg-surface p-3">
            <p className="label mb-2">File Explorer</p>
            <button
              type="button"
              className={clsx("flex items-center gap-2 rounded-lg px-2 py-1.5", step === 0 && "ring-2 ring-[var(--electric)]")}
              onContextMenu={(e) => {
                e.preventDefault();
                expect(0, () => setStep(1), "Properties")();
              }}
              onClick={expect(0, () => setStep(1), "Properties")}
            >
              <Folder size={18} className="text-warning" /> Confidential Data <span className="text-xs text-subtle">(click = right-click → Properties)</span>
            </button>
          </div>

          {step >= 1 && (
            <div className="rounded-xl border border-line bg-surface p-3 animate-fade-up">
              <p className="label mb-2">Confidential Data Properties</p>
              <div className="flex flex-wrap gap-1 border-b border-line pb-2">
                {["General", "Sharing", "Security", "Customize"].map((t) => (
                  <span key={t} className={clsx("rounded-md px-2 py-1 text-xs", t === "Security" && step >= 2 ? "bg-primary-soft text-primary-text" : "text-muted")}>{t}</span>
                ))}
              </div>
              <button type="button" className={clsx("btn-secondary btn-sm mt-2", step === 1 && "ring-2 ring-[var(--electric)]")} onClick={expect(1, () => setStep(2), "Security → Advanced")}>
                Security tab → Advanced…
              </button>
            </div>
          )}

          {step >= 2 && (
            <div className="rounded-xl border border-line bg-surface p-3 animate-fade-up">
              <p className="label mb-2">Advanced Security Settings — Access Control List</p>
              <div className="overflow-x-auto">
                <table className="data-table min-w-max text-xs">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Principal</th>
                      <th>Access</th>
                      <th>Inherited</th>
                      <th>Applies to</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entries.map((e, i) => (
                      <tr key={i} className={clsx(!e.inherited && "bg-primary-soft")}>
                        <td className={e.type === "Deny" ? "text-danger-text" : "text-success-text"}>{e.type}</td>
                        <td>{e.principal}</td>
                        <td>{e.access}</td>
                        <td>{e.inherited ? "Parent" : "None"}</td>
                        <td>{e.appliesTo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button type="button" className={clsx("btn-secondary btn-sm", step === 2 && "ring-2 ring-[var(--electric)]")} onClick={expect(2, () => setStep(3), "Add")}>
                  <UserPlus size={14} /> Add
                </button>
                <button type="button" className={clsx("btn-secondary btn-sm", step === 9 && "ring-2 ring-[var(--electric)]")} onClick={expect(9, () => setInhDialog(true), "Disable inheritance")} disabled={!inheritanceOn}>
                  Disable inheritance
                </button>
                {step === 8 && (
                  <button type="button" className="btn-primary btn-sm ring-2 ring-[var(--electric)]" onClick={() => setStep(9)}>
                    <CheckCircle2 size={14} /> Yes — the new user is listed
                  </button>
                )}
              </div>
              {inhDialog && (
                <div className="mt-3 rounded-xl border border-warning/50 bg-warning-soft p-3 animate-fade-up" role="dialog" aria-label="Block inheritance">
                  <p className="mb-2 font-semibold">What would you like to do with the current inherited permissions?</p>
                  <div className="flex flex-col gap-2">
                    <button type="button" className="btn-secondary btn-sm justify-start text-left whitespace-normal" onClick={() => setMsg("The manual (Step 10) tells you to choose the SECOND option, to remove all inherited permissions.")}>
                      1. Keep them (convert the inherited permissions into explicit permissions)
                    </button>
                    <button
                      type="button"
                      className="btn-secondary btn-sm justify-start text-left whitespace-normal ring-2 ring-[var(--electric)]"
                      onClick={() => {
                        setEntries(entries.filter((e) => !e.inherited));
                        setInheritanceOn(false);
                        setInhDialog(false);
                        setStep(10);
                        setMsg(null);
                      }}
                    >
                      2. Remove all inherited permissions from this object
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {step >= 3 && step <= 7 && (
            <div className="rounded-xl border border-line bg-surface p-3 animate-fade-up">
              <p className="label mb-2">Permission Entry for Confidential Data</p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted">Principal:</span>
                {step === 3 ? (
                  <>
                    <input className="input w-40 py-1" placeholder="e.g. student" value={name} onChange={(e) => setName(e.target.value)} aria-label="Username" />
                    <button
                      type="button"
                      className="btn-secondary btn-sm ring-2 ring-[var(--electric)]"
                      onClick={() => {
                        if (!name.trim()) {
                          setMsg("Type a username first, then click Check Names.");
                          return;
                        }
                        setResolved(true);
                        setStep(4);
                        setMsg(null);
                      }}
                    >
                      Check Names
                    </button>
                  </>
                ) : (
                  <span className="font-semibold underline">{name.trim().toUpperCase()} (resolved)</span>
                )}
                {step === 4 && resolved && (
                  <button type="button" className="btn-primary btn-sm ring-2 ring-[var(--electric)]" onClick={() => setStep(5)}>
                    OK
                  </button>
                )}
              </div>
              {step >= 5 && (
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <label className="flex flex-col gap-1 text-xs">
                    Type
                    <select className={clsx("input py-1", step === 5 && "ring-2 ring-[var(--electric)]")} value={type} onChange={(e) => setType(e.target.value as "Allow" | "Deny")} disabled={step !== 5}>
                      <option>Allow</option>
                      <option>Deny</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 text-xs">
                    Applies to
                    <select className={clsx("input py-1", step === 6 && "ring-2 ring-[var(--electric)]")} value={applies} onChange={(e) => setApplies(e.target.value)} disabled={step !== 6}>
                      {APPLIES.map((a) => (
                        <option key={a}>{a}</option>
                      ))}
                    </select>
                  </label>
                  {step === 5 && <button type="button" className="btn-primary btn-sm self-end" onClick={() => setStep(6)}>Type set → next</button>}
                  {step === 6 && <button type="button" className="btn-primary btn-sm self-end" onClick={() => setStep(7)}>Scope set → next</button>}
                </div>
              )}
              {step === 7 && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs text-muted">Permissions</p>
                  <div className="grid grid-cols-2 gap-1">
                    {PERMS.map((p) => (
                      <label key={p} className="flex items-center gap-2 text-xs">
                        <input type="checkbox" className="accent-[var(--primary)]" checked={perms.includes(p)} onChange={() => setPerms(perms.includes(p) ? perms.filter((x) => x !== p) : [...perms, p])} /> {p}
                      </label>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="btn-primary btn-sm ring-2 ring-[var(--electric)]"
                    onClick={() => {
                      if (!perms.length) {
                        setMsg("Tick at least one permission type before clicking OK.");
                        return;
                      }
                      setEntries([...entries, { type, principal: name.trim().toUpperCase(), access: perms.includes("Full control") ? "Full control" : perms.join(", "), inherited: false, appliesTo: applies }]);
                      setStep(8);
                      setMsg(null);
                    }}
                  >
                    OK
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Step tracker */}
        <aside className="rounded-2xl border border-line bg-surface p-3" aria-label="Lab 4 steps">
          <p className="label mb-2">Lab 4 steps</p>
          <ol className="space-y-1 text-xs">
            {STEPS.map((s, i) => (
              <li key={i} className={clsx("flex gap-2 rounded-lg px-2 py-1", i === step ? "bg-primary-soft font-semibold text-primary-text" : i < step ? "text-success-text" : "text-subtle")} aria-current={i === step ? "step" : undefined}>
                <span className="w-4 shrink-0 font-mono">{i < step ? "✓" : i + 1}</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <div className="flex flex-wrap items-center gap-2" aria-live="polite">
        {!done ? (
          <p className="flex items-center gap-2 text-sm">
            <MousePointerClick size={16} className="text-electric" /> <b>Step {step + 1}:</b> {STEPS[step]}
          </p>
        ) : (
          <p className="flex items-center gap-2 text-sm text-success-text">
            <CheckCircle2 size={16} /> Done. Inherited entries were removed — only your explicit entry remains, so you can build custom restrictions from scratch.
          </p>
        )}
        <button className="btn-ghost btn-sm ml-auto" onClick={reset}>
          <RotateCcw size={14} /> Restart
        </button>
      </div>
      {msg && <p className="rounded-xl bg-warning-soft px-3 py-2 text-sm text-warning-text" role="alert">{msg}</p>}
      <p className="text-xs text-subtle">Simulation for revision. The default entries (SYSTEM, Administrators, Users) are sample data; the procedure follows Lab Manual pg. 8–10.</p>
    </div>
  );
}

/** Inheritance + Allow/Deny visualizer: which objects receive a parent rule, and what the user effectively gets. */
export function InheritanceSim() {
  const [applies, setApplies] = useState(APPLIES[1]);
  const [type, setType] = useState<"Allow" | "Deny">("Allow");
  const [blockDrafts, setBlockDrafts] = useState(false);
  const reaches = (obj: "folder" | "sub" | "file" | "subfile") => {
    const a = applies;
    let ok = false;
    if (obj === "folder") ok = a.startsWith("This folder");
    if (obj === "sub") ok = a.includes("subfolders");
    if (obj === "file" || obj === "subfile") ok = a.includes("files");
    if ((obj === "sub" || obj === "subfile") && blockDrafts) ok = false;
    return ok;
  };
  const Node = ({ icon, label, obj, depth }: { icon: React.ReactNode; label: string; obj: "folder" | "sub" | "file" | "subfile"; depth: number }) => {
    const got = reaches(obj);
    return (
      <div className="flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ marginLeft: depth * 22 }}>
        {icon}
        <span className="text-sm">{label}</span>
        <span className={clsx("ml-auto chip", got ? (type === "Allow" ? "border-transparent bg-success-soft text-success-text" : "border-transparent bg-danger-soft text-danger-text") : "border-line text-subtle")}>
          {got ? (type === "Allow" ? <ShieldCheck size={12} /> : <ShieldX size={12} />) : null}
          {got ? `${type} (rule applies)` : "not affected"}
        </span>
      </div>
    );
  };
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-3">
        <label className="flex flex-col gap-1 text-xs">
          New rule on “Projects”: Type
          <select className="input py-1" value={type} onChange={(e) => setType(e.target.value as "Allow" | "Deny")}>
            <option>Allow</option>
            <option>Deny</option>
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-1 text-xs">
          Applies to
          <select className="input py-1" value={applies} onChange={(e) => setApplies(e.target.value)}>
            {APPLIES.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 self-end text-xs">
          <input type="checkbox" className="accent-[var(--primary)]" checked={blockDrafts} onChange={(e) => setBlockDrafts(e.target.checked)} /> Remove inherited permissions on “Drafts”
        </label>
      </div>
      <div className="rounded-xl border border-line bg-surface-2 p-2">
        <Node icon={<FolderOpen size={18} className="text-warning" />} label="Projects (parent folder)" obj="folder" depth={0} />
        <Node icon={<File size={16} className="text-subtle" />} label="Plan.docx" obj="file" depth={1} />
        <Node icon={<Folder size={16} className="text-warning" />} label="Drafts (subfolder)" obj="sub" depth={1} />
        <Node icon={<File size={16} className="text-subtle" />} label="Draft1.docx" obj="subfile" depth={2} />
      </div>
      <p className="text-xs text-subtle">
        Inheritance is on by default, so a rule on the parent flows to children within its “Applies to” scope (pg. 8, 10). Removing inherited permissions cuts the flow (Step 10). A Deny entry blocks access and overrides Allow (pg. 11).
      </p>
    </div>
  );
}
