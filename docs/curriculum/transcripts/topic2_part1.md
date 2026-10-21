# Topic 2 - Variables, expressions and statements — Transcript, slides 1–42

Source images: `render/hi/t2-01.png` … `t2-42.png`. Cross-checked against the machine text extraction (`t2.txt`) and, where noted, the source `topic2.pptx`.
Conventions: “smart quotes” are called out wherever the slide's source text uses U+2018/U+2019 (‘ ’) or U+201C/U+201D (“ ”) rather than ASCII `'` / `"`. In code blocks, the characters are reproduced exactly as found in the source.

---

## Slide 1 — Topic#2

**Text**:
- Python™ logo (picture)
- Topic#2
- Variables, expressions, and statements

**Code**: none
**Output shown**: none
**Diagrams/tables**: Python logo with "python™" wordmark; small Python logo bottom-left; page number 1.
**Notes for curriculum**: Title slide for Topic 2 (variables, expressions, statements).
**Issues**: none

---

## Slide 2 — Values and Types

**Text**:
- A **value** or constant
- One of the basic things a program works with, like a letter or a number.
- Example for values are
  - ✔ 1
  - ✔ 2.562
  - ✔ True
  - ✔ 3+4j
  - ✔ “Hello, UTAS!”

**Code**: none (values listed as text; see above)
**Output shown**: none
**Diagrams/tables**: none (check-mark bullets).
**Notes for curriculum**: Definition of a value/constant; example values of type int, float, bool, complex, str.
**Issues**: The string example “Hello, UTAS!” uses curly smart quotes (U+201C/U+201D), not ASCII `"`; typed into Python as shown it would be a SyntaxError (invalid character). Minor wording: "Example for values are".

---

## Slide 3 — Values and Types

**Text**:
- **Data Type:** represent the kind of value

**Code**: none
**Output shown**: none
**Diagrams/tables**: Tree diagram (GeeksforGeeks image, "GG" logo bottom-right) titled **Python - Data Types**, with five children:
- **Numeric** → Integer, Complex Number, Float
- **Dictionary**
- **Boolean**
- **Set**
- **Sequence Type** → Strings, List, Tuple

**Notes for curriculum**: Overview of Python's built-in data type categories.
**Issues**: The slide source contains a text box "Ref: https://www.geeksforgeeks.org/python-data-types/" (hyperlink, white `lt1` text colour, positioned at the bottom of the slide) that is NOT visible in the rendered slide (white-on-white / under the picture). If citing, the image source is GeeksforGeeks.

---

## Slide 4 — Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex
- Box "integers" with arrow pointing up to **int**
- a number, positive or negative, **without decimals**, and of unlimited length.
- Example box:
  ```
  2
  -56
  0
  76789999865433331
  ```
  (on the slide the last number wraps as "76789999865433" / "331"; it is one number, 76789999865433331)

**Code**: none
**Output shown**: none
**Diagrams/tables**: "Numbers" box with three arrows to red boxes **int**, **float**, **complex**; "integers" box with an arrow up to int. Bottom-right: Real Python illustration of a calculator-like machine with signs "INTEGER" and "FLOAT", a display reading "8_372.11", keypad keys 1–9, ".", "0", "_", operator keys "+", "−", "*", "/", "%", tiles "e" and "j", a Python logo, and a seated person; "Real Python" signature.
**Notes for curriculum**: int type — whole numbers, positive/negative, arbitrary precision (unlimited length).
**Issues**: none (page number hidden behind the picture).

---

