// Exam questions and definitions WITHOUT answers (answers: ./answers-56.ts).
// Exams 5 and 6 are the "hard" exams: every item combines concepts that the
// slides teach (Topic 2, Topic 3, Topic 4 slides 1–18). No new Python features.
import type { ExamDefinition, Question } from "../types";

// ======================================================================== EXAM 5

const EXAM5: Question[] = [
  // ---------------------------------------------------------------- MCQ
  {
    id: "x5-mcq-01",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-precedence", "t2-arithmetic"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [52], note: "Precedence table: ** is evaluated right to left" },
      { file: "topic2", units: [34], note: "Floor division rounds down: -13 // 3 is -5" },
      { file: "topic2", units: [35, 56], note: "% and * share a level; worked precedence examples" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `result = 2 ** 3 ** 2 // 10 % 7 - -7 // 2
print(result)`,
    options: ["5", "10", "6", "9"],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-02",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-logical", "t2-comparison", "t2-boolean", "t2-assignment-ops"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [44], note: "Short-circuit evaluation of and" },
      { file: "topic2", units: [40], note: "Chained comparison 3 < 5 < 7" },
      { file: "topic2", units: [58], note: "not B != 20 means not (B != 20)" },
      { file: "topic2", units: [36], note: "Multiple assignment x, y, z = ..." },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a, b, c = 4, 0, 7
print(b != 0 and a / b > 1 or c > a > b, not a < c == 7)`,
    options: ["True False", "False False", "True True", "ZeroDivisionError: division by zero"],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-03",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-type-function", "t2-conversion", "t2-values-types", "t2-arithmetic"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [31, 50], note: "A string times a number repeats the string" },
      { file: "topic2", units: [65], note: "int(X) converts a value to an integer" },
      { file: "topic2", units: [13, 24], note: "type() gives the type of a value or variable" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a = "4"
b = 2
c = int(a * b) // 10 + b ** 2
print(c, type(a * b))`,
    options: [
      "4 <class 'int'>",
      "8 <class 'str'>",
      "3 <class 'str'>",
      "An error: a string cannot be multiplied by a number",
    ],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-04",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-if-else"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [41], note: "Nested if syntax: indentation shows which if an else belongs to" },
      { file: "topic3", units: [43, 44], note: "if…else inside another if…else" },
    ],
    origin: "original",
    prompt: "Look carefully at the indentation. What does this program print?",
    code: `x = 15
if x > 10:
    if x % 2 == 0:
        print("A")
else:
    print("B")
    if x > 12:
        print("C")
print("D")`,
    options: ["B\nC\nD", "C\nD", "B\nD", "D"],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-05",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif", "t3-conditional-expression"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [32, 33], note: "Chained conditionals: only the first True branch runs" },
      { file: "topic3", units: [27, 28], note: "Conditional expression value1 if condition else value2" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `score = 85
if score >= 50:
    grade = "pass"
elif score >= 80:
    grade = "merit"
elif score >= 90:
    grade = "distinction"
else:
    grade = "fail"
bonus = 5 if grade == "merit" else 0
print(grade, score + bonus)`,
    options: ["merit 90", "pass 85", "merit 85", "pass 90"],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-06",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t2-logical", "t3-if-else"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [7], note: "The condition is a Boolean expression built with logical operators" },
      { file: "topic2", units: [52], note: "Precedence table: and is evaluated before or" },
      { file: "lab-ch3-ii", units: [10, 11, 12], note: "Combining string conditions with or / and; cell 11 compares strings with True" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `temp = 35
raining = False
windy = "yes"
if temp > 30 or raining and windy == "no":
    print("Stay inside")
else:
    print("Go out")
if windy == True:
    print("Take a jacket")
print("Done")`,
    options: [
      "Stay inside\nDone",
      "Go out\nDone",
      "Stay inside\nTake a jacket\nDone",
      "Go out\nTake a jacket\nDone",
    ],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-07",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t4-counter"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [10], note: "Initialize, test and update the loop variable" },
      { file: "topic4", units: [12], note: "Running total inside a while loop" },
      { file: "topic4", units: [17], note: "An if statement inside the loop body" },
    ],
    origin: "original",
    prompt: "The loop counter is changed in two places. What does this program print?",
    code: `n = 1
total = 0
while n < 10:
    if n % 3 == 0:
        n = n + 2
    total = total + n
    n = n + 1
print(total, n)`,
    options: ["45 10", "16 9", "27 12", "27 10"],
    answerIsOutput: true,
  },
  {
    id: "x5-mcq-08",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-truthiness", "t4-while", "t2-print-end"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [8], note: "A non-zero number counts as True, 0 counts as False" },
      { file: "topic4", units: [6], note: "The condition is checked before every iteration" },
      { file: "topic2", units: [77], note: "The end parameter of print()" },
    ],
    origin: "original",
    prompt: "The while condition is a number, not a comparison. What does this program print?",
    code: `count = 7
while count % 4:
    print(count, end=",")
    count = count + 3
print("end", count)`,
    options: ["end 7", "7,10,13,16,end 19", "7,\n10,\n13,\nend 16", "7,10,13,end 16"],
    answerIsOutput: true,
  },

  // ---------------------------------------------------------------- tracing
  {
    id: "x5-tr-01",
    kind: "tracing",
    topicId: "t2",
    conceptIds: ["t2-assignment-ops", "t2-fstrings", "t2-escape", "t2-print-end", "t2-precedence"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [37], note: "num *= 2 means num = num * 2" },
      { file: "topic2", units: [10, 11], note: "Escape sequences \\' and \\t" },
      { file: "topic2", units: [75], note: "f-strings" },
      { file: "topic2", units: [76], note: "print(..., end=...) stays on the same line" },
      { file: "topic2", units: [52], note: "Precedence table: ** before %" },
    ],
    origin: "original",
    prompt: "Write exactly what this program prints. (A tab may be typed as a space.)",
    code: `x = 5
x *= 2 + 1
x //= 4
y = x % 3 ** 2
print("x =", x, end="; ")
print(f"y={y}\\tdone")
print('It\\'s', x - y * 2)`,
  },
  {
    id: "x5-tr-02",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-elif", "t3-conditional-expression"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [33], note: "if…elif…else: the first True branch wins" },
      { file: "topic3", units: [41, 46], note: "A chained/if-else construct nested inside an if" },
      { file: "topic3", units: [28], note: "Conditional expression" },
    ],
    origin: "original",
    prompt: "The user types 12 and then 4. Write exactly what this program prints.",
    code: `a = int(input())
b = int(input())
if a > b:
    if a - b > 5:
        print("far")
    elif a % b == 0:
        print("multiple")
    else:
        print("close")
elif a == b:
    print("same")
else:
    print("smaller")
r = "even" if (a + b) % 2 == 0 else "odd"
print(r, a // b)`,
    inputs: ["12", "4"],
  },
  {
    id: "x5-tr-03",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-table", "t4-while-conditionals", "t4-counter"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [15], note: "Multiplication table with a loop" },
      { file: "topic4", units: [9, 10], note: "Counter pattern: initialize, test, update" },
      { file: "topic4", units: [17], note: "if inside a while loop" },
    ],
    origin: "original",
    prompt: "Write exactly what this program prints.",
    code: `num = 4
m = 1
while m <= 10:
    product = num * m
    if product % 3 == 0:
        print(num, "*", m, "=", product)
    m = m + 2
print("last m:", m)`,
  },
  {
    id: "x5-tr-04",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-accumulator", "t4-while-conditionals", "t2-conversion"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [13, 14], note: "Average of numbers typed by the user" },
      { file: "topic4", units: [12], note: "Running total" },
      { file: "topic4", units: [17], note: "Decision for each value read in the loop" },
    ],
    origin: "original",
    prompt:
      "The user types 2, 6, 1 and 7 (one per line). Use a trace table for count, value, total and above. Write exactly what the program prints.",
    code: `count = 0
total = 0
above = 0
while count < 4:
    value = float(input())
    total += value
    if value > total / (count + 1):
        above += 1
    count += 1
print(total / count, above)`,
    inputs: ["2", "6", "1", "7"],
  },

  // ---------------------------------------------------------------- error identification
  {
    id: "x5-err-01",
    kind: "error",
    topicId: "t2",
    conceptIds: ["t2-conversion", "t2-input", "t2-fstrings"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [61], note: "input() always returns a string" },
      { file: "topic2", units: [64, 65], note: "int() and float() conversion" },
    ],
    origin: "original",
    prompt: "The user types 7.5 and then 4. The program stops with an error. Which line fails, and why?",
    code: `hours = input()
rate = float(input())
pay = int(hours) * rate
bonus = pay // 10 + 0.5
print(f"Pay: {pay} Bonus: {bonus}")`,
    inputs: ["7.5", "4"],
    options: [
      "Line 2: ValueError — float() cannot convert the text 4 because it has no decimal point",
      "Line 3: ValueError — int() cannot convert the text 7.5, which is not a whole number",
      "Line 4: TypeError — the // operator cannot be used when pay is a float",
      "Line 5: SyntaxError — an f-string cannot contain two variables in braces",
    ],
    errorType: "ValueError",
    errorLine: 3,
  },
  {
    id: "x5-err-02",
    kind: "error",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-if-else", "t2-variables"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [41], note: "Nested if: which else belongs to which if" },
      { file: "topic3", units: [45], note: "Nested if without an else" },
      { file: "topic2", units: [57], note: "Using a name that was never assigned gives an error" },
    ],
    origin: "original",
    prompt: "The user types 65. The program stops with an error. Which line fails, and why?",
    code: `marks = int(input())
if marks >= 50:
    if marks >= 80:
        level = "high"
else:
    level = "low"
print("Level:", level)`,
    inputs: ["65"],
    options: [
      "Line 7: NameError — for 65 neither assignment to level runs",
      "Line 5: SyntaxError — this else cannot be placed after a nested if block",
      "No error — the else belongs to the inner if, so it prints Level: low",
      "Line 4: IndentationError — the inner block is indented by 8 spaces",
    ],
    errorType: "NameError",
    errorLine: 7,
  },

  // ---------------------------------------------------------------- coding
  {
    id: "x5-code-01",
    kind: "coding",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-elif", "t2-conversion", "t2-programs"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [41, 48], note: "Nested if…else inside both branches of an outer if…else" },
      { file: "topic3", units: [33], note: "if…elif…else chain" },
      { file: "lab-ch3-iii", units: [11, 12], note: "Shopping discount depending on amount and membership" },
    ],
    origin: "adapted",
    prompt: `Write a discount program for a shop.

Read two values, in this order:
1. the customer type (text, for example member or guest)
2. the purchase amount (a decimal number, use float)

Discount rules:
- If the type is exactly member:
  - amount 100 or more: 15% discount
  - amount 50 or more (but less than 100): 10% discount
  - any smaller amount: 5% discount
- For any other type:
  - amount more than 200: 5% discount
  - otherwise: no discount (the discount is 0)

Print exactly two lines:
Discount: <discount amount>
Final: <amount minus discount>`,
    starterCode: `# Read the customer type and the purchase amount
ctype = input("Customer type: ")
amount = float(input("Amount: "))

# Choose the discount rate with nested conditions


# Print the discount and the final amount
`,
    sampleRun: `Customer type: member
Amount: 120
Discount: 18.0
Final: 102.0
`,
    tests: [
      {
        id: "t1",
        description: "Member, amount 120 (15% band)",
        inputs: ["member", "120"],
        hidden: false,
        checks: [
          { type: "number", value: 18, label: "Discount should be 18" },
          { type: "number", value: 102, label: "Final amount should be 102" },
          { type: "order", texts: ["Discount", "Final"] },
        ],
      },
      {
        id: "t2",
        description: "Guest, amount 250 (more than 200)",
        inputs: ["guest", "250"],
        hidden: false,
        checks: [
          { type: "number", value: 12.5, label: "Discount should be 12.5" },
          { type: "number", value: 237.5, label: "Final amount should be 237.5" },
        ],
      },
      {
        id: "t3",
        description: "Member, amount exactly 100 (boundary of the 15% band)",
        inputs: ["member", "100"],
        hidden: true,
        checks: [
          { type: "number", value: 85, label: "Final amount should be 85" },
          { type: "notNumber", value: 90, label: "100 must get 15%, not 10%" },
        ],
      },
      {
        id: "t4",
        description: "Member, amount exactly 50 (boundary of the 10% band)",
        inputs: ["member", "50"],
        hidden: true,
        checks: [
          { type: "number", value: 45, label: "Final amount should be 45" },
          { type: "notNumber", value: 47.5, label: "50 must get 10%, not 5%" },
        ],
      },
      {
        id: "t5",
        description: "Member, small amount 40 (5% band)",
        inputs: ["member", "40"],
        hidden: true,
        checks: [
          { type: "number", value: 2, label: "Discount should be 2" },
          { type: "number", value: 38, label: "Final amount should be 38" },
        ],
      },
      {
        id: "t6",
        description: "Guest, amount exactly 200 (not more than 200)",
        inputs: ["guest", "200"],
        hidden: true,
        checks: [
          { type: "number", value: 200, label: "Final amount should stay 200" },
          { type: "notNumber", value: 190, label: "200 is not more than 200, so no discount" },
        ],
      },
      {
        id: "t7",
        description: "Guest, amount 90 (guests never get member rates)",
        inputs: ["guest", "90"],
        hidden: true,
        checks: [
          { type: "number", value: 90, label: "Final amount should stay 90" },
          { type: "notNumber", value: 81, label: "A guest must not get the member 10% discount" },
        ],
      },
    ],
    hints: [
      "Use nested conditions: an if…elif…else inside the if branch and an if…else inside the else branch of an outer if…else (Topic 3, slides 41 and 48). Read the amount with float(input()) (Topic 2, slide 65).",
      "First test whether the type equals \"member\". Inside that branch check the biggest band first (>= 100), then >= 50, then the rest. In the outer else check > 200. Store the rate (0.15, 0.10, 0.05 or 0) in a variable, then compute discount = amount * rate and final = amount - discount after all the conditions.",
      "if ctype == ___:\n    if amount >= ___:\n        rate = 0.15\n    elif amount >= ___:\n        rate = 0.10\n    else:\n        rate = ___\nelse:\n    if amount > ___:\n        rate = 0.05\n    else:\n        rate = ___\ndiscount = amount * rate\nprint(\"Discount:\", ___)\nprint(\"Final:\", ___)",
      "A correct solution reads ctype and amount, then uses an outer if ctype == \"member\" / else. In the member branch an if/elif/else checks amount >= 100 (rate 0.15), amount >= 50 (rate 0.10) and otherwise rate 0.05. In the else branch an if/else checks amount > 200 (rate 0.05) and otherwise rate 0. After the conditions it computes discount = amount * rate and final = amount - discount and prints \"Discount:\" and \"Final:\". The order of the inner checks matters: testing >= 50 before >= 100 would give 100 only 10%.",
    ],
  },
  {
    id: "x5-code-02",
    kind: "coding",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t4-counter", "t2-input"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [14], note: "Average of N numbers where N is given by the user" },
      { file: "topic4", units: [17], note: "Pass/fail decision for each mark inside a while loop" },
    ],
    origin: "adapted",
    prompt: `Write a program that analyses a group of marks.

1. Read a whole number N: how many marks will be entered.
2. If N is 0 or less, read nothing else and print only: No marks
3. Otherwise use a while loop to read N marks (decimal numbers, use float), one per input.
   A mark of 50 or more is a pass; a mark below 50 is a fail.
4. After the loop print exactly three lines:
Passed: <number of passes>
Failed: <number of fails>
Average: <average of all N marks>`,
    starterCode: `n = int(input("How many marks? "))

# If n is 0 or less, print No marks.
# Otherwise: set up a counter, a total, a pass count and a fail count,
# then read n marks with a while loop.
`,
    sampleRun: `How many marks? 4
Enter mark: 45
Enter mark: 80
Enter mark: 70
Enter mark: 50
Passed: 3
Failed: 1
Average: 61.25
`,
    requirements: [{ pattern: "\\bwhile\\b", message: "Use a while loop to read the marks" }],
    tests: [
      {
        id: "t1",
        description: "4 marks: 45, 80, 70, 50 (50 is a pass)",
        inputs: ["4", "45", "80", "70", "50"],
        hidden: false,
        checks: [
          { type: "regex", pattern: "Passed:\\s*3\\b", flags: "i", label: "Passed: 3" },
          { type: "regex", pattern: "Failed:\\s*1\\b", flags: "i", label: "Failed: 1" },
          { type: "number", value: 61.25, label: "Average should be 61.25" },
          { type: "minInputs", count: 5 },
        ],
      },
      {
        id: "t2",
        description: "3 marks: 30, 49.5, 90",
        inputs: ["3", "30", "49.5", "90"],
        hidden: false,
        checks: [
          { type: "regex", pattern: "Passed:\\s*1\\b", flags: "i", label: "Passed: 1" },
          { type: "regex", pattern: "Failed:\\s*2\\b", flags: "i", label: "Failed: 2" },
          { type: "number", value: 56.5, label: "Average should be 56.5" },
        ],
      },
      {
        id: "t3",
        description: "N is 0",
        inputs: ["0"],
        hidden: true,
        checks: [
          { type: "contains", text: "No marks" },
          { type: "notContains", text: "Average" },
        ],
      },
      {
        id: "t4",
        description: "N is negative",
        inputs: ["-2"],
        hidden: true,
        checks: [
          { type: "contains", text: "No marks" },
          { type: "notContains", text: "Passed" },
        ],
      },
      {
        id: "t5",
        description: "One mark of exactly 50",
        inputs: ["1", "50"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Passed:\\s*1\\b", flags: "i", label: "Passed: 1" },
          { type: "regex", pattern: "Failed:\\s*0\\b", flags: "i", label: "Failed: 0" },
          { type: "number", value: 50, label: "Average should be 50" },
        ],
      },
      {
        id: "t6",
        description: "5 marks, all fails",
        inputs: ["5", "10", "20", "30", "40", "49"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Passed:\\s*0\\b", flags: "i", label: "Passed: 0" },
          { type: "regex", pattern: "Failed:\\s*5\\b", flags: "i", label: "Failed: 5" },
          { type: "number", value: 29.8, label: "Average should be 29.8" },
          { type: "minInputs", count: 6 },
        ],
      },
    ],
    hints: [
      "Combine the counter pattern and a running total (Topic 4, slides 10 and 14) with an if…else inside the loop body (Topic 4, slide 17). Guard the whole loop with an outer if so you never divide by 0.",
      "Read n. If n <= 0 print No marks. Otherwise set count, total, passed and failed to 0. While count < n: read a mark, add it to total, add 1 to passed or to failed, then add 1 to count (at loop-body level, not inside the if). After the loop print the counts and total / n.",
      "n = int(input(\"How many marks? \"))\nif n <= 0:\n    print(\"No marks\")\nelse:\n    count = 0\n    total = 0\n    passed = 0\n    failed = 0\n    while count < ___:\n        mark = float(input(\"Enter mark: \"))\n        total = ___\n        if mark >= ___:\n            passed = passed + 1\n        else:\n            failed = ___\n        count = ___\n    print(\"Passed:\", passed)\n    print(\"Failed:\", failed)\n    print(\"Average:\", ___)",
      "A correct solution reads n with int(input()). An outer if n <= 0 prints No marks; the else branch holds the loop. Before the loop count, total, passed and failed start at 0. Each iteration reads a mark with float(input()), adds it to total, uses if mark >= 50 to add 1 to passed and else to add 1 to failed, and finally adds 1 to count. When count reaches n the loop ends and the program prints Passed, Failed and Average = total / n. A mark of exactly 50 is a pass, so the test must be >= 50.",
    ],
  },
];

