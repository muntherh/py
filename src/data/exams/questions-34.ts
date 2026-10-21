// Exam questions and definitions WITHOUT answers (answers: ./answers-34.ts).
// Exams 3 and 4 — medium difficulty. Every item is new ("original") or a
// variation of a course example/exercise ("adapted"); none is a verbatim
// university question.
import type { ExamDefinition, Question } from "../types";

// ======================================================================= EXAM 3

const EXAM3: Question[] = [
  // ------------------------------------------------------------ MCQ
  {
    id: "x3-mcq-01",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-precedence", "t2-arithmetic"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [52, 55, 56], note: "Precedence table and worked precedence examples" },
      { file: "topic2", units: [32, 34, 35], note: "** power, // floor division and % remainder" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `result = 10 - 2 ** 3 // 3 + 7 % 4
print(result)`,
    options: ["11", "5", "9", "1"],
    answerIsOutput: true,
  },
  {
    id: "x3-mcq-02",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-identifiers", "t2-variables"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [20, 21, 23], note: "Naming rules, the 35 keywords, valid and invalid names" },
    ],
    origin: "original",
    prompt: "Which assignment statement runs without an error?",
    options: ["_total2 = 5", "total-2 = 5", "2_total = 5", "None = 5"],
  },
  {
    id: "x3-mcq-03",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-input", "t2-arithmetic", "t2-precedence"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [61, 69], note: "input() always returns a string; '10' + '20' gives 1020" },
      { file: "topic2", units: [29, 31], note: "+ joins strings, * repeats a string" },
      { file: "topic2", units: [56], note: "* is done before + and -" },
    ],
    origin: "original",
    prompt: "The user types 4 at the first prompt and 5 at the second prompt. What does the last line print?",
    code: `a = input("First: ")
b = input("Second: ")
print(a + b * 2)`,
    options: ["455", "14", "4545", "18"],
  },
  {
    id: "x3-mcq-04",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-comparison", "t2-logical", "t2-assignment-ops"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [36], note: "Multiple assignment x, y, z = ..." },
      { file: "topic2", units: [40, 41], note: "Comparison operators, including the chained 3 < 5 < 7" },
      { file: "topic2", units: [43, 45, 46, 58], note: "and / or / not and combining them with comparisons" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a, b, c = 5, 10, 15
print(a < b < c, a + b == c and b > c)
print(not a > b or c % a != 0)`,
    options: ["True False\nTrue", "True True\nFalse", "False False\nTrue", "True False\nFalse"],
    answerIsOutput: true,
  },
  {
    id: "x3-mcq-05",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [32, 33], note: "Chained conditionals: the first True test wins" },
      { file: "topic3", units: [38], note: "Grade exercise with boundaries" },
    ],
    origin: "original",
    prompt: "The programmer wanted a score of 85 to give Merit. What does this program actually print?",
    code: `score = 85
if score >= 50:
    grade = "Pass"
elif score >= 80:
    grade = "Merit"
elif score >= 90:
    grade = "Distinction"
else:
    grade = "Fail"
print(grade)`,
    options: ["Pass", "Merit", "Pass\nMerit", "Distinction"],
    answerIsOutput: true,
  },
  {
    id: "x3-mcq-06",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression", "t2-arithmetic", "t2-precedence"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [27, 28], note: "Conditional expression value1 if condition else value2" },
      { file: "topic2", units: [56], note: "* is done before -" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `price = 50
rate = 0.4 if price > 50 else 0.2
print(price - price * rate)`,
    options: ["40.0", "30.0", "40", "10.0"],
    answerIsOutput: true,
  },
  {
    id: "x3-mcq-07",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-truthiness", "t4-counter", "t2-print-end"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [8], note: "Non-zero numbers count as True, 0 counts as False" },
      { file: "topic4", units: [11], note: "Counting down with N = N - 1" },
      { file: "topic2", units: [76, 77], note: "print(..., end=' ') stays on the same line" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `n = 3
while n:
    print(n, end=" ")
    n = n - 1
print("Go")`,
    options: ["3 2 1 Go", "3 2 1 0 Go", "Go", "3\n2\n1\nGo"],
    answerIsOutput: true,
  },
  {
    id: "x3-mcq-08",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-iteration", "t4-while"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [2], note: "Definite vs indefinite iteration and their example loops" },
      { file: "topic4", units: [4], note: "The while loop repeats as long as a condition is true" },
    ],
    origin: "original",
    prompt:
      "A program must keep asking the user for a password until the correct one is typed. Nobody knows in advance how many attempts it will take. Using the terms from Topic 4, what kind of iteration is this, and which loop does the slide give as its example?",
    options: [
      "Indefinite iteration — the while loop",
      "Definite iteration — the for loop",
      "Definite iteration — the while loop",
      "Indefinite iteration — the for loop",
    ],
  },

  // ------------------------------------------------------------ Tracing
  {
    id: "x3-tr-01",
    kind: "tracing",
    topicId: "t2",
    conceptIds: ["t2-print-end", "t2-escape", "t2-fstrings", "t2-comments", "t2-assignment-ops"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [10, 11], note: "Escape sequences \\' \\n \\t" },
      { file: "topic2", units: [37], note: "+= adds and assigns" },
      { file: "topic2", units: [75, 76, 77], note: "f-strings and the end parameter" },
      { file: "topic2", units: [79], note: "Comments are ignored" },
    ],
    origin: "original",
    prompt: "What exactly does this program print? (You may type a tab as a single space.)",
    code: String.raw`name = "Sara"
score = 17
score += 4    # bonus marks
# score = score * 10
print("Name:\t" + name, end=" | ")
print(f"Score: {score}")
print('It\'s done\nBye')`,
  },
  {
    id: "x3-tr-02",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-elif", "t3-if-else", "t3-if", "t3-logical-conditions"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [16], note: "Unindented lines after an if always run" },
      { file: "topic3", units: [21, 25], note: "if…else, even/odd test with %" },
      { file: "topic3", units: [33, 37], note: "if…elif and conditions joined with and" },
    ],
    origin: "original",
    prompt: "The user types 10 and then 4. What does the program print?",
    code: `x = int(input())
y = int(input())
if x > y:
    print("A")
elif x == y:
    print("B")
if x % y == 0:
    print("C")
else:
    print("D")
if x > 5 and y < 5:
    print("E")
print("End")`,
    inputs: ["10", "4"],
  },
  {
    id: "x3-tr-03",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t4-counter"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [10], note: "Initialize, test, update pattern" },
      { file: "topic4", units: [12], note: "Running total inside a while loop" },
      { file: "topic4", units: [17], note: "if…else inside a while loop" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `total = 0
count = 1
while count <= 6:
    if count % 3 == 0:
        total = total + count * 2
    else:
        total = total + 1
    count = count + 1
print("Total:", total)
print("Count:", count)`,
  },
  {
    id: "x3-tr-04",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-if-else", "t2-precedence"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [41, 46], note: "Nested if…else syntax and example" },
      { file: "lab-ch3-iiii", units: [20], note: "Nested check of amount and membership" },
      { file: "topic2", units: [52], note: "* and // have equal precedence, left to right" },
    ],
    origin: "original",
    prompt: "The user types 135 and then gold. What does the program print?",
    code: `points = int(input())
member = input()
if points >= 100:
    print("Level reached")
    if member == "gold":
        bonus = points // 10 * 3
    else:
        bonus = points // 10
else:
    bonus = 0
    if member == "gold":
        print("Almost there")
    print("No bonus")
print("Bonus:", bonus)
print("Total:", points + bonus)`,
    inputs: ["135", "gold"],
  },

  // ------------------------------------------------------------ Error identification
  {
    id: "x3-err-01",
    kind: "error",
    topicId: "t2",
    conceptIds: ["t2-print", "t2-conversion", "t2-input"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [64, 65], note: "int(input(...)) converts the typed text" },
      { file: "topic2", units: [67, 74], note: "Joining strings with + versus printing with commas" },
    ],
    origin: "original",
    prompt: "The user types 25. The program stops with an error. Which line causes it, and why?",
    code: `age = int(input("Enter your age: "))
years_left = 60 - age
print("Years until 60: " + years_left)`,
    inputs: ["25"],
    options: [
      "Line 3 — TypeError: + cannot join a string and an integer",
      "Line 1 — ValueError: int() cannot convert the typed text",
      "Line 2 — TypeError: a number typed with input() cannot be subtracted",
      "Line 3 — SyntaxError: print() needs a comma between the two parts",
    ],
    errorType: "TypeError",
    errorLine: 3,
  },
  {
    id: "x3-err-02",
    kind: "error",
    topicId: "t3",
    conceptIds: ["t3-elif", "t2-variables"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [33], note: "if…elif…else; the else part is optional" },
      { file: "topic2", units: [19], note: "An assignment statement creates a variable" },
    ],
    origin: "original",
    prompt: "The user types 35. The program stops with an error. Which line causes it, and why?",
    code: `mark = int(input("Mark: "))
if mark >= 50:
    result = "Pass"
elif mark >= 40:
    result = "Resit"
print("Result:", result)`,
    inputs: ["35"],
    options: [
      "Line 6 — NameError: result was never given a value, because neither branch ran",
      "Line 4 — SyntaxError: an elif must always be followed by an else",
      "Line 1 — ValueError: int() cannot convert 35",
      "Line 6 — TypeError: a string and a variable cannot be printed with a comma",
    ],
    errorType: "NameError",
    errorLine: 6,
  },

  // ------------------------------------------------------------ Practical coding
  {
    id: "x3-code-01",
    kind: "coding",
    topicId: "t3",
    conceptIds: ["t3-elif", "t2-programs", "t2-conversion"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [33, 38], note: "if…elif…else and the letter-grade exercise" },
      { file: "pe3", units: [1], item: "4", note: "Total marks and grade table" },
      { file: "topic2", units: [72, 73], note: "float(input(...)) for decimal input" },
    ],
    origin: "adapted",
    prompt:
      "Write a program that reads a student's three marks in this order: Quiz, Midterm and Final (decimal numbers, each out of 100). Use the prompts `Quiz mark: `, `Midterm mark: ` and `Final mark: `.\n" +
      "Calculate the average of the three marks and print it as `Average: <value>`.\n" +
      "Then print the grade as `Grade: <letter>` using an if…elif…else chain and these rules: average 85 or more gives A; 70 or more (but below 85) gives B; 55 or more (but below 70) gives C; below 55 gives F.",
    starterCode: `# Read the three marks as decimal numbers
quiz = float(input("Quiz mark: "))
# read the Midterm and Final marks here

# calculate the average

# print the average, then the grade (A, B, C or F)
`,
    sampleRun: `Quiz mark: 80
Midterm mark: 90
Final mark: 85
Average: 85.0
Grade: A
`,
    tests: [
      {
        id: "t1",
        description: "80, 90, 85 → average exactly 85 → A",
        inputs: ["80", "90", "85"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 85, label: "Average should be 85" },
          { type: "regex", pattern: "Grade:\\s*A\\b", flags: "i", label: "Should print Grade: A" },
          { type: "notContains", text: "Grade: B" },
          { type: "order", texts: ["Average", "Grade"] },
        ],
      },
      {
        id: "t2",
        description: "60, 75, 66 → average 67 → C",
        inputs: ["60", "75", "66"],
        hidden: false,
        checks: [
          { type: "number", value: 67, label: "Average should be 67" },
          { type: "regex", pattern: "Grade:\\s*C\\b", flags: "i", label: "Should print Grade: C" },
          { type: "notContains", text: "Grade: B" },
          { type: "notContains", text: "Grade: F" },
        ],
      },
      {
        id: "t3",
        description: "Average exactly 70 → B (boundary)",
        inputs: ["70", "70", "70"],
        hidden: true,
        checks: [
          { type: "number", value: 70 },
          { type: "regex", pattern: "Grade:\\s*B\\b", flags: "i", label: "Should print Grade: B" },
          { type: "notContains", text: "Grade: C" },
        ],
      },
      {
        id: "t4",
        description: "Average just below 55 → F",
        inputs: ["50", "60", "54.5"],
        hidden: true,
        checks: [
          { type: "number", value: 54.8333, label: "Average should be about 54.83" },
          { type: "regex", pattern: "Grade:\\s*F\\b", flags: "i", label: "Should print Grade: F" },
          { type: "notContains", text: "Grade: C" },
        ],
      },
      {
        id: "t5",
        description: "Average just below 85 → B",
        inputs: ["84", "85", "85"],
        hidden: true,
        checks: [
          { type: "number", value: 84.6667, label: "Average should be about 84.67" },
          { type: "regex", pattern: "Grade:\\s*B\\b", flags: "i", label: "Should print Grade: B" },
          { type: "notContains", text: "Grade: A" },
        ],
      },
      {
        id: "t6",
        description: "Average exactly 55 → C (boundary)",
        inputs: ["100", "40", "25"],
        hidden: true,
        checks: [
          { type: "number", value: 55 },
          { type: "regex", pattern: "Grade:\\s*C\\b", flags: "i", label: "Should print Grade: C" },
          { type: "notContains", text: "Grade: F" },
        ],
      },
    ],
    hints: [
      "This is a chained conditional (if…elif…else): see Topic 3, slides 33 and 38. Read decimal marks with float(input(...)) as on Topic 2, slides 72–73.",
      "Read the three marks, add them, divide the total by 3 and print the average. Then test the boundaries from the highest down: >= 85, then >= 70, then >= 55, else F. Only the first True branch runs.",
      "quiz = float(input(\"Quiz mark: \"))\nmid = ___\nfinal = ___\naverage = (___ + ___ + ___) / 3\nprint(\"Average:\", average)\nif average >= ___:\n    print(\"Grade: A\")\nelif average >= ___:\n    print(\"Grade: B\")\nelif ___:\n    print(\"Grade: C\")\nelse:\n    print(\"Grade: F\")",
      "Read each mark with float(input(...)) so decimals such as 54.5 work. Put the sum in parentheses before dividing — (quiz + mid + final) / 3 — otherwise only the final mark is divided by 3. Print the average with a comma. Then use if average >= 85 → A, elif average >= 70 → B, elif average >= 55 → C, else → F. Because the tests go from the highest boundary down, each elif only runs when every earlier condition was False, so 85 gives A, 70 gives B and 55 gives C.",
    ],
    requirements: [{ pattern: "\\belif\\b", message: "Use an if…elif…else chain" }],
  },
  {
    id: "x3-code-02",
    kind: "coding",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t4-counter"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [14], note: "Average of N numbers where N is entered by the user" },
      { file: "topic4", units: [17], note: "A decision for each value read in the loop" },
      { file: "lab-ch4-iiii", units: [13], note: "while loop reading daily values into a total" },
    ],
    origin: "adapted",
    prompt:
      "Write a program that first reads the number of days N (a whole number, at least 1) with the prompt `How many days? `.\n" +
      "Then use a while loop to read N temperatures (decimal numbers), each with the prompt `Temperature: `.\n" +
      "A hot day is a temperature of 35 or more. After the loop, print `Hot days: <count>` and then `Average: <average>`, where the average is the sum of the N temperatures divided by N.",
    starterCode: `n = int(input("How many days? "))
# set up a counter, a hot-day counter and a total

# while loop: read a temperature, add it to the total, check if it is hot

# print the results after the loop
`,
    sampleRun: `How many days? 4
Temperature: 30
Temperature: 36.5
Temperature: 35
Temperature: 28
Hot days: 2
Average: 32.375
`,
    tests: [
      {
        id: "t1",
        description: "4 days, one of them exactly 35",
        inputs: ["4", "30", "36.5", "35", "28"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 5 },
          { type: "regex", pattern: "Hot days:\\s*2\\b", flags: "i", label: "Should print Hot days: 2" },
          { type: "number", value: 32.375, label: "Average should be 32.375" },
          { type: "order", texts: ["Hot days", "Average"] },
        ],
      },
      {
        id: "t2",
        description: "3 days, no hot day",
        inputs: ["3", "20", "25", "30"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 4 },
          { type: "regex", pattern: "Hot days:\\s*0\\b", flags: "i", label: "Should print Hot days: 0" },
          { type: "number", value: 25, label: "Average should be 25" },
        ],
      },
      {
        id: "t3",
        description: "A single hot day",
        inputs: ["1", "40"],
        hidden: true,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "regex", pattern: "Hot days:\\s*1\\b", flags: "i", label: "Should print Hot days: 1" },
          { type: "number", value: 40, label: "Average should be 40" },
        ],
      },
      {
        id: "t4",
        description: "5 days with values on both sides of 35",
        inputs: ["5", "35", "35", "34.9", "50", "10"],
        hidden: true,
        checks: [
          { type: "minInputs", count: 6 },
          { type: "regex", pattern: "Hot days:\\s*3\\b", flags: "i", label: "Should print Hot days: 3" },
          { type: "number", value: 32.98, label: "Average should be 32.98" },
        ],
      },
    ],
    hints: [
      "Combine the counter and running-total patterns with an if inside the loop: see Topic 4, slides 10, 14 and 17.",
      "Read N. Set count = 0, hot = 0 and total = 0. While count < N: read a temperature, add it to total, add 1 to hot if it is 35 or more, and add 1 to count. After the loop print hot and total / N.",
      "n = int(input(\"How many days? \"))\ncount = 0\nhot = 0\ntotal = 0\nwhile count < ___:\n    temp = float(input(\"Temperature: \"))\n    total = ___\n    if temp >= ___:\n        hot = ___\n    count = ___\nprint(\"Hot days:\", hot)\nprint(\"Average:\", ___)",
      "The loop runs exactly N times because count starts at 0, the condition is count < n, and count = count + 1 is the last line of the loop body (not inside the if). Each temperature is added to total; the if (temp >= 35, so 35 itself counts as hot) adds 1 to hot. The two print statements are not indented, so they run once after the loop. The average is total / n, which is a float such as 32.375.",
    ],
    requirements: [{ pattern: "\\bwhile\\b", message: "Use a while loop" }],
  },
];

// ======================================================================= EXAM 4

const EXAM4: Question[] = [
  // ------------------------------------------------------------ MCQ
  {
    id: "x4-mcq-01",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-type-function", "t2-numbers", "t2-values-types", "t2-arithmetic"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [5, 6], note: "Floats in scientific notation; complex numbers a + bj" },
      { file: "topic2", units: [13], note: "type() tells you the type of a value" },
      { file: "topic2", units: [31, 33], note: "* repeats a string; / always gives a float" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a = 7 / 7
b = 3e2
c = "12" * 2
d = 2 + 3j
print(type(a), type(b))
print(type(c), type(d))`,
    options: [
      "<class 'float'> <class 'float'>\n<class 'str'> <class 'complex'>",
      "<class 'int'> <class 'float'>\n<class 'int'> <class 'complex'>",
      "<class 'float'> <class 'int'>\n<class 'str'> <class 'complex'>",
      "<class 'int'> <class 'int'>\n<class 'str'> <class 'float'>",
    ],
    answerIsOutput: true,
  },
  {
    id: "x4-mcq-02",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-boolean", "t2-strings", "t2-escape", "t2-comparison"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [7], note: "True and False start with capital letters" },
      { file: "topic2", units: [8, 10], note: "Single/double quotes; a quote inside the same quotes needs \\'" },
      { file: "topic2", units: [41], note: "== compares two strings" },
    ],
    origin: "original",
    prompt: "Which of these lines runs WITHOUT an error?",
    options: ["passed = true", "msg = 'It's late'", "ok = \"UTAS\" == 'UTAS'", "print(\"Total: \" + 5)"],
  },
  {
    id: "x4-mcq-03",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-expressions", "t2-variables"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [48, 49], note: "Expressions vs statements; scripts run statements in order" },
    ],
    origin: "original",
    prompt: "This code is saved in a file and run as a script (not typed in interactive mode). What does it print?",
    code: `x = 4
x + 6
y = x * 2
print(x, y)`,
    options: ["4 8", "10 20", "10\n4 8", "4 8\n10"],
    answerIsOutput: true,
  },
  {
    id: "x4-mcq-04",
    kind: "mcq",
    topicId: "t2",
    conceptIds: ["t2-precedence", "t2-logical", "t2-arithmetic"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [52, 56], note: "Precedence table and examples such as 6+4/2" },
      { file: "topic2", units: [33], note: "/ always gives a float" },
      { file: "topic2", units: [58], note: "and / not combined with comparisons" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a = 10 - 4 / 2 * 3
print(a, a > 4 and not 7 % 3 == 2)`,
    options: ["4.0 False", "9.0 True", "4 False", "4.0 True"],
    answerIsOutput: true,
  },
  {
    id: "x4-mcq-05",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-if-else", "t3-if"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [7], note: "Conditions built with comparison and logical operators" },
      { file: "topic3", units: [21], note: "if…else syntax" },
      { file: "lab-ch3-ii", units: [10, 11, 12], note: "Online/campus task; cell 11 compares strings with True, cell 12 joins string tests with and" },
    ],
    origin: "adapted",
    prompt: "What does this program print?",
    code: `weather = "raining"
transport = "yes"
if weather == True or transport == "no":
    print("Online class")
else:
    print("Campus")
if weather == "raining" and transport == "yes":
    print("Take an umbrella")
print("Done")`,
    options: [
      "Campus\nTake an umbrella\nDone",
      "Online class\nTake an umbrella\nDone",
      "Campus\nDone",
      "Online class\nDone",
    ],
    answerIsOutput: true,
  },
  {
    id: "x4-mcq-06",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [40, 41], note: "Nested if…else syntax" },
      { file: "lab-ch3-iiii", units: [16, 17], note: "Attendance first, then the mark" },
    ],
    origin: "adapted",
    prompt: "Which pair of inputs makes this program print Failed?",
    code: `attendance = float(input("Attendance: "))
mark = float(input("Mark: "))
if attendance >= 75:
    if mark >= 50:
        print("Passed")
    else:
        print("Failed")
else:
    print("Not eligible")`,
    options: ["Attendance 75, Mark 49", "Attendance 74, Mark 49", "Attendance 80, Mark 50", "Attendance 60, Mark 90"],
  },
  {
    id: "x4-mcq-07",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-while", "t4-counter"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [5, 6], note: "The condition is tested before every iteration" },
      { file: "topic4", units: [10], note: "Initialize, test, update" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `k = 1
steps = 0
while k < 20:
    k = k * 3
    steps += 1
print(k, steps)`,
    options: ["27 3", "9 2", "27 4", "20 3"],
    answerIsOutput: true,
  },
  {
    id: "x4-mcq-08",
    kind: "mcq",
    topicId: "t4",
    conceptIds: ["t4-table", "t4-counter"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [15], note: "Multiplication table with the last multiplier 10" },
      { file: "topic4", units: [10], note: "Loop variable pattern: initialize, test, update" },
    ],
    origin: "adapted",
    prompt:
      "This program should print the multiplication table of the number entered, from num x 1 up to and including num x 10 (exactly 10 lines). Notice that m is updated BEFORE the print. Which condition should replace ____?",
    code: `num = int(input("Enter a number: "))
m = 0
while ____:
    m = m + 1
    print(num, "x", m, "=", num * m)`,
    options: ["m < 10", "m <= 10", "m < 9", "m > 10"],
  },

  // ------------------------------------------------------------ Tracing
  {
    id: "x4-tr-01",
    kind: "tracing",
    topicId: "t2",
    conceptIds: ["t2-conversion", "t2-arithmetic", "t2-values-types"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [65], note: "int() and float() conversions" },
      { file: "topic2", units: [29, 31], note: "+ joins strings, * repeats a string" },
      { file: "topic2", units: [33, 34, 35], note: "/, // and %" },
    ],
    origin: "original",
    prompt: "What does this program print?",
    code: `a = "5"
b = 2
print(a * b, int(a) * b)
print(float(a) / b, int(a) // b, int(a) % b)
c = a + "0"
print(int(c) - 1, c * 2)`,
  },
  {
    id: "x4-tr-02",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-elif", "t3-conditional-expression"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [50], item: "3", note: "Electricity bill with unit slabs" },
      { file: "topic3", units: [33], note: "if…elif…else" },
      { file: "topic3", units: [27, 28], note: "Conditional expression" },
    ],
    origin: "adapted",
    prompt: "The user types 250. What does the program print?",
    code: `units = int(input())
if units <= 100:
    bill = units * 20
elif units <= 300:
    bill = 100 * 20 + (units - 100) * 30
else:
    bill = 100 * 20 + 200 * 30 + (units - 300) * 40
level = "high" if bill > 5000 else "normal"
print("Bill:", bill, "baisa")
print("Usage level:", level)`,
    inputs: ["250"],
  },
  {
    id: "x4-tr-03",
    kind: "tracing",
    topicId: "t4",
    conceptIds: ["t4-accumulator", "t4-while-conditionals"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [13], note: "Factorial with a loop: 5! = 120" },
      { file: "topic4", units: [17], note: "An if inside a while loop" },
    ],
    origin: "adapted",
    prompt: "What does this program print?",
    code: `n = 5
product = 1
i = 1
while i <= n:
    product = product * i
    if product > 20:
        print("big at", i)
    i = i + 1
print("Result:", product)`,
  },
  {
    id: "x4-tr-04",
    kind: "tracing",
    topicId: "t3",
    conceptIds: ["t3-nested", "t3-elif", "t3-logical-conditions"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [37], note: "Largest of three numbers with and" },
      { file: "pe3", units: [1], item: "3", note: "Largest of three numbers" },
      { file: "topic3", units: [41, 43], note: "if…else nested inside else" },
    ],
    origin: "adapted",
    prompt: "The user types 7, then 13, then 13. What does the program print?",
    code: `a = int(input())
b = int(input())
c = int(input())
if a >= b and a >= c:
    big = a
elif b >= a and b >= c:
    big = b
else:
    big = c
if big % 2 == 0:
    print(big, "is even")
else:
    if big > 10:
        print(big, "is odd and large")
    else:
        print(big, "is odd and small")
print("Sum:", a + b + c)`,
    inputs: ["7", "13", "13"],
  },

  // ------------------------------------------------------------ Error identification
  {
    id: "x4-err-01",
    kind: "error",
    topicId: "t2",
    conceptIds: ["t2-conversion", "t2-input"],
    difficulty: "medium",
    sources: [
      { file: "topic2", units: [64, 65], note: "int(X) and float(X) conversion of input" },
      { file: "topic2", units: [72, 73], note: "float(input(...)) for decimal values" },
    ],
    origin: "original",
    prompt: "The user types Omar, then 7.5, then 3. The program stops with an error. Which line causes it, and why?",
    code: `name = input("Name: ")
hours = int(input("Hours worked: "))
rate = float(input("Rate per hour: "))
print(name, "earned", hours * rate)`,
    inputs: ["Omar", "7.5", "3"],
    options: [
      "Line 2 — ValueError: int() cannot convert the text 7.5 to a whole number",
      "Line 3 — ValueError: float() cannot convert the text 3",
      "Line 4 — TypeError: a string and a number cannot be printed together",
      "Line 4 — TypeError: an int cannot be multiplied by a float",
    ],
    errorType: "ValueError",
    errorLine: 2,
  },
  {
    id: "x4-err-02",
    kind: "error",
    topicId: "t3",
    conceptIds: ["t3-if-else", "t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [21], note: "if…else syntax: else ends with a colon" },
      { file: "topic3", units: [33], note: "if…elif…else syntax" },
    ],
    origin: "original",
    prompt: "Python refuses to run this program at all. Which line is wrong, and why?",
    code: `speed = int(input("Speed: "))
if speed > 120:
    print("Fine: 50 OMR")
elif speed > 100:
    print("Warning")
else speed <= 100:
    print("OK")`,
    options: [
      "Line 6 — SyntaxError: else cannot have a condition, so Python expects a colon right after else",
      "Line 4 — SyntaxError: a second condition must start with a new if, not elif",
      "Line 1 — ValueError: int() cannot convert the speed",
      "Line 7 — IndentationError: print(\"OK\") is indented too far",
    ],
    errorType: "SyntaxError",
    errorLine: 6,
  },

  // ------------------------------------------------------------ Practical coding
  {
    id: "x4-code-01",
    kind: "coding",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-elif", "t2-programs"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-iii", units: [11, 12], note: "Shopping discount when amount > 50 AND member" },
      { file: "topic3", units: [33, 37], note: "if…elif…else with and" },
    ],
    origin: "adapted",
    prompt:
      "A bookshop gives discounts. Write a program that reads the purchase amount (a decimal number) with the prompt `Amount: ` and then whether the customer has a student card with the prompt `Student card (yes/no): ` (the user types exactly yes or no).\n" +
      "Rules (use and to join the two conditions): if the amount is more than 30 AND the customer has a student card, the discount is 15% of the amount. Otherwise, if the amount is more than 30, the discount is 5% of the amount. Otherwise there is no discount (0).\n" +
      "Print `Discount: <discount>` and then `To pay: <amount minus discount>`.",
    starterCode: `amount = float(input("Amount: "))
card = input("Student card (yes/no): ")
# decide the discount with if / elif / else

# print the discount and the amount to pay
`,
    sampleRun: `Amount: 40
Student card (yes/no): yes
Discount: 6.0
To pay: 34.0
`,
    tests: [
      {
        id: "t1",
        description: "40 with a student card → 15%",
        inputs: ["40", "yes"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "number", value: 6, label: "Discount should be 6.0" },
          { type: "number", value: 34, label: "Amount to pay should be 34.0" },
          { type: "order", texts: ["Discount", "To pay"] },
        ],
      },
      {
        id: "t2",
        description: "40 without a student card → 5%",
        inputs: ["40", "no"],
        hidden: false,
        checks: [
          { type: "number", value: 2, label: "Discount should be 2.0" },
          { type: "number", value: 38, label: "Amount to pay should be 38.0" },
          { type: "notNumber", value: 34 },
        ],
      },
      {
        id: "t3",
        description: "Exactly 30 with a card → no discount (boundary)",
        inputs: ["30", "yes"],
        hidden: true,
        checks: [
          { type: "number", value: 30, label: "Amount to pay should be 30" },
          { type: "notNumber", value: 4.5, label: "30 is not more than 30, so no 15% discount" },
          { type: "notNumber", value: 25.5 },
          { type: "order", texts: ["Discount", "To pay"] },
        ],
      },
      {
        id: "t4",
        description: "100 without a card → 5%",
        inputs: ["100", "no"],
        hidden: true,
        checks: [
          { type: "number", value: 5 },
          { type: "number", value: 95 },
          { type: "notNumber", value: 85 },
        ],
      },
      {
        id: "t5",
        description: "20 without a card → no discount",
        inputs: ["20", "no"],
        hidden: true,
        checks: [
          { type: "number", value: 20 },
          { type: "notNumber", value: 19 },
          { type: "notNumber", value: 17 },
        ],
      },
      {
        id: "t6",
        description: "30.5 with a card → just over the limit, 15%",
        inputs: ["30.5", "yes"],
        hidden: true,
        checks: [
          { type: "number", value: 4.575, tolerance: 0.001 },
          { type: "number", value: 25.925, tolerance: 0.001 },
        ],
      },
    ],
    hints: [
      "Join two conditions with and inside an if…elif…else chain: see Topic 3, slides 33 and 37, and the shopping-discount example in Chapter 3 Lab III (cells 11–12).",
      "First check amount > 30 and card == \"yes\" (15%). If that is False, check amount > 30 alone (5%). Otherwise the discount is 0. After the chain, print the discount and amount - discount.",
      "if amount > ___ and card == ___:\n    discount = amount * ___\nelif amount > ___:\n    discount = amount * ___\nelse:\n    discount = ___\nprint(\"Discount:\", discount)\nprint(\"To pay:\", ___)",
      "The order matters: the combined test (amount > 30 and card == \"yes\") must come first, because the elif (amount > 30) is only reached when the first test is False — that is, when the amount is over 30 but the card answer is not yes. Use > (not >=) so that exactly 30 gets no discount. 15% is amount * 0.15 and 5% is amount * 0.05. Printing after the chain means both lines are printed for every customer.",
    ],
    requirements: [{ pattern: "\\band\\b", message: "Combine the two conditions with and" }],
  },
  {
    id: "x4-code-02",
    kind: "coding",
    topicId: "t4",
    conceptIds: ["t4-while-conditionals", "t4-accumulator", "t4-counter"],
    difficulty: "medium",
    sources: [
      { file: "topic4", units: [18], note: "Discount for each of 3 products inside a loop" },
      { file: "topic4", units: [12], note: "Running total" },
      { file: "topic4", units: [9, 10], note: "Counting loop from 1 to a limit" },
    ],
    origin: "adapted",
    prompt:
      "An order always has exactly 3 items. Write a program that uses a while loop to read the price of each item (a decimal number) with the prompt `Price: `.\n" +
      "If a price is 20 or more, the discount is 25%; otherwise the discount is 10%. Right after reading each price, print `Discounted: <price after discount>`.\n" +
      "After the loop, print `Total: <sum of the 3 discounted prices>`.",
    starterCode: `count = 1
total = 0
# while loop that runs 3 times:
#   read a price, work out the discounted price, print it, add it to total

# print the total after the loop
`,
    sampleRun: `Price: 40
Discounted: 30.0
Price: 10
Discounted: 9.0
Price: 20
Discounted: 15.0
Total: 54.0
`,
    tests: [
      {
        id: "t1",
        description: "40, 10, 20 (20 is on the 25% side)",
        inputs: ["40", "10", "20"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 30 },
          { type: "number", value: 9 },
          { type: "number", value: 15 },
          { type: "number", value: 54, label: "Total should be 54.0" },
          { type: "notNumber", value: 18, label: "20 gets the 25% discount, not 10%" },
        ],
      },
      {
        id: "t2",
        description: "8, 100, 19.5",
        inputs: ["8", "100", "19.5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "number", value: 7.2 },
          { type: "number", value: 75 },
          { type: "number", value: 17.55, tolerance: 0.001 },
          { type: "number", value: 99.75, label: "Total should be 99.75" },
        ],
      },
      {
        id: "t3",
        description: "Three prices exactly on the boundary",
        inputs: ["20", "20", "20"],
        hidden: true,
        checks: [
          { type: "number", value: 15 },
          { type: "number", value: 45, label: "Total should be 45.0" },
          { type: "notNumber", value: 18 },
          { type: "notNumber", value: 54 },
        ],
      },
      {
        id: "t4",
        description: "Just below 20, a small price and a large price",
        inputs: ["19.9", "5", "60"],
        hidden: true,
        checks: [
          { type: "number", value: 17.91, tolerance: 0.001 },
          { type: "number", value: 4.5 },
          { type: "number", value: 45 },
          { type: "number", value: 67.41, label: "Total should be 67.41" },
          { type: "notNumber", value: 14.925, tolerance: 0.001 },
        ],
      },
    ],
    hints: [
      "Use a counting while loop with an if…else inside and a running total: see Topic 4, slides 10, 12 and 18.",
      "Start count at 1 and total at 0. While count <= 3: read the price, choose 25% or 10% with if…else, compute price - price * rate, print it, add it to total and add 1 to count. Print the total after the loop.",
      "count = 1\ntotal = 0\nwhile count <= ___:\n    price = float(input(\"Price: \"))\n    if price >= ___:\n        new_price = price - price * ___\n    else:\n        new_price = price - price * ___\n    print(\"Discounted:\", new_price)\n    total = ___\n    count = ___\nprint(\"Total:\", total)",
      "The loop body runs for count = 1, 2 and 3, then count becomes 4 and the condition count <= 3 is False. Inside the body the if…else picks the rate (price >= 20 means 20 itself gets 25%), the discounted price is price - price * rate, and it is printed straight away. total = total + new_price keeps the running sum, and count = count + 1 must be outside the if…else so it runs every time. The Total line is not indented, so it prints once, after the loop.",
    ],
    requirements: [{ pattern: "\\bwhile\\b", message: "Use a while loop" }],
  },
];

export const EXAM34_QUESTIONS: Question[] = [...EXAM3, ...EXAM4];

function ids(prefix: string, n: number): string[] {
  return Array.from({ length: n }, (_, i) => `${prefix}-${String(i + 1).padStart(2, "0")}`);
}

export const EXAM34_DEFS: ExamDefinition[] = [
  {
    id: "exam-3",
    number: 3,
    title: "Operators, Decisions and Counting Loops",
    difficulty: "medium",
    durationMinutes: 30,
    description:
      "A medium exam that mixes operator precedence, input and string operations with elif chains, nested decisions and while loops that count and add up values.",
    sections: [
      { kind: "mcq", title: "Multiple Choice", pointsEach: 2, questionIds: ids("x3-mcq", 8) },
      { kind: "tracing", title: "Code Tracing", pointsEach: 2, questionIds: ids("x3-tr", 4) },
      { kind: "error", title: "Error Identification", pointsEach: 2, questionIds: ids("x3-err", 2) },
      { kind: "coding", title: "Practical Coding", pointsEach: 6, questionIds: ids("x3-code", 2) },
    ],
  },
  {
    id: "exam-4",
    number: 4,
    title: "Types, Combined Conditions and Running Totals",
    difficulty: "medium",
    durationMinutes: 30,
    description:
      "A medium exam on data types and conversion, conditions joined with and/or, nested decisions, multiplication-table and running-total while loops, and a discount program.",
    sections: [
      { kind: "mcq", title: "Multiple Choice", pointsEach: 2, questionIds: ids("x4-mcq", 8) },
      { kind: "tracing", title: "Code Tracing", pointsEach: 2, questionIds: ids("x4-tr", 4) },
      { kind: "error", title: "Error Identification", pointsEach: 2, questionIds: ids("x4-err", 2) },
      { kind: "coding", title: "Practical Coding", pointsEach: 6, questionIds: ids("x4-code", 2) },
    ],
  },
];
