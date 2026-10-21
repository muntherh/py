# Manual review packet



Each item with the source text it cites (from the slide transcriptions in docs/curriculum).



### pm-t2a-001 (mcq)

**Concepts:** Values and data types; Numbers: int, float and complex

**Item:** Slide 2 lists these example values: 1, 2.562, True, 3+4j and "Hello, UTAS!". Which one is a float?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 2, 4–7

```text
— Values and Types

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
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex
- Box "integers" with arrow pointing up to **int**
- a number, positive or negative, **without decimals**, and of unlimited length.
- Example box:
  '''
  2
  -56
  0
  76789999865433331
  '''
  (on the slide the last number wraps as "76789999865433" / "331"; it is one number, 76789999865433331)

**Code**: none
**Output shown**: none
**Diagrams/tables**: "Numbers" box with three arrows to red boxes **int**, **float**, **complex**; "integers" box with an arrow up to int. Bottom-right: Real Python illustration of a calculator-like machine with signs "INTEGER" and "FLOAT", a display reading "8_372.11", keypad keys 1–9, "."
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```

### pm-t2a-002 (mcq)

**Concepts:** Numbers: int, float and complex

**Item:** Slide 5 shows the number 6 × 10¹⁰ in scientific notation. Which line correctly stores this number in Python?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 5

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```

### pm-t2a-003 (mcq)

**Concepts:** Numbers: int, float and complex

**Item:** Which of these is a complex number in Python?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 6

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **complex**
- Represent complex numbers, of the form **a + bJ**
  - ✔ **a** is the real part.
  - ✔ **b** is the imaginary part.
- Example box:
  '''
  4+5j
  7j
  -7J
  '''

**Code**: none
**Output shown**: none
**Diagrams/tables**: Same Numbers tree; arrow to complex. Bottom-left: the same Real Python calculator illustration as slide 4.
**Notes for curriculum**: complex type; j/J suffix for the imaginary part.
**Issues**: none

---
```

### pm-t2a-004 (mcq)

**Concepts:** Boolean values

**Item:** Which of these is a valid Boolean value in Python?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 7

```text
— Values and Types

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
```

### pm-t2a-005 (mcq)

**Concepts:** Numbers: int, float and complex; Values and data types

**Item:** Lab Ch3 IIII (cell 1) asks you to identify the data type of 1.0. What is it?

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 1

```text
Identify the datatypes: 
1.	456738 
2.	10.3
3.	2.1
4.	1.0
5.	3J
6.	4 + 5j
7.	true 
8.	False 
9.	“Hello”
10.	 “10.12”
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 4–5

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex
- Box "integers" with arrow pointing up to **int**
- a number, positive or negative, **without decimals**, and of unlimited length.
- Example box:
  '''
  2
  -56
  0
  76789999865433331
  '''
  (on the slide the last number wraps as "76789999865433" / "331"; it is one number, 76789999865433331)

**Code**: none
**Output shown**: none
**Diagrams/tables**: "Numbers" box with three arrows to red boxes **int**, **float**, **complex**; "integers" box with an arrow up to int. Bottom-right: Real Python illustration of a calculator-like machine with signs "INTEGER" and "FLOAT", a display reading "8_372.11", keypad keys 1–9, "."
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```

### pm-t2a-006 (mcq)

**Concepts:** Values and data types; Strings and quotes

**Item:** Lab Ch3 IIII (cell 1) also lists the value "10.12", written inside quotes. What is its data type?

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 1

```text
Identify the datatypes: 
1.	456738 
2.	10.3
3.	2.1
4.	1.0
5.	3J
6.	4 + 5j
7.	true 
8.	False 
9.	“Hello”
10.	 “10.12”
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 8, 13

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

### pm-t2a-007 (mcq)

**Concepts:** Strings and quotes

**Item:** Which of these is NOT a valid Python string?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 8–9

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

```text
— Values and types

**Text**:
- ➢ **Using Triple Quotes (''' or """).** You can specify **multi-line strings** using triple quotes. Also, you can use single quotes and double quotes freely within triple quotes. Examples are

**Code** (illustrative; characters exactly as in source):
'''
’’’ welcome
     to
     UTAS’’’
'''
'''
“““welcome
     to
     UTAS”””
'''
(the line indentation of "to"/"UTAS" is visual alignment under "welcome" on the slide; the first example has a space after the opening quotes, the second does not)

**Output shown**: none
**Diagrams/tables**: Two examples side by side in large type, quote marks coloured gold.
**Notes for curriculum**: Triple-quoted (multi-line) string
```

### pm-t2a-008 (mcq)

**Concepts:** Escape sequences

**Item:** What is the output of this code from slide 11? print("Welcome to \n UTAS")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 11

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
'''
>>>print("Welcome to \n UTAS")
'''
'''
>>>print("Welcome to \t UTAS ")
'''
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
'''
Welcome to
 UTAS
'''
'''
Welcome to          UTAS
'''
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curricul
```

### pm-t2a-009 (mcq)

**Concepts:** Escape sequences

**Item:** Which statement prints exactly:  What's your name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 10

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```

### pm-t2a-010 (mcq)

**Concepts:** Escape sequences

**Item:** Which escape sequence inserts a tab space?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 11

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
'''
>>>print("Welcome to \n UTAS")
'''
'''
>>>print("Welcome to \t UTAS ")
'''
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
'''
Welcome to
 UTAS
'''
'''
Welcome to          UTAS
'''
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curricul
```

### pm-t2a-011 (mcq)

**Concepts:** Escape sequences

**Item:** Lab Ch2 Practice II (cell 2) asks: provide the output of the following program. What does it print? print("hello my\  students.")

**Cited:** Chapter 2 Practice II (notebook) | Cells 2–3

```text
# provide the output of the following program:

print("hello my\
 students.")
```

```text
print("hello my
 students.")
--- output ---
SyntaxError: EOL while scanning string literal (2931476342.py, line 1)
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 12

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
- Also, remember that a **single backslash at the end of the line** indicates that the **string is continued in the next line but it does not mean that there is a newline.**

**Code** (inside a picture; straight ASCII quotes):
'''
"This is the first sentence.\
This is the second sentence."
'''
Text below the picture box (part of the same picture): equivalent to "This is the first sentence.This is the second sentence."

**Output shown**: none (equivalence statement above)
**Diagrams/tables**: Screenshot with a pale pink box containing the two-line string.
**Notes for curriculum**: Backslash line cont
```

### pm-t2a-012 (mcq)

**Concepts:** Strings and quotes

**Item:** Slide 14 asks for the output of a triple-quoted string. With print() added and straight quotes, what does this code print? print('''A string is a sequence of characters''')

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 9, 14

```text
— Values and types

**Text**:
- ➢ **Using Triple Quotes (''' or """).** You can specify **multi-line strings** using triple quotes. Also, you can use single quotes and double quotes freely within triple quotes. Examples are

**Code** (illustrative; characters exactly as in source):
'''
’’’ welcome
     to
     UTAS’’’
'''
'''
“““welcome
     to
     UTAS”””
'''
(the line indentation of "to"/"UTAS" is visual alignment under "welcome" on the slide; the first example has a space after the opening quotes, the second does not)

**Output shown**: none
**Diagrams/tables**: Two examples side by side in large type, quote marks coloured gold.
**Notes for curriculum**: Triple-quoted (multi-line) string
```

```text
— Exercise

**Text**:
- What is the output of the python code here

**Code** (characters exactly as in source):
'''
“A string is \n a sequence of characters ”
'''
'''
’’’A string is a sequence
of characters’’’
'''
'''
’A string is a sequence /
of characters’
'''
(`\n` highlighted in green in the first example)

**Output shown**: none (exercise)
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on \n, triple-quoted multi-line strings, and line continuation.
**Issues**:
- All three use smart quotes. The triple-quoted example opens and closes with U+2019 ×3, and the third example opens with U+2019 (’) instead of an opening quote. As written, none is valid Python.
- The third example 
```

### pm-t2a-013 (mcq)

**Concepts:** Escape sequences

**Item:** Slide 14's third example ends the first line with a forward slash. Written with straight quotes and print(), what happens when this code runs? print('A string is a sequence / of characters')

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 12, 14

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
- Also, remember that a **single backslash at the end of the line** indicates that the **string is continued in the next line but it does not mean that there is a newline.**

**Code** (inside a picture; straight ASCII quotes):
'''
"This is the first sentence.\
This is the second sentence."
'''
Text below the picture box (part of the same picture): equivalent to "This is the first sentence.This is the second sentence."

**Output shown**: none (equivalence statement above)
**Diagrams/tables**: Screenshot with a pale pink box containing the two-line string.
**Notes for curriculum**: Backslash line cont
```

```text
— Exercise

**Text**:
- What is the output of the python code here

**Code** (characters exactly as in source):
'''
“A string is \n a sequence of characters ”
'''
'''
’’’A string is a sequence
of characters’’’
'''
'''
’A string is a sequence /
of characters’
'''
(`\n` highlighted in green in the first example)

**Output shown**: none (exercise)
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on \n, triple-quoted multi-line strings, and line continuation.
**Issues**:
- All three use smart quotes. The triple-quoted example opens and closes with U+2019 ×3, and the third example opens with U+2019 (’) instead of an opening quote. As written, none is valid Python.
- The third example 
```

### pm-t2a-014 (mcq)

**Concepts:** Escape sequences

**Item:** Slide 15: using double quotes around the whole string, write a statement that prints  A string is a "sequence" of characters. Which statement works?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 10, 15

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```

```text
— Exercise

**Text**:
- Write a python statement to get the following output (using double quote)
- Target output: A string is a **“**sequence**”** of characters (quote marks in bold green)

**Code**: none
**Output shown** (target output to produce):
'''
A string is a “sequence” of characters
'''
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on embedding double quotes inside a double-quoted string (escape \" ).
**Issues**: The target output uses curly quotes (U+201C/U+201D) around "sequence". The expected answer with escaped double quotes, e.g. `print("A string is a \"sequence\" of characters")`, would print straight `"` characters, so the displayed target does not match chara
```

### pm-t2a-015 (mcq)

**Concepts:** Strings and quotes

**Item:** Which statement prints  Ali's "best" day  (an apostrophe and two double quotes) without using any backslash?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 9

```text
— Values and types

**Text**:
- ➢ **Using Triple Quotes (''' or """).** You can specify **multi-line strings** using triple quotes. Also, you can use single quotes and double quotes freely within triple quotes. Examples are

**Code** (illustrative; characters exactly as in source):
'''
’’’ welcome
     to
     UTAS’’’
'''
'''
“““welcome
     to
     UTAS”””
'''
(the line indentation of "to"/"UTAS" is visual alignment under "welcome" on the slide; the first example has a space after the opening quotes, the second does not)

**Output shown**: none
**Diagrams/tables**: Two examples side by side in large type, quote marks coloured gold.
**Notes for curriculum**: Triple-quoted (multi-line) string
```

### pm-t2a-016 (mcq)

**Concepts:** The type() function

**Item:** What does this code print? print(type('17'))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 13

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

### pm-t2a-017 (mcq)

**Concepts:** The type() function

**Item:** Slide 13 shows str as the result of type('Hello, World!'). What does this line print when it runs in a Python program? print(type('Hello, World!'))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 13

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

### pm-t2a-018 (mcq)

**Concepts:** The type() function; Boolean values

**Item:** Slide 13 ends with type(true) but gives no answer. What happens when this code runs? print(type(true))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 7, 13

```text
— Values and Types

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
```

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

### pm-t2a-019 (mcq)

**Concepts:** The type() function; Variables and assignment

**Item:** What does this code print? x = 17 x = "17" print(type(x))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 18, 24

```text
— Variables and Keywords

**Text**:
- The value of the variables can vary, i.e., you can store anything using a variable.
- Variable declaration is not required in python.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Picture of an open cardboard box labelled **Name**, with a blue arrow from a note card reading **Samia** into the box. This illustrates a variable "Name" holding the value "Samia".
**Notes for curriculum**: Variables can hold any value; Python needs no variable declarations (dynamic typing).
**Issues**: none

---
```

```text
— Variables and Keywords

**Text**:
- To **display the value of a variable**, you can use a print statement:
- The **type of a variable** is the type of the value it refers to.

**Code** (the arrow is U+1F86A "🡪" in the source and stands for the result; it is not code):
'''
>>> n=17
>>> print(n) 🡪 17
>>> pi=3.14
>>> print(pi) 🡪 3.14
'''
'''
>>> type(n) 🡪 int
>>> type(pi) 🡪 float
'''
**Output shown**: 17, 3.14, int, float (after the arrows)
**Diagrams/tables**: none
**Notes for curriculum**: print() to display a variable's value; type() of a variable is the type of the value it refers to.
**Issues**: Python 3 displays `type(n)` as `<class 'int'>` and `type(pi)` as `<class 'float'>`, not 
```

### pm-t2a-020 (mcq)

**Concepts:** Variables and assignment

**Item:** Which statement correctly creates a variable called myAge that holds the number 17?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 18–19

```text
— Variables and Keywords

**Text**:
- The value of the variables can vary, i.e., you can store anything using a variable.
- Variable declaration is not required in python.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Picture of an open cardboard box labelled **Name**, with a blue arrow from a note card reading **Samia** into the box. This illustrates a variable "Name" holding the value "Samia".
**Notes for curriculum**: Variables can hold any value; Python needs no variable declarations (dynamic typing).
**Issues**: none

---
```

```text
— Variables and Keywords

**Text**:
- An **assignment** statement creates new variables and gives them values:

**Code**:
'''
>>> myName = “Bilal”

>>> myAge = 17

>>> isHappy = True
'''
(`“Bilal”` uses smart quotes U+201C/U+201D; the `=` signs are bold green)

**Output shown**: none
**Diagrams/tables**: Picture of three open boxes labelled **myName**, **myAge**, **isHappy**. Sticky notes with arrows into each box read **"Bob"** (yellow), **17** (cyan) and **true** (green).
**Notes for curriculum**: Assignment statements create variables and bind values (str, int, bool).
**Issues**:
- The picture contradicts the code: the code assigns "Bilal" but the picture shows "Bob", and the code uses `T
```

### pm-t2a-021 (mcq)

**Concepts:** Variables and assignment

**Item:** What does this code print? myName = "Bilal" myAge = 17 myName = "Samia" print(myName) print(myAge)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 18–19

```text
— Variables and Keywords

**Text**:
- The value of the variables can vary, i.e., you can store anything using a variable.
- Variable declaration is not required in python.

**Code**: none
**Output shown**: none
**Diagrams/tables**: Picture of an open cardboard box labelled **Name**, with a blue arrow from a note card reading **Samia** into the box. This illustrates a variable "Name" holding the value "Samia".
**Notes for curriculum**: Variables can hold any value; Python needs no variable declarations (dynamic typing).
**Issues**: none

---
```

```text
— Variables and Keywords

**Text**:
- An **assignment** statement creates new variables and gives them values:

**Code**:
'''
>>> myName = “Bilal”

>>> myAge = 17

>>> isHappy = True
'''
(`“Bilal”` uses smart quotes U+201C/U+201D; the `=` signs are bold green)

**Output shown**: none
**Diagrams/tables**: Picture of three open boxes labelled **myName**, **myAge**, **isHappy**. Sticky notes with arrows into each box read **"Bob"** (yellow), **17** (cyan) and **true** (green).
**Notes for curriculum**: Assignment statements create variables and bind values (str, int, bool).
**Issues**:
- The picture contradicts the code: the code assigns "Bilal" but the picture shows "Bob", and the code uses `T
```

### pm-t2a-022 (mcq)

**Concepts:** Variables and assignment

**Item:** What does this code print? n = 17 print("n") print(n)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 24

```text
— Variables and Keywords

**Text**:
- To **display the value of a variable**, you can use a print statement:
- The **type of a variable** is the type of the value it refers to.

**Code** (the arrow is U+1F86A "🡪" in the source and stands for the result; it is not code):
'''
>>> n=17
>>> print(n) 🡪 17
>>> pi=3.14
>>> print(pi) 🡪 3.14
'''
'''
>>> type(n) 🡪 int
>>> type(pi) 🡪 float
'''
**Output shown**: 17, 3.14, int, float (after the arrows)
**Diagrams/tables**: none
**Notes for curriculum**: print() to display a variable's value; type() of a variable is the type of the value it refers to.
**Issues**: Python 3 displays `type(n)` as `<class 'int'>` and `type(pi)` as `<class 'float'>`, not 
```

### pm-t2a-023 (mcq)

**Concepts:** Variables and assignment

**Item:** What happens when this code runs? print(total) total = 50

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 19

```text
— Variables and Keywords

**Text**:
- An **assignment** statement creates new variables and gives them values:

**Code**:
'''
>>> myName = “Bilal”

>>> myAge = 17

>>> isHappy = True
'''
(`“Bilal”` uses smart quotes U+201C/U+201D; the `=` signs are bold green)

**Output shown**: none
**Diagrams/tables**: Picture of three open boxes labelled **myName**, **myAge**, **isHappy**. Sticky notes with arrows into each box read **"Bob"** (yellow), **17** (cyan) and **true** (green).
**Notes for curriculum**: Assignment statements create variables and bind values (str, int, bool).
**Issues**:
- The picture contradicts the code: the code assigns "Bilal" but the picture shows "Bob", and the code uses `T
```

### pm-t2a-024 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Slide 25 asks whether each name is valid. Which of these is a valid variable name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20, 25

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Exercise

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
```

### pm-t2a-025 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Which of these is NOT a valid variable name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20–21, 23, 25

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Variables and Keywords

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
**Issues**: The rendered layout is broken. Tab misalignment 
```

```text
— Variables and Keywords

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
```

### pm-t2a-026 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Slide 25 lists the name dollarValue$. Why is it NOT a valid variable name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20, 25

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Exercise

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
```

### pm-t2a-027 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** According to slide 21, how many keywords does Python reserve?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 21

```text
— Variables and Keywords

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
**Issues**: The rendered layout is broken. Tab misalignment 
```

### pm-t2a-028 (mcq)

**Concepts:** Identifier naming rules and keywords; Variables and assignment

**Item:** What happens when this code runs? myAge = 17 print(MyAge)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 22

```text
— Variables and Keywords

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
```

### pm-t2a-029 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Which group contains ONLY valid variable names?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20, 23, 25

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Variables and Keywords

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
```

```text
— Exercise

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
```

### pm-t2a-030 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Which of these words is a Python keyword, so it can NOT be used as a variable name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 21–22

```text
— Variables and Keywords

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
**Issues**: The rendered layout is broken. Tab misalignment 
```

```text
— Variables and Keywords

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
```

### pm-t2b-001 (mcq)

**Concepts:** Arithmetic operators

**Item:** What does this program print? print(10 / 5)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 33

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
'''
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
'''
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---
```

### pm-t2b-002 (mcq)

**Concepts:** Arithmetic operators

**Item:** What does this program print? print(-13 // 3)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

### pm-t2b-003 (mcq)

**Concepts:** Arithmetic operators

**Item:** What does this program print? print(-13 % 3)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 35

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
'''
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
'''
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
- Spell
```

### pm-t2b-004 (mcq)

**Concepts:** Arithmetic operators

**Item:** This is the Lab IIII cell 4 program with straight quotes and a lowercase print. What happens when it runs? A = "Hi" B = 3 C = A + B print(C)

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 4

```text
A= “Hi”
B=3
C=A+B
Print(C)
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 29

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

### pm-t2b-005 (mcq)

**Concepts:** Arithmetic operators

**Item:** Slide 34 shows `9 / /1.81` (a typo). The intended expression is `9 // 1.81`. What does this program print? print(9 // 1.81)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

### pm-t2b-006 (mcq)

**Concepts:** Arithmetic operators

**Item:** What does this lab program print? a=2 b=4 c="UTAS" d=2 e=(d*c) f=(a+d)  print(e) print (f)

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 7

```text
a=2  
b=4
c="UTAS"
d=2
e=(d*c)
f=(a+d)

print(e)
print (f)
--- output ---
UTASUTAS
4
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 31

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```

### pm-t2b-007 (mcq)

**Concepts:** Assignment operators

**Item:** What does this program print? x = 10 x += 5 x *= 2 print(x)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 37

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
'''
>>> num+=10
'''
Boxed equivalent: `num = num + 10`
'''
>>> num*=2  equivalent to
>>> num**=3 equivalent to
'''
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**
```

### pm-t2b-008 (mcq)

**Concepts:** Assignment operators

**Item:** These two lines are saved in a script and run. What is displayed? a = 7 a += 4

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 50

```text
— Exercise

**Text**: none besides the title.

**Code** (left column; all string quotes are curly “ ”):
'''
>>> 3 * “python”
“pythonpythonpython”

>>> 3 * “3”
“333”

>>> A , B = 11/5 , 11%5
>>> print(A)
>>> print(B)
2.2
1
'''

**Code** (right column):
'''
>>> a=7
>>> a+=4
11

>>> A , B = 10/3 , 10//3
>>> print(A)
>>> print(B)
3.33333333
3
'''
(On the slide the line `>>> A , B = 10/3 ,` wraps, and `10//3` appears on the next line.)

**Output shown**: As shown inline above: “pythonpythonpython”, “333”, 2.2, 1, 11, 3.33333333, 3.

**Diagrams/tables**: none

**Notes for curriculum**: String repetition with `*`, true division `/`, modulus `%`, floor division `//`, augmented assignment `+=`, tuple
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 49

```text
— Expressions and Statements

**Text**:
- **Statement** (heading, underlined)
- • A ***statement*** is a unit of code that the Python interpreter can execute.
- • We have seen two kinds of statements:
  - 1) **print** being an expression statement
    - – Produce an output on the screen
  - 2) **assignment.**
    - – The assignment statement produces no output.
- • When you type a statement in interactive mode, the interpreter executes it and displays the result, if there is one.
- • A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.
- "Eg:" (label before the code), then "produces the output" (u
```

### pm-t2b-009 (mcq)

**Concepts:** Assignment operators

**Item:** What does this program print? x = y = z = 10 y = 5 print(x, y, z)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 36

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **= (assign)**
  - ▪ Assigns values from right side to left side operand
- ✔ **Assignment to same value**
  - ▪ Same value can be assigned to multiple variables
- ✔ **Multiple assignments**
  - ▪ Different values can be assigned to more than one variables

**Code** (green; layout as on slide, `>>>n=20` and `>>> num= n +10` in a second column):
'''
>>> a=5              >>>n=20
                     >>> num= n +10
'''
'''
>>> x=y=z=10
'''
'''
>>> x, y, z = 10, “hai”, 3.5
'''
(`“hai”` uses smart quotes U+201C/U+201D)

