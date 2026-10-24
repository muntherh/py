import type { SourceFile, SourceRef, Topic, Unit, UnitId } from "./types";

export const EXAM = {
  course: "CSSY1208 — Introduction to Information Security",
  title: "Mid Term Examination — Fall 2026",
  marks: 20,
  format: "Paper based. All types of questions included.",
  theory: "Chapters 1, 2, 3 and 4 (Theory)",
  labs: "Labs 4, 5, 6 (Cryptography from the Lab Manual) — questions based on lab activities; no practical work on the computer during the exam.",
  alphabet: "Learn to make the Alphabet table in Lab 6.",
  calculator: "Scientific calculators are not allowed.",
};

export const SOURCE_FILES: Record<SourceFile, { title: string; unitLabel: string; total: number; inScope: number[] }> = {
  L1: { title: "Lecture 1 — What is Information Security?", unitLabel: "slide", total: 21, inScope: range(1, 21) },
  L2: { title: "Lecture 2 — Identification and Authentication", unitLabel: "slide", total: 14, inScope: range(1, 14) },
  L3: { title: "Lecture 3 — Access Controls", unitLabel: "slide", total: 18, inScope: range(1, 18) },
  L4: { title: "Lecture 4 — Auditing and Accountability", unitLabel: "slide", total: 20, inScope: range(1, 20) },
  // Lab Manual Part I: printed page numbers ("pg. N"). Labs 4–6 are on pg. 8–16.
  // pg. 2–7 (Labs 1–3) and pg. 17–19 (Lab 7) are OUT of the midterm scope.
  LAB: { title: "Lab Manual Part I (CSSY1208)", unitLabel: "pg.", total: 19, inScope: range(8, 16) },
};

function range(a: number, b: number): number[] {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}

export const UNITS: Unit[] = [
  { id: "ch1", kind: "chapter", number: 1, title: "Information Security", titleAr: "أمن المعلومات", short: "Ch 1", description: "CIA triad, core terms, attack types, controls, risk management, incident response, defense in depth, laws.", source: "L1" },
  { id: "ch2", kind: "chapter", number: 2, title: "Identification and Authentication", titleAr: "التعريف والمصادقة", short: "Ch 2", description: "Identification vs authentication vs authorization, factors, MFA, mutual authentication, passwords, biometrics.", source: "L2" },
  { id: "ch3", kind: "chapter", number: 3, title: "Access Controls", titleAr: "التحكم في الوصول", short: "Ch 3", description: "Least privilege, access-control components and functions, ACLs, confused deputy, access-control and multilevel models.", source: "L3" },
  { id: "ch4", kind: "chapter", number: 4, title: "Auditing and Accountability", titleAr: "التدقيق والمساءلة", short: "Ch 4", description: "Accountability, nonrepudiation, deterrence, IDS/IPS, admissibility of records, auditing and logging.", source: "L4" },
  { id: "lab4", kind: "lab", number: 4, title: "Windows NTFS and File Permissions", titleAr: "أذونات الملفات في نظام NTFS", short: "Lab 4", description: "ACLs in the Security tab, adding a principal, Allow/Deny, Applies to, permission types and inheritance.", source: "LAB" },
  { id: "lab5", kind: "lab", number: 5, title: "Windows Event Viewer", titleAr: "عارض الأحداث في ويندوز", short: "Lab 5", description: "Event log types, opening Event Viewer, Application logs, filtering by level and time, finding keywords.", source: "LAB" },
  { id: "lab6", kind: "lab", number: 6, title: "Symmetric Cryptography", titleAr: "التشفير المتماثل", short: "Lab 6", description: "Alphabet table, Caesar and Vigenère (substitution), Rail Fence and Route (transposition).", source: "LAB" },
];

export const UNIT_BY_ID = Object.fromEntries(UNITS.map((u) => [u.id, u])) as Record<UnitId, Unit>;

