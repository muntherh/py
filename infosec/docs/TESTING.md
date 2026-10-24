# Testing report

Latest run: 2026-10-24, Node 22, Chromium (Playwright 1.63). End-to-end tests run against the production build served the way Vercel serves it.

## Commands and results

| Check | Command | Result |
|---|---|---|
| Type check | `npx tsc -b` | ✅ no errors |
| Production build | `npm run build` | ✅ built (JS ≈ 217 kB gzip total) |
| Unit tests | `npm test` | ✅ **69 / 69 passed** (5 files) |
| End-to-end | `npx playwright test` | ✅ **33 passed, 1 skipped** (desktop 1440×900 and mobile Pixel 7, served like Vercel by `scripts/serve-vercel.mjs`) |
| Deployment guard | `node scripts/check-dist.mjs` (runs inside `npm run build`) | ✅ no slide/page images in `dist/`; shown to fail when one is added |
| Content audit | `npm run audit:content` | ✅ 8/8 Lab Manual crypto examples reproduced; 900/900 random papers total 20 |

The one skipped e2e test is the keyboard skip-link test on the mobile project. It is desktop-only by design.

## What the unit tests prove

### `ciphers.test.ts` (27 tests)

- The alphabet table runs from A = 0 to Z = 25.
- Every Lab Manual example matches, including the intermediate values in the manual's own tables:
  - Caesar: SECRET, K=3 → VHFUHW (row by row: 18→21 V, …)
  - Caesar: CRYPTO, K=7 → JYFWAV
  - Vigenère: SECRET with WORD → OSTUAH (sums 40/18/19/20/26/33)
  - Rail Fence: MUSCAT → MAUCTS, and CIPHERTEXT → CEXIHRETPT
  - Route Example 1 → HIDHOXDLEETG
  - Route Example 2, both routes → TONCEADOEFLEEECRVERSADIEW and TONCEADOERAEWDVFLEEECSIER
- Decryption inverts every cipher. This is checked for all Caesar keys, several Vigenère keys and Rail Fence depths 2–5.
- Every route visits every cell exactly once, for all grid shapes from 1×1 to 7×7.
- Mistake diagnosis detects:
  - wrong shift direction
  - A=1 off-by-one
  - missed wrap-around
  - misaligned Vigenère key
  - wrong rail depth
  - changed letters in a transposition
  - wrong route
  - wrong fill direction
- Mistake diagnosis also accepts a decryption without its padding.

### `content.test.ts` (15 tests)

- **Scope**
  - The syllabus is exactly Chapters 1–4 and Labs 4, 5, 6.
  - Lab Manual scope is pg. 8–16 only.
  - No lesson, question or flashcard mentions Labs 1, 2, 3 or 7.
  - Every LAB reference names a lab whose pages it actually cites.
- **Coverage**
  - Every topic has a lesson and at least one question.
  - Every content slide of all four lectures is taught (only title, textbook and thank-you slides are exempt).
  - Every Lab 4–6 page is taught.
  - Every lesson block has an in-scope source and an Arabic explanation.
- **Question bank** (203 questions)
  - Ids are unique.
  - Every question has an answer, an explanation, an in-scope source, a difficulty, a topic and an objective.
  - The structure is valid: answer indexes are in range, the blank count matches `___`, and items are not duplicated.
  - Every crypto answer equals the engine's output.
  - Every stored correct answer grades as fully correct.
  - Every short-answer model answer hits all of its key ideas, and "I do not know" scores below 50%.

### `exam.test.ts` (13 tests)

- The blueprint totals exactly 20 marks.
- 450 generated papers (150 per difficulty) were checked. Each one:
  - totals exactly 20 marks
  - has no duplicate questions
  - covers ch1–ch4 (at least 1.5 marks each), Lab 4, Lab 5 and Lab 6 (at least 5 marks)