**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Simple assignment, chained assignment (x
```

### pm-t2b-010 (mcq)

**Concepts:** Assignment operators; Arithmetic operators

**Item:** What does this program print? A, B = 11/5, 11%5 print(A) print(B)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 50

```text
— Exercise

**Text**: none besides the title.

**Code** (left column; all string quotes are curly “ ”):
'''
>>> 3 * “python”
“pythonpythonpython”

>>> 3 * “3”
“333”

>>> A , B = 11/5 , 11%5
>>> print(A)
>>> print(B)
2.2
1
'''

**Code** (right column):
'''
>>> a=7
>>> a+=4
11

>>> A , B = 10/3 , 10//3
>>> print(A)
>>> print(B)
3.33333333
3
'''
(On the slide the line `>>> A , B = 10/3 ,` wraps, and `10//3` appears on the next line.)

**Output shown**: As shown inline above: “pythonpythonpython”, “333”, 2.2, 1, 11, 3.33333333, 3.

**Diagrams/tables**: none

**Notes for curriculum**: String repetition with `*`, true division `/`, modulus `%`, floor division `//`, augmented assignment `+=`, tuple
```

### pm-t2b-011 (mcq)

**Concepts:** Assignment operators

**Item:** A student meant to write `count += 3` but typed `=+` instead. What does the program print? count = 5 count =+ 3 print(count)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 37

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
'''
>>> num+=10
'''
Boxed equivalent: `num = num + 10`
'''
>>> num*=2  equivalent to
>>> num**=3 equivalent to
'''
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**
```

### pm-t2b-012 (mcq)

**Concepts:** Comparison (relational) operators

**Item:** What does this program print? print(3 < 5 < 7) print(5 < 3 < 7)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 40

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (two columns; prompts in red, results in blue):

Left column:
'''
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
'''
Right column:
'''
>>> 3 < 5 < 7
True
>>> 3>5
False
>>> x = 4
>>> y = 3
>>> x >= 3
True
'''
**Output shown**: as above (False, True, True, True / True, False, True)
**Diagrams/tables**: Real Python illustration: a machine with "TRUE" (blue) and "FALSE" (red) signs, a Python logo between them, a display reading "1 <= 0", buttons "==", "<=", "<", ">", ">=", and a person pointing at a button; "Real Python" signature.
**Notes for curriculum**: Comparison operators in t
```

### pm-t2b-013 (mcq)

**Concepts:** Comparison (relational) operators

**Item:** What does this program print? A, B, C = 10, 20, 30 print(B != C - 10)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 57

```text
— (no title)

**Text**: none (empty title bar).

**Code** (left column):
'''
>>> A , B , C = 10 , 20 , 30
>>>  a > b
Error
>>> A > B
False
>>> A < C
True
>>> B != C
True
'''

**Code** (right column):
'''
>>> A + 20 > B
True
>>> A +20 == C
True
>>> B != C -10
False
'''

**Output shown**: Inline above ("Error" is in purple; the boolean results are in blue).

**Diagrams/tables**: none

**Notes for curriculum**: Relational operators (`>`, `<`, `!=`, `==`). Arithmetic binds tighter than comparison. Names are case-sensitive.

**Issues**: "Error" is a simplification. Python actually prints a traceback ending in `NameError: name 'a' is not defined`. All other results are correct. The slide has no ti
```

### pm-t2b-014 (mcq)

**Concepts:** Comparison (relational) operators

**Item:** Which operator means "not equal to" in Python 3?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 38

```text
— Operators and operands

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
**Issues**: The d
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 39

```text
— (no title in header bar)

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
```

### pm-t2b-015 (mcq)

**Concepts:** Comparison (relational) operators

**Item:** What happens when this program runs? A, B, C = 10, 20, 30 print(a > b)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 57

```text
— (no title)

**Text**: none (empty title bar).

**Code** (left column):
'''
>>> A , B , C = 10 , 20 , 30
>>>  a > b
Error
>>> A > B
False
>>> A < C
True
>>> B != C
True
'''

**Code** (right column):
'''
>>> A + 20 > B
True
>>> A +20 == C
True
>>> B != C -10
False
'''

**Output shown**: Inline above ("Error" is in purple; the boolean results are in blue).

**Diagrams/tables**: none

**Notes for curriculum**: Relational operators (`>`, `<`, `!=`, `==`). Arithmetic binds tighter than comparison. Names are case-sensitive.

**Issues**: "Error" is a simplification. Python actually prints a traceback ending in `NameError: name 'a' is not defined`. All other results are correct. The slide has no ti
```

### pm-t2b-016 (mcq)

**Concepts:** Logical operators and short-circuit evaluation

**Item:** What does this program print? print(True and False) print(True or False) print(not True)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 43, 45–46

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • and (Boolean AND)
- ✔True if <u>Both</u> operands are True. (in red, "Both" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A AND B |
|---|---|---|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

**Notes for curriculum**: Logical operator `and` and its truth table.

**Issues**: Minor notation only. The table header says "A AND B" in uppercase, but the Python keyword is lowercase `and`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • or (boolean OR)
- ✔True if <u>Either</u> operands are True. (in red, "Either" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A OR B |
|---|---|---|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

**Notes for curriculum**: Logical operator `or` and its truth table.

**Issues**: Minor. The grammar "Either operands are" is awkward, and "either" could be read as exclusive, although the table correctly shows True when both are True. The header uses uppercase "OR" for the lowercase keyword `or`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • not (boolean NOT)
- If x is True , it returns False . If x is False , it returns True .

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | NOT A |
|---|---|
| False | True |
| False | True |
| True | False |
| True | False |

**Notes for curriculum**: Logical operator `not` (negation).

**Issues**: The table repeats each row (False→True twice, True→False twice). A one-operand table only needs two rows, so this looks like it was copied from the two-variable tables. The sentence uses `x` but the table uses `A`.

---
```

### pm-t2b-017 (mcq)

**Concepts:** Logical operators and short-circuit evaluation; Comparison (relational) operators

**Item:** What does this program print? A, B, C = 10, 20, 30 print(A == 10 and not B != 20)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 58

```text
— (no title)

**Text**: none (empty title bar).

**Code**:
'''
>>> A , B , C = 10 , 20 , 30
>>>   A > B and B < C
False
>>>   A > B or B < C
True
>>>   A < B and B < C
True
>>>   A == 10 and B != 20
False
>>>   A == 10 and  not B != 20
True
'''

**Output shown**: Inline above.

**Diagrams/tables**: A red-bordered side box explains the first line:
'''
A > B False
B < C True
False and True
False
'''

**Notes for curriculum**: Combining relational and logical operators. `not` binds looser than `!=`, so `not B != 20` means `not (B != 20)`.

**Issues**: Minor and conceptual. The side box evaluates `B < C`, but because of short-circuit evaluation (slide 44) Python never evaluates `B < C` once `A >
```

### pm-t2b-018 (mcq)

**Concepts:** Logical operators and short-circuit evaluation

**Item:** What happens when this program runs? print(False and 10 / 0)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 44

```text
— Operators and operands

**Text**:
Python will not evaluate **B** since it knows that the left-hand side (**A**) of the 'and' expression is **False** (bold, underlined) which implies that the whole expression will be False irrespective of the other values. This is called **short-circuit evaluation**.

**Code** (orange rounded box):
'''
>>> A = False
>>> B = True
>>>A and B
'''

**Output shown**: none

**Diagrams/tables**: The same `and` truth table as slide 43 (A | B | A AND B: False False False / False True False / True False False / True True True).

**Notes for curriculum**: Short-circuit evaluation of `and`.

**Issues**: The result of `A and B` is not shown (Python would display `False`
```

### pm-t2b-019 (mcq)

**Concepts:** Logical operators and short-circuit evaluation

**Item:** A student can enter the library if they have an ID card OR the teacher allows it. What does this lab program print? id_card = False teacher_allowed = True  print(id_card or teacher_allowed)

**Cited:** Chapter 2 Practice II (notebook) | Cell 7

```text
Write a python program for the following:
    
id_card = False
teacher_allowed = True

print(id_card or teacher_allowed)
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 45

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • or (boolean OR)
- ✔True if <u>Either</u> operands are True. (in red, "Either" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A OR B |
|---|---|---|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

**Notes for curriculum**: Logical operator `or` and its truth table.

**Issues**: Minor. The grammar "Either operands are" is awkward, and "either" could be read as exclusive, although the table correctly shows True when both are True. The header uses uppercase "OR" for the lowercase keyword `or`.

---
```

### pm-t2b-020 (mcq)

**Concepts:** Logical operators and short-circuit evaluation; Order of operations (precedence)

**Item:** What does this program print? A = True B = False print(not A and B) print(not (A and B))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 46

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • not (boolean NOT)
- If x is True , it returns False . If x is False , it returns True .

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | NOT A |
|---|---|
| False | True |
| False | True |
| True | False |
| True | False |

**Notes for curriculum**: Logical operator `not` (negation).

**Issues**: The table repeats each row (False→True twice, True→False twice). A one-operand table only needs two rows, so this looks like it was copied from the two-variable tables. The sentence uses `x` but the table uses `A`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

### pm-t2b-021 (mcq)

**Concepts:** Expressions and statements

**Item:** Slide 48 shows `17`, `x` and `x + 17` (where x is a variable that has a value). Which of them are expressions?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 48

```text
— Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
'''
17
x
x + 17
'''
'''
>>> 1 + 1
'''

**Output shown**:
'''
2
'''
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a v
```

### pm-t2b-022 (mcq)

**Concepts:** Expressions and statements

**Item:** This code is saved as a script (not typed at >>>). What does it print? x = 5 x + 17 print(x)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 48

```text
— Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
'''
17
x
x + 17
'''
'''
>>> 1 + 1
'''

**Output shown**:
'''
2
'''
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a v
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 49

```text
— Expressions and Statements

**Text**:
- **Statement** (heading, underlined)
- • A ***statement*** is a unit of code that the Python interpreter can execute.
- • We have seen two kinds of statements:
  - 1) **print** being an expression statement
    - – Produce an output on the screen
  - 2) **assignment.**
    - – The assignment statement produces no output.
- • When you type a statement in interactive mode, the interpreter executes it and displays the result, if there is one.
- • A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.
- "Eg:" (label before the code), then "produces the output" (u
```

### pm-t2b-023 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** What does this program print? print(6 + 4 / 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 56

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### pm-t2b-024 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** What does this program print? print(2 ** 3 ** 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

### pm-t2b-025 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** Slide 59, item 4. What does this program print? print(10 / 2 ** 2 + 8 / 4 % 3)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 59

```text
— Exercise

**Text** (inside a picture): "Evaluate the following expressions."

**Code** (picture, Courier font):
'''
1. 10 % 3 * 4 + 5 * 2
2. 10 // 3 + 4 * 5 / 3
3. 4 + 2 ** 2 * 5 - 3
4. 10 / 2 ** 2 + 8 / 4 % 3
5. int(5/2) + 6 % 2 - 5
6. True and False or True and 5 > 0
7. 6 > 2 and (4 + 3 != 7)
8. not True and True or not False
9. 3 * "Python"
10.     5 * “3”
'''
(Item 9 uses straight double quotes. Item 10 uses curly quotes “3” and has extra space after the number.)

**Output shown**: none (no answers given).

**Diagrams/tables**: none

**Notes for curriculum**: Practice in evaluating arithmetic, logical and string expressions using precedence rules.

**Issues**: Item 10 uses curly quotes
```

### pm-t2b-026 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** What does this program print? print(-2 ** 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

### pm-t2b-027 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** Lab IIII cell 5 shows `e` on the last line (a notebook displays it). In a script we print it. What is printed? a=20 b=4 c=100 d=2 e=a+(b*c)/d print(e)

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 5

```text
a=20  
b=4
c=100
d=2
e=a+(b*c)/d
e
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 53

```text
— Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces:
'''
2 * (3-1)        ← brace under (3-1), labelled "1st Expression"
2 * 2            ← brace under 2 * 2, labelled "2nd Expression"
4
'''

**Notes for curriculum**: Parentheses are evaluated first.

**Issues**: none

---
```

### pm-t2b-028 (mcq)

**Concepts:** Reading input with input()

**Item:** The user types 10 and then 20. What does the program print after the two prompts? num1 = input("Enter a number : ") num2 = input("Enter another number : ") result = num1 + num2 print(result)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 68–69

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows point at the first two lines):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  10
>>> Enter another number   20
'''

**Diagrams/tables**: Box `num1` ← green arrow from `“10”`. Box `num2` ← green arrow from `“20”` (string values).

**Notes for curriculum**: Without conversion, `input()` gives strings "10" and "20".

**Issues**: The code uses curly quotes. The second console row has no ":" while the first does (cosmetic). The console shows `>>>` before the prompts. The slide has no title
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (same as slide 68; arrows now point at lines 3–4):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**:
'''
1020
'''

**Diagrams/tables**: Box `num1` ← `“10”`, box `num2` ← `“20”`, box `result` ← `“10”+”20”`.

**Notes for curriculum**: `+` on two strings concatenates, so "10"+"20" gives "1020", not 30.

**Issues**: In the label `“10”+”20”`, the second string opens with a closing curly quote ” (U+201D), so the quotes are mismatched. The output `1020` is correct. The code uses curly quotes. The slide has no title.

---
```

### pm-t2b-029 (mcq)

**Concepts:** Reading input with input()

**Item:** A program runs `age = input("Enter Age :")` and the user types 20. What is the data type of `age`?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 61

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```

### pm-t2b-030 (mcq)

**Concepts:** Type conversion with int() and float()

**Item:** What happens when this program runs? print(int("5.5"))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 65

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```

### pm-t2b-031 (mcq)

**Concepts:** Reading input with input(); Arithmetic operators

**Item:** The user types 5. What does the program print? n = input() print(n * 3)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 61

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 31

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```

### pm-t2b-032 (mcq)

**Concepts:** Type conversion with int() and float(); Reading input with input()

**Item:** A student converts the result instead of the inputs. What does this program print? num1 = "10" num2 = "20" print(int(num1 + num2))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 69

```text
— (no title)

**Text**: none (empty title bar).

**Code** (same as slide 68; arrows now point at lines 3–4):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**:
'''
1020
'''

**Diagrams/tables**: Box `num1` ← `“10”`, box `num2` ← `“20”`, box `result` ← `“10”+”20”`.

**Notes for curriculum**: `+` on two strings concatenates, so "10"+"20" gives "1020", not 30.

**Issues**: In the label `“10”+”20”`, the second string opens with a closing curly quote ” (U+201D), so the quotes are mismatched. The output `1020` is correct. The code uses curly quotes. The slide has no title.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 70–71

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; on the slide the `result` line appears indented):
'''
num1 =int(input( “Enter a number : ” ))
num2 =int(input(“Enter another number : ”))
    result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  10
>>> Enter another number   20
'''

**Diagrams/tables**: Box `num1` ← `10`, box `num2` ← `20` (green, no quotes: integers).

**Notes for curriculum**: Converting input to `int` before arithmetic.

**Issues**: The `result =num1+ num2` line appears indented. This is an artifact of space-padded text wrapping in the text box, but typed literally it would raise `In
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =int(input( “Enter a number : ” ))
num2 =int(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
30
'''

**Diagrams/tables**: Box `num1` ← `10`, box `num2` ← `20`, box `result` ← `10+20`.

**Notes for curriculum**: Integer addition after conversion, so 10+20 gives 30.

**Issues**: The code uses curly quotes. The output 30 is correct. The slide has no title.

---
```

### pm-t2b-033 (mcq)

**Concepts:** Output with print()

**Item:** What does this program print? Name = "Hilal" print("Hello " + Name + "!")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 67

```text
— Input and Output

**Text**: none beyond the labels.

**Code** (curly quotes):
'''
Name= input( “Enter your name : ” )
print( “Hello ” + Name + “!”)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter Name :  Hilal
'''
'''
Hello Hilal !
'''

**Diagrams/tables**: A box labelled `Name`, with a blue arrow from the label `“Hilal”` (red) into it.

**Notes for curriculum**: Reading a string with `input()` and printing it with string concatenation (`+`).

**Issues**:
- Output mismatch: `“Hello ” + Name + “!”` produces `Hello Hilal!` with no space before "!", but the slide shows `Hello Hilal !`.
- The console prompt shows "Enter Name :", but the code's prompt is "Enter your name : ".
- The code 
```

### pm-t2b-034 (mcq)

**Concepts:** Output with print()

**Item:** What does this program print? name = "Hilal" age = 21 print("Hello", name, "! Your age is", age)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 74

```text
— Input and Output

**Text**: "Output:" (bold, underlined).

**Code** (curly quotes):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
print( “Hello” , name , “ ! Your age is ” , age , “ years” )
'''

**Output shown** (green):
'''
Enter your name : Hilal
Enter your age : 21
Hello Hilal ! Your age is 21 years
'''

**Diagrams/tables**: none

**Notes for curriculum**: Printing several values with a comma-separated `print()`.

**Issues**:
- Output mismatch. `print()` puts a space between items, and the string literals already contain leading and trailing spaces. The real output is `Hello Hilal  ! Your age is  21  years` (double spaces before "!", "21" and "years"), not t
```

### pm-t2b-035 (mcq)

**Concepts:** Formatted output (f-strings)

**Item:** What does this program print? name = "Sara" marks = 90 print(f"Student {name} scored {marks} marks in the test.")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 75

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```
**Cited:** Chapter 2 Practice II (notebook) | Cell 12

```text
Example: Marks Entry

Scenario: The teacher wants to record a student's test marks.
Read name and marks and display the output: Student Sara scored 90 marks in the test.
```

### pm-t2b-036 (mcq)

**Concepts:** Formatted output (f-strings)

**Item:** The student forgot something. What does this program print? name = "Sara" print("Hello {name}")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 75

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```

### pm-t2b-037 (mcq)

**Concepts:** The end parameter of print()

**Item:** What does this program print? print("Python", end=" ") print("is the best")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 76

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```

### pm-t2b-038 (mcq)

**Concepts:** The end parameter of print()

**Item:** What does this program print? print("Hello", end="/") print("World") print("Bye")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 77

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```

### pm-t2b-039 (mcq)

**Concepts:** Comments

**Item:** What does this program print? # print("A") print("B")  # print("C")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 79

```text
— Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
'''
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
'''

**Code** (box 2):
'''
percentage = (minute * 100) / 60    # percentage of an h
```

### pm-t2b-040 (mcq)

**Concepts:** Comments

**Item:** Slide 79 shows the code line indented under the comment. If you type it exactly like this, what happens? # compute the percentage of the hour that has elapsed         percentage = (minute * 100) / 60

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 79

```text
— Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
'''
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
'''

**Code** (box 2):
'''
percentage = (minute * 100) / 60    # percentage of an h
```

### pm-t2b-041 (mcq)

**Concepts:** Writing complete input → process → output programs

**Item:** Pizza offer: buy 2, get 1 free. This is the Lab III cell 3 program with the inputs replaced by fixed values (7 pizzas at 2.5 OMR). What does it print? pizzas = 7 price = 2.5  free_pizzas = pizzas // 3 total = (pizzas - free_pizzas) * price  print("Total cost:", total, "OMR")

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cell 3

```text
pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas // 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
--- output ---
Total cost: 15.0 OMR
```

### pm-t2b-042 (mcq)

**Concepts:** Writing complete input → process → output programs; Reading input with input()

**Item:** A student's circle-area program (slide 80). The user types 2. What happens? Pi = 3.14 radius = input("Enter radius: ") Area = Pi * radius * radius print(Area)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 80

```text
— Exercise

**Text**:
- • Write a program that will read value in radius to compute the area of a circle. Then display the computed area. ("read", "compute" and "display" in red)
- Pi=3.14
- Area= Pi * radius * radius

**Code**:
'''
Pi=3.14
Area= Pi * radius * radius
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: An exercise combining input, a float conversion, an arithmetic expression and output.

**Issues**: none (minor grammar: "read value in radius").

---
```

### pm-t2b-043 (mcq)

**Concepts:** Writing complete input → process → output programs; Order of operations (precedence)

**Item:** Practice Exercises I, Ex 4: the average of the marks 8.5, 9 and 10 should be about 9.17. This version forgot the parentheses. What does it print? prog1 = 8.5 web = 9 calculus = 10 average = prog1 + web + calculus / 3 print(average)

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 4

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 51

```text
— Order of Operations

**Text**:
- • When more than one operator appears in an expression, the order of evaluation depends on the ***rules of precedence***.
- • For mathematical operators, Python follows mathematical convention. The acronym ***PEMDAS*** is a useful way to rem[ember the rules:] (the image hides the bracketed part; it comes from the text layer)
- • **Parentheses** have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated [first.] (the bracketed word is cut off at the bottom edge; it comes from the text layer)

**Code**: none

**Output shown**: none

**Diagrams/tables**: PEMDAS graphic. T
```

### pm-t3-001 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** What is the output of this program? x = 100 if x > 1000:     print(x, "is a big number") print("End!")

**Cited:** Topic 3 — Conditional Execution | Slide 16

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```

### pm-t3-002 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** Which line correctly starts an if statement that checks whether x is equal to 10?

**Cited:** Topic 3 — Conditional Execution | Slides 6–7

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```

### pm-t3-003 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** What is the output of this program? x = 50 y = 100 if x > y:     print("x is big")     print("y is small") print("done")

**Cited:** Topic 3 — Conditional Execution | Slide 14

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 3. Note that there can be *more than one* statement after an *if*
- Annotation (with a brace pointing at the two indented print lines): "all the statements at the matching indentation level, are considered part of the same block. (if-block)"

**Code** (screenshot, Jupyter-style cell; straight double quotes; body indented 4 spaces):
'''
x=500
y=100
if x>y:
    print("x is big")
    print("y is small")
'''

**Output shown**:
'''
x is big
y is small
'''

**Diagrams/tables**: Brace grouping the two indented print statements, with the annotation text above.

**Notes for curriculum**: An if-block can contain multiple statements;
```

### pm-t3-004 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** What is the output of this program? x = 5 if x > 0:     print("A") print("B") if x > 10:     print("C") print("D")

**Cited:** Topic 3 — Conditional Execution | Slides 8, 16

```text
— (no title; title bar empty) Syntax: the statements block

**Text**:
- **Syntax** (red, underlined)
- ▪ **<statements>** the statement will be executed only if the condition is returning **True.**

**Code** (syntax template; `<statements>` highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The indented body of an if statement runs only when the condition evaluates to True.

**Issues**: Slide has no title (empty title bar).
```

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```

### pm-t3-005 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** A quiz program uses `if score >= 7.5:` before printing "congratulation on your good score". Which score does NOT get the message?

**Cited:** Topic 3 — Conditional Execution | Slide 17

```text
— EXERCISE

**Text**:
- Write a program that asks the user about his score in Quiz 1 out of 10.
  - ➢ if the student score is higher than or equals to **7.5** (red) then display a message “congratulation on your good score” .
  - ➢ At the end, it always display message “thank you for sharing your score”.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>=` on a float score, plus an unconditional final message after the if-block.

**Issues**: The source file contains two sample-run screenshots (Picture 3, Picture 4) that are completely covered by a white rectangle (no animation), so nothing
```

### pm-t3-006 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** What happens when this program is run? x = 3 if x > 0     print("positive")

**Cited:** Topic 3 — Conditional Execution | Slide 6

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

### pm-t3-007 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** What is the output of this program? num = 7 if num % 2 == 0:     print("Given number is Even") else:     print("Given number is Odd")

**Cited:** Topic 3 — Conditional Execution | Slide 25

```text
— Alternative Execution

**Text**:
- **Examples** (red, underlined)
- Program to check if a number is Odd or Even

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces; note spacing quirks: no space between `if` and `(`, a space between `print` and `(` on the first print):
'''
num=int(input("Enter the number:"))
if(num % 2)== 0:
    print ("Given number is Even")
else:
    print("Given number is Odd")
'''

**Output shown** (input 22):
'''
Enter the number:22
Given number is Even
'''

**Diagrams/tables**: none

**Notes for curriculum**: if-else with the modulus operator to test even/odd on user input.

**Issues**: none (output consistent with Python 3; `i
```

### pm-t3-008 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** This is the slide 26 program with the input replaced by x = 50. What does it print? x = 50 if x < 50:     print('the number you entered is smaller than 50') else:     print('the number you entered is greater than 50')

**Cited:** Topic 3 — Conditional Execution | Slide 26

```text
— EXERCISE

**Text**:
- Write a program that ask the user for a number. Then check if the number is greater that 50 or less than 50.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the input prompt, straight single quotes in the prints; bodies indented 4 spaces; this picture has an on-click entrance animation):
'''
x=int(input("Enter a number: "))
if x < 50:
    print('the number you entered is smaller than 50')
else:
    print('the number you entered is greater than 50')
'''

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none

**Notes for curriculum**: Exercise and solution: if-else comparing input against a threshold.

**Issues**: Typo "gr
```

### pm-t3-009 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** Which line correctly starts the else part of an if…else statement?

**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

### pm-t3-010 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** Each time an if…else statement runs, how many of its two blocks are executed?

**Cited:** Topic 3 — Conditional Execution | Slide 20

```text
— Alternative Execution

**Text**:
- **Alternative Execution**, in which there are two possibilities, and the condition determines which one gets executed.
- Label (dark red, under left box): "Statement executed if the condition is **True**"
- Label (dark red, under right box): "Statement executed if the condition is **False**"

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture with an overlaid "Condition" label): arrow into a decision diamond labelled "Condition"; branch "[True]" goes left to box "Statement 1"; branch "[False]" goes right to box "Statement 2"; both boxes lead into a lower (merge) diamond, then an arrow continues downward.

**Notes for curriculu
```

### pm-t3-011 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** What is the output of this program? x = 4 if x > 5:     print("big") else:     print("small")     print("checked") print("end")

**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

### pm-t3-012 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** What is the output of this program? a = 10 b = 3 if a % b == 0:     print(a // b) else:     print(a % b) print(a / b > 3)

**Cited:** Topic 3 — Conditional Execution | Slides 22, 25

```text
— (no title; title bar empty) Even/odd flowchart

**Text**:
- Program that check if x is even or odd number
- Callout box (pink border, orange arrow to the diamond): "**Condition**"
- Callout box (blue border, arrow to the left box): "**<False part statements>**"
- Callout box (blue border, arrow to the right box): "**<True part statements>**"

**Code** (inside flowchart shapes; curly single quotes ‘ ’):
'''
x%2 == 0
print(‘x is even’)
print(‘x is odd’)
'''

**Output shown**: none

**Diagrams/tables**: Flowchart: arrow into a grey diamond containing `x%2 == 0` (red text). "False" branch goes left to a white box `print(‘x is odd’)`; "True" branch goes right to a grey box `print(‘x is even’)`;
```

```text
— Alternative Execution

**Text**:
- **Examples** (red, underlined)
- Program to check if a number is Odd or Even

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces; note spacing quirks: no space between `if` and `(`, a space between `print` and `(` on the first print):
'''
num=int(input("Enter the number:"))
if(num % 2)== 0:
    print ("Given number is Even")
else:
    print("Given number is Odd")
'''

**Output shown** (input 22):
'''
Enter the number:22
Given number is Even
'''

**Diagrams/tables**: none

**Notes for curriculum**: if-else with the modulus operator to test even/odd on user input.

**Issues**: none (output consistent with Python 3; `i
```

### pm-t3-013 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** What is the output of this program? x = 9 Result = 100 if x >= 10 else 200 print(Result)

**Cited:** Topic 3 — Conditional Execution | Slide 28

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### pm-t3-014 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** What is the output of this program? score = 49 result = 'Pass' if score >= 50 else 'Fail' print(result)

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 19–20

```text
Question:

Write a single-line statement that reads a student's final score (out of 100)
and prints "Pass" if the score is 50 or higher, or "Fail" if it is lower.
```

```text
n = int(input('enter number 1'))

result = 'Pass' if n>=50 else 'Fail'
print(result)
--- output ---
Pass
```

### pm-t3-015 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** Which line is a valid conditional expression?

**Cited:** Topic 3 — Conditional Execution | Slides 27, 30

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— Exercise

**Text**:
- A program that asks the user about his age. If the user enter number less than 21 it prints **Minor**. If the user enter number greater or equals to 21 it prints **Adult.** Using *conditional expression* (italic, underlined).

**Code** (screenshot, Jupyter-style cell; straight double quotes for the prompt, straight single quotes for the strings; the last line is a bare `s`):
'''
age=int(input("Please enter your age: "))
s = 'minor' if age < 21 else 'adult'
s
'''

**Output shown** (input 12; Jupyter echoes the value of `s` with quotes):
'''
Please enter your age: 12

'minor'
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression used to choose
```

### pm-t3-016 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** Slide 30's program ends with a bare `s` on the last line instead of `print(s)`. The user types 12. If the code is saved in a .py file and run as a normal script (not in a Jupyter notebook), what appears after the prompt line? age = int(input("Please enter your age: ")) s = 'minor' if age < 21 else 'adult' s

**Cited:** Topic 3 — Conditional Execution | Slide 30

```text
— Exercise

**Text**:
- A program that asks the user about his age. If the user enter number less than 21 it prints **Minor**. If the user enter number greater or equals to 21 it prints **Adult.** Using *conditional expression* (italic, underlined).

**Code** (screenshot, Jupyter-style cell; straight double quotes for the prompt, straight single quotes for the strings; the last line is a bare `s`):
'''
age=int(input("Please enter your age: "))
s = 'minor' if age < 21 else 'adult'
s
'''

**Output shown** (input 12; Jupyter echoes the value of `s` with quotes):
'''
Please enter your age: 12

'minor'
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression used to choose
```

### pm-t3-017 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** What is the output of this program? x = 5 y = x * 2 if x > 3 else x + 2 z = y - 1 if y > 10 else y + 1 print(y, z)

**Cited:** Topic 3 — Conditional Execution | Slides 27–28

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### pm-t3-018 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** What is the output of this program? raining = True weather = "Let's go to the beach" if raining else "Let's go to the library" print(weather)

**Cited:** Topic 3 — Conditional Execution | Slide 29

```text
— conditional expression

**Text**:
- A program that print different statement based on the weather. If it is raining it prints **Let’s go to the beach**. If it not raining, it prints **Let’s go to the library.**

**Code** (two Jupyter-style screenshots; strings in straight single quotes; the beach string uses an escaped straight apostrophe `\'`, while the library string contains a curly apostrophe ’ inside it; no space before `=` in `weather=`):
Cell 1:
'''
raining = True
weather= 'Let\'s go to the beach' if raining else 'Let’s go to the library'
print(weather)
'''
Cell 2:
'''
raining = False
weather= 'Let\'s go to the beach' if raining else 'Let’s go to the library'
print(weather)
'''

**O
```

### pm-t3-019 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** What is the output of this program? x = 7 y = 7 if x < y:     print('x is less than y') elif x > y:     print('x is greater than y') else:     print('x and y are equal')

**Cited:** Topic 3 — Conditional Execution | Slide 35

```text
— (no title; title bar empty) Chained conditional code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style cell, image stretched vertically; straight double quotes for prompts, straight single quotes in prints; bodies indented 4 spaces; `else:` and its print are on the same line):
'''
x=int(input("Enter 1st number:"))
y=int(input("Enter 2nd number:"))
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else: print('x and y are equal')
'''

**Output shown** (inputs 5 and 10):
'''
Enter 1st number:5
Enter 2nd number:10
x is less than y
'''

**Diagrams/tables**: Same flowchart as slide 34 (left side): `x < y` → Yes → `print(‘l
```

### pm-t3-020 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Which keyword does Python use to add another condition after an if (meaning "else if")?

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### pm-t3-021 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Which statement about an if…elif…else chain is true?

**Cited:** Topic 3 — Conditional Execution | Slides 32–33

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### pm-t3-022 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** What is the output of this program? mark = 80 if mark >= 90:     print("A") elif mark >= 80:     print("B") elif mark >= 70:     print("C") else:     print("F")

**Cited:** Topic 3 — Conditional Execution | Slide 38

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```
**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 4

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```

### pm-t3-023 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** A student wrote the grade conditions in this order. What is the output? mark = 95 if mark >= 60:     print("D") elif mark >= 90:     print("A") else:     print("F")

**Cited:** Topic 3 — Conditional Execution | Slides 32, 38

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```

### pm-t3-024 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** What is the output of this program? num1 = 7.0 num2 = 2.0 choice = 4 if choice == 1:     print('Result', num1 + num2) elif choice == 2:     print('Result', num1 - num2) elif choice == 3:     print('Result', num1 * num2) elif choice == 4:     print('Result', num1 % num2) elif choice == 5:     print('Result', num1 / num2) else:     print('Error')

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 5

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 14

```text
num1 = float(input('Num 1:\t '))
num2 = float(input('Num 2:\t '))
Choice = int(input('Enter your choice:\t '))

if Choice == 1:
    result = num1 + num2
    print('Result ', result)

elif Choice == 2:
    result = num1 - num2
    print('Result ', result) 

elif Choice == 3:
    result = num1 * num2
    print('Result ', result)

elif Choice == 4:
    result = num1 % num2
    print('Result ', result)

elif Choice == 5:
    result = num1 / num2
    print('Result ', result)

else:
    print('Error')
--- output ---
Result  1.0
```

### pm-t3-025 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** The lab's bonus program uses if…elif…else. A student rewrote it with two separate if statements. What does this version print? hours = 6 bonus = 0 if hours >= 5:     bonus = bonus + 10 if hours >= 3:     bonus = bonus + 5 print(bonus)

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 29, 31

```text
# E.g. 2:
A student has a test score.
Read/ accept the test marks and the number of hours, and display the final marks.
    
If the student studies more hours, they get bonus marks.

If study hours are greater than or equal to 5, add 10 bonus marks

If study hours are greater than or equal to 3, add 5 bonus marks

Otherwise, no bonus
```

```text
# Step 1: Read and accept the inputs from the user
marks = float(input("Enter the test marks: "))
hours = float(input("Enter the number of study hours: "))

# Step 2: Determine the bonus based on study hours
if hours >= 5:
    bonus = 10
elif hours >= 3:
    bonus = 5
else:
    bonus = 0


final_marks = marks + bonus

