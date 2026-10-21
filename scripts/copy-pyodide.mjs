// Copies the Pyodide runtime files from node_modules into public/pyodide so the
// Python runtime is self-hosted (no CDN needed at runtime).
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules", "pyodide");
const dest = join(root, "public", "pyodide");
const files = [
  "pyodide.mjs",
  "pyodide.js",
  "pyodide.asm.js",
  "pyodide.asm.wasm",
  "python_stdlib.zip",
  "pyodide-lock.json",
];

if (!existsSync(src)) {
  console.warn("[copy-pyodide] node_modules/pyodide not found; skipping.");
  process.exit(0);
}
mkdirSync(dest, { recursive: true });
for (const f of files) {
  if (existsSync(join(src, f))) cpSync(join(src, f), join(dest, f));
  else console.warn(`[copy-pyodide] missing ${f}`);
}
console.log(`[copy-pyodide] copied runtime to ${dest}`);
