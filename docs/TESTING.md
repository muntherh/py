# Test Report

Run on 2026-10-21 against the production build (`npm run build`), in headless Chromium (Playwright 1.56.1) and Node 22.

## Curriculum verification — `npm run verify:content`

**7 passed · 0 failed · 5 review groups.** Full report: `docs/audit/curriculum-audit.md`.

| Check | Result |
|---|---|
| Topic 4 scope ends at slide 18 | PASS |
| 97 lesson example outputs match real Python (Pyodide CPython 3.13, the app's own harness) | PASS |
| Output-type MCQ answers match real Python | PASS |
| Exam answers verified by execution: tracing outputs, error types and lines, output MCQs, 12 coding solutions vs. their tests | PASS |
| 6 exams: numbering, difficulty, 30 min, 40/20/10/30 points split, no duplicates | PASS |
| All 34 concepts covered (lesson + practice + exam) | PASS |
| All 10 source files registered and cited | PASS |
| Citations exist and are in scope; no answer data in exam question files; out-of-syllabus code scan | PASS (in C0/C1/C3/C5/C6) |
| REVIEW: items citing a lab cell with a known error | Checked manually: each is cited as the task or as a find-the-bug source, never as the answer |

Semantic citation review (does the slide really show it?) is not provable by script. Every citation, about 1,230 in total, was reviewed against the transcriptions: 2 wrong citations were fixed, and about 25 were refined.

## Unit tests — `npm test` (Vitest)

**39 / 39 passed**

| File | Tests | Covers |
|---|---:|---|
| `checks.test.ts` | 15 | Output normalisation, number/contains/order/minInputs checks, comment stripping, tracing comparison, grading categories (syntax / runtime / EOF / timeout / no output / partial credit) |
| `engine.test.ts` | 6 | Seeded shuffle determinism; sections stay in order; deadline arithmetic; grading by original option index; partial coding credit; unanswered starter code; time capped at the deadline |
| `store.test.ts` | 6 | Answers frozen after the deadline and after submission; auto-submit flag; practice and exercise records; lesson completion |
| `harness.test.ts` | 12 | Real Python in Pyodide: output, SyntaxError / IndentationError text, compiler-stage errors, trimmed tracebacks, queued and interactive input, EOF, notebook namespace and display, fresh script namespace, output limit, input() inside a function |

## End-to-end tests — `npx playwright test`

**27 / 27 passed**

| Area | Tests |
|---|---|
| Navigation | All 10 pages load with no console errors; slide preview opens and pages through slides; excluded Topic 4 slides are not shipped |
| Learning | A lesson shows all its parts; the quick check gives feedback; completion persists after a reload; next-lesson navigation |
| Coding Lab | Real output; SyntaxError plus line highlight and error tip; runtime traceback; interactive `input()` and cancel → EOFError; Stop terminates the program and the UI stays responsive; the time limit stops a never-ending loop; notebook cells share variables |
| Exercises | A wrong program fails, the reference solution passes all visible and hidden tests; code survives a refresh; hints unlock one level at a time |
| Exams | All 6 open at 30:00; timer and answers survive a refresh; answering everything correctly scores **40/40**, with coding graded by real Python; auto-submit when time expires (simulated clock) |
| Responsive | No horizontal overflow at 1440×900, 1280×800, 768×1024 and 390×844 on 7 routes; mobile drawer navigation |
| Accessibility | axe-core: no serious or critical violations on 8 routes in the dark and light themes; skip link is the first Tab stop; visible focus |

Problems found and fixed through testing:

- **Stop during an interpreter restart.** Pressing Stop while the interpreter restarted did not cancel the queued run.
- **Leaving a page mid-run.** Navigating away kept the program running and blocking later runs.
- **Contrast.** Several contrast failures (primary and danger buttons, light-theme muted text, editor comments).
- **Mobile overflow.** Horizontal overflow on two pages at phone width.
- **Ligatures.** `<=` was rendered as a ligature in code.

## Not covered by automated tests

- Real Safari and Firefox were not tested; only Chromium was available in this environment.
- Physical touch devices were not tested; mobile layouts were checked with emulated viewports.
- Screen-reader output (NVDA, VoiceOver) was not tested; only automated axe checks and keyboard focus were.