## Slide 5 — Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  ```
  3.5
  -0.004
  ```
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  ```
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  ```
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point literals; scientific notation with e/E.
**Issues**: "6 E10" is written with a space between 6 and E10. As a Python literal this is a SyntaxError; the valid form is `6E10` / `6e10` (= 60000000000.0).

---

## Slide 6 — Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **complex**
- Represent complex numbers, of the form **a + bJ**
  - ✔ **a** is the real part.
  - ✔ **b** is the imaginary part.
- Example box:
  ```
  4+5j
  7j
  -7J
  ```

**Code**: none
**Output shown**: none
**Diagrams/tables**: Same Numbers tree; arrow to complex. Bottom-left: the same Real Python calculator illustration as slide 4.
**Notes for curriculum**: complex type; j/J suffix for the imaginary part.
**Issues**: none

---

## Slide 7 — Values and Types

**Text**:
- **Boolean:**
- Booleans represent one of two values:
  - **True**
  - **False**
- Note: ‘T’ in True and ‘F’ in False should be uppercase letters.

**Code**: none
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: bool type; the literals True/False are case-sensitive (capitalised).
**Issues**: none

---

## Slide 8 — Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
```
“Hello”     ‘Hello’
```
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes are equivalent.
**Issues**: The large “Hello” / ‘Hello’ examples use curly smart quotes in the source (U+201C/U+201D and U+2018/U+2019), rendered in a slanted style; they are not valid Python delimiters if typed as shown. The heading text itself uses straight (') and (").

---

## Slide 9 — Values and types

**Text**:
- ➢ **Using Triple Quotes (''' or """).** You can specify **multi-line strings** using triple quotes. Also, you can use single quotes and double quotes freely within triple quotes. Examples are

**Code** (illustrative; characters exactly as in source):
```
’’’ welcome
     to
     UTAS’’’
```
```
“““welcome
     to
     UTAS”””
```
(the line indentation of "to"/"UTAS" is visual alignment under "welcome" on the slide; the first example has a space after the opening quotes, the second does not)

**Output shown**: none
**Diagrams/tables**: Two examples side by side in large type, quote marks coloured gold.
**Notes for curriculum**: Triple-quoted (multi-line) strings, using ''' or """.
**Issues**: The examples use smart quotes: the first is three U+2019 (’’’) at both ends, the second is three U+201C (“““) to open and three U+201D (”””) to close. Typed as shown they are not valid Python triple quotes; the heading correctly shows ASCII ''' and """.

---

## Slide 10 — Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
```
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
```
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All three example strings use smart quotes in the source (U+201C/U+201D and U+2018/U+2019), including the "fixed" version ‘What\’s your name?’. The point being taught only holds with ASCII quotes, i.e. `'What\'s your name?'`; with the characters as written, Python raises a SyntaxError. The inline text "\'" in the bullet is ASCII.

---

## Slide 11 — (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
```
>>>print("Welcome to \n UTAS")
```
```
>>>print("Welcome to \t UTAS ")
```
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
```
Welcome to
 UTAS
```
```
Welcome to          UTAS
```
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curriculum**: The \n (newline) and \t (tab) escape sequences inside print().
**Issues**: none of substance (outputs match Python 3, including the leading space before "UTAS"). Note the NBSP characters in the source code text if copied.

---

## Slide 12 — (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
- Also, remember that a **single backslash at the end of the line** indicates that the **string is continued in the next line but it does not mean that there is a newline.**

**Code** (inside a picture; straight ASCII quotes):
```
"This is the first sentence.\
This is the second sentence."
```
Text below the picture box (part of the same picture): equivalent to "This is the first sentence.This is the second sentence."

**Output shown**: none (equivalence statement above)
**Diagrams/tables**: Screenshot with a pale pink box containing the two-line string.
**Notes for curriculum**: Backslash line continuation inside a string literal joins lines without a newline character.
**Issues**: none

---

## Slide 13 — Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
```
>>> type('Hello, World!')
         str
>>> type(17)
         int
>>> type(8.5)
         float
>>> type(True)
         bool
>>> type(‘17’)

>>> type(“3.2”)

