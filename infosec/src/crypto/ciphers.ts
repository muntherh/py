// Lab 6 cipher engine (Lab Manual pg. 13–16). Pure functions, no React.
// Every function returns the intermediate steps the manual shows, so the UI
// can teach the method instead of only printing ciphertext.

export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export type Mode = "encrypt" | "decrypt";

/** Keep letters only, upper-case (the manual's examples drop spaces). */
export function clean(text: string): string {
  return text.toUpperCase().replace(/[^A-Z]/g, "");
}

/** A = 0 … Z = 25 (Lab Manual pg. 13 alphabet table). */
export function toNum(ch: string): number {
  return ALPHABET.indexOf(ch.toUpperCase());
}

export function toChar(n: number): string {
  return ALPHABET[mod26(n)];
}

export function mod26(n: number): number {
  return ((n % 26) + 26) % 26;
}

// ------------------------------------------------------------------ Caesar
export interface CaesarRow {
  letter: string;
  /** Numerical value of the input letter. */
  x: number;
  /** x + K (encrypt) or x − K (decrypt), before mod 26. */
  raw: number;
  /** raw mod 26. */
  result: number;
  out: string;
}

export interface CaesarTrace {
  mode: Mode;
  key: number;
  rows: CaesarRow[];
  output: string;
}

export function caesar(text: string, key: number, mode: Mode): CaesarTrace {
  const rows = clean(text)
    .split("")
    .map((letter) => {
      const x = toNum(letter);
      const raw = mode === "encrypt" ? x + key : x - key;
      const result = mod26(raw);
      return { letter, x, raw, result, out: toChar(result) };
    });
  return { mode, key, rows, output: rows.map((r) => r.out).join("") };
}

// ------------------------------------------------------------------ Vigenère
export interface VigenereRow {
  letter: string;
  keyLetter: string;
  /** Value of the input letter (P for encryption, C for decryption). */
  v: number;
  /** Value of the key letter. */
  k: number;
  /** v + k (encrypt) or v − k (decrypt), before mod 26. */
  raw: number;
  result: number;
  out: string;
}

export interface VigenereTrace {
  mode: Mode;
  key: string;
  repeatedKey: string;
  rows: VigenereRow[];
  output: string;
}

/** Repeat the keyword to the length of the message (manual step 2: WORD → WORDWO). */
export function repeatKey(key: string, length: number): string {
  const k = clean(key);
  if (!k) return "";
  let out = "";
  for (let i = 0; i < length; i++) out += k[i % k.length];
  return out;
}

export function vigenere(text: string, key: string, mode: Mode): VigenereTrace {
  const msg = clean(text);
  const repeatedKey = repeatKey(key, msg.length);
  const rows = msg.split("").map((letter, i) => {
    const keyLetter = repeatedKey[i] ?? "A";
    const v = toNum(letter);
    const k = toNum(keyLetter);
    const raw = mode === "encrypt" ? v + k : v - k;
    const result = mod26(raw);
    return { letter, keyLetter, v, k, raw, result, out: toChar(result) };
  });
  return { mode, key: clean(key), repeatedKey, rows, output: rows.map((r) => r.out).join("") };
}

// ------------------------------------------------------------------ Rail Fence
/** Rail index (0 = top) of each character in the zig-zag. */
export function railPattern(length: number, depth: number): number[] {
  const out: number[] = [];
  if (depth <= 1) return new Array(length).fill(0);
  let rail = 0;
  let step = 1;
  for (let i = 0; i < length; i++) {
    out.push(rail);
    if (rail === 0) step = 1;
    else if (rail === depth - 1) step = -1;
    rail += step;
  }
  return out;
}

export interface RailTrace {
  mode: Mode;
  depth: number;
  /** grid[rail][column] — the letter written there, or null for an empty cell. */
  grid: (string | null)[][];
  /** The letters on each rail, read left to right. */
  rails: string[];
  /** Number of letters on each rail (the decryption "placeholders"). */
  counts: number[];
  pattern: number[];
  output: string;
}

