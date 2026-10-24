# CSSY1208 — Information Security Midterm Academy

A self-study website for the **CSSY1208 Introduction to Information Security** midterm (Fall 2026, University of Technology and Applied Sciences). It is built only from five course files: Lectures 1–4 and the Lab Manual Part I. Only **Labs 4, 5 and 6** of the manual are used.

The app sits in the `infosec/` folder of the `py` repository. It is a separate app with its own `package.json`. The original Python Mastery Lab at the repository root is unchanged.

## Exam scope covered

| Official notice | Where it is covered |
|---|---|
| 20 marks, paper based, all question types | Mock exams always total exactly 20 marks and use 7 question formats |
| Chapters 1–4 (theory) | 29 lessons, 141 questions, 95 flashcards |
| Labs 4, 5, 6 (questions on lab activities, no computer work) | 10 lessons with step-by-step simulators, 62 questions, 24 flashcards |
| Learn to make the alphabet table (Lab 6) | Interactive table, a fill-from-memory builder, and alphabet questions |
| No scientific calculators | No-Calculator Mode, and mod-26-by-hand guidance in every worksheet |

## Features

1. **Dashboard**
   - The official exam notice
   - A study-readiness indicator. It is guidance only, not a mark prediction.
   - Your syllabus with progress, weak topics and recent activity
2. **Chapter lessons and lab tutorials** (39 lessons)
   - Every block cites its slide or Lab Manual page and has an optional Arabic explanation. English terms stay visible.
   - Diagrams and key points to memorise
   - Exam traps
   - A quick check at the end
3. **Lab simulators**
   - Lab 4: a guided Windows NTFS walk-through of Steps 1–10, including Allow/Deny, "Applies to" and removing inherited permissions. There is also an inheritance visualiser.
   - Lab 5: an Event Viewer simulator with the Windows Logs tree, General and Details tabs, Filter Current Log (levels and time period), and Find / Find Next.
4. **Cryptography Lab** (Lab 6)
   - Interactive A–Z alphabet table, from A = 0 to Z = 25, with a "build it from memory" exercise
   - Caesar and Vigenère worksheets:
     - You fill in every cell: value, sum, mod 26 and letter.
     - Checking marks each cell and explains the first mistake.
     - Three hints come before the full solution is shown.
   - Rail Fence: a zig-zag visualisation with step-through, per-rail checking, and decryption using placeholders
   - Route: you fill the grid row by row or column by column. Three routes are supported, with an animated path and numbered steps.
   - Encryption and decryption for all four ciphers
   - Final-answer validation that says *why* an answer is wrong:
     - shifted in the wrong direction
     - counted A as 1
     - misaligned the Vigenère key
     - used the wrong rail depth
     - followed the wrong route
     - filled the grid in the wrong direction
     - changed letters in a transposition
   - No-Calculator Mode: paper-style problems with no hints until you check
   - The 8 Lab Manual exercises and examples, each solvable step by step
5. **Flashcards** (119): Leitner boxes, definition-first mode and Arabic terms.
6. **Practice quizzes** (203 questions)
   - Filter by chapter or lab, topic, type, focus and difficulty.
   - Modes: unseen, open mistakes and weak topics.
   - Every answer gets immediate feedback with an explanation, a learning objective and the exact source reference.
7. **Mock examinations**
   - 6 named papers (easy, medium and hard A/B), plus unlimited random papers
   - Each paper is exactly 20 marks and covers all four chapters and Labs 4, 5 and 6.
   - Question order is randomized on every attempt.
   - You choose the duration. The timer is stored as a deadline, so it survives reloads and auto-submits when time runs out.
   - No hints during the exam. You can flag questions, use a navigator, and switch to a full-paper view.
   - Grading gives a mark out of 20, a breakdown by chapter, lab, section and topic, and a detailed answer review.
8. **Mistake notebook.** Wrong answers from practice, exams and No-Calculator Mode are collected here. You can retry them; a correct retry marks a mistake resolved.
9. **Weak-topic revision.** This shows mastery per topic from practice and exams. Topics below 60% become a targeted practice mode.
10. **Progress tracking**
    - Lessons, questions, crypto drills, flashcards and an exam history chart
    - Everything is saved locally in IndexedDB.
    - You can export your progress as JSON or reset it.
