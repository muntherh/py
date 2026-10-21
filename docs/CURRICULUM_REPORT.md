# Curriculum Analysis and Coverage Report

## 1. Files analysed

| File | Units | Scope used | How it was read |
|---|---|---|---|
| Topic 2 – Variables, expressions and statements.pptx | 83 slides | All | Text extraction, plus a visual transcription of every slide image (the code is mostly in pictures) |
| Topic 3 – Conditional Execution.pptx | 50 slides | All | Same |
| Topic 4 – Iterations.pptx | 55 slides | **Slides 1–18** | Same (slides 1–22 transcribed, to confirm the boundary) |
| Practice_Exercises-I.pdf | 1 page | All (Ex 1–5) | Text plus page image (sample outputs are images) |
| Practice_ExercisesIIII.pdf | 2 pages | All (Ex 1–7) | Text plus page images |
| Ch2__Practice__II_1.ipynb | 13 cells | All | Parsed notebook JSON |
| Ch3_Lab_exercise_II.html | 33 cells | All | Parsed Jupyter HTML export and embedded images |
| Ch3_Lab_exercise_III.html | 32 cells | All | Same |
| Ch3_Lab_exercise_IIII.html | 28 cells | All | Same |
| Ch4_Lab_exercise_IIII.html | 24 cells | **Cells 1–4, 12–13** | Same |

**Topic 1 – Introduction was not supplied.** No content was invented for it.

Full per-slide transcriptions are in `docs/curriculum/transcripts/`, with an **Issues** entry for every slide. The parsed notebooks are in `docs/curriculum/labs/`.

## 2. Topic 4 cut-off

**Slide 19 is the section title "Infinite loop".** It and every later slide are excluded.

| Slides | Content | Status |
|---|---|---|
| 1–2 | Title; what is iteration (definite = for loop, indefinite = while loop) | ✅ included |
| 3–8 | While loop: flowchart, syntax, condition checked first, comparison/logical operators, non-zero / 0 / None as conditions | ✅ included |
| 9–11 | Print 1–5, the initialise/condition/update pattern, count down | ✅ included |
| 12–15 | Sum 1–10, average and factorial exercises, average of N numbers, multiplication table | ✅ included |
| 16–18 | While loop with conditionals: pass/fail, discounts | ✅ included |
| 19–21 | Infinite loops, `while True`, Ctrl+C | ❌ excluded |
| 22–32 | `for` loops and `range()` | ❌ excluded |
| 33–35 | Loops with conditions (for-based) | ❌ excluded |
| 36–47 | `break`, `continue` | ❌ excluded |
| 48–55 | Nested loops | ❌ excluded |

How the cut-off is enforced:

- **Sources and previews.** The slide registry (`src/data/sources.ts`) allows only slides 1–18. Slide images for 19–55 are not shipped.
- **Verifier rejects excluded citations.** It fails any citation outside the scope.
- **Verifier rejects excluded features.** It fails any reference code (examples, starter code, solutions, question code) that uses `for`, `range`, `break`, `continue`, `while True`, functions, lists, imports or built-ins that are not taught.
- **Verifier rejects the topic in questions.** It fails any question that mentions infinite loops.

**Boundary note for confirmation.** Slide 8 is in scope, yet it shows `while 3:` printing "Hello" over and over: in effect a loop that never stops, appearing before the infinite-loop section. The platform teaches only its rule (non-zero numbers count as True; 0 and None count as False). That code is never run, and no question asks about never-ending loops. Lessons warn that forgetting the counter update makes "the loop never stop", which the app's time limit catches.

## 3. Content built (all verified)

| Item | Topic 2 | Topic 3 | Topic 4 | Total |
|---|---:|---:|---:|---:|
| Lessons | 13 | 6 | 6 | 25 |
| Lesson examples (outputs checked in Python) | | | | 97 |
| Practice MCQs | 73 | 39 | 31 | 143 |
| Coding exercises | 15 | 25 | 11 | 51 |
| Exam questions | 36 | 36 | 24 | 96 |

Every item is labelled with its **origin**:

