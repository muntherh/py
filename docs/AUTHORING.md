# Content Authoring Guide — Python Mastery Lab

Everything students see must come from the supplied course files or be an honest new practice item that tests a concept the files teach. Accuracy is the top priority, ahead of quantity and visual polish.

## 1. Sources you must use

| Source | Where to read it | Cite as (`file`) | Unit |
|---|---|---|---|
| Topic 2 deck (83 slides) | `docs/curriculum/transcripts/topic2_part1.md` (1–42), `topic2_part2.md` (43–83) | `topic2` | slide |
| Topic 3 deck (50 slides) | `docs/curriculum/transcripts/topic3.md` | `topic3` | slide |
| Topic 4 deck (slides 1–18 only) | `docs/curriculum/transcripts/topic4.md` | `topic4` | slide |
| Practice Exercises I (1 page, Ex 1–5) | `docs/curriculum/Practice_Exercises-I.txt` and the image `public/sources/pe1-1.webp` | `pe1` | page |
| Practice Exercises III (2 pages, Ex 1–7) | `docs/curriculum/Practice_Exercises-III.txt`, images `public/sources/pe3-1.webp`, `pe3-2.webp` | `pe3` | page (Ex 1–6 on page 1, Ex 6 outputs + Ex 7 on page 2) |
| Ch2 Practice II notebook | `docs/curriculum/labs/Ch2_Practice_II_1.md` | `lab-ch2-practice-ii` | cell |
| Ch3 Lab II notebook | `docs/curriculum/labs/Ch3_Lab_exercise_II.md` | `lab-ch3-ii` | cell |
| Ch3 Lab III notebook | `docs/curriculum/labs/Ch3_Lab_exercise_III.md` | `lab-ch3-iii` | cell |
| Ch3 Lab IIII notebook | `docs/curriculum/labs/Ch3_Lab_exercise_IIII.md` | `lab-ch3-iiii` | cell |
| Ch4 Lab IIII notebook (cells 1–4, 12–13 only) | `docs/curriculum/labs/Ch4_Lab_exercise_IIII.md` | `lab-ch4-iiii` | cell |

Cell numbers are the `### Cell N` headings in those files. The concept list with slide ranges is in `src/data/concepts.ts`; use those concept IDs. Scope rules and cells with known errors are in `src/data/sources.ts`. Read them.

You can view slide images directly if a transcript is unclear: `public/sources/t2-<n>.webp`, `t3-<n>.webp`, `t4-<n>.webp` (Topic 4 only 1–18).

## 2. Hard scope rules

- **Topic 4 stops before slide 19 ("Infinite loop").** Never teach, test or cite slides 19–55. That excludes infinite loops, `while True`, `for`, `range()`, `break`, `continue`, nested loops and lists.
- Do not use any Python feature the slides do not teach. The verifier rejects these in example, starter, solution and question code: `for`, `range`, `break`, `continue`, `while True`, `def`, `lambda`, `try/except`, `import`, `str()`, `round()`, `len()`, `max()`, `min()`, `abs()`, `sum()` (calling it; a variable named `sum` is fine), `bool()`, method calls such as `.upper()`, lists or indexing `[...]`, `in`, `is`, `pass`, `print(sep=...)`, and f-string format specs such as `{x:.2f}`.
- Allowed: values and types, `type()`, `int()`, `float()`, `input()`, `print()` including `end=`, f-strings with plain `{var}`, all arithmetic, assignment, comparison and logical operators, `if`, `elif`, `else`, conditional expressions, nesting, `while` with a condition, `None`, and comments.
- Do not write question prompts about infinite loops. The word "infinite" is rejected in questions.
- Always use straight quotes `'` `"` in code. Many slides show curly quotes; the real Python version uses straight ones.

## 3. Honesty rules

- **Never invent a slide, page or cell number.** Cite only units whose transcript actually shows the concept. If you are unsure, read the transcript again.
- Set `origin` honestly. `"source"` means the item is taken from the material (code or exercise, lightly cleaned up, e.g. curly quotes made straight). `"adapted"` means a variation of a source example or exercise. `"original"` means a new item you wrote that tests a concept the slides teach. Never present a new question as a verbatim university question.
- When a slide's shown output differs from real Python, the lesson must show the **real** output and add a `sourceNotes` entry explaining the difference. Examples: slide 13 shows `str` where `print(type('x'))` prints `<class 'str'>`; slide 67 shows `Hello Hilal !` where the code prints `Hello Hilal!`. Do not repeat a slide's error as fact.
- Ambiguous exercise wording, such as slide 17's "higher than 50" while its output passes a mark of 50, must be resolved by stating one precise rule in your prompt. Mention the discrepancy in an explanation or hint. Tests must only test what your prompt clearly states.