export function railEncrypt(text: string, depth: number): RailTrace {
  const msg = clean(text);
  const pattern = railPattern(msg.length, depth);
  const grid: (string | null)[][] = Array.from({ length: depth }, () => new Array(msg.length).fill(null));
  msg.split("").forEach((ch, i) => (grid[pattern[i]][i] = ch));
  const rails = grid.map((row) => row.filter((c): c is string => c !== null).join(""));
  return { mode: "encrypt", depth, grid, rails, counts: rails.map((r) => r.length), pattern, output: rails.join("") };
}

export function railDecrypt(cipher: string, depth: number): RailTrace {
  const msg = clean(cipher);
  const pattern = railPattern(msg.length, depth);
  const counts = new Array(depth).fill(0);
  pattern.forEach((r) => counts[r]++);
  // Cut the ciphertext into rails of the right length, then fill each rail's placeholders left to right.
  const rails: string[] = [];
  let pos = 0;
  for (const c of counts) {
    rails.push(msg.slice(pos, pos + c));
    pos += c;
  }
  const used = new Array(depth).fill(0);
  const grid: (string | null)[][] = Array.from({ length: depth }, () => new Array(msg.length).fill(null));
  let output = "";
  pattern.forEach((r, i) => {
    const ch = rails[r][used[r]++];
    grid[r][i] = ch;
    output += ch;
  });
  return { mode: "decrypt", depth, grid, rails, counts, pattern, output };
}

// ------------------------------------------------------------------ Route
/** How the message is written into the grid. Example 1 (pg. 16) fills rows; Example 2 fills columns. */
export type Fill = "rows" | "columns";

/**
 * The reading route.
 * - spiral-tl: spiral inward clockwise, starting top-left (pg. 16, Example 1)
 * - spiral-tr: spiral clockwise starting top-right, going down first (pg. 16, Example 2 "spiral model")
 * - corner-tr: top-right corner, down then to the left, layer by layer (pg. 16, Example 2 "Key1")
 */
export type RouteKind = "spiral-tl" | "spiral-tr" | "corner-tr";

export const ROUTE_LABELS: Record<RouteKind, string> = {
  "spiral-tl": "Spiral inward clockwise, starting top-left",
  "spiral-tr": "Spiral clockwise, starting top-right (down first)",
  "corner-tr": "Top-right corner, down then to the left (layer by layer)",
};

export const FILL_LABELS: Record<Fill, string> = {
  rows: "Write row by row (left → right)",
  columns: "Write column by column (top → bottom)",
};

export type Cell = [row: number, col: number];

/** Fill order of the cells. */
export function fillOrder(rows: number, cols: number, fill: Fill): Cell[] {
  const out: Cell[] = [];
  if (fill === "rows") for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) out.push([r, c]);
  else for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) out.push([r, c]);
  return out;
}

function spiral(rows: number, cols: number, start: Cell, dirs: Cell[]): Cell[] {
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const out: Cell[] = [];
  let [r, c] = start;
  let d = 0;
  for (let n = 0; n < rows * cols; n++) {
    out.push([r, c]);
    seen[r][c] = true;
    if (n === rows * cols - 1) break;
    for (let turns = 0; turns < 4; turns++) {
      const nr = r + dirs[d][0];
      const nc = c + dirs[d][1];
      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !seen[nr][nc]) {
        r = nr;
        c = nc;
        break;
      }
      d = (d + 1) % 4;
    }
  }
  return out;
}

function cornerTopRight(rows: number, cols: number): Cell[] {
  const seen = Array.from({ length: rows }, () => new Array(cols).fill(false));
  const out: Cell[] = [];
  const take = (r: number, c: number) => {
    if (r >= 0 && c >= 0 && r < rows && c < cols && !seen[r][c]) {
      seen[r][c] = true;
      out.push([r, c]);
    }
  };
  for (let i = 0; out.length < rows * cols && i < rows + cols; i++) {
    const c = cols - 1 - i;
    const r = rows - 1 - i;
    if (c >= 0) for (let row = 0; row <= Math.min(Math.max(r, 0), rows - 1); row++) take(row, c);
    if (r >= 0) for (let col = c - 1; col >= 0; col--) take(r, col);
  }
  return out;
}

