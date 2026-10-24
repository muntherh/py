// Static, theme-aware diagrams used inside lessons. Each one restates slide content visually.
import { useState } from "react";
import clsx from "clsx";
import { ArrowDown, ArrowRight, Check, Lock, X } from "lucide-react";

function Box({ children, className, color }: { children: React.ReactNode; className?: string; color?: string }) {
  return (
    <div className={clsx("rounded-xl border px-3 py-2 text-center text-sm font-semibold", className)} style={color ? { borderColor: color, background: `color-mix(in srgb, ${color} 14%, transparent)`, color } : undefined}>
      {children}
    </div>
  );
}

export function CiaTriangle() {
  return (
    <svg viewBox="0 0 320 250" className="mx-auto w-full max-w-sm" role="img" aria-label="CIA triad: Confidentiality at the top, Integrity bottom-left, Availability bottom-right, information security in the middle">
      <polygon points="160,14 300,236 20,236" fill="var(--primary-soft)" stroke="var(--primary)" strokeWidth="2" />
      <line x1="90" y1="125" x2="230" y2="125" stroke="var(--primary)" strokeOpacity=".5" />
      <line x1="90" y1="125" x2="160" y2="236" stroke="var(--primary)" strokeOpacity=".5" />
      <line x1="230" y1="125" x2="160" y2="236" stroke="var(--primary)" strokeOpacity=".5" />
      <text x="160" y="92" textAnchor="middle" fontSize="38" fontWeight="700" fill="var(--u1)">C</text>
      <text x="160" y="112" textAnchor="middle" fontSize="11" fill="var(--text)">Confidentiality</text>
      <text x="85" y="200" textAnchor="middle" fontSize="38" fontWeight="700" fill="var(--u4)">I</text>
      <text x="85" y="222" textAnchor="middle" fontSize="11" fill="var(--text)">Integrity</text>
      <text x="235" y="200" textAnchor="middle" fontSize="38" fontWeight="700" fill="var(--u3)">A</text>
      <text x="235" y="222" textAnchor="middle" fontSize="11" fill="var(--text)">Availability</text>
      <text x="160" y="160" textAnchor="middle" fontSize="10" fill="var(--muted)">Information</text>
      <text x="160" y="173" textAnchor="middle" fontSize="10" fill="var(--muted)">Security Triad</text>
    </svg>
  );
}

export function RiskChain() {
  const steps = [
    ["Threat agent", "who acts"],
    ["exploits a", ""],
    ["Vulnerability", "the weakness"],
    ["to harm an", ""],
    ["Asset", "what has value"],
  ];
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
      {steps.map(([a, b], i) =>
        b ? (
          <Box key={i} className="min-w-32" color={["var(--u5)", "", "var(--u4)", "", "var(--u3)"][i]}>
            {a}
            <span className="block text-xs font-normal opacity-80">{b}</span>
          </Box>
        ) : (
          <span key={i} className="text-xs text-subtle">{a}</span>
        ),
      )}
      <span className="text-xs text-muted sm:ml-2">Risk = how likely this succeeds</span>
    </div>
  );
}

export function AttackTypes() {
  const rows: [string, string, string][] = [
    ["Interception", "Confidentiality", "var(--u1)"],
    ["Interruption", "Availability", "var(--u3)"],
    ["Modification", "Integrity", "var(--u4)"],
    ["Fabrication", "Integrity", "var(--u4)"],
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {rows.map(([a, p, c]) => (
        <div key={a} className="flex items-center gap-2">
          <Box className="flex-1" color="var(--primary)">{a}</Box>
          <ArrowRight size={16} className="shrink-0 text-subtle" />
          <Box className="flex-1" color={c}>{p}</Box>
        </div>
      ))}
    </div>
  );
}