print("The final marks are:", final_marks)
```

### pm-t3-026 (mcq)

**Concepts:** Chained conditionals: if…elif…else; Combining conditions with and / or

**Item:** This is the slide 37 program with the inputs replaced by a = 5, b = 5, c = 3. What does it print? a = 5 b = 5 c = 3 if (a > b) and (a > c):     print("a is greater") elif (b > a) and (b > c):     print("b is greater") else:     print("c is greater")

**Cited:** Topic 3 — Conditional Execution | Slide 37

```text
— (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
'''
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
'''

**Output shown** (inputs 5, 8, 6):
'''
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
'''

**Diagrams/tables**: none

**Notes for curriculum**: 
```

### pm-t3-027 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** This grade chain is taken from the lab solution. What happens when total is 89.5? total = 89.5 if total >= 90:     Grade = 'A' elif total >= 80 and total <= 89:     Grade = 'B' elif total >= 70 and total <= 79:     Grade = 'C' elif total >= 60 and total <= 69:     Grade = 'D' elif total < 60:     Grade = 'F' print('Your grade = ', Grade)

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 12

```text
name = input('Enter name ')
id = input('Enter ID ')
quiz = float(input('Quiz marks '))
mid = float(input('MID marks '))
final = float(input('Final marks '))

total = quiz + mid + final

if total >= 90:
    Grade = 'A'
elif total >= 80 and total <=89:
    Grade = 'B'
elif total >=70 and total <=79:
    Grade = 'C'
elif total >= 60 and total <= 69:
    Grade = 'D'
elif total<60:
    Grade = 'F'

print('Total marks = ', total)
print('Your grade = ', Grade)
    
    
--- output ---
Total marks =  63.0
Your grade =  D
```

### pm-t3-028 (mcq)

**Concepts:** Combining conditions with and / or

**Item:** What is the output of this program? amount = 50 member = "yes" if amount > 50 and member == "yes":     print("Discount") else:     print("No discount")

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 11–12

```text
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amo
```

```text
name = input("Enter customer name: ")
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
```

### pm-t3-029 (mcq)

**Concepts:** Combining conditions with and / or

**Item:** Which condition is True only when x is from 1 to 9 (both included)?

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```

### pm-t3-030 (mcq)

**Concepts:** Combining conditions with and / or

**Item:** Spot the bug. This code comes from a lab notebook. What does it print? case1 = 'raining' case2 = 'no transport' if case1 == True or case2 == True:     print('Attend the online class!') else:     print('Stay on Campus')

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 10–11

```text
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```

```text
user = input('Enter Yes or No:\t')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Enter Yes or No:	Yes
Stay on Campus
Check your status!!
```
**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```

### pm-t3-031 (mcq)

**Concepts:** Combining conditions with and / or

**Item:** The lab task says: "If it is raining or there is no transport, attend the online class." Which condition matches this rule exactly?

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 10, 12

```text
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```

```text
#user = input('Enter Yes or No:\t')
case1 = input('Case is raining or not raining:\t')
case2 = input('no transport / transport:\t')
if case1 == 'raining' and case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Case is raining or not raining:	raining
no transport / transport:	transport
Stay on Campus
Check your status!!
```

### pm-t3-032 (mcq)

**Concepts:** Combining conditions with and / or; Chained conditionals: if…elif…else

**Item:** What is the output of this program? day1 = 5 day2 = 5 day3 = 41 total = day1 + day2 + day3 avg = total / 3 if avg >= 30:     print('physical classes are canceled') elif avg >= 20 or day1 >= 40 or day2 >= 40 or day3 >= 40:     print('Weather conditions require further assessment.') elif total < 15:     print('Rainfall has been low over the three days.') else:     print('Physical classes can proceed

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 1–2

```text
A university wants to decide whether to conduct physical classes after three consecutive days of rain.

Write a Python program that asks the user to enter the rainfall recorded on each day (in mm)
and then calculates the average rainfall and total rainfall.

    The program should make a decision based on the following rules:

1. If the average rainfall is 30 mm or more, physical classes are canceled.

2. Otherwise, if the average rainfall is 20 mm or more, or the rainfall on any single day is 40 mm or more, 
display "Weather conditions require further assessment."
3. Otherwise, if the total rainfall over the three days is less than 15 mm, 
display "Rainfall has been low over the three days.
```

```text
day1 = float(input('Enter the rainfall for day1 (in mm): '))
day2 = float(input('Enter the rainfall for day2 (in mm): '))

day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = day1+day2+day3

avg = total/3

print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')
--- output ---
Total =  13.0
Average =  4.333333333333333
Rainfall has been low over the three days.
```

### pm-t3-033 (mcq)

**Concepts:** Combining conditions with and / or; Alternative execution: if…else

**Item:** What is the output of this program? x = 15 if x > 10 and x < 20 or x == 0:     print("A") else:     print("B") if not x > 10:     print("C") else:     print("D")

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

### pm-t3-034 (mcq)

**Concepts:** Nested conditions

**Item:** What is the output of this program? x = 1 y = 2  if x > y:     print(x)     if y > x:         print(y)

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 16–17

```text
x = 1
y = 2

if x<y:
    print(x)
    if y>x:
        print(y)
--- output ---
1
2
```

```text
x = 1
y = 2

if x>y:
    print(x)
    if y>x:
        print(y)
```

### pm-t3-035 (mcq)

**Concepts:** Nested conditions

**Item:** This is the slide 43 program with different values. What is the output? x = 20 y = 10 if x == y:     print("equal") else:     if x < y:         print("less")     else:         print("greater")

**Cited:** Topic 3 — Conditional Execution | Slide 43

```text
— (no title; title bar empty) Nested condition flowchart and code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style; straight double quotes; a space before each `:` after the conditions; space in `print ("greater")`; indentation 4 and 8 spaces; the conditions `x == y` and `x < y` are highlighted with pink boxes matching pink boxes on the flowchart diamonds):
'''
x = 10
y = 20
if x == y :
    print("equal")
else:
    if x < y :
        print("less")
    else:
        print ("greater")
'''

**Output shown**:
'''
less
'''

**Diagrams/tables**: Same flowchart as slide 42 (left/top): diamond `x == y` — Yes → `print(‘equal’)`; No → diamond `x < y` — Yes → `pri
```

### pm-t3-036 (mcq)

**Concepts:** Nested conditions

**Item:** This is the slide 46 program with n = 15. What is the output? n = 15 if n <= 15:     if n == 10:         print("play football")     else:         print("play basketball") else:     print("Don't play game")

**Cited:** Topic 3 — Conditional Execution | Slide 46

```text
— (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
'''
n = int(input("Enter  number:"))
if (n<=15):
    if (n 
```

### pm-t3-037 (mcq)

**Concepts:** Nested conditions

**Item:** A student indented the else one level too far. What does this program print? attendance = 60 mark = 80 if attendance >= 75:     if mark >= 50:         print("Passed")     else:         print("Not Eligible") print("Done")

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 16–17

```text
Example
Write a Python program to read a student’s attendance percentage and mark.

If attendance is 75% or above, check the mark.
If the mark is 50 or above, print “Passed”.
If attendance is below 75%, print “Not Eligible”.
```

```text
attendance = float(input("Enter attendance: "))
mark = float(input("Enter mark: "))

if attendance >= 75:
    if mark >= 50:
        print("Passed")
else:
    print("Not Eligible")
```

### pm-t3-038 (mcq)

**Concepts:** Nested conditions

**Item:** This shirt-size program (from slide 48, typo fixed) is run with h = 5 and w = 100. What is the output? h = 5 w = 100 r = w / h if r > 5:     if r > 20:         print("Size XXL")     else:         print("Size L") else:     if r > 3:         print("Size M")     else:         print("Size S")

**Cited:** Topic 3 — Conditional Execution | Slides 47–48

```text
— Exercise

**Text**:
- Write a program to determine the shirt size of a user.
- The program will read the height and weight of the user.
- Calculate the ratio by dividing the height by the weight.
-  If ratio is greater than 5, check if it is greater than or less than 20.
  - if ratio is greater than 20, print “ Size XXL”
  - if ratio is less than 20, print “Size L”
- If ratio is less than 5, check if it is greater than 3.
  - if ratio greater than 3, print “Size M”
  - otherwise print “Size S”

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: nested if-else on a computed ratio (two levels of decisions).

**Issues**: The text says ratio 
```

```text
— solution

**Text**: none besides the code.

**Code** (screenshot of a Jupyter cell labelled `In [10]:`; straight double quotes; no trailing space in the input prompts; indentation 4 and 8 spaces; typo "sixe" is in the original):
'''
h=int(input("enter your height in feet"))
w=int(input("enter your weight in Kg"))
r=w/h
if r>5:
    if(r>20):
        print("size XXL")
    else:
        print("sixe L")
else:
    if(r>3):
        print("Size M")
    else:
        print("Size S")
'''

**Output shown** (inputs 5 and 50; the prompts have no trailing space so the input is glued to the prompt):
'''
enter your height in feet5
enter your weight in Kg50
sixe L
'''

**Diagrams/tables**: none

**Notes f
```

### pm-t3-039 (mcq)

**Concepts:** Nested conditions

**Item:** This is the tax part of the lab's tax calculator. What is the output when salary is 500? salary = 500 if salary <= 500:     tax = salary * 0.05 else:     if salary <= 1000:         tax = salary * 0.10     else:         tax = salary * 0.15 print(tax)

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 27–28

```text
A company needs a tax calculator. 
The user will enter the following: Employee Name, rate Per Day and Number of days worked. 
Calculate and display the salary and tax for the employee.
Salary = rate per day * the number of days. 
The tax is computed based on the salary. See Tax computation based on salary range as indicated on the table below:

Salary	                   Tax
1-500	                    5%
500-1000	                10%
more than1000	            15%
```

```text
name = input("Enter employee name: ")
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
--- output ---
Employee name: Ali
Salary: 4000.0
Tax: 600.0
```
**Cited:** Topic 3 — Conditional Execution | Slide 49

```text
— Exercise

**Text**:
- A company needs a **tax calculator**.
- **The user will enter the following:** Employee Name, rate Per Day and Number of days worked.
- **Calculate and display the salary and tax for the employee.**
- **Salary = rate per day * the number of days.**
- The tax is computed based on the salary. See Tax computation based on salary range as indicated on the table below:

**Code**: none

**Output shown**: none

**Diagrams/tables**: Table (salmon header row, two columns):

| Salary | Tax |
|---|---|
| 1-500 | 5% |
| 500-1000 | 10% |
| More than 1000 | 15% |

**Notes for curriculum**: Exercise: input of string and numeric values, arithmetic, and an if-elif-else chain over sala
```

### pm-t4-001 (mcq)

**Concepts:** What is iteration?

**Item:** According to Topic 4, what is iteration?

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```

### pm-t4-002 (mcq)

**Concepts:** What is iteration?

**Item:** Slide 2 names one example loop for each type of iteration. Which pairing matches the slide?

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```

### pm-t4-003 (mcq)

**Concepts:** What is iteration?

**Item:** This program keeps doubling a number while it is less than 1000. The code never says how many times to repeat. Using the definitions on slide 2, which type of iteration is this? number = 3 while number < 1000:     number = number * 2 print(number)

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```

### pm-t4-004 (mcq)

**Concepts:** The while loop: syntax and flow

**Item:** In a while loop, when is the condition tested?

**Cited:** Topic 4 — Iteration | Slide 6

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

### pm-t4-005 (mcq)

**Concepts:** The while loop: syntax and flow

**Item:** What does this program print? x = 10 while x < 5:     print("inside")     x = x + 1 print("done")

**Cited:** Topic 4 — Iteration | Slide 6

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

### pm-t4-006 (mcq)

**Concepts:** The while loop: syntax and flow

**Item:** In this program, which line is the LAST line of the while loop's body (the last line that repeats)? n = 1 while n <= 3:     print(n)     n = n + 1 print("end")

**Cited:** Topic 4 — Iteration | Slide 6

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

### pm-t4-007 (mcq)

**Concepts:** The while loop: syntax and flow

**Item:** Slide 7 lists the logical operators as AND, OR and NOT. How must a logical operator be written in a real Python while condition?

**Cited:** Topic 4 — Iteration | Slide 7

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (a red rounded box is drawn around "le <test_condition>:")
- **<Body of while>** (green)
- the **<test_condition>** is a ***Boolean expression.***
- A line splits from that bullet into two arrows: ← "True" and → "False" (orange)
- Under "True": "Use the logical operators."
- Under "False": "Use the comparison operators"

(Footer: 7)

**Code**: none (syntax template only, as on slide 5).

**Output shown**: none

**Diagrams/tables**:
- Left tree (picture): root box "Logical Operators" with three children (red text): **AND**, **OR**, **NOT**.
- Right tree (slide shapes): root rounded box "Comparison operators" (wrapped as "Comp
```

### pm-t4-008 (mcq)

**Concepts:** The while loop: syntax and flow

**Item:** What does this program print? a = 1 b = 6 while a < 4 and b > 3:     print(a, b)     a = a + 1     b = b - 2

**Cited:** Topic 4 — Iteration | Slide 7

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (a red rounded box is drawn around "le <test_condition>:")
- **<Body of while>** (green)
- the **<test_condition>** is a ***Boolean expression.***
- A line splits from that bullet into two arrows: ← "True" and → "False" (orange)
- Under "True": "Use the logical operators."
- Under "False": "Use the comparison operators"

(Footer: 7)

**Code**: none (syntax template only, as on slide 5).

**Output shown**: none

