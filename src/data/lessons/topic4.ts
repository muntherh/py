import type { Lesson } from "../types";

// Topic 4 — Iteration, slides 1–18 only (while loops), plus Ch4 Lab IIII cells 1–4 and 12–13.
// No for loops, range(), break, continue, while True or lists.

export const TOPIC4_LESSONS: Lesson[] = [
  // ======================================================================== 1. What is iteration?
  {
    id: "lesson-t4-iteration",
    topicId: "t4",
    order: 1,
    title: "What is iteration?",
    conceptIds: ["t4-iteration"],
    sources: [{ file: "topic4", units: [2, 3], note: "Definition of iteration; definite vs indefinite; start of the while-loop section" }],
    explanation: [
      {
        heading: "Repeating statements",
        body: [
          "Many programs need to do the same work again and again: print a row of numbers, add up values, or ask several students for their marks. Repeated execution of a set of statements is called **iteration**.",
          "Python provides several language features that make iteration easier, so you do not have to copy the same line many times. A statement that repeats a block of code is called a **loop**.",
        ],
        source: { file: "topic4", units: [2], note: "Definition of iteration" },
      },
      {
        heading: "Two types of iteration",
        body: [
          "Slide 2 describes two types of iteration. The difference is whether the number of repetitions is known before the loop starts.",
        ],
        table: {
          headers: ["Type", "Meaning (slide 2)", "Example named on slide 2"],
          rows: [
            ["Definite iteration", "The number of repetitions is specified explicitly in advance", "for loop"],
            ["Indefinite iteration", "The code block executes until some condition is met", "while loop"],
          ],
        },
        source: { file: "topic4", units: [2], note: "Definite vs indefinite iteration" },
      },
      {
        heading: "What these lessons cover",
        body: [
          "The for loop is only named on slide 2, as the example of definite iteration. It is taught later in the deck and is not part of these lessons.",
          "From slide 3 onward, the part of Topic 4 we study teaches the **while loop**. A while loop keeps repeating its block as long as a condition is True, and it stops when the condition becomes False.",
        ],
        source: { file: "topic4", units: [2, 3, 4], note: "Example loops; While Loop section" },
      },
      {
        heading: "Indefinite does not mean endless",
        body: [
          "Indefinite only means that the number of repetitions is not fixed in advance. The loop still stops: it stops when its condition is met.",
          "For example, a loop that adds 15 to a savings total while the total is less than 100 never says \"repeat 7 times\". It stops after 7 repetitions because, at that point, the condition `saved < 100` is False. You will see this program in the examples below.",
        ],
        source: { file: "topic4", units: [2], note: "Indefinite iteration: until some condition is met" },
      },
    ],
    keyPoints: [
      "Iteration is the repeated execution of a set of statements (slide 2).",
      "Definite iteration: the number of repetitions is specified in advance. Slide 2's example is the for loop.",
      "Indefinite iteration: the block repeats until some condition is met. Slide 2's example is the while loop.",
      "Indefinite does not mean endless: a correct while loop stops when its condition becomes False.",
      "These lessons teach the while loop only.",
    ],
    examples: [
      {
        title: "Repetition without a loop",
        code: 'print("Hello")\nprint("Hello")\nprint("Hello")',
        output: "Hello\nHello\nHello\n",
        lineNotes: [{ line: 1, text: "The same statement is written three times. To print it 100 times you would need 100 lines." }],
        source: { file: "topic4", units: [2], note: "Iteration: repeating statements" },
        origin: "original",
      },
      {
        title: "The same repetition with a while loop",
        code: 'count = 1\nwhile count <= 3:\n    print("Hello")\n    count = count + 1',
        output: "Hello\nHello\nHello\n",
        lineNotes: [
          { line: 1, text: "count remembers how many times we are about to print." },
          { line: 2, text: "The loop repeats while this condition is True." },
          { line: 3, text: "The indented lines are the body: they repeat." },
          { line: 4, text: "count goes up by 1 each time, so the condition becomes False after 3 repetitions." },
        ],
        source: { file: "topic4", units: [8, 9], note: "while loop printing Hello; counting loop" },
        origin: "adapted",
      },
      {
        title: "Indefinite iteration: repeat until a condition is met",
        code: 'saved = 0\nweeks = 0\nwhile saved < 100:\n    saved = saved + 15\n    weeks = weeks + 1\nprint("Weeks needed:", weeks)\nprint("Total saved:", saved)',
        output: "Weeks needed: 7\nTotal saved: 105\n",
        lineNotes: [
          { line: 3, text: "The number of repetitions is not written anywhere: the loop runs until saved is 100 or more." },
          { line: 4, text: "Each week adds 15 to the savings." },
          { line: 5, text: "weeks counts how many times the body ran." },
          { line: 6, text: "Not indented, so it runs once, after the loop has finished." },
        ],
        source: { file: "topic4", units: [2], note: "Indefinite iteration" },
        origin: "original",
      },
    ],
    mistakes: [
      {
        title: "Swapping the two examples",
        explanation:
          "Slide 2 gives the for loop as the example of definite iteration and the while loop as the example of indefinite iteration. A common slip is to swap them. Remember: a while loop keeps going until its condition says stop, so it is the indefinite one.",
      },
      {
        title: "Thinking \"indefinite\" means the loop never stops",
        explanation:
          "Indefinite means the number of repetitions is not known in advance. A correct while loop still stops as soon as its condition becomes False, as the savings example shows.",
      },
      {
        title: "Copying a line many times instead of using a loop",
        wrong: 'print("Hello")\nprint("Hello")\nprint("Hello")\nprint("Hello")\nprint("Hello")',
        right: 'count = 1\nwhile count <= 5:\n    print("Hello")\n    count = count + 1',
        explanation:
          "Copied lines work for a few repeats, but they are long and easy to get wrong. A loop states the repeated work once. To change 5 repeats into 50 you only change one number.",
      },
    ],
    tryIt: {
      prompt:
        "Change the program so it prints Hello 5 times instead of 3. Then change it to print Bye 4 times. Which parts of the program did you need to change?",
      starterCode: 'count = 1\nwhile count <= 3:\n    print("Hello")\n    count = count + 1',
    },
    quickCheck: ["pm-t4-001", "pm-t4-002", "pm-t4-003"],
  },

  // ======================================================================== 2. The while loop
  {
    id: "lesson-t4-while",
    topicId: "t4",
    order: 2,
    title: "The while loop: syntax, flow and conditions",
    conceptIds: ["t4-while", "t4-truthiness"],
    sources: [{ file: "topic4", units: [3, 4, 5, 6, 7, 8], note: "While loop: flowchart, syntax, semantics, conditions, numbers and None" }],
    explanation: [
      {
        heading: "What a while loop does",
        body: [
          "The **while loop** statement lets you repeatedly execute a block of statements **as long as a condition is true** (slide 4).",
          "The flowchart on slide 4 shows the idea. Python tests the condition. If it is True, it runs the statements and then goes back to test the condition again. If it is False, it leaves the loop and carries on with the rest of the program.",
        ],
        source: { file: "topic4", units: [4], note: "The while loop and its flowchart" },
      },
      {
        heading: "Syntax of the while loop",
        body: ["Slide 5 shows the template: `while <test_condition>:` on one line, followed by `<Body of while>` on the next lines."],
        bullets: [
          "Start with the keyword `while` (lowercase).",
          "Then write the condition, for example `count <= 5`.",
          "End the line with a colon `:`.",
          "Indent the body (usually 4 spaces). Every indented line under the header belongs to the loop.",
        ],
        source: { file: "topic4", units: [5], note: "Syntax template and flowchart" },
      },
      {
        heading: "How Python runs a while loop",
        body: [
          "Slide 6 explains the order. The condition is checked **first**. The body is entered only if the condition is True. After one iteration (one run of the body), the condition is checked again. This continues until the condition is False.",
          "Because the test comes first, the body can run **zero times**: if the condition is already False at the start, Python skips the body completely.",
          "The body starts with indentation, and the **first unindented line** marks its end. That line is not part of the loop. It runs once, after the loop finishes.",
        ],
        source: { file: "topic4", units: [6], note: "Condition checked first; first unindented line ends the body" },
      },
      {
        heading: "The condition is a Boolean expression",
        body: [
          "Slide 7 says the test condition is a **Boolean expression**: an expression whose value is True or False. You build it with comparison operators and logical operators (both from Topic 2).",
          "The slide writes the logical operators in capitals (AND, OR, NOT). In real Python they must be lowercase: `and`, `or`, `not`.",
        ],
        table: {
          headers: ["Kind", "Operators", "Example condition"],
          rows: [
            ["Comparison", "`==` `!=` `<` `<=` `>` `>=`", "`count <= 10`"],
            ["Logical", "`and` `or` `not`", "`a < 5 and b > 7`"],
          ],
        },
        source: { file: "topic4", units: [7], note: "Boolean condition; logical and comparison operators" },
      },
      {
        heading: "Numbers and None as conditions",
        body: [
          "Slide 8 adds a rule: Python interprets any **non-zero number** used as a condition as True. **0** and **None** are interpreted as False.",
          "So `while 0:` and `while None:` never run their body, and nothing is printed.",
          "Slide 8 also shows `while 3:` with `print(\"Hello\")` in the body. 3 is a non-zero number, so the condition is always true, and nothing in the body changes it. This program would keep printing Hello again and again; the slide's screenshot shows only the first lines. That is why it is not one of the runnable examples below.",
        ],
        source: { file: "topic4", units: [8], note: "Non-zero numbers are True; 0 and None are False" },
      },
    ],
    keyPoints: [
      "A while loop repeats its body as long as its condition is True.",
      "Syntax: `while condition:` followed by an indented body. Do not forget the colon.",
      "The condition is checked first, before every iteration, so the body may run zero times.",
      "The first unindented line after the body is not part of the loop. It runs once, after the loop ends.",
      "Conditions use comparison operators (`==`, `!=`, `<`, `<=`, `>`, `>=`) and lowercase logical operators (`and`, `or`, `not`).",
      "A non-zero number counts as True; 0 and None count as False.",
    ],
    examples: [
      {
        title: "Inside and after the loop",
        code: 'x = 1\nwhile x < 4:\n    print("Inside the loop, x =", x)\n    x = x + 1\nprint("After the loop, x =", x)',
        output: "Inside the loop, x = 1\nInside the loop, x = 2\nInside the loop, x = 3\nAfter the loop, x = 4\n",
        lineNotes: [
          { line: 2, text: "Tested before every iteration: True for x = 1, 2 and 3, False for x = 4." },
          { line: 3, text: "Indented, so it is part of the body and repeats." },
          { line: 4, text: "Changes x so that the condition eventually becomes False." },
          { line: 5, text: "The first unindented line: it runs once, after the loop." },
        ],
        source: { file: "topic4", units: [6], note: "Check, run the body, check again; first unindented line ends the body" },
        origin: "original",
      },
      {
        title: "A body that runs zero times",
        code: 'x = 10\nwhile x < 5:\n    print("This line never prints")\n    x = x + 1\nprint("Done")',
        output: "Done\n",
        lineNotes: [
          { line: 2, text: "10 < 5 is False at the very first test, so the body is skipped." },
          { line: 5, text: "Python goes straight to the first line after the body." },
        ],
        source: { file: "topic4", units: [6], note: "The body is entered only if the condition is True" },
        origin: "original",
      },
      {
        title: "0 and None count as False",
        code: 'while None:\n    print("Hello")\nwhile 0:\n    print("Hello")\nprint("Neither loop printed anything")',
        output: "Neither loop printed anything\n",
        lineNotes: [
          { line: 1, text: "None is interpreted as False, so this body never runs." },
          { line: 3, text: "0 is interpreted as False too." },
          { line: 5, text: "Only this line prints." },
        ],
        source: { file: "topic4", units: [8], note: "while None: and while 0:" },
        origin: "adapted",
      },
      {
        title: "A condition with and",
        code: 'a = 1\nb = 10\nwhile a < 5 and b > 7:\n    print(a, b)\n    a = a + 1\n    b = b - 1\nprint("Stopped at", a, b)',
        output: "1 10\n2 9\n3 8\nStopped at 4 7\n",
        lineNotes: [
          { line: 3, text: "Both comparisons must be True for the loop to continue. The logical operator is the lowercase keyword and." },
          { line: 7, text: "With a = 4 and b = 7, b > 7 is False, so the whole condition is False and the loop ends." },
        ],
        source: { file: "topic4", units: [7], note: "Conditions with comparison and logical operators" },
        origin: "original",
      },
    ],
    mistakes: [
      {
        title: "Forgetting the colon",
        wrong: "x = 1\nwhile x < 4\n    print(x)\n    x = x + 1",
        right: "x = 1\nwhile x < 4:\n    print(x)\n    x = x + 1",
        explanation:
          "The while header must end with a colon, as in slide 5's template. Without it, Python reports a SyntaxError and runs nothing.",
      },
      {
        title: "Not indenting the body",
        wrong: "x = 1\nwhile x < 4:\nprint(x)\nx = x + 1",
        right: "x = 1\nwhile x < 4:\n    print(x)\n    x = x + 1",
        explanation:
          "The body must be indented (slides 5 and 6). With nothing indented under the header, Python reports an IndentationError. If only some lines are indented, only those lines repeat.",
      },
      {
        title: "Expecting the body to run at least once",
        explanation:
          "The condition is checked first (slide 6). If it is False at the start, the body runs zero times. In the second example, x = 10 makes `x < 5` False straight away, so only Done is printed.",
      },
      {
        title: "Writing AND, OR, NOT in capitals",
        wrong: "while a < 5 AND b > 7:",
        right: "while a < 5 and b > 7:",
        explanation:
          "Slide 7 writes the logical operators in capitals, but Python only knows the lowercase keywords `and`, `or`, `not`. Writing AND causes a SyntaxError.",
      },
    ],
    tryIt: {
      prompt:
        "Run the program. Then change the first line so that the body runs zero times, and then so that it runs exactly once. Predict the output before each run.",
      starterCode: 'x = 1\nwhile x < 4:\n    print("Inside the loop, x =", x)\n    x = x + 1\nprint("After the loop, x =", x)',
    },
    quickCheck: ["pm-t4-004", "pm-t4-005", "pm-t4-009"],
    sourceNotes: [
      "Slide 5: the slide's text box is narrow, so `while` and `<test_condition>:` wrap onto two lines. In real code they are on one line: `while <test_condition>:`. The small \"indentation\" bracket is drawn over the condition, but it is meant to mark the indent before the body.",
      "Slide 6 says \"evaluate to False\" (it should be \"evaluates\") and uses both \"test expression\" and \"<test_condition>\". They mean the same thing.",
      "Slide 7 writes the logical operators as AND, OR, NOT. Python's operators are lowercase `and`, `or`, `not`; the capital forms cause a SyntaxError. The slide also puts \"Use the logical operators\" under a True arrow and \"Use the comparison operators\" under a False arrow. That layout has no meaning: both kinds of operator can be used in any condition, and every condition is either True or False.",
      "Slide 8: the `while 3:` program never stops by itself, because 3 always counts as True. The screenshot shows only the first 12 lines of output, and the slide does not say that the program keeps going. The slide's rule covers numbers and None only.",
    ],
  },

  // ======================================================================== 3. Counter pattern
  {
    id: "lesson-t4-counter",
    topicId: "t4",
    order: 3,
    title: "Counting with a while loop",
    conceptIds: ["t4-counter"],
    sources: [{ file: "topic4", units: [9, 10, 11], note: "Print 1 to 5; initialization/condition/update pattern; count down 5 to 1" }],
    explanation: [
      {
        heading: "Counting from 1 to 5",
        body: [
          "Slide 9 prints the numbers from 1 to 5 with a while loop. `A` starts at 1. The loop runs while `A <= 5`. Each time, it prints `A` and then adds 1 to it.",
          "After printing 5, `A` becomes 6. The test `6 <= 5` is False, so the loop stops.",
        ],
        source: { file: "topic4", units: [9], note: "while loop to print numbers from 1 to 5" },
      },
      {
        heading: "The three-part pattern",
        body: [
          "Slide 10 shows the pattern that every counting loop follows. Each part has a job.",
          "The slide calls `A` the \"Iterator\". In these lessons we call it the **loop counter**: the variable that controls how many times the loop runs.",
        ],
        table: {
          headers: ["Part (slide 10)", "Code on the slide", "Job"],
          rows: [
            ["Initialization", "`A=1`", "Give the counter its first value, before the loop"],
            ["Condition", "`while A<=5:`", "Decide whether to run the body again"],
            ["Update (the slide says \"Updation\")", "`A=A+1`", "Change the counter inside the body, so the condition becomes False in the end"],
          ],
        },
        source: { file: "topic4", units: [10], note: "Initialization, Condition, Updation" },
      },
      {
        heading: "Tracing the loop step by step",
        body: [
          "A **trace table** follows the loop one test at a time. Here is slide 9's loop. Each row is one test of the condition.",
          "The body runs 5 times, but the condition is tested 6 times. After the loop, `A` is 6: the first value that made the condition False.",
        ],
        table: {
          headers: ["Test", "A before the test", "A <= 5 ?", "Printed", "A after the update"],
          rows: [
            ["1", "1", "True", "1", "2"],
            ["2", "2", "True", "2", "3"],
            ["3", "3", "True", "3", "4"],
            ["4", "4", "True", "4", "5"],
            ["5", "5", "True", "5", "6"],
            ["6", "6", "False", "(loop ends)", "—"],
          ],
        },
        source: { file: "topic4", units: [9], note: "Output 1 to 5" },
      },
      {
        heading: "Counting down",
        body: [
          "Slide 11 counts down from 5 to 1. The pattern is the same, but the counter starts high and goes down: initialize `N=5`, test `N>=1`, update `N=N-1`.",
          "When `N` reaches 0, the test `0 >= 1` is False and the loop stops.",
        ],
        source: { file: "topic4", units: [11], note: "Counts down from 5 until 1" },
      },
      {
        heading: "Choosing < or <=",
        body: [
          "The comparison decides the last value. With `A <= 5` the loop includes 5. With `A < 5` it stops after 4, so it runs one time fewer. This kind of mistake is called an **off-by-one error**.",
          "A quick check: a counter that starts at 1, goes up by 1 and is tested with `<= n` runs exactly n times. Always check the first and the last value when you trace a loop.",
        ],
        source: { file: "topic4", units: [9], note: "while A<=5 includes 5" },
      },
    ],
    keyPoints: [
      "A counting loop has three parts: initialization, condition, update (slide 10).",
      "Initialize the counter before the loop and update it inside the body.",
      "Count up with `A = A + 1`; count down with `N = N - 1` (slide 11).",
      "Without the update the condition never becomes False, so the loop never stops.",
      "`<=` includes the end value and `<` leaves it out. Check the first and last values when you trace.",
      "After the loop, the counter holds the first value that made the condition False.",
    ],
    examples: [
      {
        title: "Print 1 to 5 (slide 9)",
        code: "A = 1\nwhile A <= 5:\n    print(A)\n    A = A + 1",
        output: "1\n2\n3\n4\n5\n",
        lineNotes: [
          { line: 1, text: "Initialization: the counter starts at 1." },
          { line: 2, text: "Condition: tested before each iteration." },
          { line: 3, text: "The work done on each iteration." },
          { line: 4, text: "Update: without this line the loop would never stop." },
        ],
        source: { file: "topic4", units: [9], note: "while loop to print numbers from 1 to 5" },
        origin: "source",
      },
      {
        title: "Count down from 5 to 1 (slide 11)",
        code: "N = 5\nwhile N >= 1:\n    print(N)\n    N = N - 1",
        output: "5\n4\n3\n2\n1\n",
        lineNotes: [
          { line: 1, text: "Initialization: start at the high end." },
          { line: 2, text: "Counting down, so the test is N >= 1." },
          { line: 4, text: "The update goes down by 1 each time." },
        ],
        source: { file: "topic4", units: [11], note: "Counts down from 5 until 1" },
        origin: "source",
      },
      {
        title: "Using < instead of <=",
        code: 'A = 1\nwhile A < 5:\n    print(A)\n    A = A + 1\nprint("After the loop A is", A)',
        output: "1\n2\n3\n4\nAfter the loop A is 5\n",
        lineNotes: [
          { line: 2, text: "With < the value 5 fails the test, so 5 is not printed." },
          { line: 5, text: "Shows the counter's final value: the first value that made the condition False." },
        ],
        source: { file: "topic4", units: [9], note: "Variation of the 1 to 5 loop" },
        origin: "adapted",
      },
      {
        title: "Counting in steps of 2",
        code: "n = 2\nwhile n <= 10:\n    print(n)\n    n = n + 2",
        output: "2\n4\n6\n8\n10\n",
        lineNotes: [
          { line: 1, text: "Initialization: start at 2." },
          { line: 4, text: "The update can add any amount. Here it adds 2, so only even numbers are printed." },
        ],
        source: { file: "topic4", units: [9, 10], note: "Counter pattern with a different update" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Forgetting the update",
        wrong: "A = 1\nwhile A <= 5:\n    print(A)",
        right: "A = 1\nwhile A <= 5:\n    print(A)\n    A = A + 1",
        explanation:
          "Without `A = A + 1`, A stays 1, so `A <= 5` is True every time and the loop never stops: it keeps printing 1. Every counting loop needs the update step from slide 10.",
      },
      {
        title: "Off-by-one: < instead of <=",
        wrong: "A = 1\nwhile A < 5:\n    print(A)\n    A = A + 1",
        right: "A = 1\nwhile A <= 5:\n    print(A)\n    A = A + 1",
        explanation:
          "With `A < 5` the loop prints only 1 to 4. Ask: should the loop run when the counter equals the end value? If yes, use `<=`.",
      },
      {
        title: "Updating in the wrong direction",
        wrong: "N = 5\nwhile N >= 1:\n    print(N)\n    N = N + 1",
        right: "N = 5\nwhile N >= 1:\n    print(N)\n    N = N - 1",
        explanation:
          "When counting down, the counter must go down. With `N = N + 1`, N gets bigger, `N >= 1` stays True, and the loop never stops.",
      },
      {
        title: "Leaving the update outside the body",
        wrong: "A = 1\nwhile A <= 5:\n    print(A)\nA = A + 1",
        right: "A = 1\nwhile A <= 5:\n    print(A)\n    A = A + 1",
        explanation:
          "The update must be indented inside the body. Here `A = A + 1` is unindented, so it comes after the loop (slide 6: the first unindented line ends the body). The loop keeps printing 1 and never reaches that line.",
      },
    ],
    tryIt: {
      prompt:
        "Change slide 9's program so it prints the numbers from 1 to 10. Then change it to count down from 10 to 1. For the countdown you need to change all three parts of the pattern.",
      starterCode: "A = 1\nwhile A <= 5:\n    print(A)\n    A = A + 1",
    },
    quickCheck: ["pm-t4-013", "pm-t4-015", "pm-t4-016"],
    sourceNotes: [
      "Slide 10 calls the variable `A` an \"Iterator\". In Python, \"iterator\" has a different, more advanced meaning, so these lessons call `A` the loop counter.",
      "Slide 10 uses the word \"Updation\"; the usual English word is \"update\".",
      "Slide 10's flowchart has no box for the loop body (`print (A)`); only the update appears on the True path. In the real loop, `print(A)` runs first and then `A=A+1`, on every iteration.",
      "Slides 9 and 10 write `print (A)` and `A=A+1`, and slide 11 writes `N=N-1`, without the usual spaces. Python accepts both styles; the examples here use the common spacing `print(A)` and `A = A + 1`.",
    ],
  },

  // ======================================================================== 4. Accumulators
  {
    id: "lesson-t4-accumulator",
    topicId: "t4",
    order: 4,
    title: "Totals, averages and products",
    conceptIds: ["t4-accumulator"],
    sources: [
      { file: "topic4", units: [12, 13, 14], note: "Sum 1..10; average of 5 numbers; factorial; average of N numbers" },
      { file: "lab-ch4-iiii", units: [1, 3, 4, 12, 13], note: "Rainfall over 3 days (cell 4 has a bug); practice hours over 7 days" },
    ],
    explanation: [
      {
        heading: "Adding up with a running total",
        body: [
          "Slide 12 finds the sum 1 + 2 + … + 10. It uses two variables: the counter `i` and a running total called `sum`.",
          "The total starts at 0 **before** the loop. Inside the loop, `sum = sum + i` adds the current number. After the loop, the total holds the answer and is printed once. This is called the **accumulator** pattern.",
          "On the slide, the `1` in `i = 1` is pasted over a screenshot that says `i = 0`. Both start values print 55, because the extra first iteration with `i = 0` only adds 0.",
        ],
        table: {
          headers: ["i", "sum after `sum = sum + i`"],
          rows: [
            ["1", "1"],
            ["2", "3"],
            ["3", "6"],
            ["4", "10"],
            ["5", "15"],
            ["6", "21"],
            ["7", "28"],
            ["8", "36"],
            ["9", "45"],
            ["10", "55"],
          ],
        },
        source: { file: "topic4", units: [12], note: "Sum of numbers from 1 to 10" },
      },
      {
        heading: "Average of 5 numbers",
        body: [
          "Slide 13's first exercise reads 5 numbers from the user and prints their average: average = sum of five numbers / 5.",
          "Use a counter to repeat 5 times. In the body, read one number, convert it with `float()`, and add it to the total. Divide **after** the loop, once all 5 numbers have been added. You will write this program in the Try it box.",
        ],
        source: { file: "topic4", units: [13], note: "Average of 5 numbers given by the user" },
      },
      {
        heading: "Multiplying: the factorial",
        body: [
          "Slide 13's second exercise is the factorial: 5! = 5 × 4 × 3 × 2 × 1 = 120.",
          "This is an accumulator too, but it multiplies instead of adding. A product must start at **1**, not 0, because anything multiplied by 0 stays 0.",
        ],
        source: { file: "topic4", units: [13], note: "Factorial of any number" },
      },
      {
        heading: "Average of N numbers",
        body: [
          "Slide 14 lets the user choose how many numbers to enter. First read N. Then loop N times, reading and adding one number each time. Finally, average = sum of numbers / N.",
          "The sample run reads 4, then 2, 4, 6 and 8. The total is 20, and 20 / 4 = 5.0. The `/` operator always gives a float, which is why the slide shows 5.0.",
        ],
        source: { file: "topic4", units: [14], note: "Average of N numbers with a sample run" },
      },
      {
        heading: "Lab: practice hours over 7 days",
        body: [
          "The Chapter 4 lab (cells 12–13) tracks a student's practice hours for 7 days. `total_hours` starts at 0, the loop runs while `count < 7`, and each day's hours are added to the total.",
          "After the loop, an if…else prints \"Good Practice!\" when the total is 10 or more, otherwise \"Need more Practice!\", and then the total is printed. Cell 12 also asks you to convert the program to a for loop. That part comes after slide 18 and is not covered here.",
        ],
        source: { file: "lab-ch4-iiii", units: [12, 13], note: "Practice hours with a while loop" },
      },
      {
        heading: "Lab: find the bug in the rainfall program",
        body: [
          "Lab cell 1 asks for the total and the average rainfall over three days. Cell 4 reads the three days with a while loop, but it computes `avg = total/days` **inside** the loop. `days` holds the value that was just typed, so the total is divided by the last day's rainfall instead of by 3.",
          "The notebook's own output shows it: Total = 120.0 but Average = 3.0 (the last day was 40 mm, and 120 / 40 = 3.0). The real average is 120 / 3 = 40.0, which by rule 1 of cell 1 means physical classes are canceled. The fix is to compute `avg = total / 3` once, after the loop.",
          "Cell 4 also tests `days >= 40` after the loop, which only looks at the last day. To check every day, the test has to happen inside the loop (see the lesson on while loops with conditionals).",
        ],
        source: { file: "lab-ch4-iiii", units: [1, 3, 4], note: "Rainfall task; while-loop version with a bug (cell 4)" },
      },
    ],
    keyPoints: [
      "Accumulator pattern: set the total before the loop, update it inside the loop, use it after the loop.",
      "Start a sum at 0 and a product at 1.",
      "Read each new value inside the loop, then add it to the total.",
      "Compute an average after the loop: the total divided by the number of values.",
      "`/` always gives a float, so averages print like 5.0.",
      "Slide 12's program prints 55 whether i starts at 1 or at 0.",
    ],
    examples: [
      {
        title: "Sum of 1 to 10 (slide 12)",
        code: "# i is the loop counter\ni = 1\n# sum holds the result\nsum = 0\n# start of while loop\nwhile i <= 10:\n    sum = sum + i\n    i = i + 1\n# end of while loop\nprint('the sum is ', sum)",
        output: "the sum is  55\n",
        lineNotes: [
          { line: 2, text: "The counter starts at 1 (the screenshot under the slide shows 0; both give 55)." },
          { line: 4, text: "The running total starts at 0, before the loop." },
          { line: 7, text: "Add the current number to the total." },
          { line: 10, text: "Printed once, after the loop. print adds a space between its values, so there are two spaces before 55." },
        ],
        source: { file: "topic4", units: [12], note: "Sum of numbers from 1 to 10" },
        origin: "source",
      },
      {
        title: "Factorial (slide 13)",
        code: 'n = int(input("Enter a number: "))\nfactorial = 1\ni = 1\nwhile i <= n:\n    factorial = factorial * i\n    i = i + 1\nprint(f"{n}! = {factorial}")',
        inputs: ["5"],
        output: "Enter a number: 5\n5! = 120\n",
        lineNotes: [
          { line: 2, text: "A product starts at 1, not 0." },
          { line: 4, text: "i takes the values 1 to n." },
          { line: 5, text: "Multiply instead of add." },
          { line: 7, text: "An f-string with plain {variables} (Topic 2)." },
        ],
        source: { file: "topic4", units: [13], note: "Factorial exercise" },
        origin: "adapted",
      },
      {
        title: "Average of N numbers (slide 14)",
        code: 'N = int(input("How many numbers you want to enter? "))\ntotal = 0\ncount = 0\nwhile count < N:\n    number = float(input("Enter a number: "))\n    total = total + number\n    count = count + 1\naverage = total / N\nprint("the average value of the", N, "numbers is", average)',
        inputs: ["4", "2", "4", "6", "8"],
        output:
          "How many numbers you want to enter? 4\nEnter a number: 2\nEnter a number: 4\nEnter a number: 6\nEnter a number: 8\nthe average value of the 4 numbers is 5.0\n",
        lineNotes: [
          { line: 1, text: "The user decides how many numbers there will be." },
          { line: 4, text: "count goes 0, 1, … N - 1, so the body runs N times." },
          { line: 5, text: "Each number is read inside the loop." },
          { line: 8, text: "Divide once, after the loop." },
        ],
        source: { file: "topic4", units: [14], note: "Average of N numbers; sample run" },
        origin: "adapted",
      },
      {
        title: "Practice hours over 7 days (lab cells 12–13)",
        code: "total_hours = 0\ncount = 0\nwhile count < 7:\n    num_hours = float(input('Enter daily practice hours: '))\n    total_hours = total_hours + num_hours\n    count+=1\n\nif total_hours>=10:\n    print('Good Practice!')\nelse:\n    print('Need more Practice!')\nprint('Total hours = ', total_hours)",
        inputs: ["2", "1.5", "3", "0", "2.5", "2", "3"],
        output:
          "Enter daily practice hours: 2\nEnter daily practice hours: 1.5\nEnter daily practice hours: 3\nEnter daily practice hours: 0\nEnter daily practice hours: 2.5\nEnter daily practice hours: 2\nEnter daily practice hours: 3\nGood Practice!\nTotal hours =  14.0\n",
        lineNotes: [
          { line: 1, text: "The total starts at 0, before the loop." },
          { line: 3, text: "Repeat for 7 days: count is 0, 1, … 6." },
          { line: 6, text: "count+=1 is the same as count = count + 1 (Topic 2)." },
          { line: 8, text: "After the loop: one decision about the whole week's total." },
        ],
        source: { file: "lab-ch4-iiii", units: [12, 13], note: "Practice hours with a while loop" },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Resetting the total inside the loop",
        wrong: 'count = 0\nwhile count < 5:\n    total = 0\n    number = float(input("Enter a number: "))\n    total = total + number\n    count = count + 1',
        right: 'total = 0\ncount = 0\nwhile count < 5:\n    number = float(input("Enter a number: "))\n    total = total + number\n    count = count + 1',
        explanation:
          "`total = 0` inside the loop runs on every iteration, so each new number wipes out the earlier ones. At the end, total holds only the last number. Set the total once, before the loop.",
      },
      {
        title: "Starting a factorial at 0",
        wrong: "factorial = 0\ni = 1\nwhile i <= 5:\n    factorial = factorial * i\n    i = i + 1",
        right: "factorial = 1\ni = 1\nwhile i <= 5:\n    factorial = factorial * i\n    i = i + 1",
        explanation: "0 times anything is 0, so the answer is always 0. Products start at 1; sums start at 0.",
      },
      {
        title: "Computing the average inside the loop or with the wrong divisor",
        wrong: "total = 0\ncount = 0\nwhile count < 3:\n    days = float(input('Enter the rainfall (in mm): '))\n    total = total + days\n    avg = total/days\n    count+=1",
        right: "total = 0\ncount = 0\nwhile count < 3:\n    days = float(input('Enter the rainfall (in mm): '))\n    total = total + days\n    count+=1\navg = total / 3",
        explanation:
          "Lab cell 4 divides by `days`, the last value typed, so with a total of 120 and a last day of 40 it prints 3.0 instead of 40.0. Divide by the number of values (3 here, or N on slide 14), once, after the loop.",
      },
    ],
    tryIt: {
      prompt:
        "Slide 13 exercise: complete the program so it reads 5 numbers from the user and prints their average (average = sum of five numbers / 5). Test it with 10, 20, 30, 40 and 50: the average should be 30.0.",
      starterCode:
        "total = 0\ncount = 0\nwhile count < 5:\n    # read a number with float(input(...))\n    # add it to total\n    count = count + 1\n# compute the average after the loop and print it\n",
      inputsHint: "10, 20, 30, 40, 50",
    },
    quickCheck: ["pm-t4-018", "pm-t4-020", "pm-t4-021"],
    sourceNotes: [
      "Slide 12: the `1` in `i = 1` is not part of the screenshot. It is a separate text box placed over it; the screenshot underneath reads `i = 0`. Both start values give 55, so the slide's output is correct either way.",
      "Slide 12: the comment \"sum variable hold the result\" should say \"holds\", and the slide calls `i` an \"iterator\" (it is a loop counter). The name `sum` hides Python's built-in sum function; the program still works, but a name such as `total` is safer.",
      "Slide 13 gives no solution or sample output for either exercise. The factorial program and the Try it starter here are written for this course.",
      "Slide 14: \"Were the average\" should be \"Where the average\". The sample output says \"the 4 number\"; the example here prints \"numbers\". The value 5.0 is correct for 2, 4, 6 and 8.",
      "Lab cell 4 computes `avg = total/days` inside the loop, which divides by the last day's rainfall instead of by 3 (its output shows Total = 120.0 but Average = 3.0), and it checks only the last day for 40 mm or more. Use it only as a find-the-bug exercise.",
      "Lab cell 12 asks for the message \"Good practice!\", while cell 13 prints \"Good Practice!\" and prints the message before the total. Cell 12's last part (convert the program to a for loop) is outside this course section.",
    ],
  },

  // ======================================================================== 5. Multiplication table
  {
    id: "lesson-t4-table",
    topicId: "t4",
    order: 5,
    title: "Printing a multiplication table",
    conceptIds: ["t4-table"],
    sources: [{ file: "topic4", units: [15], note: "Multiplication table exercise; last multiplier 10" }],
    explanation: [
      {
        heading: "The task",
        body: [
          "Slide 15: write a program that reads an integer and displays its multiplication table. The last multiplier must be 10.",
          "For the number 5 the example output starts with `5 * 1 = 5`, `5 * 2 = 10`, and ends with `5 * 10 = 50`.",
        ],
        source: { file: "topic4", units: [15], note: "Exercise text and example output" },
      },
      {
        heading: "Planning the loop",
        body: [
          "The number stays the same on every line; only the multiplier changes. So the multiplier is the loop counter.",
        ],
        bullets: [
          "Initialization: `multiplier = 1`",
          "Condition: `while multiplier <= 10:` (10 is the last multiplier)",
          "Body: print one line of the table",
          "Update: `multiplier = multiplier + 1`",
        ],
        source: { file: "topic4", units: [15], note: "Multipliers 1 to 10" },
      },
      {
        heading: "Building each line",
        body: [
          "print with commas puts one space between the values: `print(number, \"*\", multiplier, \"=\", number * multiplier)` prints `5 * 1 = 5`. An f-string such as `f\"{number} * {multiplier} = {product}\"` gives the same line.",
          "The heading \"Multiplication table:\" should appear once, so it is printed **before** the loop. Anything inside the loop body is printed on every iteration.",
        ],
        source: { file: "topic4", units: [15], note: "Example output lines" },
      },
      {
        heading: "Checking the boundaries",
        body: [
          "The first line must use multiplier 1 and the last line multiplier 10, so there are exactly 10 lines. Using `< 10` would stop at 9, and starting at 0 would add an extra line `5 * 0 = 0`.",
          "Remember to convert the input with `int()`. `input()` returns a string, and a string times a number repeats the string, so `\"5\" * 3` is `555`, not 15.",
        ],
        source: { file: "topic4", units: [15], note: "Read an integer value; last multiplier 10" },
      },
    ],
    keyPoints: [
      "The multiplier is the loop counter: start at 1, test `<= 10`, add 1.",
      "The number read from the user stays the same on every line.",
      "Print the heading before the loop so it appears only once.",
      "Convert the input with `int()`; otherwise `*` repeats the string.",
      "Check the boundaries: the first line uses 1 and the last line uses 10.",
    ],
    examples: [
      {
        title: "Multiplication table of a number (slide 15)",
        code: 'number = int(input("Enter a number: "))\nprint("Multiplication table:")\nmultiplier = 1\nwhile multiplier <= 10:\n    print(number, "*", multiplier, "=", number * multiplier)\n    multiplier = multiplier + 1',
        inputs: ["5"],
        output:
          "Enter a number: 5\nMultiplication table:\n5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50\n",
        lineNotes: [
          { line: 1, text: "Read the number and convert it to an integer." },
          { line: 2, text: "Before the loop, so the heading is printed once." },
          { line: 4, text: "The last multiplier is 10, so use <= 10." },
          { line: 5, text: "The number stays the same; only the multiplier changes." },
          { line: 6, text: "Update: move on to the next multiplier." },
        ],
        source: { file: "topic4", units: [15], note: "Multiplication table exercise" },
        origin: "adapted",
      },
      {
        title: "The same table with an f-string",
        code: 'number = int(input("Enter a number: "))\nmultiplier = 1\nwhile multiplier <= 10:\n    product = number * multiplier\n    print(f"{number} * {multiplier} = {product}")\n    multiplier = multiplier + 1',
        inputs: ["7"],
        output:
          "Enter a number: 7\n7 * 1 = 7\n7 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56\n7 * 9 = 63\n7 * 10 = 70\n",
        lineNotes: [
          { line: 4, text: "Store the product in a variable first." },
          { line: 5, text: "An f-string with plain {variables} builds the line (Topic 2)." },
        ],
        source: { file: "topic4", units: [15], note: "Multiplication table exercise" },
        origin: "adapted",
      },
      {
        title: "Choosing the last multiplier",
        code: 'number = int(input("Table of: "))\nlast = int(input("Last multiplier: "))\nmultiplier = 1\nwhile multiplier <= last:\n    print(number, "*", multiplier, "=", number * multiplier)\n    multiplier = multiplier + 1',
        inputs: ["3", "4"],
        output: "Table of: 3\nLast multiplier: 4\n3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n",
        lineNotes: [
          { line: 2, text: "The user chooses where the table ends." },
          { line: 4, text: "The condition uses the variable instead of the fixed value 10." },
        ],
        source: { file: "topic4", units: [15], note: "Variation: the last multiplier is read from the user" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Stopping at 9",
        wrong: "multiplier = 1\nwhile multiplier < 10:",
        right: "multiplier = 1\nwhile multiplier <= 10:",
        explanation: "With `< 10` the line for 10 is never printed, because `10 < 10` is False. Slide 15 says the last multiplier is 10, so use `<= 10`.",
      },
      {
        title: "Forgetting int()",
        wrong: 'number = input("Enter a number: ")',
        right: 'number = int(input("Enter a number: "))',
        explanation:
          "`input()` returns a string. A string times a number repeats the string, so with 5 the table prints `5 * 2 = 55` and `5 * 3 = 555`. There is no error message, so this bug is easy to miss.",
      },
      {
        title: "Printing the heading inside the loop",
        wrong: 'multiplier = 1\nwhile multiplier <= 10:\n    print("Multiplication table:")\n    print(number, "*", multiplier, "=", number * multiplier)\n    multiplier = multiplier + 1',
        right: 'print("Multiplication table:")\nmultiplier = 1\nwhile multiplier <= 10:\n    print(number, "*", multiplier, "=", number * multiplier)\n    multiplier = multiplier + 1',
        explanation: "Everything in the loop body runs on every iteration, so the heading would be printed 10 times. Print it once, before the loop.",
      },
      {
        title: "Starting the multiplier at 0",
        wrong: "multiplier = 0",
        right: "multiplier = 1",
        explanation: "Starting at 0 prints an extra first line, `5 * 0 = 0`, so the table has 11 lines. The first multiplier should be 1.",
      },
    ],
    tryIt: {
      prompt:
        "Change the program so it prints the table up to 12 instead of 10. Then make it print the lines in reverse order, from multiplier 10 down to 1.",
      starterCode:
        'number = int(input("Enter a number: "))\nprint("Multiplication table:")\nmultiplier = 1\nwhile multiplier <= 10:\n    print(number, "*", multiplier, "=", number * multiplier)\n    multiplier = multiplier + 1',
      inputsHint: "for example 5",
    },
    quickCheck: ["pm-t4-024", "pm-t4-025", "pm-t4-026"],
    sourceNotes: [
      "Slide 15's example output is a picture of a document. Its wide, tab-aligned spacing (for example `5 * 1        =      5`) is page layout. A program that prints with commas puts single spaces between the values: `5 * 1 = 5`.",
      "The \"....\" line in the example output stands for the lines that were left out (5 * 5 to 5 * 9). The program must print all ten lines.",
      "Slide 15 gives no solution; the programs in this lesson are written for this course.",
    ],
  },

  // ======================================================================== 6. while + conditionals
  {
    id: "lesson-t4-while-conditionals",
    topicId: "t4",
    order: 6,
    title: "Decisions inside a while loop",
    conceptIds: ["t4-while-conditionals"],
    sources: [
      { file: "topic4", units: [16, 17, 18], note: "While loop and conditionals; pass/fail for 4 students; discount for 3 products" },
      { file: "lab-ch4-iiii", units: [12, 13], note: "Practice hours: if…else after the loop" },
    ],
    explanation: [
      {
        heading: "Decisions inside a loop",
        body: [
          "Slide 16 starts a new section: while loops combined with conditionals. The body of a while loop can contain any statements, including `if`, `if…else` and `if…elif…else` from Topic 3.",
          "When the `if` is inside the body, Python makes the decision **on every iteration**, using the value read or computed in that iteration.",
        ],
        bullets: [
          "The `if` line is indented once, because it is in the loop body.",
          "The lines inside the `if` and `else` blocks are indented twice.",
          "Lines indented once after the `if…else` are still in the loop body, so they run on every iteration.",
        ],
        source: { file: "topic4", units: [16], note: "While loop and conditionals" },
      },
      {
        heading: "Pass or fail for 4 students",
        body: [
          "Slide 17: read the final mark of 4 students and print a pass or fail message for each one. A counter counts the students (1 to 4), and the if…else inside the loop decides for each mark.",
          "The slide's text says a student passes if the score is \"higher than 50\", which in Python is `mark > 50`. But the slide's sample output prints \"you Passed\" for a mark of exactly 50, which only happens with `mark >= 50`. In this lesson we use the rule **a mark of 50 or more passes** (`mark >= 50`), so our run matches the sample output. In an exam or exercise, always follow the exact rule the question states.",
        ],
        source: { file: "topic4", units: [17], note: "Pass/fail exercise with sample output" },
      },
      {
        heading: "Discount for 3 products",
        body: [
          "Slide 18: read the prices of 3 products. If a price is higher than 50 OMR the discount is 40%, otherwise 20%. Discounted price = product price - (product price * discount percentage), with the percentage written as a decimal: 40% is 0.4 and 20% is 0.2.",
          "The same text-versus-output problem appears here. With \"higher than 50\" (`price > 50`), a price of 50 gets 20% and becomes 40.0. The sample output shows 30.0, which is a 40% discount, so the program behind the screenshot used `price >= 50`. Our example uses `>= 50` to match the sample output; in a question, use the rule the question states.",
        ],
        source: { file: "topic4", units: [18], note: "Discount exercise with sample output" },
      },
      {
        heading: "Where to put the counter update",
        body: [
          "The update `count = count + 1` must run on **every** iteration, whichever branch was chosen. So it goes inside the loop body but **after** the if…else, at the same indentation as the `if`.",
          "If you indent it inside the `if` block, it only runs when the condition is True. Failed marks would then not be counted, the program would ask for extra marks, and if every mark failed the loop would never stop.",
        ],
        source: { file: "topic4", units: [17, 18], note: "A counter-controlled loop with if…else in the body" },
      },
      {
        heading: "Inside the loop or after it?",
        body: [
          "Compare with the lab's practice-hours program (cells 12–13). There the if…else is **after** the loop and not indented, so it runs once and judges the week's total.",
          "Ask yourself: is the decision about each value? Then put the if inside the loop, like slides 17 and 18. Is it about the final result? Then put it after the loop, like the lab.",
        ],
        source: { file: "lab-ch4-iiii", units: [12, 13], note: "Practice hours: decision after the loop" },
      },
    ],
    keyPoints: [
      "A while loop's body can contain if, if…else and if…elif…else blocks.",
      "An if inside the loop makes a decision for every value; an if after the loop makes one decision about the final result.",
      "Indent the if once (loop body) and the lines in its blocks twice.",
      "Keep the counter update outside the if…else so it runs on every iteration.",
      "Slides 17 and 18 say \"higher than 50\" but their sample outputs treat 50 as passing the test. Always state and follow one precise rule.",
      "Write percentages as decimals: 40% is 0.4.",
    ],
    examples: [
      {
        title: "Pass or fail for 4 students (slide 17)",
        code: 'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    if mark >= 50:\n        print("you Passed")\n    else:\n        print("you Failed")\n    count = count + 1',
        inputs: ["45", "80", "70", "50"],
        output:
          "Enter your final mark in the course: 45\nyou Failed\nEnter your final mark in the course: 80\nyou Passed\nEnter your final mark in the course: 70\nyou Passed\nEnter your final mark in the course: 50\nyou Passed\n",
        lineNotes: [
          { line: 2, text: "The loop runs once for each of the 4 students." },
          { line: 3, text: "A new mark is read on every iteration." },
          { line: 4, text: "Rule used here: 50 or more passes, which matches the slide's sample output." },
          { line: 8, text: "Same indentation as the if, so it runs on every iteration." },
        ],
        source: { file: "topic4", units: [17], note: "Pass/fail for 4 students" },
        origin: "adapted",
      },
      {
        title: "Discount for 3 products (slide 18)",
        code: 'count = 1\nwhile count <= 3:\n    price = float(input(f"Enter product {count} price in OMR: "))\n    if price >= 50:\n        discount = 0.4\n    else:\n        discount = 0.2\n    discounted = price - (price * discount)\n    print("the discounted price is ", discounted, "OMR")\n    count = count + 1',
        inputs: ["20.5", "50", "60"],
        output:
          "Enter product 1 price in OMR: 20.5\nthe discounted price is  16.4 OMR\nEnter product 2 price in OMR: 50\nthe discounted price is  30.0 OMR\nEnter product 3 price in OMR: 60\nthe discounted price is  36.0 OMR\n",
        lineNotes: [
          { line: 3, text: "The f-string puts the product number in the prompt." },
          { line: 4, text: "Rule used here: 50 or more gets 40%, which matches the slide's sample output (50 → 30.0)." },
          { line: 8, text: "Slide 18's formula, with a normal minus sign." },
          { line: 9, text: "The string ends with a space and print adds another, so there are two spaces before the value, as on the slide." },
        ],
        source: { file: "topic4", units: [18], note: "Discount for 3 products" },
        origin: "adapted",
      },
      {
        title: "Counting how many students passed",
        code: 'count = 1\npassed = 0\nwhile count <= 4:\n    mark = float(input("Enter mark: "))\n    if mark >= 50:\n        passed = passed + 1\n    count = count + 1\nprint("Number of students who passed:", passed)',
        inputs: ["45", "80", "70", "50"],
        output: "Enter mark: 45\nEnter mark: 80\nEnter mark: 70\nEnter mark: 50\nNumber of students who passed: 3\n",
        lineNotes: [
          { line: 2, text: "An accumulator for the number of passes, set before the loop." },
          { line: 5, text: "An if without else: nothing happens for a failed mark." },
          { line: 7, text: "The counter update runs for every student." },
          { line: 8, text: "After the loop: print the result once." },
        ],
        source: { file: "topic4", units: [17], note: "Marks for 4 students" },
        origin: "adapted",
      },
      {
        title: "Odd or even for 1 to 6",
        code: 'n = 1\nwhile n <= 6:\n    if n % 2 == 0:\n        print(n, "is even")\n    else:\n        print(n, "is odd")\n    n = n + 1',
        output: "1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd\n6 is even\n",
        lineNotes: [
          { line: 3, text: "% gives the remainder (Topic 2). An even number has remainder 0 when divided by 2." },
          { line: 7, text: "Outside the if…else, so n goes up on every iteration." },
        ],
        source: { file: "topic4", units: [17], note: "if…else inside a counter-controlled while loop (pattern of the slide 17 exercise)" },
        origin: "original",
      },
    ],
    mistakes: [
      {
        title: "Putting the update inside the if",
        wrong: 'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    if mark >= 50:\n        print("you Passed")\n        count = count + 1\n    else:\n        print("you Failed")',
        right: 'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    if mark >= 50:\n        print("you Passed")\n    else:\n        print("you Failed")\n    count = count + 1',
        explanation:
          "Indented inside the if, the update only runs for passing marks. A failed mark does not move the counter, so the program asks for extra marks, and if every mark fails the loop never stops. Put the update after the if…else, at the same level as the if.",
      },
      {
        title: "Putting the if after the loop",
        wrong: 'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    count = count + 1\nif mark >= 50:\n    print("you Passed")\nelse:\n    print("you Failed")',
        right: 'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    if mark >= 50:\n        print("you Passed")\n    else:\n        print("you Failed")\n    count = count + 1',
        explanation:
          "The unindented if runs once, after the loop, and only checks the last mark. To decide for each student, indent the if…else inside the loop body.",
      },
      {
        title: "Mixing up > and >= at the boundary",
        wrong: "# rule: a mark of 50 or more passes\nif mark > 50:",
        right: "# rule: a mark of 50 or more passes\nif mark >= 50:",
        explanation:
          "If the rule is \"50 or more passes\", `> 50` wrongly fails a mark of 50. If the rule is \"higher than 50\" (slide 17's text), then `> 50` is correct. Read the rule carefully and always test the boundary value 50 itself.",
      },
      {
        title: "Writing the percentage as a whole number",
        wrong: "discount = 40\ndiscounted = price - (price * discount)",
        right: "discount = 0.4\ndiscounted = price - (price * discount)",
        explanation: "40% means 40 out of 100, which is 0.4. With 40, a price of 60 would become 60 - 2400 = -2340.",
      },
    ],
    tryIt: {
      prompt:
        "Change the pass/fail program so it reads marks for 3 students and uses the rule from slide 17's text exactly: a mark higher than 50 passes. Test it with a mark of 50: it should now print \"you Failed\".",
      starterCode:
        'count = 1\nwhile count <= 4:\n    mark = float(input("Enter your final mark in the course: "))\n    if mark >= 50:\n        print("you Passed")\n    else:\n        print("you Failed")\n    count = count + 1',
      inputsHint: "for example 45, 50, 80",
    },
    quickCheck: ["pm-t4-027", "pm-t4-028", "pm-t4-029"],
    sourceNotes: [
      "Slide 17: the text says a student passes if the score is \"higher than 50\", but the sample output prints \"you Passed\" for a mark of 50. Under the written rule (`mark > 50`) a mark of 50 fails; the program behind the screenshot seems to use `mark >= 50`. This lesson uses `>= 50` to match the output and says so.",
      "Slide 17: the text says \"you passed\" (lowercase p) but the output shows \"you Passed\"; the examples follow the output. \"accept\" should be \"accepts\".",
      "Slide 18: the text says the 40% discount applies when the price is higher than 50 OMR, but the sample output gives 30.0 for a price of 50, which is a 40% discount. Under the written rule the result would be 40.0. The values 20.5 → 16.4 and 60 → 36.0 are correct.",
      "Slide 18: the output says \"dicounted\" (typo); the example here prints \"discounted\". The formula on the slide uses a dash \"–\"; in Python the minus sign must be `-`.",
      "Lab cells 12–13 put the if…else after the loop, so it judges only the final total. That is correct for that task, but it is a different design from slides 17 and 18, where the decision is made for each value.",
    ],
  },
];