11. **Last-minute revision.** A printable page with every key point, the crypto formula sheet, the alphabet table and a rapid-fire True/False drill.
12. **Sources and coverage.** A per-slide and per-page coverage matrix, plus every issue found in the course files.

**Question formats:**
- multiple choice
- true/false
- fill in the blanks
- matching
- ordering (lab procedures)
- short answer (definitions and scenarios)
- cryptography calculations
- alphabet-table exercises

Every question has:
- a correct answer
- an explanation
- a source reference
- a difficulty
- a topic
- a learning objective
- a provenance label: either "from course material" or "practice item written from the cited source"

## Setup

Requirements: Node.js 20+ (tested with Node 22).

```bash
cd infosec
npm install
npm run dev            # http://localhost:5174
```

Production build:

```bash
npm run build          # type-check + build into infosec/dist
npm run preview        # http://localhost:4174
npm run serve:vercel   # serves dist/ the way Vercel does (vercel.json rewrites + headers), http://localhost:4175
```

The build is a static site with hash routing and relative paths. You can host `dist/` on any static host or in a sub-folder. It needs no backend and no paid APIs.

## Deploying to Vercel

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md). In short: import the repository in Vercel, set **Root Directory** to `infosec`, and keep the defaults — `infosec/vercel.json` sets the build, output folder, rewrites and headers.

## Tests

```bash
npm test                       # unit tests (Vitest)
npx playwright test            # end-to-end, desktop + mobile (run `npm run build` first)
npm run audit:content          # regenerates docs/SOURCE_COVERAGE.md and fails on any mismatch
```

See [`docs/TESTING.md`](docs/TESTING.md) for the latest results and [`docs/SOURCE_COVERAGE.md`](docs/SOURCE_COVERAGE.md) for the source coverage report.

## Architecture

```
src/
  crypto/ciphers.ts       Caesar, Vigenère, Rail Fence, Route — encryption/decryption with full step traces + mistake diagnosis
  grading/grade.ts        deterministic grading for all 7 question kinds (+ half-mark partial credit)
  exam/engine.ts          seeded paper generation from a 20-mark practice blueprint, generated crypto items, deadlines, grading
  data/                   course.ts (units, topics, source registry), lessons/, questions/, flashcards.ts, sourceNotes.ts
  store/                  zustand stores persisted to IndexedDB (settings, progress, exams)
  components/             crypto worksheets, question renderer, diagrams, Lab 4/5 simulators, layout, UI
  pages/                  one file per route
scripts/audit-content.ts  coverage + verification report
tests/unit, tests/e2e     Vitest and Playwright suites
```

The app reuses these patterns from the `py` repository:
- Vite, React, TypeScript and Tailwind 4
- zustand stores persisted to IndexedDB through `idb-keyval`
- the seeded `mulberry32` shuffle
- the exam deadline model and auto-submit watcher
- source citations on every lesson and question
- the grouped sidebar and the phone tab bar

## Known limitations

- **Short answers are graded by keywords.** Each answer is checked for the required key ideas, using listed synonyms and stems. A correct answer in unusual wording can be under-marked. The model answer is always shown, so judge your own answer against it as well.
- **The mock-exam blueprint and timers are practice settings.** The official question distribution and duration were not provided.
- **Partial credit is a practice rule.** Fill, matching, ordering, short-answer and cryptography items earn half-marks, rounded down. Your instructor's marking may differ.
- **The simulators are for revision.** The Lab 4 default permission entries and the Lab 5 events are sample data, clearly labelled. The procedures follow the manual.
- **Route Example 2 is reconstructed.** The manual fills the grid column by column even though its step 2 says "row by row", and it describes the Example 2 routes only briefly. Both routes were rebuilt so that they reproduce the manual's ciphertexts exactly. Confirm the exam's conventions with your instructor. The full list of source issues is in `docs/SOURCE_COVERAGE.md`.
- **This is not a secure exam system.** Answers are in the client bundle, so treat it as a self-study tool.
- **No course files are published.** Citations give the slide or page number to look up in your own copy; slide and Lab Manual images are not included, and the build fails if any image of that kind ends up in `dist/` (`scripts/check-dist.mjs`).