// ======================================================================== EXAM 6

const EXAM6: Question[] = [
  // ---------------------------------------------------------------- MCQ
  {
    id: "x6-mcq-01",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-identifiers", "t2-variables"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [20], note: "Identifier rules: first character, allowed characters" },
      { file: "topic2", units: [21], note: "The 35 reserved keywords (including None and from)" },
      { file: "topic2", units: [23, 25], note: "Valid and invalid identifier examples" },
    ],
    origin: "original",
    prompt:
      "Each of the six lines below is tried on its own as an assignment statement. How many of them are valid Python?",
    code: `_total2 = 5
2nd_total = 5
total-2 = 5
Total_2 = 5
from_ = 5
None = 5`,
    options: ["2", "3", "4", "5"],
  },
  {
    id: "x6-mcq-02",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-numbers", "t2-type-function", "t2-values-types"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [5], note: "Floats, including scientific notation with e" },
      { file: "topic2", units: [6], note: "Complex numbers such as 7j" },
      { file: "topic2", units: [13], note: "type()" },
      { file: "topic2", units: [34], note: "// with a float operand gives a float" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a = 1.5e2
b = 7j
print(type(a), a // 4, type(b))`,
    options: [
      "<class 'int'> 37 <class 'complex'>",
      "<class 'float'> 37.5 <class 'complex'>",
      "<class 'float'> 37.0 <class 'int'>",
      "<class 'float'> 37.0 <class 'complex'>",
    ],
    answerIsOutput: true,
  },
  {
    id: "x6-mcq-03",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-strings", "t2-escape", "t2-print", "t2-arithmetic"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [12], note: "A backslash at the end of a line continues the string with no new line" },
      { file: "topic2", units: [9], note: "Triple-quoted multi-line strings may contain ' and \"" },
      { file: "topic2", units: [29, 31], note: "+ joins strings, * repeats a string" },
      { file: "topic2", units: [66], note: "print() with several objects" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `word = "ha" * 2 + 'h\\
a'
print(word, "!" * 3)
print('''It's
"ok"''')`,
    options: [
      "haha\nha !!!\nIt's\n\"ok\"",
      "hahaha !!!\nIt's\n\"ok\"",
      "hahaha!!!\nIt's\n\"ok\"",
      "hahaha !!!\nIt's \"ok\"",
    ],
    answerIsOutput: true,
  },
  {
    id: "x6-mcq-04",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-escape", "t2-strings", "t2-input"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [10], note: "An apostrophe inside a single-quoted string confuses Python unless it is escaped" },
      { file: "topic2", units: [61], note: "input() reads text from the user" },
    ],
    origin: "original",
    prompt: "The user would type Ali and then 72. What happens when this program is run?",
    code: `name = input("Name: ")
score = float(input("Score: "))
print("Student:", name)
print('Result: isn't low' if score >= 50 else "Result: low")`,
    options: [
      "It reads Ali and 72, prints Student: Ali, and only then stops with a SyntaxError on line 4",
      "It prints Student: Ali and then Result: isn't low",
      "It reads and prints nothing: Python reports a SyntaxError on line 4 before running any line",
      "It prints Student: Ali and then Result: low",
    ],
  },
  {
    id: "x6-mcq-05",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression", "t2-precedence"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [27], note: "<expr1> if <conditional_expr> else <expr2>" },
      { file: "topic3", units: [28], note: "Conditional expression assigning a value" },
      { file: "topic2", units: [56], note: "* is done before + and -" },
    ],
    origin: "original",
    prompt: "There are no parentheses around the conditional expressions. What does this program print?",
    code: `x = 7
y = 3
z = x - y if x > 10 else x + y * 2
w = 10 + 5 if z % 2 == 0 else -5 * 2
print(z, w)`,
    options: ["13 -10", "13 0", "20 -10", "13 5"],
    answerIsOutput: true,
  },
  {
    id: "x6-mcq-06",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if", "t3-elif"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [6, 8], note: "if statement: the block runs only when its condition is True" },
      { file: "topic3", units: [16], note: "Statements after an if block always run" },
      { file: "topic3", units: [33], note: "if…elif: only the first True branch runs" },
    ],
    origin: "original",
    prompt: "Note which statements are separate if statements and which belong to one if…elif. What does this program print?",
    code: `n = 12
if n % 2 == 0:
    n = n // 2
if n % 3 == 0:
    n = n + 1
elif n > 5:
    n = n * 10
if n > 6:
    print("big", n)
print("end", n)`,
    options: ["end 6", "big 13\nend 13", "big 7\nend 7", "big 70\nend 70"],
    answerIsOutput: true,
  },
  {
    id: "x6-mcq-07",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-elif", "t3-if"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [40, 41], note: "Nested conditions" },
      { file: "topic3", units: [46], note: "if…else nested inside an if, special value handled inside" },
      { file: "topic3", units: [14], note: "Every statement at the same indentation belongs to the block" },
    ],
    origin: "original",
    prompt: "For which input does this program print exactly one line, Warm, and nothing else?",
    code: `t = int(input())
if t >= 20:
    if t > 30:
        print("Hot")
    elif t >= 25:
        print("Warm")
    else:
        print("Mild")
    if t % 5 == 0:
        print("Round")
else:
    print("Cool")`,
    options: ["25", "30", "35", "27"],
  },
  {
    id: "x6-mcq-08",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-iteration", "t4-while", "t4-accumulator", "t2-logical"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [2], note: "Definite vs indefinite iteration" },
      { file: "topic4", units: [6, 7], note: "The condition is checked before each iteration; it may use logical operators" },
      { file: "topic4", units: [12], note: "Running total" },
    ],
    origin: "original",
    prompt: "What does this program print, and which kind of iteration (as defined on the slides) does this while loop perform?",
    code: `total = 0
n = 5
while n > 0 and total < 8:
    total = total + n
    n = n - 2
print(total, n)`,
    options: [
      "9 -1 — indefinite iteration: it repeats until a condition is met",
      "8 1 — indefinite iteration: it repeats until a condition is met",
      "8 1 — definite iteration: the number of repetitions is given in advance",
      "5 3 — definite iteration: the number of repetitions is given in advance",
    ],
  },

  // ---------------------------------------------------------------- tracing
  {
    id: "x6-tr-01",
    kind: "tracing",
    topicId: "t2",
    conceptIds: ["t2-expressions", "t2-comments", "t2-assignment-ops", "t2-precedence", "t2-print-end", "t2-boolean"],
    difficulty: "hard",
    sources: [
      { file: "topic2", units: [48, 49], note: "Expressions vs statements; a script shows only what print() outputs" },
      { file: "topic2", units: [79], note: "Everything after # is ignored" },
      { file: "topic2", units: [36], note: "Multiple assignment" },
      { file: "topic2", units: [52], note: "Precedence table" },
      { file: "topic2", units: [76], note: "end parameter" },
    ],
    origin: "original",
    prompt: "This program is run as a script (not typed into the interactive shell). Write exactly what it prints.",
    code: `x = 4
x + 10        # only an expression
# x = x * 3
y = x ** 2 // 3 % 4
x, y = y, x
print(x, y, end=" | ")
print(x * y > 10, not x < y)`,
  },
  {
    id: "x6-tr-02",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-nested", "t3-conditional-expression", "t2-comparison"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [7], note: "Conditions built with comparison and logical operators" },
      { file: "topic2", units: [52], note: "and is evaluated before or" },
      { file: "topic2", units: [41], note: "String comparison is case-sensitive ('str' == 'stR' is False)" },
      { file: "topic3", units: [28], note: "Conditional expression" },
      { file: "topic3", units: [45], note: "An if inside another if block" },
    ],
    origin: "original",
    prompt: "The user types Admin, then 1234, then 5. Write exactly what this program prints.",
    code: `user = input()
pin = int(input())
tries = int(input())
if user == "admin" and pin == 1234 or tries > 3:
    print("Access")
    if tries > 3:
        print("Too many tries")
else:
    print("Denied")
level = "high" if pin % 2 == 0 and tries <= 3 else "low"
print(level)`,
    inputs: ["Admin", "1234", "5"],
  },
  {
    id: "x6-tr-03",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-counter", "t4-while-conditionals", "t2-print-end", "t3-elif"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [11], note: "Counting down with N = N - 1" },
      { file: "topic4", units: [17], note: "Decision inside a while loop" },
      { file: "topic3", units: [33], note: "if…elif: only the first True branch runs" },
      { file: "topic2", units: [77], note: "print(..., end=...)" },
    ],
    origin: "original",
    prompt: "Write exactly what this program prints.",
    code: `n = 24
while n > 0:
    if n % 4 == 0:
        print(n, end="! ")
    elif n % 3 == 0:
        print(n, end="? ")
    n = n - 5
print("stop", n)`,
  },
  {
    id: "x6-tr-04",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-accumulator", "t4-while-conditionals", "t2-arithmetic"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [13], note: "A product accumulator (factorial) starts at 1" },
      { file: "topic4", units: [17], note: "if…else inside the loop body" },
      { file: "topic2", units: [34], note: "Floor division of a negative number: -13 // 3 is -5" },
    ],
    origin: "original",
    prompt: "The user types 3, 0, -2 and 5 (one per line). Write exactly what this program prints.",
    code: `count = 1
product = 1
zeros = 0
while count <= 4:
    x = int(input())
    if x == 0:
        zeros = zeros + 1
    else:
        product = product * x
    count = count + 1
print("product:", product, "zeros:", zeros)
print(product // (count - zeros))`,
    inputs: ["3", "0", "-2", "5"],
  },

  // ---------------------------------------------------------------- error identification
  {
    id: "x6-err-01",
    kind: "error",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-elif", "t2-print"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [33], note: "if…elif…else: only one branch runs" },
      { file: "topic3", units: [7], note: "Conditions combined with or" },
      { file: "topic2", units: [29, 67], note: "+ joins strings; joining text and a number needs care" },
    ],
    origin: "original",
    prompt: "The user types 45 and then gold. The program stops with an error. Which line fails, and why?",
    code: `age = int(input())
member = input()
if age >= 60 or member == "gold":
    fee = 5
    print("Reduced fee: " + fee)
elif age < 12:
    fee = 3
    print("Child fee:", fee)
else:
    fee = 10
    print("Normal fee:", fee)`,
    inputs: ["45", "gold"],
    options: [
      "No error — 45 is under 60, so the program prints Normal fee: 10",
      "Line 3: TypeError — or cannot join a number comparison and a string comparison",
      "Line 11: NameError — fee only exists inside the branch that created it",
      "Line 5: TypeError — the gold branch runs and + cannot join a string and the int fee",
    ],
    errorType: "TypeError",
    errorLine: 5,
  },
  {
    id: "x6-err-02",
    kind: "error",
    topicId: "t4",
    conceptIds: ["t4-counter", "t4-accumulator", "t4-while"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [11], note: "Counting down inside a while loop" },
      { file: "topic4", units: [12], note: "Running total" },
      { file: "topic3", units: [15], note: "Only divide when the second number is not zero" },
    ],
    origin: "original",
    prompt: "The user types 6. The program stops with an error. Which line fails, and why?",
    code: `n = int(input())
total = 0
while n >= 0:
    total = total + 12 / n
    n = n - 2
print("Total:", total)`,
    inputs: ["6"],
    options: [
      "Line 4: ZeroDivisionError — n takes the values 6, 4, 2, 0 and n >= 0 lets 0 into the loop",
      "No error — the loop stops after n = 2 and prints Total: 11.0",
      "Line 3: SyntaxError — a while condition cannot use the >= operator",
      "Line 6: TypeError — print cannot show a string and a float together",
    ],
    errorType: "ZeroDivisionError",
    errorLine: 4,
  },

  // ---------------------------------------------------------------- coding
  {
    id: "x6-code-01",
    kind: "coding",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-elif", "t3-logical-conditions", "t2-programs"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [33], note: "if…elif…else chain" },
      { file: "topic3", units: [41, 48], note: "Nested if…else inside branches" },
      { file: "lab-ch3-iii", units: [9, 10], note: "Choosing a price rule from a text input with if…elif…else" },
    ],
    origin: "original",
    prompt: `Write a parking fee program.

Read two values, in this order:
1. the vehicle type (text)
2. the number of hours parked (a whole number, use int)

Apply these rules in this order:
1. If the hours are less than 0 or more than 24, print Invalid hours and nothing else.
2. Otherwise, if the type is car: the first 2 hours are free; every hour after that costs 0.5 OMR.
3. Otherwise, if the type is truck: each of the first 3 hours costs 1 OMR; every hour after the third costs 2 OMR.
4. Any other type: print Unknown vehicle and nothing else.

For a car or a truck print one line:
Fee: <fee> OMR`,
    starterCode: `vtype = input("Vehicle type: ")
hours = int(input("Hours parked: "))

# 1. check the hours first
# 2. car rules (nested if)
# 3. truck rules (nested if)
# 4. any other type
`,
    sampleRun: `Vehicle type: car
Hours parked: 5
Fee: 1.5 OMR
`,
    tests: [
      {
        id: "t1",
        description: "Car, 5 hours (3 paid hours)",
        inputs: ["car", "5"],
        hidden: false,
        checks: [
          { type: "number", value: 1.5, label: "Fee should be 1.5" },
          { type: "contains", text: "Fee" },
        ],
      },
      {
        id: "t2",
        description: "Truck, 7 hours (3 at 1 OMR + 4 at 2 OMR)",
        inputs: ["truck", "7"],
        hidden: false,
        checks: [
          { type: "number", value: 11, label: "Fee should be 11" },
          { type: "contains", text: "Fee" },
        ],
      },
      {
        id: "t3",
        description: "Car, 1 hour (still free)",
        inputs: ["car", "1"],
        hidden: true,
        checks: [
          { type: "number", value: 0, label: "Fee should be 0" },
          { type: "notNumber", value: -0.5, label: "The fee can never be negative" },
        ],
      },
      {
        id: "t4",
        description: "Truck, 2 hours (only the 1 OMR rate)",
        inputs: ["truck", "2"],
        hidden: true,
        checks: [{ type: "number", value: 2, label: "Fee should be 2" }],
      },
      {
        id: "t5",
        description: "Truck, 24 hours (largest valid value)",
        inputs: ["truck", "24"],
        hidden: true,
        checks: [
          { type: "number", value: 45, label: "Fee should be 45" },
          { type: "notContains", text: "Invalid" },
        ],
      },
      {
        id: "t6",
        description: "Unknown vehicle type",
        inputs: ["bus", "4"],
        hidden: true,
        checks: [
          { type: "contains", text: "Unknown vehicle" },
          { type: "notContains", text: "Fee" },
        ],
      },
      {
        id: "t7",
        description: "Car, 25 hours (too many)",
        inputs: ["car", "25"],
        hidden: true,
        checks: [
          { type: "contains", text: "Invalid hours" },
          { type: "notContains", text: "Fee" },
        ],
      },
      {
        id: "t8",
        description: "Truck, -1 hours (negative)",
        inputs: ["truck", "-1"],
        hidden: true,
        checks: [
          { type: "contains", text: "Invalid hours" },
          { type: "notContains", text: "Fee" },
        ],
      },
    ],
    hints: [
      "Use an if…elif…else chain (Topic 3, slide 33) whose first condition combines two comparisons with or (Topic 3, slide 7), and put an if…else inside the car and truck branches (Topic 3, slides 41 and 48).",
      "Check the hours first: hours < 0 or hours > 24. Then elif type == \"car\": if hours <= 2 the fee is 0, else (hours - 2) * 0.5. Then elif type == \"truck\": if hours <= 3 the fee is hours * 1, else 3 + (hours - 3) * 2. The final else prints Unknown vehicle. Print the fee inside the car and truck branches only.",
      "if hours < 0 ___ hours > 24:\n    print(\"Invalid hours\")\nelif vtype == \"car\":\n    if hours <= ___:\n        fee = 0\n    else:\n        fee = (hours - ___) * 0.5\n    print(\"Fee:\", fee, \"OMR\")\nelif vtype == ___:\n    if hours <= 3:\n        fee = ___\n    else:\n        fee = 3 + (hours - 3) * ___\n    print(\"Fee:\", fee, \"OMR\")\nelse:\n    print(___)",
      "A correct solution reads vtype with input() and hours with int(input()). The first if tests hours < 0 or hours > 24 and prints Invalid hours. elif vtype == \"car\" uses a nested if/else: 0 for up to 2 hours, otherwise (hours - 2) * 0.5. elif vtype == \"truck\" uses a nested if/else: hours * 1 for up to 3 hours, otherwise 3 + (hours - 3) * 2 (3 OMR for the first three hours plus 2 OMR for each extra hour). Both branches then print Fee: <fee> OMR. The final else prints Unknown vehicle. Checking the hours first makes sure an invalid number of hours never produces a fee.",
    ],
  },
  {
    id: "x6-code-02",
    kind: "coding",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-counter", "t4-accumulator", "t3-nested"],
    difficulty: "hard",
    sources: [
      { file: "topic4", units: [18], note: "Discount for each product price read in a loop" },
      { file: "topic4", units: [17], note: "if…else inside a while loop" },
      { file: "lab-ch4-iiii", units: [12, 13], note: "Total of values read with a while loop, then a decision after the loop" },
    ],
    origin: "adapted",
    prompt: `A cashier enters item prices (decimal numbers, use float) one at a time.
Use a while loop that keeps reading prices until exactly 5 VALID prices have been read.

- A price of 0 or less is not valid: print Invalid price and do NOT count it as one of the 5 items.
- A valid price of 10 or more is a big item: the customer pays 90% of it (a 10% discount).
- Any other valid price is paid in full.

After the loop print:
Total: <total amount paid>
Big items: <number of big items>
Then print Free delivery if the total is more than 40, otherwise print Delivery fee applies.`,
    starterCode: `# Read prices until 5 VALID prices have been read
count = 0
total = 0
big = 0

# while ...:
#     read a price
#     invalid / big item / normal item

# print Total, Big items and the delivery message
`,
    sampleRun: `Price: 12
Price: 5
Price: -3
Invalid price
Price: 20
Price: 8
Price: 4
Total: 45.8
Big items: 2
Free delivery
`,
    requirements: [{ pattern: "\\bwhile\\b", message: "Use a while loop to read the prices" }],
    tests: [
      {
        id: "t1",
        description: "12, 5, -3 (invalid), 20, 8, 4",
        inputs: ["12", "5", "-3", "20", "8", "4"],
        hidden: false,
        checks: [
          { type: "number", value: 45.8, label: "Total should be 45.8" },
          { type: "regex", pattern: "Big items:\\s*2\\b", flags: "i", label: "Big items: 2" },
          { type: "contains", text: "Invalid price" },
          { type: "contains", text: "Free delivery" },
          { type: "minInputs", count: 6, label: "The invalid price must not count, so 6 prices are read" },
        ],
      },
      {
        id: "t2",
        description: "1, 2, 3, 4, 5 (no big items, small total)",
        inputs: ["1", "2", "3", "4", "5"],
        hidden: false,
        checks: [
          { type: "number", value: 15, label: "Total should be 15" },
          { type: "regex", pattern: "Big items:\\s*0\\b", flags: "i", label: "Big items: 0" },
          { type: "contains", text: "Delivery fee applies" },
          { type: "notContains", text: "Free delivery" },
          { type: "notContains", text: "Invalid" },
        ],
      },
      {
        id: "t3",
        description: "Five prices of exactly 10 (all big items)",
        inputs: ["10", "10", "10", "10", "10"],
        hidden: true,
        checks: [
          { type: "number", value: 45, label: "Total should be 45" },
          { type: "regex", pattern: "Big items:\\s*5\\b", flags: "i", label: "Big items: 5" },
          { type: "contains", text: "Free delivery" },
        ],
      },
      {
        id: "t4",
        description: "0 (invalid) then five prices of 8: total exactly 40",
        inputs: ["0", "8", "8", "8", "8", "8"],
        hidden: true,
        checks: [
          { type: "number", value: 40, label: "Total should be 40" },
          { type: "contains", text: "Invalid price" },
          { type: "contains", text: "Delivery fee applies" },
          { type: "notContains", text: "Free delivery" },
          { type: "minInputs", count: 6 },
        ],
      },
      {
        id: "t5",
        description: "Three invalid prices mixed with valid ones",
        inputs: ["-1", "-2", "9.5", "50", "0", "1", "2", "3"],
        hidden: true,
        checks: [
          { type: "number", value: 60.5, label: "Total should be 60.5" },
          { type: "regex", pattern: "Big items:\\s*1\\b", flags: "i", label: "Big items: 1" },
          { type: "regex", pattern: "(Invalid price[\\s\\S]*){3}", flags: "i", label: "Invalid price should be printed 3 times" },
          { type: "contains", text: "Free delivery" },
          { type: "minInputs", count: 8 },
        ],
      },
    ],
    hints: [
      "This is a while loop with an if…else inside (Topic 4, slides 17–18). The counter must count only VALID prices, so its update goes inside the valid branch (Topic 4, slide 10: initialize, test, update).",
      "Set count, total and big to 0. While count < 5: read a price. If price <= 0 print Invalid price (and do not change count). Otherwise, if price >= 10 add price * 0.9 to total and add 1 to big, else add price to total; then add 1 to count. After the loop print the total, the big-item count and the delivery message using total > 40.",
      "count = 0\ntotal = 0\nbig = 0\nwhile count < ___:\n    price = float(input(\"Price: \"))\n    if price <= ___:\n        print(\"Invalid price\")\n    else:\n        if price >= ___:\n            total = total + price * ___\n            big = big + 1\n        else:\n            total = ___\n        count = ___\nprint(\"Total:\", total)\nprint(\"Big items:\", big)\nif total > ___:\n    print(\"Free delivery\")\nelse:\n    print(___)",
      "A correct solution keeps count, total and big, all starting at 0, and loops while count < 5. Each pass reads a price with float(input()). If price <= 0 it prints Invalid price and skips the counter, so an extra price is read. Otherwise a nested if adds price * 0.9 (and 1 to big) when price >= 10, or the full price when it is smaller, and then adds 1 to count. After the loop it prints Total and Big items, and an if/else prints Free delivery when total > 40 and Delivery fee applies otherwise (a total of exactly 40 still pays the fee).",
    ],
  },
];

