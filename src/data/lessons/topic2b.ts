import type { Lesson } from "../types";

// Topic 2, slides 26–83: operators, expressions and precedence, input/output,
// comments and complete input → process → output programs.
// Also uses Practice Exercises I and the Topic-2-style lab cells.

export const TOPIC2B_LESSONS: Lesson[] = [
  // ================================================================ 6. arithmetic
  {
    id: "lesson-t2-arithmetic",
    topicId: "t2",
    order: 6,
    title: "Arithmetic Operators",
    conceptIds: ["t2-arithmetic"],
    sources: [
      { file: "topic2", units: [26, 27, 28, 29, 30, 31, 32, 33, 34, 35], note: "Operators and operands; arithmetic operators" },
      { file: "topic2", units: [50], note: "Exercise: string repetition, /, //, %" },
      { file: "lab-ch3-iiii", units: [5, 6, 7], note: "Lab: arithmetic and string repetition with variables" },
    ],
    explanation: [
      {
        heading: "Operators, operands and expressions",
        body: [
          "An **operator** is a special symbol that represents a computation, like `+` for addition or `*` for multiplication. The values the operator works on are called **operands**.",
          "In `2 + 3`, the operator is `+`, the operands are `2` and `3`, and the whole thing `2 + 3` is an **expression**.",
          "Topic 2 covers four kinds of operators: arithmetic, assignment, comparison (relational) and logical. This lesson is about the arithmetic ones.",
        ],
        source: { file: "topic2", units: [27, 28] },
      },
      {
        heading: "Add, subtract, multiply and power",
        body: [
          "`+` adds two numbers: `3 + 5` is `8`. `-` subtracts the second number from the first: `50 - 24` is `26`. A minus sign in front of a single number makes it negative: `-5.2`.",
          "`*` multiplies: `2 * 3` is `6`. If one operand is a float, the answer is a float: `2 * 3.5` is `7.0`.",
          "`**` is the power operator: `x ** y` means x to the power of y. So `3 ** 4` is `81` (3 × 3 × 3 × 3) and `0.25 ** 3` is `0.015625`.",
        ],
        source: { file: "topic2", units: [29, 30, 31, 32] },
      },
      {
        heading: "Two kinds of division: / and //",
        body: [
          "`/` is normal division. It **always** gives a float, even when the answer is a whole number: `10 / 5` is `2.0`, and `13 / 3` is `4.333333333333333`.",
          "`//` is **floor division**. It divides and then rounds the answer **down** to the nearest whole number: `13 // 3` is `4`.",
          "Rounding down means moving to the smaller number. With negative numbers this matters: `-13 / 3` is about -4.33, so `-13 // 3` is `-5`, not -4.",
          "If one of the operands is a float, `//` gives a float: `9 // 1.81` is `4.0`.",
        ],
        source: { file: "topic2", units: [33, 34] },
      },
      {
        heading: "The remainder: %",
        body: [
          "`%` (modulus) gives the **remainder** of a division. `75 % 9` is `3`, because 9 goes into 75 eight times (72) and 3 is left over. `13 % 3` is `1`. It also works with floats: `25.5 % 2.25` is `0.75`.",
          "`%` goes together with `//`. For example `-13 // 3` is -5, and 3 × -5 = -15, so `-13 % 3` is -13 - (-15) = `2`. In Python the remainder has the same sign as the number you divide by.",
        ],
        source: { file: "topic2", units: [34, 35] },
      },
      {
        heading: "+ and * with strings",
        body: [
          "With two strings, `+` **joins** (concatenates) them: `'a' + 'b'` gives `'ab'`, and `'1' + '3'` gives `'13'` (text, not the number 4).",
          "A string times an int **repeats** the string: `'a' * 3` gives `'aaa'`, and `3 * \"3\"` gives `'333'`. The lab program with `c = \"UTAS\"` and `d = 2` prints `UTASUTAS` for `d * c`.",
          "You cannot mix a string and a number with `+`. `\"Hi\" + 3` raises a `TypeError`.",
        ],
        source: { file: "topic2", units: [29, 31, 50] },
      },
    ],
    keyPoints: [
      "An operator is a symbol for a computation; the values it works on are its operands.",
      "`/` always gives a float: `10 / 5` is `2.0`.",
      "`//` divides and rounds down: `13 // 3` is `4` and `-13 // 3` is `-5`.",
      "`%` gives the remainder: `75 % 9` is `3`.",
      "`**` is power: `3 ** 4` is `81`.",
      "If either operand is a float, the result is a float: `2 * 3.5` is `7.0`, `9 // 1.81` is `4.0`.",
      "With strings, `+` joins and `*` repeats: `'a' + 'b'` is `'ab'`, `'a' * 3` is `'aaa'`.",
    ],
    examples: [
      {
        title: "Adding, subtracting, multiplying and powers",
        code: "print(3 + 5)\nprint(50 - 24)\nprint(-5.2)\nprint(2 * 3.5)\nprint(3 ** 4)\nprint(0.25 ** 3)",
        output: "8\n26\n-5.2\n7.0\n81\n0.015625",
        lineNotes: [
          { line: 3, text: "A minus sign in front of one number makes it negative." },
          { line: 4, text: "An int times a float gives a float, so 7.0 and not 7." },
          { line: 5, text: "3 ** 4 means 3 × 3 × 3 × 3." },
        ],
        source: { file: "topic2", units: [29, 30, 31, 32] },
        origin: "adapted",
      },
      {
        title: "Division, floor division and remainder",
        code: "print(10 / 5)\nprint(13 / 3)\nprint(13 // 3)\nprint(-13 // 3)\nprint(9 // 1.81)\nprint(75 % 9)\nprint(13 % 3)\nprint(25.5 % 2.25)",
        output: "2.0\n4.333333333333333\n4\n-5\n4.0\n3\n1\n0.75",
        lineNotes: [
          { line: 1, text: "/ always gives a float, even for an exact division." },
          { line: 2, text: "Python shows 16 significant digits. Slide 33 cuts this short as 4.333333333." },
          { line: 4, text: "-4.33 rounded DOWN is -5." },
          { line: 5, text: "Slide 34 shows this as 9 / /1.81, which is a typo. With // written correctly it gives 4.0 (a float, because 1.81 is a float)." },
          { line: 6, text: "9 × 8 = 72, and 75 - 72 leaves 3." },
        ],
        source: { file: "topic2", units: [33, 34, 35] },
        origin: "adapted",
      },
      {
        title: "Joining and repeating strings",
        code: "print('a' + 'b')\nprint('1' + '3')\nprint('a' * 3)\nprint(3 * \"python\")\nprint(3 * \"3\")",
        output: "ab\n13\naaa\npythonpythonpython\n333",
        lineNotes: [
          { line: 2, text: "'1' and '3' are strings, so + joins them into '13'. It does not add them." },
          { line: 3, text: "A string times an int repeats the string." },
          { line: 5, text: "\"3\" is text, so it is repeated: 333. print() shows strings without quotes; at the >>> prompt you would see '333'." },
        ],
        source: { file: "topic2", units: [29, 31, 50] },
        origin: "adapted",
      },
      {
        title: "Mixing a string and a number with + (error)",
        code: 'A = "Hi"\nB = 3\nC = A + B\nprint(C)',
        output: "",
        raises: 'TypeError: can only concatenate str (not "int") to str',
        lineNotes: [
          { line: 3, text: "A is a str and B is an int. + cannot join them, so Python stops here with a TypeError." },
          { line: 4, text: "This line never runs. With C = A * B instead, the program would print HiHiHi." },
        ],
        source: { file: "lab-ch3-iiii", units: [4], note: "Task source; the cell uses curly quotes and Print" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Expecting / to give a whole number",
        wrong: "print(10 / 5)   # expecting 2",
        right: "print(10 // 5)   # gives 2",
        explanation: "`/` always gives a float, so `10 / 5` prints `2.0`. Use `//` when you need a whole-number answer.",
      },
      {
        title: "Thinking // just cuts off the decimals",
        wrong: "print(-13 // 3)   # expecting -4",
        right: "print(-13 // 3)   # really -5",
        explanation: "`//` rounds DOWN to the smaller number. -4.33 rounded down is -5. Cutting off the decimals would give -4, but that is not what `//` does.",
      },
      {
        title: "Adding a string and a number",
        wrong: "print('1' + 3)",
        right: "print(1 + 3)",
        explanation: "`+` needs two numbers (to add) or two strings (to join). Mixing them raises `TypeError: can only concatenate str (not \"int\") to str`.",
      },
      {
        title: "A space inside // (slide 34 typo)",
        wrong: "print(9 / /1.81)",
        right: "print(9 // 1.81)",
        explanation: "`//` is one operator, so the two slashes must touch. With a space between them Python reports a SyntaxError.",
      },
    ],
    tryIt: {
      prompt:
        "Predict each output before you run it. Then add two lines: one that prints how many full weeks are in `days` (use `//`), and one that prints how many days are left over (use `%`).",
      starterCode: "days = 100\nprint(17 / 5)\nprint(17 // 5)\nprint(17 % 5)\nprint(2 ** 10)\n# full weeks in days:\n\n# days left over:\n",
    },
    quickCheck: ["pm-t2b-001", "pm-t2b-002", "pm-t2b-004"],
    sourceNotes: [
      "Slides 29 and 31 show results with curly quotes ('ab’, ‘13’, ‘aaa’). Python uses straight quotes ('ab', '13', 'aaa') at the >>> prompt, and print() shows no quotes at all.",
      "Slide 30 says that if the first operand is absent \"it is assumed to be zero\". Really, -5.2 uses the minus sign as a one-operand (unary) operator that makes the number negative. The result is the same as 0 - 5.2.",
      "Slide 33 shows 13 / 3 as 4.333333333. Python 3 prints 4.333333333333333.",
      "Slide 34 writes 9 / /1.81 with a space between the slashes, which is a SyntaxError. The intended expression 9 // 1.81 gives 4.0.",
      "Slide 35's diagram spells \"Divisor\" as \"Divisior\". The outputs on the slide are correct.",
      "Slide 50 uses curly quotes (“python”, “3”), which cause a SyntaxError if typed, and shows the results in curly double quotes. Python shows 'pythonpythonpython' and '333'. It also shows 10/3 as 3.33333333; Python prints 3.3333333333333335.",
      "Lab IIII cells 3 and 4 use curly quotes and Print with a capital P, so as written they fail. The lesson uses the corrected versions: A * B gives HiHiHi, and A + B raises a TypeError.",
    ],
  },

  // ================================================================ 7. assignment operators
  {
    id: "lesson-t2-assignment-ops",
    topicId: "t2",
    order: 7,
    title: "Assignment Operators",
    conceptIds: ["t2-assignment-ops"],
    sources: [
      { file: "topic2", units: [36, 37], note: "=, same value to many variables, multiple assignment, += and friends" },
      { file: "topic2", units: [50], note: "Exercise: a+=4 and A , B = 11/5 , 11%5" },
      { file: "lab-ch2-practice-ii", units: [1], note: "Store age, name and GPA at the same time" },
    ],
    explanation: [
      {
        heading: "= assigns from right to left",
        body: [
          "The `=` operator takes the value on the **right** side and stores it in the variable on the **left** side.",
          "Python works out the right side first. In `num = n + 10` with `n = 20`, Python calculates `n + 10` (30) and then stores 30 in num.",
          "`=` does not mean \"is equal to\" like in maths. It means \"store this value\". Comparing two values uses `==` (next lesson).",
        ],
        source: { file: "topic2", units: [36] },
      },
      {
        heading: "One value for many variables, or many values at once",
        body: [
          "**Assignment to the same value:** `x = y = z = 10` gives all three variables the value 10.",
          "**Multiple assignment:** `x, y, z = 10, \"hai\", 3.5` gives each variable its own value, in order: x gets 10, y gets \"hai\" and z gets 3.5. The number of names on the left must match the number of values on the right.",
          "The Chapter 2 Practice II lab asks you to store a student's age as 20, name as Ali, and GPA as 3.5 at the same time. Multiple assignment does it in one line: `age, name, gpa = 20, \"Ali\", 3.5`.",
        ],
        source: { file: "topic2", units: [36] },
      },
      {
        heading: "Update operators: += -= *= /= //= %= **=",
        body: [
          "`num += 10` adds 10 to num and stores the result back in num. It is a short way to write `num = num + 10`. Python does the arithmetic first, then the assignment.",
          "Every arithmetic operator has an update version. The table shows what happens when x starts at 10 and the right operand is 2.",
        ],
        table: {
          headers: ["Operator", "Same as", "x becomes"],
          rows: [
            ["x += 2", "x = x + 2", "12"],
            ["x -= 2", "x = x - 2", "8"],
            ["x *= 2", "x = x * 2", "20"],
            ["x /= 2", "x = x / 2", "5.0"],
            ["x //= 2", "x = x // 2", "5"],
            ["x %= 2", "x = x % 2", "0"],
            ["x **= 2", "x = x ** 2", "100"],
          ],
        },
        source: { file: "topic2", units: [37] },
      },
      {
        heading: "Assignment shows nothing",
        body: [
          "An assignment statement stores a value but produces **no output**. After `a = 7` and `a += 4`, a holds 11, but nothing appears on the screen.",
          "To see the value, print it: `print(a)`. Slide 50 shows `11` directly under `a+=4`, but Python would only show 11 after a separate `a` at the >>> prompt, or a `print(a)`.",
        ],
        source: { file: "topic2", units: [50] },
      },
    ],
    keyPoints: [
      "`=` stores the value of the right side in the variable on the left.",
      "`x = y = z = 10` gives all three variables the same value.",
      "`x, y, z = 10, \"hai\", 3.5` gives each variable its own value, in order.",
      "`num += 10` means `num = num + 10`. The same pattern works for `-=`, `*=`, `/=`, `//=`, `%=` and `**=`.",
      "`/=` always turns the variable into a float, just like `/`.",
      "An assignment statement produces no output. Use `print()` to see a value.",
      "`=+` is not the same as `+=`: `x =+ 3` just stores +3.",
    ],
    examples: [
      {
        title: "Simple, same-value and multiple assignment",
        code: 'a = 5\nn = 20\nnum = n + 10\nprint(a, n, num)\nx = y = z = 10\nprint(x, y, z)\nx, y, z = 10, "hai", 3.5\nprint(x, y, z)',
        output: "5 20 30\n10 10 10\n10 hai 3.5",
        lineNotes: [
          { line: 3, text: "The right side n + 10 is worked out first (30), then stored in num." },
          { line: 5, text: "All three variables get the value 10." },
          { line: 7, text: "x gets 10, y gets \"hai\", z gets 3.5. Slide 36 shows “hai” with curly quotes; Python needs straight quotes." },
        ],
        source: { file: "topic2", units: [36] },
        origin: "adapted",
      },
      {
        title: "Lab: store age, name and GPA at the same time",
        code: "# Store a student's age as 20, name as Ali, and GPA as 3.5 at the same time.\nage, name, gpa = 20, \"Ali\", 3.5\nprint(age)\nprint(name)\nprint(gpa)",
        output: "20\nAli\n3.5",
        lineNotes: [
          { line: 1, text: "The task from the lab cell, kept as a comment." },
          { line: 2, text: "Three names, three values: each name gets the value in the same position." },
        ],
        source: { file: "lab-ch2-practice-ii", units: [1] },
        origin: "adapted",
      },
      {
        title: "Update operators step by step",
        code: "num = 30\nnum += 10\nprint(num)\nnum -= 5\nprint(num)\nnum *= 2\nprint(num)\nnum //= 4\nprint(num)\nnum %= 5\nprint(num)\nnum **= 3\nprint(num)\nnum /= 4\nprint(num)",
        output: "40\n35\n70\n17\n2\n8\n2.0",
        lineNotes: [
          { line: 2, text: "Same as num = num + 10, so 30 becomes 40." },
          { line: 8, text: "70 // 4 is 17 (17.5 rounded down)." },
          { line: 10, text: "17 % 5 is the remainder 2." },
          { line: 12, text: "2 ** 3 is 8." },
          { line: 14, text: "/= uses /, so the result is a float: 2.0." },
        ],
        source: { file: "topic2", units: [37] },
        origin: "adapted",
      },
      {
        title: "Slide 50 exercise, run as a script",
        code: "a = 7\na += 4\nprint(a)\nA, B = 11/5, 11%5\nprint(A)\nprint(B)\nA, B = 10/3, 10//3\nprint(A)\nprint(B)",
        output: "11\n2.2\n1\n3.3333333333333335\n3",
        lineNotes: [
          { line: 2, text: "This line prints nothing; it only changes a to 11." },
          { line: 3, text: "We need print(a) to see 11." },
          { line: 4, text: "A gets 11/5 (2.2) and B gets 11%5 (1)." },
          { line: 8, text: "Python prints 3.3333333333333335. Slide 50 shortens it to 3.33333333." },
        ],
        source: { file: "topic2", units: [50] },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Writing =+ instead of +=",
        wrong: "count = 5\ncount =+ 3   # count is now 3!",
        right: "count = 5\ncount += 3   # count is now 8",
        explanation: "`count =+ 3` is read as `count = +3`, a normal assignment of positive 3. Python gives no error, so this bug is easy to miss. The `+` must come before the `=`.",
      },
      {
        title: "Expecting an assignment to display the new value",
        wrong: "a = 7\na += 4   # expecting 11 to appear",
        right: "a = 7\na += 4\nprint(a)",
        explanation: "Assignment statements produce no output. Use `print()` to display the value.",
      },
      {
        title: "Different numbers of names and values",
        wrong: "x, y = 1, 2, 3",
        right: "x, y, z = 1, 2, 3",
        explanation: "With multiple assignment, each name needs exactly one value. Three values for two names raises `ValueError: too many values to unpack`.",
      },
      {
        title: "Updating a variable that does not exist yet",
        wrong: "total += 5",
        right: "total = 0\ntotal += 5",
        explanation: "`total += 5` means `total = total + 5`, so total must already have a value. Otherwise Python raises a NameError.",
      },
    ],
    tryIt: {
      prompt:
        "A shop has 50 items in stock. Use assignment operators to: sell 12 items (`-=`), receive a delivery that doubles the stock (`*=`), then share the stock equally between 4 shelves (`//=`). Print the stock after each step. You should see 38, 76 and 19.",
      starterCode: "stock = 50\n# sell 12 items using -=\n\nprint(stock)\n# double the stock using *=\n\n# share between 4 shelves using //=\n",
    },
    quickCheck: ["pm-t2b-007", "pm-t2b-008", "pm-t2b-011"],
    sourceNotes: [
      "Slide 36 writes “hai” with curly quotes, which is a SyntaxError if typed. The lesson uses \"hai\".",
      "Slide 50 shows 11 right under >>> a+=4. An assignment prints nothing; 11 would only appear after a separate >>> a or print(a).",
      "Slide 50 shows 10/3 as 3.33333333. Python prints 3.3333333333333335.",
      "Slide 50 groups both print() outputs after both calls. In a real interactive session each output appears straight after its own print().",
    ],
  },

  // ================================================================ 8. comparison
  {
    id: "lesson-t2-comparison",
    topicId: "t2",
    order: 8,
    title: "Comparison (Relational) Operators",
    conceptIds: ["t2-comparison"],
    sources: [
      { file: "topic2", units: [38, 39, 40, 41], note: "Comparison operators, table, shell examples" },
      { file: "topic2", units: [57], note: "Comparisons with arithmetic; case-sensitive names" },
    ],
    explanation: [
      {
        heading: "Six comparison operators",
        body: [
          "A comparison operator compares two values. The answer is always a Boolean: **True** or **False**.",
          "The table shows all six operators with the examples from the slides.",
        ],
        table: {
          headers: ["Operator", "Meaning", "Example", "Result"],
          rows: [
            ["<", "Less than", "5 < 2", "False"],
            [">", "Greater than", "5 > 2", "True"],
            ["<=", "Less than or equal to", "5 <= 2", "False"],
            [">=", "Greater than or equal to", "5 >= 2", "True"],
            ["==", "Equal to", "5 == 2", "False"],
            ["!=", "Not equal to", "5 != 2", "True"],
          ],
        },
        source: { file: "topic2", units: [38, 39] },
      },
      {
        heading: "Comparing variables and chaining comparisons",
        body: [
          "You can compare variables too. With `x = 3` and `y = 6`, `x <= y` is True.",
          "Comparisons can be **chained**: `3 < 5 < 7` is True. It means `3 < 5` and `5 < 7`, so both parts must be True. `5 < 3 < 7` is False, because `5 < 3` is already False.",
        ],
        source: { file: "topic2", units: [40] },
      },
      {
        heading: "Comparing strings",
        body: [
          "`==` and `!=` also work on strings. Two strings are equal only if they have exactly the same characters.",
          "Upper and lower case letters are different characters. So with `x = 'str'` and `y = 'stR'`, `x == y` is **False** and `x != y` is True.",
        ],
        source: { file: "topic2", units: [41] },
      },
      {
        heading: "Arithmetic is done before comparing",
        body: [
          "When an expression has arithmetic and a comparison, Python does the arithmetic first. With `A, B, C = 10, 20, 30`, `A + 20 > B` becomes `30 > 20`, which is True.",
          "`B != C - 10` becomes `20 != 20`, which is False.",
          "Variable names are case-sensitive. The program created `A` and `B`, so `a > b` fails with a NameError: `a` does not exist.",
        ],
        source: { file: "topic2", units: [57] },
      },
      {
        heading: "Do not mix up = and ==",
        body: [
          "`=` **stores** a value in a variable. `==` **asks** whether two values are equal and gives True or False.",
          "Python 3 writes \"not equal\" only as `!=`. The `<>` shown on slide 38 is from the old Python 2 and is a SyntaxError in Python 3.",
        ],
        source: { file: "topic2", units: [38] },
      },
    ],
    keyPoints: [
      "The comparison operators are `<`, `>`, `<=`, `>=`, `==` and `!=`.",
      "Every comparison gives a Boolean: True or False.",
      "`==` compares; `=` assigns.",
      "String comparison is case-sensitive: `'str' == 'stR'` is False.",
      "Comparisons can be chained: `3 < 5 < 7` means `3 < 5` and `5 < 7`.",
      "Arithmetic is done before comparison: in `A + 20 > B` the addition comes first.",
      "\"Not equal\" is `!=` in Python 3; `<>` does not work.",
    ],
    examples: [
      {
        title: "The comparison table in code",
        code: "print(5 < 2)\nprint(5 > 2)\nprint(5 <= 2)\nprint(5 >= 2)\nprint(5 == 2)\nprint(5 != 2)",
        output: "False\nTrue\nFalse\nTrue\nFalse\nTrue",
        lineNotes: [
          { line: 5, text: "== asks \"are these equal?\" 5 and 2 are not, so False." },
          { line: 6, text: "!= asks \"are these different?\" They are, so True." },
        ],
        source: { file: "topic2", units: [39] },
        origin: "adapted",
      },
      {
        title: "Variables, chained comparisons and strings",
        code: "x = 3\ny = 6\nprint(x <= y)\nprint(3 < 5 < 7)\nx = 'str'\ny = 'stR'\nprint(x == y)\nx = 2\ny = 3\nprint(x != y)",
        output: "True\nTrue\nFalse\nTrue",
        lineNotes: [
          { line: 4, text: "A chain: 3 < 5 is True and 5 < 7 is True, so the result is True." },
          { line: 7, text: "'r' and 'R' are different characters, so the strings are not equal." },
        ],
        source: { file: "topic2", units: [40, 41] },
        origin: "adapted",
      },
      {
        title: "Arithmetic inside comparisons",
        code: "A, B, C = 10, 20, 30\nprint(A > B)\nprint(A < C)\nprint(B != C)\nprint(A + 20 > B)\nprint(A + 20 == C)\nprint(B != C - 10)",
        output: "False\nTrue\nTrue\nTrue\nTrue\nFalse",
        lineNotes: [
          { line: 5, text: "A + 20 is worked out first: 30 > 20 is True." },
          { line: 7, text: "C - 10 is 20, and 20 != 20 is False." },
        ],
        source: { file: "topic2", units: [57] },
        origin: "adapted",
      },
      {
        title: "Names are case-sensitive (error)",
        code: "A, B, C = 10, 20, 30\nprint(a > b)",
        output: "",
        raises: "NameError: name 'a' is not defined. Did you mean: 'A'?",
        lineNotes: [
          { line: 2, text: "The variables are A and B (capitals). a does not exist, so Python stops with a NameError. Slide 57 just shows \"Error\"." },
        ],
        source: { file: "topic2", units: [57] },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Using = to compare",
        wrong: "print(5 = 5)",
        right: "print(5 == 5)",
        explanation: "A single `=` is assignment, which cannot be used inside `print()` like this. Python reports a SyntaxError. Comparing needs `==`.",
      },
      {
        title: "Using <> for not equal",
        wrong: "print(5 <> 2)",
        right: "print(5 != 2)",
        explanation: "Slide 38 lists `<>`, but it only worked in Python 2. In Python 3 it is a SyntaxError. Always use `!=`.",
      },
      {
        title: "Forgetting that case matters in strings",
        wrong: "print('str' == 'stR')   # expecting True",
        right: "print('str' == 'str')   # True",
        explanation: "Python compares strings character by character, and 'r' is not the same as 'R'. So `'str' == 'stR'` is False.",
      },
      {
        title: "Writing => or =< the wrong way round",
        wrong: "print(5 =< 6)",
        right: "print(5 <= 6)",
        explanation: "The `=` always comes second: `<=` and `>=`. Writing `=<` or `=>` is a SyntaxError.",
      },
    ],
    tryIt: {
      prompt:
        "Set `age = 17`. Print whether age is at least 18, whether age is not equal to 17, and whether age is between 13 and 19 (inclusive) using one chained comparison. Then change age and predict the results again.",
      starterCode: "age = 17\nprint(age >= 18)\n# is age not equal to 17?\n\n# is age between 13 and 19 (chained comparison)?\n",
    },
    quickCheck: ["pm-t2b-012", "pm-t2b-013", "pm-t2b-015"],
    sourceNotes: [
      "Slide 38 lists <> as a \"Not Equal\" operator. <> existed only in Python 2; in Python 3 it is a SyntaxError and only != works.",
      "Slide 40's right column assigns y = 3 but then compares x >= 3 with a literal 3, so y is never used. The result (True) is the same either way.",
      "Slide 57 shows \"Error\" for a > b. Real Python stops with a NameError: name 'a' is not defined (in Python 3.13 it also suggests 'A'), because names are case-sensitive.",
      "Slide 57 has no title.",
    ],
  },

  // ================================================================ 9. logical
  {
    id: "lesson-t2-logical",
    topicId: "t2",
    order: 9,
    title: "Logical Operators: and, or, not",
    conceptIds: ["t2-logical"],
    sources: [
      { file: "topic2", units: [42, 43, 44, 45, 46], note: "and, or, not, truth tables, short-circuit evaluation" },
      { file: "topic2", units: [58], note: "Combining comparisons with and, or, not" },
      { file: "lab-ch2-practice-ii", units: [4, 5, 6, 7], note: "not present; school trip; library entry" },
    ],
    explanation: [
      {
        heading: "Three logical operators",
        body: [
          "Logical operators combine True/False values. Their operands are usually comparisons, such as `age >= 18`, and the result is True or False.",
          "Python has three: `and`, `or` and `not`. They are written in **lowercase**. The slides show AND, OR and NOT in capitals as labels, but Python only accepts the lowercase keywords.",
        ],
        source: { file: "topic2", units: [42] },
      },
      {
        heading: "and: True only if BOTH are True",
        body: ["`A and B` is True only when A and B are both True. If either one is False, the result is False."],
        table: {
          headers: ["A", "B", "A and B"],
          rows: [
            ["False", "False", "False"],
            ["False", "True", "False"],
            ["True", "False", "False"],
            ["True", "True", "True"],
          ],
        },
        source: { file: "topic2", units: [43] },
      },
      {
        heading: "or: True if EITHER is True",
        body: [
          "`A or B` is True when at least one side is True. It is also True when both are True. It is False only when both are False.",
        ],
        table: {
          headers: ["A", "B", "A or B"],
          rows: [
            ["False", "False", "False"],
            ["False", "True", "True"],
            ["True", "False", "True"],
            ["True", "True", "True"],
          ],
        },
        source: { file: "topic2", units: [45] },
      },
      {
        heading: "not: flips the value",
        body: [
          "`not` has only one operand. If x is True, `not x` is False. If x is False, `not x` is True.",
          "Example from the lab: with `present = True`, `print(not present)` prints False.",
        ],
        table: {
          headers: ["A", "not A"],
          rows: [
            ["False", "True"],
            ["True", "False"],
          ],
        },
        source: { file: "topic2", units: [46] },
      },
      {
        heading: "Short-circuit evaluation",
        body: [
          "In `A and B`, if A is False, the whole expression must be False whatever B is. So Python **does not evaluate B at all**. This is called **short-circuit evaluation**.",
          "You can see it happen: `False and 10 / 0` gives False with no error, because Python never calculates `10 / 0`.",
          "`or` works the same way from the other side: in `True or B`, the answer is already True, so B is not evaluated.",
        ],
        source: { file: "topic2", units: [44] },
      },
      {
        heading: "Combining comparisons",
        body: [
          "Comparisons are worked out before logical operators. With `A, B, C = 10, 20, 30`, `A > B and B < C` becomes `False and True`, which is False. `A > B or B < C` becomes `False or True`, which is True.",
          "`not` is applied after the comparison next to it. So `not B != 20` means `not (B != 20)`, which is `not False`, which is True.",
          "Among the logical operators, `not` is done first, then `and`, then `or`.",
        ],
        source: { file: "topic2", units: [52, 58] },
      },
    ],
    keyPoints: [
      "`and` is True only when both sides are True.",
      "`or` is True when at least one side is True (including when both are).",
      "`not` flips True to False and False to True.",
      "The keywords are lowercase: `and`, `or`, `not`.",
      "Short-circuit: in `A and B`, if A is False, Python never evaluates B.",
      "Comparisons are done first, then `not`, then `and`, then `or`.",
    ],
    examples: [
      {
        title: "The truth tables in code",
        code: "print(False and True)\nprint(True and True)\nprint(False or True)\nprint(False or False)\nprint(not True)\nprint(not False)",
        output: "False\nTrue\nTrue\nFalse\nFalse\nTrue",
        lineNotes: [
          { line: 1, text: "and needs both sides True." },
          { line: 3, text: "or needs only one side True." },
          { line: 5, text: "not flips the value." },
        ],
        source: { file: "topic2", units: [43, 45, 46] },
        origin: "adapted",
      },
      {
        title: "Combining comparisons (slide 58)",
        code: "A, B, C = 10, 20, 30\nprint(A > B and B < C)\nprint(A > B or B < C)\nprint(A < B and B < C)\nprint(A == 10 and B != 20)\nprint(A == 10 and not B != 20)",
        output: "False\nTrue\nTrue\nFalse\nTrue",
        lineNotes: [
          { line: 2, text: "A > B is False, so the and is False. Python does not even check B < C." },
          { line: 3, text: "False or True is True." },
          { line: 5, text: "B != 20 is False, so True and False is False." },
          { line: 6, text: "not (B != 20) is not False, which is True. True and True is True." },
        ],
        source: { file: "topic2", units: [58] },
        origin: "source",
      },
      {
        title: "Short-circuit evaluation",
        code: "A = False\nB = True\nprint(A and B)\nprint(False and 10 / 0)\nprint(True or 10 / 0)",
        output: "False\nFalse\nTrue",
        lineNotes: [
          { line: 3, text: "Slide 44's example. The slide does not show the result; Python prints False." },
          { line: 4, text: "The left side is False, so Python skips 10 / 0. Without short-circuiting this would be a ZeroDivisionError." },
          { line: 5, text: "The left side of or is True, so the result is True and 10 / 0 is skipped." },
        ],
        source: { file: "topic2", units: [44] },
        origin: "adapted",
      },
      {
        title: "Lab: school trip, library and attendance",
        code: "age = 19\nparent_permission = True\nprint(age >= 18 and parent_permission)\n\nid_card = False\nteacher_allowed = True\nprint(id_card or teacher_allowed)\n\npresent = True\nprint(not present)",
        output: "True\nTrue\nFalse",
        lineNotes: [
          { line: 3, text: "Trip rule (cell 5): age 18 or more AND parent permission. Both are True." },
          { line: 7, text: "Library rule (cells 6–7): ID card OR teacher allows. One True is enough." },
          { line: 10, text: "Cell 4: not flips True to False." },
        ],
        source: { file: "lab-ch2-practice-ii", units: [4, 5, 6, 7] },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Writing AND, OR, NOT in capitals",
        wrong: "print(True AND False)",
        right: "print(True and False)",
        explanation: "The slides use capitals in their diagrams, but Python keywords are lowercase. `AND` is not a keyword, so Python reports a SyntaxError.",
      },
      {
        title: "Thinking or means \"only one\"",
        wrong: "print(True or True)   # expecting False",
        right: "print(True or True)   # True",
        explanation: "`or` is True when at least one side is True, including when both are True. Look at the last row of the or truth table.",
      },
      {
        title: "Leaving out the variable after and",
        wrong: "print(age > 12 and < 20)",
        right: "print(age > 12 and age < 20)",
        explanation: "Each side of `and` must be a complete expression. `< 20` on its own is a SyntaxError.",
      },
      {
        title: "Reading not A and B as not (A and B)",
        wrong: "A = True\nB = False\nprint(not A and B)   # expecting True",
        right: "A = True\nB = False\nprint(not (A and B))   # True",
        explanation: "`not` applies only to the value right after it, so `not A and B` means `(not A) and B`, which is False here. Use parentheses when you want `not` to apply to the whole expression.",
      },
    ],
    tryIt: {
      prompt:
        "Lab Ch2 Practice II, cell 5: a student can join the school trip if their age is 18 or more AND they have parent permission. Print True or False for the values below. Then try other values, and add a second rule: a student can enter the library if they have an ID card OR the teacher allows (cell 6).",
      starterCode: "age = 17\nparent_permission = True\n# print whether the student can join the trip\n\n",
    },
    quickCheck: ["pm-t2b-016", "pm-t2b-018", "pm-t2b-020"],
    sourceNotes: [
      "Slide 42 says the result of a logical operator is always Boolean. That is true when the operands are True/False, as in this course. With other values, and/or return one of the operand values instead (for example 2 and 3 gives 3).",
      "Slides 42–46 write AND, OR and NOT in capitals. The Python keywords are lowercase.",
      "Slide 44 does not show the result of A and B. Python displays False.",
      "Slide 45 says \"True if Either operands are True\". This includes the case where both are True, as its own table shows.",
      "Slide 46's not table repeats each row twice. Two rows are enough for one operand.",
      "Slide 58's side box works out B < C, but because of short-circuit evaluation (slide 44) Python never evaluates B < C once A > B is False. The box only explains the truth values.",
    ],
  },

  // ================================================================ 10. expressions and precedence
  {
    id: "lesson-t2-expressions-precedence",
    topicId: "t2",
    order: 10,
    title: "Expressions, Statements and Order of Operations",
    conceptIds: ["t2-expressions", "t2-precedence"],
    sources: [
      { file: "topic2", units: [47, 48, 49], note: "Expressions and statements" },
      { file: "topic2", units: [51, 52, 53, 54, 55, 56, 57, 58, 59], note: "Order of operations, worked examples, exercise" },
      { file: "lab-ch2-practice-ii", units: [8, 9], note: "Expressions to evaluate" },
      { file: "lab-ch3-iiii", units: [5], note: "e=a+(b*c)/d" },
    ],
    explanation: [
      {
        heading: "Expressions",
        body: [
          "An **expression** is a combination of values, variables and operators that Python can work out (evaluate) to a single value.",
          "`17`, `x` and `x + 17` are all expressions. A single value or a single variable counts as an expression too.",
          "If you type an expression at the interactive `>>>` prompt, Python evaluates it and shows the result: `>>> 1 + 1` shows `2`.",
        ],
        source: { file: "topic2", units: [48] },
      },
      {
        heading: "Statements",
        body: [
          "A **statement** is a unit of code that Python executes. Two kinds so far: a `print()` statement, which produces output, and an **assignment** statement, which produces no output.",
          "A script is a sequence of statements. Python runs them one at a time, from top to bottom. `print(1)`, then `x = 2`, then `print(x)` shows 1 and then 2.",
          "In a script, an expression on a line by itself (like `x + 17`) is calculated but not shown. Only `print()` shows output.",
        ],
        source: { file: "topic2", units: [49] },
      },
      {
        heading: "PEMDAS: the order of operations",
        body: [
          "When an expression has more than one operator, Python follows the **rules of precedence**. For maths operators the order is **PEMDAS**: Parentheses, Exponents, Multiplication and Division, Addition and Subtraction.",
          "Parentheses have the highest precedence. Use them to force the order you want: `2 * (3 - 1)` is `2 * 2`, which is `4`.",
        ],
        source: { file: "topic2", units: [51, 53] },
      },
      {
        heading: "The full precedence table",
        body: [
          "Operators higher in the table are done first. Operators on the same row have the same precedence and are worked out **left to right**: `20 / 5 * 2` is `4.0 * 2`, which is `8.0`.",
          "There is one important exception: `**` goes **right to left**. So `2 ** 3 ** 2` is `2 ** 9`, which is `512`, not 64. Slide 52's footnote says \"left to right\" for all operators, but its own table marks `**` as right to left.",
          "Because `**` is above the unary sign, `-2 ** 2` is `-(2 ** 2)`, which is `-4`.",
        ],
        table: {
          headers: ["Order", "Operators", "Direction"],
          rows: [
            ["1 (first)", "( ) parentheses", "inside out"],
            ["2", "** (exponent)", "right to left"],
            ["3", "+x  -x (sign of one number)", ""],
            ["4", "*  /  //  %", "left to right"],
            ["5", "+  -", "left to right"],
            ["6", "==  !=  <  >  <=  >=", ""],
            ["7", "not", ""],
            ["8", "and", "left to right"],
            ["9 (last)", "or", "left to right"],
          ],
        },
        source: { file: "topic2", units: [52] },
      },
      {
        heading: "Worked evaluations",
        body: [
          "`(1 + 1) ** (5 - 2)` → `2 ** 3` → `8` (parentheses first).",
          "`10 % 3 * 4 + 5 * 2` → `1 * 4 + 5 * 2` → `4 + 10` → `14`. Here `%` and `*` have the same precedence, so they go left to right.",
          "`2 ** 1 + 1` is 3, not 4. `3 * 1 ** 3` is 3, not 27. `2 * 3 - 1` is 5, not 4.",
          "`6 + 4 / 2` → `6 + 2.0` → `8.0`. Slide 56 writes 8, but `/` always gives a float, so Python prints 8.0.",
        ],
        source: { file: "topic2", units: [53, 54, 55, 56] },
      },
      {
        heading: "Mixing arithmetic, comparison and logic",
        body: [
          "In a long expression, Python does the arithmetic first, then the comparisons, then `not`, then `and`, then `or`.",
          "Slide 59, item 6: `True and False or True and 5 > 0` → `True and False or True and True` → `False or True` → `True`.",
          "Slide 59, item 8: `not True and True or not False` → `False and True or True` → `False or True` → `True`.",
        ],
        source: { file: "topic2", units: [52, 57, 58, 59] },
      },
    ],
    keyPoints: [
      "An expression is evaluated to a value; a statement is executed (for example print or an assignment).",
      "Assignment statements produce no output, and in a script a bare expression shows nothing either.",
      "Order: parentheses, then `**`, then `* / // %`, then `+ -`, then comparisons, then `not`, `and`, `or`.",
      "Operators of the same precedence go left to right: `20 / 5 * 2` is `8.0`.",
      "Exception: `**` goes right to left: `2 ** 3 ** 2` is `512`.",
      "`/` always gives a float, so `6 + 4 / 2` is `8.0`, not 8.",
      "Use parentheses to force the order you want.",
    ],
    examples: [
      {
        title: "The slides' worked examples, checked in Python",
        code: "print(2 * (3 - 1))\nprint((1 + 1) ** (5 - 2))\nprint(10 % 3 * 4 + 5 * 2)\nprint(2 ** 1 + 1)\nprint(3 * 1 ** 3)\nprint(2 * 3 - 1)\nprint(6 + 4 / 2)",
        output: "4\n8\n14\n3\n3\n5\n8.0",
        lineNotes: [
          { line: 1, text: "Slide 53: parentheses first, (3 - 1) is 2, then 2 * 2." },
          { line: 3, text: "Slide 55: 10 % 3 is 1, 1 * 4 is 4, 5 * 2 is 10, 4 + 10 is 14." },
          { line: 5, text: "** before *: 1 ** 3 is 1, then 3 * 1 is 3." },
          { line: 7, text: "Slide 56 says 8, but 4 / 2 is 2.0, so Python prints 8.0." },
        ],
        source: { file: "topic2", units: [53, 54, 55, 56] },
        origin: "adapted",
      },
      {
        title: "Statements run one at a time",
        code: "print(1)\nx = 2\nprint(x)",
        output: "1\n2",
        lineNotes: [
          { line: 1, text: "A print statement produces output." },
          { line: 2, text: "An assignment statement produces no output." },
        ],
        source: { file: "topic2", units: [49] },
        origin: "source",
      },
      {
        title: "Left to right, and the ** exception",
        code: "print(20 / 5 * 2)\nprint(10 - 3 + 2)\nprint(2 ** 3 ** 2)\nprint((2 ** 3) ** 2)\nprint(-2 ** 2)",
        output: "8.0\n9\n512\n64\n-4",
        lineNotes: [
          { line: 1, text: "Same precedence, so left to right: 20 / 5 is 4.0, then 4.0 * 2 is 8.0." },
          { line: 2, text: "Left to right: 10 - 3 is 7, then 7 + 2 is 9." },
          { line: 3, text: "** goes right to left: 3 ** 2 is 9 first, then 2 ** 9 is 512." },
          { line: 4, text: "Parentheses force the other order: 8 ** 2 is 64." },
          { line: 5, text: "** comes before the minus sign: -(2 ** 2) is -4." },
        ],
        source: { file: "topic2", units: [52] },
        origin: "adapted",
      },
      {
        title: "Slide 59 exercise answers",
        code: "print(10 // 3 + 4 * 5 / 3)\nprint(4 + 2 ** 2 * 5 - 3)\nprint(10 / 2 ** 2 + 8 / 4 % 3)\nprint(int(5/2) + 6 % 2 - 5)\nprint(True and False or True and 5 > 0)\nprint(6 > 2 and (4 + 3 != 7))\nprint(not True and True or not False)\nprint(3 * \"Python\")\nprint(5 * \"3\")",
        output: "9.666666666666668\n21\n4.5\n-3\nTrue\nFalse\nTrue\nPythonPythonPython\n33333",
        lineNotes: [
          { line: 1, text: "10 // 3 is 3; 4 * 5 is 20; 20 / 3 is 6.666666666666667; 3 + 6.666666666666667 is 9.666666666666668." },
          { line: 2, text: "2 ** 2 is 4; 4 * 5 is 20; 4 + 20 - 3 is 21." },
          { line: 3, text: "2 ** 2 is 4, 10 / 4 is 2.5; 8 / 4 is 2.0, 2.0 % 3 is 2.0; 2.5 + 2.0 is 4.5." },
          { line: 4, text: "5/2 is 2.5 and int(2.5) is 2; 6 % 2 is 0; 2 + 0 - 5 is -3." },
          { line: 6, text: "4 + 3 != 7 is False, so True and False is False." },
          { line: 9, text: "Slide 59 writes “3” with curly quotes. With straight quotes, \"3\" is repeated 5 times." },
        ],
        source: { file: "topic2", units: [59] },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Working strictly from left to right",
        wrong: "print(6 + 4 / 2)   # expecting 5.0",
        right: "print((6 + 4) / 2)   # 5.0",
        explanation: "Division comes before addition, so `6 + 4 / 2` is `6 + 2.0`, which is 8.0. If you want the addition first, put it in parentheses.",
      },
      {
        title: "Working out ** from left to right",
        wrong: "print(2 ** 3 ** 2)   # expecting 64",
        right: "print((2 ** 3) ** 2)   # 64",
        explanation: "`**` is the one operator that goes right to left, so `2 ** 3 ** 2` is `2 ** 9` = 512.",
      },
      {
        title: "Forgetting that / gives a float",
        wrong: "print(6 + 4 / 2)   # expecting 8",
        right: "print(6 + 4 // 2)   # 8",
        explanation: "`4 / 2` is 2.0, so the whole answer is the float 8.0. Slide 56 writes 8; Python prints 8.0.",
      },
      {
        title: "Missing parentheses in a formula",
        wrong: "average = a + b + c / 3",
        right: "average = (a + b + c) / 3",
        explanation: "Without parentheses only c is divided by 3. Put the sum in parentheses so it is calculated first.",
      },
    ],
    tryIt: {
      prompt:
        "Lab Ch2 Practice II, cell 9: work out each expression by hand first. Write your answer as a comment at the end of the line, then run the program to check. Remember that `/` gives a float.",
      starterCode: "print(10 - 3 + 2)   # my answer:\nprint(10 + 8 % 3 * 2)   # my answer:\nprint(3 + 4 * 2**2 - (5 + 1))   # my answer:\nprint(20 / 5 * 2 - 3)   # my answer:\nprint(2 + 3**2 * 2)   # my answer:\n",
    },
    quickCheck: ["pm-t2b-022", "pm-t2b-023", "pm-t2b-024"],
    sourceNotes: [
      "Slide 48 labels only x + 17 as \"Expression\" (17 as \"Value\", x as \"Variable\"). A single value and a single variable are also expressions.",
      "Slide 49 calls print \"an expression statement\". In Python 3, print(...) is a function call used as a statement; the idea that it produces output is correct.",
      "Slide 51's picture hides part of the text (\"…useful way to remember the rules:\") and the last word \"first.\" is cut off at the bottom.",
      "Slide 52's footnote says operators with the same precedence are evaluated left to right, but the table's first row (correctly) shows ** as right to left: 2 ** 3 ** 2 is 512. Prefix operators (-x, not) also apply right to left when repeated.",
      "Slide 56 says 6+4/2 is 8. In Python 3 it is 8.0, because / always gives a float.",
      "Slide 59 has no answer key, and item 10 uses curly quotes (“3”). The answers in this lesson come from running the expressions in Python with straight quotes.",
    ],
  },

  // ================================================================ 11. input and conversion
  {
    id: "lesson-t2-input-conversion",
    topicId: "t2",
    order: 11,
    title: "Reading Input and Converting Types",
    conceptIds: ["t2-input", "t2-conversion"],
    sources: [
      { file: "topic2", units: [60, 61, 62, 63, 64, 65], note: "input(), strings, int() and float()" },
      { file: "topic2", units: [68, 69, 70, 71, 72, 73], note: "Adding two inputs with and without conversion" },
    ],
    explanation: [
      {
        heading: "Reading input: variable = input(prompt)",
        body: [
          "Programs often need data from the user. The `input()` function shows a message (the **prompt**), waits for the user to type something and press Enter, and gives back what was typed.",
          "The syntax is `variable = input(prompt)`. The prompt tells the user what to type. It is optional: `input()` with nothing inside also works.",
          "The typed value is stored in the variable on the left side.",
        ],
        source: { file: "topic2", units: [61] },
      },
      {
        heading: "input() always gives a string",
        body: [
          "Everything read by `input()` is a **string**, even if the user types only digits. If the user types 20 for `Age = input(\"Enter Age :\")`, Age holds the text \"20\", not the number 20.",
          "You can check with `type(Age)`, which gives `<class 'str'>`.",
        ],
        source: { file: "topic2", units: [62, 63] },
      },
      {
        heading: "Adding two inputs joins them",
        body: [
          "Because both inputs are strings, `+` joins them instead of adding. If the user types 10 and 20, `num1 + num2` gives \"1020\", not 30.",
        ],
        source: { file: "topic2", units: [68, 69] },
      },
      {
        heading: "Converting with int() and float()",
        body: [
          "`int(X)` converts X to an integer, and `float(X)` converts X to a float.",
          "Wrap `input()` inside the conversion to get a number straight away: `Age = int(input(\"Enter Age :\"))`. Now Age holds the int 20.",
          "With `int()` around both inputs, 10 + 20 gives 30. With `float()`, the user can type decimals: 5.2 + 8.3 gives 13.5.",
        ],
        source: { file: "topic2", units: [64, 65, 70, 71, 72, 73] },
      },
      {
        heading: "Choosing int() or float()",
        body: [
          "Use `int()` for whole numbers (age, number of items) and `float()` for values that may have a decimal point (price, weight, marks).",
          "`int()` cannot convert text that has a decimal point: `int(\"5.5\")` raises a **ValueError**. `float(\"5\")` is fine and gives `5.0`.",
          "`int()` of a float number drops the decimal part: `int(5/2)` is `int(2.5)`, which is 2 (slide 59 uses this).",
        ],
        source: { file: "topic2", units: [65] },
      },
    ],
    keyPoints: [
      "`input(prompt)` shows the prompt and returns what the user typed.",
      "The value from `input()` is always a str, even when the user types digits.",
      "`'10' + '20'` gives `'1020'` (joining), not 30.",
      "Wrap the input in `int()` for whole numbers: `age = int(input(\"Enter Age :\"))`.",
      "Use `float()` for numbers with a decimal point: `float(\"5.2\")` is 5.2.",
      "`int(\"5.5\")` raises a ValueError; `int(5.5)` gives 5.",
      "Convert the inputs before you calculate, not after.",
    ],
    examples: [
      {
        title: "input() gives a string; int() makes it a number",
        code: 'Age = input("Enter Age :")\nprint(type(Age))\nAge = int(input("Enter Age :"))\nprint(type(Age))',
        inputs: ["20", "20"],
        output: "Enter Age :20\n<class 'str'>\nEnter Age :20\n<class 'int'>",
        lineNotes: [
          { line: 1, text: "The user types 20, but Age holds the string \"20\"." },
          { line: 3, text: "int() converts the typed text to the integer 20 (slide 64)." },
        ],
        source: { file: "topic2", units: [62, 63, 64] },
        origin: "adapted",
      },
      {
        title: "Without conversion: 10 + 20 gives 1020",
        code: 'num1 = input("Enter a number : ")\nnum2 = input("Enter another number : ")\nresult = num1 + num2\nprint(result)',
        inputs: ["10", "20"],
        output: "Enter a number : 10\nEnter another number : 20\n1020",
        lineNotes: [
          { line: 3, text: "num1 and num2 are strings, so + joins them." },
        ],
        source: { file: "topic2", units: [68, 69] },
        origin: "source",
      },
      {
        title: "With int(): 10 + 20 gives 30",
        code: 'num1 = int(input("Enter a number : "))\nnum2 = int(input("Enter another number : "))\nresult = num1 + num2\nprint(result)',
        inputs: ["10", "20"],
        output: "Enter a number : 10\nEnter another number : 20\n30",
        lineNotes: [
          { line: 1, text: "input() reads the text \"10\", and int() turns it into the number 10." },
          { line: 3, text: "Both are ints now, so + adds them. On slide 70 this line looks indented; it must start at the left edge." },
        ],
        source: { file: "topic2", units: [70, 71] },
        origin: "source",
      },
      {
        title: "With float(): decimals",
        code: 'num1 = float(input("Enter a number : "))\nnum2 = float(input("Enter another number : "))\nresult = num1 + num2\nprint(result)',
        inputs: ["5.2", "8.3"],
        output: "Enter a number : 5.2\nEnter another number : 8.3\n13.5",
        lineNotes: [
          { line: 1, text: "float() accepts numbers with a decimal point." },
          { line: 4, text: "5.2 + 8.3 is 13.5." },
        ],
        source: { file: "topic2", units: [72, 73] },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Forgetting to convert before adding",
        wrong: 'num1 = input("Enter a number : ")\nnum2 = input("Enter another number : ")\nprint(num1 + num2)   # 10 and 20 give 1020',
        right: 'num1 = int(input("Enter a number : "))\nnum2 = int(input("Enter another number : "))\nprint(num1 + num2)   # 30',
        explanation: "`input()` returns strings, and `+` joins strings. Convert each input with `int()` or `float()` first.",
      },
      {
        title: "Using int() for a value with a decimal point",
        wrong: 'price = int(input("Price: "))   # user types 5.5',
        right: 'price = float(input("Price: "))',
        explanation: "`int(\"5.5\")` raises `ValueError: invalid literal for int() with base 10: '5.5'`. Use `float()` when the user may type decimals.",
      },
      {
        title: "Converting after the calculation",
        wrong: "print(int(num1 + num2))   # still 1020",
        right: "print(int(num1) + int(num2))   # 30",
        explanation: "`num1 + num2` is worked out first and joins the strings into \"1020\". Converting that gives the number 1020. Convert each value before you add.",
      },
      {
        title: "Multiplying an input without converting",
        wrong: "n = input()\nprint(n * 3)   # user types 5: prints 555",
        right: "n = int(input())\nprint(n * 3)   # 15",
        explanation: "A string times an int repeats the string, so \"5\" * 3 is \"555\". There is no error, so this mistake is easy to miss.",
      },
    ],
    tryIt: {
      prompt:
        "Read the price of one item (it may have decimals) and the quantity (a whole number). Print the total cost. For example, price 2.5 and quantity 4 should give 10.0.",
      starterCode: 'price = input("Enter price: ")\nquantity = input("Enter quantity: ")\n# convert both values before multiplying\n\n',
      inputsHint: "Try 2.5 and 4",
    },
    quickCheck: ["pm-t2b-028", "pm-t2b-029", "pm-t2b-032"],
    sourceNotes: [
      "The console pictures on slides 62–64, 67, 68, 70 and 72 put >>> in front of the input prompt. When a program runs, the prompt appears on its own line without >>>.",
      "The code on slides 62–64 and 68–73 uses curly quotes (“ ”), which cause a SyntaxError if typed. The lesson uses straight quotes.",
      "Slides 70 and 72 show the result = num1 + num2 line indented. Typed like that it raises IndentationError: unexpected indent; it must start at the left edge.",
      "Slides 68, 70 and 72 show the second console line as \"Enter another number   20\" without the colon, although the code's prompt has one.",
      "Slide 63's label “20“ uses two opening curly quotes. Slide 61 has the typo \"from the use\" (user).",
    ],
  },

  // ================================================================ 12. output
  {
    id: "lesson-t2-output",
    topicId: "t2",
    order: 12,
    title: "Output: print(), f-strings and end=",
    conceptIds: ["t2-print", "t2-fstrings", "t2-print-end"],
    sources: [
      { file: "topic2", units: [66, 67], note: "print(*objects); joining with +" },
      { file: "topic2", units: [74, 75], note: "Printing with commas; formatted output (f-strings)" },
      { file: "topic2", units: [76, 77], note: "The end parameter" },
      { file: "lab-ch3-ii", units: [4], note: "print(int(x),'a')" },
      { file: "lab-ch2-practice-ii", units: [11, 12], note: "Attendance and marks output" },
    ],
    explanation: [
      {
        heading: "print(*objects)",
        body: [
          "`print()` displays results on the screen. The syntax is `print(*objects)`. The `*` means you can give it more than one object, separated by commas.",
          "When you separate values with commas, `print()` puts **one space** between them, and starts a new line at the end.",
          "Commas work with any type, so you can print numbers and strings together without converting: `print(int(x), 'a')` with x = 1 prints `1 a`.",
        ],
        source: { file: "topic2", units: [66] },
      },
      {
        heading: "Joining strings with +",
        body: [
          "You can also build one string with `+`: `print(\"Hello \" + Name + \"!\")`. With Name = \"Hilal\" this prints `Hello Hilal!`.",
          "`+` adds **no spaces**. Any space you want must be inside the quotes. Also, every part must be a string; joining a string and a number with `+` raises a TypeError.",
        ],
        source: { file: "topic2", units: [67] },
      },
      {
        heading: "Watch the spaces when using commas",
        body: [
          "Slide 74 prints `print(\"Hello\", name, \" ! Your age is \", age, \" years\")`. print adds a space between items, and some strings already start or end with a space. So the real output has double spaces: `Hello Hilal  ! Your age is  21  years`.",
          "To avoid this, either leave the extra spaces out of the strings, or use an f-string.",
        ],
        source: { file: "topic2", units: [74] },
      },
      {
        heading: "Formatted output: f-strings",
        body: [
          "An f-string puts variables straight into the text. Write `f` **immediately before** the opening quote, and put each variable inside curly braces `{ }`.",
          "`print(f\"Hello {name} ! Your age is {age} years\")` prints `Hello Hilal ! Your age is 21 years`. You control every space yourself.",
          "If you forget the `f`, the braces are printed as normal text: `Hello {name}`.",
        ],
        source: { file: "topic2", units: [75] },
      },
      {
        heading: "Staying on the same line: end=",
        body: [
          "Every `print()` ends with a new line by default, so two prints give two lines. The ending is set by the `end` parameter, whose default value is `'\\n'` (new line).",
          "`print(\"Python\", end=\" \")` ends with a space instead, so the next print continues on the same line: `Python is the best`.",
          "You can end with any string: `end=\"/\"` prints a slash, and `end=\"\"` prints nothing at the end.",
        ],
        source: { file: "topic2", units: [76, 77] },
      },
    ],
    keyPoints: [
      "`print()` can take several values separated by commas; it puts one space between them.",
      "`+` joins strings exactly as they are, with no extra spaces, and cannot join a str and an int.",
      "With commas you can print numbers without converting them.",
      "f-strings: put `f` right before the opening quote and variables inside `{ }`.",
      "Without the `f`, `{name}` is printed literally.",
      "`print()` ends with a new line by default (`end='\\n'`).",
      "`end=\" \"` (or any other string) keeps the next output on the same line.",
    ],
    examples: [
      {
        title: "Joining with + (slide 67)",
        code: 'Name = input("Enter your name : ")\nprint("Hello " + Name + "!")',
        inputs: ["Hilal"],
        output: "Enter your name : Hilal\nHello Hilal!",
        lineNotes: [
          { line: 2, text: "+ adds no spaces. The only space is inside \"Hello \", so there is no space before the !. Slide 67 shows Hello Hilal ! which is not what this code prints." },
        ],
        source: { file: "topic2", units: [67] },
        origin: "source",
      },
      {
        title: "Commas compared with an f-string (slides 74–75)",
        code: 'name = input("Enter your name : ")\nage = input("Enter your age :")\nprint("Hello", name, " ! Your age is ", age, " years")\nprint(f"Hello {name} ! Your age is {age} years")',
        inputs: ["Hilal", "21"],
        output:
          "Enter your name : Hilal\nEnter your age :21\nHello Hilal  ! Your age is  21  years\nHello Hilal ! Your age is 21 years",
        lineNotes: [
          { line: 2, text: "This prompt has no space after the colon, so the typed 21 appears right after it." },
          { line: 3, text: "print adds a space between items AND some strings have their own spaces, giving double spaces. Slide 74 shows single spaces." },
          { line: 4, text: "The f-string gives exactly the spaces written inside the quotes." },
        ],
        source: { file: "topic2", units: [74, 75] },
        origin: "adapted",
      },
      {
        title: "Staying on the same line with end=",
        code: 'print("Python", end=" ")\nprint("is the best")\nprint("Hello", end="\\n")\nprint("World")\nprint("Hello", end="/")\nprint("World")',
        output: "Python is the best\nHello\nWorld\nHello/World",
        lineNotes: [
          { line: 1, text: "end=\" \" replaces the new line with a space (slide 76)." },
          { line: 3, text: "end=\"\\n\" is the default, so this behaves like a normal print (slide 77)." },
          { line: 5, text: "Any string can be the ending. Here it is a slash with no spaces, so the output is Hello/World." },
        ],
        source: { file: "topic2", units: [76, 77] },
        origin: "adapted",
      },
      {
        title: "Lab: printing a number and a string with a comma",
        code: "x=1\nprint(x)\nprint(int(x),'a')",
        output: "1\n1 a",
        lineNotes: [
          { line: 3, text: "Two values separated by a comma: print shows 1, a space, then a." },
        ],
        source: { file: "lab-ch3-ii", units: [4] },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Joining a string and a number with +",
        wrong: 'age = 21\nprint("Age: " + age)',
        right: 'age = 21\nprint("Age:", age)',
        explanation: "`+` can only join strings, so this raises `TypeError: can only concatenate str (not \"int\") to str`. Use a comma or an f-string such as `f\"Age: {age}\"`.",
      },
      {
        title: "Forgetting the f in an f-string",
        wrong: 'print("Hello {name}")',
        right: 'print(f"Hello {name}")',
        explanation: "Without the `f` the text is an ordinary string and the braces are printed as they are.",
      },
      {
        title: "Extra spaces when using commas",
        wrong: 'print("Hello", name, " !")   # Hello Hilal  !',
        right: 'print("Hello", name, "!")   # Hello Hilal !',
        explanation: "print already puts one space between items. A space inside the string adds a second one.",
      },
      {
        title: "Expecting two prints to share a line",
        wrong: 'print("Python")\nprint("is the best")',
        right: 'print("Python", end=" ")\nprint("is the best")',
        explanation: "Each print ends with a new line unless you change `end`.",
      },
    ],
    tryIt: {
      prompt:
        "Lab Ch2 Practice II, cell 12: read a student's name and marks, then print exactly: Student Sara scored 90 marks in the test. Do it once with an f-string and once with commas, and compare the spaces.",
      starterCode: 'name = input("Enter student name: ")\nmarks = input("Enter marks: ")\n# print: Student Sara scored 90 marks in the test.\n',
      inputsHint: "Try Sara and 90",
    },
    quickCheck: ["pm-t2b-033", "pm-t2b-035", "pm-t2b-037"],
    sourceNotes: [
      "Slide 66 has typos: \"objects is the object to the printed\" (to be printed) and \"your program want to\" (wants to).",
      "Slide 67 shows Hello Hilal ! but print( \"Hello \" + Name + \"!\") prints Hello Hilal! with no space before the !. The console picture also shows the prompt \"Enter Name :\" while the code says \"Enter your name : \".",
      "Slide 74 shows Hello Hilal ! Your age is 21 years with single spaces. The real output is Hello Hilal  ! Your age is  21  years (double spaces). The prompt \"Enter your age :\" has no trailing space, so the typed 21 appears straight after the colon.",
      "Slide 75: both print lines start with a space, which would raise IndentationError: unexpected indent. Its first version uses \"Hello \" (with a space), so it prints Hello  Hilal  ! ... and is not identical to the f-string version. \"Use f inside the parenthesis\" is imprecise: the f must come immediately before the string's opening quote.",
      "Slide 76's text writes end=“ ” with curly quotes; its screenshot correctly uses straight quotes.",
      "Slide 77: end= ‘  ’ has two spaces, so it would print Hello  World (two spaces), and end= ‘ / ’ has spaces around the slash, so it would print Hello / World, not Hello/World as shown. The lesson's example uses end=\"/\" without spaces, which really prints Hello/World. The slide also uses curly quotes.",
    ],
  },

  // ================================================================ 13. comments and programs
  {
    id: "lesson-t2-comments-programs",
    topicId: "t2",
    order: 13,
    title: "Comments and Complete Programs",
    conceptIds: ["t2-comments", "t2-programs"],
    sources: [
      { file: "topic2", units: [78, 79], note: "Comments" },
      { file: "topic2", units: [80, 81, 82], note: "Exercises: circle area, calculator, gram conversion" },
      { file: "pe1", units: [1], item: "1–5", note: "Worked examples: input/output and arithmetic" },
      { file: "lab-ch3-iii", units: [1, 3, 5, 7], note: "Pizza offer and stationery cost" },
      { file: "lab-ch3-ii", units: [5, 8], note: "Online students percentage" },
      { file: "lab-ch2-practice-ii", units: [10, 11], note: "Attendance check" },
      { file: "lab-ch3-iiii", units: [8], note: "Total and average of two marks" },
    ],
    explanation: [
      {
        heading: "Comments start with #",
        body: [
          "A **comment** is a note in your program, written in normal language, that explains what the program is doing. In Python a comment starts with the `#` symbol.",
          "Everything from the `#` to the end of the line is **ignored** by Python. It has no effect on the program.",
          "A comment can be on its own line above the code, or at the end of a line of code: `percentage = (minute * 100) / 60    # percentage of an hour`.",
          "The code already shows *what* it does, so the most useful comments explain *why* it does it.",
        ],
        source: { file: "topic2", units: [79] },
      },
      {
        heading: "Input → process → output",
        body: [
          "Most programs in this topic have three steps: **read** the values with `input()` and convert them, **compute** the result with operators, and **display** it with `print()`.",
          "Slide 80: read a radius, compute the area with `Pi = 3.14` and `Area = Pi * radius * radius`, then display the area. The radius must be converted with `float()` before the multiplication.",
        ],
        source: { file: "topic2", units: [80] },
      },
      {
        heading: "A calculator and a unit converter",
        body: [
          "Slide 81: a calculator reads two numbers and prints the results of `+`, `-`, `*` and `/`.",
          "Slide 82: a measurement converter reads a weight in grams and displays it in kilograms (`gram / 1000`) and centigrams (`gram * 100`).",
          "Always print a label with each result, such as `print(\"Kilogram:\", kilogram)`, so the user knows which number is which.",
        ],
        source: { file: "topic2", units: [81, 82] },
      },
      {
        heading: "Worked examples from Practice Exercises I",
        body: [
          "Ex 2 reads a name, age and college name and prints `Welcome SAMI !`, `Your age is 21` and `Your college name is UTAS`. Commas in print give the spaces: `print(\"Welcome\", name, \"!\")`.",
          "Ex 3 reads the year of birth and calculates the age. The sample turns 1990 into 31, so it uses 2021 as the current year: `age = 2021 - int(year)`.",
          "Ex 4 reads three course marks and prints their average. The sum must be in parentheses: `(prog1 + web + calculus) / 3`. For 8.5, 9 and 10 Python prints 9.166666666666666.",
          "Ex 5 computes `Quiz Mark = quiz score / 40 * 50 + 50` and `Exam Mark = exam score / 60 * 50 + 50`, and the total mark as the average of the two.",
        ],
        source: { file: "pe1", units: [1], item: "1–5" },
      },
      {
        heading: "Lab programs",
        body: [
          "**Pizza offer** (buy 2, get 1 free): `free_pizzas = pizzas // 3` and `total = (pizzas - free_pizzas) * price`. Use `//`, because you cannot get part of a free pizza.",
          "**Stationery cost:** read the quantity and price of pencils, pens, calculators and extra paper, work out each cost as quantity × price, then add the four costs to get the total.",
          "**Online students:** offline students = total - online, and the percentage of online students = online / total * 100 (Chapter 3 Lab II, cell 8).",
          "**Attendance check:** `print(Name + \" is \" + Att + \" today.\")` prints a sentence such as `Ali is Present today.` (Chapter 2 Practice II, cell 11).",
        ],
        source: { file: "lab-ch3-iii", units: [1, 3, 5, 7] },
      },
    ],
    keyPoints: [
      "`#` starts a comment; Python ignores everything after it on that line.",
      "Good comments explain why, not only what.",
      "Most programs follow the pattern: read input, convert it, calculate, print.",
      "Convert input with `int()` or `float()` before you calculate.",
      "Use parentheses so formulas follow the right order: `(a + b + c) / 3`.",
      "Use `//` when the answer must be a whole number, such as a number of free pizzas.",
      "Print a label with every result.",
    ],
    examples: [
      {
        title: "Circle area (slide 80)",
        code: '# Read the radius, compute the area of a circle, display it\nPi = 3.14\nradius = float(input("Enter the radius: "))\nArea = Pi * radius * radius   # area = pi * r * r\nprint("Area of the circle =", Area)',
        inputs: ["5"],
        output: "Enter the radius: 5\nArea of the circle = 78.5",
        lineNotes: [
          { line: 1, text: "A comment on its own line describes the whole program." },
          { line: 3, text: "float() converts the typed radius, so decimals like 2.5 also work." },
          { line: 4, text: "An end-of-line comment. Python ignores everything after the #." },
        ],
        source: { file: "topic2", units: [80] },
        origin: "adapted",
      },
      {
        title: "Calculator (slide 81)",
        code: '# Simple calculator: read two numbers and show + - * /\nnum1 = float(input("Enter first number: "))\nnum2 = float(input("Enter second number: "))\nprint("Sum =", num1 + num2)\nprint("Difference =", num1 - num2)\nprint("Product =", num1 * num2)\nprint("Division =", num1 / num2)',
        inputs: ["12", "4"],
        output: "Enter first number: 12\nEnter second number: 4\nSum = 16.0\nDifference = 8.0\nProduct = 48.0\nDivision = 3.0",
        lineNotes: [
          { line: 2, text: "float() means the results are floats, so they print as 16.0, 8.0 and so on." },
          { line: 4, text: "The expression is worked out first, then printed after its label." },
        ],
        source: { file: "topic2", units: [81] },
        origin: "adapted",
      },
      {
        title: "Average of three marks (Practice Exercises I, Ex 4)",
        code: '# Read the marks of three courses\nprog1 = float(input("Programming 1 mark: "))\nweb = float(input("Web Technology mark: "))\ncalculus = float(input("Calculus mark: "))\n\n# Add first (parentheses), then divide by 3\naverage = (prog1 + web + calculus) / 3\n\nprint("Courses", "Marks")\nprint("--------------------")\nprint("Programming 1", prog1)\nprint("Web Technology", web)\nprint("Calculus", calculus)\nprint("--------------------")\nprint("Average", average)',
        inputs: ["8.5", "9", "10"],
        output:
          "Programming 1 mark: 8.5\nWeb Technology mark: 9\nCalculus mark: 10\nCourses Marks\n--------------------\nProgramming 1 8.5\nWeb Technology 9.0\nCalculus 10.0\n--------------------\nAverage 9.166666666666666",
        lineNotes: [
          { line: 7, text: "Without the parentheses only calculus would be divided by 3." },
          { line: 12, text: "float(\"9\") is 9.0, so the marks print as 9.0 and 10.0." },
          { line: 15, text: "27.5 / 3 is 9.166666666666666, the value in the exercise's sample output." },
        ],
        source: { file: "pe1", units: [1], item: "4" },
        origin: "adapted",
      },
      {
        title: "Pizza offer: buy 2, get 1 free (Lab III, cell 3)",
        code: 'pizzas = int(input("Enter number of pizzas: "))\nprice = float(input("Enter price of one pizza: "))\n\nfree_pizzas = pizzas // 3\ntotal = (pizzas - free_pizzas) * price\n\nprint("Total cost:", total, "OMR")',
        inputs: ["7", "2.5"],
        output: "Enter number of pizzas: 7\nEnter price of one pizza: 2.5\nTotal cost: 12.5 OMR",
        lineNotes: [
          { line: 4, text: "7 // 3 is 2 free pizzas. With / it would be 2.333…, which makes no sense for pizzas (that is the bug in cell 4)." },
          { line: 5, text: "The customer pays for 7 - 2 = 5 pizzas: 5 × 2.5 = 12.5." },
        ],
        source: { file: "lab-ch3-iii", units: [3] },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Expecting a commented-out line to run",
        wrong: '# print("Total:", total)',
        right: 'print("Total:", total)',
        explanation: "A line that starts with `#` is ignored completely. Remove the `#` if you want the code to run.",
      },
      {
        title: "Calculating with an unconverted input",
        wrong: 'radius = input("Enter the radius: ")\nArea = 3.14 * radius * radius',
        right: 'radius = float(input("Enter the radius: "))\nArea = 3.14 * radius * radius',
        explanation: "radius is a string, and a float times a string raises `TypeError: can't multiply sequence by non-int of type 'float'`. Convert the input first.",
      },
      {
        title: "Forgetting parentheses in an average",
        wrong: "average = prog1 + web + calculus / 3",
        right: "average = (prog1 + web + calculus) / 3",
        explanation: "Division is done before addition, so only the last mark would be divided. For 8.5, 9 and 10 the wrong line gives 20.833333333333332.",
      },
      {
        title: "Using / when the answer must be whole (Lab III, cell 4)",
        wrong: "free_pizzas = pizzas / 3",
        right: "free_pizzas = pizzas // 3",
        explanation: "`/` gives fractions of a pizza (7 / 3 is 2.333…), so the total cost comes out wrong. `//` gives the whole number of free pizzas.",
      },
    ],
    tryIt: {
      prompt:
        "Slide 82: write a measurement conversion program. Read a person's weight in grams, convert it to kilograms (gram / 1000) and centigrams (gram * 100), and display both values with labels. Add a comment for each step. For 2500 grams you should get 2.5 kilograms and 250000.0 centigrams.",
      starterCode: '# Step 1: read the weight in grams\ngram = float(input("Enter weight in grams: "))\n# Step 2: convert (Kilogram = gram / 1000, Centigram = gram * 100)\n\n# Step 3: display both values with labels\n',
      inputsHint: "Try 2500",
    },
    quickCheck: ["pm-t2b-039", "pm-t2b-041", "pm-t2b-043"],
    sourceNotes: [
      "Slide 79's second bullet is garbled: it says comments are \"most useful to figure out what the code does\". The intended meaning (from Think Python) is that the code shows what it does, so comments are more useful when they explain why.",
      "Slide 79's first code box indents the percentage line under the comment. Typed like that it raises IndentationError: unexpected indent. The second box's comment is clipped at the edge (\"# percentage of an hour\").",
      "Practice Exercises I, Ex 1: the sample output shows prompts such as \"Enter the course NamePYTHON\" with no space, so the prompt strings had no trailing space.",
      "Practice Exercises I, Ex 3: the sample turns the birth year 1990 into age 31, so it uses 2021 as the current year.",
      "Lab III cell 4 uses / instead of // for the free pizzas, so the number of free pizzas can be a fraction. Cell 3 (with //) is the correct version. The notebook does not show the values typed for cell 3's output (Total cost: 15.0 OMR), so this lesson uses its own inputs.",
      "Chapter 3 Lab II cell 8 prints the percentage with {online_percentage:.1f}. That format code is not taught in the slides; printing {online_percentage} shows the full value instead.",
    ],
  },
];
