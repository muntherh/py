// Fails the build if course material (slide/page images or the original files) ends up in dist/.
// Runs automatically after `vite build`, including on Vercel.
import { readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const dist = new URL("../dist/", import.meta.url).pathname;
const forbidden = /\.(webp|png|jpe?g|gif|pdf|pptx?|docx?)$/i;
const bad = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "sources") bad.push(relative(dist, p) + "/");
      walk(p);
    } else if (forbidden.test(name)) bad.push(relative(dist, p));
  }
};
walk(dist);
if (bad.length) {
  console.error("check-dist: course-material files must not be deployed:\n  " + bad.join("\n  "));
  process.exit(1);
}
console.log("check-dist: OK — no slide, page or document images in dist/");
