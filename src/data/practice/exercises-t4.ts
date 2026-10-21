import type { CodeRequirement, OutputCheck, PracticeExercise } from "../types";

// Topic 4 practical exercises — while loops only (Topic 4, slides 1–18).
// Every solution uses `while <condition>:` with a counter or a condition; no for/range/break/continue.
// Every sampleRun is the real terminal transcript of `solution` run with tests[0].inputs.

const WHILE_REQ: CodeRequirement = { pattern: "\\bwhile\\b", message: "Use a while loop" };

/** Regex check: the numbers appear on consecutive lines, one number per line, in this order. */
function linesInOrder(nums: number[], label: string): OutputCheck {
  const body = nums.map((n) => `[ \\t]*${n}[ \\t]*`).join("\\n");
  return { type: "regex", pattern: `(^|\\n)${body}(\\n|$)`, label };
}

/** Regex check: a full multiplication table n * 1 … n * 10 in order (spacing between parts is free). */
function tableLines(n: number): OutputCheck {
  const rows: string[] = [];
  let i = 1;
  while (i <= 10) {
    rows.push(`(?<![\\d.])${n}\\s*\\*\\s*${i}\\s*=\\s*${n * i}(?![\\d.])`);
    i++;
  }
  return {
    type: "regex",
    pattern: rows.join("[\\s\\S]*?"),
    label: `Output should show ${n} * 1 = ${n} through ${n} * 10 = ${n * 10}, in order`,
  };
}

/** Regex check: exactly four pass/fail results are printed. */
const FOUR_RESULTS: OutputCheck = {
  type: "regex",
  pattern: "^(?:(?:(?!passed|failed)[\\s\\S])*(?:passed|failed)){4}(?:(?!passed|failed)[\\s\\S])*$",
  flags: "i",
  label: "Output should show exactly 4 results (one per student)",
};

