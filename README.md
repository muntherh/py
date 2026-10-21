# Python Mastery Lab

An interactive learning and exam-preparation platform for **Introduction to Programming (Python)**. It is built strictly from the supplied course files: Topic 2, Topic 3, Topic 4 slides 1–18, Practice Exercises I and III, and five lab notebooks.

| What | Count |
|---|---|
| Lessons (simple-English explanations, line-by-line examples, mistakes, try-it editor, knowledge check, slide citations) | 25 |
| Runnable lesson examples, every stated output verified against real Python | 97 |
| Practice multiple-choice questions, with explanations and citations | 143 |
| Graded coding exercises (235 test cases, 127 hidden; 4-level hints) | 51 |
| Timed exams: 2 easy, 2 medium, 2 hard, 30 minutes each | 6 (96 questions) |
| Curriculum concepts, each covered by a lesson, practice and exam items | 34 |

## Features

- **Learn.** Ten-part lessons with a citation on every section and example. A slide-preview dialog shows the original slide, PDF page or notebook cell. Completion is tracked per lesson.
- **Topic Summaries.** A printable revision sheet for every concept, with its slides.
- **Python Coding Lab.** Real CPython 3.13 runs in the browser (Pyodide, WebAssembly) inside a Web Worker.
  - Jupyter-style notebook: cells share variables, execution counters, and the last expression's value is shown.
  - Script editor with saved files.
  - Interactive `input()`, real tracebacks, and the error line highlighted in the editor.
  - Stop button, configurable time limit and output limit.
  - CodeMirror 6 editor: syntax highlighting, auto-indent, bracket matching, line numbers. Shift/Ctrl+Enter runs the code.
- **Exercises.** Behaviour-based grading runs your program against visible and hidden tests, so any correct program passes. Failures are classified as:
  - syntax error
  - runtime error
  - timeout
  - no output
  - wrong output
  - missing requirement

  Hints come in four progressive levels; the full explanation appears only after a submission or when explicitly requested. A reference solution is shown after you submit.
- **Exam Simulator.** Six exams with sections weighted 40% multiple choice, 20% code tracing, 10% error identification and 30% practical coding (40 points).
  - Seeded question and option shuffling.
  - The timer is a stored deadline, so it survives refreshes and closed tabs.
  - Autosave, question navigator, flagging, and confirmation before submitting.
  - Automatic submission when time runs out.
  - Detailed review: score, time, topic and type breakdowns, strengths, weak concepts, and per-question explanations with slide citations and links to the related lesson and practice.
- **Practice, My Results, Mistake Review, Exam Readiness Mode.** Readiness is guidance per topic based on your real work; it never blocks you.
- **Curriculum Sources.** Shows the Topic 4 cut-off, the scope of every file, known errors found in the files, a slide browser, and the coverage matrix.
- **Settings.** Dark or light theme, editor options and the time limit. You can export progress as JSON, or reset progress (with confirmation). Everything is stored locally in IndexedDB; there is no account.

## Quick start

```bash
npm install          # also copies the Pyodide runtime into public/pyodide (postinstall)
npm run dev          # http://localhost:5173
```

Production build:

```bash
npm run build        # type-check + build into dist/
npm run preview      # serve dist/ on http://localhost:4173
```

## Tests and verification

```bash
npm test                  # unit tests (Vitest): grading, exam engine, stores, real Python harness
npm run verify:content    # curriculum audit: runs every example/answer/solution in Pyodide
npx playwright test       # end-to-end tests in Chromium (builds must exist: npm run build)
```

`verify:content` writes three files:

- `docs/audit/curriculum-audit.md`: pass/fail/review checks plus the coverage matrix
- `docs/audit/manual-review.md`: every item next to the source text it cites

See `docs/TESTING.md` for the latest results.

## Deployment

The output is a static site. `dist/` can be hosted on any static host (Netlify, Vercel, GitHub Pages, S3, nginx). It uses hash-based routing and relative asset paths, so it works from a sub-folder and needs no rewrite rules. It also needs no cross-origin-isolation headers, because `input()` support does not rely on `SharedArrayBuffer`.

`dist/` contains three kinds of files:

- `pyodide/` (~12 MB): the self-hosted Python runtime. It is served with the site, so no CDN is needed.
- `sources/`: images of the in-scope slides, PDF pages and notebook outputs, used for the "open the original slide" previews. These are your university's course materials. **If you deploy publicly, consider removing `public/sources/`** (previews then show nothing) or restricting access.

## Architecture

```
src/
  runtime/      harness.py (runs inside Pyodide), python.worker.ts, PythonRunner.ts (queue, timeout, stop, input)
  grading/      checks.ts — behaviour-based test checks, shared with the verifier
  exam/         engine.ts (seeded shuffle, deadline, grading), submit.ts (lazy answer keys + Python grading)
  data/         sources.ts, concepts.ts, lessons/, practice/, exams/ (questions and answers in separate files)
  store/        zustand stores persisted to IndexedDB (settings, progress, exams, lab)
  components/   code editor/console/runner, citations + previews, question widgets, charts, layout
  pages/        one file per route
scripts/        verify-curriculum.ts (+ py-worker.mjs), copy-pyodide.mjs
docs/           curriculum transcripts, audit reports, authoring guide, coverage report
tests/          unit/ (Vitest) and e2e/ (Playwright)
```

**How `input()` works.** A Web Worker cannot block while it waits for the page. The harness therefore first compiles the untouched source, so syntax errors are exactly CPython's. It then rewrites top-level `input(...)` calls in the AST to `await __pml_input__(...)`, keeping line numbers, and runs the program with top-level await. Line numbers and tracebacks stay real.

Limitation: `input()` inside a user-defined function raises a clear message. Functions are not part of the supplied topics.

## Limitations (honest list)

- **Not a secure exam system.** Answer keys are loaded only after submission (a separate lazy chunk), but a browser-only app can always be inspected. Use it as a self-study simulator. For graded assessment, move answer keys and hidden tests behind a server and run code in an isolated backend sandbox (for example a container per submission with CPU, memory and network limits).
- **Isolation is a Web Worker, not an OS sandbox.** Stop and the time limit terminate the worker and start a fresh interpreter. Memory is bounded only by the browser's WebAssembly limits.
- **The first Python load downloads about 12 MB** (cached afterwards). The interpreter takes a few seconds to start after Stop or a timeout.
- **Hints are prepared text, not live AI.** The error guide matches the real Python error against fixed, source-grounded tips and is labelled as such.
- **Topic 1 (Introduction) was not supplied**, so it is not included. Add the file and extend `src/data` to include it.
- **Semantic citation accuracy was reviewed by careful manual/agent review** against the slide transcriptions (about 1,230 citations; 2 wrong ones fixed, about 25 refined). A script can only prove that a cited slide exists and is in scope.
- **Python versions differ slightly.** Error messages come from Pyodide's CPython 3.13 and can differ slightly from older Python versions shown in the lab notebooks (e.g. "EOL while scanning string literal" vs "unterminated string literal").