**Diagrams/tables**:
- Left tree (picture): root box "Logical Operators" with three children (red text): **AND**, **OR**, **NOT**.
- Right tree (slide shapes): root rounded box "Comparison operators" (wrapped as "Comp
```

### pm-t4-009 (mcq)

**Concepts:** Numbers and None as loop conditions

**Item:** How many times does this loop print Hello? while 0:     print("Hello")

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```

### pm-t4-010 (mcq)

**Concepts:** Numbers and None as loop conditions

**Item:** Using the rule on slide 8, which value would be treated as True if it were used as a while condition?

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```

### pm-t4-011 (mcq)

**Concepts:** Numbers and None as loop conditions

**Item:** What does this program print? x = None while x:     print("in the loop") print("after the loop")

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```

### pm-t4-012 (mcq)

**Concepts:** Numbers and None as loop conditions

**Item:** Slide 8 shows the program below, with a screenshot of many Hello lines under it. What really happens when it runs? while 3:     print("Hello")

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```

### pm-t4-013 (mcq)

**Concepts:** The counter pattern: initialize, test, update

**Item:** How many times does the body of this loop run? A = 3 while A <= 8:     print(A)     A = A + 1

**Cited:** Topic 4 — Iteration | Slide 9

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

### pm-t4-014 (mcq)

**Concepts:** The counter pattern: initialize, test, update

**Item:** This is slide 11's countdown with the print moved after the loop. What does it print? N = 5 while N >= 1:     N = N - 1 print(N)

**Cited:** Topic 4 — Iteration | Slide 11

```text
— The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
'''
N=5
while N>=1:
    print(N)
    N=N-1
'''

**Output shown**:
'''
5
4
3
2
1
'''

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---
```

### pm-t4-015 (mcq)

**Concepts:** The counter pattern: initialize, test, update

**Item:** Slide 9 prints 1 to 5 with while A <= 5. Here the condition was changed to A < 5. What does the program print? A = 1 while A < 5:     print(A, end=" ")     A = A + 1

**Cited:** Topic 4 — Iteration | Slide 9

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

### pm-t4-016 (mcq)

**Concepts:** The counter pattern: initialize, test, update

**Item:** This program is meant to print the numbers 1 to 5 (like slide 9), but it keeps printing 1 and never stops. What is missing from the loop body? A = 1 while A <= 5:     print(A)

**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### pm-t4-017 (mcq)

**Concepts:** The counter pattern: initialize, test, update; The while loop: syntax and flow

**Item:** How many times is the condition A <= 3 tested while this program runs? A = 1 while A <= 3:     print(A)     A = A + 1

**Cited:** Topic 4 — Iteration | Slides 6, 9

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

### pm-t4-018 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** What does this program print? i = 1 total = 0 while i <= 4:     total = total + i     i = i + 1 print(total)

**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```

### pm-t4-019 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** On slide 12 the loop variable appears as i = 1, but the screenshot underneath actually shows i = 0. Suppose the program starts with i = 0, as below. What does it print? i = 0 sum = 0 while i <= 10:     sum = sum + i     i = i + 1 print('the sum is ', sum)

**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```

### pm-t4-020 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** A student wants this program to print 5! = 120 (slide 13), but it prints 0. Which change fixes it? n = 5 factorial = 0 i = 1 while i <= n:     factorial = factorial * i     i = i + 1 print(factorial)

**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```

### pm-t4-021 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** What does this program print? count = 0 while count < 3:     total = 0     total = total + 5     count = count + 1 print(total)

**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```

### pm-t4-022 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** This program follows slide 14's idea (average of N numbers), but the numbers are made by the program instead of being typed. What does it print? N = 4 total = 0 count = 0 number = 2 while count < N:     total = total + number     number = number + 2     count = count + 1 print(total / N)

**Cited:** Topic 4 — Iteration | Slide 14

```text
— Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
'''

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

*
```

### pm-t4-023 (mcq)

**Concepts:** Accumulating totals, averages and products

**Item:** This loop comes from the Chapter 4 lab's rainfall program. It should print the average rainfall over 3 days. What is wrong with it? total = 0 count = 0 while count < 3:     days = float(input('Enter the rainfall (in mm): '))     total = total + days     avg = total / days     count += 1 print('Average = ', avg)

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 3–4

```text
# Uses a while loop to input rainfall for three days.
```

```text
#day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
count = 0
while count<3:
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days   

    count+=1
print('Total = ', total)
print('Average = ', avg)      

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or days>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
--- output ---
To
```

### pm-t4-024 (mcq)

**Concepts:** Printing a multiplication table with a loop

**Item:** Slide 15 asks for a multiplication table where the last multiplier is 10. How many lines does this loop print? number = 5 multiplier = 1 while multiplier <= 10:     print(number, "*", multiplier, "=", number * multiplier)     multiplier = multiplier + 1

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```

### pm-t4-025 (mcq)

**Concepts:** Printing a multiplication table with a loop

**Item:** What does this program print? number = 3 m = 1 while m <= 3:     print(number, "*", m, "=", number * m)     m = m + 1

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```

### pm-t4-026 (mcq)

**Concepts:** Printing a multiplication table with a loop

**Item:** In this table program the number was never converted with int(), so number holds the string "5" (what input() returns). What does it print? number = "5" m = 1 while m <= 3:     print(number, "*", m, "=", number * m)     m = m + 1

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```

### pm-t4-027 (mcq)

**Concepts:** while loops with conditionals inside

**Item:** What does this program print? count = 1 while count <= 4:     mark = count * 20     if mark >= 50:         print(mark, "Passed")     else:         print(mark, "Failed")     count = count + 1

**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### pm-t4-028 (mcq)

**Concepts:** while loops with conditionals inside

**Item:** Slide 17's text says a student passes if the score is "higher than 50". Which condition matches those words exactly, and what happens to a mark of 50?

**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### pm-t4-029 (mcq)

**Concepts:** while loops with conditionals inside; The counter pattern: initialize, test, update

**Item:** This program should read exactly 4 marks, but it sometimes asks for more than 4. Why? count = 1 while count <= 4:     mark = float(input("Enter your final mark in the course: "))     if mark >= 50:         print("you Passed")         count = count + 1     else:         print("you Failed")

**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### pm-t4-030 (mcq)

**Concepts:** while loops with conditionals inside

**Item:** Slide 18's rule: a price higher than 50 gets a 40% discount, otherwise 20%. Discounted price = price - (price * discount). What does this program print? count = 1 price = 40 while count <= 3:     if price > 50:         discount = 0.4     else:         discount = 0.2     print(price - (price * discount))     price = price + 10     count = count + 1

**Cited:** Topic 4 — Iteration | Slide 18

```text
— Exercise

**Text**:
- Write python program that display the price of products after discount. The program accepts 3 products price purchased by the user.
- If the product price is higher than 50 OMR, the discount percentage is 40%. Otherwise, the discount percentage is 20%. Calculate the discount price for each product.
- Discounted price = product price –(product price * discount percentage )  (red; uses an en dash "–" as the minus sign)

(Footer: 18)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot, as visible on the slide):
'''
Enter product 1 price in OMR: 20.5
the dicounted price is  16.4 OMR
Enter product 2 price in OMR: 50
the dicounted price is  30.0 OM
```

### pm-t4-031 (mcq)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products

**Item:** In the Chapter 4 lab's practice-hours program, the if…else comes after the while loop. The loop reads 7 days of hours. How many times is "Good Practice!" or "Need more Practice!" printed? total_hours = 0 count = 0 while count < 7:     num_hours = float(input('Enter daily practice hours: '))     total_hours = total_hours + num_hours     count+=1  if total_hours>=10:     print('Good Practice!') else

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 12–13

```text
Write a Python program using a while loop to help students track their Python practice hours over seven days.

     - Accept the number of hours a student practices Python each day.
     - Calculate the total practice hours.
     - Display the total practice hours.
     - If the total hours are 10 or more, display "Good practice!"; otherwise, display "Need more practice!".

    
Then convert the program to use a for loop.     
```

```text
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
--- output ---
Good Practice!
Total hours =  14.0
```

### ex-t2-01 (coding)

**Concepts:** Escape sequences; Strings and quotes

**Item:** Topic 2, slide 15 asks for one statement that prints this line, with double quotes around the word sequence:  A string is a "sequence" of characters  The starter code tries to do it, but Python stops with a SyntaxError. Fix the program so it prints exactly that line. Use straight double quotes " around sequence (the slide draws curly quotes, but Python prints straight ones), and make sure no backs

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 15

```text
— Exercise

**Text**:
- Write a python statement to get the following output (using double quote)
- Target output: A string is a **“**sequence**”** of characters (quote marks in bold green)

**Code**: none
**Output shown** (target output to produce):
'''
A string is a “sequence” of characters
'''
**Diagrams/tables**: none
**Notes for curriculum**: Exercise on embedding double quotes inside a double-quoted string (escape \" ).
**Issues**: The target output uses curly quotes (U+201C/U+201D) around "sequence". The expected answer with escaped double quotes, e.g. `print("A string is a \"sequence\" of characters")`, would print straight `"` characters, so the displayed target does not match chara
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 10

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```

### ex-t2-02 (coding)

**Concepts:** Reading input with input(); Output with print()

**Item:** A teacher wants two statements about a student (Ch2 Practice II, cells 10–12).  Read three values, in this order: 1. the student's name 2. the attendance word (for example present or absent) 3. the test mark  Then print two lines, using the values exactly as they were typed: Ali is present today. Student Ali scored 90 marks in the test.  (Here the name was Ali, the attendance word present and the 

**Cited:** Chapter 2 Practice II (notebook) | Cells 10–11

```text
Example: Attendance Check

Scenario: The teacher wants to know if a student is present today.
    Read and accept the student's name 
    and whether the student is present or not present.
        Display the statement: Ali is present today. 
```

```text
Name = input("Enter your name:\t")
Att = input("Present or not present (Yes or No)\t")
print(Name + " is " + Att + " today.")
--- output ---
Enter your name:	Ali
Present or not present (Yes or No)	Present
Ali is Present today.
```
**Cited:** Chapter 2 Practice II (notebook) | Cell 12

```text
Example: Marks Entry

Scenario: The teacher wants to record a student's test marks.
Read name and marks and display the output: Student Sara scored 90 marks in the test.
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 67, 74

```text
— Input and Output

**Text**: none beyond the labels.

**Code** (curly quotes):
'''
Name= input( “Enter your name : ” )
print( “Hello ” + Name + “!”)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter Name :  Hilal
'''
'''
Hello Hilal !
'''

**Diagrams/tables**: A box labelled `Name`, with a blue arrow from the label `“Hilal”` (red) into it.

**Notes for curriculum**: Reading a string with `input()` and printing it with string concatenation (`+`).

**Issues**:
- Output mismatch: `“Hello ” + Name + “!”` produces `Hello Hilal!` with no space before "!", but the slide shows `Hello Hilal !`.
- The console prompt shows "Enter Name :", but the code's prompt is "Enter your name : ".
- The code 
```

```text
— Input and Output

**Text**: "Output:" (bold, underlined).

**Code** (curly quotes):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
print( “Hello” , name , “ ! Your age is ” , age , “ years” )
'''

**Output shown** (green):
'''
Enter your name : Hilal
Enter your age : 21
Hello Hilal ! Your age is 21 years
'''

**Diagrams/tables**: none

**Notes for curriculum**: Printing several values with a comma-separated `print()`.

**Issues**:
- Output mismatch. `print()` puts a space between items, and the string literals already contain leading and trailing spaces. The real output is `Hello Hilal  ! Your age is  21  years` (double spaces before "!", "21" and "years"), not t
```

### ex-t2-03 (coding)

**Concepts:** Reading input with input(); Output with print()

**Item:** Practice Exercises I, Exercise 2. Read three values, in this order: your name, your age and your college name. Then print exactly three lines:  Welcome SAMI ! Your age is 21 Your college name is UTAS  (Here the typed values were SAMI, 21 and UTAS.)

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 2

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 74–75

```text
— Input and Output

**Text**: "Output:" (bold, underlined).

**Code** (curly quotes):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
print( “Hello” , name , “ ! Your age is ” , age , “ years” )
'''

**Output shown** (green):
'''
Enter your name : Hilal
Enter your age : 21
Hello Hilal ! Your age is 21 years
'''

**Diagrams/tables**: none

**Notes for curriculum**: Printing several values with a comma-separated `print()`.

**Issues**:
- Output mismatch. `print()` puts a space between items, and the string literals already contain leading and trailing spaces. The real output is `Hello Hilal  ! Your age is  21  years` (double spaces before "!", "21" and "years"), not t
```

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```

### ex-t2-04 (coding)

**Concepts:** Type conversion with int() and float(); Arithmetic operators; Writing complete input → process → output programs

**Item:** Practice Exercises I, Exercise 3. Read three values, in this order: your name, your year of birth and your college name. Calculate the age and print exactly three lines:  Welcome Mohammed ! Your age is 31 Your college name is UTAS  Use 2021 as the current year. The worksheet's sample (born 1990, age 31) was made in 2021, so store it in a variable: current_year = 2021. Age = current_year − year of 

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 3

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 64

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

### ex-t2-05 (coding)

**Concepts:** Reading input with input(); Output with print(); Escape sequences

**Item:** Practice Exercises I, Exercise 1. Read four values, in this order: the student ID, the student name, the course name and the course ID. Then print the details like this (spacing between columns is up to you; \t tabs work well):  -------------------------------------------------- Student ID      :   16J123 Student Name    :   SAMI -------------------------------------------------- Course Details --

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 1

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 11

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
'''
>>>print("Welcome to \n UTAS")
'''
'''
>>>print("Welcome to \t UTAS ")
'''
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
'''
Welcome to
 UTAS
'''
'''
Welcome to          UTAS
'''
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curricul
```

### ex-t2-06 (coding)

**Concepts:** Writing complete input → process → output programs; Arithmetic operators; Type conversion with int() and float()

**Item:** Topic 2, slide 80. Read the radius of a circle (it may have decimals, e.g. 2.5). Compute the area with Pi = 3.14 and Area = Pi * radius * radius. Then print one line:  Area = 78.5  (That is the result for radius 5.) Use 3.14 exactly, not a longer value of Pi.

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 80

```text
— Exercise

**Text**:
- • Write a program that will read value in radius to compute the area of a circle. Then display the computed area. ("read", "compute" and "display" in red)
- Pi=3.14
- Area= Pi * radius * radius

**Code**:
'''
Pi=3.14
Area= Pi * radius * radius
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: An exercise combining input, a float conversion, an arithmetic expression and output.

**Issues**: none (minor grammar: "read value in radius").

---
```

### ex-t2-07 (coding)

**Concepts:** Arithmetic operators; Writing complete input → process → output programs; Type conversion with int() and float()

**Item:** Topic 2, slide 81. Read two numbers, first and then second (they may have decimals). Print the four results, one per line, in this order:  Sum = 21.0 Difference = 9.0 Product = 90.0 Division = 2.5  (Those are the results for 15 and 6.) Difference = first − second, Division = first / second. You may assume the second number is not 0.

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 81

```text
— Exercise

**Text**:
- • Write a python program that represent a calculator. Where the program <u>read two numbers</u> from user, perform <u>+ , - , \*  and /</u>  calculations, then <u>display</u> the result of calculations.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: A calculator exercise: input, the four arithmetic operators, output.

**Issues**: none (minor grammar: "represent" and "read" should be "represents" and "reads").

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
13.5
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---
```

### ex-t2-08 (coding)

**Concepts:** Arithmetic operators; Writing complete input → process → output programs

**Item:** Topic 2, slide 82. Read a person's weight in grams (it may have decimals). Convert it with Kilogram = gram / 1000 and Centigram = gram * 100. Print two lines, kilograms first:  Weight in kilograms: 65.0 Weight in centigrams: 6500000.0  (That is the result for 65000 grams.)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 82

```text
— Exercise

**Text**:
- • Write a measurement conversion program that will <u>read a person’s weight</u> in grams and will display its <u>converted value to kilogram and centigram</u>. Then <u>display</u> an appropriate output.
- • Kilogram = gram /1000
- • Centigram = gram * 100

**Code**: none (the formulas are listed above).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: A unit-conversion exercise: input, arithmetic, output.

**Issues**: none (the formulas are correct: 1 kg = 1000 g and 1 g = 100 cg).

---
```

### ex-t2-09 (coding)

**Concepts:** Reading input with input(); Type conversion with int() and float()

**Item:** Ch3 Lab IIII, cell 8: read two marks, Mark1 and then Mark2, and print the total and the average (average = total / 2). Marks may have decimals, such as 72.5.  The starter program has a bug. For the marks 70 and 85 it prints Total marks: 7085 and then stops with a TypeError. Fix it so that it prints:  Total marks: 155.0 Average: 77.5

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 8

```text
Write a program to read the marks from the user: Mark1, Mark2. Calculate the total marks and the average. Print the average and total marks. 
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 68–69, 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows point at the first two lines):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  10
>>> Enter another number   20
'''

**Diagrams/tables**: Box `num1` ← green arrow from `“10”`. Box `num2` ← green arrow from `“20”` (string values).

**Notes for curriculum**: Without conversion, `input()` gives strings "10" and "20".

**Issues**: The code uses curly quotes. The second console row has no ":" while the first does (cosmetic). The console shows `>>>` before the prompts. The slide has no title
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (same as slide 68; arrows now point at lines 3–4):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**:
'''
1020
'''

**Diagrams/tables**: Box `num1` ← `“10”`, box `num2` ← `“20”`, box `result` ← `“10”+”20”`.

**Notes for curriculum**: `+` on two strings concatenates, so "10"+"20" gives "1020", not 30.

**Issues**: In the label `“10”+”20”`, the second string opens with a closing curly quote ” (U+201D), so the quotes are mismatched. The output `1020` is correct. The code uses curly quotes. The slide has no title.

---
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

### ex-t2-10 (coding)

**Concepts:** Writing complete input → process → output programs; Type conversion with int() and float(); Order of operations (precedence)

**Item:** Practice Exercises I, Exercise 4. Read a student's marks for three courses, in this order: Programming 1, Web Technology and Calculus (marks may have decimals). Compute the average of the three marks and print a small table like this:  Courses            Marks ---------------------------------------- Programming 1      8.5 Web Technology     9.0 Calculus           10.0 ----------------------------

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 4

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```

### ex-t2-11 (coding)

**Concepts:** Writing complete input → process → output programs; Order of operations (precedence); Arithmetic operators

**Item:** Practice Exercises I, Exercise 5. Read the quiz score and then the exam score (they may have decimals). Use the worksheet's formulas:  Quiz Mark = quiz score / 40 * 50 + 50 Exam Mark = exam score / 60 * 50 + 50 Total Mark = the average of the Quiz Mark and the Exam Mark  Print the three marks with headings, one per line, in this order:  Quiz Mark: 75.0 Exam Mark: 87.5 Total Mark: 81.25  (Those are

**Cited:** Practice Exercises I (Worked Examples) | Page 1 · Exercise 5

```text
Worked Examples:

1. Write a Python program to read student id, name, course name and ID. Print based on the
   following output.




2. Write a Python program to read your name, age, and college name. Print as per the given
   output.




3. Write a Python program to read your name, year of birth, and college name.
   calculate the age and Print the information as per the given output:




4. Write a program that will read students marks for three courses: Programming 1, Web
   Technology and Calculus. Compute the average of the three marks and display your
   output similar to the one below:




 5.

```

### ex-t2-12 (coding)

**Concepts:** Writing complete input → process → output programs; Arithmetic operators; Type conversion with int() and float()

**Item:** Ch3 Lab II, cell 5. Read the total number of students in a class and then the number of students attending online (whole numbers). Calculate how many students attend offline (on campus) and the percentage of online students (online / total * 100). Print two lines, followed by a % sign on the second:  Number of students attending offline: 30 Percentage of online students: 25.0%  (That is the result

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 5

```text
Question:
Write a program to read the total number of students in a class and the number of students attending online.

Calculate how many students are attending offline (on campus).

Calculate the percentage of online students.

Print both results.
Sample output:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 64

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

### ex-t2-13 (coding)

**Concepts:** Arithmetic operators; Writing complete input → process → output programs

**Item:** Ch3 Lab III, cell 1. A pizza shop offers: buy 2 pizzas and get 1 free, so for every 3 pizzas 1 is free. Read the number of pizzas (a whole number) and then the price of one pizza (it may have decimals). Free pizzas = number of pizzas ÷ 3, counting whole pizzas only. Total cost = (number of pizzas − free pizzas) × price. Print one line:  Total cost: 15.0 OMR  The starter code (from cell 4 of the la

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 1–3

```text
Question

Write a Python program for a pizza shop.

The shop has a special offer:

Offer: Buy 2 pizzas and get 1 free.

Ask the customer to enter:

The number of pizzas they want
Price of one pizza

The program should calculate the number of free pizzas and then calculate the total amount to pay.
    
Formula
Free pizzas = Number of pizzas ÷ 3
Total Cost = (Number of Pizzas − Number of Free Pizzas) × Price
    
```

```text
pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas // 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
--- output ---
Total cost: 15.0 OMR
```
**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cell 4

```text
pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas / 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
--- output ---
Total cost: 4.0 OMR
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 33–34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
'''
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
'''
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

### ex-t2-14 (coding)

**Concepts:** Writing complete input → process → output programs; Arithmetic operators; Type conversion with int() and float()

**Item:** Ch3 Lab III, cell 5. The program reads the quantity and the price of four items, in this order: pencil quantity, pencil price, pen quantity, pen price, calculator quantity, calculator price, paper quantity, paper price. The input lines and the print lines are already written. Complete the missing calculations:  each item's cost = quantity × price Total Cost = Pencil Cost + Pen Cost + Calculator Co

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 5–7

```text
Question

Write a Python program to calculate the total cost of stationery items.

Ask the user to enter the quantity and price of each item:

Pencil
Pen
Calculator
Extra paper

Then calculate and display the total cost.

Total Cost = Pencil Cost + Pen Cost + Calculator Cost + Paper Cost

Where:

Pencil Cost = pencil quantity × pencil price
Pen Cost = pen quantity × pen price
Calculator Cost = calculator quantity × calculator price
Paper Cost = paper quantity × paper price
```

```text
pencil_qty = int(input("Enter pencil quantity: "))
pencil_price = float(input("Enter pencil price: "))

pen_qty = int(input("Enter pen quantity: "))
pen_price = float(input("Enter pen price: "))

calculator_qty = int(input("Enter calculator quantity: "))
calculator_price = float(input("Enter calculator price: "))

paper_qty = int(input("Enter paper quantity: "))
paper_price = float(input("Enter paper price: "))

pencil_cost = pencil_qty * pencil_price
pen_cost = pen_qty * pen_price
calculator_cost = calculator_qty * calculator_price
paper_cost = paper_qty * paper_price

total = pencil_cost + pen_cost + calculator_cost + paper_cost

print("Pencil cost:", pencil_cost, "OMR")
print("Pen cost:",
```

### ex-t2-15 (coding)

**Concepts:** Logical operators and short-circuit evaluation; Comparison (relational) operators; Boolean values

**Item:** Ch2 Practice II, cells 5–7. Read four values, in this order: 1. the student's age (a whole number) 2. has parent permission? (type yes or no) 3. has an ID card? (yes or no) 4. does the teacher allow? (yes or no)  Rules: a student can join the school trip if the age is 18 or more AND they have parent permission. A student can enter the library if they have an ID card OR the teacher allows.  Print t

**Cited:** Chapter 2 Practice II (notebook) | Cell 5

```text
Write a python program for the following:

A student can join the school trip if:

Age is 18 or more

AND has parent permission
```
**Cited:** Chapter 2 Practice II (notebook) | Cells 6–7

```text
Write a python program for the following:

A student can enter the library if:

Has an ID card

OR the teacher allows
```

```text
Write a python program for the following:
    
id_card = False
teacher_allowed = True

print(id_card or teacher_allowed)
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 43, 45

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • and (Boolean AND)
- ✔True if <u>Both</u> operands are True. (in red, "Both" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A AND B |
|---|---|---|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

**Notes for curriculum**: Logical operator `and` and its truth table.

**Issues**: Minor notation only. The table header says "A AND B" in uppercase, but the Python keyword is lowercase `and`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • or (boolean OR)
- ✔True if <u>Either</u> operands are True. (in red, "Either" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A OR B |
|---|---|---|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

**Notes for curriculum**: Logical operator `or` and its truth table.

**Issues**: Minor. The grammar "Either operands are" is awkward, and "either" could be read as exclusive, although the table correctly shows True when both are True. The header uses uppercase "OR" for the lowercase keyword `or`.

---
```

### ex-t3-01 (coding)

**Concepts:** Conditional execution: the if statement

**Item:** Write a program that asks the user to enter two whole numbers. Read each one with `int(input("Enter a number: "))`. If the second number is not equal to zero, divide the first number by the second (use `/`) and print the result in this form: `the result of dividing 1 / 2 = 0.5` (with the real numbers). If the second number is zero, skip the division and print nothing, so the program does not crash

**Cited:** Topic 3 — Conditional Execution | Slide 15

```text
— EXERCISE

**Text**:
- Write a program that ask the user to enter two numbers. If the second numbers is not equals to zero, calculate the division of the two numbers and display the result of division.

**Code**: none (only sample runs are shown)

**Output shown** (two console screenshots separated by a horizontal line):
Run 1 (second number is 0 — nothing else printed):
'''
Enter a number: 2
Enter a number: 0
'''
Run 2:
'''
Enter a number: 1
Enter a number: 2
the result of dividing 1 / 2 = 0.5
'''

**Diagrams/tables**: A horizontal line separates the two sample runs.

**Notes for curriculum**: Exercise: input of two numbers, `!=` comparison to guard against division by zero, `/` (true divi
```

### ex-t3-02 (coding)

**Concepts:** Conditional execution: the if statement

**Item:** Ask the student for their Quiz 1 score out of 10 with the prompt `What is your score in Quiz 1: ` and read it with `float()` (scores such as 7.5 are allowed). - If the score is greater than or equal to 7.5, print `congratulation on your good score` - At the end, ALWAYS print `thank you for sharing your score` — whatever the score is.

**Cited:** Topic 3 — Conditional Execution | Slide 17

```text
— EXERCISE

**Text**:
- Write a program that asks the user about his score in Quiz 1 out of 10.
  - ➢ if the student score is higher than or equals to **7.5** (red) then display a message “congratulation on your good score” .
  - ➢ At the end, it always display message “thank you for sharing your score”.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>=` on a float score, plus an unconditional final message after the if-block.

**Issues**: The source file contains two sample-run screenshots (Picture 3, Picture 4) that are completely covered by a white rectangle (no animation), so nothing
```

### ex-t3-03 (coding)

**Concepts:** Conditional execution: the if statement

**Item:** This airline program should ask for the luggage weight (decimals such as 50.5 are allowed). - If the weight is higher than 50, print `There is a $25 charge for luggage that heavy.` - At the end, ALWAYS print `Thank you for your business.` — for every weight. A weight of exactly 50 is not higher than 50, so there is no charge. The starter code has three bugs. Find and fix all of them.

**Cited:** Topic 3 — Conditional Execution | Slide 18

```text
— EXERCISE

**Text**:
- Write a program for an airline company. that ask the user about his luggage weight.
  - ➢ if the luggage weight is higher than 50, it shows a warning message that he will be paying extra 25$ for his luggage.
  - ➢ At the end, it always thank the user for his business.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>` and an always-executed closing statement.

**Issues**: The source file contains two sample-run screenshots and a separator line that are completely covered by a white rectangle (no animation), so nothing is visible on the slide. For reference only, th
```
**Cited:** Topic 3 — Conditional Execution | Slides 6, 16

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```

### ex-t3-04 (coding)

**Concepts:** Alternative execution: if…else; Chained conditionals: if…elif…else

**Item:** The starter code is the solution from Topic 3, slide 26. It has a problem: when the user types exactly 50 it prints `the number you entered is greater than 50`, which is false. Modify the program so that: - a number below 50 prints `the number you entered is smaller than 50` - exactly 50 prints `the number you entered is equal to 50` - a number above 50 prints `the number you entered is greater th

**Cited:** Topic 3 — Conditional Execution | Slide 26

```text
— EXERCISE

**Text**:
- Write a program that ask the user for a number. Then check if the number is greater that 50 or less than 50.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the input prompt, straight single quotes in the prints; bodies indented 4 spaces; this picture has an on-click entrance animation):
'''
x=int(input("Enter a number: "))
if x < 50:
    print('the number you entered is smaller than 50')
else:
    print('the number you entered is greater than 50')
'''

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none

**Notes for curriculum**: Exercise and solution: if-else comparing input against a threshold.

**Issues**: Typo "gr
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### ex-t3-05 (coding)

**Concepts:** Conditional expression (single-line if)

**Item:** Ask the user for their age with the prompt `Please enter your age: ` and read it with `int()`. Using a conditional expression (`value1 if condition else value2`, on one line), store `Minor` in a variable when the age is less than 21, and `Adult` when the age is 21 or more. Then print the variable. Do not use an if statement. Note: the slide's solution only shows `'minor'` because Jupyter echoes th

**Cited:** Topic 3 — Conditional Execution | Slide 30

```text
— Exercise

**Text**:
- A program that asks the user about his age. If the user enter number less than 21 it prints **Minor**. If the user enter number greater or equals to 21 it prints **Adult.** Using *conditional expression* (italic, underlined).

**Code** (screenshot, Jupyter-style cell; straight double quotes for the prompt, straight single quotes for the strings; the last line is a bare `s`):
'''
age=int(input("Please enter your age: "))
s = 'minor' if age < 21 else 'adult'
s
'''

**Output shown** (input 12; Jupyter echoes the value of `s` with quotes):
'''
Please enter your age: 12

'minor'
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression used to choose
```

### ex-t3-06 (coding)

**Concepts:** Conditional expression (single-line if)

**Item:** Read two whole numbers with the prompts `Enter number 1: ` and `Enter number 2: ` (use `int()`). Use a single-line conditional expression to store the larger of the two numbers in a variable. Then print `The larger number is` followed by that value, for example `The larger number is 12`. If both numbers are equal, print that value. Do not use an if statement.

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 14, 18

```text
Question:
Write a single-line Python statement that:
reads two integers from the user, finds the larger number, and prints it to the screen.
```

```text
n = int(input('enter number 1'))
n2 = int(input('enter number 2'))
result = n if n>n2 else n2
print('The larger no. is ', result)
--- output ---
The larger no. is  12
```

### ex-t3-07 (coding)

**Concepts:** Conditional expression (single-line if)

**Item:** Complete the program. It reads a student's final score out of 100 as a whole number. Replace `___` with a conditional expression so that `result` is `Pass` when the score is 50 or higher, and `Fail` when it is lower. The program then prints `result`. Do not add an if statement.

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 19–20

```text
Question:

Write a single-line statement that reads a student's final score (out of 100)
and prints "Pass" if the score is 50 or higher, or "Fail" if it is lower.
```

```text
n = int(input('enter number 1'))

result = 'Pass' if n>=50 else 'Fail'
print(result)
--- output ---
Pass
```

### ex-t3-08 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Read two numbers x and y with `float()`, using the prompts `Enter value of x: ` and `Enter value of y: `. Print exactly one message: - `x is bigger` if x is greater than y - `y is bigger` if y is greater than x - `x and y are the same` if they are equal

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 1

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 3 — Conditional Execution | Slide 13

```text
— Exercise

**Text**:
- write a program that ask the user to enter two numbers and check if these two numbers are the same.

**Code**: none (only a sample run is shown)

**Output shown** (console screenshot; user entered 1 and 1):
'''
Enter value of x:1
Enter value of y:1
x , y are the same
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: read two numbers with input() and use an if with `==` to test equality.

**Issues**: Grammar "write a program that ask" (lowercase "write", "ask" for "asks") — as shown. Output line has a space before the comma ("x , y are the same"), as shown; no solution code is provided.
```
**Cited:** Topic 3 — Conditional Execution | Slide 35

```text
— (no title; title bar empty) Chained conditional code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style cell, image stretched vertically; straight double quotes for prompts, straight single quotes in prints; bodies indented 4 spaces; `else:` and its print are on the same line):
'''
x=int(input("Enter 1st number:"))
y=int(input("Enter 2nd number:"))
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else: print('x and y are equal')
'''

**Output shown** (inputs 5 and 10):
'''
Enter 1st number:5
Enter 2nd number:10
x is less than y
'''

**Diagrams/tables**: Same flowchart as slide 34 (left side): `x < y` → Yes → `print(‘l
```

### ex-t3-09 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Read a number with the prompt `Enter a number: ` using `float()`. - If it is greater than zero, print `The number is positive` - If it is less than zero, print `The number is negative` - Otherwise, print `The number is zero`

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 2

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 22–23

```text
# Example
Number type check: ask the user to enter a number.
If the number is greater than zero, 
then display a positive number
If the number is less than zero, 
then display a negative number
Otherwise, display zero
```

```text
number = int(input('Enter a number = '))
if number>0:
    print('a positive number')
elif number<0:
    print('a negative number')
else:
    print('Display zero!')
    
--- output ---
Enter a number = 0
Display zero!
```

### ex-t3-10 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** A student gets bonus marks for studying: - 5 or more study hours → 10 bonus marks - 3 or more hours (but less than 5) → 5 bonus marks - less than 3 hours → no bonus (0) The program reads the test marks and then the number of study hours (both with `float()`) and prints `The final marks are:` followed by marks + bonus. The starter code has two bugs: one stops it from running at all, and one gives t

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 29, 31

```text
# E.g. 2:
A student has a test score.
Read/ accept the test marks and the number of hours, and display the final marks.
    
If the student studies more hours, they get bonus marks.

If study hours are greater than or equal to 5, add 10 bonus marks

If study hours are greater than or equal to 3, add 5 bonus marks

Otherwise, no bonus
```

```text
# Step 1: Read and accept the inputs from the user
marks = float(input("Enter the test marks: "))
hours = float(input("Enter the number of study hours: "))

# Step 2: Determine the bonus based on study hours
if hours >= 5:
    bonus = 10
elif hours >= 3:
    bonus = 5
else:
    bonus = 0


final_marks = marks + bonus

print("The final marks are:", final_marks)
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### ex-t3-11 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** The program reads a student's daily study hours (`float()`), calculates the weekly hours (daily × 7), prints the study category, and then prints `Total Weekly Hours =` followed by the weekly total. Category table (weekly hours): - 35 or more → `Very Hardworking` - 20 or more (but less than 35) → `Good` - otherwise → `Needs Improvement` The program runs, but it gives the wrong category: for 5.5 dai

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 24

```text
Write a Python program:

Ask the student to enter their daily study hours.

Calculate total weekly study hours.

Display total weekly study hours.

Sample Output:
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 25

```text
daily_hours = float(input('Enter Your Daily Hours:\t'))
total_weekly = daily_hours*7
if daily_hours >= 35:
    print('Very Hardworking')
elif daily_hours >= 20:
    print('Good')
else:
    print('Needs Improvement')

print('Total Weekly Hours = ', total_weekly)    
    
--- output ---
Enter Your Daily Hours:	5.5
Needs Improvement
Total Weekly Hours =  38.5
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 27

```text
daily_hours = float(input('Enter Your Daily Hours:\t'))
weekly_hours = daily_hours*7
# Display total weekly study hours
print(f"\nTotal weekly study hours: {weekly_hours:.1f}")

if weekly_hours >=35:
    print('Very Hardworking.')
elif weekly_hours >=20:
    print('Good.')
else:
    print('Needs Improvement')

print('Total weekly Hours = ', weekly_hours)    
--- output ---
Total weekly study hours: 38.5
Very Hardworking.
Total weekly Hours =  38.5
```

### ex-t3-12 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Write a program for a fruit shop. Read the fruit name (prompt `Enter fruit: `) and then the quantity in kilograms (prompt `Enter quantity in kg: `, use `float()`). Prices per kg: mango 2.000 OMR, banana 1.000 OMR, watermelon 0.500 OMR. Fruit names are typed in lowercase, exactly as written here. - For one of these fruits, print `Total cost:` followed by quantity × price and `OMR`, e.g. `Total cost

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 9–10

```text
Class Exercise: Fruit Shop

Question

Write a Python program for a fruit shop. The program should ask the customer to enter:

The fruit name
The quantity in kilograms

The shop sells mango, banana, and watermelon.

The shop has three fruits with different prices:

Mango - 2.000 OMR per kg
Banana - 1.000 OMR per kg
Watermelon - 0.500 OMR per kg    

Condition	                                 Output
If the fruit is mango	                Total cost: 6.0 OMR
If the fruit is banana	                Total cost: 3.0 OMR
If the fruit is watermelon	            Total cost: 1.5 OMR
If the fruit is none of these	        Fruit not available


The program should calculate and display the total cost. Formul
```

```text
fruit = input("Enter fruit: ")
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
--- output ---
Total cost: 3.0 OMR
```

### ex-t3-13 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Read, in this order: the student's name, ID number, quiz mark, mid mark and final mark. Use the prompts `Enter your name: `, `Enter your ID no: `, `Enter your quiz mark: `, `Enter your mid mark: ` and `Enter your final mark: `, and read the three marks with `float()`. Calculate total = quiz + mid + final and print `Total marks:` followed by the total. Then find the grade: - total 90 or more → A - 

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 4

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 3 — Conditional Execution | Slide 38

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 12

```text
name = input('Enter name ')
id = input('Enter ID ')
quiz = float(input('Quiz marks '))
mid = float(input('MID marks '))
final = float(input('Final marks '))

total = quiz + mid + final

if total >= 90:
    Grade = 'A'
elif total >= 80 and total <=89:
    Grade = 'B'
elif total >=70 and total <=79:
    Grade = 'C'
elif total >= 60 and total <= 69:
    Grade = 'D'
elif total<60:
    Grade = 'F'

print('Total marks = ', total)
print('Your grade = ', Grade)
    
    
--- output ---
Total marks =  63.0
Your grade =  D
```

### ex-t3-14 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Read two numbers with `float()` (prompts `Enter first number: ` and `Enter second number: `), then the user's choice with `int()` (prompt `Enter your choice (1-5): `). - 1 → addition - 2 → subtraction (first − second) - 3 → multiplication - 4 → modulus (first % second) - 5 → division (first / second) For choices 1–5 print `Result:` followed by the answer, e.g. `Result: 14.0`. For any other choice 

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 5

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 14

```text
num1 = float(input('Num 1:\t '))
num2 = float(input('Num 2:\t '))
Choice = int(input('Enter your choice:\t '))

if Choice == 1:
    result = num1 + num2
    print('Result ', result)

elif Choice == 2:
    result = num1 - num2
    print('Result ', result) 

elif Choice == 3:
    result = num1 * num2
    print('Result ', result)

elif Choice == 4:
    result = num1 % num2
    print('Result ', result)

elif Choice == 5:
    result = num1 / num2
    print('Result ', result)

else:
    print('Error')
--- output ---
Result  1.0
```

### ex-t3-15 (coding)

**Concepts:** Chained conditionals: if…elif…else; Combining conditions with and / or

**Item:** This program (based on Topic 3, slide 37) should print `Largest number:` followed by the largest of three whole numbers. It works for 5, 8, 6, but it is wrong when the two biggest numbers are equal: for 5, 5, 3 it prints `Largest number: 3`. Fix the conditions so the program prints the correct largest value for every input, including ties. Keep the same prompts and the same output message.

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 3

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 3 — Conditional Execution | Slides 36–37

```text
— Chained Conditionals

**Text**:
- **Exercise** (red, underlined) – a python program that will find the largest among three numbers.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: find the largest of three numbers using if-elif-else.

**Issues**: none (slide is an exercise prompt with no solution; the solution appears on slide 37).
```

```text
— (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
'''
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
'''

**Output shown** (inputs 5, 8, 6):
'''
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
'''

**Diagrams/tables**: none

**Notes for curriculum**: 
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 10

```text
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
num3 = float(input("Enter third number: "))

if num1 >= num2 and num1 >= num3:
    largest = num1

elif num2 >= num1 and num2 >= num3:
    largest = num2

else:
    largest = num3

print("Largest number:", largest)
```

### ex-t3-16 (coding)

**Concepts:** Combining conditions with and / or; Alternative execution: if…else

**Item:** The program reads two answers: first the weather (`raining` or `not raining`), then the transport situation (`transport` or `no transport`). Rule: if it is raining OR there is no transport, print `Attend the online class!`; otherwise print `Stay on Campus`. Always finish with `Check your status!!`. The starter code always prints `Stay on Campus`, whatever the user types. Find out why and fix the c

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 10

```text
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 11

```text
user = input('Enter Yes or No:\t')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Enter Yes or No:	Yes
Stay on Campus
Check your status!!
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cell 12

```text
#user = input('Enter Yes or No:\t')
case1 = input('Case is raining or not raining:\t')
case2 = input('no transport / transport:\t')
if case1 == 'raining' and case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Case is raining or not raining:	raining
no transport / transport:	transport
Stay on Campus
Check your status!!
```

### ex-t3-17 (coding)

**Concepts:** Combining conditions with and / or; Alternative execution: if…else

**Item:** Read, in this order: the customer's name (`Enter customer name: `), the purchase amount in OMR with `float()` (`Enter purchase amount: `), and whether they are a member (`Are you a member? (yes/no): `, typed as `yes` or `no`). A 2% discount is given only when the amount is more than 50 OMR AND the customer is a member. Use one `if` with `and` to combine the two conditions. If the discount applies,

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 11–12

```text
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amo
```

```text
name = input("Enter customer name: ")
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
```

### ex-t3-18 (coding)

**Concepts:** Combining conditions with and / or; Chained conditionals: if…elif…else

**Item:** A university decides whether to hold physical classes after three days of rain. Read the rainfall for each day in mm with `float()`, using the prompts `Enter the rainfall for day1 (in mm): `, `Enter the rainfall for day2 (in mm): ` and `Enter the rainfall for day3 (in mm): `. Calculate the total and the average (total / 3) and print them as `Total = <total>` and `Average = <average>`. Then print e

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 1–2

```text
A university wants to decide whether to conduct physical classes after three consecutive days of rain.

Write a Python program that asks the user to enter the rainfall recorded on each day (in mm)
and then calculates the average rainfall and total rainfall.

    The program should make a decision based on the following rules:

1. If the average rainfall is 30 mm or more, physical classes are canceled.

2. Otherwise, if the average rainfall is 20 mm or more, or the rainfall on any single day is 40 mm or more, 
display "Weather conditions require further assessment."
3. Otherwise, if the total rainfall over the three days is less than 15 mm, 
display "Rainfall has been low over the three days.
```

```text
day1 = float(input('Enter the rainfall for day1 (in mm): '))
day2 = float(input('Enter the rainfall for day2 (in mm): '))

day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = day1+day2+day3

avg = total/3

print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')
--- output ---
Total =  13.0
Average =  4.333333333333333
Rainfall has been low over the three days.
```

### ex-t3-19 (coding)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Write a discount program for a hypermarket (Practice Exercises III, Ex 6). First print the banner `******WELCOME TO CARREFOUR HYPERMARKET******`. Then read the customer's name (`Enter your name: `), the price of item 1 (`Enter Price of Items1: `) and the price of item 2 (`Enter Price of Items2: `). Read both prices with `float()`. Add them to get the total, then apply exactly ONE rule, checking th

**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 6

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Practice Exercises III (Conditionals) | Page 2 · Exercise 6

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```

### ex-t3-20 (coding)

**Concepts:** Nested conditions

**Item:** Read a whole number with the prompt `Enter number: `. - If the number is less than or equal to 15, print `play basketball` — except when the number is exactly 10: then print `play football` instead. - If the number is greater than 15, print `Don't play game`. Use a nested if (an if…else inside another if…else). The message contains an apostrophe, so write it in double quotes: `"Don't play game"`.

**Cited:** Topic 3 — Conditional Execution | Slide 46

```text
— (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
'''
n = int(input("Enter  number:"))
if (n<=15):
    if (n 
```

### ex-t3-21 (coding)

**Concepts:** Nested conditions

**Item:** Read the student's attendance percentage (`Enter attendance: `, use `float()`) and the number of completed assignments (`Enter completed assignments: `, use `int()`). - If attendance is 75 or above, check the assignments: 8 or more → print `Eligible for Exam`; fewer than 8 → print `Complete More Assignments`. - If attendance is below 75, print `Attendance Requirement Not Met` (the assignments do n

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 25–26

```text
Example
Write a Python program to read a student’s attendance and completed assignments.

If attendance is 75% or above, check the number of completed assignments.
If the student completed 8 or more assignments, print “Eligible for Exam”.
Otherwise, print “Complete More Assignments”.
If attendance is below 75%, print “Attendance Requirement Not Met”.
```

```text
attendance = float(input("Enter attendance: "))
assignments = int(input("Enter completed assignments: "))

if attendance >= 75:
    if assignments >= 8:
        print("Eligible for Exam")
    else:
        print("Complete More Assignments")
else:
    print("Attendance Requirement Not Met")
```
**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 18–19

```text
Question 1:

Write a Python program to read a student's attendance percentage and mark.

First, check whether the student's attendance is 75% or above.

Only if the attendance is 75% or above, check whether the student's mark is 60 or above.

If both conditions are satisfied, display "Student Passed".

***Important: If attendance is below 75%, do not check the mark.
```

```text
attendance = float(input('Enter Attendance Percentage:\t'))
marks = float(input('Enter Marks:\t'))

if attendance >= 75:
    if marks>=60:
        print('Student Passed')
```

### ex-t3-22 (coding)

**Concepts:** Nested conditions

**Item:** Complete this nested if…else program. It reads a mark with `float()`. The rules: - 80 or above → `Excellent` - 60 or above, but below 80 → `Passed` - below 60 → `Failed` Replace `___` with an inner if…else. Note: the lab question (cell 29) says 'below 50 → Failed', which leaves marks from 50 up to 60 without a rule. The lab's solution (cell 30) prints `Failed` for every mark below 60, and that is 

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 28–30

```text
# Nested if–else
# Need different actions for all possible outcomes

if condition1:
    if condition2:
        statements1
    else:
        statements2
else:
    statements3
```

```text
Question 1:

Write a Python program to read a student's mark.

If the mark is 60 or above, check whether it is 80 or above.
If it is 80 or above, display "Excellent".
Otherwise, display "Passed".
If the mark is below 50, display "Failed".
```

```text
marks = float(input('Enter Marks:\t'))

if marks >= 60:
    if marks >= 80:
        print('Excellent')
    else:
        print('Passed')
        
else:
    print('Failed')
--- output ---
Failed
```

### ex-t3-23 (coding)

**Concepts:** Nested conditions

**Item:** Read the user's height in feet and weight in kg with `float()` (prompts `Enter your height in feet: ` and `Enter your weight in kg: `). Calculate ratio = weight / height. (This is what the slide 48 solution does. Slide 47's text says height divided by weight, but that would make almost every ratio smaller than 1.) Then use nested if…else: - ratio greater than 5: if the ratio is greater than 20 pri

**Cited:** Topic 3 — Conditional Execution | Slide 47

```text
— Exercise

**Text**:
- Write a program to determine the shirt size of a user.
- The program will read the height and weight of the user.
- Calculate the ratio by dividing the height by the weight.
-  If ratio is greater than 5, check if it is greater than or less than 20.
  - if ratio is greater than 20, print “ Size XXL”
  - if ratio is less than 20, print “Size L”
- If ratio is less than 5, check if it is greater than 3.
  - if ratio greater than 3, print “Size M”
  - otherwise print “Size S”

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: nested if-else on a computed ratio (two levels of decisions).

**Issues**: The text says ratio 
```
**Cited:** Topic 3 — Conditional Execution | Slide 48

```text
— solution

**Text**: none besides the code.

**Code** (screenshot of a Jupyter cell labelled `In [10]:`; straight double quotes; no trailing space in the input prompts; indentation 4 and 8 spaces; typo "sixe" is in the original):
'''
h=int(input("enter your height in feet"))
w=int(input("enter your weight in Kg"))
r=w/h
if r>5:
    if(r>20):
        print("size XXL")
    else:
        print("sixe L")
else:
    if(r>3):
        print("Size M")
    else:
        print("Size S")
'''

**Output shown** (inputs 5 and 50; the prompts have no trailing space so the input is glued to the prompt):
'''
enter your height in feet5
enter your weight in Kg50
sixe L
'''

**Diagrams/tables**: none

**Notes f
```

### ex-t3-24 (coding)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else

**Item:** Read the employee name (`Enter employee name: `), the rate per day (`Enter rate per day: `, use `float()`) and the number of days worked (`Enter number of days worked: `, use `int()`). Salary = rate per day × number of days. The tax is a percentage of the whole salary: - salary up to and including 500 → 5% - salary more than 500, up to and including 1000 → 10% - salary more than 1000 → 15% The sli

**Cited:** Topic 3 — Conditional Execution | Slide 49

```text
— Exercise

**Text**:
- A company needs a **tax calculator**.
- **The user will enter the following:** Employee Name, rate Per Day and Number of days worked.
- **Calculate and display the salary and tax for the employee.**
- **Salary = rate per day * the number of days.**
- The tax is computed based on the salary. See Tax computation based on salary range as indicated on the table below:

**Code**: none

**Output shown**: none

**Diagrams/tables**: Table (salmon header row, two columns):

| Salary | Tax |
|---|---|
| 1-500 | 5% |
| 500-1000 | 10% |
| More than 1000 | 15% |

**Notes for curriculum**: Exercise: input of string and numeric values, arithmetic, and an if-elif-else chain over sala
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 27–28

```text
A company needs a tax calculator. 
The user will enter the following: Employee Name, rate Per Day and Number of days worked. 
Calculate and display the salary and tax for the employee.
Salary = rate per day * the number of days. 
The tax is computed based on the salary. See Tax computation based on salary range as indicated on the table below:

Salary	                   Tax
1-500	                    5%
500-1000	                10%
more than1000	            15%
```

```text
name = input("Enter employee name: ")
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
--- output ---
Employee name: Ali
Salary: 4000.0
Tax: 600.0
```

### ex-t3-25 (coding)

**Concepts:** Chained conditionals: if…elif…else; Nested conditions; The type() function

**Item:** Read a choice with `int()` (prompt `Enter your choice (1-3): `). Then: - Choice 1: read a word (`Enter a string: `). If it is equal to `UTAS` (capital letters), print `The strings are equal`; otherwise print `The strings are not equal`. - Choice 2: read any value with `input()` and do NOT convert it (`Enter any value: `). Print its data type with `print(type(value))`. - Choice 3: read two numbers 

**Cited:** Practice Exercises III (Conditionals) | Page 2 · Exercise 7

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 3 — Conditional Execution | Slide 40

```text
— Nested Conditions

**Text**:
- We can write an entire if… else statement in another if… else statement called nesting, and the statement is called **nested if**.
- In a **nested if** construct, you can have an if … elif … else construct inside an if … elif.. Else construct.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): arrow into diamond "Test Expression". "True" ↓ box "Body of if". "False" (red) → diamond "Nested test expression"; its "True" ↓ box "Body of nested if"; its "False" (red) ↓ box "Body of nested else". The three body boxes merge into box "Statement just below if", with an arrow continuing downward.