>>> type(true)
```
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables**: none
**Notes for curriculum**: Using type() to find a value's type; numeric-looking strings are still str; `true` vs `True`.
**Issues**:
- Python 3 would display `<class 'str'>`, `<class 'int'>`, `<class 'float'>`, `<class 'bool'>`, not the bare type names shown.
- `type(‘17’)` and `type(“3.2”)` are written with smart quotes, which is a SyntaxError (invalid character) in Python as shown. With ASCII quotes the answers are `<class 'str'>` for both.
- `type(true)` (lowercase) would raise `NameError: name 'true' is not defined`, and no output is given on the slide.
- Minor layout quirk: the `>>> type(‘17’)` and `>>> type(“3.2”)` prompts sit slightly further left than the others.

---

## Slide 14 — Exercise

**Text**:
- What is the output of the python code here

**Code** (characters exactly as in source):
```
“A string is \n a sequence of characters ”
```
```
’’’A string is a sequence
of characters’’’
```
```
’A string is a sequence /
of characters’
```
(`\n` highlighted in green in the first example)

**Output shown**: none (exercise)
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on \n, triple-quoted multi-line strings, and line continuation.
**Issues**:
- All three use smart quotes. The triple-quoted example opens and closes with U+2019 ×3, and the third example opens with U+2019 (’) instead of an opening quote. As written, none is valid Python.
- The third example uses a forward slash "/" at the end of the line, not the backslash "\" taught on slide 12. With "/", a single-quoted string that spans two lines is a SyntaxError (unterminated string literal). This is likely a typo for "\", unless it is a deliberate trick; the slide does not say.
- The examples are bare string literals with no print(), so "the output" depends on context: a script prints nothing, and the interactive shell shows the repr (e.g. `'A string is \n a sequence of characters '` with \n not expanded). The intended answers are ambiguous.
- The first string has a space before the closing quote ("characters ”").

---

## Slide 15 — Exercise

**Text**:
- Write a python statement to get the following output (using double quote)
- Target output: A string is a **“**sequence**”** of characters (quote marks in bold green)

**Code**: none
**Output shown** (target output to produce):
```
A string is a “sequence” of characters
```
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on embedding double quotes inside a double-quoted string (escape \" ).
**Issues**: The target output uses curly quotes (U+201C/U+201D) around "sequence". The expected answer with escaped double quotes, e.g. `print("A string is a \"sequence\" of characters")`, would print straight `"` characters, so the displayed target does not match character-for-character. Minor.

---

## Slide 16 — Variables

**Text**:
- Python™ logo
- Variables

**Code**: none
**Output shown**: none
**Diagrams/tables**: Section divider with Python logo.
**Notes for curriculum**: Section title: Variables.
**Issues**: none

---

## Slide 17 — Variables and Keywords

**Text**:
- **What is a variable?**
  - A **variable** or an identifier is a name that refers to a value.
  - **Variables** are just parts of your computer's memory where you store some information.
  - We think of variables as **containers** that hold information and allow us access them later. We will think of this as a box that has a label on it. The **label** is very useful because it means that we can refer to the **box** later.

**Code**: none
**Output shown**: none
**Diagrams/tables**:
- Top-right picture: grid background, a blue box labelled **Memory** above a row of four orange cells labelled **a**, **b**, **c**, **d**.
- Bottom-right picture: a cardboard box labelled "Storage" (red), with a white arrow labelled "DATA" (green) pointing into it.

**Notes for curriculum**: A variable (identifier) is a name for a value stored in memory; the "labelled box" analogy.
**Issues**: The Memory picture is cropped at the bottom; parts of arrows and text are visible but cut off below cells a and b, so content is missing. Minor wording: "allow us access them later" (missing "to").

---

## Slide 18 — Variables and Keywords

**Text**:
- The value of the variables can vary, i.e., you can store anything using a variable.
- Variable declaration is not required in python.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Picture of an open cardboard box labelled **Name**, with a blue arrow from a note card reading **Samia** into the box. This illustrates a variable "Name" holding the value "Samia".
**Notes for curriculum**: Variables can hold any value; Python needs no variable declarations (dynamic typing).
**Issues**: none

---

## Slide 19 — Variables and Keywords

**Text**:
- An **assignment** statement creates new variables and gives them values:

**Code**:
```
>>> myName = “Bilal”

>>> myAge = 17

>>> isHappy = True
```
(`“Bilal”` uses smart quotes U+201C/U+201D; the `=` signs are bold green)

**Output shown**: none
**Diagrams/tables**: Picture of three open boxes labelled **myName**, **myAge**, **isHappy**. Sticky notes with arrows into each box read **"Bob"** (yellow), **17** (cyan) and **true** (green).
**Notes for curriculum**: Assignment statements create variables and bind values (str, int, bool).
**Issues**:
- The picture contradicts the code: the code assigns "Bilal" but the picture shows "Bob", and the code uses `True` but the picture shows lowercase `true`, which is not a valid Python Boolean (NameError).
- `“Bilal”` uses smart quotes, which is a SyntaxError if typed as shown.

---

## Slide 20 — Variables and Keywords