| Origin | Meaning | MCQs | Exercises | Exam questions |
|---|---|---:|---:|---:|
| `source` | Taken from the material, lightly cleaned up (curly quotes made straight, etc.) | 15 | 26 | 0 |
| `adapted` | A variation of a source example or exercise | 74 | 25 | 21 |
| `original` | A new practice item that tests a concept the material teaches | 54 | 0 | 75 |

No new item is presented as a university question.

The six exams:

| # | Title | Difficulty | Time | Composition |
|---|---|---|---|---|
| 1 | Foundations | Easy | 30 min | 8 MCQ · 4 tracing · 2 error · 2 coding = 40 pts |
| 2 | Building Blocks | Easy | 30 min | same |
| 3 | Operators, Decisions and Counting Loops | Medium | 30 min | same |
| 4 | Types, Combined Conditions and Running Totals | Medium | 30 min | same |
| 5 | Precedence Traps, Nested Decisions and Loop Tracing | Hard | 30 min | same |
| 6 | Strings, Boundaries and Conditional Accumulators | Hard | 30 min | same |

## 4. Coverage matrix

All 34 concepts are covered by at least one lesson, practice item and exam question. The live matrix is on the app's **Curriculum Sources** page and in `docs/audit/curriculum-audit.md`.

## 5. Problems found in the source files

The lessons always show **real Python behaviour** and explain the difference in "Notes about the slides" (119 notes in total). The most important problems:

### Topic 2 slides

**Code that is invalid as typed:**

- Curly "smart" quotes in many code examples.
- `6 E10` (slide 5).
- `9 / /1.81` (slide 34).
- `<>` listed as "not equal" (slide 38; Python 2 only).
- Stray indentation on slides 70, 72, 75 and 79.

**Outputs that differ from real Python:**

- `type()` results shown as `str` / `int`, the Jupyter display (slides 13 and 24).
- `13/3` truncated (slide 33).
- `a+=4` shown printing 11 (slide 50).
- `6+4/2` given as 8 instead of 8.0 (slide 56).
- `Hello Hilal !` where the code prints `Hello Hilal!` (slide 67).
- Double spaces from comma printing not shown (slide 74).
- `end=` results that don't match the code (slide 77).

### Topic 3 slides

- Python 2 `print` (slide 23).
- "two digits" printed for 100 (slide 24).
- An input of 50 is reported as "greater than 50" (slide 26).
- The code never prints (slide 30).
- With strict `>`, ties give the wrong largest number (slide 37).
- Integer grade ranges leave 89.5 undefined (slide 38).
- The ratio is height/weight in the text but weight/height in the code (slides 47–48).
- The tax brackets overlap at 500 (slide 49).

### Topic 4 slides

- Slides 17 and 18 say "higher than 50", but their sample outputs treat 50 as passing / discounted. Exercises state one precise rule and test the boundary.
- Slide 12's `i = 1` is a text box laid over a screenshot that reads `i = 0`. Both give 55.

### Practice Exercises

- **PE III Ex 6:** Output 4 shows "pay 55" for 10 + 30 = 40.
- **PE III Ex 6:** the price ranges leave gaps for non-integer totals.
- **PE I Ex 3:** implies the current year is 2021.

### Labs (never used as answers)

| Notebook | Cell | Problem |
|---|---|---|
| Ch3 Lab II | 11 | Compares a string with `True` |
| Ch3 Lab II | 12 | Uses `and` where the task says "or" |
| Ch3 Lab II | 25 | Compares daily hours with the weekly thresholds |
| Ch3 Lab III | 4 | Uses `/` where `//` is needed |
| Ch3 Lab III | 29 | Leaves a gap for marks 50–59 |
| Ch3 Lab IIII | 2–4 | Ambiguous or invalid code |
| Ch3 Lab IIII | 12 | Grade gaps raise NameError for 89.5 |
| Ch4 Lab IIII | 4 | `avg = total/days` |

## 6. Verification summary

See `docs/audit/curriculum-audit.md`, generated by `npm run verify:content`:

- 0 failed checks.
- 97 / 97 lesson outputs match real Python.
- Every output-type MCQ answer, tracing answer, error type and line, and coding solution was verified by running it.
- Six exams correctly configured.
- All concepts and all 10 source files are covered.

Items flagged **REVIEW** cite a lab cell with a known error. Each was checked: the cell is cited as the task or as a "find the bug" source, never as the answer.