- Generation is deterministic per seed.
- The same paper with a different order seed has the same questions in a different order.
- Sections stay in order, and the difficulty setting shifts the easy/hard mix.
- 400 generated cryptography items are self-consistent.
- Perfect answers score 20/20 and blank answers score 0/20.
- One wrong MCQ scores 19.5.
- Timer helpers (`remainingMs`, `isExpired`) behave correctly.

### `grading.test.ts` (10 tests)

- Normalisation works.
- Fill-in answers: alternatives are accepted, and partial credit is given per blank.
- Matching allows a repeated right-hand answer.
- Ordering is scored by position.
- Keyword stems and whole-word matching work (`ids` does not match "considers").
- Route decryption is accepted with or without its padding.
- Half-mark rounding is applied.

### `store.test.ts` (4 tests)

- Practice answers, mistakes and their resolution are recorded.
- Leitner boxes for flashcards work.
- Progress and exam attempts are written to IndexedDB (`fake-indexeddb`) and rehydrated from it.
- A submitted exam cannot be changed or submitted twice.

## Deployment tests (`tests/e2e/deploy.spec.ts`, desktop and mobile)

These run against `scripts/serve-vercel.mjs`, which serves `dist/` using the rewrites and headers in `vercel.json`.

- **Refresh:** 13 routes reload onto the same page, with no page errors and no CSP violations. This test caught a real problem: a CSP that blocked an inlined font. `font-src` now allows `data:`.
- **Plain paths:** `/learn/ch1-cia`, `/crypto` and `/exams` return 200 and open the right page.
- **Exam in progress:** after a refresh, the answer is still there and the timer is still running.
- **Headers:** CSP, `nosniff` and `no-cache` are sent on the HTML, and `immutable` on the hashed assets.
- **Course material:** `/sources/*.webp` never returns an image. Citations show the exact reference as text, and no `<img>` points to course material.

## What the end-to-end tests prove (real browser, desktop and mobile)

- **All 22 routes**
  - Each renders with no page errors.
  - No page scrolls horizontally on a 1440 px desktop or a Pixel 7 phone.
- **Practice**
  - Answering shows deterministic feedback with an explanation and a source button.
- **Cryptography Lab**
  - A wrong cell is detected: “First mistake — row 1, x + 3 … 18 + 3 = 21”.
  - A hint is shown before the solution.
  - A wrong-direction answer is diagnosed.
  - The correct VHFUHW validates.
  - Rail Fence reproduces CEXIHRETPT and Route reproduces TONCEADOEFLEEECRVERSADIEW.
  - The alphabet builder scores 25/26 and names the wrong cell (“F should be 5”).
- **Mock exam**
  - Start, then answer and flag.
  - Reload: the answer and the flag persist, and the timer keeps running.
  - No explanations appear during the exam.
  - Submit, then grade: the review shows a score out of 20, the topic report and the answer review.
  - The history persists after a reload.
  - Mistakes are copied to the notebook.
- **Lessons**
  - Lesson completion and the Arabic toggle persist after a reload.
  - The dashboard shows 1/39.
- **Lab 4 simulator**
  - Steps 1–10 can be completed in order, ending with the inherited entries removed.
- **Lab 5 simulator**
  - Filtering Application to Warning + Error over the last 7 days leaves 3 events.
- **Flashcards**
  - A card can be flipped and rated.
- **Accessibility**
  - axe-core, with all rules including colour contrast, reports no serious or critical violations on 6 key pages, on desktop and on mobile.
  - A separate contrast audit of 8 pages also passed in both the dark and light themes.
- **Keyboard**
  - The first Tab focuses “Skip to content”.

## Not covered by automated tests

- **Short-answer marking quality.** Tests prove that the model answers pass and that blank or irrelevant answers fail, but no test checks marking quality against many real student answers.
- **Browsers.** Only Chromium was used. Firefox and Safari were not tested.
- **Printing.** The print layout of the Revision page was not checked automatically.