export const EXERCISES_T4: PracticeExercise[] = [
  // ------------------------------------------------------------------ 01
  {
    id: "ex-t4-01",
    kind: "coding",
    topicId: "t4",
    title: "Print 1 to N",
    category: "write",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t4-counter", "t4-while"],
    sources: [{ file: "topic4", units: [9, 10], note: "while loop printing 1 to 5; initialization, condition, update" }],
    prompt:
      "Topic 4, slide 9 prints the numbers 1 to 5. Make it more general: read a whole number N (1 or more) and use a while loop to print the numbers from 1 to N, each on its own line. Print nothing else.\n\n" +
      "For N = 5 the output is:\n1\n2\n3\n4\n5",
    starterCode: `N = int(input("Enter a number: "))

# Use a while loop to print 1, 2, ..., N
`,
    solution: `N = int(input("Enter a number: "))
A = 1
while A <= N:
    print(A)
    A = A + 1
`,
    sampleRun: "Enter a number: 5\n1\n2\n3\n4\n5\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "N = 5",
        inputs: ["5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          linesInOrder([1, 2, 3, 4, 5], "Output should be 1, 2, 3, 4, 5 on separate lines"),
          { type: "notNumber", value: 6 },
          { type: "notNumber", value: 0 },
        ],
      },
      {
        id: "t2",
        description: "N = 8",
        inputs: ["8"],
        hidden: false,
        checks: [
          linesInOrder([1, 2, 3, 4, 5, 6, 7, 8], "Output should be 1 to 8 on separate lines"),
          { type: "notNumber", value: 9 },
        ],
      },
      {
        id: "t3",
        description: "N = 1 (the loop runs once)",
        inputs: ["1"],
        hidden: true,
        checks: [
          linesInOrder([1], "Output should be just 1"),
          { type: "notNumber", value: 2 },
          { type: "notNumber", value: 0 },
        ],
      },
      {
        id: "t4",
        description: "N = 12",
        inputs: ["12"],
        hidden: true,
        checks: [
          linesInOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], "Output should be 1 to 12 on separate lines"),
          { type: "notNumber", value: 13 },
        ],
      },
    ],
    hints: [
      "See Topic 4, slides 9–10: a counting loop has three parts — initialize the counter, test it in the while condition, and update it in the body.",
      "Start a counter at 1. While the counter is less than or equal to N, print it and then add 1 to it.",
      "N = int(input(\"Enter a number: \"))\nA = ___\nwhile A ___ N:\n    print(___)\n    A = ___",
      "A = 1 starts the count. while A <= N: keeps looping as long as A has not passed N, so N itself is printed too (< N would stop at N − 1). Inside the loop, print(A) and then A = A + 1. Without the update, A stays 1 and the condition is always True, so the program never stops.",
    ],
  },

  // ------------------------------------------------------------------ 02
  {
    id: "ex-t4-02",
    kind: "coding",
    topicId: "t4",
    title: "Complete: Count Down",
    category: "complete",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t4-counter", "t4-while"],
    sources: [{ file: "topic4", units: [11], note: "Count down from 5 to 1 with N = N - 1" }],
    prompt:
      "Topic 4, slide 11 counts down from 5 to 1. The starter program reads a whole number N (1 or more) and should count down from N to 1, one number per line, and print nothing else. " +
      "Replace each ___ to complete the while loop.\n\nFor N = 5 the output is:\n5\n4\n3\n2\n1",
    starterCode: `N = int(input("Enter a starting number: "))
while ___:
    print(___)
    N = ___
`,
    solution: `N = int(input("Enter a starting number: "))
while N >= 1:
    print(N)
    N = N - 1
`,
    sampleRun: "Enter a starting number: 5\n5\n4\n3\n2\n1\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "N = 5",
        inputs: ["5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          linesInOrder([5, 4, 3, 2, 1], "Output should be 5, 4, 3, 2, 1 on separate lines"),
          { type: "notNumber", value: 0 },
        ],
      },
      {
        id: "t2",
        description: "N = 3",
        inputs: ["3"],
        hidden: false,
        checks: [
          linesInOrder([3, 2, 1], "Output should be 3, 2, 1 on separate lines"),
          { type: "notNumber", value: 0 },
          { type: "notNumber", value: 4 },
        ],
      },
      {
        id: "t3",
        description: "N = 1",
        inputs: ["1"],
        hidden: true,
        checks: [linesInOrder([1], "Output should be just 1"), { type: "notNumber", value: 0 }],
      },
      {
        id: "t4",
        description: "N = 10",
        inputs: ["10"],
        hidden: true,
        checks: [
          linesInOrder([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Output should be 10 down to 1 on separate lines"),
          { type: "notNumber", value: 0 },
        ],
      },
    ],
    hints: [
      "See Topic 4, slide 11: N=5, while N>=1:, print(N), N=N-1.",
      "The loop should keep going while N is still 1 or more. Each time, print N and then make it 1 smaller.",
      "while N >= ___:\n    print(N)\n    N = N - ___",
      "while N >= 1: tests the counter before every iteration. print(N) shows the current value, and N = N - 1 moves it one step down. When N becomes 0 the condition is False and the loop ends, so 0 is never printed. Using N > 1 would stop too early (1 would be missing).",
    ],
  },

  // ------------------------------------------------------------------ 03
  {
    id: "ex-t4-03",
    kind: "coding",
    topicId: "t4",
    title: "Sum of 1 to N",
    category: "write",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t4-accumulator", "t4-counter"],
    sources: [{ file: "topic4", units: [12], note: "Sum of the numbers 1 to 10 with a while loop: the sum is 55" }],
    prompt:
      "Topic 4, slide 12 adds the numbers from 1 to 10 and prints the sum is 55. Make it general: read a whole number N (1 or more), use a while loop to add 1 + 2 + … + N, and print the result once, after the loop:\n\n" +
      "the sum is 55\n\n" +
      "(That is the result for N = 10.)",
    starterCode: `N = int(input("Enter N: "))

# Start a counter and a running total


# Loop from 1 to N, adding each number to the total


# Print the total once, after the loop
`,
    solution: `N = int(input("Enter N: "))
i = 1
sum = 0
while i <= N:
    sum = sum + i
    i = i + 1
print("the sum is", sum)
`,
    sampleRun: "Enter N: 10\nthe sum is 55\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "N = 10 (slide 12)",
        inputs: ["10"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          { type: "contains", text: "sum" },
          { type: "number", value: 55 },
          { type: "notNumber", value: 45, label: "Print the sum once, after the loop (not the running totals)" },
        ],
      },
      {
        id: "t2",
        description: "N = 5",
        inputs: ["5"],
        hidden: false,
        checks: [{ type: "number", value: 15 }],
      },
      {
        id: "t3",
        description: "N = 1",
        inputs: ["1"],
        hidden: true,
        checks: [{ type: "number", value: 1 }],
      },
      {
        id: "t4",
        description: "N = 100",
        inputs: ["100"],
        hidden: true,
        checks: [
          { type: "number", value: 5050 },
          { type: "notNumber", value: 4950 },
        ],
      },
    ],
    hints: [
      "See Topic 4, slide 12: a counter i goes from 1 to 10 and a variable sum, started at 0 before the loop, collects the total.",
      "Before the loop: i = 1 and sum = 0. In the loop (while i <= N): add i to sum, then add 1 to i. After the loop, print sum.",
      "i = 1\nsum = 0\nwhile i <= ___:\n    sum = sum + ___\n    i = ___\nprint(\"the sum is\", ___)",
      "sum starts at 0 and grows by i each time: 0+1, then +2, … up to +N. The print() must come after the loop (not indented), otherwise every running total is printed. If sum = 0 were inside the loop, it would be reset each time and the result would be wrong. For N = 10 the answer is 55.",
    ],
  },

  // ------------------------------------------------------------------ 04
  {
    id: "ex-t4-04",
    kind: "coding",
    topicId: "t4",
    title: "Fix: Average of 5 Numbers",
    category: "fix",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t4-accumulator", "t4-counter"],
    sources: [
      { file: "topic4", units: [13], note: "Exercise: average of 5 numbers given by the user with a while loop" },
      { file: "topic4", units: [10], note: "The update step of a while loop" },
    ],
    prompt:
      "Topic 4, slide 13: read 5 numbers from the user (they may have decimals) and print their average (average = sum of the five numbers / 5):\n\n" +
      "The average is 30.0\n\n" +
      "The starter program has a bug: the program never stops — after the fifth number it keeps asking for more. Fix it so it reads exactly 5 numbers and then prints the average.",
    starterCode: `count = 1
total = 0
while count <= 5:
    num = float(input("Enter a number: "))
    total = total + num
average = total / 5
print("The average is", average)
`,
    solution: `count = 1
total = 0
while count <= 5:
    num = float(input("Enter a number: "))
    total = total + num
    count = count + 1
average = total / 5
print("The average is", average)
`,
    sampleRun: "Enter a number: 10\nEnter a number: 20\nEnter a number: 30\nEnter a number: 40\nEnter a number: 50\nThe average is 30.0\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "10, 20, 30, 40, 50",
        inputs: ["10", "20", "30", "40", "50"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 5 },
          { type: "contains", text: "average" },
          { type: "number", value: 30 },
        ],
      },
      {
        id: "t2",
        description: "Decimals: 2.5, 3.5, 4, 5, 6",
        inputs: ["2.5", "3.5", "4", "5", "6"],
        hidden: false,
        checks: [{ type: "number", value: 4.2 }],
      },
      {
        id: "t3",
        description: "Negative and zero values",
        inputs: ["-5", "5", "10", "0", "15"],
        hidden: true,
        checks: [{ type: "number", value: 5 }],
      },
      {
        id: "t4",
        description: "7, 7, 7, 7, 8",
        inputs: ["7", "7", "7", "7", "8"],
        hidden: true,
        checks: [{ type: "number", value: 7.2 }],
      },
    ],
    hints: [
      "See Topic 4, slide 10: a while loop needs an initialization, a condition and an update. Which of the three is missing here?",
      "count starts at 1 and the loop runs while count <= 5. Nothing inside the loop ever changes count, so the condition stays True forever. Add the update as the last line of the loop body.",
      "while count <= 5:\n    num = float(input(\"Enter a number: \"))\n    total = total + num\n    count = ___",
      "Add count = count + 1, indented inside the loop. Now count goes 1, 2, 3, 4, 5, 6 and the loop stops after the fifth number. The average line stays after the loop (not indented), so it runs once: 150 / 5 = 30.0 for the first test.",
    ],
  },

  // ------------------------------------------------------------------ 05
  {
    id: "ex-t4-05",
    kind: "coding",
    topicId: "t4",
    title: "Factorial",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-accumulator", "t4-counter"],
    sources: [{ file: "topic4", units: [13], note: "Write a loop to find and print the factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120" }],
    prompt:
      "Topic 4, slide 13: write a loop to find and print the factorial of a number. Read a whole number n (0 or more) and use a while loop to compute n! = 1 × 2 × … × n. Print one line:\n\n" +
      "The factorial of 5 is 120\n\n" +
      "By definition 0! = 1.",
    starterCode: `n = int(input("Enter a number: "))

# Start the product and a counter


# Multiply the product by 1, 2, ..., n


# Print the result
`,
    solution: `n = int(input("Enter a number: "))
fact = 1
i = 1
while i <= n:
    fact = fact * i
    i = i + 1
print("The factorial of", n, "is", fact)
`,
    sampleRun: "Enter a number: 5\nThe factorial of 5 is 120\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "5! = 120",
        inputs: ["5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          { type: "number", value: 120 },
          { type: "notNumber", value: 24, label: "Print only the final result, after the loop" },
        ],
      },
      {
        id: "t2",
        description: "7! = 5040",
        inputs: ["7"],
        hidden: false,
        checks: [{ type: "number", value: 5040 }],
      },
      {
        id: "t3",
        description: "0! = 1 (the loop body never runs)",
        inputs: ["0"],
        hidden: true,
        checks: [{ type: "number", value: 1 }],
      },
      {
        id: "t4",
        description: "10! = 3628800",
        inputs: ["10"],
        hidden: true,
        checks: [{ type: "number", value: 3628800 }],
      },
    ],
    hints: [
      "See Topic 4, slide 13: 5! = 5 × 4 × 3 × 2 × 1 = 120. It works like the sum on slide 12, but you multiply instead of add.",
      "Start the product at 1 (not 0). Use a counter from 1 to n. In each iteration multiply the product by the counter and add 1 to the counter. Print after the loop.",
      "n = int(input(\"Enter a number: \"))\nfact = ___\ni = 1\nwhile i <= ___:\n    fact = fact * ___\n    i = ___\nprint(\"The factorial of\", n, \"is\", ___)",
      "fact = 1 because multiplying by 1 changes nothing; starting at 0 would make every answer 0. while i <= n: multiplies fact by 1, 2, …, n. For n = 0 the condition is False at the start, so the body never runs and fact stays 1, which is exactly 0! = 1. Counting down (while n > 1: fact = fact * n; n = n - 1) is also correct, but print the original number before changing n.",
    ],
  },

  // ------------------------------------------------------------------ 06
  {
    id: "ex-t4-06",
    kind: "coding",
    topicId: "t4",
    title: "Average of N Numbers",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-accumulator", "t4-counter"],
    sources: [{ file: "topic4", units: [14], note: "Average of N numbers, N given by the user; sample output given" }],
    prompt:
      "Topic 4, slide 14. First read N, how many numbers the user wants to enter (1 or more). Then use a while loop to read N numbers (they may have decimals). " +
      "Calculate average = sum of numbers / N and print one line:\n\n" +
      "the average value of the 4 numbers is 5.0\n\n" +
      "(That is the slide's sample: N = 4 and the numbers 2, 4, 6, 8. The slide writes \"the 4 number\"; \"numbers\" is the correct English.)",
    starterCode: `N = int(input("How many numbers you want to enter? "))

# Read N numbers with a while loop and add them up


# Print the average
`,
    solution: `N = int(input("How many numbers you want to enter? "))
count = 0
total = 0
while count < N:
    num = float(input("Enter a number: "))
    total = total + num
    count = count + 1
average = total / N
print("the average value of the", N, "numbers is", average)
`,
    sampleRun: "How many numbers you want to enter? 4\nEnter a number: 2\nEnter a number: 4\nEnter a number: 6\nEnter a number: 8\nthe average value of the 4 numbers is 5.0\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "N = 4: 2, 4, 6, 8 (slide 14)",
        inputs: ["4", "2", "4", "6", "8"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 5 },
          { type: "contains", text: "average" },
          { type: "number", value: 5 },
        ],
      },
      {
        id: "t2",
        description: "N = 3: 10, 15, 35",
        inputs: ["3", "10", "15", "35"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 4 },
          { type: "number", value: 20 },
        ],
      },
      {
        id: "t3",
        description: "N = 6: 1 to 6",
        inputs: ["6", "1", "2", "3", "4", "5", "6"],
        hidden: true,
        checks: [
          { type: "minInputs", count: 7 },
          { type: "number", value: 3.5 },
        ],
      },
      {
        id: "t4",
        description: "N = 1: a single decimal number",
        inputs: ["1", "7.5"],
        hidden: true,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "number", value: 7.5 },
        ],
      },
    ],
    hints: [
      "See Topic 4, slide 14 (task and sample run): the number of loop iterations comes from the user, so the loop condition compares a counter with N.",
      "Read N. Set count = 0 and total = 0. While count < N: read a number, add it to total, add 1 to count. After the loop, divide total by N and print the result.",
      "N = int(input(\"How many numbers you want to enter? \"))\ncount = 0\ntotal = 0\nwhile count < ___:\n    num = float(input(\"Enter a number: \"))\n    total = ___\n    count = ___\naverage = ___ / ___\nprint(\"the average value of the\", N, \"numbers is\", average)",
      "With count starting at 0, while count < N: runs exactly N times. total = total + num collects the sum, and average = total / N is computed once, after the loop. For 2, 4, 6, 8 the total is 20.0 and 20.0 / 4 = 5.0. Common mistakes: dividing inside the loop, dividing by the last number instead of N, or starting count at 1 with < N (which reads one number too few).",
    ],
  },

  // ------------------------------------------------------------------ 07
  {
    id: "ex-t4-07",
    kind: "coding",
    topicId: "t4",
    title: "Multiplication Table",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-table", "t4-counter"],
    sources: [{ file: "topic4", units: [15], note: "Read an integer and display its multiplication table; last multiplier 10" }],
    prompt:
      "Topic 4, slide 15. Read a whole number and use a while loop to display its multiplication table. The last multiplier is 10. Print a heading line and then one line per multiplier, in this format:\n\n" +
      "Multiplication table:\n" +
      "5 * 1 = 5\n" +
      "5 * 2 = 10\n" +
      "…\n" +
      "5 * 10 = 50\n\n" +
      "(That is the table for 5.) The spacing between the parts may differ, but each line shows the number, *, the multiplier, = and the result.",
    starterCode: `num = int(input("Enter a number: "))
print("Multiplication table:")

# Use a while loop with a multiplier from 1 to 10
`,
    solution: `num = int(input("Enter a number: "))
print("Multiplication table:")
i = 1
while i <= 10:
    print(num, "*", i, "=", num * i)
    i = i + 1
`,
    sampleRun: "Enter a number: 5\nMultiplication table:\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "Table of 5 (slide 15)",
        inputs: ["5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          { type: "contains", text: "Multiplication table" },
          tableLines(5),
          { type: "notNumber", value: 55, label: "The table should stop at 5 * 10" },
        ],
      },
      {
        id: "t2",
        description: "Table of 7",
        inputs: ["7"],
        hidden: false,
        checks: [tableLines(7), { type: "notNumber", value: 77, label: "The table should stop at 7 * 10" }],
      },
      {
        id: "t3",
        description: "Table of 12",
        inputs: ["12"],
        hidden: true,
        checks: [tableLines(12), { type: "notNumber", value: 132, label: "The table should stop at 12 * 10" }],
      },
      {
        id: "t4",
        description: "Table of 1",
        inputs: ["1"],
        hidden: true,
        checks: [tableLines(1), { type: "notNumber", value: 11, label: "The table should stop at 1 * 10" }],
      },
    ],
    hints: [
      "See Topic 4, slide 15 (task and example output) and slide 9 for a counter that goes from 1 upwards.",
      "Use a multiplier i that starts at 1. While i <= 10: print the number, *, i, = and the product, then add 1 to i.",
      "i = 1\nwhile i <= ___:\n    print(num, \"*\", ___, \"=\", ___ * ___)\n    i = ___",
      "i = 1 and while i <= 10: give exactly 10 lines, from × 1 to × 10. print(num, \"*\", i, \"=\", num * i) prints 5 * 1 = 5 and so on (print puts spaces between the items). Using i < 10 would stop at × 9, and forgetting i = i + 1 would print 5 * 1 = 5 again and again.",
    ],
  },

  // ------------------------------------------------------------------ 08
  {
    id: "ex-t4-08",
    kind: "coding",
    topicId: "t4",
    title: "Pass or Fail for 4 Students",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-while-conditionals", "t3-if-else"],
    sources: [{ file: "topic4", units: [17], note: "Accept the final mark of 4 students; print you Passed / you Failed" }],
    prompt:
      "Topic 4, slide 17. Use a while loop to read the final marks of 4 students, one at a time (whole numbers). Straight after reading each mark, print the result for that student:\n\n" +
      "• a mark of 50 or more → you Passed\n" +
      "• a mark below 50 → you Failed\n\n" +
      "Print only these results, one line per student. For the marks 45, 80, 70 and 50 the output is:\n" +
      "you Failed\nyou Passed\nyou Passed\nyou Passed",
    starterCode: `# Repeat 4 times: read a mark, then print you Passed or you Failed

`,
    solution: `count = 1
while count <= 4:
    mark = int(input("Enter your final mark in the course: "))
    if mark >= 50:
        print("you Passed")
    else:
        print("you Failed")
    count = count + 1
`,
    sampleRun: "Enter your final mark in the course: 45\nyou Failed\nEnter your final mark in the course: 80\nyou Passed\nEnter your final mark in the course: 70\nyou Passed\nEnter your final mark in the course: 50\nyou Passed\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "45, 80, 70, 50 (slide 17's sample)",
        inputs: ["45", "80", "70", "50"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 4 },
          { type: "order", texts: ["Failed", "Passed", "Passed", "Passed"] },
          FOUR_RESULTS,
        ],
      },
      {
        id: "t2",
        description: "30, 90, 49, 65",
        inputs: ["30", "90", "49", "65"],
        hidden: false,
        checks: [{ type: "order", texts: ["Failed", "Passed", "Failed", "Passed"] }, FOUR_RESULTS],
      },
      {
        id: "t3",
        description: "Boundary marks: 50, 49, 51, 0",
        inputs: ["50", "49", "51", "0"],
        hidden: true,
        checks: [{ type: "order", texts: ["Passed", "Failed", "Passed", "Failed"] }, FOUR_RESULTS],
      },
      {
        id: "t4",
        description: "All students pass",
        inputs: ["100", "50", "75", "88"],
        hidden: true,
        checks: [{ type: "order", texts: ["Passed", "Passed", "Passed", "Passed"] }, { type: "notContains", text: "Failed" }, FOUR_RESULTS],
      },
    ],
    hints: [
      "See Topic 4, slide 17 (the task) and slides 9–10 for a counter loop. The if…else goes inside the loop body so it runs once per student.",
      "Use a counter from 1 to 4. In each iteration: read a mark with int(input(...)), print you Passed if mark >= 50, otherwise print you Failed, then add 1 to the counter.",
      "count = 1\nwhile count <= ___:\n    mark = int(input(\"Enter your final mark in the course: \"))\n    if mark ___ 50:\n        print(\"you Passed\")\n    else:\n        print(___)\n    count = ___",
      "The loop runs 4 times because count goes 1, 2, 3, 4. The if…else and the count update are both indented inside the loop, so every student gets a result. About the rule: the slide's text says \"higher than 50\" (that would be mark > 50), but its own sample run prints you Passed for a mark of 50. This exercise follows the sample run and states the rule exactly: 50 or more passes, so use mark >= 50. With > 50, the mark 50 would wrongly print you Failed.",
    ],
  },

  // ------------------------------------------------------------------ 09
  {
    id: "ex-t4-09",
    kind: "coding",
    topicId: "t4",
    title: "Discount for 3 Products",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-while-conditionals", "t3-if-else"],
    sources: [{ file: "topic4", units: [18], note: "Price after discount for 3 products: 40% or 20%" }],
    prompt:
      "Topic 4, slide 18. Use a while loop to read the prices of 3 products in OMR (they may have decimals), one at a time. After reading each price, print its price after discount:\n\n" +
      "• price of 50 OMR or more → 40% discount\n" +
      "• price below 50 OMR → 20% discount\n\n" +
      "Discounted price = price − (price × discount percentage). For the prices 20.5, 50 and 60 the output is:\n\n" +
      "the discounted price is 16.4 OMR\n" +
      "the discounted price is 30.0 OMR\n" +
      "the discounted price is 36.0 OMR",
    starterCode: `# Repeat 3 times: read a price, choose the discount, print the discounted price

`,
    solution: `count = 1
while count <= 3:
    price = float(input(f"Enter product {count} price in OMR: "))
    if price >= 50:
        discount = 0.4
    else:
        discount = 0.2
    discounted = price - (price * discount)
    print("the discounted price is", discounted, "OMR")
    count = count + 1
`,
    sampleRun: "Enter product 1 price in OMR: 20.5\nthe discounted price is 16.4 OMR\nEnter product 2 price in OMR: 50\nthe discounted price is 30.0 OMR\nEnter product 3 price in OMR: 60\nthe discounted price is 36.0 OMR\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "20.5, 50, 60 (slide 18's sample)",
        inputs: ["20.5", "50", "60"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 16.4 },
          { type: "number", value: 30 },
          { type: "number", value: 36 },
          { type: "notNumber", value: 40, label: "A price of 50 OMR gets the 40% discount (30.0), not 20% (40.0)" },
        ],
      },
      {
        id: "t2",
        description: "10, 100, 45.5",
        inputs: ["10", "100", "45.5"],
        hidden: false,
        checks: [
          { type: "number", value: 8 },
          { type: "number", value: 60 },
          { type: "number", value: 36.4 },
          { type: "notNumber", value: 80 },
        ],
      },
      {
        id: "t3",
        description: "Boundary prices: 49, 50, 51",
        inputs: ["49", "50", "51"],
        hidden: true,
        checks: [
          { type: "number", value: 39.2 },
          { type: "number", value: 30 },
          { type: "number", value: 30.6 },
          { type: "notNumber", value: 40 },
          { type: "notNumber", value: 29.4 },
          { type: "notNumber", value: 40.8 },
        ],
      },
    ],
    hints: [
      "See Topic 4, slide 18 (task, formula and sample run). Like slide 17, the if…else goes inside the while loop.",
      "Use a counter from 1 to 3. In each iteration: read the price with float(), set the discount to 0.4 if price >= 50, otherwise 0.2, compute price - (price * discount), print it, and add 1 to the counter.",
      "count = 1\nwhile count <= 3:\n    price = float(input(\"Enter the price in OMR: \"))\n    if price ___ 50:\n        discount = ___\n    else:\n        discount = ___\n    discounted = price - (price * ___)\n    print(\"the discounted price is\", discounted, \"OMR\")\n    count = ___",
      "40% is 0.4 and 20% is 0.2. For 20.5: 20.5 − 20.5 × 0.2 = 16.4. For 60: 60 − 24 = 36.0. About the rule: the slide's text says \"higher than 50\" (price > 50), but its sample run gives 30.0 for a price of 50, which is the 40% discount. This exercise follows the sample run and states the rule exactly: 50 OMR or more gets 40%, so use price >= 50. With > 50, a price of 50 would wrongly give 40.0.",
    ],
  },

  // ------------------------------------------------------------------ 10
  {
    id: "ex-t4-10",
    kind: "coding",
    topicId: "t4",
    title: "Practice Hours over 7 Days",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t4-accumulator", "t3-if-else"],
    sources: [{ file: "lab-ch4-iiii", units: [12, 13], note: "Track Python practice hours over seven days with a while loop" }],
    prompt:
      "Ch4 Lab IIII, cell 12. Use a while loop to read the number of hours a student practised Python on each of 7 days (hours may have decimals). " +
      "Calculate the total, print it, and then print one message:\n\n" +
      "• total of 10 hours or more → Good practice!\n" +
      "• otherwise → Need more practice!\n\n" +
      "For 2, 1.5, 3, 2, 0.5, 3 and 2 the output is:\n" +
      "Total hours = 14.0\n" +
      "Good practice!",
    starterCode: `# Read the hours for 7 days with a while loop and add them up


# Print the total, then the message
`,
    solution: `total_hours = 0
count = 0
while count < 7:
    hours = float(input("Enter daily practice hours: "))
    total_hours = total_hours + hours
    count = count + 1
print("Total hours =", total_hours)
if total_hours >= 10:
    print("Good practice!")
else:
    print("Need more practice!")
`,
    sampleRun: "Enter daily practice hours: 2\nEnter daily practice hours: 1.5\nEnter daily practice hours: 3\nEnter daily practice hours: 2\nEnter daily practice hours: 0.5\nEnter daily practice hours: 3\nEnter daily practice hours: 2\nTotal hours = 14.0\nGood practice!\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "2, 1.5, 3, 2, 0.5, 3, 2 (total 14)",
        inputs: ["2", "1.5", "3", "2", "0.5", "3", "2"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 7 },
          { type: "number", value: 14 },
          { type: "contains", text: "Good practice!" },
          { type: "notContains", text: "Need more practice" },
        ],
      },
      {
        id: "t2",
        description: "1, 0.5, 2, 1, 1.5, 0, 1 (total 7)",
        inputs: ["1", "0.5", "2", "1", "1.5", "0", "1"],
        hidden: false,
        checks: [
          { type: "number", value: 7 },
          { type: "contains", text: "Need more practice!" },
          { type: "notContains", text: "Good practice" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 10 hours",
        inputs: ["1", "2", "1", "2", "1", "2", "1"],
        hidden: true,
        checks: [
          { type: "minInputs", count: 7 },
          { type: "number", value: 10 },
          { type: "contains", text: "Good practice!" },
          { type: "notContains", text: "Need more practice" },
        ],
      },
      {
        id: "t4",
        description: "9.5 hours, just below 10",
        inputs: ["1.5", "1", "2", "0.5", "1.5", "2", "1"],
        hidden: true,
        checks: [
          { type: "number", value: 9.5 },
          { type: "contains", text: "Need more practice!" },
          { type: "notContains", text: "Good practice" },
        ],
      },
    ],
    hints: [
      "See Ch4 Lab IIII, cells 12–13, and Topic 4, slide 14: a counter controls how many values are read, and a total collects them.",
      "Set total_hours = 0 and count = 0. While count < 7: read the hours with float(), add them to the total, add 1 to count. After the loop, print the total and use if…else with >= 10 to choose the message.",
      "total_hours = 0\ncount = 0\nwhile count < ___:\n    hours = float(input(\"Enter daily practice hours: \"))\n    total_hours = ___\n    count = ___\nprint(\"Total hours =\", total_hours)\nif total_hours ___ 10:\n    print(\"Good practice!\")\nelse:\n    print(___)",
      "The loop runs 7 times (count 0 to 6). The decision must come after the loop (not indented) so it uses the final total and prints only one message. 10 hours exactly counts as \"10 or more\", so use >= 10, not > 10.",
    ],
  },

  // ------------------------------------------------------------------ 11
  {
    id: "ex-t4-11",
    kind: "coding",
    topicId: "t4",
    title: "Fix: Rainfall Decision",
    category: "fix",
    difficulty: "hard",
    origin: "adapted",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t3-logical-conditions"],
    sources: [
      { file: "lab-ch4-iiii", units: [1, 2], note: "Rainfall task, decision rules and the version without a loop" },
      { file: "lab-ch4-iiii", units: [3, 4], note: "The lab's while-loop version (buggy), used here as the starter code" },
    ],
    prompt:
      "Ch4 Lab IIII, cell 1. Read the rainfall (in mm, may have decimals) for 3 days in a row, using a while loop. Print the total and the average (average = total / 3), then exactly one decision:\n\n" +
      "1. If the average is 30 mm or more: physical classes are canceled\n" +
      "2. Otherwise, if the average is 20 mm or more, or the rainfall on any single day is 40 mm or more: Weather conditions require further assessment.\n" +
      "3. Otherwise, if the total is less than 15 mm: Rainfall has been low over the three days.\n" +
      "4. Otherwise: physical classes can proceed\n\n" +
      "The starter code is the lab's loop version (cell 4). It has two bugs: it computes the average wrongly, and it only checks the last day for 40 mm or more. Fix both. " +
      "For 4, 5 and 4 the output should be:\n\n" +
      "Total =  13.0\n" +
      "Average =  4.333333333333333\n" +
      "Rainfall has been low over the three days.",
    starterCode: `total = 0
count = 0
while count < 3:
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total + days
    avg = total / days
    count += 1
print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')
elif avg >= 20 or days >= 40:
    print('Weather conditions require further assessment.')
elif total < 15:
    print('Rainfall has been low over the three days.')
else:
    print('physical classes can proceed')
`,
    solution: `total = 0
count = 0
heavy_day = False
while count < 3:
    days = float(input(f'Enter the rainfall for day {count + 1} (in mm): '))
    total = total + days
    if days >= 40:
        heavy_day = True
    count += 1
avg = total / 3
print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')
elif avg >= 20 or heavy_day:
    print('Weather conditions require further assessment.')
elif total < 15:
    print('Rainfall has been low over the three days.')
else:
    print('physical classes can proceed')
`,
    sampleRun: "Enter the rainfall for day 1 (in mm): 4\nEnter the rainfall for day 2 (in mm): 5\nEnter the rainfall for day 3 (in mm): 4\nTotal =  13.0\nAverage =  4.333333333333333\nRainfall has been low over the three days.\n",
    requirements: [WHILE_REQ],
    tests: [
      {
        id: "t1",
        description: "4, 5, 4: low rainfall",
        inputs: ["4", "5", "4"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 13 },
          { type: "number", value: 4.3333, tolerance: 0.001 },
          { type: "contains", text: "Rainfall has been low" },
          { type: "notContains", text: "further assessment" },
          { type: "notContains", text: "can proceed" },
        ],
      },
      {
        id: "t2",
        description: "45, 10, 5: average exactly 20",
        inputs: ["45", "10", "5"],
        hidden: false,
        checks: [
          { type: "number", value: 60 },
          { type: "number", value: 20 },
          { type: "contains", text: "further assessment" },
          { type: "notContains", text: "can proceed" },
        ],
      },
      {
        id: "t3",
        description: "41, 2, 3: a heavy first day",
        inputs: ["41", "2", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 15.3333, tolerance: 0.001 },
          { type: "contains", text: "further assessment" },
          { type: "notContains", text: "can proceed" },
        ],
      },
      {
        id: "t4",
        description: "30, 35, 31: average 32",
        inputs: ["30", "35", "31"],
        hidden: true,
        checks: [
          { type: "number", value: 32 },
          { type: "contains", text: "classes are cancel" },
          { type: "notContains", text: "further assessment" },
        ],
      },
      {
        id: "t5",
        description: "10, 6, 9: classes can proceed",
        inputs: ["10", "6", "9"],
        hidden: true,
        checks: [
          { type: "number", value: 25 },
          { type: "contains", text: "can proceed" },
          { type: "notContains", text: "Rainfall has been low" },
          { type: "notContains", text: "further assessment" },
        ],
      },
      {
        id: "t6",
        description: "40, 0, 0: exactly 40 mm on the first day",
        inputs: ["40", "0", "0"],
        hidden: true,
        checks: [
          { type: "contains", text: "further assessment" },
          { type: "notContains", text: "can proceed" },
        ],
      },
    ],
    hints: [
      "See Ch4 Lab IIII, cell 1 (the rules) and cell 2 (the version without a loop, which is correct). Compare cell 2 with the loop version in the starter code.",
      "Bug 1: avg = total / days divides by the last day's rainfall, and it is inside the loop. The average of 3 days is total / 3, computed once after the loop. Bug 2: after the loop, days only holds the last day, so days >= 40 ignores day 1 and day 2. Remember inside the loop whether any day was 40 or more.",
      "heavy_day = False\nwhile count < 3:\n    days = float(input(...))\n    total = total + days\n    if days ___ 40:\n        heavy_day = ___\n    count += 1\navg = total / ___\n...\nelif avg >= 20 or ___:",
      "Set heavy_day = False before the loop. Inside the loop, after reading each day, write if days >= 40: heavy_day = True. Once it becomes True it stays True. Move the average out of the loop as avg = total / 3. In the decision use elif avg >= 20 or heavy_day:. For 41, 2, 3 the average is only 15.33, but day 1 had 41 mm, so the answer is \"Weather conditions require further assessment.\" The starter code missed this because it only looked at the last day.",
    ],
  },
];
