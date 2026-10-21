# Topic 2 - Variables, expressions and statements: Slides 43–83

Transcribed from the slide images in `render/hi/t2-43.png` .. `t2-83.png` and checked against the text layer in `t2.txt`. Where the slides use typographic ("smart") quotes, they are kept exactly as shown: “ ” (U+201C/U+201D) and ‘ ’ (U+2018/U+2019). Slides 62–64, 67–73 and 77 have an empty title bar, so their entries use "(no title)".

---

## Slide 43 — Operators and operands

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

## Slide 44 — Operators and operands

**Text**:
Python will not evaluate **B** since it knows that the left-hand side (**A**) of the 'and' expression is **False** (bold, underlined) which implies that the whole expression will be False irrespective of the other values. This is called **short-circuit evaluation**.

**Code** (orange rounded box):
```
>>> A = False
>>> B = True
>>>A and B
```

**Output shown**: none

**Diagrams/tables**: The same `and` truth table as slide 43 (A | B | A AND B: False False False / False True False / True False False / True True True).

**Notes for curriculum**: Short-circuit evaluation of `and`.

**Issues**: The result of `A and B` is not shown (Python would display `False`). There is no space after the third `>>>` prompt (cosmetic).

---

## Slide 45 — Operators and operands

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

## Slide 46 — Operators and operands

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

## Slide 47 — Expressions