**Text**:
- DOs (green check icon):
  - ✓ The **first character** of the identifier must be an **alphabet** or an **underscore** ( _ ).
  - ✓ The **rest of the identifier** name can consist of **letters**, **underscores** ( _) or **digits** (0-9).
- DON'Ts (red warning-triangle icon):
  - ▪ No **special symbols** like (&,*,# etc).
  - ▪ **Space** are not allowed for identifier names.
  - ▪ **Python keywords** are not allowed.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Two icons: a green check-mark circle labelled "DOs" and a red warning triangle labelled "DON'Ts".
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then letters, digits and _; no symbols, spaces or keywords.
**Issues**: Minor grammar: "Space are not allowed".

---

## Slide 21 — Variables and Keywords

**Text**:
- **Python reserves 35 keywords:**

**Diagrams/tables**: Keyword grid. The source text is 7 rows × 5 tab-separated columns:

| | | | | |
|---|---|---|---|---|
| and | del | from | None | **True** |
| as | elif | global | nonlocal | try |
| assert | else | if | not | while |
| break | except | import | or | with |
| class | **False** | in | pass | yield |
| continue | finally | is | raise | async |
| def | for | lambda | return | await |

(True and False in bold)

**Code**: none
**Output shown**: none
**Notes for curriculum**: The reserved keywords of Python 3, which cannot be used as identifiers.
**Issues**: The rendered layout is broken. Tab misalignment makes the 5th-column words **try**, **while**, **with** and **async** wrap onto their own line under the first column, and several columns are staggered (e.g. "else", "if", "is", "import" are shifted). Readers may misread which row a word belongs to. The count (35) and list match Python 3.7+ `keyword.kwlist`; soft keywords such as match/case are not included.

---

## Slide 22 — Variables and Keywords

**Text**:
- **Naming rules for Variables**
  1. Identifier / Variable names are **case-sensitive**.
- my**n**ame ≠ my**N**ame
- **p**ython ≠ **P**ython

**Code**: none
**Output shown**: none
**Diagrams/tables**: Two "≠" symbols (pictures) between the name pairs; the differing letters are bold.
**Notes for curriculum**: Identifiers are case-sensitive.
**Issues**: none

---

## Slide 23 — Variables and Keywords

**Text**:
- Examples of valid identifier (variable) names are
  - I
  - name_2_3
  - Num
  - num
  - Max1
- Examples of invalid identifier (variable) names are
  - **2**things (the "2" is red)
  - this is spaced out
  - my**-**name (the "-" is red)
  - **>**a1b2_c3 (the ">" is red)
  - **from** (red)

**Code**: none
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Valid vs invalid identifiers (leading digit, spaces, hyphen, special symbol, keyword).
**Issues**: The first valid example renders as a single vertical stroke that could be read as "I", "l" or "|"; the source text is uppercase "I".

---

## Slide 24 — Variables and Keywords

**Text**:
- To **display the value of a variable**, you can use a print statement:
- The **type of a variable** is the type of the value it refers to.

**Code** (the arrow is U+1F86A "🡪" in the source and stands for the result; it is not code):
```
>>> n=17
>>> print(n) 🡪 17
>>> pi=3.14
>>> print(pi) 🡪 3.14
```
```
>>> type(n) 🡪 int
>>> type(pi) 🡪 float
```
**Output shown**: 17, 3.14, int, float (after the arrows)
**Diagrams/tables**: none
**Notes for curriculum**: print() to display a variable's value; type() of a variable is the type of the value it refers to.
**Issues**: Python 3 displays `type(n)` as `<class 'int'>` and `type(pi)` as `<class 'float'>`, not bare `int` / `float` (same simplification as slide 13).

---

## Slide 25 — Exercise

**Text**:
- **Is this variable name valid? (yes/no)**
  1. my_marks
  2. _firstname
  3. n1+n2
  4. &name
  5. lambda
  6. 3rd_row
  7. dollarValue$
  8. basic pay
  9. gross-pay
  10. salary200

**Code**: none
**Output shown**: none (no answers given)
**Diagrams/tables**: none
**Notes for curriculum**: Practice applying the identifier naming rules.
**Issues**: none (answers are not on the slide).

---

## Slide 26 — Operators

**Text**:
- Python™ logo
- Operators

**Code**: none
**Output shown**: none
**Diagrams/tables**: Section divider with Python logo.
**Notes for curriculum**: Section title: Operators.
**Issues**: none

---

## Slide 27 — Operators and operands

**Text**:
- **Operators** are special symbols that represent computations, like addition (+) and multiplication (*).
- The values to which the operator is applied are called **operands**.

**Code**: `2 + 3` (inside the diagram)
**Output shown**: none
**Diagrams/tables**: A rounded box contains "2 + 3", with the "+" in green. Callouts with arrows:
- **Operator** points to "+"
- **Operands** points to "2" and to "3"
- **Expression** points to the whole box "2 + 3"

**Notes for curriculum**: Operator vs operand vs expression terminology.
**Issues**: none

---

## Slide 28 — Operators and operands

**Text**:
- Types of operators in Python:

**Code**: none
**Output shown**: none
**Diagrams/tables**: 2×2 grid of coloured tiles:

| | |
|---|---|
| Arithmetic Operators | Assignment Operators |
| Comparison (Relational) Operators | Logical Operators |

**Notes for curriculum**: The four operator categories covered: arithmetic, assignment, comparison (relational) and logical.
**Issues**: none

---

## Slide 29 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
```
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
```
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---

## Slide 30 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **- (minus)**
- Gives the difference by subtracting the second number from the first number.
- ✔ if the first operand is absent it is assumed to be zero.

**Code / session**:
```
>>> 50 - 24
	26
>>> -5.2
	-5.2
```
**Output shown**: `26`, `-5.2` (green, indented)
**Diagrams/tables**: none
**Notes for curriculum**: Subtraction; unary minus (negation).
**Issues**: Conceptual simplification. `-5.2` is the unary negation operator applied to 5.2, not binary subtraction with an implied zero operand. The numeric result matches 0 - 5.2, but the "assumed to be zero" wording is not how Python defines it.

---

## Slide 31 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
```
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
```
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---

## Slide 32 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **\*\* (power)**
  - **x \*\* y Returns x to the power of y** (red)

**Code / session**:
```
>>> 3**4
	81
>>> 0.25 ** 3
	 0.015625
```
**Output shown**: `81`, `0.015625` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Exponentiation operator **.
**Issues**: none (outputs verified correct).

---

## Slide 33 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
```
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
```
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---

## Slide 34 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
```
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
```
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---

## Slide 35 — Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
```
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
```
(no space after the prompt on the 2nd and 3rd inputs, as shown)
**Output shown**: `3`, `1`, `0.75` (green)
**Diagrams/tables**: Long-division picture of 75 ÷ 9:
- 9 is the divisor, labelled "Divisior"
- 75 is labelled "Dividend"
- quotient 8 on top, labelled "Quotient"
- −72 subtracted, remainder 3 labelled "Remainder"
- an unexplained empty brown circle to the left of "−72"

**Notes for curriculum**: The modulus operator % gives the remainder; it works with floats.
**Issues**:
- Spelling error in the diagram: "Divisior" should be "Divisor".
- Stray empty circle in the diagram with no meaning.
- The outputs themselves are correct.

---

## Slide 36 — Operators and operands

**Text**:
- **Assignment Operators**
- **= (assign)**
  - ▪ Assigns values from right side to left side operand
- ✔ **Assignment to same value**
  - ▪ Same value can be assigned to multiple variables
- ✔ **Multiple assignments**
  - ▪ Different values can be assigned to more than one variables

**Code** (green; layout as on slide, `>>>n=20` and `>>> num= n +10` in a second column):
```
>>> a=5              >>>n=20
                     >>> num= n +10
```
```
>>> x=y=z=10
```
```
>>> x, y, z = 10, “hai”, 3.5
```
(`“hai”` uses smart quotes U+201C/U+201D)

**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Simple assignment, chained assignment (x=y=z=10), and multiple/tuple assignment.
**Issues**: `“hai”` uses smart quotes, which is a SyntaxError if typed as shown. Minor grammar: "more than one variables".

---

## Slide 37 — Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
```
>>> num+=10
```
Boxed equivalent: `num = num + 10`
```
>>> num*=2  equivalent to
>>> num**=3 equivalent to
```
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**Issues**: none

---

## Slide 38 — Operators and operands

**Text**:
- **Comparison (Relational) Operators**
- All comparison operators return **True** or **False**

**Code**: labels overlaid on the diagram: `A < B`, `A > B`, `A == B`, `A != B`, `A >= B`, `A <= B`
**Output shown**: none
**Diagrams/tables**: Tree diagram rooted at **Comparison Operators**, with six children:
- Less Than ( < ), labelled `A < B`
- Greater Than ( > ), labelled `A > B`
- Equal To ( == ), labelled `A == B`
- Not Equal ( != or <> ), labelled `A != B`
- Greater Than or Equal To ( >= ), labelled `A >= B`
- Less Than or Equal To ( <= ), labelled `A <= B`

**Notes for curriculum**: The six comparison operators; they evaluate to bool.
**Issues**: The diagram lists `<>` as a Not Equal operator. `<>` existed only in Python 2 and is a SyntaxError in Python 3, where only `!=` is valid.

---

## Slide 39 — (no title in header bar)

**Text**: none outside the table.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Picture of a table:

| Operators | Meaning | Example | Result |
|---|---|---|---|
| < | Less than | 5<2 | False |
| > | Greater than | 5>2 | True |
| <= | Less than or equal to | 5<=2 | False |
| >= | Greater than or equal to | 5>=2 | True |
| == | Equal to | 5==2 | False |
| != | Not equal to | 5!=2 | True |

**Notes for curriculum**: Reference table of comparison operators with worked examples.
**Issues**: none (all results correct). Header bar has no title.

---

## Slide 40 — Operators and operands

**Text**: none outside the code.

**Code / session** (two columns; prompts in red, results in blue):

Left column:
```
>>> 5 < 3
 False
>>> 3 < 5
True
>>> 5 > 3
True
>>> x = 3
>>> y = 6
>>> x <= y
True
```
Right column:
```
>>> 3 < 5 < 7
True
>>> 3>5
False
>>> x = 4
>>> y = 3
>>> x >= 3
True
```
**Output shown**: as above (False, True, True, True / True, False, True)
**Diagrams/tables**: Real Python illustration: a machine with "TRUE" (blue) and "FALSE" (red) signs, a Python logo between them, a display reading "1 <= 0", buttons "==", "<=", "<", ">", ">=", and a person pointing at a button; "Real Python" signature.
**Notes for curriculum**: Comparison operators in the interactive shell, including chained comparison (3 < 5 < 7).
**Issues**: In the right column `y = 3` is assigned but never used; the comparison is `x >= 3` (a literal), not `x >= y`. Possibly an oversight, though the result is True either way.

---

## Slide 41 — Operators and operands

**Text**: none outside the code.

**Code / session** (three groups; prompts in red, results in blue; ASCII quotes):
```
>>> x = 2
>>> y = 2
>>> x == y
True
```
```
>>> x = 'str'
>>> y = 'stR'
>>> x == y
False
```
```
>>> x = 2
>>> y = 3
>>> x != y
True
```
**Output shown**: True, False, True
**Diagrams/tables**: The same Real Python TRUE/FALSE comparison-machine illustration as slide 40.
**Notes for curriculum**: == and != on numbers and strings; string comparison is case-sensitive.
**Issues**: none

---

## Slide 42 — Operators and operands

**Text**:
- **Logical Operators**
- The operands are **Expressions** and the result is **Boolean**
- Logical operators return **True** or **False**

**Code**: labels under the diagram: `A and B`, `A or B`, `not A`, `not B`
**Output shown**: none
**Diagrams/tables**: Tree diagram rooted at **Logical Operators** with three children, **AND**, **OR**, **NOT** (red uppercase text in boxes). Below them: "A **and** B", "A **or** B", "**not** A / **not** B".
**Notes for curriculum**: The three logical operators and, or, not.
**Issues**:
- Simplification: in Python, `and` and `or` return one of their operand values, not necessarily True/False (e.g. `0 or 'x'` → `'x'`, `2 and 3` → `3`). Only `not` always returns a bool. The statements "result is Boolean" and "return True or False" hold only when the operands are bools.
- The diagram labels use uppercase AND/OR/NOT; the actual Python keywords are lowercase (shown correctly underneath).