function Cycle({ items, label }: { items: string[]; label: string }) {
  const n = items.length;
  const R = 105;
  const cx = 160;
  const cy = 135;
  return (
    <svg viewBox="0 0 320 270" className="mx-auto w-full max-w-md" role="img" aria-label={label}>
      <circle cx={cx} cy={cy} r={R} fill="none" stroke="var(--border-strong)" strokeDasharray="4 5" />
      {items.map((t, i) => {
        const a = (i / n) * 2 * Math.PI - Math.PI / 2;
        const x = cx + R * Math.cos(a);
        const y = cy + R * Math.sin(a);
        const words = t.split(" ");
        const lines = words.length > 2 ? [words.slice(0, 2).join(" "), words.slice(2).join(" ")] : [t];
        return (
          <g key={t}>
            <rect x={x - 52} y={y - 20} width={104} height={40} rx={12} fill="var(--surface-2)" stroke="var(--primary)" />
            <text x={x - 44} y={y - 5} fontSize="10" fontWeight="700" fill="var(--electric)">{i + 1}</text>
            {lines.map((l, j) => (
              <text key={j} x={x + 4} y={y + 4 + (j - (lines.length - 1) / 2) * 12} textAnchor="middle" fontSize="10.5" fill="var(--text)">{l}</text>
            ))}
          </g>
        );
      })}
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fill="var(--muted)">repeat ↻</text>
    </svg>
  );
}

export function RiskCycle() {
  return <Cycle label="Risk management cycle" items={["Identify assets", "Identify threats", "Assess vulnerabilities", "Assess risks", "Mitigate risks"]} />;
}

export function IrCycle() {
  return <Cycle label="Incident response phases" items={["Preparation", "Detection and analysis", "Containment", "Eradication", "Recovery", "Post-incident activity"]} />;
}

const DID_LAYERS: [string, string, string][] = [
  ["Network", "VPN · firewalls · IDS/IPS", "var(--u1)"],
  ["Host", "antivirus · authentication · password hashing", "var(--u2)"],
  ["Application", "validation · content filtering", "var(--u3)"],
  ["Data", "encryption · access controls · backups", "var(--u4)"],
];

function Ring({ i }: { i: number }) {
  const [name, desc, c] = DID_LAYERS[i];
  return (
    <div className="rounded-2xl border-2 p-2 sm:p-3" style={{ borderColor: c, background: `color-mix(in srgb, ${c} 7%, transparent)` }}>
      <p className="text-center text-sm font-bold" style={{ color: c }}>{name} layer</p>
      <p className="mb-2 text-center text-xs text-muted">{desc}</p>
      {i < DID_LAYERS.length - 1 ? <Ring i={i + 1} /> : <p className="text-center text-xs font-semibold">★ Data — the most valuable asset</p>}
    </div>
  );
}

export function DidRings() {
  return (
    <div className="mx-auto max-w-md" role="img" aria-label="Defense in depth: network, host, application and data layers nested around the data">
      <Ring i={0} />
    </div>
  );
}

export function IaaFlow() {
  const steps = [
    ["Identification", "the claim", "Insert card"],
    ["Authentication", "the proof", "Enter PIN"],
    ["Authorization", "the permission", "$50 OK, $500 denied"],
    ["Accountability", "the record", "Who did what"],
  ];
  return (
    <ol className="grid gap-2 sm:grid-cols-4">
      {steps.map(([a, b, c], i) => (
        <li key={a} className="relative">
          <Box color={["var(--u1)", "var(--u2)", "var(--u3)", "var(--u4)"][i]}>
            <span className="block text-[11px] font-normal opacity-80">Step {i + 1}</span>
            {a}
            <span className="block text-xs font-normal">{b}</span>
          </Box>
          <p className="mt-1 text-center text-xs text-subtle">ATM: {c}</p>
        </li>
      ))}
    </ol>
  );
}

