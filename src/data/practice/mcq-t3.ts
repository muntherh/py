import type { PracticeMcq } from "../types";

// Topic 3 — Conditional Execution. Practice multiple-choice bank.
// Every "answerIsOutput" key is the real stdout of `code` (checked by scripts/verify-curriculum.ts).

export const MCQ_T3: PracticeMcq[] = [
  // ------------------------------------------------------------ lesson-t3-if
  {
    id: "pm-t3-001",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [16], note: "Big-number example: unindented print always runs" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `x = 100
if x > 1000:
    print(x, "is a big number")
print("End!")`,
    options: ["100 is a big number\nEnd!", "End!", "100 is a big number", "Nothing is printed"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "100 > 1000 is False, so the indented print is skipped. The last line print(\"End!\") is not indented, so it is outside the if-block and always runs (slide 16). The answer \"100 is a big number\" would only appear if x were bigger than 1000.",
  },
  {
    id: "pm-t3-002",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [6, 7], note: "if syntax: condition, colon, comparison operators" }],
    origin: "original",
    prompt: "Which line correctly starts an if statement that checks whether x is equal to 10?",
    options: ["if x = 10:", "if x == 10 then:", "if x == 10:", "if x == 10"],
    answer: 2,
    explanation:
      "An if line needs three things: the lowercase keyword if, a Boolean condition, and a colon at the end (slide 6). Equality is tested with == (slide 7). `if x = 10:` uses assignment instead of comparison (SyntaxError), Python has no then keyword, and `if x == 10` is missing the colon.",
  },
  {
    id: "pm-t3-003",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [14], note: "Several statements in one if-block" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `x = 50
y = 100
if x > y:
    print("x is big")
    print("y is small")
print("done")`,
    options: ["x is big\ny is small\ndone", "y is small\ndone", "x is big\ndone", "done"],
    answerIsOutput: true,
    answer: 3,
    explanation:
      "50 > 100 is False. Both print lines have the same indentation, so both belong to the if-block (slide 14) and both are skipped together. Only the unindented print(\"done\") runs. A common mistake is to think only the first indented line belongs to the if, which would give \"y is small\" and \"done\".",
  },
  {
    id: "pm-t3-004",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [8, 16], note: "Block runs only when True; unindented lines always run" }],
    origin: "original",
    prompt: "What is the output of this program?",
    code: `x = 5
if x > 0:
    print("A")
print("B")
if x > 10:
    print("C")
print("D")`,
    options: ["A\nB\nC\nD", "A\nB\nD", "A\nD", "B\nD"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "These are two separate if statements. 5 > 0 is True, so \"A\" is printed. \"B\" is not indented, so it always runs. 5 > 10 is False, so \"C\" is skipped. \"D\" is not indented, so it always runs. Result: A, B, D.",
  },
  {
    id: "pm-t3-005",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [17], note: "Quiz score exercise: higher than or equal to 7.5" }],
    origin: "adapted",
    prompt:
      'A quiz program uses `if score >= 7.5:` before printing "congratulation on your good score". Which score does NOT get the message?',
    options: ["7.5", "8", "7.49", "10"],
    answer: 2,
    explanation:
      ">= means \"greater than or equal to\", so 7.5 itself passes the test (7.5 >= 7.5 is True), and so do 8 and 10. Only 7.49 is below 7.5, so for 7.49 the condition is False and the message is skipped.",
  },
  {
    id: "pm-t3-006",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [6], note: "The if statement ends with a colon" }],
    origin: "original",
    prompt: "What happens when this program is run?",
    code: `x = 3
if x > 0
    print("positive")`,
    options: [
      "It prints positive",
      "SyntaxError, because the if line does not end with a colon",
      "IndentationError, because the print line is indented",
      "Nothing is printed, because the condition is skipped",
    ],
    answer: 1,
    explanation:
      "Slide 6: we end the if statement with a colon (:). Without it, Python cannot read the program at all and reports SyntaxError: expected ':' before anything runs, so nothing is printed. The indentation of print is correct — it is the missing colon that is wrong.",
  },

  // ------------------------------------------------------------ lesson-t3-if-else
  {
    id: "pm-t3-007",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [25], note: "Odd or even with %" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `num = 7
if num % 2 == 0:
    print("Given number is Even")
else:
    print("Given number is Odd")`,
    options: ["Given number is Odd", "Given number is Even", "Given number is Even\nGiven number is Odd", "1"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "7 % 2 is the remainder of 7 divided by 2, which is 1. 1 == 0 is False, so the else block runs and prints \"Given number is Odd\". In an if…else exactly one of the two blocks runs, never both.",
  },
  {
    id: "pm-t3-008",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [26], note: "Exercise: greater or less than 50" }],
    origin: "adapted",
    prompt: "This is the slide 26 program with the input replaced by x = 50. What does it print?",
    code: `x = 50
if x < 50:
    print('the number you entered is smaller than 50')
else:
    print('the number you entered is greater than 50')`,
    options: [
      "the number you entered is smaller than 50",
      "the number you entered is greater than 50",
      "Nothing is printed",
      "the number you entered is smaller than 50\nthe number you entered is greater than 50",
    ],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "50 < 50 is False, so the else block runs. The else block catches every case where the condition is False — including the boundary value 50. So the program prints \"greater than 50\", which is not true. This is a bug in the slide: the message should say \"50 or greater\", or a third branch (elif) should handle 50.",
  },
  {
    id: "pm-t3-009",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [21], note: "if…else syntax" }],
    origin: "original",
    prompt: "Which line correctly starts the else part of an if…else statement?",
    options: ["else", "else x >= 50:", "else if:", "else:"],
    answer: 3,
    explanation:
      "Slide 21: we end the if statement and the else with a colon. else never takes a condition — it simply runs when the if condition is False. `else` without a colon and `else x >= 50:` both cause a SyntaxError, and `else if` is not how Python writes another condition (it uses elif).",
  },
  {
    id: "pm-t3-010",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [20], note: "Two possibilities; the condition decides which runs" }],
    origin: "original",
    prompt: "Each time an if…else statement runs, how many of its two blocks are executed?",
    options: ["Exactly one of them", "Both of them, one after the other", "None of them when the condition is False", "Only the if block, and the else block is optional"],
    answer: 0,
    explanation:
      "Slide 20: alternative execution has two possibilities and the condition decides which one is executed. If the condition is True the if block runs; otherwise the else block runs. So exactly one block runs — never both and never neither.",
  },
  {
    id: "pm-t3-011",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [21], note: "Indented lines after else form the else block" }],
    origin: "original",
    prompt: "What is the output of this program?",
    code: `x = 4
if x > 5:
    print("big")
else:
    print("small")
    print("checked")
print("end")`,
    options: ["small\nend", "small\nchecked\nend", "big\nend", "checked\nend"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "4 > 5 is False, so the else block runs. Both indented lines under else belong to that block, so \"small\" and \"checked\" are printed. print(\"end\") is not indented, so it runs after the whole if…else in every case.",
  },
  {
    id: "pm-t3-012",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-if-else"],
    difficulty: "hard",
    sources: [{ file: "topic3", units: [22, 25], note: "Remainder test with % in an if…else" }],
    origin: "original",
    prompt: "What is the output of this program?",
    code: `a = 10
b = 3
if a % b == 0:
    print(a // b)
else:
    print(a % b)
print(a / b > 3)`,
    options: ["3\nTrue", "1\nFalse", "1\nTrue", "3.3333333333333335\nTrue"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "10 % 3 is 1, and 1 == 0 is False, so the else block prints a % b, which is 1. The if block (a // b = 3) is skipped. The last line is outside the if…else: 10 / 3 is 3.333…, and 3.333… > 3 is True, so it prints True.",
  },

  // ------------------------------------------------------------ lesson-t3-conditional-expression
  {
    id: "pm-t3-013",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [28], note: "Result = 100 if x>=10 else 200" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `x = 9
Result = 100 if x >= 10 else 200
print(Result)`,
    options: ["200", "100", "Result", "100\n200"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "The condition x >= 10 is checked first. 9 >= 10 is False, so the whole expression takes the value after else, which is 200. On slide 28 x is 10, so the condition is True and the result there is 100.",
  },
  {
    id: "pm-t3-014",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "easy",
    sources: [{ file: "lab-ch3-ii", units: [19, 20], note: "Pass if 50 or higher, otherwise Fail" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `score = 49
result = 'Pass' if score >= 50 else 'Fail'
print(result)`,
    options: ["Fail", "Pass", "False", "49"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "49 >= 50 is False, so result gets the value after else: 'Fail'. A conditional expression gives back one of its two values, not True or False, so \"False\" is not printed.",
  },
  {
    id: "pm-t3-015",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [27, 30], note: "Syntax <expr1> if <conditional_expr> else <expr2>" }],
    origin: "original",
    prompt: "Which line is a valid conditional expression?",
    options: [
      "s = 'minor' if age < 21",
      "s = if age < 21 'minor' else 'adult'",
      "s = 'minor' if age < 21 else 'adult'",
      "s = 'minor' if age < 21: else 'adult'",
    ],
    answer: 2,
    explanation:
      "Slide 27 gives the pattern <expr1> if <conditional_expr> else <expr2>: the first value, then if and the condition, then else and the second value. The else part is required (without it Python says expected 'else' after 'if' expression), the value must come before if, and there are no colons inside a conditional expression.",
  },
  {
    id: "pm-t3-016",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [30], note: "Age exercise ends with a bare s" }],
    origin: "source",
    prompt:
      "Slide 30's program ends with a bare `s` on the last line instead of `print(s)`. The user types 12. If the code is saved in a .py file and run as a normal script (not in a Jupyter notebook), what appears after the prompt line?",
    code: `age = int(input("Please enter your age: "))
s = 'minor' if age < 21 else 'adult'
s`,
    options: ["'minor'", "minor", "adult", "Nothing is displayed after the prompt line"],
    answer: 3,
    explanation:
      "In a script, a line that is only an expression (like s) is evaluated but not displayed. Only print() writes output. The slide shows 'minor' because Jupyter automatically displays the value of the last line of a cell. To show the result in any program, write print(s).",
  },
  {
    id: "pm-t3-017",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "hard",
    sources: [{ file: "topic3", units: [27, 28], note: "Conditional expression evaluates to expr1 or expr2" }],
    origin: "original",
    prompt: "What is the output of this program?",
    code: `x = 5
y = x * 2 if x > 3 else x + 2
z = y - 1 if y > 10 else y + 1
print(y, z)`,
    options: ["10 9", "10 11", "7 8", "7 6"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "Line 2: 5 > 3 is True, so y = x * 2 = 10. Line 3: 10 > 10 is False (10 is not greater than itself), so z = y + 1 = 11. The tempting answer \"10 9\" forgets that > is strict.",
  },
  {
    id: "pm-t3-018",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-conditional-expression"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [29], note: "Weather example with a Boolean variable" }],
    origin: "source",
    prompt: "What is the output of this program?",
    code: `raining = True
weather = "Let's go to the beach" if raining else "Let's go to the library"
print(weather)`,
    options: ["Let's go to the library", "True", "Let's go to the beach", "Let's go to the beach\nLet's go to the library"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "raining is True, so the expression takes the first value, \"Let's go to the beach\". The variable raining is already a Boolean, so it can be used directly as the condition. (The slide really does send you to the beach when it rains — the code matches the slide's text.)",
  },

  // ------------------------------------------------------------ lesson-t3-elif
  {
    id: "pm-t3-019",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [35], note: "x less, greater or equal to y" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `x = 7
y = 7
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')`,
    options: ["x is less than y", "x and y are equal", "x is greater than y", "Nothing is printed"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "7 < 7 is False and 7 > 7 is False, so neither the if nor the elif block runs. When no condition is True, the else block runs and prints \"x and y are equal\".",
  },
  {
    id: "pm-t3-020",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [33], note: "elif replaces else if" }],
    origin: "original",
    prompt: 'Which keyword does Python use to add another condition after an if (meaning "else if")?',
    options: ["elseif", "else if", "elif", "elsif"],
    answer: 2,
    explanation:
      "Slide 33: elif is the keyword used in Python in place of else if. Writing else if on one line or elseif gives a SyntaxError.",
  },
  {
    id: "pm-t3-021",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [32, 33], note: "Chained conditionals: flow and syntax" }],
    origin: "original",
    prompt: "Which statement about an if…elif…else chain is true?",
    options: [
      "Python runs every block whose condition is True",
      "Python runs only the first block whose condition is True",
      "The else part must always be written",
      "Only one elif is allowed after an if",
    ],
    answer: 1,
    explanation:
      "The tests are checked from top to bottom; the first one that is True has its block run and the rest of the chain is skipped (slide 32). Slide 33 says any number of elif parts can be used and the else part is optional.",
  },
  {
    id: "pm-t3-022",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "topic3", units: [38], note: "Grade exercise" },
      { file: "pe3", units: [1], item: "4", note: "Marks to grade table" },
    ],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `mark = 80
if mark >= 90:
    print("A")
elif mark >= 80:
    print("B")
elif mark >= 70:
    print("C")
else:
    print("F")`,
    options: ["A", "C", "B\nC", "B"],
    answerIsOutput: true,
    answer: 3,
    explanation:
      "80 >= 90 is False. 80 >= 80 is True (>= includes 80), so \"B\" is printed and the rest of the chain is skipped. Even though 80 >= 70 is also True, that block never runs, so \"C\" is not printed.",
  },
  {
    id: "pm-t3-023",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [32, 38], note: "First True test wins; grade ranges" }],
    origin: "original",
    prompt: "A student wrote the grade conditions in this order. What is the output?",
    code: `mark = 95
if mark >= 60:
    print("D")
elif mark >= 90:
    print("A")
else:
    print("F")`,
    options: ["A", "D", "D\nA", "F"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "Python stops at the first True condition. 95 >= 60 is True, so \"D\" is printed and the elif is never checked. That is why the order matters: check the highest threshold (>= 90) first and work down.",
  },
  {
    id: "pm-t3-024",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "medium",
    sources: [
      { file: "pe3", units: [1], item: "5", note: "Calculator by user's choice" },
      { file: "lab-ch3-iiii", units: [14], note: "Solution to Q5" },
    ],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `num1 = 7.0
num2 = 2.0
choice = 4
if choice == 1:
    print('Result', num1 + num2)
elif choice == 2:
    print('Result', num1 - num2)
elif choice == 3:
    print('Result', num1 * num2)
elif choice == 4:
    print('Result', num1 % num2)
elif choice == 5:
    print('Result', num1 / num2)
else:
    print('Error')`,
    options: ["Result 3.5", "Error", "Result 1.0", "Result 14.0"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "choice == 4 is the first True condition, so the modulus branch runs. 7.0 % 2.0 is the remainder 1.0 (a float, because both numbers are floats). \"Result 3.5\" would be choice 5 (division).",
  },
  {
    id: "pm-t3-025",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [33], note: "elif chain: only one branch runs" },
      { file: "lab-ch3-ii", units: [29, 31], note: "Bonus marks by study hours (uses elif)" },
    ],
    origin: "adapted",
    prompt:
      "The lab's bonus program uses if…elif…else. A student rewrote it with two separate if statements. What does this version print?",
    code: `hours = 6
bonus = 0
if hours >= 5:
    bonus = bonus + 10
if hours >= 3:
    bonus = bonus + 5
print(bonus)`,
    options: ["10", "5", "0", "15"],
    answerIsOutput: true,
    answer: 3,
    explanation:
      "These are two independent if statements, so both are checked. 6 >= 5 is True (bonus becomes 10) and 6 >= 3 is also True (bonus becomes 15). With elif, as in the lab, the second test would be skipped after the first True one and the bonus would be 10.",
  },
  {
    id: "pm-t3-026",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif", "t3-logical-conditions"],
    difficulty: "hard",
    sources: [{ file: "topic3", units: [37], note: "Largest of three numbers with strict >" }],
    origin: "adapted",
    prompt: "This is the slide 37 program with the inputs replaced by a = 5, b = 5, c = 3. What does it print?",
    code: `a = 5
b = 5
c = 3
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")`,
    options: ["a is greater", "b is greater", "c is greater", "a is greater\nb is greater"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "a > b is 5 > 5, which is False, so the first and-condition is False. b > a is also False, so the elif is False too. The else runs and prints \"c is greater\" — which is wrong, because 3 is the smallest. The slide's program fails when the two largest numbers are equal. Using >= (as the lab solution does) fixes it.",
  },
  {
    id: "pm-t3-027",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-elif"],
    difficulty: "hard",
    sources: [{ file: "lab-ch3-iiii", units: [12], note: "Grade chain with upper limits" }],
    origin: "adapted",
    prompt: "This grade chain is taken from the lab solution. What happens when total is 89.5?",
    code: `total = 89.5
if total >= 90:
    Grade = 'A'
elif total >= 80 and total <= 89:
    Grade = 'B'
elif total >= 70 and total <= 79:
    Grade = 'C'
elif total >= 60 and total <= 69:
    Grade = 'D'
elif total < 60:
    Grade = 'F'
print('Your grade = ', Grade)`,
    options: [
      "It prints Your grade = B, because 89.5 is in the 80s",
      "It prints Your grade = A, because 89.5 rounds up to 90",
      "It stops with a NameError",
      "It prints Your grade = F, because the last elif catches the rest",
    ],
    answer: 2,
    explanation:
      "89.5 is not >= 90 and it is not <= 89, so it falls in the gap between the ranges. No condition is True and there is no else, so Grade is never given a value, and print raises NameError: name 'Grade' is not defined. Writing the chain as >= 90, >= 80, >= 70, >= 60, else (no upper limits) leaves no gaps.",
  },

  // ------------------------------------------------------------ lesson-t3-logical-conditions
  {
    id: "pm-t3-028",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions"],
    difficulty: "easy",
    sources: [{ file: "lab-ch3-iii", units: [11, 12], note: "Discount when amount > 50 and member" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `amount = 50
member = "yes"
if amount > 50 and member == "yes":
    print("Discount")
else:
    print("No discount")`,
    options: ["No discount", "Discount", "Discount\nNo discount", "Nothing is printed"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "and needs both sides to be True. member == \"yes\" is True, but 50 > 50 is False (the rule is \"more than 50\"), so the whole condition is False and the else block prints \"No discount\".",
  },
  {
    id: "pm-t3-029",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions"],
    difficulty: "easy",
    sources: [{ file: "topic3", units: [7], note: "Conditions use comparison and logical operators" }],
    origin: "original",
    prompt: "Which condition is True only when x is from 1 to 9 (both included)?",
    options: ["x >= 1 and <= 9", "x >= 1 or x <= 9", "x > 1 and x < 9", "x >= 1 and x <= 9"],
    answer: 3,
    explanation:
      "Each side of and must be a full comparison, so x must be written twice; `x >= 1 and <= 9` is a SyntaxError. `x > 1 and x < 9` leaves out 1 and 9, because > and < do not include the end values. `or` would be True for every number, because every number is >= 1 or <= 9. (Also remember: and must be lowercase — slide 7 writes AND in capitals, which Python rejects.)",
  },
  {
    id: "pm-t3-030",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-ii", units: [10, 11], note: "Online/offline class task and the buggy solution" },
      { file: "topic3", units: [7], note: "Condition must be a Boolean expression" },
    ],
    origin: "source",
    prompt: "Spot the bug. This code comes from a lab notebook. What does it print?",
    code: `case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')`,
    options: ["Stay on Campus", "Attend the online class!", "Attend the online class!\nStay on Campus", "True"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "A string is never equal to the Boolean value True, so 'raining' == True is False and 'no transport' == True is False. False or False is False, so the else block always runs, whatever the weather. The fix is to compare the string with the text you expect, e.g. case1 == 'raining'.",
  },
  {
    id: "pm-t3-031",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions"],
    difficulty: "medium",
    sources: [{ file: "lab-ch3-ii", units: [10, 12], note: "Raining or no transport → online class" }],
    origin: "adapted",
    prompt:
      'The lab task says: "If it is raining or there is no transport, attend the online class." Which condition matches this rule exactly?',
    options: [
      "case1 == 'raining' or case2 == 'no transport'",
      "case1 == 'raining' and case2 == 'no transport'",
      "case1 == True or case2 == True",
      "case1 or case2 == 'no transport'",
    ],
    answer: 0,
    explanation:
      "\"Raining or no transport\" means either fact alone is enough, so the operator is or, and each side compares a variable with the expected text. With and, a student who has no transport on a dry day would wrongly stay on campus. Comparing with True is always False for strings, and `case1 or case2 == 'no transport'` does not compare case1 with anything.",
  },
  {
    id: "pm-t3-032",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-elif"],
    difficulty: "medium",
    sources: [{ file: "lab-ch4-iiii", units: [1, 2], note: "Rainfall decision with elif and or" }],
    origin: "adapted",
    prompt: "What is the output of this program?",
    code: `day1 = 5
day2 = 5
day3 = 41
total = day1 + day2 + day3
avg = total / 3
if avg >= 30:
    print('physical classes are canceled')
elif avg >= 20 or day1 >= 40 or day2 >= 40 or day3 >= 40:
    print('Weather conditions require further assessment.')
elif total < 15:
    print('Rainfall has been low over the three days.')
else:
    print('Physical classes can proceed.')`,
    options: [
      "physical classes are canceled",
      "Physical classes can proceed.",
      "Rainfall has been low over the three days.",
      "Weather conditions require further assessment.",
    ],
    answerIsOutput: true,
    answer: 3,
    explanation:
      "total is 51 and avg is 17.0. avg >= 30 is False. In the elif, avg >= 20 is False, but day3 >= 40 is True, and or needs only one True part, so the second message is printed. The later branches are not checked.",
  },
  {
    id: "pm-t3-033",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-logical-conditions", "t3-if-else"],
    difficulty: "hard",
    sources: [
      { file: "topic3", units: [7], note: "Logical operators in conditions" },
      { file: "topic3", units: [21], note: "if…else" },
    ],
    origin: "original",
    prompt: "What is the output of this program?",
    code: `x = 15
if x > 10 and x < 20 or x == 0:
    print("A")
else:
    print("B")
if not x > 10:
    print("C")
else:
    print("D")`,
    options: ["A\nD", "A\nC", "B\nD", "A"],
    answerIsOutput: true,
    answer: 0,
    explanation:
      "and is evaluated before or: (15 > 10 and 15 < 20) is True, so True or (15 == 0) is True and \"A\" is printed. Then x > 10 is True, so not x > 10 is False and the else prints \"D\". The two if…else statements are separate, so each prints one line.",
  },

  // ------------------------------------------------------------ lesson-t3-nested
  {
    id: "pm-t3-034",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "easy",
    sources: [{ file: "lab-ch3-iii", units: [16, 17], note: "if inside another if" }],
    origin: "source",
    prompt: "What is the output of this program?",
    code: `x = 1
y = 2

if x > y:
    print(x)
    if y > x:
        print(y)`,
    options: ["1\n2", "1", "2", "Nothing is printed"],
    answer: 3,
    explanation:
      "1 > 2 is False, so the whole outer block is skipped — including the inner if. The inner condition y > x is never even checked. An inner if can only run when the outer condition is True.",
  },
  {
    id: "pm-t3-035",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [43], note: "if…else inside the else branch" }],
    origin: "adapted",
    prompt: "This is the slide 43 program with different values. What is the output?",
    code: `x = 20
y = 10
if x == y:
    print("equal")
else:
    if x < y:
        print("less")
    else:
        print("greater")`,
    options: ["equal", "less", "greater", "less\ngreater"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "20 == 10 is False, so the outer else runs. Inside it, 20 < 10 is False, so the inner else runs and prints \"greater\".",
  },
  {
    id: "pm-t3-036",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [{ file: "topic3", units: [46], note: "Basketball / football example" }],
    origin: "adapted",
    prompt: "This is the slide 46 program with n = 15. What is the output?",
    code: `n = 15
if n <= 15:
    if n == 10:
        print("play football")
    else:
        print("play basketball")
else:
    print("Don't play game")`,
    options: ["play football", "play basketball", "Don't play game", "play basketball\nDon't play game"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "15 <= 15 is True (<= includes 15), so the outer if block runs. Inside it, 15 == 10 is False, so the inner else prints \"play basketball\". The outer else is skipped.",
  },
  {
    id: "pm-t3-037",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "hard",
    sources: [{ file: "lab-ch3-iiii", units: [16, 17], note: "Attendance and mark: else must belong to the outer if" }],
    origin: "adapted",
    prompt: "A student indented the else one level too far. What does this program print?",
    code: `attendance = 60
mark = 80
if attendance >= 75:
    if mark >= 50:
        print("Passed")
    else:
        print("Not Eligible")
print("Done")`,
    options: ["Not Eligible\nDone", "Passed\nDone", "Done", "Not Eligible"],
    answerIsOutput: true,
    answer: 2,
    explanation:
      "The else is lined up with the inner if, so it belongs to the inner if, not the outer one. 60 >= 75 is False, so the whole outer block (inner if and its else) is skipped and only \"Done\" is printed. In the lab solution the else is lined up with the outer if, so low attendance prints \"Not Eligible\".",
  },
  {
    id: "pm-t3-038",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "hard",
    sources: [{ file: "topic3", units: [47, 48], note: "Shirt size exercise and solution" }],
    origin: "adapted",
    prompt: "This shirt-size program (from slide 48, typo fixed) is run with h = 5 and w = 100. What is the output?",
    code: `h = 5
w = 100
r = w / h
if r > 5:
    if r > 20:
        print("Size XXL")
    else:
        print("Size L")
else:
    if r > 3:
        print("Size M")
    else:
        print("Size S")`,
    options: ["Size XXL", "Size L", "Size M", "Size S"],
    answerIsOutput: true,
    answer: 1,
    explanation:
      "r = 100 / 5 = 20.0. 20.0 > 5 is True, so the outer if block runs. Inside, 20.0 > 20 is False (> is strict), so the inner else prints \"Size L\". Boundary values like exactly 20 are where > and >= give different answers.",
  },
  {
    id: "pm-t3-039",
    kind: "mcq",
    topicId: "t3",
    conceptIds: ["t3-nested"],
    difficulty: "medium",
    sources: [
      { file: "lab-ch3-iiii", units: [27, 28], note: "Tax calculator solution" },
      { file: "topic3", units: [49], note: "Tax table" },
    ],
    origin: "adapted",
    prompt: "This is the tax part of the lab's tax calculator. What is the output when salary is 500?",
    code: `salary = 500
if salary <= 500:
    tax = salary * 0.05
else:
    if salary <= 1000:
        tax = salary * 0.10
    else:
        tax = salary * 0.15
print(tax)`,
    options: ["50.0", "75.0", "500", "25.0"],
    answerIsOutput: true,
    answer: 3,
    explanation:
      "500 <= 500 is True, so the 5% branch runs: 500 * 0.05 = 25.0 (a float, because 0.05 is a float). The else block with the nested if is skipped. The slide 49 table lists 500 in both the 5% and 10% rows; this code settles it by putting 500 in the 5% group.",
  },
];
