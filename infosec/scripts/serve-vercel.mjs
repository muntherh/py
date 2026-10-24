// Local stand-in for Vercel's static hosting, driven by vercel.json:
// files in dist/ are served first, then `rewrites` apply, and every matching `headers` rule is added.
// Used by the end-to-end tests to verify refresh/deep-link behaviour and response headers.
import { createServer } from "node:http";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = new URL("../", import.meta.url).pathname;
const config = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
const dist = join(root, config.outputDirectory ?? "dist");
const port = Number(process.env.PORT ?? 4175);
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".json": "application/json" };

// vercel.json sources here are plain regex-style paths (no :params), so anchor them as regexes.
const match = (source, path) => new RegExp(`^${source}$`).test(path);

function fileFor(path) {
  const p = normalize(join(dist, decodeURIComponent(path)));
  if (!p.startsWith(dist)) return null;
  if (existsSync(p) && statSync(p).isFile()) return p;
  if (existsSync(join(p, "index.html"))) return join(p, "index.html");
  return null;
}

createServer((req, res) => {
  const path = new URL(req.url, "http://x").pathname;
  let file = fileFor(path);
  if (!file) for (const r of config.rewrites ?? []) if (match(r.source, path)) { file = fileFor(r.destination); break; }
  for (const h of config.headers ?? []) if (match(h.source, path)) for (const { key, value } of h.headers) res.setHeader(key, value);
  if (!file) {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }
  res.setHeader("Content-Type", TYPES[extname(file)] ?? "application/octet-stream");
  res.end(readFileSync(file));
}).listen(port, () => console.log(`serving ${dist} like Vercel on http://localhost:${port}`));