export function Factors() {
  const f = [
    ["Something you know", "password, PIN", "Sarah's 6-digit PIN"],
    ["Something you have", "smart card, token", "Sarah's ID badge"],
    ["Something you are", "fingerprint, voice, retina, iris", "Sarah's fingerprint"],
    ["Where you are", "inside/outside firewall, GPS", "—"],
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {f.map(([a, b, c], i) => (
        <div key={a} className="rounded-xl border border-line bg-surface-2 p-3 text-sm">
          <p className="font-semibold" style={{ color: ["var(--u1)", "var(--u2)", "var(--u3)", "var(--u4)"][i] }}>{a}</p>
          <p className="text-muted">{b}</p>
          <p className="mt-1 text-xs text-subtle">MFA example: {c}</p>
        </div>
      ))}
    </div>
  );
}

export function Mitm() {
  return (
    <svg viewBox="0 0 340 170" className="mx-auto w-full max-w-md" role="img" aria-label="Man-in-the-middle: the attacker sits between client and server and impersonates each to the other">
      <rect x="10" y="20" width="80" height="40" rx="10" fill="var(--surface-2)" stroke="var(--u1)" />
      <text x="50" y="45" textAnchor="middle" fontSize="12" fill="var(--text)">Client</text>
      <rect x="250" y="20" width="80" height="40" rx="10" fill="var(--surface-2)" stroke="var(--u3)" />
      <text x="290" y="45" textAnchor="middle" fontSize="12" fill="var(--text)">Server</text>
      <line x1="90" y1="40" x2="250" y2="40" stroke="var(--subtle)" strokeDasharray="4 4" />
      <text x="170" y="33" textAnchor="middle" fontSize="10" fill="var(--subtle)">intended connection</text>
      <rect x="130" y="115" width="80" height="40" rx="10" fill="var(--danger-soft)" stroke="var(--danger)" />
      <text x="170" y="140" textAnchor="middle" fontSize="12" fill="var(--danger-text)">Attacker</text>
      <line x1="60" y1="60" x2="135" y2="118" stroke="var(--warning)" strokeWidth="2" />
      <line x1="205" y1="118" x2="280" y2="60" stroke="var(--warning)" strokeWidth="2" />
      <text x="62" y="100" fontSize="9" fill="var(--warning-text)">pretends to be server</text>
      <text x="212" y="100" fontSize="9" fill="var(--warning-text)">pretends to be client</text>
    </svg>
  );
}