**Notes for curriculum**: Def
```

### ex-t4-01 (coding)

**Concepts:** The counter pattern: initialize, test, update; The while loop: syntax and flow

**Item:** Topic 4, slide 9 prints the numbers 1 to 5. Make it more general: read a whole number N (1 or more) and use a while loop to print the numbers from 1 to N, each on its own line. Print nothing else.  For N = 5 the output is: 1 2 3 4 5

**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### ex-t4-02 (coding)

**Concepts:** The counter pattern: initialize, test, update; The while loop: syntax and flow

**Item:** Topic 4, slide 11 counts down from 5 to 1. The starter program reads a whole number N (1 or more) and should count down from N to 1, one number per line, and print nothing else. Replace each ___ to complete the while loop.  For N = 5 the output is: 5 4 3 2 1

**Cited:** Topic 4 — Iteration | Slide 11

```text
— The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
'''
N=5
while N>=1:
    print(N)
    N=N-1
'''

**Output shown**:
'''
5
4
3
2
1
'''

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---
```

### ex-t4-03 (coding)

**Concepts:** Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** Topic 4, slide 12 adds the numbers from 1 to 10 and prints the sum is 55. Make it general: read a whole number N (1 or more), use a while loop to add 1 + 2 + … + N, and print the result once, after the loop:  the sum is 55  (That is the result for N = 10.)

**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```

### ex-t4-04 (coding)

**Concepts:** Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** Topic 4, slide 13: read 5 numbers from the user (they may have decimals) and print their average (average = sum of the five numbers / 5):  The average is 30.0  The starter program has a bug: the program never stops — after the fifth number it keeps asking for more. Fix it so it reads exactly 5 numbers and then prints the average.

**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```
**Cited:** Topic 4 — Iteration | Slide 10

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### ex-t4-05 (coding)

**Concepts:** Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** Topic 4, slide 13: write a loop to find and print the factorial of a number. Read a whole number n (0 or more) and use a while loop to compute n! = 1 × 2 × … × n. Print one line:  The factorial of 5 is 120  By definition 0! = 1.

**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```

### ex-t4-06 (coding)

**Concepts:** Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** Topic 4, slide 14. First read N, how many numbers the user wants to enter (1 or more). Then use a while loop to read N numbers (they may have decimals). Calculate average = sum of numbers / N and print one line:  the average value of the 4 numbers is 5.0  (That is the slide's sample: N = 4 and the numbers 2, 4, 6, 8. The slide writes "the 4 number"; "numbers" is the correct English.)

**Cited:** Topic 4 — Iteration | Slide 14

```text
— Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
'''

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

*
```

### ex-t4-07 (coding)

**Concepts:** Printing a multiplication table with a loop; The counter pattern: initialize, test, update

**Item:** Topic 4, slide 15. Read a whole number and use a while loop to display its multiplication table. The last multiplier is 10. Print a heading line and then one line per multiplier, in this format:  Multiplication table: 5 * 1 = 5 5 * 2 = 10 … 5 * 10 = 50  (That is the table for 5.) The spacing between the parts may differ, but each line shows the number, *, the multiplier, = and the result.

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```

### ex-t4-08 (coding)

**Concepts:** while loops with conditionals inside; Alternative execution: if…else

**Item:** Topic 4, slide 17. Use a while loop to read the final marks of 4 students, one at a time (whole numbers). Straight after reading each mark, print the result for that student:  • a mark of 50 or more → you Passed • a mark below 50 → you Failed  Print only these results, one line per student. For the marks 45, 80, 70 and 50 the output is: you Failed you Passed you Passed you Passed

**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### ex-t4-09 (coding)

**Concepts:** while loops with conditionals inside; Alternative execution: if…else

**Item:** Topic 4, slide 18. Use a while loop to read the prices of 3 products in OMR (they may have decimals), one at a time. After reading each price, print its price after discount:  • price of 50 OMR or more → 40% discount • price below 50 OMR → 20% discount  Discounted price = price − (price × discount percentage). For the prices 20.5, 50 and 60 the output is:  the discounted price is 16.4 OMR the disc

**Cited:** Topic 4 — Iteration | Slide 18

```text
— Exercise

**Text**:
- Write python program that display the price of products after discount. The program accepts 3 products price purchased by the user.
- If the product price is higher than 50 OMR, the discount percentage is 40%. Otherwise, the discount percentage is 20%. Calculate the discount price for each product.
- Discounted price = product price –(product price * discount percentage )  (red; uses an en dash "–" as the minus sign)

(Footer: 18)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot, as visible on the slide):
'''
Enter product 1 price in OMR: 20.5
the dicounted price is  16.4 OMR
Enter product 2 price in OMR: 50
the dicounted price is  30.0 OM
```

### ex-t4-10 (coding)

**Concepts:** Accumulating totals, averages and products; Alternative execution: if…else

**Item:** Ch4 Lab IIII, cell 12. Use a while loop to read the number of hours a student practised Python on each of 7 days (hours may have decimals). Calculate the total, print it, and then print one message:  • total of 10 hours or more → Good practice! • otherwise → Need more practice!  For 2, 1.5, 3, 2, 0.5, 3 and 2 the output is: Total hours = 14.0 Good practice!

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 12–13

```text
Write a Python program using a while loop to help students track their Python practice hours over seven days.

     - Accept the number of hours a student practices Python each day.
     - Calculate the total practice hours.
     - Display the total practice hours.
     - If the total hours are 10 or more, display "Good practice!"; otherwise, display "Need more practice!".

    
Then convert the program to use a for loop.     
```

```text
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
--- output ---
Good Practice!
Total hours =  14.0
```

### ex-t4-11 (coding)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; Combining conditions with and / or

**Item:** Ch4 Lab IIII, cell 1. Read the rainfall (in mm, may have decimals) for 3 days in a row, using a while loop. Print the total and the average (average = total / 3), then exactly one decision:  1. If the average is 30 mm or more: physical classes are canceled 2. Otherwise, if the average is 20 mm or more, or the rainfall on any single day is 40 mm or more: Weather conditions require further assessmen

**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 1–2

```text
A university wants to decide whether to conduct physical classes after three consecutive days of rain.

Write a Python program that asks the user to enter the rainfall recorded on each day (in mm)
and then calculates the average rainfall and total rainfall.

    The program should make a decision based on the following rules:

1. If the average rainfall is 30 mm or more, physical classes are canceled.

2. Otherwise, if the average rainfall is 20 mm or more, or the rainfall on any single day is 40 mm or more, 
display "Weather conditions require further assessment."
3. Otherwise, if the total rainfall over the three days is less than 15 mm, 
display "Rainfall has been low over the three days.
```

```text
day1 = float(input('Enter the rainfall for day1 (in mm): '))
day2 = float(input('Enter the rainfall for day2 (in mm): '))

day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = day1+day2+day3

avg = total/3

print('Total = ', total)
print('Average = ', avg)

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or day1>=40 or day2>=40 or day3>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')
--- output ---
Total =  13.0
Average =  4.333333333333333
Rainfall has been low over the three days.
```
**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 3–4

```text
# Uses a while loop to input rainfall for three days.
```

```text
#day1 = float(input('Enter the rainfall for day1 (in mm): '))
#day2 = float(input('Enter the rainfall for day2 (in mm): '))

#day3 = float(input('Enter the rainfall for day3 (in mm): '))

total = 0
count = 0
while count<3:
    days = float(input('Enter the rainfall for 3 days (in mm): '))
    total = total+days
    avg = total/days   

    count+=1
print('Total = ', total)
print('Average = ', avg)      

if avg >= 30:
    print('physical classes are canceled')

elif avg >= 20 or days>=40:
    print('Weather conditions require further assessment.')
    
elif total <15:
    print('Rainfall has been low over the three days.')

else:
    print('physical classes can proceed')

 
--- output ---
To
```

### x1-mcq-01 (mcq)

**Concepts:** Values and data types; Numbers: int, float and complex

**Item:** Which of these values is a float?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 2, 4–6

```text
— Values and Types

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
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex
- Box "integers" with arrow pointing up to **int**
- a number, positive or negative, **without decimals**, and of unlimited length.
- Example box:
  '''
  2
  -56
  0
  76789999865433331
  '''
  (on the slide the last number wraps as "76789999865433" / "331"; it is one number, 76789999865433331)

**Code**: none
**Output shown**: none
**Diagrams/tables**: "Numbers" box with three arrows to red boxes **int**, **float**, **complex**; "integers" box with an arrow up to int. Bottom-right: Real Python illustration of a calculator-like machine with signs "INTEGER" and "FLOAT", a display reading "8_372.11", keypad keys 1–9, "."
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 8

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

### x1-mcq-02 (mcq)

**Concepts:** Identifier naming rules and keywords

**Item:** Which of the following is a valid Python variable name?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20, 23, 25

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Variables and Keywords

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
```

```text
— Exercise

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
```

### x1-mcq-03 (mcq)

**Concepts:** Arithmetic operators

**Item:** What does this program print? print(17 // 5, 17 % 5)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 34–35

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
'''
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
'''
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
- Spell
```

### x1-mcq-04 (mcq)

**Concepts:** The type() function; Strings and quotes

**Item:** What does this program print? mark = "90" print(type(mark))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 13, 24

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

```text
— Variables and Keywords

**Text**:
- To **display the value of a variable**, you can use a print statement:
- The **type of a variable** is the type of the value it refers to.

**Code** (the arrow is U+1F86A "🡪" in the source and stands for the result; it is not code):
'''
>>> n=17
>>> print(n) 🡪 17
>>> pi=3.14
>>> print(pi) 🡪 3.14
'''
'''
>>> type(n) 🡪 int
>>> type(pi) 🡪 float
'''
**Output shown**: 17, 3.14, int, float (after the arrows)
**Diagrams/tables**: none
**Notes for curriculum**: print() to display a variable's value; type() of a variable is the type of the value it refers to.
**Issues**: Python 3 displays `type(n)` as `<class 'int'>` and `type(pi)` as `<class 'float'>`, not 
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 8

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

### x1-mcq-05 (mcq)

**Concepts:** Conditional execution: the if statement

**Item:** Which line correctly starts an if statement that checks whether score is equal to 10?

**Cited:** Topic 3 — Conditional Execution | Slides 6–7

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```

### x1-mcq-06 (mcq)

**Concepts:** Conditional expression (single-line if)

**Item:** What does this program print? temp = 18 weather = "warm" if temp >= 25 else "cool" print(weather)

**Cited:** Topic 3 — Conditional Execution | Slides 27–28

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### x1-mcq-07 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** In an if…elif…else chain, what happens when the conditions of two different branches are both True?

**Cited:** Topic 3 — Conditional Execution | Slides 32–33

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### x1-mcq-08 (mcq)

**Concepts:** What is iteration?; The while loop: syntax and flow

**Item:** According to Topic 4, a while loop is an example of which kind of iteration?

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```
**Cited:** Topic 4 — Iteration | Slide 4

```text
— The while loop

**Text**:
- The **while loop** (red, bold) statement allows you to repeatedly <u>execute a block</u> of statements <u>as long as a condition is true.</u>

(Footer: 4)

**Code**: none

**Output shown**: none

**Diagrams/tables**: A flowchart (picture). An incoming arrow from the top goes into an unlabeled decision diamond. The **[True]** branch goes down into a box labelled **Statement 1**, and an arrow from Statement 1 loops back up into the diamond's right side. The **[False]** branch leaves the diamond to the left and goes down, exiting the loop. (This picture is a cropped part of a larger "Sequence / Selection / Iteration" figure. Only the iteration part shows on the sli
```

### x1-tr-01 (tracing)

**Concepts:** Assignment operators; The end parameter of print(); Formatted output (f-strings); Output with print()

**Item:** Type the exact output of this program. name = "Sara" marks = 45 marks += 5 print("Student:", name, end=" ") print(f"has {marks} marks")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 37

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
'''
>>> num+=10
'''
Boxed equivalent: `num = num + 10`
'''
>>> num*=2  equivalent to
>>> num**=3 equivalent to
'''
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 66, 75

```text
— Input and Output

**Text**:
- • There will be situations where your program want to <u>print some results,</u> use the print() function.
- **Syntax of print():** (heading, underlined)
- **print(\*objects)**
  - o objects is the object to the printed.
  - o \* indicates that there can be more than one object

**Code**:
'''
print(*objects)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The `print()` function, which accepts multiple objects.