/** Reading order of the cells for a route. */
export function routeOrder(rows: number, cols: number, kind: RouteKind): Cell[] {
  if (kind === "spiral-tl") return spiral(rows, cols, [0, 0], [[0, 1], [1, 0], [0, -1], [-1, 0]]);
  if (kind === "spiral-tr") return spiral(rows, cols, [0, cols - 1], [[1, 0], [0, -1], [-1, 0], [0, 1]]);
  return cornerTopRight(rows, cols);
}

export interface RouteTrace {
  mode: Mode;
  rows: number;
  cols: number;
  fill: Fill;
  kind: RouteKind;
  grid: string[][];
  /** Reading order (encrypt) or placing order (decrypt). */
  order: Cell[];
  /** Number of dummy 'X' characters added. */
  padding: number;
  output: string;
}

export function routeEncrypt(text: string, rows: number, cols: number, fill: Fill, kind: RouteKind, pad = "X"): RouteTrace {
  const msg = clean(text);
  const size = rows * cols;
  const padded = (msg + pad.repeat(Math.max(0, size - msg.length))).slice(0, size);
  const grid = Array.from({ length: rows }, () => new Array<string>(cols).fill(""));
  fillOrder(rows, cols, fill).forEach(([r, c], i) => (grid[r][c] = padded[i]));
  const order = routeOrder(rows, cols, kind);
  return {
    mode: "encrypt",
    rows,
    cols,
    fill,
    kind,
    grid,
    order,
    padding: Math.max(0, size - msg.length),
    output: order.map(([r, c]) => grid[r][c]).join(""),
  };
}

export function routeDecrypt(cipher: string, rows: number, cols: number, fill: Fill, kind: RouteKind): RouteTrace {
  const msg = clean(cipher).slice(0, rows * cols);
  const grid = Array.from({ length: rows }, () => new Array<string>(cols).fill(""));
  const order = routeOrder(rows, cols, kind);
  order.forEach(([r, c], i) => (grid[r][c] = msg[i] ?? ""));
  const output = fillOrder(rows, cols, fill)
    .map(([r, c]) => grid[r][c])
    .join("");
  const trailing = output.match(/X+$/)?.[0].length ?? 0;
  return { mode: "decrypt", rows, cols, fill, kind, grid, order, padding: trailing, output };
}

// ------------------------------------------------------------------ answer checking & diagnosis
export interface LetterIssue {
  index: number;
  expected: string;
  got: string;
  reason: string;
}

export interface Diagnosis {
  correct: boolean;
  /** Overall message (e.g. "You shifted in the wrong direction"). */
  summary: string;
  issues: LetterIssue[];
  /** Fraction of positions that are correct (0..1). */
  fraction: number;
}

export function normalizeAnswer(s: string): string {
  return clean(s);
}

function compareLetters(expected: string, got: string): { issues: LetterIssue[]; fraction: number } {
  const issues: LetterIssue[] = [];
  const n = Math.max(expected.length, got.length);
  let ok = 0;
  for (let i = 0; i < n; i++) {
    const e = expected[i] ?? "";
    const g = got[i] ?? "";
    if (e === g) ok++;
    else issues.push({ index: i, expected: e || "(none)", got: g || "(missing)", reason: "" });
  }
  return { issues, fraction: expected.length ? Math.min(ok, expected.length) / Math.max(expected.length, got.length) : 0 };
}

