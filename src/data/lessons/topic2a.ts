import type { Lesson } from "../types";

// Topic 2, slides 1–25 (plus lab Ch2 Practice II cells 2–3 and lab Ch3 IIII cell 1).
// Every example output below is the real Python 3.13 terminal output (verified by script).

export const TOPIC2A_LESSONS: Lesson[] = [
  // =====================================================================
  // 1. Values and data types
  // =====================================================================
  {
    id: "lesson-t2-values-types",
    topicId: "t2",
    order: 1,
    title: "Values and Data Types: Numbers and Booleans",
    conceptIds: ["t2-values-types", "t2-numbers", "t2-boolean"],
    sources: [
      { file: "topic2", units: [2, 3, 4, 5, 6, 7], note: "Values and types; int, float, complex; Boolean" },
      { file: "lab-ch3-iiii", units: [1], note: "Identify the datatypes" },
    ],
    explanation: [
      {
        heading: "What is a value?",
        body: [
          "A **value** (also called a constant) is one of the basic things a program works with, like a letter or a number.",
          "Slide 2 gives five example values: `1`, `2.562`, `True`, `3+4j` and `\"Hello, UTAS!\"`. They look different because each one is a different **kind** of value.",
        ],
        source: { file: "topic2", units: [2], note: "Example values" },
      },
      {
        heading: "Data types",
        body: [
          "A **data type** represents the kind of value. Python has a short name for each type.",
          "Slide 3's diagram shows Python's main groups of types. In this topic you use the five types in the table below. (The diagram also shows lists, tuples, sets and dictionaries; they are not covered in this topic.)",
        ],
        table: {
          headers: ["Example value", "Kind of value", "Python type name"],
          rows: [
            ["`1`", "Integer (whole number)", "`int`"],
            ["`2.562`", "Floating-point number", "`float`"],
            ["`3+4j`", "Complex number", "`complex`"],
            ["`True`", "Boolean", "`bool`"],
            ["`\"Hello, UTAS!\"`", "String (text)", "`str`"],
          ],
        },
        source: { file: "topic2", units: [2, 3], note: "Data type: represent the kind of value" },
      },
      {
        heading: "Integers: int",
        body: [
          "An **integer** is a whole number, positive or negative, **without decimals**. It can be of unlimited length.",
          "Examples from slide 4: `2`, `-56`, `0` and `76789999865433331`. Python stores even the long one exactly.",
        ],
        source: { file: "topic2", units: [4], note: "int: without decimals, unlimited length" },
      },
      {
        heading: "Floating-point numbers: float",
        body: [
          "A **float** is a real number written **with a decimal point**, such as `3.5` or `-0.004`.",
          "A number with a decimal point is a float even when the part after the point is zero: `1.0` is a float, but `1` is an int.",
          "A float can also be written in **scientific notation**, where `E` or `e` means \"times 10 to the power of\". `5.6e-6` means 5.6 × 10⁻⁶ and `6E10` means 6 × 10¹⁰. Do not put a space inside the number: write `6E10`, not `6 E10`.",
        ],
        source: { file: "topic2", units: [5], note: "float: decimal point; scientific notation with E or e" },
      },
      {
        heading: "Complex numbers: complex",
        body: [
          "A **complex number** has the form `a + bj`, where `a` is the real part and `b` is the imaginary part.",
          "Examples from slide 6: `4+5j`, `7j` and `-7J`. You may write a small `j` or a capital `J`. Python uses `j`, not the `i` used in maths, so `4+5i` is an error.",
        ],
        source: { file: "topic2", units: [6], note: "complex: a + bJ" },
      },
      {
        heading: "Boolean values: bool",
        body: [
          "A **Boolean** represents one of only two values: `True` or `False`.",
          "The `T` in `True` and the `F` in `False` must be **uppercase**, and the other letters lowercase. Python does not understand `true`, `TRUE` or `false`: it treats them as unknown names and reports a `NameError`.",
        ],
        source: { file: "topic2", units: [7], note: "Booleans: True and False, uppercase T and F" },
      },
    ],
    keyPoints: [
      "A value is a basic thing a program works with, such as a number or a letter.",
      "Every value has a data type. This topic uses `int`, `float`, `complex`, `bool` and `str`.",
      "`int`: whole numbers with no decimal point, of any length (`2`, `-56`, `0`).",
      "`float`: numbers with a decimal point (`3.5`, `1.0`) or in scientific notation with `e`/`E` (`5.6e-6`, `6E10`), written with no spaces.",
      "`complex`: `a + bj`, using `j` or `J` for the imaginary part (`4+5j`, `7j`).",
      "`bool`: only `True` and `False`, each with a capital first letter.",
    ],
    examples: [
      {
        title: "The example values from slide 2",
        code: `print(1)
print(2.562)
print(True)
print(3+4j)
print("Hello, UTAS!")`,
        output: "1\n2.562\nTrue\n(3+4j)\nHello, UTAS!\n",
        lineNotes: [
          { line: 1, text: "An int: a whole number." },
          { line: 2, text: "A float: it has a decimal point." },
          { line: 3, text: "A Boolean: True with a capital T." },
          { line: 4, text: "A complex number. Python prints complex numbers inside parentheses: (3+4j)." },
          { line: 5, text: "A string. Slide 2 shows curly quotes; in code always type straight quotes." },
        ],
        source: { file: "topic2", units: [2], note: "Example values" },
        origin: "adapted",
      },
      {
        title: "Integers and floats (slides 4 and 5)",
        code: `print(-56)
print(76789999865433331)
print(-0.004)
print(1.0)
print(6E10)
print(5.6e-6)`,
        output: "-56\n76789999865433331\n-0.004\n1.0\n60000000000.0\n5.6e-06\n",
        lineNotes: [
          { line: 2, text: "Integers can be as long as you need." },
          { line: 4, text: "1.0 is a float, so Python keeps the .0 when it prints it." },
          { line: 5, text: "6E10 means 6 × 10¹⁰. It is a float, so Python prints it as 60000000000.0." },
          { line: 6, text: "Python prints very small floats in scientific notation, with two digits after the e: 5.6e-06 is the same number as 5.6e-6." },
        ],
        source: { file: "topic2", units: [4, 5], note: "int and float examples" },
        origin: "adapted",
      },
      {
        title: "Complex numbers and Booleans (slides 6 and 7)",
        code: `print(4+5j)
print(7j)
print(3J)
print(True)
print(False)`,
        output: "(4+5j)\n7j\n3j\nTrue\nFalse\n",
        lineNotes: [
          { line: 1, text: "Real part 4, imaginary part 5." },
          { line: 2, text: "Only an imaginary part, so Python prints it without parentheses." },
          { line: 3, text: "You may type a capital J (lab Ch3 IIII lists 3J), but Python always prints a small j." },
          { line: 4, text: "The two Boolean values are True and False." },
        ],
        source: { file: "topic2", units: [6, 7], note: "complex numbers; Booleans" },
        origin: "adapted",
      },
      {
        title: "Lowercase true is not a Boolean",
        code: `isHappy = true
print(isHappy)`,
        output: "",
        raises: "NameError: name 'true' is not defined. Did you mean: 'True'?",
        lineNotes: [
          { line: 1, text: "Python looks for a variable called true, finds none, and stops here. Write True with a capital T." },
          { line: 2, text: "This line never runs." },
        ],
        source: { file: "topic2", units: [7], note: "'T' in True and 'F' in False should be uppercase" },
        origin: "original",
      },
    ],
    mistakes: [
      {
        title: "Putting a space inside scientific notation",
        wrong: "x = 6 E10",
        right: "x = 6E10",
        explanation:
          "Slide 5 shows `6 E10` with a space, but Python reads `6` and `E10` as two separate things and reports a `SyntaxError`. A number in scientific notation must be written with no spaces: `6E10` or `6e10`.",
      },
      {
        title: "Writing true or false in lowercase",
        wrong: "isHappy = true",
        right: "isHappy = True",
        explanation:
          "Only `True` and `False` (with a capital first letter) are Boolean values. Lowercase `true` is treated as an unknown variable name, so Python stops with a `NameError`.",
      },
      {
        title: "Using i for the imaginary part",
        wrong: "z = 4+5i",
        right: "z = 4+5j",
        explanation: "Python writes the imaginary part with `j` or `J`, not `i`. `4+5i` is a `SyntaxError` (invalid decimal literal).",
      },
      {
        title: "Thinking 1.0 is an int",
        explanation:
          "Any number written with a decimal point is a float, even if it is a whole number. `1` is an int, but `1.0` is a float. This is a common trap in data-type questions such as lab Ch3 IIII cell 1.",
      },
    ],
    tryIt: {
      prompt:
        "Print one value of each number type and a Boolean: an int, a float written in scientific notation, a complex number and a Boolean. Before you run the program, predict what each line will print. Then change the values and run it again.",
      starterCode: `print(76789999865433331)   # an int
# print a float in scientific notation, for example 5.6e-6
# print a complex number, for example 4+5j
# print a Boolean value
`,
    },
    quickCheck: ["pm-t2a-001", "pm-t2a-002", "pm-t2a-004"],
    sourceNotes: [
      "Slide 2 writes “Hello, UTAS!” with curly quotes. Python only accepts straight quotes, so in code it must be \"Hello, UTAS!\".",
      "Slide 5 writes 6 E10 with a space between 6 and E10. As Python code this is a SyntaxError; the valid form is 6E10 (or 6e10), which Python prints as 60000000000.0.",
      "Slide 5 writes 5.6e-6; Python prints this same value as 5.6e-06.",
      "Lab Ch3 IIII cell 1 lists lowercase true (item 7). That is not a Boolean in Python (it causes a NameError); the Boolean value is True. The lab does not say whether this is a typo or a trick. The lab also writes “Hello” and “10.12” with curly quotes; with straight quotes both are strings.",
    ],
  },

  // =====================================================================
  // 2. Strings and escape sequences
  // =====================================================================
  {
    id: "lesson-t2-strings",
    topicId: "t2",
    order: 2,
    title: "Strings and Escape Sequences",
    conceptIds: ["t2-strings", "t2-escape"],
    sources: [
      { file: "topic2", units: [8, 9, 10, 11, 12, 14, 15], note: "Strings, quotes, escape sequences, exercises" },
      { file: "lab-ch2-practice-ii", units: [2, 3], note: "Backslash line continuation" },
    ],
    explanation: [
      {
        heading: "What is a string?",
        body: [
          "A **string** is a sequence of characters. Strings are basically words or text.",
          "You can write a string with **single quotes** (`'Hello'`) or **double quotes** (`\"Hello\"`). Both work exactly the same way. All spaces and tabs inside the quotes are kept as they are.",
          "The quote that opens a string must match the quote that closes it: `\"Hello'` is an error.",
        ],
        source: { file: "topic2", units: [8], note: "Strings; single and double quotes" },
      },
      {
        heading: "Triple quotes: strings over several lines",
        body: [
          "Use **triple quotes**, `'''` or `\"\"\"`, to write a **multi-line string**. The line breaks you type become part of the string.",
          "Inside triple quotes you can also use single quotes and double quotes freely, for example `'''Ali's \"best\" day'''`.",
        ],
        source: { file: "topic2", units: [9], note: "Triple quotes for multi-line strings" },
      },
      {
        heading: "Quotes inside a string",
        body: [
          "Inside double quotes you can freely use single quotes, and inside single quotes you can freely use double quotes. So `\"What's your name?\"` works.",
          "But `'What's your name?'` does not: Python thinks the apostrophe in What's is the end of the string. It gets confused about where the string starts and ends, and reports a `SyntaxError`.",
          "The fix is an **escape sequence**: write the quote as `\\'` (notice the backslash). `'What\\'s your name?'` now works. In the same way, `\\\"` puts a double quote inside a double-quoted string, which is what the slide 15 exercise needs.",
        ],
        source: { file: "topic2", units: [10, 15], note: "Escaping a quote with a backslash" },
      },
      {
        heading: "Escape sequences for new line and tab",
        body: [
          "A backslash `\\` gives the next character a special meaning. The backslash and that character together are called an **escape sequence**; they are not printed as they are typed.",
          "`\\n` starts a **new line** and `\\t` inserts a **tab space** (slide 11).",
        ],
        table: {
          headers: ["Escape sequence", "Meaning"],
          rows: [
            ["`\\'`", "a single quote inside a string"],
            ["`\\\"`", "a double quote inside a string"],
            ["`\\n`", "new line"],
            ["`\\t`", "tab space"],
          ],
        },
        source: { file: "topic2", units: [10, 11], note: "\\', \\n and \\t" },
      },
      {
        heading: "A backslash at the end of a line",
        body: [
          "A **single backslash at the end of a line** means the string is continued on the next line, but it does **not** add a new line.",
          "Slide 12's example writes `\"This is the first sentence.\\` on one line and `This is the second sentence.\"` on the next. This is the same as `\"This is the first sentence.This is the second sentence.\"`, with no line break (and no space) between the sentences.",
          "Without the backslash, a string in single or double quotes cannot run onto the next line. Lab Ch2 Practice II cell 3 shows the `SyntaxError` you get.",
        ],
        source: { file: "topic2", units: [12], note: "Single backslash at the end of the line" },
      },
      {
        heading: "Slide 14 exercise: what is the output?",
        body: [
          "Slide 14 shows three strings and asks for the output. The slide shows them without `print()`; in a program, a string on its own line prints nothing. So here each string is passed to `print()` and written with straight quotes:",
        ],
        bullets: [
          "`print(\"A string is \\n a sequence of characters \")` prints two lines: `A string is ` and then ` a sequence of characters ` (the space after `\\n` starts the second line).",
          "The triple-quoted string that starts `'''A string is a sequence` and ends `of characters'''` on the next line prints two lines, `A string is a sequence` and `of characters`, because triple quotes keep the line break.",
          "The third string ends its first line with a forward slash `/`. That is an ordinary character, not the backslash from slide 12, so the string is never closed and Python reports `SyntaxError: unterminated string literal`. With `\\` instead of `/`, it prints one line: `A string is a sequence of characters`.",
        ],
        source: { file: "topic2", units: [14], note: "Exercise: what is the output" },
      },
    ],
    keyPoints: [
      "A string is a sequence of characters inside quotes.",
      "`'Hello'` and `\"Hello\"` are the same; the opening and closing quotes must match.",
      "Triple quotes (`'''` or `\"\"\"`) make multi-line strings, and you can use `'` and `\"` freely inside them.",
      "Inside double quotes you can use `'` freely, and inside single quotes you can use `\"` freely.",
      "A backslash starts an escape sequence: `\\'` quote, `\\\"` double quote, `\\n` new line, `\\t` tab.",
      "A backslash at the very end of a line continues the string on the next line without a line break.",
      "A forward slash `/` is an ordinary character; only the backslash `\\` is special.",
      "Always type straight quotes `'` and `\"`. Curly quotes copied from slides cause a `SyntaxError`.",
    ],
    examples: [
      {
        title: "Single, double and triple quotes (slides 8 and 9)",
        code: `print('Hello')
print("Hello")
print('''welcome
to
UTAS''')`,
        output: "Hello\nHello\nwelcome\nto\nUTAS\n",
        lineNotes: [
          { line: 1, text: "Single quotes." },
          { line: 2, text: "Double quotes work exactly the same way." },
          { line: 3, text: "Triple quotes: the string carries on over the next lines, and each line break is kept." },
          { line: 5, text: "On slide 9, to and UTAS are lined up under welcome. Spaces typed at the start of these lines would be printed too, so they are left out here." },
        ],
        source: { file: "topic2", units: [8, 9], note: "'Hello', \"Hello\", '''welcome to UTAS'''" },
        origin: "adapted",
      },
      {
        title: "A quote inside a string (slide 10)",
        code: String.raw`print("What's your name?")
print('What\'s your name?')`,
        output: "What's your name?\nWhat's your name?\n",
        lineNotes: [
          { line: 1, text: "Inside double quotes, a single quote needs no backslash." },
          { line: 2, text: "Inside single quotes, the apostrophe must be escaped as \\' or it would end the string." },
        ],
        source: { file: "topic2", units: [10], note: "\"What's your name?\" and 'What\\'s your name?'" },
        origin: "adapted",
      },
      {
        title: "New line and tab (slide 11)",
        code: String.raw`print("Welcome to \n UTAS")
print("Welcome to \t UTAS ")`,
        output: "Welcome to \n UTAS\nWelcome to \t UTAS \n",
        lineNotes: [
          { line: 1, text: "\\n starts a new line. The space after \\n is printed at the start of the second line, so UTAS has a space in front of it." },
          { line: 2, text: "\\t inserts a tab space between the words." },
        ],
        source: { file: "topic2", units: [11], note: "\\n new line, \\t tab" },
        origin: "source",
      },
      {
        title: "Continuing a string with a backslash (lab Ch2 Practice II)",
        code: String.raw`print("hello my\
 students.")`,
        output: "hello my students.\n",
        lineNotes: [
          { line: 1, text: "The backslash at the very end of the line continues the string on the next line. No line break is added." },
          { line: 2, text: "The space at the start of this line is part of the string, so my and students are separated by one space." },
        ],
        source: { file: "lab-ch2-practice-ii", units: [2], note: "Provide the output of the following program" },
        origin: "source",
      },
    ],
    mistakes: [
      {
        title: "Opening and closing with different quotes",
        wrong: `print("Hello')`,
        right: `print("Hello")`,
        explanation:
          "A string that starts with `\"` must end with `\"`. Here Python never finds the closing double quote and reports `SyntaxError: unterminated string literal`.",
      },
      {
        title: "Not escaping an apostrophe",
        wrong: `print('What's your name?')`,
        right: String.raw`print('What\'s your name?')`,
        explanation:
          "The apostrophe in What's ends the single-quoted string early, so the rest of the line makes no sense to Python (`SyntaxError`). Escape it as `\\'`, or put double quotes around the whole string: `print(\"What's your name?\")`.",
      },
      {
        title: "Using a forward slash instead of a backslash",
        wrong: `print('A string is a sequence /
of characters')`,
        right: String.raw`print('A string is a sequence \
of characters')`,
        explanation:
          "Only the backslash `\\` is special. Slide 14's third example uses `/`, which is an ordinary character, so the string is never closed (`SyntaxError: unterminated string literal`). The same slip breaks escape sequences: `/n` just prints the two characters / and n.",
      },
      {
        title: "Copying curly quotes from slides or documents",
        wrong: "print(“Hello”)",
        right: `print("Hello")`,
        explanation:
          "Slides and word processors often show curly quotes “ ” ‘ ’. Python only accepts straight quotes `'` and `\"`, and stops with `SyntaxError: invalid character '“' (U+201C)`.",
      },
    ],
    tryIt: {
      prompt:
        "Slide 15 exercise: using double quotes around the whole string, write a print statement whose output is exactly: A string is a \"sequence\" of characters. Then add a second statement that prints the same sentence on two lines, breaking the line after the word is.",
      starterCode: `# Slide 15: use double quotes around the whole string
print("A string is a sequence of characters")
`,
    },
    quickCheck: ["pm-t2a-007", "pm-t2a-008", "pm-t2a-009"],
    sourceNotes: [
      "Slides 8, 9, 10 and 14 show their example strings with curly “smart” quotes (“ ” ‘ ’). Python only accepts straight quotes ' and \"; typed as shown, the examples cause SyntaxError: invalid character. All code in this lesson uses straight quotes.",
      "Slide 9's second example opens with “““ and closes with ”””. In Python both ends must be \"\"\" (three straight double quotes).",
      "Slide 14, third example: the first line ends with a forward slash / instead of the backslash \\ taught on slide 12, and the string opens with ’ (a closing curly quote). With / the code is a SyntaxError (unterminated string literal); with \\ it prints A string is a sequence of characters on one line. The slide does not say whether the / is a typo or a deliberate trick.",
      "Slide 14 shows bare strings without print(). In a program file a bare string prints nothing, and in the interactive shell it is echoed with its quotes and with \\n shown as \\n rather than a new line. This lesson answers the exercise as if each string were passed to print().",
      "Slide 15's target output shows curly quotes around sequence. The answer print(\"A string is a \\\"sequence\\\" of characters\") prints straight double quotes.",
      "Lab Ch2 Practice II cell 3 shows the error message \"EOL while scanning string literal\" from an older Python version. Python 3.13 reports the same mistake as SyntaxError: unterminated string literal (detected at line 1).",
    ],
  },

  // =====================================================================
  // 3. The type() function
  // =====================================================================
  {
    id: "lesson-t2-type-function",
    topicId: "t2",
    order: 3,
    title: "Finding a Value's Type with type()",
    conceptIds: ["t2-type-function"],
    sources: [
      { file: "topic2", units: [13, 24], note: "type() function; type of a variable" },
      { file: "lab-ch3-iiii", units: [1], note: "Identify the datatypes" },
    ],
    explanation: [
      {
        heading: "Asking Python for the type",
        body: [
          "If you are not sure what type a value has, the interpreter can tell you using the **`type()` function**. Put the value inside the parentheses: `type(17)`.",
          "In a program, wrap it in `print()` to see the answer: `print(type(17))` prints `<class 'int'>`. The word inside the quotes, `int`, is the type name.",
        ],
        source: { file: "topic2", units: [13], note: "type() function" },
      },
      {
        heading: "Why slide 13 shows just str",
        body: [
          "Slide 13 shows the answers as plain names: `str`, `int`, `float` and `bool`. That is how **Jupyter/IPython notebooks** display a type when you type an expression such as `type('Hello, World!')` in a cell.",
          "The standard Python shell (`>>>`) and `print()` show the full form, `<class 'str'>`. Both describe the same type. In this platform's code runner, and in every \"what is the output\" question, the printed output is the full form.",
        ],
        table: {
          headers: ["Code", "Real printed output", "Slide 13 shows"],
          rows: [
            ["`print(type('Hello, World!'))`", "`<class 'str'>`", "`str`"],
            ["`print(type(17))`", "`<class 'int'>`", "`int`"],
            ["`print(type(8.5))`", "`<class 'float'>`", "`float`"],
            ["`print(type(True))`", "`<class 'bool'>`", "`bool`"],
          ],
        },
        source: { file: "topic2", units: [13], note: "Results shown as str, int, float, bool" },
      },
      {
        heading: "Numbers inside quotes are strings",
        body: [
          "Slide 13 also asks for `type('17')` and `type(\"3.2\")` but gives no answers. Both are **strings**: anything inside quotes is a str, even if it looks like a number.",
          "So `print(type('17'))` prints `<class 'str'>`, while `print(type(17))` prints `<class 'int'>`.",
        ],
        source: { file: "topic2", units: [13], note: "type('17') and type(\"3.2\")" },
      },
      {
        heading: "type(true) is a trap",
        body: [
          "The last line on slide 13 is `type(true)`. Lowercase `true` is not a Boolean, so Python treats it as a variable name. No variable called `true` exists, so the program stops with `NameError: name 'true' is not defined` before `type()` can run. Python 3.13 adds a hint: `Did you mean: 'True'?`",
          "`type(True)` with a capital T gives `<class 'bool'>`.",
        ],
        source: { file: "topic2", units: [13], note: "type(true)" },
      },
      {
        heading: "The type of a variable",
        body: [
          "The **type of a variable** is the type of the value it refers to. After `n=17`, `type(n)` is int; after `pi=3.14`, `type(pi)` is float.",
          "If the variable later gets a value of a different type, `type()` reports the new type.",
        ],
        source: { file: "topic2", units: [24], note: "The type of a variable is the type of the value it refers to" },
      },
    ],
    keyPoints: [
      "`type(value)` tells you the data type of a value or a variable.",
      "In a program, `print(type(17))` prints `<class 'int'>`.",
      "Slide 13 shows short names like `str` and `int`; that is how Jupyter notebooks display types. The type is the same.",
      "Anything inside quotes is a string: `type('17')` and `type(\"3.2\")` are both str.",
      "`type(true)` gives a `NameError`, because only `True` (capital T) is a Boolean.",
      "The type of a variable is the type of the value it currently refers to.",
    ],
    examples: [
      {
        title: "The type() calls from slide 13",
        code: `print(type('Hello, World!'))
print(type(17))
print(type(8.5))
print(type(True))`,
        output: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n",
        lineNotes: [
          { line: 1, text: "Slide 13 shows str here; print() shows the full form <class 'str'>." },
          { line: 2, text: "A whole number: int." },
          { line: 3, text: "A number with a decimal point: float." },
          { line: 4, text: "A Boolean: bool." },
        ],
        source: { file: "topic2", units: [13], note: "type('Hello, World!'), type(17), type(8.5), type(True)" },
        origin: "adapted",
      },
      {
        title: "Numbers in quotes are strings",
        code: `print(type('17'))
print(type("3.2"))
print(type(17))
print(type(3.2))`,
        output: "<class 'str'>\n<class 'str'>\n<class 'int'>\n<class 'float'>\n",
        lineNotes: [
          { line: 1, text: "The quotes make '17' a string." },
          { line: 2, text: "Double quotes make a string too." },
          { line: 3, text: "Without quotes, 17 is an int." },
          { line: 4, text: "Without quotes, 3.2 is a float." },
        ],
        source: { file: "topic2", units: [13], note: "type('17'), type(\"3.2\")" },
        origin: "adapted",
      },
      {
        title: "Checking the lab's data-type answers",
        code: `print(type(456738))
print(type(1.0))
print(type(3J))
print(type(4 + 5j))
print(type(False))
print(type("10.12"))`,
        output: "<class 'int'>\n<class 'float'>\n<class 'complex'>\n<class 'complex'>\n<class 'bool'>\n<class 'str'>\n",
        lineNotes: [
          { line: 2, text: "1.0 has a decimal point, so it is a float, not an int." },
          { line: 3, text: "A capital J also makes a complex number." },
          { line: 6, text: "In quotes, so it is a string. (The lab writes curly quotes; here they are straight.)" },
        ],
        source: { file: "lab-ch3-iiii", units: [1], note: "Identify the datatypes" },
        origin: "adapted",
      },
      {
        title: "type(true) stops with an error",
        code: `print(type(true))`,
        output: "",
        raises: "NameError: name 'true' is not defined. Did you mean: 'True'?",
        lineNotes: [{ line: 1, text: "true (lowercase) is not a Boolean. Python looks for a variable called true, finds none, and stops." }],
        source: { file: "topic2", units: [13], note: "type(true)" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Expecting type('17') to be int",
        wrong: "print(type('17'))   # expecting <class 'int'>",
        right: "print(type(17))     # <class 'int'>",
        explanation: "The quotes make `'17'` a string, so its type is str. Remove the quotes to get an int.",
      },
      {
        title: "Writing true in lowercase",
        wrong: "print(type(true))",
        right: "print(type(True))",
        explanation: "Only `True` with a capital T is a Boolean. Lowercase `true` is an unknown name, so Python stops with a `NameError`.",
      },
      {
        title: "Forgetting print() in a program",
        wrong: "type(17)",
        right: "print(type(17))",
        explanation:
          "In the `>>>` shell or a notebook cell, the result of an expression is shown automatically. In a program file, `type(17)` on its own is worked out and then thrown away, so nothing appears. Use `print()` to see it.",
      },
      {
        title: "Expecting a program to print just str",
        explanation:
          "`print(type('Hello'))` prints `<class 'str'>`, not `str`. The short form on slide 13 is how notebooks display a type. Both name the same type.",
      },
    ],
    tryIt: {
      prompt:
        "Lab Ch3 IIII cell 1 asks you to identify data types. Predict the type of each of these values: 10.3, 2.1, 3J, False and \"Hello\". Write your prediction in a comment, then print the type of each value with print(type(...)) to check.",
      starterCode: `print(type(10.3))   # my prediction:
# add one line for each of: 2.1, 3J, False and "Hello"
`,
    },
    quickCheck: ["pm-t2a-016", "pm-t2a-017", "pm-t2a-018"],
    sourceNotes: [
      "Slides 13 and 24 show type results as bare names (str, int, float, bool). That is how Jupyter/IPython notebooks display a type. The standard Python shell (>>>) and print(type(...)) show <class 'str'>, <class 'int'>, <class 'float'> and <class 'bool'>. This lesson shows the real printed form.",
      "Slide 13 writes type(‘17’) and type(“3.2”) with curly quotes, which Python rejects (SyntaxError: invalid character). With straight quotes both are <class 'str'>. The slide leaves these answers blank.",
      "Slide 13's last line, type(true), has no answer on the slide. Real Python raises NameError: name 'true' is not defined (Python 3.10 and later add the hint Did you mean: 'True'?).",
      "Lab Ch3 IIII cell 1 writes “Hello” and “10.12” with curly quotes and lists lowercase true. With straight quotes both are str; lowercase true is not a Boolean and causes a NameError.",
    ],
  },

  // =====================================================================
  // 4. Variables and assignment
  // =====================================================================
  {
    id: "lesson-t2-variables",
    topicId: "t2",
    order: 4,
    title: "Variables and Assignment",
    conceptIds: ["t2-variables"],
    sources: [{ file: "topic2", units: [16, 17, 18, 19, 24], note: "Variables, assignment, displaying a variable" }],
    explanation: [
      {
        heading: "What is a variable?",
        body: [
          "A **variable** (or identifier) is a **name that refers to a value**.",
          "Variables are parts of your computer's memory where you store information. Think of a variable as a **box with a label** on it: the box holds the value, and the label (the name) lets you find the box again later.",
        ],
        source: { file: "topic2", units: [17], note: "What is a variable?" },
      },
      {
        heading: "Creating variables with assignment",
        body: [
          "An **assignment statement** creates a new variable and gives it a value. The name goes on the **left** of `=` and the value on the **right**. Slide 19 creates three variables:",
        ],
        bullets: [
          "`myName = \"Bilal\"` stores a string.",
          "`myAge = 17` stores an int.",
          "`isHappy = True` stores a Boolean.",
          "An assignment statement stores the value but does not print anything.",
        ],
        source: { file: "topic2", units: [19], note: "An assignment statement creates new variables" },
      },
      {
        heading: "No declaration needed",
        body: [
          "Variable declaration is **not required** in Python. You do not announce a variable or its type before using it: the first assignment creates it.",
          "You can store anything in a variable: text, whole numbers, decimals or Booleans.",
        ],
        source: { file: "topic2", units: [18], note: "Variable declaration is not required" },
      },
      {
        heading: "The value can change",
        body: [
          "The value of a variable can **vary**. A new assignment replaces the old value, and the variable always holds its **latest** value.",
          "Slide 18's picture shows a box labelled Name holding the value Samia. If you later write `Name = \"Bilal\"`, the box holds Bilal instead.",
        ],
        source: { file: "topic2", units: [18], note: "The value of the variables can vary" },
      },
      {
        heading: "Displaying a variable",
        body: [
          "To **display the value of a variable**, use `print()` with the variable name: after `n=17`, `print(n)` shows `17`.",
          "Do not put quotes around the name: `print(\"n\")` prints the letter n, not the value.",
          "The **type of a variable** is the type of the value it refers to: `type(n)` is int and `type(pi)` is float.",
        ],
        source: { file: "topic2", units: [24], note: "Display the value of a variable with print" },
      },
      {
        heading: "Assign before you use",
        body: [
          "A variable exists only after its assignment statement has run. Python runs a program from top to bottom, so using a name before it has been assigned stops the program with a `NameError`.",
        ],
        source: { file: "topic2", units: [19], note: "Assignment creates the variable" },
      },
    ],
    keyPoints: [
      "A variable is a name that refers to a value stored in memory, like a labelled box.",
      "An assignment statement `name = value` creates the variable and gives it a value.",
      "The name goes on the left of `=`, the value on the right.",
      "No declaration is needed: the first assignment creates the variable.",
      "The value can change: a new assignment replaces the old value.",
      "`print(n)` shows the value of `n`; `print(\"n\")` shows the letter n.",
      "Using a variable before it is assigned causes a `NameError`.",
    ],
    examples: [
      {
        title: "Creating variables (slide 19)",
        code: `myName = "Bilal"
myAge = 17
isHappy = True
print(myName)
print(myAge)
print(isHappy)`,
        output: "Bilal\n17\nTrue\n",
        lineNotes: [
          { line: 1, text: "Creates the variable myName and stores the string \"Bilal\" in it. Nothing is printed yet." },
          { line: 2, text: "myAge holds an int." },
          { line: 3, text: "isHappy holds a Boolean: True with a capital T." },
          { line: 4, text: "print shows the value stored in the variable, not its name." },
        ],
        source: { file: "topic2", units: [19], note: "myName = \"Bilal\", myAge = 17, isHappy = True" },
        origin: "adapted",
      },
      {
        title: "Displaying variables and their types (slide 24)",
        code: `n=17
print(n)
pi=3.14
print(pi)
print(type(n))
print(type(pi))`,
        output: "17\n3.14\n<class 'int'>\n<class 'float'>\n",
        lineNotes: [
          { line: 2, text: "Shows the value of n: 17." },
          { line: 5, text: "The type of a variable is the type of its value. Slide 24 shows int; print() shows <class 'int'>." },
          { line: 6, text: "pi refers to 3.14, a float." },
        ],
        source: { file: "topic2", units: [24], note: "n=17, print(n), pi=3.14, print(pi), type(n), type(pi)" },
        origin: "adapted",
      },
      {
        title: "The value can change (slide 18)",
        code: `Name = "Samia"
print(Name)
Name = "Bilal"
print(Name)`,
        output: "Samia\nBilal\n",
        lineNotes: [
          { line: 1, text: "The box labelled Name holds Samia, as in slide 18's picture." },
          { line: 3, text: "A new assignment replaces the old value." },
          { line: 4, text: "Name now holds Bilal." },
        ],
        source: { file: "topic2", units: [18], note: "The value of the variables can vary" },
        origin: "adapted",
      },
      {
        title: "Using a variable before it exists",
        code: `print(score)
score = 90`,
        output: "",
        raises: "NameError: name 'score' is not defined",
        lineNotes: [
          { line: 1, text: "score has not been assigned yet, so Python stops here with a NameError." },
          { line: 2, text: "Too late: this line never runs. Swap the two lines to fix the program." },
        ],
        source: { file: "topic2", units: [19], note: "An assignment statement creates new variables" },
        origin: "original",
      },
    ],
    mistakes: [
      {
        title: "Writing the value on the left",
        wrong: "17 = myAge",
        right: "myAge = 17",
        explanation:
          "The variable name must be on the left of `=`. Python cannot store a value in the number 17, so it reports `SyntaxError: cannot assign to literal`.",
      },
      {
        title: "Using a variable before assigning it",
        wrong: `print(total)
total = 50`,
        right: `total = 50
print(total)`,
        explanation: "Python runs from top to bottom. When `print(total)` runs first, `total` does not exist yet, so Python stops with a `NameError`.",
      },
      {
        title: "Putting quotes around the variable name",
        wrong: `print("myAge")`,
        right: "print(myAge)",
        explanation:
          "`\"myAge\"` in quotes is just a string of five letters, so `print(\"myAge\")` prints the word myAge. Without quotes, `print(myAge)` prints the value stored in the variable, such as 17.",
      },
      {
        title: "Trying to declare a variable's type",
        wrong: "int myAge = 17",
        right: "myAge = 17",
        explanation:
          "Python needs no declaration (slide 18). Writing a type in front of the name, as some other languages do, is a `SyntaxError`. Just assign the value.",
      },
    ],
    tryIt: {
      prompt:
        "Like slide 19, create three variables: a name (a string), an age (an int) and whether the person is happy (a Boolean). Print each one. Then give the age variable a new value and print it again.",
      starterCode: `myName = "Bilal"
myAge = 17
# create isHappy and give it a Boolean value

# print all three variables

# change myAge and print it again
`,
    },
    quickCheck: ["pm-t2a-020", "pm-t2a-021", "pm-t2a-022"],
    sourceNotes: [
      "Slide 19 writes myName = “Bilal” with curly quotes. Python needs straight quotes: myName = \"Bilal\".",
      "Slide 19's picture does not match its code: the picture shows \"Bob\" instead of \"Bilal\", and lowercase true instead of True. Lowercase true is not a Boolean in Python (it causes a NameError). Follow the code, not the picture.",
      "Slide 24 shows type(n) → int and type(pi) → float. In a program, print(type(n)) prints <class 'int'> and print(type(pi)) prints <class 'float'>; the short names are how Jupyter notebooks display types. The arrows on slide 24 only point to the result; they are not code.",
      "Slide 17's memory picture is cropped at the bottom, so part of the diagram is missing; the slide text still explains the idea.",
    ],
  },

  // =====================================================================
  // 5. Identifier naming rules and keywords
  // =====================================================================
  {
    id: "lesson-t2-identifiers",
    topicId: "t2",
    order: 5,
    title: "Naming Variables: Rules and Keywords",
    conceptIds: ["t2-identifiers"],
    sources: [{ file: "topic2", units: [20, 21, 22, 23, 25], note: "Naming rules, keywords, case sensitivity, exercise" }],
    explanation: [
      {
        heading: "Rules for names: DOs and DON'Ts",
        body: ["Variable names (identifiers) must follow these rules:"],
        bullets: [
          "DO: the **first character** must be a letter (alphabet) or an underscore `_`.",
          "DO: the **rest** of the name can contain letters, underscores `_` and digits `0`–`9`.",
          "DON'T: use **special symbols** such as `&`, `*`, `#`, `$`, `-`, `+` or `>`.",
          "DON'T: use **spaces**.",
          "DON'T: use a **Python keyword** as a name.",
        ],
        source: { file: "topic2", units: [20], note: "DOs and DON'Ts" },
      },
      {
        heading: "Python's 35 keywords",
        body: [
          "A **keyword** is a word that Python reserves for its own use, so it cannot be a variable name. Python reserves **35 keywords**:",
          "`False`, `None`, `True`, `and`, `as`, `assert`, `async`, `await`, `break`, `class`, `continue`, `def`, `del`, `elif`, `else`, `except`, `finally`, `for`, `from`, `global`, `if`, `import`, `in`, `is`, `lambda`, `nonlocal`, `not`, `or`, `pass`, `raise`, `return`, `try`, `while`, `with`, `yield`",
          "Only `True`, `False` and `None` start with a capital letter. Several keywords, such as `if`, `else`, `elif`, `while`, `and`, `or` and `not`, are used later in this course.",
        ],
        source: { file: "topic2", units: [21], note: "Python reserves 35 keywords" },
      },
      {
        heading: "Names are case-sensitive",
        body: [
          "Identifier (variable) names are **case-sensitive**: `myname` and `myName` are two different names, and so are `python` and `Python`.",
          "If you create `myAge` and later type `MyAge`, Python looks for a different variable and reports a `NameError`.",
        ],
        source: { file: "topic2", units: [22], note: "myname ≠ myName, python ≠ Python" },
      },
      {
        heading: "Valid and invalid examples",
        body: ["Slide 23 gives these examples:"],
        table: {
          headers: ["Name", "Valid?", "Reason"],
          rows: [
            ["`I`", "Yes", "A single letter is fine"],
            ["`name_2_3`", "Yes", "Letters, digits and underscores"],
            ["`Num`", "Yes", "Starts with a letter"],
            ["`num`", "Yes", "A different name from `Num` (case-sensitive)"],
            ["`Max1`", "Yes", "Digits are allowed after the first character"],
            ["`2things`", "No", "Starts with a digit"],
            ["`this is spaced out`", "No", "Contains spaces"],
            ["`my-name`", "No", "Contains the symbol `-`"],
            ["`>a1b2_c3`", "No", "Contains the symbol `>`"],
            ["`from`", "No", "It is a keyword"],
          ],
        },
        source: { file: "topic2", units: [23], note: "Examples of valid and invalid identifiers" },
      },
      {
        heading: "Slide 25 exercise: is this name valid?",
        body: [
          "Slide 25 asks whether each name is valid but gives no answers. These answers follow the rules on slide 20 and were checked with real Python. A good habit: use an underscore instead of a space or a hyphen, for example `basic_pay` or `gross_pay`.",
        ],
        table: {
          headers: ["Name", "Valid?", "Reason"],
          rows: [
            ["`my_marks`", "Yes", "Letters and an underscore"],
            ["`_firstname`", "Yes", "A name may start with an underscore"],
            ["`n1+n2`", "No", "Contains `+`"],
            ["`&name`", "No", "Contains `&`"],
            ["`lambda`", "No", "It is a keyword"],
            ["`3rd_row`", "No", "Starts with a digit"],
            ["`dollarValue$`", "No", "Contains `$`"],
            ["`basic pay`", "No", "Contains a space"],
            ["`gross-pay`", "No", "Contains `-` (Python reads it as minus)"],
            ["`salary200`", "Yes", "Digits are allowed after the first character"],
          ],
        },
        source: { file: "topic2", units: [25], note: "Is this variable name valid? (yes/no)" },
      },
    ],
    keyPoints: [
      "A name must start with a letter or an underscore `_`.",
      "After the first character, use only letters, digits and underscores.",
      "No spaces and no special symbols such as `&`, `*`, `#`, `$`, `-`, `+` or `>`.",
      "Python's 35 keywords (such as `if`, `from`, `lambda`, `True`) cannot be used as names.",
      "Names are case-sensitive: `myname` and `myName` are different variables.",
      "Slide 25: valid are `my_marks`, `_firstname` and `salary200`; the other seven names are invalid.",
    ],
    examples: [
      {
        title: "Valid names from slide 23",
        code: `I = 1
name_2_3 = 23
Num = 10
num = 20
Max1 = 99
print(Num)
print(num)
print(Max1)`,
        output: "10\n20\n99\n",
        lineNotes: [
          { line: 1, text: "All five names follow the rules, so the program runs without errors." },
          { line: 3, text: "Num and num are two different variables, because names are case-sensitive." },
          { line: 7, text: "num still holds 20; assigning Num did not change it." },
        ],
        source: { file: "topic2", units: [22, 23], note: "Valid identifiers; case sensitivity" },
        origin: "adapted",
      },
      {
        title: "A name cannot start with a digit (slide 25: 3rd_row)",
        code: `3rd_row = 5
print(3rd_row)`,
        output: "",
        raises: "SyntaxError: invalid decimal literal",
        lineNotes: [{ line: 1, text: "Python starts reading a number at 3 and then meets letters, so it reports a SyntaxError. Nothing runs." }],
        source: { file: "topic2", units: [25], note: "3rd_row" },
        origin: "adapted",
      },
      {
        title: "A hyphen is read as minus (slide 25: gross-pay)",
        code: `gross-pay = 100`,
        output: "",
        raises: "SyntaxError: cannot assign to expression here. Maybe you meant '==' instead of '='?",
        lineNotes: [
          { line: 1, text: "Python reads gross-pay as gross minus pay, a calculation, and you cannot store a value in a calculation. Use gross_pay instead." },
        ],
        source: { file: "topic2", units: [25], note: "gross-pay" },
        origin: "adapted",
      },
      {
        title: "Case matters (slide 22)",
        code: `myName = "Samia"
print(MyName)`,
        output: "",
        raises: "NameError: name 'MyName' is not defined. Did you mean: 'myName'?",
        lineNotes: [{ line: 2, text: "MyName (capital M) is a different name from myName, and it was never assigned, so Python stops with a NameError." }],
        source: { file: "topic2", units: [22], note: "myname ≠ myName" },
        origin: "adapted",
      },
    ],
    mistakes: [
      {
        title: "Starting a name with a digit",
        wrong: "3rd_row = 5",
        right: "row_3 = 5",
        explanation: "A name must start with a letter or an underscore. Digits are fine after the first character.",
      },
      {
        title: "Using a hyphen or a space",
        wrong: `gross-pay = 1500
basic pay = 1200`,
        right: `gross_pay = 1500
basic_pay = 1200`,
        explanation:
          "Python reads `-` as minus, and a space splits the line into two separate names; both are `SyntaxError`s. Join the words with an underscore instead.",
      },
      {
        title: "Using a keyword as a name",
        wrong: `from = "Muscat"`,
        right: `from_city = "Muscat"`,
        explanation:
          "`from` is one of the 35 keywords on slide 21, so it cannot be a variable name (`SyntaxError`). A name that only contains a keyword as part of a longer word, such as `from_city`, is fine.",
      },
      {
        title: "Mixing up uppercase and lowercase",
        wrong: `myName = "Samia"
print(myname)`,
        right: `myName = "Samia"
print(myName)`,
        explanation: "Names are case-sensitive, so `myname` is a different, unassigned name. Python stops with a `NameError`. Type the name exactly as you created it.",
      },
    ],
    tryIt: {
      prompt:
        "Each variable name in the starter code breaks a naming rule from slide 20 (they all come from slide 25). Rename every variable so that the program runs and prints 3, 1500, 1200 and 2.6.",
      starterCode: `# Each name below breaks a naming rule (slide 25).
# Rename the variables so this program runs.
3rd_row = 3
gross-pay = 1500
basic pay = 1200
dollarValue$ = 2.6
print(3rd_row)
print(gross-pay)
print(basic pay)
print(dollarValue$)
`,
    },
    quickCheck: ["pm-t2a-024", "pm-t2a-025", "pm-t2a-028"],
    sourceNotes: [
      "Slide 21's keyword table is misaligned: try, while, with and async wrap onto their own lines under the first column, and some columns are shifted. All 35 words are keywords, and the count matches Python 3.7 and later (including Python 3.13). Newer \"soft keywords\" such as match and case are not on the list and are not covered in this course.",
      "Slide 23's first valid example is a capital I, which can look like a lowercase l or a vertical line on the slide.",
      "Slide 25 gives no answers. The answers in this lesson apply the rules from slide 20 and were checked with real Python.",
      "Lab Ch3 IIII cell 2 (\"Identify the correct declaration of a variable\") lists items such as \"A -value\" whose intended meaning is unclear, so it is not used as a source of answers here.",
    ],
  },
];