**Issues**: Typo: "to the printed" should be "to be printed". Grammar: "your program want to" should be "wants to". The syntax is simplified: the full signature also includes `sep`, `end`, `file` and `flush` (`end` is i
```

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 76–77

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```

### x1-tr-02 (tracing)

**Concepts:** Alternative execution: if…else; Combining conditions with and / or

**Item:** The program runs and the user types the value shown under Inputs. Type the exact output. n = int(input()) if n > 0 and n % 2 == 0:     print(n, "is positive and even") else:     print(n, "is not a positive even number") print("Done")

**Cited:** Topic 3 — Conditional Execution | Slides 21, 25

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

```text
— Alternative Execution

**Text**:
- **Examples** (red, underlined)
- Program to check if a number is Odd or Even

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces; note spacing quirks: no space between `if` and `(`, a space between `print` and `(` on the first print):
'''
num=int(input("Enter the number:"))
if(num % 2)== 0:
    print ("Given number is Even")
else:
    print("Given number is Odd")
'''

**Output shown** (input 22):
'''
Enter the number:22
Given number is Even
'''

**Diagrams/tables**: none

**Notes for curriculum**: if-else with the modulus operator to test even/odd on user input.

**Issues**: none (output consistent with Python 3; `i
```
**Cited:** Topic 3 — Conditional Execution | Slides 7, 16

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 43

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • and (Boolean AND)
- ✔True if <u>Both</u> operands are True. (in red, "Both" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A AND B |
|---|---|---|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

**Notes for curriculum**: Logical operator `and` and its truth table.

**Issues**: Minor notation only. The table header says "A AND B" in uppercase, but the Python keyword is lowercase `and`.

---
```

### x1-tr-03 (tracing)

**Concepts:** Chained conditionals: if…elif…else

**Item:** Type the exact output of this program. mark = 85 if mark >= 90:     print("A") elif mark >= 80:     print("B") elif mark >= 70:     print("C") else:     print("F") print("Grade done")

**Cited:** Topic 3 — Conditional Execution | Slides 32–33

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slide 38

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```

### x1-tr-04 (tracing)

**Concepts:** Printing a multiplication table with a loop; The counter pattern: initialize, test, update

**Item:** Type the exact output of this program. num = 4 i = 1 while i <= 3:     print(num, "*", i, "=", num * i)     i = i + 1 print("End of table")

**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```
**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```

### x1-err-01 (error)

**Concepts:** Reading input with input(); Type conversion with int() and float()

**Item:** This program stops with an error when the user types 3 (see Inputs). Which option correctly describes the error? num1 = input() num2 = 5 print(num1 + num2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 61

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 64, 71

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =int(input( “Enter a number : ” ))
num2 =int(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
30
'''

**Diagrams/tables**: Box `num1` ← `10`, box `num2` ← `20`, box `result` ← `10+20`.

**Notes for curriculum**: Integer addition after conversion, so 10+20 gives 30.

**Issues**: The code uses curly quotes. The output 30 is correct. The slide has no title.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 29

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

### x1-err-02 (error)

**Concepts:** Conditional execution: the if statement

**Item:** This program does not run. Which option correctly describes the error? mark = 75 if mark >= 50     print("Pass") print("End")

**Cited:** Topic 3 — Conditional Execution | Slide 6

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

### x1-code-01 (coding)

**Concepts:** Writing complete input → process → output programs; Reading input with input(); Type conversion with int() and float(); Arithmetic operators

**Item:** Write a program that reads two marks from the user: first the first mark, then the second mark. Marks may have decimals, so convert them with float(). Calculate the total of the two marks and their average (average = total / 2). Print the total on one line, labelled Total, and then the average on the next line, labelled Average, as in the sample run.

**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 8

```text
Write a program to read the marks from the user: Mark1, Mark2. Calculate the total marks and the average. Print the average and total marks. 
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
13.5
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 81

```text
— Exercise

**Text**:
- • Write a python program that represent a calculator. Where the program <u>read two numbers</u> from user, perform <u>+ , - , \*  and /</u>  calculations, then <u>display</u> the result of calculations.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: A calculator exercise: input, the four arithmetic operators, output.

**Issues**: none (minor grammar: "represent" and "read" should be "represents" and "reads").

---
```

### x1-code-02 (coding)

**Concepts:** The while loop: syntax and flow; The counter pattern: initialize, test, update

**Item:** Write a program that reads a whole number N from the user (convert it with int()). Then use a while loop to print the numbers from 1 to N, each on its own line. After the loop, print the word Done once. You may assume that N is at least 1.

**Cited:** Topic 4 — Iteration | Slides 5–6

```text
— Syntax of while Loop

**Text**:
- Syntax of while Loop (bullet in red, underlined)
- Syntax template: **while** **<test_condition>**(blue)**:** / **<Body of while>**(green)
- Label "indentation" (blue-violet) with a small bracket line, beside <Body of while>
- Label "Test the condition again" next to the loop-back arrow of the flowchart

(Footer: 5)

**Code** (syntax template as written in the slide's text box; the source text is `\t\twhile <test_condition>: ` / `\t\t\t<Body of while>`):
'''
while <test_condition>:
	<Body of while>
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture). "Enter the while loop" leads by arrow into a diamond labelled **Test Condition**. **True*
```

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```
**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### x2-mcq-01 (mcq)

**Concepts:** Boolean values; Values and data types

**Item:** Only one of these lines makes Python stop with an error. Which one?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 7

```text
— Values and Types

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
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 13

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 38

```text
— Operators and operands

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
**Issues**: The d
```

### x2-mcq-02 (mcq)

**Concepts:** Escape sequences; Strings and quotes

**Item:** Which statement prints exactly: It's easy

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 10

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 8

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

### x2-mcq-03 (mcq)

**Concepts:** Order of operations (precedence)

**Item:** What does this program print? print(2 + 3 * 4 ** 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 51–52

```text
— Order of Operations

**Text**:
- • When more than one operator appears in an expression, the order of evaluation depends on the ***rules of precedence***.
- • For mathematical operators, Python follows mathematical convention. The acronym ***PEMDAS*** is a useful way to rem[ember the rules:] (the image hides the bracketed part; it comes from the text layer)
- • **Parentheses** have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated [first.] (the bracketed word is cut off at the bottom edge; it comes from the text layer)

**Code**: none

**Output shown**: none

**Diagrams/tables**: PEMDAS graphic. T
```

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 56

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### x2-mcq-04 (mcq)

**Concepts:** Expressions and statements

**Item:** Which sentence about expressions and statements is correct?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 48

```text
— Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
'''
17
x
x + 17
'''
'''
>>> 1 + 1
'''

**Output shown**:
'''
2
'''
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a v
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 49

```text
— Expressions and Statements

**Text**:
- **Statement** (heading, underlined)
- • A ***statement*** is a unit of code that the Python interpreter can execute.
- • We have seen two kinds of statements:
  - 1) **print** being an expression statement
    - – Produce an output on the screen
  - 2) **assignment.**
    - – The assignment statement produces no output.
- • When you type a statement in interactive mode, the interpreter executes it and displays the result, if there is one.
- • A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.
- "Eg:" (label before the code), then "produces the output" (u
```

### x2-mcq-05 (mcq)

**Concepts:** Alternative execution: if…else

**Item:** What does this program print? x = 4 if x > 5:     x = x * 2 else:     x = x + 10 print(x)

**Cited:** Topic 3 — Conditional Execution | Slides 20–21

```text
— Alternative Execution

**Text**:
- **Alternative Execution**, in which there are two possibilities, and the condition determines which one gets executed.
- Label (dark red, under left box): "Statement executed if the condition is **True**"
- Label (dark red, under right box): "Statement executed if the condition is **False**"

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture with an overlaid "Condition" label): arrow into a decision diamond labelled "Condition"; branch "[True]" goes left to box "Statement 1"; branch "[False]" goes right to box "Statement 2"; both boxes lead into a lower (merge) diamond, then an arrow continues downward.

**Notes for curriculu
```

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

### x2-mcq-06 (mcq)

**Concepts:** Nested conditions

**Item:** In this code, when does Python check the condition b > 0? if a > 0:     if b > 0:         print("both positive")

**Cited:** Topic 3 — Conditional Execution | Slides 40–41

```text
— Nested Conditions

**Text**:
- We can write an entire if… else statement in another if… else statement called nesting, and the statement is called **nested if**.
- In a **nested if** construct, you can have an if … elif … else construct inside an if … elif.. Else construct.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): arrow into diamond "Test Expression". "True" ↓ box "Body of if". "False" (red) → diamond "Nested test expression"; its "True" ↓ box "Body of nested if"; its "False" (red) ↓ box "Body of nested else". The three body boxes merge into box "Statement just below if", with an arrow continuing downward.

**Notes for curriculum**: Def
```

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

### x2-mcq-07 (mcq)

**Concepts:** Combining conditions with and / or

**Item:** A student may enter the exam only if attendance is 75 or more AND fees is equal to "paid". Which line checks this correctly?

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 11–12

```text
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amo
```

```text
name = input("Enter customer name: ")
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
```

### x2-mcq-08 (mcq)

**Concepts:** Numbers and None as loop conditions; The while loop: syntax and flow

**Item:** How many times does this program print "Hello"? count = 0 while count:     print("Hello")     count = count + 1 print("End")

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```
**Cited:** Topic 4 — Iteration | Slide 6

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

### x2-tr-01 (tracing)

**Concepts:** Comparison (relational) operators; Logical operators and short-circuit evaluation; Comments

**Item:** Type the exact output of this program. # Compare two numbers a = 8 b = 3 print(a > b and b > 5)   # and needs both sides True print(a != b or b == 3) # print(a == b) print(not a > b)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 39

```text
— (no title in header bar)

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
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 43, 45–46

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • and (Boolean AND)
- ✔True if <u>Both</u> operands are True. (in red, "Both" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A AND B |
|---|---|---|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

**Notes for curriculum**: Logical operator `and` and its truth table.

**Issues**: Minor notation only. The table header says "A AND B" in uppercase, but the Python keyword is lowercase `and`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • or (boolean OR)
- ✔True if <u>Either</u> operands are True. (in red, "Either" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A OR B |
|---|---|---|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

**Notes for curriculum**: Logical operator `or` and its truth table.

**Issues**: Minor. The grammar "Either operands are" is awkward, and "either" could be read as exclusive, although the table correctly shows True when both are True. The header uses uppercase "OR" for the lowercase keyword `or`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • not (boolean NOT)
- If x is True , it returns False . If x is False , it returns True .

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | NOT A |
|---|---|
| False | True |
| False | True |
| True | False |
| True | False |

**Notes for curriculum**: Logical operator `not` (negation).

**Issues**: The table repeats each row (False→True twice, True→False twice). A one-operand table only needs two rows, so this looks like it was copied from the two-variable tables. The sentence uses `x` but the table uses `A`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 58

```text
— (no title)

**Text**: none (empty title bar).

**Code**:
'''
>>> A , B , C = 10 , 20 , 30
>>>   A > B and B < C
False
>>>   A > B or B < C
True
>>>   A < B and B < C
True
>>>   A == 10 and B != 20
False
>>>   A == 10 and  not B != 20
True
'''

**Output shown**: Inline above.

**Diagrams/tables**: A red-bordered side box explains the first line:
'''
A > B False
B < C True
False and True
False
'''

**Notes for curriculum**: Combining relational and logical operators. `not` binds looser than `!=`, so `not B != 20` means `not (B != 20)`.

**Issues**: Minor and conceptual. The side box evaluates `B < C`, but because of short-circuit evaluation (slide 44) Python never evaluates `B < C` once `A >
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 79

```text
— Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
'''
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
'''

**Code** (box 2):
'''
percentage = (minute * 100) / 60    # percentage of an h
```

### x2-tr-02 (tracing)

**Concepts:** Nested conditions

**Item:** The program runs and the user types the values shown under Inputs. Type the exact output. amount = float(input()) member = input() if amount > 50:     if member == "yes":         print("Discount")     else:         print("No discount") else:     print("Minimum not reached") print("Thank you")

**Cited:** Topic 3 — Conditional Execution | Slide 41

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 19–20

```text
Example

Write a Python program to read the purchase amount and membership status.

If the purchase amount is more than 50 OMR, check whether the customer is a member.
If the customer is a member, calculate a 2% discount.
If the customer is not a member, print “No discount”.
If the purchase is 50 OMR or less, print “Minimum purchase not reached”.
```

```text
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? ")

if amount > 50:
    if member == "yes":
        discount = amount * 0.02
        print("Discount:", discount)
    else:
        print("No discount")
else:
    print("Minimum purchase not reached")
```

### x2-tr-03 (tracing)

**Concepts:** Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** The program runs and the user types the values shown under Inputs. Type the exact output. total = 0 n = 1 while n <= 3:     x = int(input())     total = total + x     n = n + 1 print(total, total / 3)

**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```

### x2-tr-04 (tracing)

**Concepts:** while loops with conditionals inside; Alternative execution: if…else

**Item:** The program runs and the user types the values shown under Inputs. Type the exact output. count = 1 while count <= 3:     mark = int(input())     if mark >= 50:         print("Passed")     else:         print("Failed")     count = count + 1 print("Checked", count - 1, "students")

**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```
**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cell 13

```text
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
--- output ---
Good Practice!
Total hours =  14.0
```

### x2-err-01 (error)

**Concepts:** Variables and assignment; Identifier naming rules and keywords

**Item:** This program stops with an error. Which option correctly describes the error? price = 4 Total = price * 3 print(total)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 22

```text
— Variables and Keywords

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
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 57

```text
— (no title)

**Text**: none (empty title bar).

**Code** (left column):
'''
>>> A , B , C = 10 , 20 , 30
>>>  a > b
Error
>>> A > B
False
>>> A < C
True
>>> B != C
True
'''

**Code** (right column):
'''
>>> A + 20 > B
True
>>> A +20 == C
True
>>> B != C -10
False
'''

**Output shown**: Inline above ("Error" is in purple; the boolean results are in blue).

**Diagrams/tables**: none

**Notes for curriculum**: Relational operators (`>`, `<`, `!=`, `==`). Arithmetic binds tighter than comparison. Names are case-sensitive.

**Issues**: "Error" is a simplification. Python actually prints a traceback ending in `NameError: name 'a' is not defined`. All other results are correct. The slide has no ti
```

### x2-err-02 (error)

**Concepts:** Alternative execution: if…else; Conditional execution: the if statement

**Item:** This program does not run. Which option correctly describes the error? mark = 40 if mark >= 50: print("Pass") else:     print("Fail")

**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```
**Cited:** Topic 3 — Conditional Execution | Slide 6

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

### x2-code-01 (coding)

**Concepts:** Writing complete input → process → output programs; Type conversion with int() and float(); Arithmetic operators; Order of operations (precedence)

**Item:** Write a program that reads the length and then the width of a rectangle. They may have decimals, so convert them with float(). Calculate the area (length * width) and the perimeter (2 * (length + width)). Print the area on one line, labelled Area, and then the perimeter on the next line, labelled Perimeter, as in the sample run.

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 80

```text
— Exercise

**Text**:
- • Write a program that will read value in radius to compute the area of a circle. Then display the computed area. ("read", "compute" and "display" in red)
- Pi=3.14
- Area= Pi * radius * radius

**Code**:
'''
Pi=3.14
Area= Pi * radius * radius
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: An exercise combining input, a float conversion, an arithmetic expression and output.

**Issues**: none (minor grammar: "read value in radius").

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
13.5
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 51, 53

```text
— Order of Operations

**Text**:
- • When more than one operator appears in an expression, the order of evaluation depends on the ***rules of precedence***.
- • For mathematical operators, Python follows mathematical convention. The acronym ***PEMDAS*** is a useful way to rem[ember the rules:] (the image hides the bracketed part; it comes from the text layer)
- • **Parentheses** have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated [first.] (the bracketed word is cut off at the bottom edge; it comes from the text layer)

**Code**: none

**Output shown**: none

**Diagrams/tables**: PEMDAS graphic. T
```

```text
— Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces:
'''
2 * (3-1)        ← brace under (3-1), labelled "1st Expression"
2 * 2            ← brace under 2 * 2, labelled "2nd Expression"
4
'''

**Notes for curriculum**: Parentheses are evaluated first.

**Issues**: none

---
```

### x2-code-02 (coding)

**Concepts:** Alternative execution: if…else; Conditional execution: the if statement

**Item:** Write a program that reads a student's name and then the student's mark (a whole number, so convert it with int()). If the mark is 50 or more, print Pass. Otherwise, print Fail. After that, whatever the mark is, print Thank you followed by the student's name (for example: Thank you Ali).

**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 19–20

```text
Question:

Write a single-line statement that reads a student's final score (out of 100)
and prints "Pass" if the score is 50 or higher, or "Fail" if it is lower.
```

```text
n = int(input('enter number 1'))

result = 'Pass' if n>=50 else 'Fail'
print(result)
--- output ---
Pass
```
**Cited:** Topic 3 — Conditional Execution | Slide 17

```text
— EXERCISE

**Text**:
- Write a program that asks the user about his score in Quiz 1 out of 10.
  - ➢ if the student score is higher than or equals to **7.5** (red) then display a message “congratulation on your good score” .
  - ➢ At the end, it always display message “thank you for sharing your score”.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>=` on a float score, plus an unconditional final message after the if-block.

**Issues**: The source file contains two sample-run screenshots (Picture 3, Picture 4) that are completely covered by a white rectangle (no animation), so nothing
```
**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

### x3-mcq-01 (mcq)

**Concepts:** Order of operations (precedence); Arithmetic operators

**Item:** What does this program print? result = 10 - 2 ** 3 // 3 + 7 % 4 print(result)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 52, 55–56

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

```text
— Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces. Intermediate results (1, 4, 10, 14) are highlighted in gold:
'''
10 % 3 * 4 +5 * 2   ← brace under "10 % 3", labelled "1st Expression"
1 * 4 + 5 * 2       ← brace under "1 * 4", labelled "2nd Expression"
4 + 5 * 2           ← brace under "5 * 2", labelled "3rd Expression"
4 + 10
14
'''

**Notes for curriculum**: `%` and `*` share precedence and evaluate left to right, and both come before `+`.

**Issues**: Minor visual imprecision. The "1st Expression" brace extends from `10` to under the `*`, not just `10 % 3`. The result 1
```

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 32, 34–35

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\*\* (power)**
  - **x \*\* y Returns x to the power of y** (red)

**Code / session**:
'''
>>> 3**4
	81
>>> 0.25 ** 3
	 0.015625
'''
**Output shown**: `81`, `0.015625` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Exponentiation operator **.
**Issues**: none (outputs verified correct).

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
'''
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
'''
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
- Spell
```

### x3-mcq-02 (mcq)

**Concepts:** Identifier naming rules and keywords; Variables and assignment

**Item:** Which assignment statement runs without an error?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 20–21, 23

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```

```text
— Variables and Keywords

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
**Issues**: The rendered layout is broken. Tab misalignment 
```

```text
— Variables and Keywords

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
```

### x3-mcq-03 (mcq)

**Concepts:** Reading input with input(); Arithmetic operators; Order of operations (precedence)

**Item:** The user types 4 at the first prompt and 5 at the second prompt. What does the last line print? a = input("First: ") b = input("Second: ") print(a + b * 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 61, 69

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (same as slide 68; arrows now point at lines 3–4):
'''
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
'''

**Output shown**:
'''
1020
'''

**Diagrams/tables**: Box `num1` ← `“10”`, box `num2` ← `“20”`, box `result` ← `“10”+”20”`.

**Notes for curriculum**: `+` on two strings concatenates, so "10"+"20" gives "1020", not 30.

**Issues**: In the label `“10”+”20”`, the second string opens with a closing curly quote ” (U+201D), so the quotes are mismatched. The output `1020` is correct. The code uses curly quotes. The slide has no title.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 29, 31

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 56

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### x3-mcq-04 (mcq)

**Concepts:** Comparison (relational) operators; Logical operators and short-circuit evaluation; Assignment operators

**Item:** What does this program print? a, b, c = 5, 10, 15 print(a < b < c, a + b == c and b > c) print(not a > b or c % a != 0)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 36

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **= (assign)**
  - ▪ Assigns values from right side to left side operand
- ✔ **Assignment to same value**
  - ▪ Same value can be assigned to multiple variables
- ✔ **Multiple assignments**
  - ▪ Different values can be assigned to more than one variables

**Code** (green; layout as on slide, `>>>n=20` and `>>> num= n +10` in a second column):
'''
>>> a=5              >>>n=20
                     >>> num= n +10
'''
'''
>>> x=y=z=10
'''
'''
>>> x, y, z = 10, “hai”, 3.5
'''
(`“hai”` uses smart quotes U+201C/U+201D)

**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Simple assignment, chained assignment (x
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 40–41

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (two columns; prompts in red, results in blue):

Left column:
'''
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
'''
Right column:
'''
>>> 3 < 5 < 7
True
>>> 3>5
False
>>> x = 4
>>> y = 3
>>> x >= 3
True
'''
**Output shown**: as above (False, True, True, True / True, False, True)
**Diagrams/tables**: Real Python illustration: a machine with "TRUE" (blue) and "FALSE" (red) signs, a Python logo between them, a display reading "1 <= 0", buttons "==", "<=", "<", ">", ">=", and a person pointing at a button; "Real Python" signature.
**Notes for curriculum**: Comparison operators in t
```

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (three groups; prompts in red, results in blue; ASCII quotes):
'''
>>> x = 2
>>> y = 2
>>> x == y
True
'''
'''
>>> x = 'str'
>>> y = 'stR'
>>> x == y
False
'''
'''
>>> x = 2
>>> y = 3
>>> x != y
True
'''
**Output shown**: True, False, True
**Diagrams/tables**: The same Real Python TRUE/FALSE comparison-machine illustration as slide 40.
**Notes for curriculum**: == and != on numbers and strings; string comparison is case-sensitive.
**Issues**: none

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 43, 45–46, 58

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • and (Boolean AND)
- ✔True if <u>Both</u> operands are True. (in red, "Both" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A AND B |
|---|---|---|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

**Notes for curriculum**: Logical operator `and` and its truth table.

**Issues**: Minor notation only. The table header says "A AND B" in uppercase, but the Python keyword is lowercase `and`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • or (boolean OR)
- ✔True if <u>Either</u> operands are True. (in red, "Either" underlined)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | B | A OR B |
|---|---|---|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

**Notes for curriculum**: Logical operator `or` and its truth table.

**Issues**: Minor. The grammar "Either operands are" is awkward, and "either" could be read as exclusive, although the table correctly shows True when both are True. The header uses uppercase "OR" for the lowercase keyword `or`.

---
```

```text
— Operators and operands

**Text**:
- **Logical Operators** (heading, underlined)
- • not (boolean NOT)
- If x is True , it returns False . If x is False , it returns True .

**Code**: none

**Output shown**: none

**Diagrams/tables**: Truth table:

| A | NOT A |
|---|---|
| False | True |
| False | True |
| True | False |
| True | False |

**Notes for curriculum**: Logical operator `not` (negation).

**Issues**: The table repeats each row (False→True twice, True→False twice). A one-operand table only needs two rows, so this looks like it was copied from the two-variable tables. The sentence uses `x` but the table uses `A`.

---
```

### x3-mcq-05 (mcq)

**Concepts:** Chained conditionals: if…elif…else

**Item:** The programmer wanted a score of 85 to give Merit. What does this program actually print? score = 85 if score >= 50:     grade = "Pass" elif score >= 80:     grade = "Merit" elif score >= 90:     grade = "Distinction" else:     grade = "Fail" print(grade)

**Cited:** Topic 3 — Conditional Execution | Slides 32–33

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slide 38

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```

### x3-mcq-06 (mcq)

**Concepts:** Conditional expression (single-line if); Arithmetic operators; Order of operations (precedence)

**Item:** What does this program print? price = 50 rate = 0.4 if price > 50 else 0.2 print(price - price * rate)

**Cited:** Topic 3 — Conditional Execution | Slides 27–28

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 56

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### x3-mcq-07 (mcq)

**Concepts:** Numbers and None as loop conditions; The counter pattern: initialize, test, update; The end parameter of print()

**Item:** What does this program print? n = 3 while n:     print(n, end=" ")     n = n - 1 print("Go")

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```
**Cited:** Topic 4 — Iteration | Slide 11

```text
— The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
'''
N=5
while N>=1:
    print(N)
    N=N-1
'''

**Output shown**:
'''
5
4
3
2
1
'''

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 76–77

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```

### x3-mcq-08 (mcq)

**Concepts:** What is iteration?; The while loop: syntax and flow

**Item:** A program must keep asking the user for a password until the correct one is typed. Nobody knows in advance how many attempts it will take. Using the terms from Topic 4, what kind of iteration is this, and which loop does the slide give as its example?

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```
**Cited:** Topic 4 — Iteration | Slide 4

```text
— The while loop

**Text**:
- The **while loop** (red, bold) statement allows you to repeatedly <u>execute a block</u> of statements <u>as long as a condition is true.</u>

(Footer: 4)

**Code**: none

**Output shown**: none

**Diagrams/tables**: A flowchart (picture). An incoming arrow from the top goes into an unlabeled decision diamond. The **[True]** branch goes down into a box labelled **Statement 1**, and an arrow from Statement 1 loops back up into the diamond's right side. The **[False]** branch leaves the diamond to the left and goes down, exiting the loop. (This picture is a cropped part of a larger "Sequence / Selection / Iteration" figure. Only the iteration part shows on the sli
```

### x3-tr-01 (tracing)

**Concepts:** The end parameter of print(); Escape sequences; Formatted output (f-strings); Comments; Assignment operators

**Item:** What exactly does this program print? (You may type a tab as a single space.) name = "Sara" score = 17 score += 4    # bonus marks # score = score * 10 print("Name:\t" + name, end=" | ") print(f"Score: {score}") print('It\'s done\nBye')

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 10–11

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
'''
>>>print("Welcome to \n UTAS")
'''
'''
>>>print("Welcome to \t UTAS ")
'''
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
'''
Welcome to
 UTAS
'''
'''
Welcome to          UTAS
'''
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curricul
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 37

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
'''
>>> num+=10
'''
Boxed equivalent: `num = num + 10`
'''
>>> num*=2  equivalent to
>>> num**=3 equivalent to
'''
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 75–77

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 79

```text
— Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
'''
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
'''

**Code** (box 2):
'''
percentage = (minute * 100) / 60    # percentage of an h
```

### x3-tr-02 (tracing)

**Concepts:** Chained conditionals: if…elif…else; Alternative execution: if…else; Conditional execution: the if statement; Combining conditions with and / or

**Item:** The user types 10 and then 4. What does the program print? x = int(input()) y = int(input()) if x > y:     print("A") elif x == y:     print("B") if x % y == 0:     print("C") else:     print("D") if x > 5 and y < 5:     print("E") print("End")

**Cited:** Topic 3 — Conditional Execution | Slide 16

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```
**Cited:** Topic 3 — Conditional Execution | Slides 21, 25

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```

```text
— Alternative Execution

**Text**:
- **Examples** (red, underlined)
- Program to check if a number is Odd or Even

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces; note spacing quirks: no space between `if` and `(`, a space between `print` and `(` on the first print):
'''
num=int(input("Enter the number:"))
if(num % 2)== 0:
    print ("Given number is Even")
else:
    print("Given number is Odd")
'''

**Output shown** (input 22):
'''
Enter the number:22
Given number is Even
'''

**Diagrams/tables**: none

**Notes for curriculum**: if-else with the modulus operator to test even/odd on user input.

**Issues**: none (output consistent with Python 3; `i
```
**Cited:** Topic 3 — Conditional Execution | Slides 33, 37

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

```text
— (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
'''
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
'''

**Output shown** (inputs 5, 8, 6):
'''
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
'''

**Diagrams/tables**: none

**Notes for curriculum**: 
```

### x3-tr-03 (tracing)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** What does this program print? total = 0 count = 1 while count <= 6:     if count % 3 == 0:         total = total + count * 2     else:         total = total + 1     count = count + 1 print("Total:", total) print("Count:", count)

**Cited:** Topic 4 — Iteration | Slide 10

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x3-tr-04 (tracing)

**Concepts:** Nested conditions; Alternative execution: if…else; Order of operations (precedence)

**Item:** The user types 135 and then gold. What does the program print? points = int(input()) member = input() if points >= 100:     print("Level reached")     if member == "gold":         bonus = points // 10 * 3     else:         bonus = points // 10 else:     bonus = 0     if member == "gold":         print("Almost there")     print("No bonus") print("Bonus:", bonus) print("Total:", points + bonus)

**Cited:** Topic 3 — Conditional Execution | Slides 41, 46

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

```text
— (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
'''
n = int(input("Enter  number:"))
if (n<=15):
    if (n 
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cell 20

```text
amount = float(input("Enter purchase amount: "))
member = input("Are you a member? ")

if amount > 50:
    if member == "yes":
        discount = amount * 0.02
        print("Discount:", discount)
    else:
        print("No discount")
else:
    print("Minimum purchase not reached")
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

### x3-err-01 (error)

**Concepts:** Output with print(); Type conversion with int() and float(); Reading input with input()

**Item:** The user types 25. The program stops with an error. Which line causes it, and why? age = int(input("Enter your age: ")) years_left = 60 - age print("Years until 60: " + years_left)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 64–65

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 67, 74

```text
— Input and Output

**Text**: none beyond the labels.

**Code** (curly quotes):
'''
Name= input( “Enter your name : ” )
print( “Hello ” + Name + “!”)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter Name :  Hilal
'''
'''
Hello Hilal !
'''

**Diagrams/tables**: A box labelled `Name`, with a blue arrow from the label `“Hilal”` (red) into it.

**Notes for curriculum**: Reading a string with `input()` and printing it with string concatenation (`+`).

**Issues**:
- Output mismatch: `“Hello ” + Name + “!”` produces `Hello Hilal!` with no space before "!", but the slide shows `Hello Hilal !`.
- The console prompt shows "Enter Name :", but the code's prompt is "Enter your name : ".
- The code 
```

```text
— Input and Output

**Text**: "Output:" (bold, underlined).

**Code** (curly quotes):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
print( “Hello” , name , “ ! Your age is ” , age , “ years” )
'''

**Output shown** (green):
'''
Enter your name : Hilal
Enter your age : 21
Hello Hilal ! Your age is 21 years
'''

**Diagrams/tables**: none

**Notes for curriculum**: Printing several values with a comma-separated `print()`.

**Issues**:
- Output mismatch. `print()` puts a space between items, and the string literals already contain leading and trailing spaces. The real output is `Hello Hilal  ! Your age is  21  years` (double spaces before "!", "21" and "years"), not t
```

### x3-err-02 (error)

**Concepts:** Chained conditionals: if…elif…else; Variables and assignment

**Item:** The user types 35. The program stops with an error. Which line causes it, and why? mark = int(input("Mark: ")) if mark >= 50:     result = "Pass" elif mark >= 40:     result = "Resit" print("Result:", result)

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 19

```text
— Variables and Keywords

**Text**:
- An **assignment** statement creates new variables and gives them values:

**Code**:
'''
>>> myName = “Bilal”

>>> myAge = 17

>>> isHappy = True
'''
(`“Bilal”` uses smart quotes U+201C/U+201D; the `=` signs are bold green)

**Output shown**: none
**Diagrams/tables**: Picture of three open boxes labelled **myName**, **myAge**, **isHappy**. Sticky notes with arrows into each box read **"Bob"** (yellow), **17** (cyan) and **true** (green).
**Notes for curriculum**: Assignment statements create variables and bind values (str, int, bool).
**Issues**:
- The picture contradicts the code: the code assigns "Bilal" but the picture shows "Bob", and the code uses `T
```

### x3-code-01 (coding)

**Concepts:** Chained conditionals: if…elif…else; Writing complete input → process → output programs; Type conversion with int() and float()

**Item:** Write a program that reads a student's three marks in this order: Quiz, Midterm and Final (decimal numbers, each out of 100). Use the prompts `Quiz mark: `, `Midterm mark: ` and `Final mark: `. Calculate the average of the three marks and print it as `Average: <value>`. Then print the grade as `Grade: <letter>` using an if…elif…else chain and these rules: average 85 or more gives A; 70 or more (bu

**Cited:** Topic 3 — Conditional Execution | Slides 33, 38

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

```text
— Exercise

**Text**:
- Write a program that reads a numeric grade(mark in one of the courses) from a student and displays a corresponding character grade for that numeric grade.
- The program shall print: (red)
- ‘A’ for exam grades greater than or equal to 90
- ‘B’ for grades in the range 80 to 89
- ‘C’ for grades in the range 70 to 79
- ‘D’ for grades in the range 60 to 69
- ‘F’ for all other grades.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: letter-grade classification using an if-elif-else chain.

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matte
```
**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 4

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
13.5
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---
```

### x3-code-02 (coding)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** Write a program that first reads the number of days N (a whole number, at least 1) with the prompt `How many days? `. Then use a while loop to read N temperatures (decimal numbers), each with the prompt `Temperature: `. A hot day is a temperature of 35 or more. After the loop, print `Hot days: <count>` and then `Average: <average>`, where the average is the sum of the N temperatures divided by N.

**Cited:** Topic 4 — Iteration | Slide 14

```text
— Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
'''

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

*
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```
**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cell 13

```text
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
--- output ---
Good Practice!
Total hours =  14.0
```

### x4-mcq-01 (mcq)

**Concepts:** The type() function; Numbers: int, float and complex; Values and data types; Arithmetic operators

**Item:** What does this program print? a = 7 / 7 b = 3e2 c = "12" * 2 d = 2 + 3j print(type(a), type(b)) print(type(c), type(d))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 5–6

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **complex**
- Represent complex numbers, of the form **a + bJ**
  - ✔ **a** is the real part.
  - ✔ **b** is the imaginary part.
- Example box:
  '''
  4+5j
  7j
  -7J
  '''

**Code**: none
**Output shown**: none
**Diagrams/tables**: Same Numbers tree; arrow to complex. Bottom-left: the same Real Python calculator illustration as slide 4.
**Notes for curriculum**: complex type; j/J suffix for the imaginary part.
**Issues**: none

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 13

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 31, 33

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
'''
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
'''
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---
```

### x4-mcq-02 (mcq)

**Concepts:** Boolean values; Strings and quotes; Escape sequences; Comparison (relational) operators

**Item:** Which of these lines runs WITHOUT an error?

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 7

```text
— Values and Types

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
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 8, 10

```text
— Values and types

**Text**:
- **Strings:**
  - A string is a sequence of characters
  - Strings are basically just words.(collection of characters)
- Large illustration: “Hello”   ‘Hello’ (quote marks drawn in gold)
- **Types of Strings:**
  - ➢ **Using Single Quotes (').** You can specify strings using single quotes. All white space i.e. spaces and tabs are preserved as-is.
  - ➢ **Using Double Quotes(").** Strings in double quotes work exactly the same way as strings in single quotes.

**Code**: none (illustrative literals only):
'''
“Hello”     ‘Hello’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: str type; string literals with single or double quotes ar
```

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 41

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (three groups; prompts in red, results in blue; ASCII quotes):
'''
>>> x = 2
>>> y = 2
>>> x == y
True
'''
'''
>>> x = 'str'
>>> y = 'stR'
>>> x == y
False
'''
'''
>>> x = 2
>>> y = 3
>>> x != y
True
'''
**Output shown**: True, False, True
**Diagrams/tables**: The same Real Python TRUE/FALSE comparison-machine illustration as slide 40.
**Notes for curriculum**: == and != on numbers and strings; string comparison is case-sensitive.
**Issues**: none

---
```

### x4-mcq-03 (mcq)

**Concepts:** Expressions and statements; Variables and assignment

**Item:** This code is saved in a file and run as a script (not typed in interactive mode). What does it print? x = 4 x + 6 y = x * 2 print(x, y)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 48–49

```text
— Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
'''
17
x
x + 17
'''
'''
>>> 1 + 1
'''

**Output shown**:
'''
2
'''
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a v
```

```text
— Expressions and Statements

**Text**:
- **Statement** (heading, underlined)
- • A ***statement*** is a unit of code that the Python interpreter can execute.
- • We have seen two kinds of statements:
  - 1) **print** being an expression statement
    - – Produce an output on the screen
  - 2) **assignment.**
    - – The assignment statement produces no output.
- • When you type a statement in interactive mode, the interpreter executes it and displays the result, if there is one.
- • A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.
- "Eg:" (label before the code), then "produces the output" (u
```

### x4-mcq-04 (mcq)

**Concepts:** Order of operations (precedence); Logical operators and short-circuit evaluation; Arithmetic operators

**Item:** What does this program print? a = 10 - 4 / 2 * 3 print(a, a > 4 and not 7 % 3 == 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 52, 56

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 33

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
'''
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
'''
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 58

```text
— (no title)

**Text**: none (empty title bar).

**Code**:
'''
>>> A , B , C = 10 , 20 , 30
>>>   A > B and B < C
False
>>>   A > B or B < C
True
>>>   A < B and B < C
True
>>>   A == 10 and B != 20
False
>>>   A == 10 and  not B != 20
True
'''

**Output shown**: Inline above.

**Diagrams/tables**: A red-bordered side box explains the first line:
'''
A > B False
B < C True
False and True
False
'''

**Notes for curriculum**: Combining relational and logical operators. `not` binds looser than `!=`, so `not B != 20` means `not (B != 20)`.

**Issues**: Minor and conceptual. The side box evaluates `B < C`, but because of short-circuit evaluation (slide 44) Python never evaluates `B < C` once `A >
```

### x4-mcq-05 (mcq)

**Concepts:** Combining conditions with and / or; Alternative execution: if…else; Conditional execution: the if statement

**Item:** What does this program print? weather = "raining" transport = "yes" if weather == True or transport == "no":     print("Online class") else:     print("Campus") if weather == "raining" and transport == "yes":     print("Take an umbrella") print("Done")

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 10–12

```text
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```

```text
user = input('Enter Yes or No:\t')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Enter Yes or No:	Yes
Stay on Campus
Check your status!!
```

```text
#user = input('Enter Yes or No:\t')
case1 = input('Case is raining or not raining:\t')
case2 = input('no transport / transport:\t')
if case1 == 'raining' and case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Case is raining or not raining:	raining
no transport / transport:	transport
Stay on Campus
Check your status!!
```

### x4-mcq-06 (mcq)

**Concepts:** Nested conditions

**Item:** Which pair of inputs makes this program print Failed? attendance = float(input("Attendance: ")) mark = float(input("Mark: ")) if attendance >= 75:     if mark >= 50:         print("Passed")     else:         print("Failed") else:     print("Not eligible")

**Cited:** Topic 3 — Conditional Execution | Slides 40–41

```text
— Nested Conditions

**Text**:
- We can write an entire if… else statement in another if… else statement called nesting, and the statement is called **nested if**.
- In a **nested if** construct, you can have an if … elif … else construct inside an if … elif.. Else construct.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): arrow into diamond "Test Expression". "True" ↓ box "Body of if". "False" (red) → diamond "Nested test expression"; its "True" ↓ box "Body of nested if"; its "False" (red) ↓ box "Body of nested else". The three body boxes merge into box "Statement just below if", with an arrow continuing downward.

**Notes for curriculum**: Def
```

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Chapter 3 Lab Exercise IIII (notebook export) | Cells 16–17

```text
Example
Write a Python program to read a student’s attendance percentage and mark.

If attendance is 75% or above, check the mark.
If the mark is 50 or above, print “Passed”.
If attendance is below 75%, print “Not Eligible”.
```

```text
attendance = float(input("Enter attendance: "))
mark = float(input("Enter mark: "))

if attendance >= 75:
    if mark >= 50:
        print("Passed")
else:
    print("Not Eligible")
```

### x4-mcq-07 (mcq)

**Concepts:** The while loop: syntax and flow; The counter pattern: initialize, test, update

**Item:** What does this program print? k = 1 steps = 0 while k < 20:     k = k * 3     steps += 1 print(k, steps)

**Cited:** Topic 4 — Iteration | Slides 5–6

```text
— Syntax of while Loop

**Text**:
- Syntax of while Loop (bullet in red, underlined)
- Syntax template: **while** **<test_condition>**(blue)**:** / **<Body of while>**(green)
- Label "indentation" (blue-violet) with a small bracket line, beside <Body of while>
- Label "Test the condition again" next to the loop-back arrow of the flowchart

(Footer: 5)

**Code** (syntax template as written in the slide's text box; the source text is `\t\twhile <test_condition>: ` / `\t\t\t<Body of while>`):
'''
while <test_condition>:
	<Body of while>
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture). "Enter the while loop" leads by arrow into a diamond labelled **Test Condition**. **True*
```

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```
**Cited:** Topic 4 — Iteration | Slide 10

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### x4-mcq-08 (mcq)

**Concepts:** Printing a multiplication table with a loop; The counter pattern: initialize, test, update

**Item:** This program should print the multiplication table of the number entered, from num x 1 up to and including num x 10 (exactly 10 lines). Notice that m is updated BEFORE the print. Which condition should replace ____? num = int(input("Enter a number: ")) m = 0 while ____:     m = m + 1     print(num, "x", m, "=", num * m)

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```
**Cited:** Topic 4 — Iteration | Slide 10

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### x4-tr-01 (tracing)

**Concepts:** Type conversion with int() and float(); Arithmetic operators; Values and data types

**Item:** What does this program print? a = "5" b = 2 print(a * b, int(a) * b) print(float(a) / b, int(a) // b, int(a) % b) c = a + "0" print(int(c) - 1, c * 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 65

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 29, 31

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 33–35

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **/ (divide)**
  - x / y    Divide **x** by **y**

**Code / session**:
'''
>>> 10 / 5
	2.0
>>>  13 / 3
	4.333333333
>>> 4 / 2
	2.0
'''
(two spaces after the prompt in ">>>  13 / 3", as shown)
**Output shown**: `2.0`, `4.333333333`, `2.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: True division / always returns a float.
**Issues**: Python 3 prints `13 / 3` as `4.333333333333333` (16 significant digits). The slide shows a truncated `4.333333333`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
'''
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
'''
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
- Spell
```

### x4-tr-02 (tracing)

**Concepts:** Chained conditionals: if…elif…else; Conditional expression (single-line if)

**Item:** The user types 250. What does the program print? units = int(input()) if units <= 100:     bill = units * 20 elif units <= 300:     bill = 100 * 20 + (units - 100) * 30 else:     bill = 100 * 20 + 200 * 30 + (units - 300) * 40 level = "high" if bill > 5000 else "normal" print("Bill:", bill, "baisa") print("Usage level:", level)

**Cited:** Topic 3 — Conditional Execution | Slide 50 · Exercise 3

```text
— Exercises - Practice

**Text** (picture of a text document; quote marks around 'Divisible' and 'not divisible' are curly ‘ ’ in a Verdana-style font, the opening mark resembling a backtick):
1. Write a program to check the last digit of given number is divisible 5 or not.
2. Write a program to print ‘Divisible’ if the given number is multiple of 5. Otherwise print ‘not divisible’.
3. Write a program to read number of units and find electricity bill.
   - Conditions:  Units / Price
     - First 100 — 20 baisa per unit
     - Next 200 — 30 baisa per unit
     - After 300 — 40 baisa per unit
   - **Example:**
     if units is 350, bill is:  100*20 baisa + 200*30 baisa + 50 * 40 baisa
4. Write
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slides 27–28

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### x4-tr-03 (tracing)

**Concepts:** Accumulating totals, averages and products; while loops with conditionals inside

**Item:** What does this program print? n = 5 product = 1 i = 1 while i <= n:     product = product * i     if product > 20:         print("big at", i)     i = i + 1 print("Result:", product)

**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x4-tr-04 (tracing)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else; Combining conditions with and / or

**Item:** The user types 7, then 13, then 13. What does the program print? a = int(input()) b = int(input()) c = int(input()) if a >= b and a >= c:     big = a elif b >= a and b >= c:     big = b else:     big = c if big % 2 == 0:     print(big, "is even") else:     if big > 10:         print(big, "is odd and large")     else:         print(big, "is odd and small") print("Sum:", a + b + c)

**Cited:** Topic 3 — Conditional Execution | Slide 37

```text
— (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
'''
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
'''

**Output shown** (inputs 5, 8, 6):
'''
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
'''

**Diagrams/tables**: none

**Notes for curriculum**: 
```
**Cited:** Practice Exercises III (Conditionals) | Page 1 · Exercise 3

```text
1. Write a program to read two numbers and check which no is bigger or equal.

2. Write a program to read a number and check if the no is positive or negative of zero.

3. Write a program to read three numbers and find the largest of three numbers.

4. Write a program to read your name, id no, Quiz, mid and final marks. Calculate total marks
   and print the grade based on the following conditions.
        Marks                                       Grade
        90 and above                                A
        80-89                                       B
        70-79                                       C
        60-69                                       D
        Below 60        
```
**Cited:** Topic 3 — Conditional Execution | Slides 41, 43

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

```text
— (no title; title bar empty) Nested condition flowchart and code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style; straight double quotes; a space before each `:` after the conditions; space in `print ("greater")`; indentation 4 and 8 spaces; the conditions `x == y` and `x < y` are highlighted with pink boxes matching pink boxes on the flowchart diamonds):
'''
x = 10
y = 20
if x == y :
    print("equal")
else:
    if x < y :
        print("less")
    else:
        print ("greater")
'''

**Output shown**:
'''
less
'''

**Diagrams/tables**: Same flowchart as slide 42 (left/top): diamond `x == y` — Yes → `print(‘equal’)`; No → diamond `x < y` — Yes → `pri
```

### x4-err-01 (error)

**Concepts:** Type conversion with int() and float(); Reading input with input()

**Item:** The user types Omar, then 7.5, then 3. The program stops with an error. Which line causes it, and why? name = input("Name: ") hours = int(input("Hours worked: ")) rate = float(input("Rate per hour: ")) print(name, "earned", hours * rate)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 64–65

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 72–73

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter a number :  5.2
>>> Enter another number   8.3
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console sh
```

```text
— (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
'''
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
'''

**Output shown**:
'''
13.5
'''

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---
```

### x4-err-02 (error)

**Concepts:** Alternative execution: if…else; Chained conditionals: if…elif…else

**Item:** Python refuses to run this program at all. Which line is wrong, and why? speed = int(input("Speed: ")) if speed > 120:     print("Fine: 50 OMR") elif speed > 100:     print("Warning") else speed <= 100:     print("OK")

**Cited:** Topic 3 — Conditional Execution | Slide 21

```text
— Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
'''
if  condition:
      <True part statements>
else:
      <False part statements>
'''

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the i
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### x4-code-01 (coding)

**Concepts:** Combining conditions with and / or; Chained conditionals: if…elif…else; Writing complete input → process → output programs

**Item:** A bookshop gives discounts. Write a program that reads the purchase amount (a decimal number) with the prompt `Amount: ` and then whether the customer has a student card with the prompt `Student card (yes/no): ` (the user types exactly yes or no). Rules (use and to join the two conditions): if the amount is more than 30 AND the customer has a student card, the discount is 15% of the amount. Otherw

**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 11–12

```text
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amo
```

```text
name = input("Enter customer name: ")
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
```
**Cited:** Topic 3 — Conditional Execution | Slides 33, 37

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

```text
— (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
'''
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
'''

**Output shown** (inputs 5, 8, 6):
'''
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
'''

**Diagrams/tables**: none

**Notes for curriculum**: 
```

### x4-code-02 (coding)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** An order always has exactly 3 items. Write a program that uses a while loop to read the price of each item (a decimal number) with the prompt `Price: `. If a price is 20 or more, the discount is 25%; otherwise the discount is 10%. Right after reading each price, print `Discounted: <price after discount>`. After the loop, print `Total: <sum of the 3 discounted prices>`.

**Cited:** Topic 4 — Iteration | Slide 18

```text
— Exercise

**Text**:
- Write python program that display the price of products after discount. The program accepts 3 products price purchased by the user.
- If the product price is higher than 50 OMR, the discount percentage is 40%. Otherwise, the discount percentage is 20%. Calculate the discount price for each product.
- Discounted price = product price –(product price * discount percentage )  (red; uses an en dash "–" as the minus sign)

(Footer: 18)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot, as visible on the slide):
'''
Enter product 1 price in OMR: 20.5
the dicounted price is  16.4 OMR
Enter product 2 price in OMR: 50
the dicounted price is  30.0 OM
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```

### x5-mcq-01 (mcq)

**Concepts:** Order of operations (precedence); Arithmetic operators

**Item:** What does this program print? result = 2 ** 3 ** 2 // 10 % 7 - -7 // 2 print(result)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 35, 56

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **% (modulus)**
  - **Returns the remainder of the division** (red)

**Code / session**:
'''
>>> 75 % 9
	3
>>>13 % 3
	1
>>>25.5 % 2.25
	0.75
'''
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
- Spell
```

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### x5-mcq-02 (mcq)

**Concepts:** Logical operators and short-circuit evaluation; Comparison (relational) operators; Boolean values; Assignment operators

**Item:** What does this program print? a, b, c = 4, 0, 7 print(b != 0 and a / b > 1 or c > a > b, not a < c == 7)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 44

```text
— Operators and operands

**Text**:
Python will not evaluate **B** since it knows that the left-hand side (**A**) of the 'and' expression is **False** (bold, underlined) which implies that the whole expression will be False irrespective of the other values. This is called **short-circuit evaluation**.

**Code** (orange rounded box):
'''
>>> A = False
>>> B = True
>>>A and B
'''

**Output shown**: none

**Diagrams/tables**: The same `and` truth table as slide 43 (A | B | A AND B: False False False / False True False / True False False / True True True).

**Notes for curriculum**: Short-circuit evaluation of `and`.

**Issues**: The result of `A and B` is not shown (Python would display `False`
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 40

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (two columns; prompts in red, results in blue):

Left column:
'''
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
'''
Right column:
'''
>>> 3 < 5 < 7
True
>>> 3>5
False
>>> x = 4
>>> y = 3
>>> x >= 3
True
'''
**Output shown**: as above (False, True, True, True / True, False, True)
**Diagrams/tables**: Real Python illustration: a machine with "TRUE" (blue) and "FALSE" (red) signs, a Python logo between them, a display reading "1 <= 0", buttons "==", "<=", "<", ">", ">=", and a person pointing at a button; "Real Python" signature.
**Notes for curriculum**: Comparison operators in t
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 58

```text
— (no title)

**Text**: none (empty title bar).

**Code**:
'''
>>> A , B , C = 10 , 20 , 30
>>>   A > B and B < C
False
>>>   A > B or B < C
True
>>>   A < B and B < C
True
>>>   A == 10 and B != 20
False
>>>   A == 10 and  not B != 20
True
'''

**Output shown**: Inline above.

**Diagrams/tables**: A red-bordered side box explains the first line:
'''
A > B False
B < C True
False and True
False
'''

**Notes for curriculum**: Combining relational and logical operators. `not` binds looser than `!=`, so `not B != 20` means `not (B != 20)`.

**Issues**: Minor and conceptual. The side box evaluates `B < C`, but because of short-circuit evaluation (slide 44) Python never evaluates `B < C` once `A >
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 36

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **= (assign)**
  - ▪ Assigns values from right side to left side operand
- ✔ **Assignment to same value**
  - ▪ Same value can be assigned to multiple variables
- ✔ **Multiple assignments**
  - ▪ Different values can be assigned to more than one variables

**Code** (green; layout as on slide, `>>>n=20` and `>>> num= n +10` in a second column):
'''
>>> a=5              >>>n=20
                     >>> num= n +10
'''
'''
>>> x=y=z=10
'''
'''
>>> x, y, z = 10, “hai”, 3.5
'''
(`“hai”` uses smart quotes U+201C/U+201D)

**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Simple assignment, chained assignment (x
```

### x5-mcq-03 (mcq)

**Concepts:** The type() function; Type conversion with int() and float(); Values and data types; Arithmetic operators

**Item:** What does this program print? a = "4" b = 2 c = int(a * b) // 10 + b ** 2 print(c, type(a * b))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 31, 50

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```

```text
— Exercise

**Text**: none besides the title.

**Code** (left column; all string quotes are curly “ ”):
'''
>>> 3 * “python”
“pythonpythonpython”

>>> 3 * “3”
“333”

>>> A , B = 11/5 , 11%5
>>> print(A)
>>> print(B)
2.2
1
'''

**Code** (right column):
'''
>>> a=7
>>> a+=4
11

>>> A , B = 10/3 , 10//3
>>> print(A)
>>> print(B)
3.33333333
3
'''
(On the slide the line `>>> A , B = 10/3 ,` wraps, and `10//3` appears on the next line.)

**Output shown**: As shown inline above: “pythonpythonpython”, “333”, 2.2, 1, 11, 3.33333333, 3.

**Diagrams/tables**: none

**Notes for curriculum**: String repetition with `*`, true division `/`, modulus `%`, floor division `//`, augmented assignment `+=`, tuple
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 65

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 13, 24

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```

```text
— Variables and Keywords

**Text**:
- To **display the value of a variable**, you can use a print statement:
- The **type of a variable** is the type of the value it refers to.

**Code** (the arrow is U+1F86A "🡪" in the source and stands for the result; it is not code):
'''
>>> n=17
>>> print(n) 🡪 17
>>> pi=3.14
>>> print(pi) 🡪 3.14
'''
'''
>>> type(n) 🡪 int
>>> type(pi) 🡪 float
'''
**Output shown**: 17, 3.14, int, float (after the arrows)
**Diagrams/tables**: none
**Notes for curriculum**: print() to display a variable's value; type() of a variable is the type of the value it refers to.
**Issues**: Python 3 displays `type(n)` as `<class 'int'>` and `type(pi)` as `<class 'float'>`, not 
```

### x5-mcq-04 (mcq)

**Concepts:** Nested conditions; Alternative execution: if…else

**Item:** Look carefully at the indentation. What does this program print? x = 15 if x > 10:     if x % 2 == 0:         print("A") else:     print("B")     if x > 12:         print("C") print("D")

**Cited:** Topic 3 — Conditional Execution | Slide 41

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Topic 3 — Conditional Execution | Slides 43–44

```text
— (no title; title bar empty) Nested condition flowchart and code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style; straight double quotes; a space before each `:` after the conditions; space in `print ("greater")`; indentation 4 and 8 spaces; the conditions `x == y` and `x < y` are highlighted with pink boxes matching pink boxes on the flowchart diamonds):
'''
x = 10
y = 20
if x == y :
    print("equal")
else:
    if x < y :
        print("less")
    else:
        print ("greater")
'''

**Output shown**:
'''
less
'''

**Diagrams/tables**: Same flowchart as slide 42 (left/top): diamond `x == y` — Yes → `print(‘equal’)`; No → diamond `x < y` — Yes → `pri
```

```text
— (no title; title bar empty) If else within if else

**Text**:
- If else within if else

**Code** (screenshot of a Jupyter cell labelled `In [35]:`; straight single quotes; indentation 4 and 8 spaces; inner `else:` and its print on one line):
'''
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else: print('x is greater than y')
'''

**Output shown**:
'''
x is less than y
'''

**Diagrams/tables**: none

**Notes for curriculum**: Nested if-else (if-else inside the else branch) for comparing two values.

**Issues**: Slide has no title (empty title bar). `x` and `y` are not defined in the shown cell (the output depends on values set in an earl
```

### x5-mcq-05 (mcq)

**Concepts:** Chained conditionals: if…elif…else; Conditional expression (single-line if)

**Item:** What does this program print? score = 85 if score >= 50:     grade = "pass" elif score >= 80:     grade = "merit" elif score >= 90:     grade = "distinction" else:     grade = "fail" bonus = 5 if grade == "merit" else 0 print(grade, score + bonus)

**Cited:** Topic 3 — Conditional Execution | Slides 32–33

```text
— Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests a
```

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slides 27–28

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### x5-mcq-06 (mcq)

**Concepts:** Combining conditions with and / or; Logical operators and short-circuit evaluation; Alternative execution: if…else

**Item:** What does this program print? temp = 35 raining = False windy = "yes" if temp > 30 or raining and windy == "no":     print("Stay inside") else:     print("Go out") if windy == True:     print("Take a jacket") print("Done")

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```
**Cited:** Chapter 3 Lab Exercise II (notebook export) | Cells 10–12

```text
# E.g. 1:
Ask the user to enter 'yes' or 'no'. 
If it is raining or there is no transport,
then attend the online class.
Otherwise, attend an offline class on campus.
```

```text
user = input('Enter Yes or No:\t')
case1 = 'raining'
case2 = 'no transport'
if case1 == True or case2 == True:
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Enter Yes or No:	Yes
Stay on Campus
Check your status!!
```

```text
#user = input('Enter Yes or No:\t')
case1 = input('Case is raining or not raining:\t')
case2 = input('no transport / transport:\t')
if case1 == 'raining' and case2 == 'no transport':
    print('Attend the online class!')
else:
    print('Stay on Campus')
print('Check your status!!')    
--- output ---
Case is raining or not raining:	raining
no transport / transport:	transport
Stay on Campus
Check your status!!
```

### x5-mcq-07 (mcq)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; The counter pattern: initialize, test, update

**Item:** The loop counter is changed in two places. What does this program print? n = 1 total = 0 while n < 10:     if n % 3 == 0:         n = n + 2     total = total + n     n = n + 1 print(total, n)

**Cited:** Topic 4 — Iteration | Slide 10

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x5-mcq-08 (mcq)

**Concepts:** Numbers and None as loop conditions; The while loop: syntax and flow; The end parameter of print()

**Item:** The while condition is a number, not a comparison. What does this program print? count = 7 while count % 4:     print(count, end=",")     count = count + 3 print("end", count)

**Cited:** Topic 4 — Iteration | Slide 8

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
'''
while 3:
    print ("Hello")
'''
'''
while None:
    print ("Hello")
'''
'''
while 0:
    print ("Hello")
'''

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
'''
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
Hello
'''
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in w
```
**Cited:** Topic 4 — Iteration | Slide 6

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 77

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```

### x5-tr-01 (tracing)

**Concepts:** Assignment operators; Formatted output (f-strings); Escape sequences; The end parameter of print(); Order of operations (precedence)

**Item:** Write exactly what this program prints. (A tab may be typed as a space.) x = 5 x *= 2 + 1 x //= 4 y = x % 3 ** 2 print("x =", x, end="; ") print(f"y={y}\tdone") print('It\'s', x - y * 2)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 37

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **+= (Add and assign)**
  - ▪ Adds the right operand to the left operand and assign the result to the left operand
  - ▪ Performs the arithmetic operation (+) first then do the assignment
- **-=, \*=, /=, //=, %=, \*\*=**

**Code**:
'''
>>> num+=10
'''
Boxed equivalent: `num = num + 10`
'''
>>> num*=2  equivalent to
>>> num**=3 equivalent to
'''
Boxed equivalents: `num = num * 2` and `num = num ** 3`

**Output shown**: none
**Diagrams/tables**: Three outlined boxes showing the expanded forms (listed above).
**Notes for curriculum**: Augmented assignment operators (+=, -=, *=, /=, //=, %=, **=) and their expanded equivalents.
**
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 10–11

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
  - **\n** – new line character
  - **\t** – tab space character

**Code**:
'''
>>>print("Welcome to \n UTAS")
'''
'''
>>>print("Welcome to \t UTAS ")
'''
(straight ASCII double quotes; no space after `>>>`; the second string has a trailing space before the closing quote. In the source, the spaces in "Welcome to" and after "to" are non-breaking spaces, U+00A0.)

**Output shown**:
'''
Welcome to
 UTAS
'''
'''
Welcome to          UTAS
'''
(first output: "UTAS" is on a new line with a leading space; second output: a tab gap between "Welcome to" and "UTAS")
**Diagrams/tables**: none
**Notes for curricul
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 75

```text
— Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
'''

**Code** (formatted version; curly quotes; leading space before `print`):
'''
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
'''

**Output shown**:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 76

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```

### x5-tr-02 (tracing)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else; Conditional expression (single-line if)

**Item:** The user types 12 and then 4. Write exactly what this program prints. a = int(input()) b = int(input()) if a > b:     if a - b > 5:         print("far")     elif a % b == 0:         print("multiple")     else:         print("close") elif a == b:     print("same") else:     print("smaller") r = "even" if (a + b) % 2 == 0 else "odd" print(r, a // b)

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slides 41, 46

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

```text
— (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
'''
n = int(input("Enter  number:"))
if (n<=15):
    if (n 
```
**Cited:** Topic 3 — Conditional Execution | Slide 28

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```

### x5-tr-03 (tracing)

**Concepts:** Printing a multiplication table with a loop; while loops with conditionals inside; The counter pattern: initialize, test, update

**Item:** Write exactly what this program prints. num = 4 m = 1 while m <= 10:     product = num * m     if product % 3 == 0:         print(num, "*", m, "=", product)     m = m + 2 print("last m:", m)

**Cited:** Topic 4 — Iteration | Slide 15

```text
— Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
'''
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
'''

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multipli
```
**Cited:** Topic 4 — Iteration | Slides 9–10

```text
— The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**:
'''
1
2
3
4
5
'''

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---
```

```text
— Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
'''
A=1
while A<=5:
    print (A)
    A=A+1
'''

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x5-tr-04 (tracing)

**Concepts:** Accumulating totals, averages and products; while loops with conditionals inside; Type conversion with int() and float()

**Item:** The user types 2, 6, 1 and 7 (one per line). Use a trace table for count, value, total and above. Write exactly what the program prints. count = 0 total = 0 above = 0 while count < 4:     value = float(input())     total += value     if value > total / (count + 1):         above += 1     count += 1 print(total / count, above)

**Cited:** Topic 4 — Iteration | Slides 13–14

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```

```text
— Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
'''

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

*
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x5-err-01 (error)

**Concepts:** Type conversion with int() and float(); Reading input with input(); Formatted output (f-strings)

**Item:** The user types 7.5 and then 4. The program stops with an error. Which line fails, and why? hours = input() rate = float(input()) pay = int(hours) * rate bonus = pay // 10 + 0.5 print(f"Pay: {pay} Bonus: {bonus}")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 61

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 64–65

```text
— (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
'''
Age = int(input(“Enter Age :”) )
'''

**Output shown**: A console mock-up:
'''
>>> Enter Age   :  20
'''

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console sh
```

```text
— Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
'''
int(X)
float (X)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---
```

### x5-err-02 (error)

**Concepts:** Nested conditions; Alternative execution: if…else; Variables and assignment

**Item:** The user types 65. The program stops with an error. Which line fails, and why? marks = int(input()) if marks >= 50:     if marks >= 80:         level = "high" else:     level = "low" print("Level:", level)

**Cited:** Topic 3 — Conditional Execution | Slide 41

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Topic 3 — Conditional Execution | Slide 45

```text
— Nested Conditions

**Text**:
- **Examples** (red, underlined)
- Program that checks if a <u>number is positive</u>, and if <u>single digit number</u>.
- If within if:

**Code** (screenshot of a Jupyter cell labelled `In [29]:`; straight single quotes; indentation 4 and 8 spaces):
'''
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')
'''

**Output shown**:
'''
x is a positive single-digit number.
'''

**Diagrams/tables**: none

**Notes for curriculum**: Nested if without else: the inner condition is checked only if the outer one is True.

**Issues**: `x` is not defined in the shown cell (the output depends on a value assigned in an earlier, unshown notebook cell
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 57

```text
— (no title)

**Text**: none (empty title bar).

**Code** (left column):
'''
>>> A , B , C = 10 , 20 , 30
>>>  a > b
Error
>>> A > B
False
>>> A < C
True
>>> B != C
True
'''

**Code** (right column):
'''
>>> A + 20 > B
True
>>> A +20 == C
True
>>> B != C -10
False
'''

**Output shown**: Inline above ("Error" is in purple; the boolean results are in blue).

**Diagrams/tables**: none

**Notes for curriculum**: Relational operators (`>`, `<`, `!=`, `==`). Arithmetic binds tighter than comparison. Names are case-sensitive.

**Issues**: "Error" is a simplification. Python actually prints a traceback ending in `NameError: name 'a' is not defined`. All other results are correct. The slide has no ti
```

### x5-code-01 (coding)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else; Type conversion with int() and float(); Writing complete input → process → output programs

**Item:** Write a discount program for a shop.  Read two values, in this order: 1. the customer type (text, for example member or guest) 2. the purchase amount (a decimal number, use float)  Discount rules: - If the type is exactly member:   - amount 100 or more: 15% discount   - amount 50 or more (but less than 100): 10% discount   - any smaller amount: 5% discount - For any other type:   - amount more tha

**Cited:** Topic 3 — Conditional Execution | Slides 41, 48

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

```text
— solution

**Text**: none besides the code.

**Code** (screenshot of a Jupyter cell labelled `In [10]:`; straight double quotes; no trailing space in the input prompts; indentation 4 and 8 spaces; typo "sixe" is in the original):
'''
h=int(input("enter your height in feet"))
w=int(input("enter your weight in Kg"))
r=w/h
if r>5:
    if(r>20):
        print("size XXL")
    else:
        print("sixe L")
else:
    if(r>3):
        print("Size M")
    else:
        print("Size S")
'''

**Output shown** (inputs 5 and 50; the prompts have no trailing space so the input is glued to the prompt):
'''
enter your height in feet5
enter your weight in Kg50
sixe L
'''

**Diagrams/tables**: none

**Notes f
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 11–12

```text
Class Exercise: Shopping Discount
Question

Write a Python program for a supermarket that asks the customer to enter:

1. The customer's name
2. The total purchase amount in OMR
3. Whether the customer has a membership (yes or no)


The supermarket gives a 2% discount when:

The purchase amount is more than 50 OMR, AND the customer is a member.    

If both conditions are satisfied, calculate the 2% discount and the final amount.

Otherwise, display the original purchase amount.

Condition	                                                                   Output
Purchase is more than 50 OMR AND customer is a member	          Calculate the discount and display the customer name, the total amo
```

```text
name = input("Enter customer name: ")
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
```

### x5-code-02 (coding)

**Concepts:** while loops with conditionals inside; Accumulating totals, averages and products; The counter pattern: initialize, test, update; Reading input with input()

**Item:** Write a program that analyses a group of marks.  1. Read a whole number N: how many marks will be entered. 2. If N is 0 or less, read nothing else and print only: No marks 3. Otherwise use a while loop to read N marks (decimal numbers, use float), one per input.    A mark of 50 or more is a pass; a mark below 50 is a fail. 4. After the loop print exactly three lines: Passed: <number of passes> Fai

**Cited:** Topic 4 — Iteration | Slide 14

```text
— Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
'''

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

*
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```

### x6-mcq-01 (mcq)

**Concepts:** Identifier naming rules and keywords; Variables and assignment

**Item:** Each of the six lines below is tried on its own as an assignment statement. How many of them are valid Python? _total2 = 5 2nd_total = 5 total-2 = 5 Total_2 = 5 from_ = 5 None = 5

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 20

```text
— Variables and Keywords

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
**Notes for curriculum**: Identifier naming rules: start with a letter or _, then lett
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 21

```text
— Variables and Keywords

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
**Issues**: The rendered layout is broken. Tab misalignment 
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 23, 25

```text
— Variables and Keywords

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
```

```text
— Exercise

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
```

### x6-mcq-02 (mcq)

**Concepts:** Numbers: int, float and complex; The type() function; Values and data types

**Item:** What does this program print? a = 1.5e2 b = 7j print(type(a), a // 4, type(b))

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 5

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **float**
- Represent real numbers and are written **with a decimal point**.
- Example box:
  '''
  3.5
  -0.004
  '''
- may also be in **scientific notation**, with E or e indicating the power of 10.
- Example box (exponents are superscripts on the slide):
  '''
  5.6e-6 = 5.6 * 10^-6
  6 E10 = 6 * 10^10
  '''
  (rendered as "5.6 * 10⁻⁶" and "6 * 10¹⁰"; the `^` above only marks the superscript)

**Code**: none (notation examples)
**Output shown**: none
**Diagrams/tables**: Same Numbers → int / float / complex tree as slide 4, arrow pointing up to float.
**Notes for curriculum**: float type; decimal-point l
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 6

```text
— Numbers

**Text**:
- Diagram header: **Numbers** → int, float, complex; arrow up to **complex**
- Represent complex numbers, of the form **a + bJ**
  - ✔ **a** is the real part.
  - ✔ **b** is the imaginary part.
- Example box:
  '''
  4+5j
  7j
  -7J
  '''

**Code**: none
**Output shown**: none
**Diagrams/tables**: Same Numbers tree; arrow to complex. Bottom-left: the same Real Python calculator illustration as slide 4.
**Notes for curriculum**: complex type; j/J suffix for the imaginary part.
**Issues**: none

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 13

```text
— Values and types

**Text**:
- **type() function:**
- If you are not sure what type a value has, the interpreter can tell you using the type() function.

**Code / session** (as shown; result lines indented under each prompt):
'''
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
'''
(first call uses ASCII single quotes; `‘17’` uses U+2018/U+2019 and `“3.2”` uses U+201C/U+201D, rendered in bold teal; the last three prompts have no result shown, presumably left for students)

**Output shown**: `str`, `int`, `float`, `bool` (for the first four calls only).
**Diagrams/tables*
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

### x6-mcq-03 (mcq)

**Concepts:** Strings and quotes; Escape sequences; Output with print(); Arithmetic operators

**Item:** What does this program print? word = "ha" * 2 + 'h\ a' print(word, "!" * 3) print('''It's "ok"''')

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 12

```text
— (no title in header bar; body heading "Escape Sequences")

**Text**:
- **Escape Sequences**
- Also, remember that a **single backslash at the end of the line** indicates that the **string is continued in the next line but it does not mean that there is a newline.**

**Code** (inside a picture; straight ASCII quotes):
'''
"This is the first sentence.\
This is the second sentence."
'''
Text below the picture box (part of the same picture): equivalent to "This is the first sentence.This is the second sentence."

**Output shown**: none (equivalence statement above)
**Diagrams/tables**: Screenshot with a pale pink box containing the two-line string.
**Notes for curriculum**: Backslash line cont
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 9

```text
— Values and types

**Text**:
- ➢ **Using Triple Quotes (''' or """).** You can specify **multi-line strings** using triple quotes. Also, you can use single quotes and double quotes freely within triple quotes. Examples are

**Code** (illustrative; characters exactly as in source):
'''
’’’ welcome
     to
     UTAS’’’
'''
'''
“““welcome
     to
     UTAS”””
'''
(the line indentation of "to"/"UTAS" is visual alignment under "welcome" on the slide; the first example has a space after the opening quotes, the second does not)

**Output shown**: none
**Diagrams/tables**: Two examples side by side in large type, quote marks coloured gold.
**Notes for curriculum**: Triple-quoted (multi-line) string
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 29, 31

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **\* (multiply)**
- Gives the product of the two numbers. If the operand is string it returns the string repeated by the number of times specified in second operand.

**Code / session**:
'''
>>> 2 * 3
6
>>> 2* 3.5
7.0
>>> 'a' * 3
‘aaa’
'''
(spacing quirk "2* 3.5" as shown; input `'a'` uses ASCII quotes)
**Output shown**: `6`, `7.0`, `‘aaa’` (curly U+2018/U+2019) (green)
**Diagrams/tables**: none
**Notes for curriculum**: * for numeric multiplication (int × float → float) and string repetition.
**Issues**: Output `‘aaa’` uses smart quotes. Python 3 displays `'aaa'`.

---
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 66

```text
— Input and Output

**Text**:
- • There will be situations where your program want to <u>print some results,</u> use the print() function.
- **Syntax of print():** (heading, underlined)
- **print(\*objects)**
  - o objects is the object to the printed.
  - o \* indicates that there can be more than one object

**Code**:
'''
print(*objects)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The `print()` function, which accepts multiple objects.

**Issues**: Typo: "to the printed" should be "to be printed". Grammar: "your program want to" should be "wants to". The syntax is simplified: the full signature also includes `sep`, `end`, `file` and `flush` (`end` is i
```

### x6-mcq-04 (mcq)

**Concepts:** Escape sequences; Strings and quotes; Reading input with input()

**Item:** The user would type Ali and then 72. What happens when this program is run? name = input("Name: ") score = float(input("Score: ")) print("Student:", name) print('Result: isn't low' if score >= 50 else "Result: low")

**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 10

```text
— Escape Sequences

**Text**:
- “What’s your name?”
- inside double quotes, you can freely use single quotes and vice versa
- ‘What’s your name?’
- Python will be confused, where the string starts and ends
- This can be solved using **Escape Sequences.**
- You specify the single quote as **\'** - notice the backslash. Now, you can specify the string as
- ‘What\’s your name?’ (the backslash is highlighted in green)

**Code** (illustrative; characters exactly as in source):
'''
“What’s your name?”
‘What’s your name?’
‘What\’s your name?’
'''
**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Mixing quote types; escaping a quote with a backslash (\').
**Issues**: All thr
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 61

```text
— Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
'''
variable = input(prompt)
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**:
```

### x6-mcq-05 (mcq)

**Concepts:** Conditional expression (single-line if); Order of operations (precedence)

**Item:** There are no parentheses around the conditional expressions. What does this program print? x = 7 y = 3 z = x - y if x > 10 else x + y * 2 w = 10 + 5 if z % 2 == 0 else -5 * 2 print(z, w)

**Cited:** Topic 3 — Conditional Execution | Slide 27

```text
— Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
'''
<expr1> if <conditional_expr> else <expr2>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line i
```
**Cited:** Topic 3 — Conditional Execution | Slide 28

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 56

```text
— Order of Operations

**Text**:
- *Examples* (red, italic)
- • 2\*\*1+1 is 3, not 4,
  - • 2\*\*1+1 → 2 +1 → **3**
- • 3\*1\*\*3 is 3, not 27.
  - • 3\*1\*\*3 → 3 \* 1 → **3**
- • 2\*3-1 is 5, not 4,
  - • 2\*3-1 → 6 -1 → **5**
- • 6+4/2 is 8, not 5.
  - • 6+4/2 → 6 + 2 → **8**

(The arrows are red, and the final results are bold red. Some asterisks render as a centred "∗" glyph in the slide font, but the text layer has a plain ASCII `*`.)

**Code**: The expressions `2**1+1`, `3*1**3`, `2*3-1`, `6+4/2` (inline, above).

**Output shown**: none (results are given inline).

**Diagrams/tables**: none

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`
```

### x6-mcq-06 (mcq)

**Concepts:** Conditional execution: the if statement; Chained conditionals: if…elif…else

**Item:** Note which statements are separate if statements and which belong to one if…elif. What does this program print? n = 12 if n % 2 == 0:     n = n // 2 if n % 3 == 0:     n = n + 1 elif n > 5:     n = n * 10 if n > 6:     print("big", n) print("end", n)

**Cited:** Topic 3 — Conditional Execution | Slides 6, 8

```text
— Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

*
```

```text
— (no title; title bar empty) Syntax: the statements block

**Text**:
- **Syntax** (red, underlined)
- ▪ **<statements>** the statement will be executed only if the condition is returning **True.**

**Code** (syntax template; `<statements>` highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The indented body of an if statement runs only when the condition evaluates to True.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Topic 3 — Conditional Execution | Slide 16

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
'''
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
'''

**Output shown**:
Run 1 (left screenshot, input 100):
'''
En
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```

### x6-mcq-07 (mcq)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else; Conditional execution: the if statement

**Item:** For which input does this program print exactly one line, Warm, and nothing else? t = int(input()) if t >= 20:     if t > 30:         print("Hot")     elif t >= 25:         print("Warm")     else:         print("Mild")     if t % 5 == 0:         print("Round") else:     print("Cool")

**Cited:** Topic 3 — Conditional Execution | Slides 40–41

```text
— Nested Conditions

**Text**:
- We can write an entire if… else statement in another if… else statement called nesting, and the statement is called **nested if**.
- In a **nested if** construct, you can have an if … elif … else construct inside an if … elif.. Else construct.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): arrow into diamond "Test Expression". "True" ↓ box "Body of if". "False" (red) → diamond "Nested test expression"; its "True" ↓ box "Body of nested if"; its "False" (red) ↓ box "Body of nested else". The three body boxes merge into box "Statement just below if", with an arrow continuing downward.

**Notes for curriculum**: Def
```

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```
**Cited:** Topic 3 — Conditional Execution | Slide 46

```text
— (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
'''
n = int(input("Enter  number:"))
if (n<=15):
    if (n 
```
**Cited:** Topic 3 — Conditional Execution | Slide 14

```text
— Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 3. Note that there can be *more than one* statement after an *if*
- Annotation (with a brace pointing at the two indented print lines): "all the statements at the matching indentation level, are considered part of the same block. (if-block)"

**Code** (screenshot, Jupyter-style cell; straight double quotes; body indented 4 spaces):
'''
x=500
y=100
if x>y:
    print("x is big")
    print("y is small")
'''

**Output shown**:
'''
x is big
y is small
'''

**Diagrams/tables**: Brace grouping the two indented print statements, with the annotation text above.

**Notes for curriculum**: An if-block can contain multiple statements;
```

### x6-mcq-08 (mcq)

**Concepts:** What is iteration?; The while loop: syntax and flow; Accumulating totals, averages and products; Logical operators and short-circuit evaluation

**Item:** What does this program print, and which kind of iteration (as defined on the slides) does this while loop perform? total = 0 n = 5 while n > 0 and total < 8:     total = total + n     n = n - 2 print(total, n)

**Cited:** Topic 4 — Iteration | Slide 2

```text
— What is iteration?

**Text**:
- Repeated execution of a set of statements is called **iteration**.
- Python provides several language features to make iteration easier.
- There are two types of iteration:
  - **Definite iteration** (red), in which <u>the number of repetitions is specified explicitly in advance</u>
    - Example: **for loop**
  - **Indefinite iteration** (red), in which the code block executes <u>until some condition is met</u>
    - Example: **while loop**

(Footer: 2)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Definition of iteration. Definite iteration (for loop) vs indefinite iteration (while loop).

**Issues**: none

-
```
**Cited:** Topic 4 — Iteration | Slides 6–7

```text
— While loop

**Text**:
- In while loop,
  - test expression is checked first.
  - The body of the loop is entered only, if the **<test_condition>** (blue) evaluates to **True**.
  - After one iteration, the **<test_condition>** is checked again.
  - This process continues until the **<test_condition>** evaluate to **False**.
- Body starts with indentation (green) and the first unindented line marks the end.

(Footer: 6)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Semantics of the while loop: the condition is checked before each iteration, and the loop ends when it is False. The indented body ends at the first unindented line.

**Issues**: Gr
```

```text
— (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (a red rounded box is drawn around "le <test_condition>:")
- **<Body of while>** (green)
- the **<test_condition>** is a ***Boolean expression.***
- A line splits from that bullet into two arrows: ← "True" and → "False" (orange)
- Under "True": "Use the logical operators."
- Under "False": "Use the comparison operators"

(Footer: 7)

**Code**: none (syntax template only, as on slide 5).

**Output shown**: none

**Diagrams/tables**:
- Left tree (picture): root box "Logical Operators" with three children (red text): **AND**, **OR**, **NOT**.
- Right tree (slide shapes): root rounded box "Comparison operators" (wrapped as "Comp
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```

### x6-tr-01 (tracing)

**Concepts:** Expressions and statements; Comments; Assignment operators; Order of operations (precedence); The end parameter of print(); Boolean values

**Item:** This program is run as a script (not typed into the interactive shell). Write exactly what it prints. x = 4 x + 10        # only an expression # x = x * 3 y = x ** 2 // 3 % 4 x, y = y, x print(x, y, end=" | ") print(x * y > 10, not x < y)

**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 48–49

```text
— Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
'''
17
x
x + 17
'''
'''
>>> 1 + 1
'''

**Output shown**:
'''
2
'''
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a v
```

```text
— Expressions and Statements

**Text**:
- **Statement** (heading, underlined)
- • A ***statement*** is a unit of code that the Python interpreter can execute.
- • We have seen two kinds of statements:
  - 1) **print** being an expression statement
    - – Produce an output on the screen
  - 2) **assignment.**
    - – The assignment statement produces no output.
- • When you type a statement in interactive mode, the interpreter executes it and displays the result, if there is one.
- • A script usually contains a sequence of statements. If there is more than one statement, the results appear one at a time as the statements execute.
- "Eg:" (label before the code), then "produces the output" (u
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 79

```text
— Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
'''
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
'''

**Code** (box 2):
'''
percentage = (minute * 100) / 60    # percentage of an h
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 36

```text
— Operators and operands

**Text**:
- **Assignment Operators**
- **= (assign)**
  - ▪ Assigns values from right side to left side operand
- ✔ **Assignment to same value**
  - ▪ Same value can be assigned to multiple variables
- ✔ **Multiple assignments**
  - ▪ Different values can be assigned to more than one variables

**Code** (green; layout as on slide, `>>>n=20` and `>>> num= n +10` in a second column):
'''
>>> a=5              >>>n=20
                     >>> num= n +10
'''
'''
>>> x=y=z=10
'''
'''
>>> x, y, z = 10, “hai”, 3.5
'''
(`“hai”` uses smart quotes U+201C/U+201D)

**Output shown**: none
**Diagrams/tables**: none
**Notes for curriculum**: Simple assignment, chained assignment (x
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 76

```text
— Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
'''
1 print("Python")
2 print("is the best")
'''

**Output shown** (screenshot 1):
'''
Python
is the best
'''

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
'''
1 print("Python",end=" ")
2 print("is the best")
'''

**Out
```

### x6-tr-02 (tracing)

**Concepts:** Combining conditions with and / or; Nested conditions; Conditional expression (single-line if); Comparison (relational) operators

**Item:** The user types Admin, then 1234, then 5. Write exactly what this program prints. user = input() pin = int(input()) tries = int(input()) if user == "admin" and pin == 1234 or tries > 3:     print("Access")     if tries > 3:         print("Too many tries") else:     print("Denied") level = "high" if pin % 2 == 0 and tries <= 3 else "low" print(level)

**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 52

```text
— Order of Operations

**Text**: ✔**Operators with the same precedence are evaluated from left to right.**

**Code**: none

**Output shown**: none

**Diagrams/tables**: Precedence table in a picture with a yellow header, listed from highest to lowest precedence:

| Category | Operators | Associativity |
|---|---|---|
| Exponentiation | `**` | **right to left** (bold, dark red) |
| Unary sign | `+x   -x` | left to right |
| Multiplicative | `*   /   //   %` | left to right |
| Additive | `+   -` | left to right |
| Relational (comparison) | `==   !=   <   >   <=   >=` | left to right |
| Boolean NOT | `not` | left to right |
| Boolean AND | `and` | left to right |
| Boolean OR | `or` | left t
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 41

```text
— Operators and operands

**Text**: none outside the code.

**Code / session** (three groups; prompts in red, results in blue; ASCII quotes):
'''
>>> x = 2
>>> y = 2
>>> x == y
True
'''
'''
>>> x = 'str'
>>> y = 'stR'
>>> x == y
False
'''
'''
>>> x = 2
>>> y = 3
>>> x != y
True
'''
**Output shown**: True, False, True
**Diagrams/tables**: The same Real Python TRUE/FALSE comparison-machine illustration as slide 40.
**Notes for curriculum**: == and != on numbers and strings; string comparison is case-sensitive.
**Issues**: none

---
```
**Cited:** Topic 3 — Conditional Execution | Slide 28

```text
— conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
'''
x = 10
Result = 100 if x>=10 else 200
print(Result)
'''

**Output shown**:
'''
100
'''

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).
```
**Cited:** Topic 3 — Conditional Execution | Slide 45

```text
— Nested Conditions

**Text**:
- **Examples** (red, underlined)
- Program that checks if a <u>number is positive</u>, and if <u>single digit number</u>.
- If within if:

**Code** (screenshot of a Jupyter cell labelled `In [29]:`; straight single quotes; indentation 4 and 8 spaces):
'''
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')
'''

**Output shown**:
'''
x is a positive single-digit number.
'''

**Diagrams/tables**: none

**Notes for curriculum**: Nested if without else: the inner condition is checked only if the outer one is True.

**Issues**: `x` is not defined in the shown cell (the output depends on a value assigned in an earlier, unshown notebook cell
```

### x6-tr-03 (tracing)

**Concepts:** The counter pattern: initialize, test, update; while loops with conditionals inside; The end parameter of print(); Chained conditionals: if…elif…else

**Item:** Write exactly what this program prints. n = 24 while n > 0:     if n % 4 == 0:         print(n, end="! ")     elif n % 3 == 0:         print(n, end="? ")     n = n - 5 print("stop", n)

**Cited:** Topic 4 — Iteration | Slide 11

```text
— The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
'''
N=5
while N>=1:
    print(N)
    N=N-1
'''

**Output shown**:
'''
5
4
3
2
1
'''

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```
**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 77

```text
— (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
'''
print( “Hello” , end= ‘\n’)
print ( “World” )
'''
**Output shown** 1 (picture):
'''
Hello
World
'''

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
'''
print( “Hello” , end= ‘  ’)
print ( “World” )
'''
**Output shown** 2 (picture):
'''
Hello World
'''

**Code** 3 
```

### x6-tr-04 (tracing)

**Concepts:** Accumulating totals, averages and products; while loops with conditionals inside; Arithmetic operators

**Item:** The user types 3, 0, -2 and 5 (one per line). Write exactly what this program prints. count = 1 product = 1 zeros = 0 while count <= 4:     x = int(input())     if x == 0:         zeros = zeros + 1     else:         product = product * x     count = count + 1 print("product:", product, "zeros:", zeros) print(product // (count - zeros))

**Cited:** Topic 4 — Iteration | Slide 13

```text
— (no title) [first bullet: "Exercises"]

**Text**:
- <u>**Exercises**</u>
- Using **while loop,** write  a Program to Calculate and print the Average of 5 Numbers given by the user.
  - average = sum of five numbers/5 (red)
- **Write a loop to find and print the factorial of any number** (bold, dark navy)
  - `5! = 5 × 4 × 3 × 2 × 1 = 120` (monospace, grey box)

(Footer: 13)

**Code**: none (the factorial line is an example formula, not code).

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Practice: averaging 5 user inputs with a while loop, and computing a factorial with a loop.

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There i
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slide 34

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **// (floor division)**
- **x // y   Divide x by y and round the answer down to the nearest integer value.** (red)

**Code / session**:
'''
>>> 13 // 3
	 4
>>> -13 // 3
	-5
>>>  9 / /1.81
	 4.0
'''
**Output shown**: `4`, `-5`, `4.0` (green)
**Diagrams/tables**: none
**Notes for curriculum**: Floor division // rounds toward negative infinity (note -13 // 3 = -5); with a float operand it returns a float.
**Issues**: Typo in code: `9 / /1.81` has a space between the two slashes, which is a SyntaxError in Python. The intended expression is `9 // 1.81`, which does give `4.0`.

---
```

### x6-err-01 (error)

**Concepts:** Combining conditions with and / or; Chained conditionals: if…elif…else; Output with print()

**Item:** The user types 45 and then gold. The program stops with an error. Which line fails, and why? age = int(input()) member = input() if age >= 60 or member == "gold":     fee = 5     print("Reduced fee: " + fee) elif age < 12:     fee = 3     print("Child fee:", fee) else:     fee = 10     print("Normal fee:", fee)

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slide 7

```text
— (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
'''
if  condition :
        <statements>
'''

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree d
```
**Cited:** Topic 2 — Variables, Expressions and Statements | Slides 29, 67

```text
— Operators and operands

**Text**:
- **Arithmetic Operators**
- **+ (plus)**
  - Adds two objects
- Callout (red, underlined): **concatenate two string values**

**Code / session** (inputs use ASCII single quotes):
'''
>>> 3 + 5
8
>>> 'a' + 'b'
'ab’
>>> '1' + '3'
‘13’
'''
**Output shown**: `8`; `'ab’` (straight opening quote, curly U+2019 closing quote); `‘13’` (curly U+2018/U+2019). Outputs are in green.
**Diagrams/tables**: none
**Notes for curriculum**: + adds numbers and concatenates strings.
**Issues**: The output quotes are inconsistent smart quotes. Python 3 displays `'ab'` and `'13'` with ASCII single quotes.

---
```

```text
— Input and Output

**Text**: none beyond the labels.

**Code** (curly quotes):
'''
Name= input( “Enter your name : ” )
print( “Hello ” + Name + “!”)
'''

**Output shown**: Console mock-ups:
'''
>>> Enter Name :  Hilal
'''
'''
Hello Hilal !
'''

**Diagrams/tables**: A box labelled `Name`, with a blue arrow from the label `“Hilal”` (red) into it.

**Notes for curriculum**: Reading a string with `input()` and printing it with string concatenation (`+`).

**Issues**:
- Output mismatch: `“Hello ” + Name + “!”` produces `Hello Hilal!` with no space before "!", but the slide shows `Hello Hilal !`.
- The console prompt shows "Enter Name :", but the code's prompt is "Enter your name : ".
- The code 
```

### x6-err-02 (error)

**Concepts:** The counter pattern: initialize, test, update; Accumulating totals, averages and products; The while loop: syntax and flow

**Item:** The user types 6. The program stops with an error. Which line fails, and why? n = int(input()) total = 0 while n >= 0:     total = total + 12 / n     n = n - 2 print("Total:", total)

**Cited:** Topic 4 — Iteration | Slide 11

```text
— The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
'''
N=5
while N>=1:
    print(N)
    N=N-1
'''

**Output shown**:
'''
5
4
3
2
1
'''

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---
```
**Cited:** Topic 4 — Iteration | Slide 12

```text
— The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
'''
# i is iterator
i = 1
# sum variable hold the result
sum = 0
#start of while loop
while i <= 10 :
    sum = sum + i
    i = i + 1
#end of while loop
print('the sum is ', sum)
'''

**Output shown**:
'''
the sum is  55
'''
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not p
```
**Cited:** Topic 3 — Conditional Execution | Slide 15

```text
— EXERCISE

**Text**:
- Write a program that ask the user to enter two numbers. If the second numbers is not equals to zero, calculate the division of the two numbers and display the result of division.

**Code**: none (only sample runs are shown)

**Output shown** (two console screenshots separated by a horizontal line):
Run 1 (second number is 0 — nothing else printed):
'''
Enter a number: 2
Enter a number: 0
'''
Run 2:
'''
Enter a number: 1
Enter a number: 2
the result of dividing 1 / 2 = 0.5
'''

**Diagrams/tables**: A horizontal line separates the two sample runs.

**Notes for curriculum**: Exercise: input of two numbers, `!=` comparison to guard against division by zero, `/` (true divi
```

### x6-code-01 (coding)

**Concepts:** Nested conditions; Chained conditionals: if…elif…else; Combining conditions with and / or; Writing complete input → process → output programs

**Item:** Write a parking fee program.  Read two values, in this order: 1. the vehicle type (text) 2. the number of hours parked (a whole number, use int)  Apply these rules in this order: 1. If the hours are less than 0 or more than 24, print Invalid hours and nothing else. 2. Otherwise, if the type is car: the first 2 hours are free; every hour after that costs 0.5 OMR. 3. Otherwise, if the type is truck:

**Cited:** Topic 3 — Conditional Execution | Slide 33

```text
— Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
'''
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
       
```
**Cited:** Topic 3 — Conditional Execution | Slides 41, 48

```text
— (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
'''
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
'''

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).
```

```text
— solution

**Text**: none besides the code.

**Code** (screenshot of a Jupyter cell labelled `In [10]:`; straight double quotes; no trailing space in the input prompts; indentation 4 and 8 spaces; typo "sixe" is in the original):
'''
h=int(input("enter your height in feet"))
w=int(input("enter your weight in Kg"))
r=w/h
if r>5:
    if(r>20):
        print("size XXL")
    else:
        print("sixe L")
else:
    if(r>3):
        print("Size M")
    else:
        print("Size S")
'''

**Output shown** (inputs 5 and 50; the prompts have no trailing space so the input is glued to the prompt):
'''
enter your height in feet5
enter your weight in Kg50
sixe L
'''

**Diagrams/tables**: none

**Notes f
```
**Cited:** Chapter 3 Lab Exercise III (notebook export) | Cells 9–10

```text
Class Exercise: Fruit Shop

Question

Write a Python program for a fruit shop. The program should ask the customer to enter:

The fruit name
The quantity in kilograms

The shop sells mango, banana, and watermelon.

The shop has three fruits with different prices:

Mango - 2.000 OMR per kg
Banana - 1.000 OMR per kg
Watermelon - 0.500 OMR per kg    

Condition	                                 Output
If the fruit is mango	                Total cost: 6.0 OMR
If the fruit is banana	                Total cost: 3.0 OMR
If the fruit is watermelon	            Total cost: 1.5 OMR
If the fruit is none of these	        Fruit not available


The program should calculate and display the total cost. Formul
```

```text
fruit = input("Enter fruit: ")
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
--- output ---
Total cost: 3.0 OMR
```

### x6-code-02 (coding)

**Concepts:** while loops with conditionals inside; The counter pattern: initialize, test, update; Accumulating totals, averages and products; Nested conditions

**Item:** A cashier enters item prices (decimal numbers, use float) one at a time. Use a while loop that keeps reading prices until exactly 5 VALID prices have been read.  - A price of 0 or less is not valid: print Invalid price and do NOT count it as one of the 5 items. - A valid price of 10 or more is a big item: the customer pays 90% of it (a 10% discount). - Any other valid price is paid in full.  After

**Cited:** Topic 4 — Iteration | Slide 18

```text
— Exercise

**Text**:
- Write python program that display the price of products after discount. The program accepts 3 products price purchased by the user.
- If the product price is higher than 50 OMR, the discount percentage is 40%. Otherwise, the discount percentage is 20%. Calculate the discount price for each product.
- Discounted price = product price –(product price * discount percentage )  (red; uses an en dash "–" as the minus sign)

(Footer: 18)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot, as visible on the slide):
'''
Enter product 1 price in OMR: 20.5
the dicounted price is  16.4 OMR
Enter product 2 price in OMR: 50
the dicounted price is  30.0 OM
```
**Cited:** Topic 4 — Iteration | Slide 17

```text
— Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
'''
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
'''

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The tex
```
**Cited:** Chapter 4 Lab Exercise IIII (notebook export) | Cells 12–13

```text
Write a Python program using a while loop to help students track their Python practice hours over seven days.

     - Accept the number of hours a student practices Python each day.
     - Calculate the total practice hours.
     - Display the total practice hours.
     - If the total hours are 10 or more, display "Good practice!"; otherwise, display "Need more practice!".

    
Then convert the program to use a for loop.     
```

```text
total_hours = 0
count = 0
while count < 7:
    num_hours = float(input('Enter daily practice hours: '))
    total_hours = total_hours + num_hours
    count+=1

if total_hours>=10:
    print('Good Practice!')
else:
    print('Need more Practice!')
print('Total hours = ', total_hours)    
--- output ---
Good Practice!
Total hours =  14.0
```