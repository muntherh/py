import type { Lesson } from "../types";

// Topic 3 — Conditional Execution (slides 1–50, Practice Exercises III, Ch3 labs, Ch4 lab cells 1–2).
// Example outputs are real terminal transcripts, verified by scripts/verify-curriculum.ts.

export const TOPIC3_LESSONS: Lesson[] = [
  // ================================================================ 1. if
  {
    id: "lesson-t3-if",
    topicId: "t3",
    order: 1,
    title: "Conditional execution: the if statement",
    conceptIds: ["t3-if"],
    sources: [{ file: "topic3", units: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] }],
    explanation: [
      {
        heading: "What is conditional execution?",
        body: [
          "Normally Python runs a program line by line, from top to bottom. This is called sequential flow. Conditional execution lets a program **check a condition** and then either run some statements or skip them.",
          "A condition is a question whose answer is **True** or **False**. The slides use a real-life example: the condition is \"the weather is nice\". If it is True, you go to the beach. If it is not, you do not go.",
          "Because the condition decides which statements run, the if statement is called a decision-making statement. It is used to control the flow of execution.",
        ],
        source: { file: "topic3", units: [3, 4, 5], note: "Definition, weather example, sequential vs conditional flow" },
      },
      {
        heading: "The syntax of an if statement",
        body: [
          "An if statement has two parts: the `if` line and the indented block under it.",
          "The slides use the Tab key to indent. Python also accepts spaces, and 4 spaces is the most common choice. What matters is that every line in the block uses the **same** indentation.",
        ],
        bullets: [
          "The Boolean expression after `if` is called the **condition**.",
          "The `if` line ends with a **colon** `:`.",
          "The statements that run when the condition is True are **indented**.",
        ],
        source: { file: "topic3", units: [6], note: "Syntax: condition, colon, indentation" },
      },
      {
        heading: "The condition is a Boolean expression",
        body: [
          "The condition must give True or False. You build it with the comparison operators from Topic 2, and you can join several comparisons with the logical operators `and`, `or` and `not`.",
          "The indented statements run **only if the condition returns True**. Remember that `==` compares two values, while a single `=` stores a value in a variable.",
          "The table shows each comparison operator with x = 10.",
        ],
        table: {
          headers: ["Operator", "Meaning", "Example", "Result"],
          rows: [
            ["`==`", "equal to", "`x == 10`", "True"],
            ["`!=`", "not equal to", "`x != 10`", "False"],
            ["`<`", "less than", "`x < 5`", "False"],
            ["`<=`", "less than or equal to", "`x <= 10`", "True"],
            ["`>`", "greater than", "`x > 0`", "True"],
            ["`>=`", "greater than or equal to", "`x >= 11`", "False"],
          ],
        },
        source: { file: "topic3", units: [7, 8], note: "Condition is a Boolean expression; block runs only if True" },
      },
      {
        heading: "From a flowchart to code",
        body: [
          "Before writing an if statement, ask two questions. **What is the condition to be checked?** For \"is x positive?\" the condition is `x > 0`. **What will happen if the condition is True?** Print \"x is positive\".",
          "In the flowchart, the True arrow goes to the print box (the statement is executed). The False arrow goes straight down, past the box (the statement is skipped). Slides 11 and 12 use the same pattern with `x < 0` and `x < y`.",
        ],
        source: { file: "topic3", units: [9, 10, 11, 12], note: "Positive / negative / x less than y examples" },
      },
      {
        heading: "A block can hold several statements",
        body: [
          "You can put more than one statement after an if. All the statements at the matching indentation level are part of the same block, called the **if-block**. They all run together when the condition is True, and they are all skipped together when it is False.",
        ],
        source: { file: "topic3", units: [14], note: "Two print statements in one if-block" },
      },
      {
        heading: "Unindented statements always run",
        body: [
          "The first line **without** indentation after the block is not part of the if. It runs every time, whether the condition was True or False.",
          "This is how the exercises print a closing message for every user, such as \"End!\", \"thank you for sharing your score\" or a thank-you for the airline customer.",
        ],
        source: { file: "topic3", units: [16, 17, 18], note: "print(\"End!\") always executed; exercises" },
      },
    ],
    keyPoints: [
      "`if condition:` runs the indented block only when the condition is True; when it is False the block is skipped.",
      "The condition is a Boolean expression built with comparison operators (`==`, `!=`, `<`, `<=`, `>`, `>=`) and, if needed, `and`, `or`, `not`.",
      "The `if` line must end with a colon `:`.",
      "Every statement in the block must have the same indentation.",
      "The first unindented line after the block is outside the if, so it always runs.",
      "Use `==` to compare. A single `=` inside a condition is a SyntaxError.",
    ],
    examples: [
      {
        title: "Is x positive?",
        code: `x = 10
if x > 0:
    print("x is positive")`,
        output: "x is positive",
        lineNotes: [
          { line: 1, text: "x is given the value 10." },
          { line: 2, text: "The condition x > 0 is checked. 10 > 0 is True. The line ends with a colon." },
          { line: 3, text: "This line is indented, so it belongs to the if. It runs because the condition is True." },
        ],
        source: { file: "topic3", units: [10], note: "x=10, if x>0" },
        origin: "source",
      },
      {
        title: "Two statements in one if-block",
        code: `x = 500
y = 100
if x > y:
    print("x is big")
    print("y is small")`,
        output: "x is big\ny is small",
        lineNotes: [
          { line: 3, text: "500 > 100 is True, so the whole block runs." },
          { line: 4, text: "First statement of the block." },
          { line: 5, text: "Same indentation as line 4, so it is part of the same if-block." },
        ],
        source: { file: "topic3", units: [14], note: "if-block with two statements" },
        origin: "source",
      },
      {
        title: "A big number? The last line always runs",
        code: `x = int(input("Enter a number: "))
if x > 1000:
    print(f"{x} is a big number")
print("End!")`,
        inputs: ["100"],
        output: "Enter a number: 100\nEnd!",
        lineNotes: [
          { line: 1, text: "input() reads text; int() turns it into a whole number." },
          { line: 2, text: "100 > 1000 is False, so the indented line is skipped." },
          { line: 3, text: "Skipped this time. With the input 2000 it would print \"2000 is a big number\"." },
          { line: 4, text: "Not indented, so it is outside the if and always runs." },
        ],
        source: { file: "topic3", units: [16], note: "Bigger than 1000; print(\"End!\") always executed" },
        origin: "source",
      },
      {
        title: "Quiz score: the boundary value 7.5",
        code: `score = float(input("What is your score in Quiz 1: "))
if score >= 7.5:
    print("congratulation on your good score")
print("thank you for sharing your score")`,
        inputs: ["7.5"],
        output: "What is your score in Quiz 1: 7.5\ncongratulation on your good score\nthank you for sharing your score",
        lineNotes: [
          { line: 1, text: "float() is used because a score can have a decimal part, such as 7.5." },
          { line: 2, text: ">= means \"higher than or equal to\", so 7.5 itself passes: 7.5 >= 7.5 is True." },
          { line: 4, text: "Unindented, so this message is shown to every student." },
        ],
        source: { file: "topic3", units: [17], note: "Quiz 1 exercise (no solution code on the slide)" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Forgetting the colon",
        wrong: `if x > 0
    print("x is positive")`,
        right: `if x > 0:
    print("x is positive")`,
        explanation: "The if line must end with a colon. Without it Python stops before running anything and reports SyntaxError: expected ':'.",
      },
      {
        title: "Not indenting the block",
        wrong: `if x > 0:
print("x is positive")`,
        right: `if x > 0:
    print("x is positive")`,
        explanation: "Python needs at least one indented statement after the colon. Without it you get IndentationError: expected an indented block after 'if' statement.",
      },
      {
        title: "Using = instead of ==",
        wrong: `if x = 10:
    print("ten")`,
        right: `if x == 10:
    print("ten")`,
        explanation: "A single = is assignment, not comparison. Python reports a SyntaxError and even suggests: Maybe you meant '==' instead of '='?",
      },
      {
        title: "Indenting a line that should always run",
        wrong: `if x > 1000:
    print(x, "is a big number")
    print("End!")`,
        right: `if x > 1000:
    print(x, "is a big number")
print("End!")`,
        explanation: "Indentation decides what belongs to the block. In the wrong version \"End!\" is part of the if-block, so it is only printed for big numbers.",
      },
    ],
    tryIt: {
      prompt:
        "Airline luggage (slide 18): ask the user how many pounds their suitcase weighs. If the weight is higher than 50, print a warning that there is a $25 charge. At the end, always thank the user for their business.",
      starterCode: `weight = float(input("How many pounds does your suitcase weigh? "))
# If weight is higher than 50, print the $25 warning (indented)

# Always thank the user (not indented)
`,
      inputsHint: "Try 60 (warning and thank-you) and then 45 (thank-you only). What happens with exactly 50?",
    },
    quickCheck: ["pm-t3-001", "pm-t3-003", "pm-t3-006"],
    sourceNotes: [
      "Slide 7 shows the logical operators in capitals (AND, OR, NOT). Python keywords are lowercase: `and`, `or`, `not`. Writing `if x > 0 AND x < 10:` gives a SyntaxError.",
      "Slide 6 says to indent with the Tab key. Python also accepts spaces; the rule is that all lines of a block use the same indentation (4 spaces is the usual style).",
      "The flowcharts on slides 9 and 10 use curly quotes ‘ ’ in `print(‘x is positive’)`. Python needs straight quotes, as in the code on slide 10.",
      "Slide 17 has two sample runs hidden under a white box. One hidden run shows the congratulation message for a score of 7, which contradicts the written rule (7.5 or more). This lesson follows the written rule: 7 does not get the message.",
      "Example 3 leaves out a trailing space that slide 16 has inside its f-string (`f\"{x} is a big number \"`); the space is invisible in the output anyway.",
    ],
  },

  // ================================================================ 2. if…else
  {
    id: "lesson-t3-if-else",
    topicId: "t3",
    order: 2,
    title: "Alternative execution: if…else",
    conceptIds: ["t3-if-else"],
    sources: [{ file: "topic3", units: [19, 20, 21, 22, 23, 24, 25, 26] }],
    explanation: [
      {
        heading: "Two possible paths",
        body: [
          "Alternative execution means there are **two possibilities**, and the condition decides which one is executed. If the condition is True, the first group of statements runs. If it is False, the second group runs.",
          "So in an if…else, **exactly one** of the two blocks runs every time: never both, and never neither.",
        ],
        source: { file: "topic3", units: [20], note: "Alternative execution flowchart" },
      },
      {
        heading: "The syntax of if…else",
        body: [
          "`else` lines up with its `if` (same indentation) and has **no condition** of its own. It simply means \"in every other case\".",
        ],
        bullets: [
          "The Boolean expression after `if` is the condition.",
          "Both the `if` line and the `else` line end with a colon `:`.",
          "The lines under `if` (the True part) and under `else` (the False part) are indented.",
        ],
        source: { file: "topic3", units: [21], note: "if…else syntax" },
      },
      {
        heading: "Even or odd: from flowchart to code",
        body: [
          "The modulus operator `%` gives the remainder of a division. A number is even when the remainder after dividing by 2 is 0, so the condition is `x % 2 == 0`.",
          "In the flowchart the True arrow leads to `print('x is even')` and the False arrow to `print('x is odd')`. In code, the True part goes under `if` and the False part goes under `else`.",
        ],
        source: { file: "topic3", units: [22, 23], note: "Even/odd flowchart and code" },
      },
      {
        heading: "if…else with user input",
        body: [
          "Slides 24 and 25 read a number with `int(input(...))` and use if…else to choose a message: \"one digit\" or not, and even or odd.",
          "Make sure each message is true for **every** value that reaches it. In slide 24 the else part prints \"number is two digits\" for every number from 10 upwards, so 100 or 5000 would also be called \"two digits\". A message such as \"two or more digits\" is accurate.",
        ],
        source: { file: "topic3", units: [24, 25], note: "Single digit check; odd or even" },
      },
      {
        heading: "Watch the boundary value",
        body: [
          "The else block catches **every** value for which the condition is False, including the boundary value itself.",
          "In slide 26 the condition is `x < 50`. For 50, `50 < 50` is False, so the else block runs and prints \"the number you entered is greater than 50\". That is not true. Choose the operator (`<` or `<=`) and the messages so that the boundary value is described correctly, or use a third branch (elif, next lessons).",
        ],
        source: { file: "topic3", units: [26], note: "Greater or less than 50 exercise" },
      },
    ],
    keyPoints: [
      "if…else gives two paths, and exactly one of them runs.",
      "`else:` has no condition and ends with a colon.",
      "`else` must have the same indentation as its `if`.",
      "The else block runs for every value where the condition is False — including the boundary value.",
      "`num % 2 == 0` is True for even numbers and False for odd numbers.",
    ],
    examples: [
      {
        title: "Odd or even",
        code: `num = int(input("Enter the number: "))
if (num % 2) == 0:
    print("Given number is Even")
else:
    print("Given number is Odd")`,
        inputs: ["22"],
        output: "Enter the number: 22\nGiven number is Even",
        lineNotes: [
          { line: 2, text: "22 % 2 is 0, so 0 == 0 is True. The brackets are optional." },
          { line: 3, text: "The True part runs." },
          { line: 4, text: "else lines up with if and ends with a colon. It has no condition." },
          { line: 5, text: "Skipped this time. With 7 it would print \"Given number is Odd\"." },
        ],
        source: { file: "topic3", units: [25], note: "Odd or even with input 22" },
        origin: "source",
      },
      {
        title: "One digit or more (honest message)",
        code: `num = int(input("Enter a number: "))
if num < 10:
    print("number is one digit")
else:
    print("number has two or more digits")`,
        inputs: ["100"],
        output: "Enter a number: 100\nnumber has two or more digits",
        lineNotes: [
          { line: 2, text: "100 < 10 is False." },
          { line: 4, text: "The else part catches every number that is 10 or more." },
          { line: 5, text: "The slide prints \"number is two digits\" here, which is wrong for 100. This message is true for every value that reaches it." },
        ],
        source: { file: "topic3", units: [24], note: "Single digit or higher" },
        origin: "adapted",
      },
      {
        title: "Smaller than 50, or 50 and more",
        code: `x = int(input("Enter a number: "))
if x < 50:
    print("the number you entered is smaller than 50")
else:
    print("the number you entered is 50 or greater")`,
        inputs: ["50"],
        output: "Enter a number: 50\nthe number you entered is 50 or greater",
        lineNotes: [
          { line: 2, text: "50 < 50 is False, because < does not include 50." },
          { line: 5, text: "So 50 lands in the else block. The message says \"50 or greater\", which is correct for 50." },
        ],
        source: { file: "topic3", units: [26], note: "Exercise solution with the boundary message fixed" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Giving else a condition",
        wrong: `if x < 50:
    print("small")
else x >= 50:
    print("big")`,
        right: `if x < 50:
    print("small")
else:
    print("big")`,
        explanation: "else never takes a condition: it already means \"every other case\". Python reports SyntaxError: expected ':'. If you really need another condition, use elif.",
      },
      {
        title: "Indenting else inside the if-block",
        wrong: `if x < 50:
    print("small")
    else:
        print("big")`,
        right: `if x < 50:
    print("small")
else:
    print("big")`,
        explanation: "else must be at the same indentation level as its if. Indented, Python cannot match it to the if and reports SyntaxError: invalid syntax.",
      },
      {
        title: "A message that is wrong at the boundary",
        wrong: `if x < 50:
    print("smaller than 50")
else:
    print("greater than 50")`,
        right: `if x < 50:
    print("smaller than 50")
else:
    print("50 or greater")`,
        explanation: "With x = 50 the else runs, but 50 is not greater than 50 (this is the slide 26 bug). Always test the boundary value and make sure the message is true for it.",
      },
    ],
    tryIt: {
      prompt:
        "Safe division (based on slide 15): ask the user for two numbers. If the second number is not equal to zero, print the result of dividing the first by the second. Otherwise, print \"Cannot divide by zero\".",
      starterCode: `a = float(input("Enter a number: "))
b = float(input("Enter a number: "))
# if b is not equal to zero (use !=), print the division
# else, print "Cannot divide by zero"
`,
      inputsHint: "Try 1 and 2 (prints 0.5), then 2 and 0.",
    },
    quickCheck: ["pm-t3-007", "pm-t3-008", "pm-t3-009"],
    sourceNotes: [
      "Slide 23: the flowchart picture uses Python 2 print statements (`print 'x is even'`), which are a SyntaxError in Python 3. The code under it uses curly quotes ‘ ’ and never gives x a value. The working Python 3 form is `print('x is even')` with straight quotes, after x has been assigned.",
      "Slide 22 also uses curly quotes in the flowchart boxes; type straight quotes in real code.",
      "Slide 24: the else branch prints \"number is two digits\" for every number of 10 or more (100 has three digits), and negative numbers such as -25 are reported as \"one digit\". The lesson uses the message \"two or more digits\". The slide's output for 10 is correct.",
      "Slide 26: \"greater that 50\" is a typo for \"greater than 50\". With the input 50 the slide's code prints \"the number you entered is greater than 50\", which is false. The lesson changes the else message to \"50 or greater\".",
    ],
  },

  // ================================================================ 3. conditional expression
  {
    id: "lesson-t3-conditional-expression",
    topicId: "t3",
    order: 3,
    title: "Conditional expressions (single-line if)",
    conceptIds: ["t3-conditional-expression"],
    sources: [
      { file: "topic3", units: [27, 28, 29, 30] },
      { file: "lab-ch3-ii", units: [1, 13, 14, 18, 19, 20] },
    ],
    explanation: [
      {
        heading: "An if…else that produces a value",
        body: [
          "A conditional expression chooses between **two values** in one line: `<expr1> if <condition> else <expr2>`.",
          "Python checks the condition first. If it is True, the whole expression becomes `expr1`. If it is False, it becomes `expr2`.",
          "The slides call it a \"single line if statement\", but it is not a control structure that directs the flow of the program. It works more like an operator: it gives back a value that you can store in a variable or print.",
        ],
        source: { file: "topic3", units: [27], note: "Syntax and meaning" },
      },
      {
        heading: "Reading one step by step",
        body: [
          "In `Result = 100 if x >= 10 else 200`, Python first checks `x >= 10`. If it is True, 100 is stored in Result. If it is False, 200 is stored.",
          "With x = 10 the condition is True (10 >= 10), so Result is 100.",
        ],
        table: {
          headers: ["x", "x >= 10", "Result"],
          rows: [
            ["10", "True", "100"],
            ["25", "True", "100"],
            ["9", "False", "200"],
          ],
        },
        source: { file: "topic3", units: [28], note: "Result = 100 if x>=10 else 200" },
      },
      {
        heading: "Choosing between two strings",
        body: [
          "The two values can be strings. In the weather example, `raining` is a Boolean variable, so it can be used directly as the condition: when it is True you get the first message, otherwise the second.",
          "To put an apostrophe inside a string, use double quotes around it (`\"Let's go\"`), or escape it as the slide does (`'Let\\'s go'`).",
        ],
        source: { file: "topic3", units: [29], note: "Weather example" },
      },
      {
        heading: "Using it with input",
        body: [
          "Conditional expressions are handy after reading input. The lab finds the larger of two numbers with `result = n if n > n2 else n2`, and gives \"Pass\" or \"Fail\" with `'Pass' if n >= 50 else 'Fail'`.",
          "Remember to **print** the result. In slide 30 the last line is just `s`. A Jupyter notebook shows the value of the last line of a cell, but a normal Python script shows nothing for a bare expression. Write `print(s)`.",
        ],
        source: { file: "lab-ch3-ii", units: [1, 18, 19, 20], note: "Correct/Wrong answer, larger number, Pass/Fail" },
      },
      {
        heading: "Rules to remember",
        body: [
          "A conditional expression is a short form of an if…else that picks one of two values. Both parts are compulsory, and there are no colons inside it.",
        ],
        bullets: [
          "The `else` part is required. Without it Python reports SyntaxError: expected 'else' after 'if' expression.",
          "The first value comes **before** `if`; the second comes after `else`.",
          "No colons and no indentation: it all fits on one line.",
          "Use it to choose between two values. For several statements or more than two choices, use if…else or elif.",
        ],
        source: { file: "topic3", units: [27, 30], note: "Syntax; age exercise" },
      },
    ],
    keyPoints: [
      "`value1 if condition else value2` gives value1 when the condition is True, otherwise value2.",
      "It is an expression: store it in a variable or print it.",
      "Both the `if` part and the `else` part are required, and there are no colons.",
      "A Boolean variable such as `raining` can be the condition by itself.",
      "In a script, a bare variable on its own line prints nothing — use `print()`.",
    ],
    examples: [
      {
        title: "Store 100 or 200",
        code: `x = 10
Result = 100 if x >= 10 else 200
print(Result)`,
        output: "100",
        lineNotes: [
          { line: 2, text: "x >= 10 is checked first. 10 >= 10 is True, so the expression gives 100." },
          { line: 3, text: "print shows the stored value." },
        ],
        source: { file: "topic3", units: [28], note: "Conditional expression example" },
        origin: "source",
      },
      {
        title: "Beach or library?",
        code: `raining = False
weather = "Let's go to the beach" if raining else "Let's go to the library"
print(weather)`,
        output: "Let's go to the library",
        lineNotes: [
          { line: 1, text: "raining is a Boolean value." },
          { line: 2, text: "raining is False, so the expression gives the value after else. Double quotes let the string contain an apostrophe." },
        ],
        source: { file: "topic3", units: [29], note: "Weather example, second cell" },
        origin: "source",
      },
      {
        title: "The larger of two numbers",
        code: `n = int(input('enter number 1: '))
n2 = int(input('enter number 2: '))
result = n if n > n2 else n2
print('The larger no. is ', result)`,
        inputs: ["7", "12"],
        output: "enter number 1: 7\nenter number 2: 12\nThe larger no. is  12",
        lineNotes: [
          { line: 3, text: "7 > 12 is False, so result gets n2, which is 12." },
          { line: 4, text: "Two spaces appear before 12: one inside the string and one added by print between its two values." },
        ],
        source: { file: "lab-ch3-ii", units: [14, 18], note: "Single-line statement to find the larger number" },
        origin: "source",
      },
      {
        title: "Minor or Adult (slide 30, with print)",
        code: `age = int(input("Please enter your age: "))
s = 'Minor' if age < 21 else 'Adult'
print(s)`,
        inputs: ["21"],
        output: "Please enter your age: 21\nAdult",
        lineNotes: [
          { line: 2, text: "21 < 21 is False, so s becomes 'Adult'. The task says 21 or more is an adult." },
          { line: 3, text: "The slide ends with a bare s, which only displays in Jupyter. print(s) works everywhere." },
        ],
        source: { file: "topic3", units: [30], note: "Age exercise using a conditional expression" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Leaving out the else part",
        wrong: `result = 'Pass' if n >= 50`,
        right: `result = 'Pass' if n >= 50 else 'Fail'`,
        explanation: "A conditional expression must always produce a value, so the else part is required. Python reports SyntaxError: expected 'else' after 'if' expression.",
      },
      {
        title: "Adding colons like a normal if",
        wrong: `result = 'Pass' if n >= 50: else 'Fail'`,
        right: `result = 'Pass' if n >= 50 else 'Fail'`,
        explanation: "Colons belong to if statements that start a block. A conditional expression has no colons; adding one gives SyntaxError: invalid syntax.",
      },
      {
        title: "Putting the condition first",
        wrong: `result = if n >= 50 'Pass' else 'Fail'`,
        right: `result = 'Pass' if n >= 50 else 'Fail'`,
        explanation: "The True value comes first, then if and the condition, then else and the False value.",
      },
      {
        title: "Expecting a bare variable to print",
        wrong: `s = 'minor' if age < 21 else 'adult'
s`,
        right: `s = 'minor' if age < 21 else 'adult'
print(s)`,
        explanation: "Only a notebook cell shows the value of its last line. In a script nothing appears, so always use print().",
      },
    ],
    tryIt: {
      prompt:
        "Lab exercise (Ch3 Lab II, cell 19): read a student's final score out of 100 as a whole number. Use ONE conditional expression to store \"Pass\" if the score is 50 or higher, or \"Fail\" if it is lower, then print it.",
      starterCode: `n = int(input("Enter final score: "))
# result = ___ if ___ else ___
# print the result
`,
      inputsHint: "Test 50 (should be Pass) and 49 (should be Fail).",
    },
    quickCheck: ["pm-t3-013", "pm-t3-015", "pm-t3-016"],
    sourceNotes: [
      "Slide 27 calls this a \"Single Line if statement\" but also says it is not a control structure. The correct Python name is conditional expression.",
      "Slide 29: the beach string uses an escaped straight apostrophe (`\\'`), but the library string contains a curly apostrophe ’, so the second output shows \"Let’s\" with a curly mark. The lesson uses straight apostrophes inside double quotes. The slide's program suggests the beach when it IS raining; the code matches the slide's text, so the lesson keeps that mapping.",
      "Slide 30: the task says the program prints \"Minor\" or \"Adult\", but the code uses lowercase 'minor'/'adult' and never calls print(). The output `'minor'` (with quotes) appears only because Jupyter displays the value of a bare expression on the last line; as a normal script nothing is printed after the prompt. The lesson adds print(s).",
      "Ch3 Lab II cells 18 and 20 use prompts without a space or colon (`'enter number 1'`). The lesson adds \": \" so the typed value is easy to read.",
    ],
  },

  // ================================================================ 4. elif
  {
    id: "lesson-t3-elif",
    topicId: "t3",
    order: 4,
    title: "Chained conditionals: if…elif…else",
    conceptIds: ["t3-elif"],
    sources: [
      { file: "topic3", units: [31, 32, 33, 34, 35, 36, 37, 38] },
      { file: "pe3", units: [1], item: "1–5" },
      { file: "lab-ch3-ii", units: [21, 22, 23, 27] },
      { file: "lab-ch3-iii", units: [9, 10] },
      { file: "lab-ch3-iiii", units: [10, 12, 14] },
    ],
    explanation: [
      {
        heading: "More than two possibilities",
        body: [
          "if…else can only choose between two paths. Chained conditionals allow **more than two** possibilities, so you can check more than one condition.",
          "Python checks the tests in order, from top to bottom. As soon as one test is True, its statements run and the **rest of the chain is skipped**. If no test is True, the else part runs. Then the program continues with the statement just below the whole chain.",
        ],
        source: { file: "topic3", units: [32], note: "Chained conditionals flowchart" },
      },
      {
        heading: "Syntax: if, elif, else",
        body: [
          "`elif` is the Python keyword for \"else if\". It adds another condition to the chain. You can have **any number** of elif parts, and the else part is **optional**.",
          "Every line (`if`, each `elif`, `else`) ends with a colon, and `if`, `elif` and `else` all line up at the same indentation.",
        ],
        bullets: [
          "Only one block in the chain runs: the first one whose condition is True.",
          "Without an else, it is possible that no block runs at all.",
        ],
        source: { file: "topic3", units: [33], note: "if…elif…else syntax; else is optional" },
      },
      {
        heading: "Three-way comparisons",
        body: [
          "Comparing two numbers has three outcomes: less, greater or equal. Test `x < y` first, then `elif x > y`. If both are False, the numbers must be equal, so `else` handles that case.",
          "The same pattern answers Practice Exercises III Ex 1 and 2, and the lab's number type check: `number > 0` (positive), `elif number < 0` (negative), `else` (zero).",
        ],
        source: { file: "topic3", units: [34, 35], note: "x less, greater or equal to y" },
      },
      {
        heading: "Order matters: the grade program",
        body: [
          "For letter grades, start with the **highest** threshold and work down: `>= 90`, then `>= 80`, then `>= 70`, then `>= 60`, else F. When Python reaches `elif total >= 80`, it already knows the total is below 90, because otherwise the first branch would have run.",
          "If you put `>= 60` first, a mark of 95 would stop there and get D. Writing upper limits such as `total <= 89` is also risky: with decimal marks, 89.5 is neither `>= 90` nor `<= 89`, so it falls into a gap.",
        ],
        source: { file: "topic3", units: [38], note: "Grade exercise; see also PE3 Ex 4 and Ch3 Lab IIII cell 12" },
      },
      {
        heading: "Largest of three numbers",
        body: [
          "Each condition can join two comparisons with `and`: `a >= b and a >= c` means a is at least as big as both others.",
          "Slide 37 uses strict `>`. That fails when the two largest numbers are equal: with 5, 5 and 3 neither `a > b` nor `b > a` is True, so the program wrongly prints \"c is greater\". The lab solution uses `>=`, which handles ties.",
        ],
        source: { file: "topic3", units: [36, 37], note: "Largest among three numbers" },
      },
      {
        heading: "Menus and choices",
        body: [
          "elif is perfect when the user picks an option. Compare the choice with `==` in each branch (1 for addition, 2 for subtraction, …) and use `else` to print an error for any other number, as in Practice Exercises III Ex 5.",
          "The fruit-shop lab works the same way with strings: `fruit == \"mango\"`, `elif fruit == \"banana\"`, …, `else` prints \"Fruit not available\".",
        ],
        source: { file: "lab-ch3-iiii", units: [14], note: "Calculator by choice (PE3 Q5); see also Ch3 Lab III cell 10" },
      },
    ],
    keyPoints: [
      "`elif` adds another condition; use as many as you need.",
      "Python runs only the first block whose condition is True and skips the rest of the chain.",
      "`else` is optional and runs only when no condition is True.",
      "Order conditions carefully: for ranges, start from the highest threshold.",
      "Avoid gaps between ranges: a chain of `>=` tests ending with else covers every value.",
      "Separate if statements are all checked; an elif chain stops at the first True condition.",
    ],
    examples: [
      {
        title: "Less, greater or equal",
        code: `x = int(input("Enter 1st number: "))
y = int(input("Enter 2nd number: "))
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else:
    print('x and y are equal')`,
        inputs: ["5", "10"],
        output: "Enter 1st number: 5\nEnter 2nd number: 10\nx is less than y",
        lineNotes: [
          { line: 3, text: "5 < 10 is True, so this branch runs." },
          { line: 5, text: "Never checked: the chain stops after the first True condition." },
          { line: 7, text: "else runs only when both tests are False, which means x equals y." },
        ],
        source: { file: "topic3", units: [35], note: "Chained conditional code" },
        origin: "source",
      },
      {
        title: "Total marks to a grade",
        code: `name = input("Enter your name: ")
quiz = float(input("Enter your quiz mark: "))
mid = float(input("Enter your mid mark: "))
final = float(input("Enter your final: "))
total = quiz + mid + final
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
print(f"{name} got {grade} grade (total {total})")
print("End of program")`,
        inputs: ["Samuel", "9", "40", "41"],
        output:
          "Enter your name: Samuel\nEnter your quiz mark: 9\nEnter your mid mark: 40\nEnter your final: 41\nSamuel got A grade (total 90.0)\nEnd of program",
        lineNotes: [
          { line: 5, text: "9 + 40 + 41 = 90.0 (a float, because the marks were read with float())." },
          { line: 6, text: "90.0 >= 90 is True, so grade is \"A\" and all the elif tests are skipped." },
          { line: 8, text: "Reaching this line means total < 90, so no upper limit is needed." },
          { line: 14, text: "else catches everything below 60." },
        ],
        source: { file: "pe3", units: [1], item: "4", note: "Grade table and sample output (Samuel: 9, 40, 41 → A)" },
        origin: "adapted",
      },
      {
        title: "Largest of three numbers (handles ties)",
        code: `num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

if num1 >= num2 and num1 >= num3:
    largest = num1
elif num2 >= num1 and num2 >= num3:
    largest = num2
else:
    largest = num3

print("Largest number:", largest)`,
        inputs: ["5", "5", "3"],
        output: "Enter first number: 5\nEnter second number: 5\nEnter third number: 3\nLargest number: 5.0",
        lineNotes: [
          { line: 5, text: "5 >= 5 and 5 >= 3 are both True, so num1 is the largest. With > instead of >=, this tie would fail." },
          { line: 12, text: "Not indented, so it runs after whichever branch was chosen." },
        ],
        source: { file: "lab-ch3-iiii", units: [10], note: "Solution to PE3 Q3" },
        origin: "source",
      },
      {
        title: "Calculator menu",
        code: `num1 = float(input('Num 1: '))
num2 = float(input('Num 2: '))
choice = int(input('Enter your choice: '))

if choice == 1:
    result = num1 + num2
    print('Result ', result)
elif choice == 2:
    result = num1 - num2
    print('Result ', result)
elif choice == 3:
    result = num1 * num2
    print('Result ', result)
elif choice == 4:
    result = num1 % num2
    print('Result ', result)
elif choice == 5:
    result = num1 / num2
    print('Result ', result)
else:
    print('Error')`,
        inputs: ["7", "2", "4"],
        output: "Num 1: 7\nNum 2: 2\nEnter your choice: 4\nResult  1.0",
        lineNotes: [
          { line: 5, text: "Each branch compares the choice with one number using ==." },
          { line: 14, text: "choice == 4 is the first True test, so the modulus is used: 7.0 % 2.0 = 1.0." },
          { line: 20, text: "Any other choice (for example 9) prints Error." },
        ],
        source: { file: "lab-ch3-iiii", units: [14], note: "Solution to PE3 Q5" },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Checking the lowest threshold first",
        wrong: `if mark >= 60:
    print("D")
elif mark >= 90:
    print("A")`,
        right: `if mark >= 90:
    print("A")
elif mark >= 60:
    print("D")`,
        explanation: "The chain stops at the first True test. With mark = 95, `mark >= 60` is already True, so the student gets D and the A test is never reached.",
      },
      {
        title: "Using separate ifs when only one branch should run",
        wrong: `if mark >= 90:
    print("A")
if mark >= 80:
    print("B")`,
        right: `if mark >= 90:
    print("A")
elif mark >= 80:
    print("B")`,
        explanation: "Separate if statements are all checked, so 95 prints both A and B. elif makes the tests one chain where only the first True branch runs.",
      },
      {
        title: "Writing else if or elseif",
        wrong: `if x < 0:
    print("negative")
else if x > 0:
    print("positive")`,
        right: `if x < 0:
    print("negative")
elif x > 0:
    print("positive")`,
        explanation: "Python's keyword is elif. `else if` on one line gives SyntaxError: expected ':' and `elseif` gives SyntaxError: invalid syntax.",
      },
      {
        title: "Leaving gaps between ranges",
        wrong: `if total >= 90:
    Grade = 'A'
elif total >= 80 and total <= 89:
    Grade = 'B'`,
        right: `if total >= 90:
    Grade = 'A'
elif total >= 80:
    Grade = 'B'`,
        explanation: "With decimal totals such as 89.5, `total <= 89` is False, so no branch runs. If nothing else sets Grade, using it later raises NameError. The chain itself already guarantees total < 90 in the second branch.",
      },
    ],
    tryIt: {
      prompt:
        "Practice Exercises III, Ex 2: read a number and print \"positive\", \"negative\" or \"zero\". Use if, elif and else.",
      starterCode: `number = float(input("Enter a number: "))
# if number is greater than 0 ...
# elif number is less than 0 ...
# else ...
`,
      inputsHint: "Test with 5, -3 and 0. Each should print exactly one word.",
    },
    quickCheck: ["pm-t3-022", "pm-t3-023", "pm-t3-026"],
    sourceNotes: [
      "Slide 32's flowchart says \"if-elseif\". Python's keyword is elif.",
      "Slide 37 (largest of three) uses strict >, so when the two largest numbers are equal (e.g. 5, 5, 3) both tests are False and it wrongly prints \"c is greater\". The output shown on the slide (5, 8, 6 → b is greater) is correct. Ch3 Lab IIII cell 10 uses >=, which is the version taught here.",
      "Slide 38 gives integer ranges (80 to 89, …), which leave values such as 89.5 unspecified. This lesson uses the rule \"each grade starts at its lower limit\": 80 up to (but not including) 90 is B, and so on.",
      "Ch3 Lab IIII cell 12 writes upper limits (`total <= 89`, `<= 79`, `<= 69`) while reading marks with float(). A total such as 89.5 matches no branch, Grade is never set and the final print raises NameError. The lesson's chain without upper limits has no gaps.",
      "Practice Exercises III Ex 2 says \"positive or negative of zero\"; it means \"or zero\".",
      "Ch3 Lab II cell 25 compares daily hours with the weekly thresholds 35 and 20; cell 27 is the correct version, which tests weekly_hours.",
    ],
  },

  // ================================================================ 5. and / or
  {
    id: "lesson-t3-logical-conditions",
    topicId: "t3",
    order: 5,
    title: "Combining conditions with and / or",
    conceptIds: ["t3-logical-conditions"],
    sources: [
      { file: "topic3", units: [7, 37] },
      { file: "lab-ch3-ii", units: [10, 11, 12] },
      { file: "lab-ch3-iii", units: [11, 12] },
      { file: "lab-ch4-iiii", units: [1, 2] },
    ],
    explanation: [
      {
        heading: "Why combine conditions?",
        body: [
          "Many decisions depend on more than one fact. Slide 7 shows that an if condition can use the **logical operators** as well as the comparison operators. They join several comparisons into one True/False answer.",
          "Slide 7 writes them in capitals (AND, OR, NOT), but in Python they must be **lowercase**: `and`, `or`, `not`.",
        ],
        table: {
          headers: ["A", "B", "A and B", "A or B"],
          rows: [
            ["True", "True", "True", "True"],
            ["True", "False", "False", "True"],
            ["False", "True", "False", "True"],
            ["False", "False", "False", "False"],
          ],
        },
        source: { file: "topic3", units: [7], note: "Logical and comparison operators in conditions" },
      },
      {
        heading: "and: both parts must be True",
        body: [
          "The supermarket gives a 2% discount when the purchase is **more than 50 OMR and** the customer is a member. Both facts must be true, so the condition is `amount > 50 and member == \"yes\"`.",
          "If either part is False — 50 OMR or less, or not a member — the whole condition is False and the else block runs.",
        ],
        source: { file: "lab-ch3-iii", units: [11, 12], note: "Shopping discount" },
      },
      {
        heading: "or: at least one part must be True",
        body: [
          "The rainfall program asks for further assessment when the average is 20 mm or more, **or** any single day had 40 mm or more. One True part is enough: `avg >= 20 or day1 >= 40 or day2 >= 40 or day3 >= 40`.",
          "This condition sits inside an if…elif…else chain, so it is only checked when the first test (`avg >= 30`) was False.",
        ],
        source: { file: "lab-ch4-iiii", units: [1, 2], note: "Rainfall decision with elif and or" },
      },
      {
        heading: "Each side needs a full comparison",
        body: [
          "Write the variable on every side: `x > 0 and x < 10`, not `x > 0 and < 10` (SyntaxError). Likewise `day1 >= 40 or day2 >= 40`, not `day1 or day2 >= 40` — that does not compare day1 with 40 at all.",
          "Brackets can make a long condition easier to read, as on slide 37: `(a > b) and (a > c)`.",
        ],
        source: { file: "topic3", units: [37], note: "(a > b) and (a > c)" },
      },
      {
        heading: "Spot the bug: comparing a string with True",
        body: [
          "The lab task says: if it is raining **or** there is no transport, attend the online class. The first attempt stores `case1 = 'raining'` and tests `case1 == True`. A string is never equal to the Boolean True, so the test is always False and the program always prints \"Stay on Campus\". It also reads the user's answer but never uses it.",
          "The fix is to compare the input with the text you expect: `case1 == 'raining'`. The lab's corrected cell uses `and`, but the task says \"or\" — either fact alone is enough — so the correct operator is `or`.",
        ],
        source: { file: "lab-ch3-ii", units: [10, 11, 12], note: "Task, buggy cell 11, corrected comparison in cell 12" },
      },
    ],
    keyPoints: [
      "`and` is True only when both sides are True.",
      "`or` is True when at least one side is True.",
      "Logical operators are lowercase in Python: `and`, `or`, `not`.",
      "Each side of and/or must be a complete comparison: `x > 0 and x < 10`.",
      "A string is never equal to True; compare it with the text you expect instead.",
      "Read the rule carefully: \"both\" means and, \"either\" means or.",
    ],
    examples: [
      {
        title: "Member discount with and",
        code: `name = input("Enter customer name: ")
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
    print("Final amount:", amount, "OMR")`,
        inputs: ["Sara", "80", "yes"],
        output: "Enter customer name: Sara\nEnter purchase amount: 80\nAre you a member? (yes/no): yes\nCustomer: Sara\nDiscount: 1.6 OMR\nFinal amount: 78.4 OMR",
        lineNotes: [
          { line: 5, text: "80 > 50 is True and member == \"yes\" is True, so True and True is True." },
          { line: 6, text: "2% of 80 is 1.6." },
          { line: 13, text: "With 50 (not more than 50) or with \"no\", the else block would run." },
        ],
        source: { file: "lab-ch3-iii", units: [12], note: "Shopping discount solution" },
        origin: "source",
      },
      {
        title: "Rainfall decision with or",
        code: `day1 = float(input('Enter the rainfall for day1 (in mm): '))
day2 = float(input('Enter the rainfall for day2 (in mm): '))
day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = day1 + day2 + day3
avg = total / 3

print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('Physical classes are canceled.')
elif avg >= 20 or day1 >= 40 or day2 >= 40 or day3 >= 40:
    print('Weather conditions require further assessment.')
elif total < 15:
    print('Rainfall has been low over the three days.')
else:
    print('Physical classes can proceed.')`,
        inputs: ["3", "45", "0"],
        output:
          "Enter the rainfall for day1 (in mm): 3\nEnter the rainfall for day2 (in mm): 45\nEnter the rainfall for day3 (in mm): 0\nTotal =  48.0\nAverage =  16.0\nWeather conditions require further assessment.",
        lineNotes: [
          { line: 11, text: "16.0 >= 30 is False, so the chain moves on." },
          { line: 13, text: "avg >= 20 is False, but day2 >= 40 is True, and or needs only one True part." },
          { line: 15, text: "Skipped: an earlier branch already ran." },
        ],
        source: { file: "lab-ch4-iiii", units: [2], note: "Rainfall decision (three inputs), messages capitalised as in the cell 1 task" },
        origin: "adapted",
      },
      {
        title: "Spot the bug: a string compared with True",
        code: `user = input('Enter Yes or No: ')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')`,
        inputs: ["Yes"],
        output: "Enter Yes or No: Yes\nStay on Campus\nCheck your status!!",
        lineNotes: [
          { line: 1, text: "The answer is stored in user, but user is never used again." },
          { line: 4, text: "BUG: 'raining' == True is False, and 'no transport' == True is False. False or False is False — every time." },
          { line: 7, text: "So the program always prints \"Stay on Campus\", whatever the user types." },
        ],
        source: { file: "lab-ch3-ii", units: [11], note: "Buggy cell shown as a spot-the-bug example" },
        origin: "source",
      },
      {
        title: "Fixed: compare the input with text, and use or",
        code: `case1 = input('Case is raining or not raining: ')
case2 = input('no transport / transport: ')
if case1 == 'raining' or case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')`,
        inputs: ["raining", "transport"],
        output: "Case is raining or not raining: raining\nno transport / transport: transport\nAttend the online class!\nCheck your status!!",
        lineNotes: [
          { line: 3, text: "case1 == 'raining' is True. With or, that is enough, so the online class is chosen." },
          { line: 6, text: "The lab's cell 12 uses and here, which would print \"Stay on Campus\" for this input — not what the task asks." },
        ],
        source: { file: "lab-ch3-ii", units: [10, 12], note: "Task (or) and corrected comparisons" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Writing AND / OR in capitals",
        wrong: `if x > 0 AND x < 10:
    print("single digit")`,
        right: `if x > 0 and x < 10:
    print("single digit")`,
        explanation: "Python keywords are lowercase. AND is not a keyword, so Python reports SyntaxError: invalid syntax.",
      },
      {
        title: "Leaving out the variable on one side",
        wrong: `if x > 0 and < 10:
    print("single digit")`,
        right: `if x > 0 and x < 10:
    print("single digit")`,
        explanation: "Each side of and/or is its own comparison, so the variable must be written again. The wrong version is a SyntaxError.",
      },
      {
        title: "Comparing a string with True",
        wrong: `case1 = 'raining'
if case1 == True:
    print('Attend the online class!')`,
        right: `case1 = 'raining'
if case1 == 'raining':
    print('Attend the online class!')`,
        explanation: "A string is never equal to the Boolean True, so the condition is always False. Compare the string with the text you are looking for.",
      },
      {
        title: "Using and when the rule says or",
        wrong: `if case1 == 'raining' and case2 == 'no transport':`,
        right: `if case1 == 'raining' or case2 == 'no transport':`,
        explanation: "\"Raining or no transport\" means either fact alone is enough. With and, a student with no transport on a dry day would wrongly be told to stay on campus.",
      },
    ],
    tryIt: {
      prompt:
        "Rainfall decision (Ch4 Lab IIII, cell 1): read the rainfall for three days and compute the total and the average. If the average is 30 mm or more print \"Physical classes are canceled.\"; otherwise, if the average is 20 mm or more or any single day is 40 mm or more, print \"Weather conditions require further assessment.\"; otherwise, if the total is less than 15 mm, print \"Rainfall has been low over the three days.\"; otherwise print \"Physical classes can proceed.\"",
      starterCode: `day1 = float(input("Enter the rainfall for day1 (in mm): "))
day2 = float(input("Enter the rainfall for day2 (in mm): "))
day3 = float(input("Enter the rainfall for day3 (in mm): "))
total = day1 + day2 + day3
avg = total / 3
# Rule 1: avg >= 30
# Rule 2: avg >= 20, or any day >= 40 (use or)
# Rule 3: total < 15
# Rule 4: everything else
`,
      inputsHint: "Try 3, 45, 0 (rule 2 because of day 2), then 4, 5, 4 (rule 3) and 10, 10, 10 (rule 4).",
    },
    quickCheck: ["pm-t3-028", "pm-t3-030", "pm-t3-031"],
    sourceNotes: [
      "Slide 7 shows the logical operators in uppercase (AND, OR, NOT). In Python they must be lowercase (`and`, `or`, `not`); uppercase versions give a SyntaxError.",
      "Ch3 Lab II cell 11 compares the strings 'raining' and 'no transport' with True. That is always False, so the cell always prints \"Stay on Campus\" (and it never uses the value the user typed). It is shown here only as a spot-the-bug example.",
      "Ch3 Lab II cell 12 fixes the comparisons but joins them with `and`, while the task in cell 10 says \"raining or no transport\". The lesson's version uses `or` to match the task.",
      "Ch4 Lab IIII cell 2 prints lowercase messages (\"physical classes are canceled\", \"physical classes can proceed\") while cell 1's task capitalises \"Physical classes can proceed.\" The lesson uses capitalised messages; the logic is unchanged.",
    ],
  },

  // ================================================================ 6. nested
  {
    id: "lesson-t3-nested",
    topicId: "t3",
    order: 6,
    title: "Nested conditions",
    conceptIds: ["t3-nested"],
    sources: [
      { file: "topic3", units: [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
      { file: "lab-ch3-iii", units: [15, 16, 17, 18, 19, 28, 29, 30, 31, 32] },
      { file: "lab-ch3-iiii", units: [16, 17, 19, 20, 22, 23, 25, 26, 27, 28] },
    ],
    explanation: [
      {
        heading: "An if inside another if",
        body: [
          "You can write a whole if…else statement inside another if…else. This is called **nesting**, and the inner statement is a **nested if**. You can even put an if…elif…else inside a branch of another one.",
          "The inner if is indented one more level. Its condition is checked **only when the outer branch runs**. If the outer branch is skipped, the inner if is skipped with it.",
        ],
        source: { file: "topic3", units: [40, 41], note: "Definition, flowchart and syntax of nested if" },
      },
      {
        heading: "If within if",
        body: [
          "Use an if inside an if when the second condition should be checked only if the first is True. Slide 45 checks that x is positive, and only then whether it is a single digit.",
          "The lab uses the same idea: first check that attendance is 75% or above, and only then check the mark. If attendance is too low, the mark is never checked and nothing is printed.",
        ],
        source: { file: "lab-ch3-iii", units: [15, 16, 17, 18, 19], note: "Nested if examples and attendance question" },
      },
      {
        heading: "if…else inside else",
        body: [
          "Slides 42–44 compare x and y with nesting. The outer if tests `x == y`. Only when they are not equal does the inner if…else decide between \"less\" and \"greater\".",
          "This gives the same results as the chained version with elif (slide 35). elif is usually shorter, but nesting shows the two decisions as two levels.",
        ],
        source: { file: "topic3", units: [42, 43, 44], note: "Nested if…else for x and y" },
      },
      {
        heading: "Indentation decides where else belongs",
        body: [
          "An else belongs to the if that has the **same indentation**. In the basketball example, the inner else (lined up with `if (n == 10)`) handles \"15 or less but not 10\", while the outer else (lined up with `if (n<=15)`) handles numbers above 15.",
          "If you indent an else one level too far or too little, it attaches to the wrong if and different inputs get the wrong message.",
        ],
        source: { file: "topic3", units: [46], note: "Basketball / football example" },
      },
      {
        heading: "Nesting in both branches: shirt size",
        body: [
          "The shirt-size exercise puts an if…else inside **both** branches of the outer if. First decide whether the ratio is greater than 5. Then, inside each branch, make a second decision: greater than 20 (XXL or L), or greater than 3 (M or S).",
          "The solution on slide 48 computes the ratio as weight ÷ height (`r = w / h`). Note that values exactly at a boundary, such as 20, go to the else branch, because `>` is strict.",
        ],
        source: { file: "topic3", units: [47, 48], note: "Shirt size exercise and solution" },
      },
      {
        heading: "Tax calculator",
        body: [
          "Slide 49 asks for salary = rate per day × number of days, then a tax of 5%, 10% or 15% depending on the salary. The table lists 500 in two rows (1–500 and 500–1000), so a rule must be chosen.",
          "The lab solution decides: salary up to and including 500 pays 5%; otherwise a nested if gives 10% up to and including 1000, and 15% above 1000. The tax is a flat rate on the whole salary.",
        ],
        source: { file: "lab-ch3-iiii", units: [27, 28], note: "Tax calculator task and solution" },
      },
    ],
    keyPoints: [
      "A nested if is an if (or if…else) placed inside a branch of another if.",
      "The inner condition is checked only when its outer branch runs.",
      "An else belongs to the if with the same indentation.",
      "Without an else, some inputs may print nothing — that can be correct, as in \"if within if\".",
      "Many nested ifs can also be written with `and` or with elif; choose the clearest form.",
    ],
    examples: [
      {
        title: "Positive single-digit number",
        code: `x = 7
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')`,
        output: "x is a positive single-digit number.",
        lineNotes: [
          { line: 1, text: "The slide's cell does not show x; here it is set to 7 so the code runs on its own." },
          { line: 2, text: "Outer test: 0 < 7 is True, so the inner if is checked." },
          { line: 3, text: "Inner test: 7 < 10 is True, so the message is printed." },
        ],
        source: { file: "topic3", units: [45], note: "If within if" },
        origin: "adapted",
      },
      {
        title: "Equal, less or greater (nested)",
        code: `x = 10
y = 20
if x == y:
    print("equal")
else:
    if x < y:
        print("less")
    else:
        print("greater")`,
        output: "less",
        lineNotes: [
          { line: 3, text: "10 == 20 is False, so the outer else runs." },
          { line: 6, text: "The inner if is indented inside the outer else. 10 < 20 is True." },
          { line: 8, text: "This else lines up with the inner if, so it belongs to it." },
        ],
        source: { file: "topic3", units: [43], note: "Nested condition code" },
        origin: "source",
      },
      {
        title: "Football, basketball or no game",
        code: `n = int(input("Enter number: "))
if (n <= 15):
    if (n == 10):
        print('play football')
    else:
        print('play basketball')
else:
    print("Don't play game")`,
        inputs: ["10"],
        output: "Enter number: 10\nplay football",
        lineNotes: [
          { line: 2, text: "10 <= 15 is True, so the inner if…else is checked." },
          { line: 3, text: "10 == 10 is True: the special case." },
          { line: 7, text: "The outer else is for numbers above 15." },
          { line: 8, text: "Double quotes let the string contain a straight apostrophe." },
        ],
        source: { file: "topic3", units: [46], note: "Basketball / football example" },
        origin: "source",
      },
      {
        title: "Shirt size",
        code: `h = int(input("enter your height in feet: "))
w = int(input("enter your weight in Kg: "))
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
        inputs: ["5", "50"],
        output: "enter your height in feet: 5\nenter your weight in Kg: 50\nSize L",
        lineNotes: [
          { line: 3, text: "r = 50 / 5 = 10.0 (the solution divides weight by height)." },
          { line: 4, text: "10.0 > 5 is True, so the first inner if…else is used." },
          { line: 5, text: "10.0 > 20 is False, so the inner else prints Size L." },
          { line: 9, text: "This outer else (ratio 5 or less) has its own nested if…else." },
        ],
        source: { file: "topic3", units: [48], note: "Shirt size solution (typo fixed)" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Attaching else to the wrong if",
        wrong: `if attendance >= 75:
    if mark >= 50:
        print("Passed")
    else:
        print("Not Eligible")`,
        right: `if attendance >= 75:
    if mark >= 50:
        print("Passed")
else:
    print("Not Eligible")`,
        explanation: "\"Not Eligible\" is for low attendance, so its else must line up with the outer if. In the wrong version it belongs to the inner if: low attendance prints nothing, and a low mark prints \"Not Eligible\".",
      },
      {
        title: "Expecting the inner if to run when the outer test is False",
        wrong: `x = 1
y = 2
if x > y:
    print(x)
    if y > x:
        print(y)`,
        explanation: "1 > 2 is False, so the whole outer block — including the inner if — is skipped and nothing is printed, even though y > x is True. The inner test is never reached.",
      },
      {
        title: "Forgetting to indent the inner block",
        wrong: `if x > 0:
    if x < 10:
    print("single digit")`,
        right: `if x > 0:
    if x < 10:
        print("single digit")`,
        explanation: "The body of the inner if needs one more level of indentation than the inner if itself. Otherwise Python reports IndentationError: expected an indented block after 'if' statement.",
      },
      {
        title: "Leaving a boundary value unclear",
        wrong: `if salary < 500:
    tax = salary * 0.05
else:
    if salary > 500:
        tax = salary * 0.10`,
        right: `if salary <= 500:
    tax = salary * 0.05
else:
    if salary <= 1000:
        tax = salary * 0.10
    else:
        tax = salary * 0.15`,
        explanation: "In the wrong version a salary of exactly 500 matches neither test, so tax is never set. Decide where each boundary belongs (here 500 → 5%) and let else cover the rest.",
      },
    ],
    tryIt: {
      prompt:
        "Tax calculator (slide 49): read the employee name, the rate per day and the number of days worked. Salary = rate × days. Tax is 5% of the salary if the salary is 500 or less; otherwise 10% if the salary is 1000 or less; otherwise 15%. Print the name, the salary and the tax. Use an if…else with a nested if…else.",
      starterCode: `name = input("Enter employee name: ")
rate = float(input("Enter rate per day: "))
days = int(input("Enter number of days worked: "))
salary = rate * days
# if salary <= 500: 5%
# else: nested if…else for 10% (up to 1000) or 15%

print("Employee name:", name)
print("Salary:", salary)
`,
      inputsHint: "Try Ali, 100, 40 (salary 4000.0, tax 600.0), then a salary of exactly 500 (tax 25.0).",
    },
    quickCheck: ["pm-t3-035", "pm-t3-037", "pm-t3-038"],
    sourceNotes: [
      "Slide 40's flowchart nests the inner test in the False (else) branch, while the syntax on slide 41 nests it in the True (if) branch. Both forms are valid.",
      "Slide 42 (and the flowchart on slide 43): the \"greater\" box shows `print(’‘greater’)` with an extra quote mark and curly quotes. The correct code is `print(\"greater\")`, as in the code on slide 43.",
      "Slides 44 and 45 do not show where x and y get their values; run alone, those cells raise NameError. The lesson's examples assign the values first.",
      "Slide 46: `'Don’t play game'` only works because the apostrophe is a curly ’. With a straight apostrophe inside single quotes it is a SyntaxError (unterminated string literal). The lesson uses double quotes: `\"Don't play game\"`.",
      "Slide 47 says ratio = height ÷ weight, but the solution on slide 48 computes `r = w/h` (weight ÷ height). The text also does not say what happens for a ratio of exactly 5 or 20. The lesson follows slide 48: r = w / h, and exact boundary values go to the else branches.",
      "Slide 48: \"sixe L\" is a typo for \"size L\", and the capitalisation is inconsistent (\"size XXL\" vs \"Size M\"). The lesson prints \"Size XXL\", \"Size L\", \"Size M\", \"Size S\". Height is read with int(), so a height such as 5.5 would raise ValueError.",
      "Slide 49: the salary ranges overlap — 500 appears in both \"1-500\" (5%) and \"500-1000\" (10%) — and a salary of 0 is not covered. Ch3 Lab IIII cell 28 resolves this as: 500 or less → 5%, 1000 or less → 10%, more than 1000 → 15%, as a flat rate on the whole salary. The lesson uses that rule.",
      "Ch3 Lab III cell 29 says \"If the mark is below 50, display Failed\" but says nothing about marks from 50 to 59; the solution in cell 30 prints \"Failed\" for every mark below 60.",
    ],
  },
];