function sameLetters(a: string, b: string): boolean {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

/** Check a Caesar answer and explain each wrong letter. */
export function diagnoseCaesar(input: string, key: number, mode: Mode, answer: string): Diagnosis {
  const trace = caesar(input, key, mode);
  const got = normalizeAnswer(answer);
  const { issues, fraction } = compareLetters(trace.output, got);
  if (!issues.length) return { correct: true, summary: "Correct — every letter matches.", issues, fraction: 1 };
  const reverse = caesar(input, key, mode === "encrypt" ? "decrypt" : "encrypt").output;
  let summary = `${issues.length} letter(s) differ. Check the highlighted positions.`;
  if (got === reverse)
    summary = mode === "encrypt" ? "You subtracted K. For encryption use E(x) = (x + K) mod 26." : "You added K. For decryption use D(c) = (c − K) mod 26.";
  else if (got.length !== trace.output.length) summary = `Your answer has ${got.length} letters; it should have ${trace.output.length} (one per input letter).`;
  for (const iss of issues) {
    const row = trace.rows[iss.index];
    if (!row || iss.got.length !== 1 || !ALPHABET.includes(iss.got)) {
      iss.reason = row ? `Expected ${row.out}.` : "Extra letter.";
      continue;
    }
    const g = toNum(iss.got);
    const op = mode === "encrypt" ? "+" : "−";
    if (mod26(g - row.result) === 1 || mod26(row.result - g) === 1)
      iss.reason = `Off by one: ${row.letter} = ${row.x}, ${row.x} ${op} ${key} = ${row.raw}${row.raw !== row.result ? ` → mod 26 = ${row.result}` : ""} = ${row.out}. Did you count A as 1? (A = 0.)`;
    else if (row.raw >= 26 || row.raw < 0)
      iss.reason = `${row.letter} = ${row.x}; ${row.x} ${op} ${key} = ${row.raw}, which is outside 0–25, so ${row.raw >= 26 ? "subtract" : "add"} 26 → ${row.result} = ${row.out}.`;
    else iss.reason = `${row.letter} = ${row.x}; ${row.x} ${op} ${key} = ${row.raw} = ${row.out}.`;
  }
  return { correct: false, summary, issues, fraction };
}

/** Check a Vigenère answer and explain each wrong letter. */
export function diagnoseVigenere(input: string, key: string, mode: Mode, answer: string): Diagnosis {
  const trace = vigenere(input, key, mode);
  const got = normalizeAnswer(answer);
  const { issues, fraction } = compareLetters(trace.output, got);
  if (!issues.length) return { correct: true, summary: "Correct — every letter matches.", issues, fraction: 1 };
  let summary = `${issues.length} letter(s) differ. Check the highlighted positions.`;
  const reverse = vigenere(input, key, mode === "encrypt" ? "decrypt" : "encrypt").output;
  if (got === reverse) summary = mode === "encrypt" ? "You subtracted the key values. Encryption is (P + K) mod 26." : "You added the key values. Decryption is (C − K) mod 26.";
  else if (got.length !== trace.output.length) summary = `Your answer has ${got.length} letters; it should have ${trace.output.length}.`;
  else {
    // Key repeated incorrectly? Try every rotation of the key.
    const k = clean(key);
    for (let s = 1; s < k.length; s++) {
      const rotated = k.slice(s) + k.slice(0, s);
      if (vigenere(input, rotated, mode).output === got) {
        summary = `The key letters are misaligned. Write the key under the message starting with its first letter: ${trace.repeatedKey}.`;
        break;
      }
    }
  }
  const op = mode === "encrypt" ? "+" : "−";
  for (const iss of issues) {
    const row = trace.rows[iss.index];
    if (!row) {
      iss.reason = "Extra letter.";
      continue;
    }
    const wrap = row.raw >= 26 ? ` → ${row.raw} − 26 = ${row.result}` : row.raw < 0 ? ` → ${row.raw} + 26 = ${row.result}` : "";
    iss.reason = `${row.letter} (${row.v}) ${op} key ${row.keyLetter} (${row.k}) = ${row.raw}${wrap} = ${row.out}.`;
  }
  return { correct: false, summary, issues, fraction };
}

/** Check a Rail Fence answer. */
export function diagnoseRail(input: string, depth: number, mode: Mode, answer: string): Diagnosis {
  const trace = mode === "encrypt" ? railEncrypt(input, depth) : railDecrypt(input, depth);
  const got = normalizeAnswer(answer);
  const { issues, fraction } = compareLetters(trace.output, got);
  if (!issues.length) return { correct: true, summary: "Correct — every letter is in the right place.", issues, fraction: 1 };
  let summary = `${issues.length} position(s) differ.`;
  if (!sameLetters(clean(input), got))
    summary = "Your answer uses different letters from the input. A transposition cipher only re-orders letters — it never changes them.";
  else {
    for (const d of [depth - 1, depth + 1]) {
      if (d < 2) continue;
      const alt = mode === "encrypt" ? railEncrypt(input, d).output : railDecrypt(input, d).output;
      if (alt === got) summary = `That is the answer for depth ${d}. The depth (number of rails) here is ${depth}.`;
    }
    if (mode === "encrypt" && railDecrypt(input, depth).output === got) summary = "You decrypted instead of encrypting.";
    if (mode === "decrypt" && railEncrypt(input, depth).output === got) summary = "You encrypted instead of decrypting.";
  }
  if (mode === "encrypt") {
    // Explain which rail went wrong.
    let pos = 0;
    trace.rails.forEach((rail, r) => {
      const part = got.slice(pos, pos + rail.length);
      if (part !== rail) {
        const first = issues.find((i) => i.index >= pos && i.index < pos + rail.length);
        if (first) first.reason = `Rail ${r + 1} should read "${rail}" — you wrote "${part}".`;
      }
      pos += rail.length;
    });
  }
  for (const iss of issues) if (!iss.reason) iss.reason = `Position ${iss.index + 1} should be ${iss.expected}.`;
  return { correct: false, summary, issues, fraction };
}

/** Check a Route answer. */
export function diagnoseRoute(input: string, rows: number, cols: number, fill: Fill, kind: RouteKind, mode: Mode, answer: string): Diagnosis {
  const trace = mode === "encrypt" ? routeEncrypt(input, rows, cols, fill, kind) : routeDecrypt(input, rows, cols, fill, kind);
  const expected = trace.output;
  let got = normalizeAnswer(answer);
  // Accept a decrypted answer with or without the padding X's.
  if (mode === "decrypt" && trace.padding && got === expected.slice(0, expected.length - trace.padding)) got = expected;
  const { issues, fraction } = compareLetters(expected, got);
  if (!issues.length) return { correct: true, summary: "Correct — you followed the route exactly.", issues, fraction: 1 };
  let summary = `${issues.length} position(s) differ. Follow the route cell by cell.`;
  const kinds: RouteKind[] = ["spiral-tl", "spiral-tr", "corner-tr"];
  const fills: Fill[] = ["rows", "columns"];
  for (const k of kinds)
    for (const f of fills) {
      if (k === kind && f === fill) continue;
      const alt = mode === "encrypt" ? routeEncrypt(input, rows, cols, f, k).output : routeDecrypt(input, rows, cols, f, k).output;
      if (alt === got || (mode === "decrypt" && alt.replace(/X+$/, "") === got)) {
        summary =
          f !== fill && k === kind
            ? `You ${f === "rows" ? "filled the grid row by row" : "filled the grid column by column"}; this question writes ${fill === "rows" ? "row by row" : "column by column"}.`
            : `That is the result of a different route ("${ROUTE_LABELS[k]}"). Use: ${ROUTE_LABELS[kind]}.`;
      }
    }
  if (mode === "encrypt" && !sameLetters(expected, got))
    summary = `Your answer should contain exactly the ${expected.length} grid letters (including ${trace.padding} padding X).`;
  for (const iss of issues) {
    if (mode === "encrypt") {
      const cell = trace.order[iss.index];
      iss.reason = cell ? `Step ${iss.index + 1} of the route is row ${cell[0] + 1}, column ${cell[1] + 1} = ${iss.expected}.` : "Extra letter.";
    } else iss.reason = `Letter ${iss.index + 1} of the message should be ${iss.expected}.`;
  }
  return { correct: false, summary, issues, fraction };
}
