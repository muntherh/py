import type { PracticeExercise } from "../types";

// Topic 3 — Conditional Execution: practical coding exercises.
// Based on Practice Exercises III (Ex 1–7), the Topic 3 slide exercises and the
// Chapter 3 / Chapter 4 lab notebooks. Every reference solution is run against its
// tests in real Python by scripts/verify-curriculum.ts.

/** Requirement: a conditional expression stored in a variable (value1 if condition else value2). */
const CONDITIONAL_EXPRESSION = {
  pattern: "=.*\\bif\\b.*\\belse\\b",
  message: "Store the result with a conditional expression: variable = value1 if condition else value2",
};
/** Requirement: no if statement (the task asks for a conditional expression instead). */
const NO_IF_STATEMENT = {
  pattern: "^[ \\t]*if\\b",
  forbid: true,
  message: "Use a conditional expression, not an if statement",
};
/** Requirement: an indented if, i.e. an if inside another if/else block. */
const NESTED_IF = {
  pattern: "^[ \\t]+if\\b",
  message: "Use a nested if: put an if…else inside another if or else block",
};

export const EXERCISES_T3: PracticeExercise[] = [
  // ------------------------------------------------------------------ simple if
  {
    id: "ex-t3-01",
    kind: "coding",
    topicId: "t3",
    title: "Safe division",
    category: "write",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [15], note: "Exercise: divide only if the second number is not zero" }],
    origin: "source",
    prompt:
      "Write a program that asks the user to enter two whole numbers. Read each one with `int(input(\"Enter a number: \"))`.\n" +
      "If the second number is not equal to zero, divide the first number by the second (use `/`) and print the result in this form:\n" +
      "`the result of dividing 1 / 2 = 0.5`\n" +
      "(with the real numbers). If the second number is zero, skip the division and print nothing, so the program does not crash.",
    starterCode: `# Read two whole numbers
a = int(input("Enter a number: "))
b = int(input("Enter a number: "))

# Divide only when the second number is not zero
`,
    sampleRun: "Enter a number: 1\nEnter a number: 2\nthe result of dividing 1 / 2 = 0.5\n",
    tests: [
      {
        id: "t1",
        description: "1 and 2 → the result 0.5 is printed",
        inputs: ["1", "2"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "the result of dividing" },
          { type: "number", value: 0.5 },
        ],
      },
      {
        id: "t2",
        description: "2 and 0 → no division, nothing is printed",
        inputs: ["2", "0"],
        hidden: false,
        checks: [
          { type: "notContains", text: "result" },
          { type: "notContains", text: "dividing" },
        ],
      },
      {
        id: "t3",
        description: "7 and 2 → 3.5",
        inputs: ["7", "2"],
        hidden: true,
        checks: [
          { type: "contains", text: "dividing" },
          { type: "number", value: 3.5 },
        ],
      },
      {
        id: "t4",
        description: "-9 and 3 → -3.0",
        inputs: ["-9", "3"],
        hidden: true,
        checks: [
          { type: "contains", text: "dividing" },
          { type: "number", value: -3 },
        ],
      },
    ],
    hints: [
      "See Topic 3, slide 15 (this exercise) and slides 6–8: an `if` statement runs its indented block only when the condition is True. The 'not equal to' operator is `!=` (slide 7 lists the comparison operators).",
      "Read a and b. Test whether b is not equal to 0. Only inside that if block, calculate a / b and print the message. Put nothing after the if block, so a zero second number produces no output.",
      "a = int(input(\"Enter a number: \"))\nb = int(input(\"Enter a number: \"))\nif ___ != ___:\n    result = ___ / ___\n    print(f\"the result of dividing {a} / {b} = {___}\")",
      "Correct solution: after reading a and b, write `if b != 0:` and indent two lines under it: `result = a / b` and `print(f\"the result of dividing {a} / {b} = {result}\")`. When b is 0 the condition is False, so the whole block is skipped and Python never tries 2 / 0 (which would raise ZeroDivisionError). `/` always gives a float, so 1 / 2 prints 0.5 and -9 / 3 prints -3.0.",
    ],
    solution: `a = int(input("Enter a number: "))
b = int(input("Enter a number: "))
if b != 0:
    result = a / b
    print(f"the result of dividing {a} / {b} = {result}")
`,
  },
  {
    id: "ex-t3-02",
    kind: "coding",
    topicId: "t3",
    title: "Quiz score message",
    category: "write",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [17], note: "Exercise: congratulate a quiz score of 7.5 or more, always thank the user" }],
    origin: "source",
    prompt:
      "Ask the student for their Quiz 1 score out of 10 with the prompt `What is your score in Quiz 1: ` and read it with `float()` (scores such as 7.5 are allowed).\n" +
      "- If the score is greater than or equal to 7.5, print `congratulation on your good score`\n" +
      "- At the end, ALWAYS print `thank you for sharing your score` — whatever the score is.",
    starterCode: `score = float(input("What is your score in Quiz 1: "))

# Check the score here

# This message must always be printed
`,
    sampleRun: "What is your score in Quiz 1: 8.5\ncongratulation on your good score\nthank you for sharing your score\n",
    tests: [
      {
        id: "t1",
        description: "8.5 → congratulation, then thank you",
        inputs: ["8.5"],
        hidden: false,
        checks: [{ type: "order", texts: ["congratulation on your good score", "thank you for sharing your score"] }],
      },
      {
        id: "t2",
        description: "2.5 → only the thank-you message",
        inputs: ["2.5"],
        hidden: false,
        checks: [
          { type: "contains", text: "thank you for sharing your score" },
          { type: "notContains", text: "congratulation" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 7.5 → congratulation (>= includes 7.5)",
        inputs: ["7.5"],
        hidden: true,
        checks: [{ type: "order", texts: ["congratulation", "thank you for sharing"] }],
      },
      {
        id: "t4",
        description: "7 → below 7.5, only thank you",
        inputs: ["7"],
        hidden: true,
        checks: [
          { type: "contains", text: "thank you for sharing" },
          { type: "notContains", text: "congratulation" },
        ],
      },
    ],
    hints: [
      "See Topic 3, slide 17 (this exercise) and slide 16: a statement that is NOT indented after the if block is outside it, so it always runs.",
      "Read the score as a float. Use one if with the condition score >= 7.5 and print the congratulation inside it. Then, without indentation, print the thank-you message.",
      "score = float(input(\"What is your score in Quiz 1: \"))\nif score ___ 7.5:\n    print(\"___\")\nprint(\"___\")",
      "Correct solution: `if score >= 7.5:` followed by the indented `print(\"congratulation on your good score\")`, then an unindented `print(\"thank you for sharing your score\")`. Use `>=`, not `>`: a score of exactly 7.5 must be congratulated. If you indent the last print, it becomes part of the if block and disappears for low scores.",
    ],
    solution: `score = float(input("What is your score in Quiz 1: "))
if score >= 7.5:
    print("congratulation on your good score")
print("thank you for sharing your score")
`,
  },
  {
    id: "ex-t3-03",
    kind: "coding",
    topicId: "t3",
    title: "Fix the luggage checker",
    category: "fix",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [
      { file: "topic3", units: [18], note: "Exercise: warn about the extra charge when luggage is over 50, always thank the user" },
      { file: "topic3", units: [6, 16], note: "if syntax (colon, indentation); an unindented statement always runs" },
    ],
    origin: "adapted",
    prompt:
      "This airline program should ask for the luggage weight (decimals such as 50.5 are allowed).\n" +
      "- If the weight is higher than 50, print `There is a $25 charge for luggage that heavy.`\n" +
      "- At the end, ALWAYS print `Thank you for your business.` — for every weight.\n" +
      "A weight of exactly 50 is not higher than 50, so there is no charge. The starter code has three bugs. Find and fix all of them.",
    starterCode: `weight = input("How many pounds does your suitcase weigh? ")
if weight > 50
    print("There is a $25 charge for luggage that heavy.")
    print("Thank you for your business.")
`,
    sampleRun: "How many pounds does your suitcase weigh? 60\nThere is a $25 charge for luggage that heavy.\nThank you for your business.\n",
    tests: [
      {
        id: "t1",
        description: "60 → charge warning, then thank you",
        inputs: ["60"],
        hidden: false,
        checks: [{ type: "order", texts: ["$25 charge", "Thank you for your business"] }],
      },
      {
        id: "t2",
        description: "45 → no charge, but still thank you",
        inputs: ["45"],
        hidden: false,
        checks: [
          { type: "contains", text: "Thank you for your business" },
          { type: "notContains", text: "charge" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 50 → not higher than 50, no charge",
        inputs: ["50"],
        hidden: true,
        checks: [
          { type: "contains", text: "Thank you for your business" },
          { type: "notContains", text: "charge" },
        ],
      },
      {
        id: "t4",
        description: "50.5 → charge (decimal weight)",
        inputs: ["50.5"],
        hidden: true,
        checks: [{ type: "order", texts: ["$25 charge", "Thank you for your business"] }],
      },
    ],
    hints: [
      "See Topic 3, slide 6 (the if line ends with a colon), slide 16 (an unindented line after the if block always runs) and slide 18 (this exercise). Topic 2, slides 63–65: input() gives a string, so convert it with int() or float() before comparing it with a number.",
      "Bug 1: the if line has no colon (SyntaxError). Bug 2: weight is a string, and Python cannot compare a string with 50 (TypeError). Bug 3: the thank-you print is indented, so it only runs for heavy luggage.",
      "weight = ___(input(\"How many pounds does your suitcase weigh? \"))\nif weight > 50___\n    print(\"There is a $25 charge for luggage that heavy.\")\n___print(\"Thank you for your business.\")   # no indentation",
      "Correct solution: `weight = float(input(\"How many pounds does your suitcase weigh? \"))`, then `if weight > 50:` with the charge message indented under it, and finally `print(\"Thank you for your business.\")` with NO indentation so it always runs. Use float(), not int(): int(\"50.5\") raises ValueError. Use `>` (higher than), so 50 itself gets no charge.",
    ],
    solution: `weight = float(input("How many pounds does your suitcase weigh? "))
if weight > 50:
    print("There is a $25 charge for luggage that heavy.")
print("Thank you for your business.")
`,
  },

  // ------------------------------------------------------------------ if…else
  {
    id: "ex-t3-04",
    kind: "coding",
    topicId: "t3",
    title: "Smaller, equal or greater than 50",
    category: "modify",
    conceptIds: ["t3-if-else", "t3-elif"],
    difficulty: "easy",
    sources: [
      { file: "topic3", units: [26], note: "Exercise and solution: greater than or less than 50 (if…else)" },
      { file: "topic3", units: [33], note: "elif syntax" },
    ],
    origin: "adapted",
    prompt:
      "The starter code is the solution from Topic 3, slide 26. It has a problem: when the user types exactly 50 it prints `the number you entered is greater than 50`, which is false.\n" +
      "Modify the program so that:\n" +
      "- a number below 50 prints `the number you entered is smaller than 50`\n" +
      "- exactly 50 prints `the number you entered is equal to 50`\n" +
      "- a number above 50 prints `the number you entered is greater than 50`\n" +
      "Keep the prompt `Enter a number: ` and read a whole number with `int()`.",
    starterCode: `x = int(input("Enter a number: "))
if x < 50:
    print('the number you entered is smaller than 50')
else:
    print('the number you entered is greater than 50')
`,
    sampleRun: "Enter a number: 20\nthe number you entered is smaller than 50\n",
    tests: [
      {
        id: "t1",
        description: "20 → smaller than 50",
        inputs: ["20"],
        hidden: false,
        checks: [
          { type: "contains", text: "smaller than 50" },
          { type: "notContains", text: "greater" },
          { type: "notContains", text: "equal" },
        ],
      },
      {
        id: "t2",
        description: "Exactly 50 → equal to 50",
        inputs: ["50"],
        hidden: false,
        checks: [
          { type: "contains", text: "equal to 50" },
          { type: "notContains", text: "greater" },
          { type: "notContains", text: "smaller" },
        ],
      },
      {
        id: "t3",
        description: "60 → greater than 50",
        inputs: ["60"],
        hidden: true,
        checks: [
          { type: "contains", text: "greater than 50" },
          { type: "notContains", text: "smaller" },
          { type: "notContains", text: "equal" },
        ],
      },
      {
        id: "t4",
        description: "49 → smaller than 50",
        inputs: ["49"],
        hidden: true,
        checks: [
          { type: "contains", text: "smaller than 50" },
          { type: "notContains", text: "greater" },
          { type: "notContains", text: "equal" },
        ],
      },
      {
        id: "t5",
        description: "51 → greater than 50",
        inputs: ["51"],
        hidden: true,
        checks: [
          { type: "contains", text: "greater than 50" },
          { type: "notContains", text: "smaller" },
          { type: "notContains", text: "equal" },
        ],
      },
    ],
    hints: [
      "See Topic 3, slide 26: if…else has only two branches, so 50 must land in one of them. Slide 33 shows elif, which lets you add a third possibility.",
      "Keep the first test (x < 50). Add a second test for x == 50. Everything left over (else) must then be above 50.",
      "x = int(input(\"Enter a number: \"))\nif x < 50:\n    print('the number you entered is smaller than 50')\nelif x ___ 50:\n    print('the number you entered is ___ 50')\nelse:\n    print('the number you entered is greater than 50')",
      "Correct solution: insert `elif x == 50:` with `print('the number you entered is equal to 50')` between the if block and the else. Python checks the conditions from top to bottom: 20 matches x < 50; 50 fails the first test and matches x == 50; 60 fails both, so else prints 'greater than 50'. Remember `==` compares, while `=` assigns. (A nested if…else inside the else block also works.)",
    ],
    solution: `x = int(input("Enter a number: "))
if x < 50:
    print('the number you entered is smaller than 50')
elif x == 50:
    print('the number you entered is equal to 50')
else:
    print('the number you entered is greater than 50')
`,
  },

  // ------------------------------------------------------------------ conditional expressions
  {
    id: "ex-t3-05",
    kind: "coding",
    topicId: "t3",
    title: "Minor or Adult (conditional expression)",
    category: "write",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [30], note: "Exercise: Minor/Adult with a conditional expression" }],
    origin: "source",
    prompt:
      "Ask the user for their age with the prompt `Please enter your age: ` and read it with `int()`.\n" +
      "Using a conditional expression (`value1 if condition else value2`, on one line), store `Minor` in a variable when the age is less than 21, and `Adult` when the age is 21 or more. Then print the variable.\n" +
      "Do not use an if statement. Note: the slide's solution only shows `'minor'` because Jupyter echoes the last value of a cell. A normal Python program must call `print()`.",
    starterCode: `age = int(input("Please enter your age: "))

# Store 'Minor' or 'Adult' in a variable with a conditional expression

# Print the variable
`,
    sampleRun: "Please enter your age: 12\nMinor\n",
    tests: [
      {
        id: "t1",
        description: "12 → Minor",
        inputs: ["12"],
        hidden: false,
        checks: [
          { type: "contains", text: "Minor" },
          { type: "notContains", text: "Adult" },
        ],
      },
      {
        id: "t2",
        description: "30 → Adult",
        inputs: ["30"],
        hidden: false,
        checks: [
          { type: "contains", text: "Adult" },
          { type: "notContains", text: "Minor" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 21 → Adult",
        inputs: ["21"],
        hidden: true,
        checks: [
          { type: "contains", text: "Adult" },
          { type: "notContains", text: "Minor" },
        ],
      },
      {
        id: "t4",
        description: "20 → Minor",
        inputs: ["20"],
        hidden: true,
        checks: [
          { type: "contains", text: "Minor" },
          { type: "notContains", text: "Adult" },
        ],
      },
    ],
    requirements: [CONDITIONAL_EXPRESSION, NO_IF_STATEMENT],
    hints: [
      "See Topic 3, slides 27–28: `<expr1> if <condition> else <expr2>` gives expr1 when the condition is True and expr2 when it is False. Slide 30 is this exercise.",
      "Read the age. On one line, assign to a variable: 'Minor' if the age is less than 21, else 'Adult'. Then print that variable.",
      "age = int(input(\"Please enter your age: \"))\nstatus = ___ if age ___ 21 else ___\nprint(___)",
      "Correct solution: `status = \"Minor\" if age < 21 else \"Adult\"` followed by `print(status)`. For 12 the condition age < 21 is True, so status becomes 'Minor'; for 21 it is False, so status becomes 'Adult'. Writing `age <= 21` would be wrong, because 21 must give Adult.",
    ],
    solution: `age = int(input("Please enter your age: "))
status = "Minor" if age < 21 else "Adult"
print(status)
`,
  },
  {
    id: "ex-t3-06",
    kind: "coding",
    topicId: "t3",
    title: "The larger of two numbers in one line",
    category: "write",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "medium",
    sources: [{ file: "lab-ch3-ii", units: [14, 18], note: "Question and solution: larger of two integers with a single-line conditional expression" }],
    origin: "adapted",
    prompt:
      "Read two whole numbers with the prompts `Enter number 1: ` and `Enter number 2: ` (use `int()`).\n" +
      "Use a single-line conditional expression to store the larger of the two numbers in a variable. Then print `The larger number is` followed by that value, for example `The larger number is 12`. If both numbers are equal, print that value.\n" +
      "Do not use an if statement.",
    starterCode: `n1 = int(input("Enter number 1: "))
n2 = int(input("Enter number 2: "))

# larger = ...  (one line, conditional expression)
`,
    sampleRun: "Enter number 1: 5\nEnter number 2: 12\nThe larger number is 12\n",
    tests: [
      {
        id: "t1",
        description: "5 and 12 → 12",
        inputs: ["5", "12"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "The larger number is" },
          { type: "number", value: 12 },
          { type: "notNumber", value: 5 },
        ],
      },
      {
        id: "t2",
        description: "20 and 3 → 20",
        inputs: ["20", "3"],
        hidden: false,
        checks: [
          { type: "number", value: 20 },
          { type: "notNumber", value: 3 },
        ],
      },
      {
        id: "t3",
        description: "Equal numbers 7 and 7 → 7",
        inputs: ["7", "7"],
        hidden: true,
        checks: [
          { type: "contains", text: "larger" },
          { type: "number", value: 7 },
        ],
      },
      {
        id: "t4",
        description: "Negative numbers -4 and -9 → -4",
        inputs: ["-4", "-9"],
        hidden: true,
        checks: [
          { type: "number", value: -4 },
          { type: "notNumber", value: -9 },
        ],
      },
    ],
    requirements: [CONDITIONAL_EXPRESSION, NO_IF_STATEMENT],
    hints: [
      "See Ch3 Lab Exercise II, cells 14 and 18, and Topic 3, slides 27–28 (conditional expression).",
      "The larger value is n1 when n1 > n2, otherwise it is n2. That 'otherwise' also covers equal numbers, because then n2 is the same value.",
      "n1 = int(input(\"Enter number 1: \"))\nn2 = int(input(\"Enter number 2: \"))\nlarger = ___ if n1 ___ n2 else ___\nprint(\"The larger number is\", ___)",
      "Correct solution: `larger = n1 if n1 > n2 else n2` and then `print(\"The larger number is\", larger)`. For 5 and 12, n1 > n2 is False, so larger = n2 = 12. For -4 and -9, -4 > -9 is True, so larger = -4 (it is closer to zero, so it is the larger number).",
    ],
    solution: `n1 = int(input("Enter number 1: "))
n2 = int(input("Enter number 2: "))
larger = n1 if n1 > n2 else n2
print("The larger number is", larger)
`,
  },
  {
    id: "ex-t3-07",
    kind: "coding",
    topicId: "t3",
    title: "Pass or Fail in one line",
    category: "complete",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "easy",
    sources: [{ file: "lab-ch3-ii", units: [19, 20], note: "Question and solution: Pass if the score is 50 or higher, else Fail" }],
    origin: "adapted",
    prompt:
      "Complete the program. It reads a student's final score out of 100 as a whole number.\n" +
      "Replace `___` with a conditional expression so that `result` is `Pass` when the score is 50 or higher, and `Fail` when it is lower. The program then prints `result`.\n" +
      "Do not add an if statement.",
    starterCode: `score = int(input("Enter your final score: "))

# Complete this line: 'Pass' when score is 50 or higher, otherwise 'Fail'
result = ___

print(result)
`,
    sampleRun: "Enter your final score: 75\nPass\n",
    tests: [
      {
        id: "t1",
        description: "75 → Pass",
        inputs: ["75"],
        hidden: false,
        checks: [
          { type: "contains", text: "Pass" },
          { type: "notContains", text: "Fail" },
        ],
      },
      {
        id: "t2",
        description: "30 → Fail",
        inputs: ["30"],
        hidden: false,
        checks: [
          { type: "contains", text: "Fail" },
          { type: "notContains", text: "Pass" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 50 → Pass",
        inputs: ["50"],
        hidden: true,
        checks: [
          { type: "contains", text: "Pass" },
          { type: "notContains", text: "Fail" },
        ],
      },
      {
        id: "t4",
        description: "49 → Fail",
        inputs: ["49"],
        hidden: true,
        checks: [
          { type: "contains", text: "Fail" },
          { type: "notContains", text: "Pass" },
        ],
      },
    ],
    requirements: [CONDITIONAL_EXPRESSION, NO_IF_STATEMENT],
    hints: [
      "See Ch3 Lab Exercise II, cells 19–20, and Topic 3, slide 28: `Result = 100 if x>=10 else 200` stores one of two values in a variable.",
      "The value when the condition is True comes first ('Pass'), then `if`, then the condition, then `else`, then the other value ('Fail').",
      "result = ___ if score ___ 50 else ___",
      "Correct solution: `result = 'Pass' if score >= 50 else 'Fail'`. Use `>=`, because 50 itself must pass; with `>` a score of exactly 50 would wrongly print Fail. The quotes are needed: without them Python looks for variables called Pass and Fail and raises NameError.",
    ],
    solution: `score = int(input("Enter your final score: "))
result = 'Pass' if score >= 50 else 'Fail'
print(result)
`,
  },

  // ------------------------------------------------------------------ chained conditionals (elif)
  {
    id: "ex-t3-08",
    kind: "coding",
    topicId: "t3",
    title: "Bigger or equal?",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [
      { file: "pe3", units: [1], item: "1", note: "Read two numbers and check which is bigger or equal" },
      { file: "topic3", units: [13], note: "Exercise: are the two numbers the same?" },
      { file: "topic3", units: [35], note: "if…elif…else comparing x and y" },
    ],
    origin: "adapted",
    prompt:
      "Read two numbers x and y with `float()`, using the prompts `Enter value of x: ` and `Enter value of y: `.\n" +
      "Print exactly one message:\n" +
      "- `x is bigger` if x is greater than y\n" +
      "- `y is bigger` if y is greater than x\n" +
      "- `x and y are the same` if they are equal",
    starterCode: `x = float(input("Enter value of x: "))
y = float(input("Enter value of y: "))

# Compare x and y: three possible messages
`,
    sampleRun: "Enter value of x: 8\nEnter value of y: 3\nx is bigger\n",
    tests: [
      {
        id: "t1",
        description: "8 and 3 → x is bigger",
        inputs: ["8", "3"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "x is bigger" },
          { type: "notContains", text: "y is bigger" },
          { type: "notContains", text: "same" },
        ],
      },
      {
        id: "t2",
        description: "1 and 1 → the same",
        inputs: ["1", "1"],
        hidden: false,
        checks: [
          { type: "contains", text: "x and y are the same" },
          { type: "notContains", text: "bigger" },
        ],
      },
      {
        id: "t3",
        description: "2 and 9 → y is bigger",
        inputs: ["2", "9"],
        hidden: true,
        checks: [
          { type: "contains", text: "y is bigger" },
          { type: "notContains", text: "x is bigger" },
          { type: "notContains", text: "same" },
        ],
      },
      {
        id: "t4",
        description: "-1.5 and -1.5 → the same",
        inputs: ["-1.5", "-1.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "are the same" },
          { type: "notContains", text: "bigger" },
        ],
      },
      {
        id: "t5",
        description: "2.5 and 2.25 → x is bigger",
        inputs: ["2.5", "2.25"],
        hidden: true,
        checks: [
          { type: "contains", text: "x is bigger" },
          { type: "notContains", text: "y is bigger" },
          { type: "notContains", text: "same" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 1, Ex 1, and Topic 3, slide 13 (are two numbers the same?) and slide 35 (if…elif…else comparing x and y).",
      "There are three possibilities, so use if, elif and else. Test x > y first, then y > x. If neither is True, the numbers must be equal.",
      "if x ___ y:\n    print(\"x is bigger\")\nelif ___:\n    print(\"y is bigger\")\nelse:\n    print(\"___\")",
      "Correct solution: `if x > y:` → print('x is bigger'); `elif y > x:` → print('y is bigger'); `else:` → print('x and y are the same'). Only the first True branch runs, so exactly one message appears. You could also test `x == y` first; any order works because the three cases never overlap.",
    ],
    solution: `x = float(input("Enter value of x: "))
y = float(input("Enter value of y: "))
if x > y:
    print("x is bigger")
elif y > x:
    print("y is bigger")
else:
    print("x and y are the same")
`,
  },
  {
    id: "ex-t3-09",
    kind: "coding",
    topicId: "t3",
    title: "Positive, negative or zero",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [
      { file: "pe3", units: [1], item: "2", note: "Check if a number is positive, negative or zero" },
      { file: "lab-ch3-ii", units: [22, 23], note: "Number type check with if…elif…else" },
    ],
    origin: "source",
    prompt:
      "Read a number with the prompt `Enter a number: ` using `float()`.\n" +
      "- If it is greater than zero, print `The number is positive`\n" +
      "- If it is less than zero, print `The number is negative`\n" +
      "- Otherwise, print `The number is zero`",
    starterCode: `number = float(input("Enter a number: "))

# if ... elif ... else
`,
    sampleRun: "Enter a number: 7\nThe number is positive\n",
    tests: [
      {
        id: "t1",
        description: "7 → positive",
        inputs: ["7"],
        hidden: false,
        checks: [
          { type: "contains", text: "positive" },
          { type: "notContains", text: "negative" },
          { type: "notContains", text: "zero" },
        ],
      },
      {
        id: "t2",
        description: "-3 → negative",
        inputs: ["-3"],
        hidden: false,
        checks: [
          { type: "contains", text: "negative" },
          { type: "notContains", text: "positive" },
          { type: "notContains", text: "zero" },
        ],
      },
      {
        id: "t3",
        description: "0 → zero",
        inputs: ["0"],
        hidden: true,
        checks: [
          { type: "contains", text: "zero" },
          { type: "notContains", text: "positive" },
          { type: "notContains", text: "negative" },
        ],
      },
      {
        id: "t4",
        description: "-0.5 → negative",
        inputs: ["-0.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "negative" },
          { type: "notContains", text: "positive" },
          { type: "notContains", text: "zero" },
        ],
      },
      {
        id: "t5",
        description: "0.25 → positive",
        inputs: ["0.25"],
        hidden: true,
        checks: [
          { type: "contains", text: "positive" },
          { type: "notContains", text: "negative" },
          { type: "notContains", text: "zero" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 1, Ex 2, and Ch3 Lab Exercise II, cells 22–23. Topic 3, slide 33 shows the if…elif…else syntax.",
      "Test number > 0 first, then number < 0. If both are False, the only value left is zero, so else needs no condition.",
      "if number ___ 0:\n    print(\"The number is positive\")\nelif number ___ 0:\n    print(\"The number is negative\")\nelse:\n    print(\"The number is zero\")",
      "Correct solution: `if number > 0:` → positive, `elif number < 0:` → negative, `else:` → zero. Reading with float() means decimals such as -0.5 work too (int('-0.5') would raise ValueError). Note that `else` never takes a condition: `else number == 0:` is a SyntaxError.",
    ],
    solution: `number = float(input("Enter a number: "))
if number > 0:
    print("The number is positive")
elif number < 0:
    print("The number is negative")
else:
    print("The number is zero")
`,
  },
  {
    id: "ex-t3-10",
    kind: "coding",
    topicId: "t3",
    title: "Fix the bonus marks program",
    category: "fix",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-ii", units: [29, 31], note: "Task and solution: bonus marks based on study hours" },
      { file: "topic3", units: [33], note: "elif syntax; else takes no condition" },
    ],
    origin: "adapted",
    prompt:
      "A student gets bonus marks for studying:\n" +
      "- 5 or more study hours → 10 bonus marks\n" +
      "- 3 or more hours (but less than 5) → 5 bonus marks\n" +
      "- less than 3 hours → no bonus (0)\n" +
      "The program reads the test marks and then the number of study hours (both with `float()`) and prints `The final marks are:` followed by marks + bonus.\n" +
      "The starter code has two bugs: one stops it from running at all, and one gives the wrong bonus to students who study 5 hours or more. Fix both.",
    starterCode: `marks = float(input("Enter the test marks: "))
hours = float(input("Enter the number of study hours: "))

if hours >= 3:
    bonus = 5
elif hours >= 5:
    bonus = 10
else hours < 3:
    bonus = 0

final_marks = marks + bonus
print("The final marks are:", final_marks)
`,
    sampleRun: "Enter the test marks: 70\nEnter the number of study hours: 6\nThe final marks are: 80.0\n",
    tests: [
      {
        id: "t1",
        description: "70 marks, 6 hours → 80",
        inputs: ["70", "6"],
        hidden: false,
        checks: [
          { type: "contains", text: "final marks" },
          { type: "number", value: 80 },
          { type: "notNumber", value: 75 },
        ],
      },
      {
        id: "t2",
        description: "70 marks, exactly 5 hours → 80",
        inputs: ["70", "5"],
        hidden: false,
        checks: [
          { type: "number", value: 80 },
          { type: "notNumber", value: 75 },
        ],
      },
      {
        id: "t3",
        description: "70 marks, 4 hours → 75",
        inputs: ["70", "4"],
        hidden: true,
        checks: [
          { type: "number", value: 75 },
          { type: "notNumber", value: 80 },
        ],
      },
      {
        id: "t4",
        description: "70 marks, exactly 3 hours → 75",
        inputs: ["70", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 75 },
          { type: "notNumber", value: 70 },
        ],
      },
      {
        id: "t5",
        description: "70 marks, 2.5 hours → 70 (no bonus)",
        inputs: ["70", "2.5"],
        hidden: true,
        checks: [
          { type: "number", value: 70 },
          { type: "notNumber", value: 75 },
        ],
      },
      {
        id: "t6",
        description: "95.5 marks, 0 hours → 95.5",
        inputs: ["95.5", "0"],
        hidden: true,
        checks: [{ type: "number", value: 95.5 }],
      },
    ],
    hints: [
      "See Ch3 Lab Exercise II, cells 29 and 31, and Topic 3, slides 32–33: Python checks if/elif conditions from top to bottom and runs only the FIRST True one, and the syntax shows `else:` with no condition.",
      "Bug 1: `else hours < 3:` is a SyntaxError — else catches everything that is left, so it takes no condition. Bug 2: hours >= 3 is tested first, so a student with 6 hours matches it and gets 5; the `hours >= 5` branch can never run.",
      "if hours >= ___:\n    bonus = 10\nelif hours >= ___:\n    bonus = 5\n___:\n    bonus = 0",
      "Correct solution: test the biggest threshold first — `if hours >= 5: bonus = 10`, `elif hours >= 3: bonus = 5`, `else: bonus = 0` — then `final_marks = marks + bonus`. With 6 hours the first condition is True, giving 70 + 10 = 80. With 4 hours the first is False and the second True, giving 75. When thresholds use `>=`, always order them from largest to smallest.",
    ],
    solution: `marks = float(input("Enter the test marks: "))
hours = float(input("Enter the number of study hours: "))

if hours >= 5:
    bonus = 10
elif hours >= 3:
    bonus = 5
else:
    bonus = 0

final_marks = marks + bonus
print("The final marks are:", final_marks)
`,
  },
  {
    id: "ex-t3-11",
    kind: "coding",
    topicId: "t3",
    title: "Fix the weekly study hours program",
    category: "fix",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-ii", units: [24], note: "Task: weekly study hours with the category table" },
      { file: "lab-ch3-ii", units: [25], note: "Buggy version: compares daily instead of weekly hours" },
      { file: "lab-ch3-ii", units: [27], note: "Correct version: compares weekly hours" },
    ],
    origin: "adapted",
    prompt:
      "The program reads a student's daily study hours (`float()`), calculates the weekly hours (daily × 7), prints the study category, and then prints `Total Weekly Hours =` followed by the weekly total.\n" +
      "Category table (weekly hours):\n" +
      "- 35 or more → `Very Hardworking`\n" +
      "- 20 or more (but less than 35) → `Good`\n" +
      "- otherwise → `Needs Improvement`\n" +
      "The program runs, but it gives the wrong category: for 5.5 daily hours (38.5 weekly) it prints `Needs Improvement` instead of `Very Hardworking`. Find the bug and fix it.",
    starterCode: `daily_hours = float(input("Enter Your Daily Hours: "))
total_weekly = daily_hours * 7
if daily_hours >= 35:
    print("Very Hardworking")
elif daily_hours >= 20:
    print("Good")
else:
    print("Needs Improvement")

print("Total Weekly Hours =", total_weekly)
`,
    sampleRun: "Enter Your Daily Hours: 5.5\nVery Hardworking\nTotal Weekly Hours = 38.5\n",
    tests: [
      {
        id: "t1",
        description: "5.5 daily hours → 38.5 weekly, Very Hardworking",
        inputs: ["5.5"],
        hidden: false,
        checks: [
          { type: "contains", text: "Very Hardworking" },
          { type: "notContains", text: "Needs Improvement" },
          { type: "notContains", text: "Good" },
          { type: "number", value: 38.5 },
        ],
      },
      {
        id: "t2",
        description: "3 daily hours → 21 weekly, Good",
        inputs: ["3"],
        hidden: false,
        checks: [
          { type: "contains", text: "Good" },
          { type: "notContains", text: "Very Hardworking" },
          { type: "notContains", text: "Needs Improvement" },
          { type: "number", value: 21 },
        ],
      },
      {
        id: "t3",
        description: "5 daily hours → exactly 35 weekly, Very Hardworking",
        inputs: ["5"],
        hidden: true,
        checks: [
          { type: "contains", text: "Very Hardworking" },
          { type: "notContains", text: "Good" },
          { type: "number", value: 35 },
        ],
      },
      {
        id: "t4",
        description: "2.5 daily hours → 17.5 weekly, Needs Improvement",
        inputs: ["2.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "Needs Improvement" },
          { type: "notContains", text: "Good" },
          { type: "notContains", text: "Very Hardworking" },
          { type: "number", value: 17.5 },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab Exercise II: cell 24 gives the task and the table (it uses WEEKLY hours), cell 25 is this buggy version, and cell 27 is the corrected one.",
      "Look at which variable each condition tests. The table talks about weekly hours, but the conditions test daily_hours. Nobody studies 35 hours in one day, so the first two branches almost never run.",
      "if ___ >= 35:\n    print(\"Very Hardworking\")\nelif ___ >= 20:\n    print(\"Good\")\nelse:\n    print(\"Needs Improvement\")",
      "Correct solution: change both conditions to use `total_weekly` — `if total_weekly >= 35:` and `elif total_weekly >= 20:`. For 5.5 daily hours, total_weekly = 38.5, so the first condition is True and 'Very Hardworking' is printed. For 3 daily hours, total_weekly = 21: the first test is False and the second True, giving 'Good'. The final print stays unindented, so the total is always shown.",
    ],
    solution: `daily_hours = float(input("Enter Your Daily Hours: "))
total_weekly = daily_hours * 7
if total_weekly >= 35:
    print("Very Hardworking")
elif total_weekly >= 20:
    print("Good")
else:
    print("Needs Improvement")

print("Total Weekly Hours =", total_weekly)
`,
  },
  {
    id: "ex-t3-12",
    kind: "coding",
    topicId: "t3",
    title: "Fruit shop",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [{ file: "lab-ch3-iii", units: [9, 10], note: "Class exercise and solution: fruit shop prices with if…elif…else" }],
    origin: "source",
    prompt:
      "Write a program for a fruit shop. Read the fruit name (prompt `Enter fruit: `) and then the quantity in kilograms (prompt `Enter quantity in kg: `, use `float()`).\n" +
      "Prices per kg: mango 2.000 OMR, banana 1.000 OMR, watermelon 0.500 OMR. Fruit names are typed in lowercase, exactly as written here.\n" +
      "- For one of these fruits, print `Total cost:` followed by quantity × price and `OMR`, e.g. `Total cost: 6.0 OMR`\n" +
      "- For any other fruit, print `Fruit not available`",
    starterCode: `fruit = input("Enter fruit: ")
quantity = float(input("Enter quantity in kg: "))

# Check the fruit name and calculate the total
`,
    sampleRun: "Enter fruit: mango\nEnter quantity in kg: 3\nTotal cost: 6.0 OMR\n",
    tests: [
      {
        id: "t1",
        description: "mango, 3 kg → 6.0 OMR",
        inputs: ["mango", "3"],
        hidden: false,
        checks: [
          { type: "contains", text: "Total cost" },
          { type: "number", value: 6 },
          { type: "notContains", text: "not available" },
        ],
      },
      {
        id: "t2",
        description: "apple → Fruit not available",
        inputs: ["apple", "2"],
        hidden: false,
        checks: [
          { type: "contains", text: "Fruit not available" },
          { type: "notContains", text: "Total cost" },
        ],
      },
      {
        id: "t3",
        description: "banana, 3 kg → 3.0 OMR",
        inputs: ["banana", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 3 },
          { type: "notNumber", value: 6 },
          { type: "notNumber", value: 1.5 },
          { type: "notContains", text: "not available" },
        ],
      },
      {
        id: "t4",
        description: "watermelon, 3 kg → 1.5 OMR",
        inputs: ["watermelon", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 1.5 },
          { type: "notNumber", value: 6 },
          { type: "notContains", text: "not available" },
        ],
      },
      {
        id: "t5",
        description: "mango, 0.5 kg → 1.0 OMR",
        inputs: ["mango", "0.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "Total cost" },
          { type: "number", value: 1 },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab Exercise III, cells 9–10. Strings are compared with `==`, e.g. `if fruit == \"mango\":` (Topic 3, slide 7 lists the comparison operators).",
      "Check the fruit name with if / elif / elif. In each branch multiply the quantity by that fruit's price and print the total. The else branch prints the 'not available' message.",
      "if fruit == \"mango\":\n    total = quantity * ___\n    print(\"Total cost:\", total, \"OMR\")\nelif fruit == \"___\":\n    ...\nelif ___:\n    ...\nelse:\n    print(\"Fruit not available\")",
      "Correct solution: `if fruit == \"mango\": total = quantity * 2.000`, `elif fruit == \"banana\": total = quantity * 1.000`, `elif fruit == \"watermelon\": total = quantity * 0.500`, each followed by `print(\"Total cost:\", total, \"OMR\")`, and `else: print(\"Fruit not available\")`. The quotes around \"mango\" matter: without them Python looks for a variable named mango (NameError). String comparison is case-sensitive, so 'Mango' would not match 'mango'.",
    ],
    solution: `fruit = input("Enter fruit: ")
quantity = float(input("Enter quantity in kg: "))

if fruit == "mango":
    total = quantity * 2.000
    print("Total cost:", total, "OMR")
elif fruit == "banana":
    total = quantity * 1.000
    print("Total cost:", total, "OMR")
elif fruit == "watermelon":
    total = quantity * 0.500
    print("Total cost:", total, "OMR")
else:
    print("Fruit not available")
`,
  },
  {
    id: "ex-t3-13",
    kind: "coding",
    topicId: "t3",
    title: "Student grade report",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "pe3", units: [1], item: "4", note: "Read name, ID, quiz, mid and final marks; total and grade table; sample output" },
      { file: "topic3", units: [38], note: "Exercise: letter grade for a numeric grade" },
      { file: "lab-ch3-iiii", units: [12], note: "Lab attempt at Q4; its `<= 89`-style upper limits leave a gap at 89.5, which this exercise's rules close (tested)" },
    ],
    origin: "adapted",
    prompt:
      "Read, in this order: the student's name, ID number, quiz mark, mid mark and final mark. Use the prompts `Enter your name: `, `Enter your ID no: `, `Enter your quiz mark: `, `Enter your mid mark: ` and `Enter your final mark: `, and read the three marks with `float()`.\n" +
      "Calculate total = quiz + mid + final and print `Total marks:` followed by the total. Then find the grade:\n" +
      "- total 90 or more → A\n" +
      "- total 80 or more (but less than 90) → B\n" +
      "- total 70 or more (but less than 80) → C\n" +
      "- total 60 or more (but less than 70) → D\n" +
      "- total less than 60 → F\n" +
      "Print `<name> with id no:<id> got <grade> grade`, for example `Samuel with id no:16J123 got A grade`, and finally print `End of program`.\n" +
      "Marks can have decimals (e.g. a total of 89.5), so use the 'or more' rules above, not the whole-number ranges 80–89, 70–79 from the table.",
    starterCode: `name = input("Enter your name: ")
id_no = input("Enter your ID no: ")
quiz = float(input("Enter your quiz mark: "))
mid = float(input("Enter your mid mark: "))
final = float(input("Enter your final mark: "))

# Calculate and print the total

# Find the grade with if / elif / else

# Print the result line and "End of program"
`,
    sampleRun: "Enter your name: Samuel\nEnter your ID no: 16J123\nEnter your quiz mark: 9\nEnter your mid mark: 40\nEnter your final mark: 41\nTotal marks: 90.0\nSamuel with id no:16J123 got A grade\nEnd of program\n",
    tests: [
      {
        id: "t1",
        description: "Samuel: 9 + 40 + 41 = 90 → A (sample from the exercise sheet)",
        inputs: ["Samuel", "16J123", "9", "40", "41"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 5 },
          { type: "number", value: 90 },
          { type: "contains", text: "Samuel" },
          { type: "contains", text: "got A grade", caseSensitive: true },
          { type: "contains", text: "End of program" },
        ],
      },
      {
        id: "t2",
        description: "Lina: 15 + 35 + 35 = 85 → B",
        inputs: ["Lina", "22S456", "15", "35", "35"],
        hidden: false,
        checks: [
          { type: "number", value: 85 },
          { type: "contains", text: "got B grade", caseSensitive: true },
          { type: "notContains", text: "got A grade", caseSensitive: true },
        ],
      },
      {
        id: "t3",
        description: "Total exactly 70 → C",
        inputs: ["Omar", "20A001", "10", "30", "30"],
        hidden: true,
        checks: [
          { type: "number", value: 70 },
          { type: "contains", text: "got C grade", caseSensitive: true },
          { type: "notContains", text: "got D grade", caseSensitive: true },
        ],
      },
      {
        id: "t4",
        description: "Total exactly 60 → D",
        inputs: ["Huda", "21B777", "15", "25", "20"],
        hidden: true,
        checks: [
          { type: "contains", text: "got D grade", caseSensitive: true },
          { type: "notContains", text: "got F grade", caseSensitive: true },
        ],
      },
      {
        id: "t5",
        description: "Total 59.5 → F",
        inputs: ["Ali", "19C100", "5", "20", "34.5"],
        hidden: true,
        checks: [
          { type: "number", value: 59.5 },
          { type: "contains", text: "got F grade", caseSensitive: true },
          { type: "notContains", text: "got D grade", caseSensitive: true },
        ],
      },
      {
        id: "t6",
        description: "Total 89.5 (between 89 and 90) → B",
        inputs: ["Sara", "23D200", "20", "30", "39.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "got B grade", caseSensitive: true },
          { type: "notContains", text: "got A grade", caseSensitive: true },
          { type: "contains", text: "End of program" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 1, Ex 4 (the grade table and sample output) and Topic 3, slide 38 (letter grades with if…elif…else).",
      "Read the five values in order and add the three marks. Then test from the highest grade down: total >= 90, then >= 80, then >= 70, then >= 60, else F. Save the letter in a variable and print the result line once at the end.",
      "total = quiz + mid + final\nprint(\"Total marks:\", total)\nif total >= 90:\n    grade = \"A\"\nelif total >= ___:\n    grade = \"B\"\n...\nelse:\n    grade = \"___\"\nprint(f\"{name} with id no:{id_no} got {grade} grade\")\nprint(\"End of program\")",
      "Correct solution: after the total, use `if total >= 90: grade = \"A\"`, `elif total >= 80: grade = \"B\"`, `elif total >= 70: grade = \"C\"`, `elif total >= 60: grade = \"D\"`, `else: grade = \"F\"`, then print the result line and 'End of program'. Because elif is only checked when the earlier tests failed, `total >= 80` already means 'less than 90' — no `and total <= 89` is needed. Writing `total <= 89` would actually be a bug: a total of 89.5 would match no branch.",
    ],
    solution: `name = input("Enter your name: ")
id_no = input("Enter your ID no: ")
quiz = float(input("Enter your quiz mark: "))
mid = float(input("Enter your mid mark: "))
final = float(input("Enter your final mark: "))

total = quiz + mid + final
print("Total marks:", total)

if total >= 90:
    grade = "A"
elif total >= 80:
    grade = "B"
elif total >= 70:
    grade = "C"
elif total >= 60:
    grade = "D"
else:
    grade = "F"

print(f"{name} with id no:{id_no} got {grade} grade")
print("End of program")
`,
  },
  {
    id: "ex-t3-14",
    kind: "coding",
    topicId: "t3",
    title: "Menu calculator",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "pe3", units: [1], item: "5", note: "Two numbers and a menu choice: + − × % / or ERROR" },
      { file: "lab-ch3-iiii", units: [14], note: "Solution to Practice Exercises III Q5" },
    ],
    origin: "source",
    prompt:
      "Read two numbers with `float()` (prompts `Enter first number: ` and `Enter second number: `), then the user's choice with `int()` (prompt `Enter your choice (1-5): `).\n" +
      "- 1 → addition\n" +
      "- 2 → subtraction (first − second)\n" +
      "- 3 → multiplication\n" +
      "- 4 → modulus (first % second)\n" +
      "- 5 → division (first / second)\n" +
      "For choices 1–5 print `Result:` followed by the answer, e.g. `Result: 14.0`. For any other choice print `ERROR`.",
    starterCode: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
choice = int(input("Enter your choice (1-5): "))

# One branch for each choice, and else for ERROR
`,
    sampleRun: "Enter first number: 10\nEnter second number: 4\nEnter your choice (1-5): 1\nResult: 14.0\n",
    tests: [
      {
        id: "t1",
        description: "10, 4, choice 1 → 14.0",
        inputs: ["10", "4", "1"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Result" },
          { type: "number", value: 14 },
          { type: "notNumber", value: 6 },
          { type: "notContains", text: "error" },
        ],
      },
      {
        id: "t2",
        description: "10, 4, choice 4 (modulus) → 2.0",
        inputs: ["10", "4", "4"],
        hidden: false,
        checks: [
          { type: "number", value: 2 },
          { type: "notNumber", value: 2.5 },
          { type: "notNumber", value: 14 },
        ],
      },
      {
        id: "t3",
        description: "Choice 9 → ERROR",
        inputs: ["10", "4", "9"],
        hidden: false,
        checks: [
          { type: "contains", text: "ERROR" },
          { type: "notContains", text: "Result" },
        ],
      },
      {
        id: "t4",
        description: "Choice 2 → 6.0",
        inputs: ["10", "4", "2"],
        hidden: true,
        checks: [
          { type: "number", value: 6 },
          { type: "notNumber", value: 14 },
        ],
      },
      {
        id: "t5",
        description: "Choice 3 → 40.0",
        inputs: ["10", "4", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 40 },
          { type: "notNumber", value: 14 },
        ],
      },
      {
        id: "t6",
        description: "Choice 5 (division) → 2.5",
        inputs: ["10", "4", "5"],
        hidden: true,
        checks: [
          { type: "number", value: 2.5 },
          { type: "notNumber", value: 2 },
        ],
      },
      {
        id: "t7",
        description: "Choice 0 → ERROR",
        inputs: ["10", "4", "0"],
        hidden: true,
        checks: [
          { type: "contains", text: "ERROR" },
          { type: "notContains", text: "Result" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 1, Ex 5 (the choice table) and Topic 3, slide 33 (any number of elif parts; else is optional).",
      "Read all three values first. Then compare choice with 1, 2, 3, 4 and 5 using `==`, one branch each. Anything else goes to else and prints ERROR.",
      "if choice == 1:\n    result = num1 + num2\n    print(\"Result:\", result)\nelif choice == ___:\n    result = num1 ___ num2\n    print(\"Result:\", result)\n...\nelse:\n    print(\"ERROR\")",
      "Correct solution: five branches — `choice == 1` → num1 + num2, `== 2` → num1 - num2, `== 3` → num1 * num2, `== 4` → num1 % num2, `== 5` → num1 / num2 — each printing `Result:` and the value, plus `else: print(\"ERROR\")`. For 10 and 4: modulus gives 2.0 (the remainder of 10 ÷ 4) and division gives 2.5. Using `=` instead of `==` in a condition is a SyntaxError.",
    ],
    solution: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
choice = int(input("Enter your choice (1-5): "))

if choice == 1:
    result = num1 + num2
    print("Result:", result)
elif choice == 2:
    result = num1 - num2
    print("Result:", result)
elif choice == 3:
    result = num1 * num2
    print("Result:", result)
elif choice == 4:
    result = num1 % num2
    print("Result:", result)
elif choice == 5:
    result = num1 / num2
    print("Result:", result)
else:
    print("ERROR")
`,
  },
  {
    id: "ex-t3-15",
    kind: "coding",
    topicId: "t3",
    title: "Fix the largest-of-three program",
    category: "fix",
    conceptIds: ["t3-elif", "t3-logical-conditions"],
    difficulty: "medium",
    sources: [
      { file: "pe3", units: [1], item: "3", note: "Read three numbers and find the largest" },
      { file: "topic3", units: [36, 37], note: "Largest of three with if…elif…else and `and` (strict >, fails on ties)" },
      { file: "lab-ch3-iiii", units: [10], note: "Solution to Practice Exercises III Q3 using >=" },
    ],
    origin: "adapted",
    prompt:
      "This program (based on Topic 3, slide 37) should print `Largest number:` followed by the largest of three whole numbers.\n" +
      "It works for 5, 8, 6, but it is wrong when the two biggest numbers are equal: for 5, 5, 3 it prints `Largest number: 3`.\n" +
      "Fix the conditions so the program prints the correct largest value for every input, including ties. Keep the same prompts and the same output message.",
    starterCode: `a = int(input("Enter 1st number: "))
b = int(input("Enter 2nd number: "))
c = int(input("Enter 3rd number: "))
if (a > b) and (a > c):
    largest = a
elif (b > a) and (b > c):
    largest = b
else:
    largest = c
print("Largest number:", largest)
`,
    sampleRun: "Enter 1st number: 5\nEnter 2nd number: 8\nEnter 3rd number: 6\nLargest number: 8\n",
    tests: [
      {
        id: "t1",
        description: "5, 8, 6 → 8",
        inputs: ["5", "8", "6"],
        hidden: false,
        checks: [
          { type: "contains", text: "Largest number" },
          { type: "number", value: 8 },
          { type: "notNumber", value: 6 },
        ],
      },
      {
        id: "t2",
        description: "5, 5, 3 (tie) → 5",
        inputs: ["5", "5", "3"],
        hidden: false,
        checks: [
          { type: "number", value: 5 },
          { type: "notNumber", value: 3 },
        ],
      },
      {
        id: "t3",
        description: "7, 7, 2 (tie) → 7",
        inputs: ["7", "7", "2"],
        hidden: true,
        checks: [
          { type: "number", value: 7 },
          { type: "notNumber", value: 2 },
        ],
      },
      {
        id: "t4",
        description: "2, 7, 7 (tie) → 7",
        inputs: ["2", "7", "7"],
        hidden: true,
        checks: [
          { type: "number", value: 7 },
          { type: "notNumber", value: 2 },
        ],
      },
      {
        id: "t5",
        description: "9, 2, 9 (tie) → 9",
        inputs: ["9", "2", "9"],
        hidden: true,
        checks: [
          { type: "number", value: 9 },
          { type: "notNumber", value: 2 },
        ],
      },
      {
        id: "t6",
        description: "4, 4, 4 → 4",
        inputs: ["4", "4", "4"],
        hidden: true,
        checks: [{ type: "number", value: 4 }],
      },
      {
        id: "t7",
        description: "1, 3, 6 → 6",
        inputs: ["1", "3", "6"],
        hidden: true,
        checks: [
          { type: "number", value: 6 },
          { type: "notNumber", value: 3 },
        ],
      },
    ],
    hints: [
      "See Topic 3, slide 37 (the original program) and Ch3 Lab Exercise IIII, cell 10, which solves Practice Exercises III Ex 3 with a small but important change in the comparison operators.",
      "Trace 5, 5, 3: is a > b? 5 > 5 is False, so the first test fails. Is b > a? Also False. So the program falls into else and picks c = 3. The strict `>` cannot handle a tie between the two biggest numbers.",
      "if (a ___ b) and (a ___ c):\n    largest = a\nelif (b ___ a) and (b ___ c):\n    largest = b\nelse:\n    largest = c",
      "Correct solution: use `>=` in all four comparisons: `if a >= b and a >= c:` → largest = a, `elif b >= a and b >= c:` → largest = b, `else:` → largest = c. Now 5, 5, 3 matches the first test (5 >= 5 and 5 >= 3) and prints 5. If a is not the largest but b ties with c, then c is the same value, so the result is still correct.",
    ],
    solution: `a = int(input("Enter 1st number: "))
b = int(input("Enter 2nd number: "))
c = int(input("Enter 3rd number: "))
if (a >= b) and (a >= c):
    largest = a
elif (b >= a) and (b >= c):
    largest = b
else:
    largest = c
print("Largest number:", largest)
`,
  },

  // ------------------------------------------------------------------ combining conditions with and / or
  {
    id: "ex-t3-16",
    kind: "coding",
    topicId: "t3",
    title: "Fix the online-or-campus decision",
    category: "fix",
    conceptIds: ["t3-logical-conditions", "t3-if-else"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-ii", units: [10], note: "Task: raining or no transport → online class" },
      { file: "lab-ch3-ii", units: [11], note: "Buggy version: compares strings with True, so it always stays on campus" },
      { file: "lab-ch3-ii", units: [12], note: "Compares the typed answers with strings (but joins them with `and`; this exercise follows cell 10's `or` rule)" },
    ],
    origin: "adapted",
    prompt:
      "The program reads two answers: first the weather (`raining` or `not raining`), then the transport situation (`transport` or `no transport`).\n" +
      "Rule: if it is raining OR there is no transport, print `Attend the online class!`; otherwise print `Stay on Campus`. Always finish with `Check your status!!`.\n" +
      "The starter code always prints `Stay on Campus`, whatever the user types. Find out why and fix the condition.\n" +
      "(Note: the lab's working version in cell 12 uses `and`, but the task in cell 10 says 'or'. Follow the rule stated here.)",
    starterCode: `weather = input("Weather (raining / not raining): ")
transport = input("Transport (transport / no transport): ")
if weather == True or transport == True:
    print("Attend the online class!")
else:
    print("Stay on Campus")
print("Check your status!!")
`,
    sampleRun: "Weather (raining / not raining): raining\nTransport (transport / no transport): transport\nAttend the online class!\nCheck your status!!\n",
    tests: [
      {
        id: "t1",
        description: "raining + transport → online",
        inputs: ["raining", "transport"],
        hidden: false,
        checks: [
          { type: "contains", text: "Attend the online class" },
          { type: "notContains", text: "Stay on Campus" },
          { type: "contains", text: "Check your status" },
        ],
      },
      {
        id: "t2",
        description: "not raining + transport → stay on campus",
        inputs: ["not raining", "transport"],
        hidden: false,
        checks: [
          { type: "contains", text: "Stay on Campus" },
          { type: "notContains", text: "online" },
          { type: "contains", text: "Check your status" },
        ],
      },
      {
        id: "t3",
        description: "not raining + no transport → online",
        inputs: ["not raining", "no transport"],
        hidden: true,
        checks: [
          { type: "contains", text: "Attend the online class" },
          { type: "notContains", text: "Stay on Campus" },
        ],
      },
      {
        id: "t4",
        description: "raining + no transport → online",
        inputs: ["raining", "no transport"],
        hidden: true,
        checks: [
          { type: "order", texts: ["Attend the online class", "Check your status"] },
          { type: "notContains", text: "Stay on Campus" },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab Exercise II: cell 10 states the rule, cell 11 is this buggy idea, and cell 12 shows how to compare the typed answer with a string. Topic 2, slide 63: input() always stores a string.",
      "weather holds a string such as 'raining'. A string is never equal to the Boolean True, so `weather == True` is always False — and so is the whole `or` condition. Compare each answer with the exact text instead.",
      "if weather == \"___\" or transport == \"___\":\n    print(\"Attend the online class!\")\nelse:\n    print(\"Stay on Campus\")\nprint(\"Check your status!!\")",
      "Correct solution: `if weather == \"raining\" or transport == \"no transport\":`. With `or`, one True side is enough: 'raining' + 'transport' → online; 'not raining' + 'no transport' → online; only 'not raining' + 'transport' makes both sides False, so else prints 'Stay on Campus'. The last print is unindented, so it always runs.",
    ],
    solution: `weather = input("Weather (raining / not raining): ")
transport = input("Transport (transport / no transport): ")
if weather == "raining" or transport == "no transport":
    print("Attend the online class!")
else:
    print("Stay on Campus")
print("Check your status!!")
`,
  },
  {
    id: "ex-t3-17",
    kind: "coding",
    topicId: "t3",
    title: "Membership discount",
    category: "write",
    conceptIds: ["t3-logical-conditions", "t3-if-else"],
    difficulty: "medium",
    sources: [{ file: "lab-ch3-iii", units: [11, 12], note: "Class exercise and solution: 2% discount when amount > 50 AND member" }],
    origin: "source",
    prompt:
      "Read, in this order: the customer's name (`Enter customer name: `), the purchase amount in OMR with `float()` (`Enter purchase amount: `), and whether they are a member (`Are you a member? (yes/no): `, typed as `yes` or `no`).\n" +
      "A 2% discount is given only when the amount is more than 50 OMR AND the customer is a member. Use one `if` with `and` to combine the two conditions.\n" +
      "If the discount applies, print three lines: `Customer: <name>`, `Discount: <discount> OMR`, `Final amount: <amount − discount> OMR`.\n" +
      "Otherwise print: `Customer: <name>`, `No discount`, `Final amount: <amount> OMR`.",
    starterCode: `name = input("Enter customer name: ")
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? (yes/no): ")

# Discount only if amount > 50 and member is "yes"
`,
    sampleRun: "Enter customer name: Ali\nEnter purchase amount: 100\nAre you a member? (yes/no): yes\nCustomer: Ali\nDiscount: 2.0 OMR\nFinal amount: 98.0 OMR\n",
    tests: [
      {
        id: "t1",
        description: "Ali, 100, yes → discount 2.0, final 98.0",
        inputs: ["Ali", "100", "yes"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Ali" },
          { type: "number", value: 2 },
          { type: "number", value: 98 },
          { type: "notContains", text: "No discount" },
        ],
      },
      {
        id: "t2",
        description: "Sara, 100, no → no discount, final 100.0",
        inputs: ["Sara", "100", "no"],
        hidden: false,
        checks: [
          { type: "contains", text: "No discount" },
          { type: "number", value: 100 },
          { type: "notNumber", value: 98 },
        ],
      },
      {
        id: "t3",
        description: "Exactly 50 and a member → no discount (not more than 50)",
        inputs: ["Omar", "50", "yes"],
        hidden: true,
        checks: [
          { type: "contains", text: "No discount" },
          { type: "number", value: 50 },
          { type: "notNumber", value: 49 },
        ],
      },
      {
        id: "t4",
        description: "30, not a member → no discount",
        inputs: ["Huda", "30", "no"],
        hidden: true,
        checks: [
          { type: "contains", text: "No discount" },
          { type: "number", value: 30 },
        ],
      },
      {
        id: "t5",
        description: "200, member → discount 4.0, final 196.0",
        inputs: ["Ahmed", "200", "yes"],
        hidden: true,
        checks: [
          { type: "number", value: 4 },
          { type: "number", value: 196 },
          { type: "notContains", text: "No discount" },
        ],
      },
    ],
    requirements: [{ pattern: "\\band\\b", message: "Combine the two conditions with `and`" }],
    hints: [
      "See Ch3 Lab Exercise III, cells 11–12, and Topic 3, slide 7: a condition can use the logical operators. `and` is True only when both sides are True.",
      "Condition: amount > 50 and member == \"yes\". If it is True, calculate discount = amount * 0.02 and the final amount = amount - discount, then print the three lines. Otherwise print the name, 'No discount' and the original amount.",
      "if amount > ___ and member == \"___\":\n    discount = amount * ___\n    final_amount = amount - discount\n    print(\"Customer:\", name)\n    print(\"Discount:\", discount, \"OMR\")\n    print(\"Final amount:\", final_amount, \"OMR\")\nelse:\n    ...",
      "Correct solution: `if amount > 50 and member == \"yes\":` with `discount = amount * 0.02` (2% = 0.02) and `final_amount = amount - discount`, printing Customer / Discount / Final amount; `else:` prints Customer, 'No discount' and `amount`. 50 itself is not 'more than 50', so it gets no discount. Each side of `and` must be a full comparison: `amount > 50 and == \"yes\"` is a SyntaxError.",
    ],
    solution: `name = input("Enter customer name: ")
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? (yes/no): ")

if amount > 50 and member == "yes":
    discount = amount * 0.02
    final_amount = amount - discount
    print("Customer:", name)
    print("Discount:", discount, "OMR")
    print("Final amount:", final_amount, "OMR")
else:
    print("Customer:", name)
    print("No discount")
    print("Final amount:", amount, "OMR")
`,
  },
  {
    id: "ex-t3-18",
    kind: "coding",
    topicId: "t3",
    title: "Rainfall decision",
    category: "write",
    conceptIds: ["t3-logical-conditions", "t3-elif"],
    difficulty: "hard",
    sources: [{ file: "lab-ch4-iiii", units: [1, 2], note: "Rainfall over three days: decision rules with `or` (version without a loop)" }],
    origin: "source",
    prompt:
      "A university decides whether to hold physical classes after three days of rain. Read the rainfall for each day in mm with `float()`, using the prompts `Enter the rainfall for day1 (in mm): `, `Enter the rainfall for day2 (in mm): ` and `Enter the rainfall for day3 (in mm): `.\n" +
      "Calculate the total and the average (total / 3) and print them as `Total = <total>` and `Average = <average>`. Then print exactly ONE decision, checking the rules in this order:\n" +
      "1. average 30 mm or more → `Physical classes are canceled.`\n" +
      "2. otherwise, if the average is 20 mm or more, OR any single day is 40 mm or more → `Weather conditions require further assessment.`\n" +
      "3. otherwise, if the total is less than 15 mm → `Rainfall has been low over the three days.`\n" +
      "4. otherwise → `Physical classes can proceed.`",
    starterCode: `day1 = float(input("Enter the rainfall for day1 (in mm): "))
day2 = float(input("Enter the rainfall for day2 (in mm): "))
day3 = float(input("Enter the rainfall for day3 (in mm): "))

# total and average

# if / elif / elif / else — rule 2 needs "or"
`,
    sampleRun: "Enter the rainfall for day1 (in mm): 4\nEnter the rainfall for day2 (in mm): 5\nEnter the rainfall for day3 (in mm): 4\nTotal = 13.0\nAverage = 4.333333333333333\nRainfall has been low over the three days.\n",
    tests: [
      {
        id: "t1",
        description: "4, 5, 4 → total 13, low rainfall",
        inputs: ["4", "5", "4"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 13 },
          { type: "number", value: 4.333, tolerance: 0.01 },
          { type: "contains", text: "Rainfall has been low" },
          { type: "notContains", text: "cancel" },
          { type: "notContains", text: "assessment" },
          { type: "notContains", text: "proceed" },
        ],
      },
      {
        id: "t2",
        description: "30, 35, 40 → average 35, canceled",
        inputs: ["30", "35", "40"],
        hidden: false,
        checks: [
          { type: "contains", text: "classes are cancel" },
          { type: "notContains", text: "assessment" },
          { type: "notContains", text: "low" },
          { type: "notContains", text: "proceed" },
        ],
      },
      {
        id: "t3",
        description: "40, 0, 0 → one day of 40 mm, further assessment",
        inputs: ["40", "0", "0"],
        hidden: false,
        checks: [
          { type: "contains", text: "further assessment" },
          { type: "notContains", text: "cancel" },
          { type: "notContains", text: "proceed" },
        ],
      },
      {
        id: "t4",
        description: "10, 20, 30 → average exactly 20, further assessment",
        inputs: ["10", "20", "30"],
        hidden: true,
        checks: [
          { type: "contains", text: "further assessment" },
          { type: "notContains", text: "cancel" },
          { type: "notContains", text: "proceed" },
        ],
      },
      {
        id: "t5",
        description: "30, 30, 30 → average exactly 30, canceled",
        inputs: ["30", "30", "30"],
        hidden: true,
        checks: [
          { type: "contains", text: "classes are cancel" },
          { type: "notContains", text: "assessment" },
        ],
      },
      {
        id: "t6",
        description: "5, 5, 5 → total exactly 15 (not less than 15), proceed",
        inputs: ["5", "5", "5"],
        hidden: true,
        checks: [
          { type: "contains", text: "can proceed" },
          { type: "notContains", text: "low" },
        ],
      },
      {
        id: "t7",
        description: "0, 0, 39.5 → no day reaches 40, proceed",
        inputs: ["0", "0", "39.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "can proceed" },
          { type: "notContains", text: "assessment" },
        ],
      },
    ],
    hints: [
      "See Ch4 Lab Exercise IIII, cells 1–2 (the rules and a solution without a loop), and Topic 3, slide 33 (if…elif…else). Rule 2 joins several comparisons with `or` (Topic 3, slide 7).",
      "Calculate total = day1 + day2 + day3 and avg = total / 3, and print both. Then write if (rule 1), elif (rule 2), elif (rule 3), else (rule 4). For rule 2, 'any single day is 40 or more' means day1 >= 40 or day2 >= 40 or day3 >= 40.",
      "if avg >= 30:\n    print(\"Physical classes are canceled.\")\nelif avg >= 20 or day1 >= 40 or ___ or ___:\n    print(\"Weather conditions require further assessment.\")\nelif total ___ 15:\n    print(\"Rainfall has been low over the three days.\")\nelse:\n    print(\"Physical classes can proceed.\")",
      "Correct solution: `total = day1 + day2 + day3`, `avg = total / 3`, print both, then the chain shown in the hint above with `day2 >= 40 or day3 >= 40` and `total < 15`. The order matters: for 30, 35, 40 the average is 35, so rule 1 wins even though day 3 also matches rule 2. Each side of `or` needs a full comparison — `day1 or day2 >= 40` does not mean 'either day is 40 or more'. A total of exactly 15 is not less than 15, so 5, 5, 5 reaches rule 4.",
    ],
    solution: `day1 = float(input("Enter the rainfall for day1 (in mm): "))
day2 = float(input("Enter the rainfall for day2 (in mm): "))
day3 = float(input("Enter the rainfall for day3 (in mm): "))

total = day1 + day2 + day3
avg = total / 3
print("Total =", total)
print("Average =", avg)

if avg >= 30:
    print("Physical classes are canceled.")
elif avg >= 20 or day1 >= 40 or day2 >= 40 or day3 >= 40:
    print("Weather conditions require further assessment.")
elif total < 15:
    print("Rainfall has been low over the three days.")
else:
    print("Physical classes can proceed.")
`,
  },
  {
    id: "ex-t3-19",
    kind: "coding",
    topicId: "t3",
    title: "Hypermarket discount",
    category: "write",
    conceptIds: ["t3-elif"],
    difficulty: "hard",
    sources: [
      { file: "pe3", units: [1], item: "6", note: "Discount rules for the total of two items" },
      { file: "pe3", units: [2], item: "6", note: "Sample outputs 1–4 (Output4 shows a wrong amount)" },
    ],
    origin: "adapted",
    prompt:
      "Write a discount program for a hypermarket (Practice Exercises III, Ex 6). First print the banner `******WELCOME TO CARREFOUR HYPERMARKET******`.\n" +
      "Then read the customer's name (`Enter your name: `), the price of item 1 (`Enter Price of Items1: `) and the price of item 2 (`Enter Price of Items2: `). Read both prices with `float()`. Add them to get the total, then apply exactly ONE rule, checking them in this order:\n" +
      "- total greater than 500 → 50 riyals off\n" +
      "- otherwise, total 100 or more → 20 riyals off\n" +
      "- otherwise, total 50 or more → 5 riyals off\n" +
      "- otherwise (total less than 50) → no discount\n" +
      "With a discount, print `Congrats Mr/Ms.<name> you have to pay <amount> ONLY`. Without a discount, print `SORRY Mr/Ms.<name> you have to pay <total> without any discount`. Finally print `:) KEEP SMILING WHILE SHOPPING :)` and `COME BACK AGAIN`.",
    starterCode: `print("******WELCOME TO CARREFOUR HYPERMARKET******")
name = input("Enter your name: ")
price1 = float(input("Enter Price of Items1: "))
price2 = float(input("Enter Price of Items2: "))
total = price1 + price2

# Apply the discount rules in order (if / elif / elif / else)

print(":) KEEP SMILING WHILE SHOPPING :)")
print("COME BACK AGAIN")
`,
    sampleRun: "******WELCOME TO CARREFOUR HYPERMARKET******\nEnter your name: Fatima\nEnter Price of Items1: 600\nEnter Price of Items2: 100\nCongrats Mr/Ms.Fatima you have to pay 650.0 ONLY\n:) KEEP SMILING WHILE SHOPPING :)\nCOME BACK AGAIN\n",
    tests: [
      {
        id: "t1",
        description: "Fatima: 600 + 100 = 700 → pays 650 (sheet Output1)",
        inputs: ["Fatima", "600", "100"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Congrats" },
          { type: "contains", text: "Fatima" },
          { type: "notContains", text: "SORRY" },
          { type: "number", value: 650 },
          { type: "notNumber", value: 680 },
          { type: "contains", text: "COME BACK AGAIN" },
        ],
      },
      {
        id: "t2",
        description: "Samuel: 10 + 30 = 40 → no discount, pays 40 (the sheet's Output4 wrongly shows 55)",
        inputs: ["Samuel", "10", "30"],
        hidden: false,
        checks: [
          { type: "contains", text: "SORRY" },
          { type: "contains", text: "without any discount" },
          { type: "notContains", text: "Congrats" },
          { type: "number", value: 40 },
          { type: "notNumber", value: 55 },
        ],
      },
      {
        id: "t3",
        description: "Ibrahim: 400 + 50 = 450 → pays 430 (sheet Output2)",
        inputs: ["Ibrahim", "400", "50"],
        hidden: true,
        checks: [
          { type: "contains", text: "Congrats" },
          { type: "number", value: 430 },
          { type: "notNumber", value: 400 },
        ],
      },
      {
        id: "t4",
        description: "Khalid: 50 + 10 = 60 → pays 55 (sheet Output3)",
        inputs: ["Khalid", "50", "10"],
        hidden: true,
        checks: [
          { type: "contains", text: "Congrats" },
          { type: "number", value: 55 },
          { type: "notContains", text: "SORRY" },
        ],
      },
      {
        id: "t5",
        description: "Total exactly 500 → only 20 off, pays 480",
        inputs: ["Aisha", "250", "250"],
        hidden: true,
        checks: [
          { type: "contains", text: "Congrats" },
          { type: "number", value: 480 },
          { type: "notNumber", value: 450 },
        ],
      },
      {
        id: "t6",
        description: "Total exactly 100 → 20 off, pays 80",
        inputs: ["Noor", "60", "40"],
        hidden: true,
        checks: [
          { type: "number", value: 80 },
          { type: "notNumber", value: 95 },
        ],
      },
      {
        id: "t7",
        description: "Total exactly 50 → 5 off, pays 45",
        inputs: ["Zaid", "30", "20"],
        hidden: true,
        checks: [
          { type: "contains", text: "Congrats" },
          { type: "number", value: 45 },
          { type: "notContains", text: "SORRY" },
        ],
      },
      {
        id: "t8",
        description: "Total 99.5 (between 99 and 100) → 5 off, pays 94.5",
        inputs: ["Salim", "99.5", "0"],
        hidden: true,
        checks: [
          { type: "number", value: 94.5 },
          { type: "notNumber", value: 79.5 },
          { type: "notContains", text: "SORRY" },
        ],
      },
      {
        id: "t9",
        description: "Total 49.75 → no discount, pays 49.75",
        inputs: ["Maha", "49.5", "0.25"],
        hidden: true,
        checks: [
          { type: "contains", text: "SORRY" },
          { type: "number", value: 49.75 },
          { type: "notContains", text: "Congrats" },
        ],
      },
      {
        id: "t10",
        description: "Total 500.5 → greater than 500, pays 450.5",
        inputs: ["Rami", "500.5", "0"],
        hidden: true,
        checks: [
          { type: "number", value: 450.5 },
          { type: "notNumber", value: 480.5 },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 1, Ex 6 (the rules) and page 2 (Output1–Output4). Careful: Output4 shows 'pay 55' for 10 + 30 = 40. That is a mistake on the sheet — 40 is less than 50, so there is no discount and the customer pays 40.",
      "Read the name and the two prices, then add them. Test the rules from the biggest total down: total > 500, then total >= 100, then total >= 50, else no discount. The sheet says '100–500' and '50–99', which leaves gaps for totals like 99.5; the rules here cover every total.",
      "if total > 500:\n    pay = total - 50\n    print(f\"Congrats Mr/Ms.{name} you have to pay {pay} ONLY\")\nelif total >= ___:\n    pay = total - ___\n    ...\nelif total >= ___:\n    ...\nelse:\n    print(f\"SORRY Mr/Ms.{name} you have to pay {total} without any discount\")",
      "Correct solution: `if total > 500:` pay = total - 50; `elif total >= 100:` pay = total - 20; `elif total >= 50:` pay = total - 5 — each prints the 'Congrats … ONLY' line — and `else:` prints the 'SORRY … without any discount' line with the total. A total of exactly 500 is NOT greater than 500, so it gets 20 off (480). Because elif is only checked after the earlier tests failed, `total >= 100` already means 'at most 500'. The last two lines are unindented so they always print.",
    ],
    solution: `print("******WELCOME TO CARREFOUR HYPERMARKET******")
name = input("Enter your name: ")
price1 = float(input("Enter Price of Items1: "))
price2 = float(input("Enter Price of Items2: "))
total = price1 + price2

if total > 500:
    pay = total - 50
    print(f"Congrats Mr/Ms.{name} you have to pay {pay} ONLY")
elif total >= 100:
    pay = total - 20
    print(f"Congrats Mr/Ms.{name} you have to pay {pay} ONLY")
elif total >= 50:
    pay = total - 5
    print(f"Congrats Mr/Ms.{name} you have to pay {pay} ONLY")
else:
    print(f"SORRY Mr/Ms.{name} you have to pay {total} without any discount")

print(":) KEEP SMILING WHILE SHOPPING :)")
print("COME BACK AGAIN")
`,
  },

  // ------------------------------------------------------------------ nested conditions
  {
    id: "ex-t3-20",
    kind: "coding",
    topicId: "t3",
    title: "Basketball or football",
    category: "write",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [46], note: "Example: nested if…else — basketball, football or don't play" }],
    origin: "source",
    prompt:
      "Read a whole number with the prompt `Enter number: `.\n" +
      "- If the number is less than or equal to 15, print `play basketball` — except when the number is exactly 10: then print `play football` instead.\n" +
      "- If the number is greater than 15, print `Don't play game`.\n" +
      "Use a nested if (an if…else inside another if…else). The message contains an apostrophe, so write it in double quotes: `\"Don't play game\"`.",
    starterCode: `n = int(input("Enter number: "))

# Outer if: n <= 15 ... else ...
# Inner if (inside the outer if block): n == 10 ...
`,
    sampleRun: "Enter number: 12\nplay basketball\n",
    tests: [
      {
        id: "t1",
        description: "12 → play basketball",
        inputs: ["12"],
        hidden: false,
        checks: [
          { type: "contains", text: "play basketball" },
          { type: "notContains", text: "football" },
          { type: "notContains", text: "play game" },
        ],
      },
      {
        id: "t2",
        description: "10 → play football",
        inputs: ["10"],
        hidden: false,
        checks: [
          { type: "contains", text: "play football" },
          { type: "notContains", text: "basketball" },
          { type: "notContains", text: "play game" },
        ],
      },
      {
        id: "t3",
        description: "20 → Don't play game",
        inputs: ["20"],
        hidden: false,
        checks: [
          { type: "contains", text: "play game" },
          { type: "notContains", text: "basketball" },
          { type: "notContains", text: "football" },
        ],
      },
      {
        id: "t4",
        description: "Exactly 15 → play basketball",
        inputs: ["15"],
        hidden: true,
        checks: [
          { type: "contains", text: "play basketball" },
          { type: "notContains", text: "play game" },
        ],
      },
      {
        id: "t5",
        description: "16 → Don't play game",
        inputs: ["16"],
        hidden: true,
        checks: [
          { type: "contains", text: "play game" },
          { type: "notContains", text: "basketball" },
        ],
      },
      {
        id: "t6",
        description: "-3 → play basketball",
        inputs: ["-3"],
        hidden: true,
        checks: [
          { type: "contains", text: "play basketball" },
          { type: "notContains", text: "football" },
        ],
      },
    ],
    requirements: [NESTED_IF],
    hints: [
      "See Topic 3, slide 46 (this example) and slide 41 (nested if…else syntax). On the slide, 'Don’t play game' sits inside single quotes and only works because the apostrophe is a curly ’. With a straight apostrophe, 'Don't play game' is a SyntaxError, so use double quotes.",
      "The outer test is n <= 15. Inside that block, test n == 10 to choose between football and basketball. The outer else handles every number above 15.",
      "if n <= 15:\n    if n == ___:\n        print(\"play football\")\n    else:\n        print(\"___\")\nelse:\n    print(\"Don't play game\")",
      "Correct solution: `if n <= 15:` containing the inner `if n == 10: print(\"play football\")` / `else: print(\"play basketball\")`, and an outer `else: print(\"Don't play game\")`. The inner test only runs for numbers up to 15, so 10 gives football, 15 and 12 give basketball, and 16 goes straight to the outer else. Indentation shows which else belongs to which if.",
    ],
    solution: `n = int(input("Enter number: "))
if n <= 15:
    if n == 10:
        print("play football")
    else:
        print("play basketball")
else:
    print("Don't play game")
`,
  },
  {
    id: "ex-t3-21",
    kind: "coding",
    topicId: "t3",
    title: "Exam eligibility",
    category: "write",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-iiii", units: [25, 26], note: "Example: attendance, then assignments (nested if…else)" },
      { file: "lab-ch3-iii", units: [18, 19], note: "Check the mark only if attendance is 75% or above" },
    ],
    origin: "source",
    prompt:
      "Read the student's attendance percentage (`Enter attendance: `, use `float()`) and the number of completed assignments (`Enter completed assignments: `, use `int()`).\n" +
      "- If attendance is 75 or above, check the assignments: 8 or more → print `Eligible for Exam`; fewer than 8 → print `Complete More Assignments`.\n" +
      "- If attendance is below 75, print `Attendance Requirement Not Met` (the assignments do not matter).\n" +
      "Use a nested if…else.",
    starterCode: `attendance = float(input("Enter attendance: "))
assignments = int(input("Enter completed assignments: "))

# Outer if: attendance ... Inner if: assignments ...
`,
    sampleRun: "Enter attendance: 80\nEnter completed assignments: 9\nEligible for Exam\n",
    tests: [
      {
        id: "t1",
        description: "80% and 9 assignments → Eligible for Exam",
        inputs: ["80", "9"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "Eligible for Exam" },
          { type: "notContains", text: "Complete More" },
          { type: "notContains", text: "Not Met" },
        ],
      },
      {
        id: "t2",
        description: "90% and 5 assignments → Complete More Assignments",
        inputs: ["90", "5"],
        hidden: false,
        checks: [
          { type: "contains", text: "Complete More Assignments" },
          { type: "notContains", text: "Eligible" },
          { type: "notContains", text: "Not Met" },
        ],
      },
      {
        id: "t3",
        description: "60% and 10 assignments → Attendance Requirement Not Met",
        inputs: ["60", "10"],
        hidden: false,
        checks: [
          { type: "contains", text: "Attendance Requirement Not Met" },
          { type: "notContains", text: "Eligible" },
          { type: "notContains", text: "Complete More" },
        ],
      },
      {
        id: "t4",
        description: "Exactly 75% and exactly 8 → Eligible for Exam",
        inputs: ["75", "8"],
        hidden: true,
        checks: [
          { type: "contains", text: "Eligible for Exam" },
          { type: "notContains", text: "Not Met" },
          { type: "notContains", text: "Complete More" },
        ],
      },
      {
        id: "t5",
        description: "74.5% and 8 → Attendance Requirement Not Met",
        inputs: ["74.5", "8"],
        hidden: true,
        checks: [
          { type: "contains", text: "Not Met" },
          { type: "notContains", text: "Eligible" },
        ],
      },
      {
        id: "t6",
        description: "75% and 7 → Complete More Assignments",
        inputs: ["75", "7"],
        hidden: true,
        checks: [
          { type: "contains", text: "Complete More Assignments" },
          { type: "notContains", text: "Eligible" },
          { type: "notContains", text: "Not Met" },
        ],
      },
    ],
    requirements: [NESTED_IF],
    hints: [
      "See Ch3 Lab Exercise IIII, cells 25–26, and Topic 3, slides 40–41: an if…else can be placed inside another if, and the inner test runs only when the outer condition is True.",
      "Outer test: attendance >= 75. Inside it, an if…else on assignments >= 8. The outer else prints the attendance message.",
      "if attendance >= ___:\n    if assignments >= ___:\n        print(\"Eligible for Exam\")\n    else:\n        print(\"___\")\nelse:\n    print(\"Attendance Requirement Not Met\")",
      "Correct solution: `if attendance >= 75:` containing `if assignments >= 8: print(\"Eligible for Exam\")` / `else: print(\"Complete More Assignments\")`, and an outer `else: print(\"Attendance Requirement Not Met\")`. Both thresholds use `>=`, so exactly 75% and exactly 8 assignments is eligible. For 74.5% the inner test never runs.",
    ],
    solution: `attendance = float(input("Enter attendance: "))
assignments = int(input("Enter completed assignments: "))

if attendance >= 75:
    if assignments >= 8:
        print("Eligible for Exam")
    else:
        print("Complete More Assignments")
else:
    print("Attendance Requirement Not Met")
`,
  },
  {
    id: "ex-t3-22",
    kind: "coding",
    topicId: "t3",
    title: "Excellent, Passed or Failed",
    category: "complete",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [
      {
        file: "lab-ch3-iii",
        units: [28, 29, 30],
        note: "Nested if–else template; question (gap: 50–59 has no rule) and solution (Failed below 60), whose rule is used here",
      },
    ],
    origin: "adapted",
    prompt:
      "Complete this nested if…else program. It reads a mark with `float()`. The rules:\n" +
      "- 80 or above → `Excellent`\n" +
      "- 60 or above, but below 80 → `Passed`\n" +
      "- below 60 → `Failed`\n" +
      "Replace `___` with an inner if…else. Note: the lab question (cell 29) says 'below 50 → Failed', which leaves marks from 50 up to 60 without a rule. The lab's solution (cell 30) prints `Failed` for every mark below 60, and that is the rule used here.",
    starterCode: `marks = float(input("Enter Marks: "))

if marks >= 60:
    # Inner if...else: 80 or above -> Excellent, otherwise -> Passed
    ___
else:
    print("Failed")
`,
    sampleRun: "Enter Marks: 85\nExcellent\n",
    tests: [
      {
        id: "t1",
        description: "85 → Excellent",
        inputs: ["85"],
        hidden: false,
        checks: [
          { type: "contains", text: "Excellent" },
          { type: "notContains", text: "Passed" },
          { type: "notContains", text: "Failed" },
        ],
      },
      {
        id: "t2",
        description: "65 → Passed",
        inputs: ["65"],
        hidden: false,
        checks: [
          { type: "contains", text: "Passed" },
          { type: "notContains", text: "Excellent" },
          { type: "notContains", text: "Failed" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 80 → Excellent",
        inputs: ["80"],
        hidden: true,
        checks: [
          { type: "contains", text: "Excellent" },
          { type: "notContains", text: "Passed" },
        ],
      },
      {
        id: "t4",
        description: "Exactly 60 → Passed",
        inputs: ["60"],
        hidden: true,
        checks: [
          { type: "contains", text: "Passed" },
          { type: "notContains", text: "Failed" },
        ],
      },
      {
        id: "t5",
        description: "79.5 → Passed",
        inputs: ["79.5"],
        hidden: true,
        checks: [
          { type: "contains", text: "Passed" },
          { type: "notContains", text: "Excellent" },
        ],
      },
      {
        id: "t6",
        description: "55 (between 50 and 60) → Failed",
        inputs: ["55"],
        hidden: true,
        checks: [
          { type: "contains", text: "Failed" },
          { type: "notContains", text: "Passed" },
          { type: "notContains", text: "Excellent" },
        ],
      },
    ],
    requirements: [NESTED_IF],
    hints: [
      "See Ch3 Lab Exercise III, cell 28 (the nested if–else template) and cells 29–30 (this question and its solution), and Topic 3, slide 41.",
      "The outer if already handles 'below 60'. Inside the outer if block (marks >= 60), you only need to decide between Excellent and Passed with marks >= 80.",
      "if marks >= 60:\n    if marks >= ___:\n        print(\"Excellent\")\n    else:\n        print(\"___\")\nelse:\n    print(\"Failed\")",
      "Correct solution: replace `___` with `if marks >= 80:` + `print(\"Excellent\")` and `else:` + `print(\"Passed\")`, indented one level deeper than the outer if (8 spaces before the prints). The inner else belongs to the inner if because they have the same indentation. A mark of 55 fails the outer test and goes straight to `Failed`.",
    ],
    solution: `marks = float(input("Enter Marks: "))

if marks >= 60:
    if marks >= 80:
        print("Excellent")
    else:
        print("Passed")
else:
    print("Failed")
`,
  },
  {
    id: "ex-t3-23",
    kind: "coding",
    topicId: "t3",
    title: "Shirt size",
    category: "write",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [47], note: "Exercise: shirt size from a ratio with nested conditions" },
      { file: "topic3", units: [48], note: "Solution: ratio r = w/h, nested if…else in both branches" },
    ],
    origin: "adapted",
    prompt:
      "Read the user's height in feet and weight in kg with `float()` (prompts `Enter your height in feet: ` and `Enter your weight in kg: `).\n" +
      "Calculate ratio = weight / height. (This is what the slide 48 solution does. Slide 47's text says height divided by weight, but that would make almost every ratio smaller than 1.)\n" +
      "Then use nested if…else:\n" +
      "- ratio greater than 5: if the ratio is greater than 20 print `Size XXL`, otherwise print `Size L`\n" +
      "- ratio 5 or less: if the ratio is greater than 3 print `Size M`, otherwise print `Size S`\n" +
      "So a ratio of exactly 20 gives Size L, exactly 5 gives Size M, and exactly 3 gives Size S.",
    starterCode: `h = float(input("Enter your height in feet: "))
w = float(input("Enter your weight in kg: "))

# ratio, then nested if...else in BOTH branches
`,
    sampleRun: "Enter your height in feet: 5\nEnter your weight in kg: 50\nSize L\n",
    tests: [
      {
        id: "t1",
        description: "5 ft, 50 kg → ratio 10 → Size L (slide 48 sample)",
        inputs: ["5", "50"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "Size L" },
          { type: "notContains", text: "XXL" },
          { type: "notContains", text: "Size M" },
          { type: "notContains", text: "Size S" },
        ],
      },
      {
        id: "t2",
        description: "2 ft, 50 kg → ratio 25 → Size XXL",
        inputs: ["2", "50"],
        hidden: false,
        checks: [
          { type: "contains", text: "Size XXL" },
          { type: "notContains", text: "Size L" },
          { type: "notContains", text: "Size M" },
        ],
      },
      {
        id: "t3",
        description: "10 ft, 40 kg → ratio 4 → Size M",
        inputs: ["10", "40"],
        hidden: false,
        checks: [
          { type: "contains", text: "Size M" },
          { type: "notContains", text: "Size S" },
          { type: "notContains", text: "Size L" },
        ],
      },
      {
        id: "t4",
        description: "Ratio exactly 20 → Size L",
        inputs: ["5", "100"],
        hidden: true,
        checks: [
          { type: "contains", text: "Size L" },
          { type: "notContains", text: "XXL" },
        ],
      },
      {
        id: "t5",
        description: "Ratio exactly 5 → Size M",
        inputs: ["10", "50"],
        hidden: true,
        checks: [
          { type: "contains", text: "Size M" },
          { type: "notContains", text: "Size L" },
          { type: "notContains", text: "Size S" },
        ],
      },
      {
        id: "t6",
        description: "Ratio exactly 3 → Size S",
        inputs: ["10", "30"],
        hidden: true,
        checks: [
          { type: "contains", text: "Size S" },
          { type: "notContains", text: "Size M" },
        ],
      },
      {
        id: "t7",
        description: "Ratio 2 → Size S",
        inputs: ["6", "12"],
        hidden: true,
        checks: [
          { type: "contains", text: "Size S" },
          { type: "notContains", text: "Size M" },
          { type: "notContains", text: "Size L" },
        ],
      },
    ],
    requirements: [NESTED_IF],
    hints: [
      "See Topic 3, slide 47 (the exercise) and slide 48 (a solution with an if…else nested inside BOTH branches of the outer if…else).",
      "Compute ratio = w / h. Outer test: ratio > 5. In the if branch, test ratio > 20 (XXL or L). In the else branch, test ratio > 3 (M or S).",
      "ratio = w / h\nif ratio > 5:\n    if ratio > ___:\n        print(\"Size XXL\")\n    else:\n        print(\"___\")\nelse:\n    if ratio > ___:\n        print(\"Size M\")\n    else:\n        print(\"___\")",
      "Correct solution: `ratio = w / h`, then `if ratio > 5:` containing `if ratio > 20: print(\"Size XXL\")` / `else: print(\"Size L\")`, and the outer `else:` containing `if ratio > 3: print(\"Size M\")` / `else: print(\"Size S\")`. All tests use `>` (strictly greater), so a ratio of exactly 20 falls to Size L, exactly 5 goes to the outer else (Size M), and exactly 3 gives Size S. Note: slide 48 prints 'sixe L' (a typo) — print 'Size L'.",
    ],
    solution: `h = float(input("Enter your height in feet: "))
w = float(input("Enter your weight in kg: "))
ratio = w / h
if ratio > 5:
    if ratio > 20:
        print("Size XXL")
    else:
        print("Size L")
else:
    if ratio > 3:
        print("Size M")
    else:
        print("Size S")
`,
  },
  {
    id: "ex-t3-24",
    kind: "coding",
    topicId: "t3",
    title: "Tax calculator",
    category: "write",
    conceptIds: ["t3-nested", "t3-elif"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [49], note: "Exercise: salary and tax with a salary-range table" },
      { file: "lab-ch3-iiii", units: [27, 28], note: "Same task with a nested if…else solution" },
    ],
    origin: "adapted",
    prompt:
      "Read the employee name (`Enter employee name: `), the rate per day (`Enter rate per day: `, use `float()`) and the number of days worked (`Enter number of days worked: `, use `int()`).\n" +
      "Salary = rate per day × number of days. The tax is a percentage of the whole salary:\n" +
      "- salary up to and including 500 → 5%\n" +
      "- salary more than 500, up to and including 1000 → 10%\n" +
      "- salary more than 1000 → 15%\n" +
      "The slide's table lists 500 in two rows (1–500 and 500–1000). Here, 500 belongs to the 5% row and 1000 to the 10% row, as in the lab solution.\n" +
      "Print three lines: `Employee name: <name>`, `Salary: <salary>` and `Tax: <tax>`.",
    starterCode: `name = input("Enter employee name: ")
rate = float(input("Enter rate per day: "))
days = int(input("Enter number of days worked: "))

# salary, then the tax rules

# print the three lines
`,
    sampleRun: "Enter employee name: Ali\nEnter rate per day: 200\nEnter number of days worked: 20\nEmployee name: Ali\nSalary: 4000.0\nTax: 600.0\n",
    tests: [
      {
        id: "t1",
        description: "Ali: 200 × 20 = 4000 → tax 600 (lab sample)",
        inputs: ["Ali", "200", "20"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Ali" },
          { type: "number", value: 4000 },
          { type: "number", value: 600 },
        ],
      },
      {
        id: "t2",
        description: "Sara: 25 × 10 = 250 → tax 12.5",
        inputs: ["Sara", "25", "10"],
        hidden: false,
        checks: [
          { type: "number", value: 250 },
          { type: "number", value: 12.5 },
          { type: "notNumber", value: 25 },
        ],
      },
      {
        id: "t3",
        description: "Salary exactly 500 → 5% = 25",
        inputs: ["Omar", "50", "10"],
        hidden: true,
        checks: [
          { type: "number", value: 500 },
          { type: "number", value: 25 },
          { type: "notNumber", value: 50 },
        ],
      },
      {
        id: "t4",
        description: "Salary exactly 1000 → 10% = 100",
        inputs: ["Huda", "100", "10"],
        hidden: true,
        checks: [
          { type: "number", value: 1000 },
          { type: "number", value: 100 },
          { type: "notNumber", value: 150 },
        ],
      },
      {
        id: "t5",
        description: "Salary 505 → 10% = 50.5",
        inputs: ["Ahmed", "50.5", "10"],
        hidden: true,
        checks: [
          { type: "number", value: 505 },
          { type: "number", value: 50.5 },
          { type: "notNumber", value: 25.25 },
        ],
      },
      {
        id: "t6",
        description: "Salary 1200 → 15% = 180",
        inputs: ["Mona", "40", "30"],
        hidden: true,
        checks: [
          { type: "number", value: 1200 },
          { type: "number", value: 180 },
          { type: "notNumber", value: 120 },
        ],
      },
    ],
    hints: [
      "See Topic 3, slide 49 (the exercise and tax table) and Ch3 Lab Exercise IIII, cells 27–28 (the same task solved with a nested if…else).",
      "Calculate salary = rate * days. Then: if salary <= 500 → tax = salary * 0.05; else, if salary <= 1000 → tax = salary * 0.10; otherwise tax = salary * 0.15. Print the three lines at the end.",
      "salary = rate * days\nif salary <= ___:\n    tax = salary * 0.05\nelse:\n    if salary <= ___:\n        tax = salary * ___\n    else:\n        tax = salary * ___\nprint(\"Employee name:\", name)\nprint(\"Salary:\", salary)\nprint(\"Tax:\", tax)",
      "Correct solution: `salary = rate * days`, then `if salary <= 500: tax = salary * 0.05`, `else:` containing `if salary <= 1000: tax = salary * 0.10` / `else: tax = salary * 0.15`, then print the three lines. An if…elif…else chain (`if salary <= 500` / `elif salary <= 1000` / `else`) works the same way. Using `<=` puts exactly 500 in the 5% group and exactly 1000 in the 10% group. 5% is 0.05, not 5.",
    ],
    solution: `name = input("Enter employee name: ")
rate = float(input("Enter rate per day: "))
days = int(input("Enter number of days worked: "))

salary = rate * days

if salary <= 500:
    tax = salary * 0.05
else:
    if salary <= 1000:
        tax = salary * 0.10
    else:
        tax = salary * 0.15

print("Employee name:", name)
print("Salary:", salary)
print("Tax:", tax)
`,
  },
  {
    id: "ex-t3-25",
    kind: "coding",
    topicId: "t3",
    title: "Choice menu: compare and find the type",
    category: "write",
    conceptIds: ["t3-elif", "t3-nested", "t2-type-function"],
    difficulty: "hard",
    sources: [
      { file: "pe3", units: [2], item: "7", note: "Menu: compare with UTAS, find the data type, compare two numbers, else error" },
      { file: "topic3", units: [40], note: "Nested conditions: an if…else inside another branch" },
    ],
    origin: "adapted",
    prompt:
      "Read a choice with `int()` (prompt `Enter your choice (1-3): `). Then:\n" +
      "- Choice 1: read a word (`Enter a string: `). If it is equal to `UTAS` (capital letters), print `The strings are equal`; otherwise print `The strings are not equal`.\n" +
      "- Choice 2: read any value with `input()` and do NOT convert it (`Enter any value: `). Print its data type with `print(type(value))`.\n" +
      "- Choice 3: read two numbers with `float()` (`Enter first number: `, `Enter second number: `). If they are not equal (use `!=`), print `The numbers are not equal`; otherwise print `The numbers are equal`.\n" +
      "- Any other choice: print `Error`.\n" +
      "Read only the inputs needed for the chosen option (for example, choice 1 reads one more value, choice 3 reads two).",
    starterCode: `choice = int(input("Enter your choice (1-3): "))

if choice == 1:
    # read a string and compare it with "UTAS"
    print("TODO")
`,
    sampleRun: "Enter your choice (1-3): 1\nEnter a string: UTAS\nThe strings are equal\n",
    tests: [
      {
        id: "t1",
        description: "Choice 1, UTAS → the strings are equal",
        inputs: ["1", "UTAS"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "contains", text: "strings are equal" },
          { type: "notContains", text: "not equal" },
        ],
      },
      {
        id: "t2",
        description: "Choice 2, 25 → <class 'str'>",
        inputs: ["2", "25"],
        hidden: false,
        checks: [
          { type: "contains", text: "<class 'str'>" },
          { type: "notContains", text: "int" },
        ],
      },
      {
        id: "t3",
        description: "Choice 3, 4 and 9 → the numbers are not equal",
        inputs: ["3", "4", "9"],
        hidden: false,
        checks: [
          { type: "contains", text: "numbers are not equal" },
          { type: "notContains", text: "error" },
        ],
      },
      {
        id: "t4",
        description: "Choice 1, utas (lowercase) → not equal",
        inputs: ["1", "utas"],
        hidden: true,
        checks: [{ type: "contains", text: "strings are not equal" }],
      },
      {
        id: "t5",
        description: "Choice 3, 5 and 5 → the numbers are equal",
        inputs: ["3", "5", "5"],
        hidden: true,
        checks: [
          { type: "contains", text: "numbers are equal" },
          { type: "notContains", text: "not equal" },
        ],
      },
      {
        id: "t6",
        description: "Choice 2, hello → <class 'str'>",
        inputs: ["2", "hello"],
        hidden: true,
        checks: [{ type: "contains", text: "<class 'str'>" }],
      },
      {
        id: "t7",
        description: "Choice 7 → Error",
        inputs: ["7"],
        hidden: true,
        checks: [
          { type: "contains", text: "Error" },
          { type: "notContains", text: "equal" },
          { type: "notContains", text: "class" },
        ],
      },
      {
        id: "t8",
        description: "Choice 0 → Error",
        inputs: ["0"],
        hidden: true,
        checks: [
          { type: "contains", text: "Error" },
          { type: "notContains", text: "equal" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises III, page 2, Ex 7, Topic 3, slides 33 (elif) and 40–41 (an if…else inside a branch), and Topic 2, slides 13 (type()) and 62–63 (input() always stores a string).",
      "Use if / elif / elif / else on the choice. Inside choice 1 and choice 3, read the extra values and use an inner if…else to compare them. Choice 2 needs no inner if: read the value and print type(value).",
      "if choice == 1:\n    word = input(\"Enter a string: \")\n    if word == \"___\":\n        print(\"The strings are equal\")\n    else:\n        print(\"The strings are not equal\")\nelif choice == 2:\n    value = input(\"Enter any value: \")\n    print(type(___))\nelif choice == 3:\n    ...\n    if num1 ___ num2:\n        print(\"The numbers are not equal\")\n    else:\n        print(\"The numbers are equal\")\nelse:\n    print(\"Error\")",
      "Correct solution: the skeleton above with `word == \"UTAS\"`, `print(type(value))` and, for choice 3, two float() inputs compared with `num1 != num2`. Choice 2 always prints <class 'str'>, even for 25, because input() returns the typed text as a string; only int() or float() would turn it into a number. String comparison is case-sensitive, so 'utas' is not equal to 'UTAS'. The inputs are read inside each branch, so choice 7 asks for nothing more and goes straight to else.",
    ],
    solution: `choice = int(input("Enter your choice (1-3): "))

if choice == 1:
    word = input("Enter a string: ")
    if word == "UTAS":
        print("The strings are equal")
    else:
        print("The strings are not equal")
elif choice == 2:
    value = input("Enter any value: ")
    print(type(value))
elif choice == 3:
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    if num1 != num2:
        print("The numbers are not equal")
    else:
        print("The numbers are equal")
else:
    print("Error")
`,
  },
];