## 4. Writing style

- Use simple, clear English for a first-year student. Prefer short sentences. Avoid jargon the slides don't use.
- In lesson text you may use `inline code` and **bold**. No other markdown.
- Write explanations that teach: why the answer is right, and why the tempting wrong answer is wrong.
- Multiple-choice distractors must be plausible and reflect real student mistakes. Don't make the right answer the longest option.

## 5. Output rules (verified by running real Python)

All code is executed by `scripts/verify-curriculum.ts` with Pyodide (CPython 3.13) and the app's own harness, in a mode that simulates a terminal:

- `input("Prompt: ")` with the typed value `Ali` appears in a lesson example's `output` as `Prompt: Ali\n`, exactly as in a terminal.
- **Grading `stdout` does NOT include input prompts or typed values.** Only text written by `print()` counts. Coding test checks and tracing answers therefore look at printed output only.
- `print(type(5))` prints `<class 'int'>`. `10/5` prints `2.0`. `print("a", 1)` prints `a 1`.
- Lesson `output` must match the real terminal transcript exactly. For multi-line text use `\n` in the string. For an example that is meant to fail, set `raises` to the exact last traceback line (e.g. `TypeError: can only concatenate str (not "int") to str`). `output` is then whatever was printed before the error, often `""`.
- For an MCQ whose correct option is a program's output, set `answerIsOutput: true`. The keyed option must equal the real stdout (spacing-insensitive, case-sensitive; separate lines with `\n`).
- For error questions, `errorType` must be the real exception class (`SyntaxError`, `IndentationError`, `NameError`, `TypeError`, `ValueError`, `ZeroDivisionError`, …), and `errorLine` the line Python reports.
- For tracing questions, use `input()` with **no prompt text** (or no input at all), list the `inputs`, and make the answer key the exact printed output.

## 6. Coding exercises and coding exam questions

- `tests[0]` must be visible and match `sampleRun` exactly. `sampleRun` is the terminal transcript of the reference solution run with `tests[0].inputs`, prompts included.
- Include at least 2 visible tests and at least 1 hidden test. Use hidden tests for edge and boundary cases.
- Checks are behaviour-based, so different correct programs must pass:
  - Use `number` for numeric results; it accepts `9`, `9.0` and `9.00`. The default tolerance is 0.01, so set `tolerance` for small values.
  - Use `contains` / `notContains` for required messages (case-insensitive by default). Require exact words only when your prompt states the exact message, e.g. `print "Passed"`.
  - Use `notContains` to make sure the wrong branch's message is absent.
  - Use `order` when the order of outputs matters, and `minInputs` to require that values are actually read.
  - Do not make a check depend on a number that may legitimately appear elsewhere in the output.
- `requirements` are optional regex code requirements, e.g. `{ pattern: "\\bwhile\\b", message: "Use a while loop" }`, and only make sense when the task demands a construct.
- `hints` has exactly 4 levels:
  1. Concept: which idea to use, citing the slide, e.g. "See Topic 3, slide 33".
  2. Logic: the steps.
  3. Structure: a partial skeleton with `___` blanks.
  4. Full explanation of a correct solution.
- `starterCode` should be a helpful start (comments or a partial program). It must not already pass every test.
- The solution must use only allowed constructs and pass all tests. The verifier runs it.
- Prompts must say exactly what to read (and in what order) and what to print. Tests feed input lines in that order.

## 7. ID conventions (must be globally unique)

- Lessons: `lesson-t2-...`, `lesson-t3-...`, `lesson-t4-...`
- Practice MCQs: `pm-t2a-001`, `pm-t2b-001`, `pm-t3-001`, `pm-t4-001`, …
- Exercises: `ex-t2-01`, `ex-t3-01`, `ex-t4-01`, …
- Exam questions: `x<exam#>-mcq-01`, `x<exam#>-tr-01`, `x<exam#>-err-01`, `x<exam#>-code-01`

## 8. Verify before you finish

Run `npx tsx scripts/verify-curriculum.ts --only <part>` from the project root (`/home/user/python-mastery-lab`). `<part>` is `lessons`, `mcq`, `exercises` or `exams`. Fix every FAIL that involves your files.

- `--only lessons` also needs your quick-check MCQs to exist, so write the MCQ file first.
- REVIEW items are citation sanity hints. Double-check each one and fix it if the citation is wrong.
- Other agents are editing other files at the same time. Only edit your own files, and ignore failures in files you don't own.
- Type-check your files with `npx tsc -p tsconfig.app.json --noEmit`, ignoring errors outside your files.