export const EXAM56_QUESTIONS: Question[] = [...EXAM5, ...EXAM6];

const ids = (exam: number, kind: string, n: number) =>
  Array.from({ length: n }, (_, i) => `x${exam}-${kind}-${String(i + 1).padStart(2, "0")}`);

function sections(exam: number): ExamDefinition["sections"] {
  return [
    { kind: "mcq", title: "Multiple Choice", pointsEach: 2, questionIds: ids(exam, "mcq", 8) },
    { kind: "tracing", title: "Code Tracing", pointsEach: 2, questionIds: ids(exam, "tr", 4) },
    { kind: "error", title: "Error Identification", pointsEach: 2, questionIds: ids(exam, "err", 2) },
    { kind: "coding", title: "Practical Coding", pointsEach: 6, questionIds: ids(exam, "code", 2) },
  ];
}

export const EXAM56_DEFS: ExamDefinition[] = [
  {
    id: "exam-5",
    number: 5,
    title: "Precedence Traps, Nested Decisions and Loop Tracing",
    difficulty: "hard",
    durationMinutes: 30,
    description:
      "A hard exam that combines operator precedence and short-circuit logic, nested and chained conditions, and while loops whose counters and totals change inside if statements.",
    sections: sections(5),
  },
  {
    id: "exam-6",
    number: 6,
    title: "Strings, Boundaries and Conditional Accumulators",
    difficulty: "hard",
    durationMinutes: 30,
    description:
      "A hard exam on number and string details, conditional-expression and if/elif traps, loop boundaries, and while loops that count only the valid values they read.",
    sections: sections(6),
  },
];