**Text**: "Expressions" (section title slide with the Python™ logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo only.

**Notes for curriculum**: Section divider for Expressions.

**Issues**: none

---

## Slide 48 — Expressions and Statements

**Text**:
- **Expressions** (heading, underlined)
- • An expression is a combination of values, variables, and operators.
- • If you type an expression in interactive mode, the interpreter evaluates it and displays the result:

**Code**:
```
17
x
x + 17
```
```
>>> 1 + 1
```

**Output shown**:
```
2
```
(On the slide the `2` is indented under `1 + 1`.)

**Diagrams/tables**: Arrows point to boxed labels: `17` ← "Value", `x` ← "Variable", `x + 17` ← "Expression".

**Notes for curriculum**: Definition of an expression. Interactive mode evaluates an expression and echoes its result.

**Issues**: The labels can mislead. Only `x + 17` is labelled "Expression", but a value alone (`17`) and a variable alone (`x`) are also valid expressions. The source text (Think Python) presents all three as expressions. Cosmetic: a real REPL prints `2` at column 0, not indented.

---

## Slide 49 — Expressions and Statements

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
- "Eg:" (label before the code), then "produces the output" (underlined) before the output.

**Code**:
```
print(1)
x = 2
print(x)
```
(The slide shows these after "Eg:", with slightly uneven left alignment.)

**Output shown**:
```
1
2
```

**Diagrams/tables**: none

**Notes for curriculum**: Definition of a statement. Expression statements versus assignment statements. Scripts run statements in sequence.

**Issues**: Minor. The three code lines are slightly misaligned on the slide; as a script they would all start at column 0. "print being an expression statement" comes from older (Python 2-era) wording. In Python 3, `print(...)` is a function call used as an expression statement. The slide is acceptable but simplified.

---

## Slide 50 — Exercise

**Text**: none besides the title.

**Code** (left column; all string quotes are curly “ ”):
```
>>> 3 * “python”
“pythonpythonpython”

>>> 3 * “3”
“333”

>>> A , B = 11/5 , 11%5
>>> print(A)
>>> print(B)
2.2
1
```

**Code** (right column):
```
>>> a=7
>>> a+=4
11

>>> A , B = 10/3 , 10//3
>>> print(A)
>>> print(B)
3.33333333
3
```
(On the slide the line `>>> A , B = 10/3 ,` wraps, and `10//3` appears on the next line.)

**Output shown**: As shown inline above: “pythonpythonpython”, “333”, 2.2, 1, 11, 3.33333333, 3.

**Diagrams/tables**: none

**Notes for curriculum**: String repetition with `*`, true division `/`, modulus `%`, floor division `//`, augmented assignment `+=`, tuple assignment.

**Issues**:
- The curly quotes in the code (`“python”`, `“3”`) would cause `SyntaxError: invalid character '“' (U+201C)` in real Python.
- Python echoes strings with straight single quotes: `'pythonpythonpython'` and `'333'`, not curly double quotes.
- `>>> a+=4` is an assignment statement and prints nothing. The `11` would only appear after a separate `>>> a`.
- `10/3` prints `3.3333333333333335` in Python 3, not `3.33333333`.
- The outputs of both `print()` calls are grouped after both calls. In a real interactive session, each output appears immediately after its own `>>> print(...)` line.

---

## Slide 51 — Order of Operations

**Text**:
- • When more than one operator appears in an expression, the order of evaluation depends on the ***rules of precedence***.
- • For mathematical operators, Python follows mathematical convention. The acronym ***PEMDAS*** is a useful way to rem[ember the rules:] (the image hides the bracketed part; it comes from the text layer)
- • **Parentheses** have the highest precedence and can be used to force an expression to evaluate in the order you want. Since expressions in parentheses are evaluated [first.] (the bracketed word is cut off at the bottom edge; it comes from the text layer)

**Code**: none

**Output shown**: none

**Diagrams/tables**: PEMDAS graphic. The letters P E M D A S sit in coloured blocks (P blue, E purple, M and D green, A and S orange-red) and fan out into panels: "Parentheses ( )" | "Exponents a²" | "Multiply X OR Divide ÷" | "Add + OR Subtract −".

**Notes for curriculum**: Operator precedence, the PEMDAS mnemonic, and using parentheses to force evaluation order.

**Issues**: Layout defects. The PEMDAS image covers the end of the second bullet: only "useful way to rem" is visible, and the full text is "useful way to remember the rules:". The last bullet runs off the bottom of the slide, so "first." is clipped. "Since expressions in parentheses are evaluated first." is a sentence fragment.

---

## Slide 52 — Order of Operations

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
| Boolean OR | `or` | left to right |

**Notes for curriculum**: The Python operator precedence and associativity table.

**Issues**:
- The footnote "Operators with the same precedence are evaluated from left to right" contradicts the table's own first row: `**` is right-to-left, so `2**3**2 == 512`.
- "left to right" associativity is not meaningful for the prefix unary operators (`+x`, `-x`, `not`). Chained prefix operators apply right-to-left, as in `- -x` and `not not x`.
- Comparison operators in Python chain (`a < b < c` means `a < b and b < c`) rather than simply grouping left to right.

---

## Slide 53 — Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces:
```
2 * (3-1)        ← brace under (3-1), labelled "1st Expression"
2 * 2            ← brace under 2 * 2, labelled "2nd Expression"
4
```

**Notes for curriculum**: Parentheses are evaluated first.

**Issues**: none

---

## Slide 54 — Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces:
```
(1+1)**(5-2)     ← brace under (1+1), labelled "1st Expression"
2 **(5-2)        ← brace under (5-2), labelled "2nd Expression"
2 **3            ← brace under 2 **3, labelled "3rd Expression"
8
```

**Notes for curriculum**: Parentheses before exponentiation, with left-to-right evaluation of the parenthesised parts.

**Issues**: none

---

## Slide 55 — Order of Operations

**Text**: Worked evaluation (see diagram).

**Code**: none

**Output shown**: none

**Diagrams/tables**: Step-by-step reduction with curly braces. Intermediate results (1, 4, 10, 14) are highlighted in gold:
```
10 % 3 * 4 +5 * 2   ← brace under "10 % 3", labelled "1st Expression"
1 * 4 + 5 * 2       ← brace under "1 * 4", labelled "2nd Expression"
4 + 5 * 2           ← brace under "5 * 2", labelled "3rd Expression"
4 + 10
14
```

**Notes for curriculum**: `%` and `*` share precedence and evaluate left to right, and both come before `+`.

**Issues**: Minor visual imprecision. The "1st Expression" brace extends from `10` to under the `*`, not just `10 % 3`. The result 14 is correct.

---

## Slide 56 — Order of Operations

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

**Notes for curriculum**: Precedence examples: `**` before `*`, `*` before `-`, `/` before `+`.

**Issues**: In Python 3, `6+4/2` evaluates to `8.0` because `/` always returns a float, not `8`. The intermediate step would be `6 + 2.0`. The other three examples are correct.

---

## Slide 57 — (no title)

**Text**: none (empty title bar).

**Code** (left column):
```
>>> A , B , C = 10 , 20 , 30
>>>  a > b
Error
>>> A > B
False
>>> A < C
True
>>> B != C
True
```

**Code** (right column):
```
>>> A + 20 > B
True
>>> A +20 == C
True
>>> B != C -10
False
```

**Output shown**: Inline above ("Error" is in purple; the boolean results are in blue).

**Diagrams/tables**: none

**Notes for curriculum**: Relational operators (`>`, `<`, `!=`, `==`). Arithmetic binds tighter than comparison. Names are case-sensitive.

**Issues**: "Error" is a simplification. Python actually prints a traceback ending in `NameError: name 'a' is not defined`. All other results are correct. The slide has no title.

---

## Slide 58 — (no title)

**Text**: none (empty title bar).

**Code**:
```
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
```

**Output shown**: Inline above.

**Diagrams/tables**: A red-bordered side box explains the first line:
```
A > B False
B < C True
False and True
False
```

**Notes for curriculum**: Combining relational and logical operators. `not` binds looser than `!=`, so `not B != 20` means `not (B != 20)`.

**Issues**: Minor and conceptual. The side box evaluates `B < C`, but because of short-circuit evaluation (slide 44) Python never evaluates `B < C` once `A > B` is False. The box only explains truth values. All results are correct. The slide has no title.

---

## Slide 59 — Exercise

**Text** (inside a picture): "Evaluate the following expressions."

**Code** (picture, Courier font):
```
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
```
(Item 9 uses straight double quotes. Item 10 uses curly quotes “3” and has extra space after the number.)

**Output shown**: none (no answers given).

**Diagrams/tables**: none

**Notes for curriculum**: Practice in evaluating arithmetic, logical and string expressions using precedence rules.

**Issues**: Item 10 uses curly quotes (“3”), which would be a SyntaxError if typed literally, while item 9 uses straight quotes. The slide gives no answer key.

---

## Slide 60 — Input/ Output

**Text**: "Input/ Output" (section title slide with the Python™ logo; note the space after the slash)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo only.

**Notes for curriculum**: Section divider for Input/Output.

**Issues**: none

---

## Slide 61 — Input and Output

**Text**:
- • There will be situations where your program must interact with the user. You want to <u>take input from the user</u>. We can achieve this using the **input()** function.
- **Syntax of input():** (heading, underlined)
- **variable = input(prompt)**
  - o prompt – is a string or message to tell the user about what input is required
  - o prompt is optional
  - o The value typed from keyboard will be assigned to the variable on the left side
  - o Every input received from the use will be accepted as a string. It must be converted as needed.

**Code**:
```
variable = input(prompt)
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The `input()` function: an optional prompt, and the result is always a string.

**Issues**: Typo: "from the use" should be "from the user".

---

## Slide 62 — (no title)

**Text**: "String Value" (label box).

**Code** (curly quotes):
```
Name = input(“Enter Name :”)
```

**Output shown**: A console mock-up (picture):
```
>>> Enter Name :  [empty input field]
```

**Diagrams/tables**: A cardboard box labelled `Name`, with a blue arrow from a label box reading "String Value" into it. This shows that input() stores a string in the variable.

**Notes for curriculum**: `input()` stores the user's input as a string in a variable (variable-as-box metaphor).

**Issues**: The code uses curly quotes (a SyntaxError if typed literally). The console mock-up puts `>>>` in front of the prompt text. In a real interactive session, `>>>` precedes the statement you type, and the input() prompt "Enter Name :" appears on its own line without `>>>`. The same depiction recurs on slides 63, 64, 67, 68, 70 and 72. The slide has no title.

---

## Slide 63 — (no title)

**Text**: none other than the labels below.

**Code** (curly quotes; three spaces before the colon):
```
Age = input(“Enter Age   :”)
```

**Output shown**: A console mock-up:
```
>>> Enter Age   :  20
```

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `“20“` (red) into it. This shows that the typed 20 is stored as the string "20".

**Notes for curriculum**: Even numeric input from `input()` is stored as a string.

**Issues**: The label `“20“` uses two opening curly quotes (mismatched; the text layer confirms U+201C at both ends). The code uses curly quotes. The console shows `>>>` before the prompt (see slide 62). The slide has no title.

---

## Slide 64 — (no title)

**Text**: Callout box (purple text): "To convert string to integer", with an arrow pointing to `int(` in the code.

**Code** (curly quotes):
```
Age = int(input(“Enter Age :”) )
```

**Output shown**: A console mock-up:
```
>>> Enter Age   :  20
```

**Diagrams/tables**: A box labelled `Age`, with a green arrow from the label `20` (green, no quotes) into it. Now an integer is stored.

**Notes for curriculum**: Wrapping `input()` in `int()` converts the string to an integer.

**Issues**: The code prompt has one space before the colon (`“Enter Age :”`), but the reused console mock-up shows the wider gap from slide 63 (cosmetic mismatch). The code uses curly quotes. The console shows `>>>` before the prompt. The slide has no title.

---

## Slide 65 — Data Type Conversion

**Text**:
- • **int(X)**
  - ▪ Convert value of X into integer data type
- • **float (X)**
  - ▪ Convert value of X into float data type

**Code**:
```
int(X)
float (X)
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Type conversion functions `int()` and `float()`.

**Issues**: none (the space in `float (X)` is legal Python).

---

## Slide 66 — Input and Output

**Text**:
- • There will be situations where your program want to <u>print some results,</u> use the print() function.
- **Syntax of print():** (heading, underlined)
- **print(\*objects)**
  - o objects is the object to the printed.
  - o \* indicates that there can be more than one object

**Code**:
```
print(*objects)
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The `print()` function, which accepts multiple objects.

**Issues**: Typo: "to the printed" should be "to be printed". Grammar: "your program want to" should be "wants to". The syntax is simplified: the full signature also includes `sep`, `end`, `file` and `flush` (`end` is introduced on slide 77).

---

## Slide 67 — Input and Output

**Text**: none beyond the labels.

**Code** (curly quotes):
```
Name= input( “Enter your name : ” )
print( “Hello ” + Name + “!”)
```

**Output shown**: Console mock-ups:
```
>>> Enter Name :  Hilal
```
```
Hello Hilal !
```

**Diagrams/tables**: A box labelled `Name`, with a blue arrow from the label `“Hilal”` (red) into it.

**Notes for curriculum**: Reading a string with `input()` and printing it with string concatenation (`+`).

**Issues**:
- Output mismatch: `“Hello ” + Name + “!”` produces `Hello Hilal!` with no space before "!", but the slide shows `Hello Hilal !`.
- The console prompt shows "Enter Name :", but the code's prompt is "Enter your name : ".
- The code uses curly quotes, and the console shows `>>>` before the prompt.

---

## Slide 68 — (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows point at the first two lines):
```
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
```

**Output shown**: Console mock-ups:
```
>>> Enter a number :  10
>>> Enter another number   20
```

**Diagrams/tables**: Box `num1` ← green arrow from `“10”`. Box `num2` ← green arrow from `“20”` (string values).

**Notes for curriculum**: Without conversion, `input()` gives strings "10" and "20".

**Issues**: The code uses curly quotes. The second console row has no ":" while the first does (cosmetic). The console shows `>>>` before the prompts. The slide has no title.

---

## Slide 69 — (no title)

**Text**: none (empty title bar).

**Code** (same as slide 68; arrows now point at lines 3–4):
```
num1 =input( “Enter a number : ” )
num2 =input(“Enter another number : ”)
result =num1+ num2
print(result)
```

**Output shown**:
```
1020
```

**Diagrams/tables**: Box `num1` ← `“10”`, box `num2` ← `“20”`, box `result` ← `“10”+”20”`.

**Notes for curriculum**: `+` on two strings concatenates, so "10"+"20" gives "1020", not 30.

**Issues**: In the label `“10”+”20”`, the second string opens with a closing curly quote ” (U+201D), so the quotes are mismatched. The output `1020` is correct. The code uses curly quotes. The slide has no title.

---

## Slide 70 — (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; on the slide the `result` line appears indented):
```
num1 =int(input( “Enter a number : ” ))
num2 =int(input(“Enter another number : ”))
    result =num1+ num2
print(result)
```

**Output shown**: Console mock-ups:
```
>>> Enter a number :  10
>>> Enter another number   20
```

**Diagrams/tables**: Box `num1` ← `10`, box `num2` ← `20` (green, no quotes: integers).

**Notes for curriculum**: Converting input to `int` before arithmetic.

**Issues**: The `result =num1+ num2` line appears indented. This is an artifact of space-padded text wrapping in the text box, but typed literally it would raise `IndentationError: unexpected indent`. The second console row has no ":". The code uses curly quotes, and the console shows `>>>` before the prompts. The slide has no title.

---

## Slide 71 — (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
```
num1 =int(input( “Enter a number : ” ))
num2 =int(input(“Enter another number : ”))
result =num1+ num2
print(result)
```

**Output shown**:
```
30
```

**Diagrams/tables**: Box `num1` ← `10`, box `num2` ← `20`, box `result` ← `10+20`.

**Notes for curriculum**: Integer addition after conversion, so 10+20 gives 30.

**Issues**: The code uses curly quotes. The output 30 is correct. The slide has no title.

---

## Slide 72 — (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 1–2; the `result` line appears slightly indented):
```
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
  result =num1+ num2
print(result)
```

**Output shown**: Console mock-ups:
```
>>> Enter a number :  5.2
>>> Enter another number   8.3
```

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3` (green: float values).

**Notes for curriculum**: Converting input to `float`.

**Issues**: The `result` line is visually indented (it would raise IndentationError if typed literally). The second console row has no ":". The code uses curly quotes, and the console shows `>>>` before the prompts. The slide has no title.

---

## Slide 73 — (no title)

**Text**: none (empty title bar).

**Code** (curly quotes; arrows at lines 3–4):
```
num1 =float(input( “Enter a number : ” ))
num2 =float(input(“Enter another number : ”))
result =num1+ num2
print(result)
```

**Output shown**:
```
13.5
```

**Diagrams/tables**: Box `num1` ← `5.2`, box `num2` ← `8.3`, box `result` ← `5.2 + 8.3`.

**Notes for curriculum**: Float addition after conversion.

**Issues**: The code uses curly quotes. The output 13.5 is correct (Python prints `13.5`). The slide has no title.

---

## Slide 74 — Input and Output

**Text**: "Output:" (bold, underlined).

**Code** (curly quotes):
```
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
print( “Hello” , name , “ ! Your age is ” , age , “ years” )
```

**Output shown** (green):
```
Enter your name : Hilal
Enter your age : 21
Hello Hilal ! Your age is 21 years
```

**Diagrams/tables**: none

**Notes for curriculum**: Printing several values with a comma-separated `print()`.

**Issues**:
- Output mismatch. `print()` puts a space between items, and the string literals already contain leading and trailing spaces. The real output is `Hello Hilal  ! Your age is  21  years` (double spaces before "!", "21" and "years"), not the single-spaced line shown.
- The prompt `“Enter your age :”` has no trailing space, so the typed value would appear as `Enter your age :21`. The slide shows a space.
- The code uses curly quotes.

---

## Slide 75 — Input and Output

**Text**:
- **Formatted output** (heading, underlined)
- (Orange-bordered box) The above print statement can be simplified by using formatted output. **Use ‘f’ inside** the parenthesis of the print() and variables inside curly braces.

**Code** (first version; curly quotes; note the leading space before `print`):
```
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( “Hello ”  , name , “ ! Your age is ” , age , “ years” )
```

**Code** (formatted version; curly quotes; leading space before `print`):
```
name =input( “Enter your name : ” )
age = input( “Enter your age :” )
 print( f“Hello {name} ! Your age is {age} years” )
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: f-strings (formatted string literals) as a simpler alternative to comma-separated print arguments.

**Issues**:
- Both `print(` lines have a leading space, which would raise `IndentationError: unexpected indent` if typed literally.
- The code uses curly quotes, including `f“...”`.
- The first version uses `“Hello ”` (with a trailing space), unlike slide 74's `“Hello”`. Its real output is `Hello  Hilal  ! Your age is  21  years`, while the f-string gives `Hello Hilal ! Your age is 21 years`, so the two are not output-identical.
- "Use 'f' inside the parenthesis" is imprecise. The `f` prefix must come immediately before the string's opening quote.

---

## Slide 76 — Input and Output

**Text**:
- **Printing on same line using multiple print() statements** (red, underlined heading)
- • The following code print the output in 2 lines.
- • Since, every print function moves the cursor to the next line
- • If you want to remain on the same line after a print(), then use a parameter end=“ ”

**Code** (screenshot 1; editor line numbers; straight quotes):
```
1 print("Python")
2 print("is the best")
```

**Output shown** (screenshot 1):
```
Python
is the best
```

**Code** (screenshot 2; straight quotes; a single space between the quotes, confirmed by glyph-spacing measurement on a 300-dpi render):
```
1 print("Python",end=" ")
2 print("is the best")
```

**Output shown** (screenshot 2):
```
Python is the best
```

**Diagrams/tables**: none

**Notes for curriculum**: By default `print()` ends with a newline. The `end=` parameter keeps output on the same line.

**Issues**: Grammar: "The following code print" should be "prints". The text box writes `end=“ ”` with curly quotes, while the screenshot correctly uses straight quotes. The outputs are correct.

---

## Slide 77 — (no title)

**Text**:
- • By default, python’s **print()** function ends with a **newline**.
- • Python’s print() function comes with a parameter called ‘end’. By default, the value of this parameter is **‘\n’** (in red; partly hidden behind the output picture, full text from the text layer)
- • You can end a print statement with any character/string using this parameter.

**Code** 1 (curly quotes):
```
print( “Hello” , end= ‘\n’)
print ( “World” )
```
**Output shown** 1 (picture):
```
Hello
World
```

**Code** 2 (curly quotes; the text layer has two spaces between ‘ and ’):
```
print( “Hello” , end= ‘  ’)
print ( “World” )
```
**Output shown** 2 (picture):
```
Hello World
```

**Code** 3 (curly quotes; spaces on both sides of the slash):
```
print( “Hello” , end= ‘ / ’)
print ( “World” )
```
**Output shown** 3 (picture):
```
Hello/World
```

**Diagrams/tables**: A horizontal line separates example 2 from example 3.

**Notes for curriculum**: The `end` parameter of `print()` (default `'\n'`) and custom line endings.

**Issues**:
- Layout overlaps. The first output picture covers the end of the second bullet ("…parameter is '\n'"). Example 2's code overlaps the text "using this parameter.", and its closing ")" overlaps the "Hello World" output picture, partly hiding the "H".
- Output mismatches. `end= ‘  ’` (two spaces in the text layer) would print `Hello  World` with two spaces; the slide shows one. `end= ‘ / ’` has spaces around the slash, so it would print `Hello / World`, not `Hello/World`.
- The code uses curly single and double quotes. The slide has no title.

---

## Slide 78 — Comments

**Text**: "Comments" (section title slide with the Python™ logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo only.

**Notes for curriculum**: Section divider for Comments.

**Issues**: none

---

## Slide 79 — Comments

**Text**:
- • To add notes to your programs to explain in natural language what the program is doing. These notes are called ***comments***, and in Python they start with the **# symbol**.
- • Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*.
- • Everything from the # to the end of the line is ignored; it has no effect on the program.
- **or** (between the two code boxes)

**Code** (box 1; on the slide the second line is indented under the comment):
```
# compute the percentage of the hour that has elapsed
        percentage = (minute * 100) / 60
```

**Code** (box 2):
```
percentage = (minute * 100) / 60    # percentage of an hour
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Single-line comments with `#`: a comment on its own line, or an inline comment after code.

**Issues**:
- The second bullet is garbled and contradicts itself. The source (Think Python) says, roughly, that a reader can figure out *what* the code does, so it is more useful for comments to explain *why*. The slide says "Comments are most useful to figure out *what* the code does; it is much more useful to explain *why*."
- The first bullet is a sentence fragment ("To add notes…").
- In box 1, `percentage = …` is indented under the comment and would raise `IndentationError: unexpected indent` if typed literally.
- In box 2, the comment "# percentage of an hour" is clipped against the box's right edge (the text layer confirms "hour").

---

## Slide 80 — Exercise

**Text**:
- • Write a program that will read value in radius to compute the area of a circle. Then display the computed area. ("read", "compute" and "display" in red)
- Pi=3.14
- Area= Pi * radius * radius

**Code**:
```
Pi=3.14
Area= Pi * radius * radius
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: An exercise combining input, a float conversion, an arithmetic expression and output.

**Issues**: none (minor grammar: "read value in radius").

---

## Slide 81 — Exercise

**Text**:
- • Write a python program that represent a calculator. Where the program <u>read two numbers</u> from user, perform <u>+ , - , \*  and /</u>  calculations, then <u>display</u> the result of calculations.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: A calculator exercise: input, the four arithmetic operators, output.

**Issues**: none (minor grammar: "represent" and "read" should be "represents" and "reads").

---

## Slide 82 — Exercise

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

## Slide 83 — References

**Text** (visible):
- Charles R. Severance (2016), Python for Everybody. Exploring Data Using Python 3. Open Education Resource, Creative Commons Attributions (CC-BY-NC-SA 3.0). Retrieved from http://do1.dr-chuck.com/pythonlearn/EN_us/pythonlearn.pdf
- Swaroop C H(2013). A Byte of Python. Open Education Resource, Creative Commons Attributions (CC BY-SA 4.0).Retrieved from https://python.swaroopch.com/
- Alan B. Downey (2016). Think Python: How to think Like a computer Scientist. Open Education Resource, Creative Commons Attributions (CC BY-NC 3.0). Retrieved from  http://greenteapress.com/thinkpython2/thinkpython2.pdf
- Fabrizio Romano (2018), Learn Python Programming : A Beginner's Guide to Learning the Fundamentals of Python Language to Write Efficient, High-Quality Code, 2nd Edition. Packt Publishing Limited. Retrieved from https://ebookcentral.proquest.com/lib/shctom/reader.action?docID=5446038&ppg=1

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The deck's reference list.

**Issues**:
- The text layer also contains the heading "LEARNING RESOURCE REFERENCES" and the group numbers "1" and "2". In the slide XML these are set in white (FFFFFF) on the white background, so they are invisible.
- The last URL wraps, and "&ppg=1" overlaps the Python logo at the bottom left.
- Citation formatting nits: "Swaroop C H(2013)" is missing a space, "Attributions" should be "Attribution", and the title capitalisation is "How to think Like a computer Scientist".