export const TOPICS: Topic[] = [
  { id: "ch1-intro", unitId: "ch1", title: "What is information security?" },
  { id: "ch1-cia", unitId: "ch1", title: "The CIA triad" },
  { id: "ch1-terms", unitId: "ch1", title: "Core cybersecurity terms" },
  { id: "ch1-attacks", unitId: "ch1", title: "Attacks and attack types" },
  { id: "ch1-controls", unitId: "ch1", title: "Controls (physical, logical, administrative)" },
  { id: "ch1-risk", unitId: "ch1", title: "Risk management cycle" },
  { id: "ch1-ir", unitId: "ch1", title: "Incident response" },
  { id: "ch1-did", unitId: "ch1", title: "Defense in depth" },
  { id: "ch1-laws", unitId: "ch1", title: "Laws and regulations" },

  { id: "ch2-iaa", unitId: "ch2", title: "Identification, authentication, authorization" },
  { id: "ch2-factors", unitId: "ch2", title: "Authentication factors and MFA" },
  { id: "ch2-mutual", unitId: "ch2", title: "Mutual authentication and MITM" },
  { id: "ch2-passwords", unitId: "ch2", title: "Passwords and brute force" },
  { id: "ch2-biometrics", unitId: "ch2", title: "Biometrics and performance (FAR/FRR/EER)" },

  { id: "ch3-authz", unitId: "ch3", title: "Authorization and access control" },
  { id: "ch3-polp", unitId: "ch3", title: "Principle of least privilege" },
  { id: "ch3-components", unitId: "ch3", title: "Components of access control" },
  { id: "ch3-functions", unitId: "ch3", title: "Four functions of access control" },
  { id: "ch3-acl", unitId: "ch3", title: "File system and network ACLs" },
  { id: "ch3-deputy", unitId: "ch3", title: "Confused deputy, CSRF and clickjacking" },
  { id: "ch3-models", unitId: "ch3", title: "Access control models (DAC, MAC, RBAC, ABAC)" },
  { id: "ch3-multilevel", unitId: "ch3", title: "Multilevel models (Bell-LaPadula, Biba, Brewer-Nash)" },

  { id: "ch4-accountability", unitId: "ch4", title: "Introduction and accountability" },
  { id: "ch4-nonrep", unitId: "ch4", title: "Nonrepudiation" },
  { id: "ch4-deterrence", unitId: "ch4", title: "Deterrence" },
  { id: "ch4-idsips", unitId: "ch4", title: "Intrusion detection and prevention" },
  { id: "ch4-admissibility", unitId: "ch4", title: "Admissibility of records" },
  { id: "ch4-auditing", unitId: "ch4", title: "Auditing" },
  { id: "ch4-logging", unitId: "ch4", title: "Logging" },

  { id: "lab4-ntfs", unitId: "lab4", title: "NTFS permissions and inheritance" },
  { id: "lab4-steps", unitId: "lab4", title: "Lab 4 procedure (Steps 1–10)" },

  { id: "lab5-types", unitId: "lab5", title: "Event log types" },
  { id: "lab5-steps", unitId: "lab5", title: "Lab 5 procedure (Steps 1–5)" },

  { id: "lab6-overview", unitId: "lab6", title: "Substitution vs transposition" },
  { id: "lab6-alphabet", unitId: "lab6", title: "The alphabet table (A = 0 … Z = 25)" },
  { id: "lab6-caesar", unitId: "lab6", title: "Caesar cipher" },
  { id: "lab6-vigenere", unitId: "lab6", title: "Vigenère cipher" },
  { id: "lab6-rail", unitId: "lab6", title: "Rail Fence cipher" },
  { id: "lab6-route", unitId: "lab6", title: "Route cipher" },
];

export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t])) as Record<string, Topic>;

export function formatSource(ref: SourceRef): string {
  const units = compactRange(ref.units);
  if (ref.file === "LAB") {
    const lab = ref.lab ?? labForPage(ref.units[0]);
    return `Lab Manual${lab ? `, Lab ${lab}` : ""}, pg. ${units}`;
  }
  const lecture = ref.file.slice(1);
  return `Chapter ${lecture} (Lecture ${lecture}), slide${ref.units.length > 1 ? "s" : ""} ${units}`;
}

export function shortSource(ref: SourceRef): string {
  return ref.file === "LAB" ? `Lab ${ref.lab ?? labForPage(ref.units[0]) ?? "?"} · pg. ${compactRange(ref.units)}` : `Ch ${ref.file.slice(1)} · s${compactRange(ref.units)}`;
}

/** Labs by printed page: Lab 4 = pg. 8–11, Lab 5 = pg. 11–13, Lab 6 = pg. 13–16. */
export function labForPage(pg: number): number | null {
  if (pg >= 8 && pg <= 10) return 4;
  if (pg === 11) return null; // shared: Lab 4 review questions + start of Lab 5
  if (pg === 12) return 5;
  if (pg >= 13 && pg <= 16) return pg === 13 ? null : 6;
  return null;
}

export function compactRange(units: number[]): string {
  const u = [...new Set(units)].sort((a, b) => a - b);
  const parts: string[] = [];
  for (let i = 0; i < u.length; i++) {
    let j = i;
    while (j + 1 < u.length && u[j + 1] === u[j] + 1) j++;
    parts.push(j > i ? `${u[i]}–${u[j]}` : `${u[i]}`);
    i = j;
  }
  return parts.join(", ");
}


/** Slide reference helper: s("L1", 5, 6). */
export function s(file: Exclude<SourceFile, "LAB">, ...units: number[]): SourceRef {
  return { file, units };
}

/** Lab Manual page reference helper: pg(6, 14, 15). */
export function pg(lab: 4 | 5 | 6, ...units: number[]): SourceRef {
  return { file: "LAB", lab, units };
}