export function BiometricSteps() {
  const s = ["Acquire sample", "Feature extraction", "Matching", "Decision"];
  return (
    <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
      {s.map((t, i) => (
        <div key={t} className="flex flex-1 flex-col items-center gap-2 sm:flex-row">
          <Box className="w-full" color="var(--u2)">{i + 1}. {t}</Box>
          {i < s.length - 1 && (
            <>
              <ArrowDown size={16} className="text-subtle sm:hidden" />
              <ArrowRight size={16} className="hidden shrink-0 text-subtle sm:block" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export function FarFrr() {
  const [t, setT] = useState(50);
  // Illustrative curves only: as the threshold gets stricter, FAR falls and FRR rises.
  const far = Math.round(100 - t);
  const frr = Math.round(t);
  return (
    <div className="space-y-3">
      <svg viewBox="0 0 300 160" className="mx-auto w-full max-w-md" role="img" aria-label="FAR falls and FRR rises as the system becomes stricter; they cross at the EER">
        <line x1="30" y1="140" x2="290" y2="140" stroke="var(--border-strong)" />
        <line x1="30" y1="10" x2="30" y2="140" stroke="var(--border-strong)" />
        <path d="M30,15 C120,40 200,120 290,138" fill="none" stroke="var(--u1)" strokeWidth="2.5" />
        <path d="M30,138 C120,120 200,40 290,15" fill="none" stroke="var(--danger)" strokeWidth="2.5" strokeDasharray="5 4" />
        <circle cx="160" cy="77" r="5" fill="var(--warning)" />
        <text x="168" y="74" fontSize="11" fill="var(--warning-text)">EER</text>
        <text x="40" y="26" fontSize="11" fill="var(--u1)">FAR</text>
        <text x="250" y="26" fontSize="11" fill="var(--danger-text)">FRR</text>
        <line x1={30 + (t / 100) * 260} y1="10" x2={30 + (t / 100) * 260} y2="140" stroke="var(--electric)" strokeOpacity=".6" />
        <text x="160" y="156" textAnchor="middle" fontSize="10" fill="var(--subtle)">stricter matching →</text>
      </svg>
      <label className="flex items-center gap-3 text-sm">
        <span className="shrink-0 text-muted">Strictness</span>
        <input type="range" min={0} max={100} value={t} onChange={(e) => setT(+e.target.value)} className="w-full accent-[var(--primary)]" aria-label="Matching strictness" />
      </label>
      <p className="text-center text-xs text-subtle">
        Illustration (not slide data): looser → more false acceptances ({far}%), stricter → more false rejections ({frr}%). The balance point is the EER.
      </p>
    </div>
  );
}

export function LeastPrivilege() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[
        { t: "Correct implementation", ok: true },
        { t: "Violation", ok: false },
      ].map(({ t, ok }) => (
        <div key={t} className={clsx("rounded-xl border p-3 text-sm", ok ? "border-success/50 bg-success-soft" : "border-danger/50 bg-danger-soft")}>
          <p className="mb-2 font-semibold">{t}</p>
          <p className="flex items-center gap-2"><Check size={16} className="text-success" /> Employee → work resource they need</p>
          <p className="flex items-center gap-2">
            {ok ? <X size={16} className="text-danger" /> : <span className="text-warning">⚠</span>} Employee → personal folder they don't need {ok ? "(blocked)" : "(allowed!)"}
          </p>
        </div>
      ))}
    </div>
  );
}

export function AccessComponents() {
  const s = ["Subject", "Object", "Identification", "Authentication", "Authorization", "Audit"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {s.map((t, i) => (
        <div key={t} className="flex items-center gap-2">
          <Box color={i < 2 ? "var(--u1)" : i < 5 ? "var(--u3)" : "var(--u4)"}>{t}</Box>
          {i < s.length - 1 && <ArrowRight size={14} className="text-subtle" />}
        </div>
      ))}
    </div>
  );
}

export function RwxDecoder() {
  const [bits, setBits] = useState([true, true, true, true, false, true, false, false, false]);
  const who = ["User", "Group", "Other"];
  const perms = ["r", "w", "x"];
  const names = ["read", "write", "execute"];
  const str = bits.map((b, i) => (b ? perms[i % 3] : "-"));
  return (
    <div className="space-y-3">
      <p className="text-center font-mono text-2xl font-bold tracking-[0.25em]" aria-live="polite">
        <span className="text-[var(--u1)]">{str.slice(0, 3).join("")}</span> <span className="text-[var(--u3)]">{str.slice(3, 6).join("")}</span> <span className="text-[var(--u4)]">{str.slice(6).join("")}</span>
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        {who.map((w, g) => (
          <fieldset key={w} className="rounded-xl border border-line bg-surface-2 p-3">
            <legend className="px-1 text-sm font-semibold">{w}</legend>
            {perms.map((p, j) => {
              const i = g * 3 + j;
              return (
                <label key={p} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" checked={bits[i]} onChange={() => setBits(bits.map((b, k) => (k === i ? !b : b)))} className="accent-[var(--primary)]" />
                  <span className="font-mono">{p}</span> {names[j]}
                </label>
              );
            })}
          </fieldset>
        ))}
      </div>
      <p className="text-center text-xs text-subtle">Toggle permissions to see the string. Try Tariq's private file: rwx --- ---.</p>
    </div>
  );
}

export function AccessModels() {
  const m = [
    ["DAC", "Owner decides", "You share your folder", "var(--u1)"],
    ["MAC", "Central authority + labels", "Top Secret file blocked", "var(--u5)"],
    ["RBAC", "Job role", "Engineer gets deploy tools", "var(--u3)"],
    ["ABAC", "Attributes: user, resource, environment", "11 PM + personal phone → blocked", "var(--u4)"],
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {m.map(([a, b, c, col]) => (
        <div key={a} className="rounded-xl border p-3 text-sm" style={{ borderColor: col }}>
          <p className="font-display text-lg font-bold" style={{ color: col }}>{a}</p>
          <p className="font-medium">{b}</p>
          <p className="mt-1 text-xs text-subtle">Tariq: {c}</p>
        </div>
      ))}
    </div>
  );
}

export function BlpBiba() {
  const Ladder = ({ title, levels, rules, color }: { title: string; levels: string[]; rules: string[]; color: string }) => (
    <div className="rounded-xl border p-3" style={{ borderColor: color }}>
      <p className="mb-2 text-center font-semibold" style={{ color }}>{title}</p>
      <div className="space-y-1">
        {levels.map((l, i) => (
          <div key={l} className={clsx("flex items-center justify-between rounded-lg px-2 py-1.5 text-xs", i === 1 ? "bg-primary-soft font-semibold" : "bg-surface-2")}>
            <span>{l}</span>
            <span className="text-subtle">{i === 0 ? rules[0] : i === 1 ? "subject: read/write same level ✓" : rules[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <Ladder title="Bell-LaPadula — confidentiality" levels={["Top Secret", "Secret", "Unclassified"]} rules={["✕ no read up", "✕ no write down"]} color="var(--u1)" />
      <Ladder title="Biba — integrity" levels={["High integrity", "Medium integrity", "Low integrity"]} rules={["✕ no write up", "✕ no read down"]} color="var(--u3)" />
    </div>
  );
}

export function AccountabilityStack() {
  return (
    <div className="mx-auto flex max-w-xs flex-col items-stretch gap-1.5">
      <Box color="var(--u4)">
        <Lock size={14} className="mr-1 inline" /> Accountability
      </Box>
      {["Identification", "Authentication", "Authorization", "Access"].map((t) => (
        <Box key={t} color="var(--u1)" className="font-medium">{t}</Box>
      ))}
      <p className="text-center text-xs text-subtle">Accountability rests on these (Lecture 4, slide 4)</p>
    </div>
  );
}

export function IdsIps() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-[var(--u1)] p-3 text-sm">
        <p className="font-display text-lg font-bold text-[var(--u1)]">IDS</p>
        <p>Monitors traffic · analyzes logs · detects suspicious activity · <b>alerts</b> the security team.</p>
        <p className="mt-1 text-xs text-subtle">Does not stop the attack itself.</p>
      </div>
      <div className="rounded-xl border border-[var(--u3)] p-3 text-sm">
        <p className="font-display text-lg font-bold text-[var(--u3)]">IPS</p>
        <p>Often uses IDS information and <b>takes action</b> — e.g. refuses traffic from the attack's source.</p>
      </div>
    </div>
  );
}

export function LogChain() {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
      <Box color="var(--u6)">Logs</Box>
      <span className="text-xs text-subtle">implement →</span>
      <Box color="var(--u3)">Auditing</Box>
      <span className="text-xs text-subtle">implements →</span>
      <Box color="var(--u4)">Accountability</Box>
    </div>
  );
}

export function EventTypes() {
  const t = [
    ["Information", "ℹ", "var(--u1)", "operation completed"],
    ["Warning", "⚠", "var(--warning)", "significant, not yet serious"],
    ["Error", "⛔", "var(--danger)", "loss of functionality / data"],
    ["Success Audit", "🔑", "var(--success)", "successful logon"],
    ["Failure Audit", "🔒", "var(--u5)", "failed logon attempt"],
  ];
  return (
    <div className="grid gap-2 sm:grid-cols-5">
      {t.map(([a, i, c, d]) => (
        <div key={a} className="rounded-xl border p-2.5 text-center text-xs" style={{ borderColor: c }}>
          <div className="text-xl" aria-hidden>{i}</div>
          <p className="font-semibold" style={{ color: c }}>{a}</p>
          <p className="text-subtle">{d}</p>
        </div>
      ))}
    </div>
  );
}
