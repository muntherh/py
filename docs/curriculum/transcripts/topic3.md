# Topic 3 - Conditional Execution — Slide Transcript

Source: topic3.pdf / topic3.pptx (50 slides). Images are authoritative; machine text extraction used only to cross-check spelling of text boxes.
Conventions: "[UNREADABLE]" marks text that could not be read. Quote style (straight vs curly) is noted for every code sample.

## Slide 1 — Topic 3 / CONDITIONAL EXECUTION (title slide)

**Text**:
- Python logo ("python™")
- Topic 3
- CONDITIONAL EXECUTION

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo image only.

**Notes for curriculum**: Title slide for Topic 3, Conditional Execution.

**Issues**: none

## Slide 2 — Objectives

**Text**:
- The objective of this chapter is to know about
  - Conditional execution
  - Alternative execution
  - Chained conditionals
  - Nested conditionals

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Topic overview: the four forms of conditional statements (if, if-else, if-elif-else, nested if).

**Issues**: none

## Slide 3 — Conditional Execution

**Text**:
- Check for certain **condition** and then execute or skip a sequence of statements.
- Used to test logically whether the condition is **True** or **False**, a decision-making statement.
- Callout box (green border, arrow pointing to the "Do something" box): "The condition execution will execute if the condition is **True.**"

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart: an arrow enters a diamond labelled "Condition". The "True" branch goes down to a box "Do something"; the "False" branch goes right then down to a box "Do something else". Both branches merge and continue downward.

**Notes for curriculum**: Definition of conditional execution: a condition (True/False) decides whether a block of statements runs or is skipped.

**Issues**: The flowchart shows a two-branch structure ("Do something" / "Do something else"), i.e., an if-else, while the bullet text describes executing or skipping statements (simple if). Callout wording "The condition execution" is likely meant as "The conditional execution" (wording as shown on slide).

## Slide 4 — Conditional Execution

**Text**:
- Callout (pink/orange border, arrow to the Condition diamond): "**Condition :** The Weather is nice"
- Callout (green border, arrow to the "Do something" box): "**If the weather is nice :** go to the beach"
- Callout (green border, arrow to the "Do something else" box): "**If the weather is not nice:** will not go to the beach"

**Code**: none

**Output shown**: none

**Diagrams/tables**: Same flowchart as slide 3: diamond "Condition"; "True" branch to "Do something"; "False" branch to "Do something else"; the branches merge and continue downward. Callouts map a real-life example (weather/beach) onto the flowchart.

**Notes for curriculum**: Real-life analogy for a condition and its True/False outcomes.

**Issues**: none

## Slide 5 — Conditional Execution

**Text**:
- It is <u>used to control the flow of execution</u> of the statements.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Two flow diagrams side by side (picture). Left, labelled "Sequential": a start dot, then three boxes in a vertical chain inside a dashed border, then an end node. Right, labelled "Conditional (Decision)": a start dot, a diamond with branch "T" to the left and "F" to the right, each leading to a box; the two boxes merge into one line leading to an end node; all within a dashed border.

**Notes for curriculum**: Conditional statements as a control-flow mechanism; contrast between sequential and conditional (decision) flow.

**Issues**: none

## Slide 6 — Conditional Execution

**Text**:
- The **if** statement is a decision-making statement.
- **Syntax** (red, underlined)
- a. *Boolean expression* after the if statement is called the **condition**.
- b. We end the if statement with a colon character (:)
- c. The true statements are **indented** Using tab in keyboard

**Code** (syntax template; "if" in green, "<statements>" in blue; the colon is circled in red; a brace under the leading space before `<statements>` is labelled "indentation"):
```
if  condition :
        <statements>
```

**Output shown**: none

**Diagrams/tables**: Annotation: red circle around the colon; brace labelled "indentation" under the indent before `<statements>`.

**Notes for curriculum**: Syntax of the if statement: Boolean condition, terminating colon, indented body.

**Issues**: Item c reads "The true statements are indented Using tab in keyboard" (capital "U" mid-sentence, missing punctuation) — wording as shown. Note: Python accepts spaces or tabs for indentation (PEP 8 recommends 4 spaces); the slide only mentions tab.

## Slide 7 — (no title; title bar empty) Syntax: condition as a Boolean expression

**Text**:
- **Syntax** (red, underlined)
- ▪ the condition is a ***Boolean expression.***
- Branch labels under it: True (left arrow) / False (right arrow)
- Use the logical operators.
- Use the comparison operators

**Code** (syntax template; "if" green, "<statements>" blue; the word "condition" is highlighted with a rounded pink box):
```
if  condition :
        <statements>
```

**Output shown**: none

**Diagrams/tables**:
- A line from "Boolean expression" splits into two arrows labelled "True" and "False".
- Tree diagram (picture) "Logical Operators" with three children: AND, OR, NOT (uppercase, red text).
- Tree diagram "Comparison operators" (text wraps as "Compariso / n operators" in its box) with six children, left to right: `==`, `<`, `<=`, `>`, `>=`, `!=`.

**Notes for curriculum**: The if condition is a Boolean expression evaluating to True/False, built with comparison operators (==, <, <=, >, >=, !=) and logical operators (and, or, not).

**Issues**: Slide has no title (empty title bar). Logical operators are shown in uppercase (AND, OR, NOT); in Python they must be written in lowercase (`and`, `or`, `not`) — writing `AND` in Python code is a NameError/SyntaxError. The "Comparison operators" box label wraps mid-word ("Compariso n operators") — layout glitch.

## Slide 8 — (no title; title bar empty) Syntax: the statements block

**Text**:
- **Syntax** (red, underlined)
- ▪ **<statements>** the statement will be executed only if the condition is returning **True.**

**Code** (syntax template; `<statements>` highlighted with a rounded pink box):
```
if  condition :
        <statements>
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: The indented body of an if statement runs only when the condition evaluates to True.

**Issues**: Slide has no title (empty title bar).

## Slide 9 — Example

**Text**:
- Program that check if X is positive number. Prints x is positive.
- Box (dark red border):
  - ❑ What is the condition to be checked?
    - x is positive ( x > 0)
  - ❑ What will happen if the condition is True?
    - Print x is positive

**Code** (inside the flowchart box; uses curly single quotes ‘ ’):
```
print(‘x is positive’)
```

**Output shown**: none

**Diagrams/tables**: Flowchart: arrow into a grey diamond "x > 0" (red label "Condition" with arrow pointing to it). "True" branch goes right then down to box `print(‘x is positive’)` (red label "Statement is executed"); then back left into the main line. "False" branch (label written vertically) goes straight down (red label "Statement is skipped"); both continue downward.

**Notes for curriculum**: Worked example of a simple if: identifying the condition (x > 0) and the action when True.

**Issues**: Text uses uppercase "X" ("check if X is positive") while the code/condition uses lowercase `x`. Grammar "Program that check" (sic). The flowchart code uses curly quotes ‘ ’ (would be a SyntaxError if typed into Python).

## Slide 10 — Example

**Text**: none besides the flowchart labels (same as slide 9).

**Code** (text box, monospace; straight double quotes; two spaces between `if` and `x>0`, and a space before the colon; body indented (a tab in the source text box). On the slide the print line wraps visually after "x is" because of the box width):
```
x=10
if  x>0 :
    print("x is positive")
```

**Output shown**: none

**Diagrams/tables**: Same flowchart as slide 9: diamond "x > 0" labelled "Condition"; True → `print(‘x is positive’)` ("Statement is executed"); False → straight down ("Statement is skipped"). The flowchart's print uses curly single quotes ‘ ’.

**Notes for curriculum**: Python code corresponding to the x > 0 flowchart (simple if statement).

**Issues**: The string `"x is positive"` wraps onto two lines in the slide box ("x is" / "positive")") — visual wrap only, not a real line break. Flowchart uses curly quotes ‘ ’ whereas the code uses straight double quotes.

## Slide 11 — Example

**Text**:
- 2. Write a Python program that check if number is negative

**Code** (screenshot of an editor with line numbers 1–3; straight double quotes; f-string; body indented by about 2 character widths):
```
x=-2.5
if x<0:
  print(f"value of x is {x} and is negative")
```

**Output shown**:
```
value of x is -2.5 and is negative
```

**Diagrams/tables**: none

**Notes for curriculum**: Simple if with a `<` comparison on a float; f-string output.

**Issues**: The code screenshot overlaps and partially covers the end of the task text: the word "negative" is cut off at the bottom (only its top half is visible; any trailing period is hidden). Numbered "2." although "1." appears on the following slide 12 (ordering inconsistency). Grammar "program that check" (sic). Output is consistent with Python 3.

## Slide 12 — (no title; title bar empty) Example

**Text**:
- **Example** (red, underlined)
- 1. A python program that compare between x and **y** values. And check if the value of x is less than y. prints “x is small” if True.

**Code** (screenshot, Jupyter-style cell; straight double quotes; body indented 4 spaces):
```
x=5
y=10
if x<y:
    print("x is small")
```

**Output shown**:
```
x is small
```

**Diagrams/tables**: none

**Notes for curriculum**: Simple if comparing two variables with `<`.

**Issues**: Slide has no title (empty title bar). Numbered "1." but appears after example "2." on slide 11. Grammar: "program that compare", "prints" lowercase after a period (sic). The screenshot is low resolution/blurry but legible. Output is consistent with Python 3.

## Slide 13 — Exercise

**Text**:
- write a program that ask the user to enter two numbers and check if these two numbers are the same.

**Code**: none (only a sample run is shown)

**Output shown** (console screenshot; user entered 1 and 1):
```
Enter value of x:1
Enter value of y:1
x , y are the same
```

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: read two numbers with input() and use an if with `==` to test equality.

**Issues**: Grammar "write a program that ask" (lowercase "write", "ask" for "asks") — as shown. Output line has a space before the comma ("x , y are the same"), as shown; no solution code is provided.

## Slide 14 — Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 3. Note that there can be *more than one* statement after an *if*
- Annotation (with a brace pointing at the two indented print lines): "all the statements at the matching indentation level, are considered part of the same block. (if-block)"

**Code** (screenshot, Jupyter-style cell; straight double quotes; body indented 4 spaces):
```
x=500
y=100
if x>y:
    print("x is big")
    print("y is small")
```

**Output shown**:
```
x is big
y is small
```

**Diagrams/tables**: Brace grouping the two indented print statements, with the annotation text above.

**Notes for curriculum**: An if-block can contain multiple statements; the block is defined by a common indentation level.

**Issues**: none (output is consistent with Python 3).

## Slide 15 — EXERCISE

**Text**:
- Write a program that ask the user to enter two numbers. If the second numbers is not equals to zero, calculate the division of the two numbers and display the result of division.

**Code**: none (only sample runs are shown)

**Output shown** (two console screenshots separated by a horizontal line):
Run 1 (second number is 0 — nothing else printed):
```
Enter a number: 2
Enter a number: 0
```
Run 2:
```
Enter a number: 1
Enter a number: 2
the result of dividing 1 / 2 = 0.5
```

**Diagrams/tables**: A horizontal line separates the two sample runs.

**Notes for curriculum**: Exercise: input of two numbers, `!=` comparison to guard against division by zero, `/` (true division) result.

**Issues**: Grammar "ask" (for "asks"), "the second numbers is not equals to zero" (sic). No solution code shown.

## Slide 16 — Conditional Execution

**Text**:
- **Examples** (red, underlined)
- 4. Accept an integer input from user and check if number is bigger than 1000
- Callout (yellow border, arrows pointing to the `print("End!")` line in both screenshots): "The following statement: without indentation / Always executed"

**Code** (shown twice, identical, in two Jupyter-style screenshots; straight double quotes; body indented 4 spaces; note the trailing space inside the f-string before the closing quote; `print("End!")` is circled in yellow in both):
```
x=int(input("Enter a number: "))
if x>1000:
    print(f"{x} is a big number ")
print("End!")
```

**Output shown**:
Run 1 (left screenshot, input 100):
```
Enter a number: 100
End!
```
Run 2 (right screenshot, input 2000):
```
Enter a number: 2000
2000 is a big number
End!
```

**Diagrams/tables**: Yellow highlight boxes around `print("End!")` and yellow underlines below each output; callout arrows link the "Always executed" note to both unindented print statements.

**Notes for curriculum**: Statements after the if-block that are not indented are outside the block and always execute; int(input()) for integer input.

**Issues**: none (outputs are consistent with Python 3; the f-string's trailing space is invisible in the output).

## Slide 17 — EXERCISE

**Text**:
- Write a program that asks the user about his score in Quiz 1 out of 10.
  - ➢ if the student score is higher than or equals to **7.5** (red) then display a message “congratulation on your good score” .
  - ➢ At the end, it always display message “thank you for sharing your score”.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>=` on a float score, plus an unconditional final message after the if-block.

**Issues**: The source file contains two sample-run screenshots (Picture 3, Picture 4) that are completely covered by a white rectangle (no animation), so nothing is visible on the slide. For reference only, the hidden screenshots read: "What is your score in Quiz 1: 2.5 / Thank you for sharing your score.." and "What is your score in Quiz 1: 7 / congratulation on your good score... / Thank you for sharing your score.." — the hidden second run contradicts the stated 7.5 threshold (7 < 7.5 should not print the congratulation message). Grammar: "it always display" (sic); message text casing/punctuation in the task ("thank you for sharing your score") differs from the hidden sample ("Thank you for sharing your score..").

## Slide 18 — EXERCISE

**Text**:
- Write a program for an airline company. that ask the user about his luggage weight.
  - ➢ if the luggage weight is higher than 50, it shows a warning message that he will be paying extra 25$ for his luggage.
  - ➢ At the end, it always thank the user for his business.

**Code**: none

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none visible.

**Notes for curriculum**: Exercise: if with `>` and an always-executed closing statement.

**Issues**: The source file contains two sample-run screenshots and a separator line that are completely covered by a white rectangle (no animation), so nothing is visible on the slide. For reference only, the hidden screenshots read: "How many pounds does your suitcase weigh? 60 / There is a $25 charge for luggage that heavy. / Thank you for your business." and "How many pounds does your suitcase weigh? 45 / Thank you for your business." Text issues as shown: stray period mid-sentence ("company. that ask"), "ask"/"thank" for "asks"/"thanks", "25$" (currency symbol after the number); weight unit not stated in the task.

## Slide 19 — Alternative Execution (section title slide)

**Text**:
- Python logo ("python™")
- Alternative Execution

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo image only.

**Notes for curriculum**: Section divider: start of Alternative Execution (if-else).

**Issues**: none

## Slide 20 — Alternative Execution

**Text**:
- **Alternative Execution**, in which there are two possibilities, and the condition determines which one gets executed.
- Label (dark red, under left box): "Statement executed if the condition is **True**"
- Label (dark red, under right box): "Statement executed if the condition is **False**"

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture with an overlaid "Condition" label): arrow into a decision diamond labelled "Condition"; branch "[True]" goes left to box "Statement 1"; branch "[False]" goes right to box "Statement 2"; both boxes lead into a lower (merge) diamond, then an arrow continues downward.

**Notes for curriculum**: Definition of alternative execution (if-else): exactly one of two branches runs depending on the condition.

**Issues**: The overlaid word "Condition" is wider than the diamond, so the diamond's edges cross the text (layout glitch; still legible).

## Slide 21 — Alternative Execution

**Text**:
- if…else statement is used in alternative execution
- **Syntax** (red, underlined)
- Remember: (items in italics)
  - a. Boolean expression after the if statement is called the condition.
  - b. We end the if statement  and the else with a colon character (:)
  - c. the line(s) after the if  and the else statements are ***indented***.

**Code** (syntax template; `if`/`else` green, colons purple, placeholders blue; a small brace labelled "indentation" sits under the indent):
```
if  condition:
      <True part statements>
else:
      <False part statements>
```

**Output shown**: none

**Diagrams/tables**: Brace annotations labelled "indentation" mark the indent before the True/False part statements.

**Notes for curriculum**: if…else syntax: condition, colons after `if` and `else`, indented bodies for each branch.

**Issues**: Layout glitch: the red "indentation" brace lines are drawn across the words "True" and "False" (they look struck through), and the label "indentation" overlaps "<False". The words are still readable as "<True part statements>" and "<False part statements>" (confirmed by the text extraction).

## Slide 22 — (no title; title bar empty) Even/odd flowchart

**Text**:
- Program that check if x is even or odd number
- Callout box (pink border, orange arrow to the diamond): "**Condition**"
- Callout box (blue border, arrow to the left box): "**<False part statements>**"
- Callout box (blue border, arrow to the right box): "**<True part statements>**"

**Code** (inside flowchart shapes; curly single quotes ‘ ’):
```
x%2 == 0
print(‘x is even’)
print(‘x is odd’)
```

**Output shown**: none

**Diagrams/tables**: Flowchart: arrow into a grey diamond containing `x%2 == 0` (red text). "False" branch goes left to a white box `print(‘x is odd’)`; "True" branch goes right to a grey box `print(‘x is even’)`; both branches merge and continue downward.

**Notes for curriculum**: Flowchart of an if-else: modulus (%) test for even/odd; mapping the True/False parts to the two branches.

**Issues**: Slide has no title (empty title bar). Grammar "Program that check" (sic). Flowchart code uses curly quotes ‘ ’ (not valid if typed into Python).

## Slide 23 — (no title; title bar empty) Even/odd flowchart to code

**Text**: none besides diagram labels and code.

**Code** (text box below the flowchart; `if`/`else` green, colons purple, print lines blue; uses curly single quotes ‘ ’; two spaces between `if` and `x%2`):
```
if  x%2 == 0:
        print(‘x is even’)
else:
        print(‘x is odd’)
```

**Output shown**: none

**Diagrams/tables**: Flowchart picture: diamond `x%2 == 0`; "no" (green) branch left to box `print 'x is odd'`; "yes" (dark red) branch right to box `print 'x is even'`; branches merge and continue downward. Three arrows connect the picture to the code: diamond → the `x%2 == 0` condition, `print 'x is even'` box → `print(‘x is even’)`, `print 'x is odd'` box → `print(‘x is odd’)`.

**Notes for curriculum**: Translating an if-else flowchart into Python code.

**Issues**: Slide has no title (empty title bar). The flowchart picture uses Python 2 print-statement syntax (`print 'x is odd'`, `print 'x is even'`), which is a SyntaxError in Python 3, while the code below uses Python 3 `print(...)`. The code uses curly quotes ‘ ’ (SyntaxError if copied into Python). The code never assigns `x` (fragment only).

## Slide 24 — Alternative Execution

**Text**:
- **Examples** (red, underlined)
- A program to check if the number entered by the user is single digit or higher.

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces):
```
num=int(input("Enter a number: "))
if num<10:
    print("number is one digit")
else:
    print("number is two digits")
```

**Output shown** (input 10):
```
Enter a number: 10
number is two digits
```

**Diagrams/tables**: none

**Notes for curriculum**: if-else with integer input; two mutually exclusive branches.

**Issues**: Logic limitation: the else branch prints "number is two digits" for any number ≥ 10 (e.g., 100 or 5000 would also be reported as "two digits"), and negative numbers such as -25 would be reported as "one digit". The task text says "single digit or higher", which better matches the logic than the printed message. The shown output for input 10 is correct for this code.

## Slide 25 — Alternative Execution

**Text**:
- **Examples** (red, underlined)
- Program to check if a number is Odd or Even

**Code** (screenshot, Jupyter-style cell; straight double quotes; bodies indented 4 spaces; note spacing quirks: no space between `if` and `(`, a space between `print` and `(` on the first print):
```
num=int(input("Enter the number:"))
if(num % 2)== 0:
    print ("Given number is Even")
else:
    print("Given number is Odd")
```

**Output shown** (input 22):
```
Enter the number:22
Given number is Even
```

**Diagrams/tables**: none

**Notes for curriculum**: if-else with the modulus operator to test even/odd on user input.

**Issues**: none (output consistent with Python 3; `if(...)` and `print (...)` spacing are unusual style but valid).

## Slide 26 — EXERCISE

**Text**:
- Write a program that ask the user for a number. Then check if the number is greater that 50 or less than 50.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the input prompt, straight single quotes in the prints; bodies indented 4 spaces; this picture has an on-click entrance animation):
```
x=int(input("Enter a number: "))
if x < 50:
    print('the number you entered is smaller than 50')
else:
    print('the number you entered is greater than 50')
```

**Output shown**: none visible on the rendered slide.

**Diagrams/tables**: none

**Notes for curriculum**: Exercise and solution: if-else comparing input against a threshold.

**Issues**: Typo "greater that 50" (should be "than"); grammar "ask" (for "asks"). Logic bug: an input of exactly 50 goes to the else branch and prints "the number you entered is greater than 50", which is false. Two sample-run screenshots exist in the source file but are fully covered by a white rectangle and are not visible; for reference only, they read "Enter a number: 20 / the number you entered is smaller than 50" and "Enter a number: 60 / the number you entered is greater than 50". A stray tiny dot appears in the empty area left of centre (rendering artifact).

## Slide 27 — Alternative Execution

**Text**:
- **Single Line if statement(conditional expression):** (red, bold, underlined)
- it is not a control structure that directs the flow of program execution. It acts more like an operator that defines an expression.
- <conditional_expr> is evaluated first. If it is **True**, the expression evaluates to <expr1>. If it is **False**, the expression evaluates to <expr2>.

**Code** (screenshot of syntax template):
```
<expr1> if <conditional_expr> else <expr2>
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression (ternary operator) syntax and evaluation semantics.

**Issues**: The heading calls it a "Single Line if statement" while the next bullet says it is not a control structure but an expression — mild terminology inconsistency (the correct Python term is "conditional expression"). Missing space before "(conditional" in heading (as shown).

## Slide 28 — conditional expression

**Text**:
- **Output:**
- 100
- If **True** store value 100 to Result (blue, underlined)
- if **False** store 200 to Result (blue, underlined)

**Code** (text box with orange border; monospace; spaces around `=`; no spaces in `x>=10`):
```
x = 10
Result = 100 if x>=10 else 200
print(Result)
```

**Output shown**:
```
100
```

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression assigning one of two values to a variable.

**Issues**: none (output 100 is correct since 10 >= 10 is True). Note the variable name `Result` is capitalized (valid, unconventional).

## Slide 29 — conditional expression

**Text**:
- A program that print different statement based on the weather. If it is raining it prints **Let’s go to the beach**. If it not raining, it prints **Let’s go to the library.**

**Code** (two Jupyter-style screenshots; strings in straight single quotes; the beach string uses an escaped straight apostrophe `\'`, while the library string contains a curly apostrophe ’ inside it; no space before `=` in `weather=`):
Cell 1:
```
raining = True
weather= 'Let\'s go to the beach' if raining else 'Let’s go to the library'
print(weather)
```
Cell 2:
```
raining = False
weather= 'Let\'s go to the beach' if raining else 'Let’s go to the library'
print(weather)
```

**Output shown**:
Cell 1:
```
Let's go to the beach
```
Cell 2 (curly apostrophe):
```
Let’s go to the library
```

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression with a Boolean variable; escaping a quote inside a single-quoted string.

**Issues**: Semantically reversed/counter-intuitive: the program suggests going to the beach when it IS raining and to the library when it is not (the slide text states the same mapping, so code and text agree with each other). Inconsistent apostrophes: the beach string uses an escaped straight `\'`, the library string a curly ’ (both valid Python; the outputs faithfully differ: "Let's" vs "Let’s"). Grammar "A program that print different statement", "If it not raining" (sic).

## Slide 30 — Exercise

**Text**:
- A program that asks the user about his age. If the user enter number less than 21 it prints **Minor**. If the user enter number greater or equals to 21 it prints **Adult.** Using *conditional expression* (italic, underlined).

**Code** (screenshot, Jupyter-style cell; straight double quotes for the prompt, straight single quotes for the strings; the last line is a bare `s`):
```
age=int(input("Please enter your age: "))
s = 'minor' if age < 21 else 'adult'
s
```

**Output shown** (input 12; Jupyter echoes the value of `s` with quotes):
```
Please enter your age: 12

'minor'
```

**Diagrams/tables**: none

**Notes for curriculum**: Conditional expression used to choose between two strings based on input.

**Issues**: The task says the program "prints Minor"/"Adult" (capitalized), but the code produces lowercase 'minor'/'adult' and never calls print(); the output `'minor'` (with quotes) appears only because a bare expression `s` is echoed in a Jupyter/interactive cell — run as a normal Python script, nothing would be printed after the prompt. Grammar "If the user enter number" (sic). A stray blue dot appears at the bottom right of the screenshot (artifact).

## Slide 31 — Chained Conditionals (section title slide)

**Text**:
- Python logo ("python™")
- Chained Conditionals

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo image only.

**Notes for curriculum**: Section divider: start of Chained Conditionals (if-elif-else).

**Issues**: none

## Slide 32 — Chained conditionals

**Text**:
- Chained conditions allows more than two possibilities and need more than two branches.
- Used to check more than one condition.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): diamond "Test expression 1" — "Yes" → box "Statement 1"; "No" (red) ↓ diamond "Test expression 2" — "Yes" → box "Statement 2"; "No" (red) ↓ diamond "Test expression 3" — "Yes" → box "Statement 3"; otherwise (unlabelled path) → box "Body of else". All four boxes feed a vertical line on the right leading down to box "Statement just below if-elseif", with an arrow continuing downward.

**Notes for curriculum**: Chained conditionals: tests are evaluated in order; the first true test's statement runs; else runs if none is true; execution then continues after the whole chain.

**Issues**: Flowchart label "if-elseif" uses non-Python terminology (Python's keyword is `elif`). The path from "Test expression 3" to "Body of else" has no "No" label (unlike the other No branches). Grammar "Chained conditions allows… and need" (sic).

## Slide 33 — Chained conditionals

**Text**:
- **elif** – is a keyword used in Python in replacement of *else if*  to place another condition in the program. This is called chained conditional.
- Any number of **elif** part can be there.
- **Syntax** (red, underlined)
- Callout box (teal border, arrow pointing to `else:`): "else part is **optional**."

**Code** (syntax template; keywords green, colons purple, placeholders blue; the indentation of the statement placeholders is visually uneven on the slide; two vertical dots indicate repetition):
```
if  condition1:
        <statements 1>
elif condition2:
        <statements 2>
elif condition3:
        <statements 3>
          .
          .
else:
        <statements n>
```

**Output shown**: none

**Diagrams/tables**: Callout arrow from "else part is optional." to `else:`.

**Notes for curriculum**: if-elif-else syntax; any number of elif clauses; else is optional.

**Issues**: The indentation of `<statements 1>`, `<statements 2>`, `<statements 3>`, `<statements n>` is visually inconsistent (each placeholder starts at a slightly different horizontal position) — cosmetic only. "Any number of elif part" (sic).

## Slide 34 — Chained conditionals

**Text**:
- **Examples** (red, underlined)
- Program that check the values of x and y. x is less, greater or equals to y.

**Code** (inside flowchart shapes; curly single quotes ‘ ’; note the space in `print (‘greater’)`):
```
x < y
print(‘less’)
x > y
print (‘greater’)
print(‘equal’)
```

**Output shown**: none

**Diagrams/tables**: Flowchart: arrow into a grey diamond `x < y`; "Yes" → grey box `print(‘less’)`. Otherwise (unlabelled downward arrow) → white diamond `x > y`; "Yes" → box `print (‘greater’)`. Otherwise (unlabelled downward arrow) → box `print(‘equal’)`. The less/greater boxes feed a vertical line on the right that joins the main flow below `print(‘equal’)`; arrow continues downward.

**Notes for curriculum**: Chained conditional (if-elif-else) flowchart for a three-way comparison.

**Issues**: The "No" branches are not labelled (only "Yes"). Flowchart code uses curly quotes ‘ ’. Grammar "Program that check… equals to y" (sic).

## Slide 35 — (no title; title bar empty) Chained conditional code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style cell, image stretched vertically; straight double quotes for prompts, straight single quotes in prints; bodies indented 4 spaces; `else:` and its print are on the same line):
```
x=int(input("Enter 1st number:"))
y=int(input("Enter 2nd number:"))
if x < y:
    print('x is less than y')
elif x > y:
    print('x is greater than y')
else: print('x and y are equal')
```

**Output shown** (inputs 5 and 10):
```
Enter 1st number:5
Enter 2nd number:10
x is less than y
```

**Diagrams/tables**: Same flowchart as slide 34 (left side): `x < y` → Yes → `print(‘less’)`; `x > y` → Yes → `print (‘greater’)`; else `print(‘equal’)`; branches merge.

**Notes for curriculum**: Python if-elif-else implementation of the three-way comparison; single-line `else:` body.

**Issues**: Slide has no title (empty title bar). The flowchart's printed strings ('less', 'greater', 'equal') differ from the code's strings ('x is less than y', etc.). Output consistent with Python 3.

## Slide 36 — Chained Conditionals

**Text**:
- **Exercise** (red, underlined) – a python program that will find the largest among three numbers.

**Code**: none

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: find the largest of three numbers using if-elif-else.

**Issues**: none (slide is an exercise prompt with no solution; the solution appears on slide 37).

## Slide 37 — (no title; title bar empty) Examples – largest of three numbers

**Text**:
- **Examples** (red, underlined) – a python program that will find the largest among three numbers.

**Code** (screenshot of a Jupyter cell labelled `In [2]:`; straight double quotes; bodies indented 4 spaces):
```
a=int(input("Enter 1st number:"))
b=int(input("Enter 2nd number:"))
c=int(input("Enter 3rd number:"))
if (a > b) and (a > c):
    print("a is greater")
elif (b > a) and (b > c):
    print("b is greater")
else:
    print("c is greater")
```

**Output shown** (inputs 5, 8, 6):
```
Enter 1st number:5
Enter 2nd number:8
Enter 3rd number:6
b is greater
```

**Diagrams/tables**: none

**Notes for curriculum**: if-elif-else combined with the logical operator `and` to find the maximum of three numbers.

**Issues**: Slide has no title (empty title bar). Logic bug with ties: because strict `>` is used, if the two largest values are equal and greater than the third (e.g., a=5, b=5, c=3), both the if and elif conditions are False and the program wrongly prints "c is greater". The shown output (5, 8, 6 → "b is greater") is correct for this code.

## Slide 38 — Exercise

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

**Issues**: Ranges are written as integer ranges ("80 to 89", etc.), leaving non-integer marks such as 89.5 unspecified (only matters if the mark is read as a float). Missing space in "grade(mark". The letters use curly quotes ‘ ’ in the text (prose, not code).

## Slide 39 — Nested Conditions (section title slide)

**Text**:
- Python logo ("python™")
- Nested Conditions

**Code**: none

**Output shown**: none

**Diagrams/tables**: Python logo image only.

**Notes for curriculum**: Section divider: start of Nested Conditions (nested if).

**Issues**: none

## Slide 40 — Nested Conditions

**Text**:
- We can write an entire if… else statement in another if… else statement called nesting, and the statement is called **nested if**.
- In a **nested if** construct, you can have an if … elif … else construct inside an if … elif.. Else construct.

**Code**: none

**Output shown**: none

**Diagrams/tables**: Flowchart (picture, green text): arrow into diamond "Test Expression". "True" ↓ box "Body of if". "False" (red) → diamond "Nested test expression"; its "True" ↓ box "Body of nested if"; its "False" (red) ↓ box "Body of nested else". The three body boxes merge into box "Statement just below if", with an arrow continuing downward.

**Notes for curriculum**: Definition of nested conditionals: an if/else (or if-elif-else) placed inside a branch of another.

**Issues**: Text quirk "if … elif.. Else construct" (two dots, capital "Else") — as shown. Note the flowchart nests the inner test in the False (else) branch, whereas the syntax on slide 41 nests it in the True (if) branch — both are valid forms, but they differ.

## Slide 41 — (no title; title bar empty) Nested if syntax

**Text**:
- **Syntax** (red, underlined)

**Code** (syntax template; keywords green, colons purple, placeholders blue; the inner if/else block is enclosed in an orange box):
```
if  condition1:
        if  condition2:
                <statements 1>
        else:
                <statements 2>

else:
        <statements 3>
```

**Output shown**: none

**Diagrams/tables**: Orange rectangle highlights the nested `if condition2: … else: …` block inside the outer if.

**Notes for curriculum**: Syntax of a nested if-else: the inner if-else is indented one level inside the outer if branch.

**Issues**: Slide has no title (empty title bar).

## Slide 42 — Nested Conditions

**Text**:
- A Program that check the values of x and y. x is less, greater or equals to y.
- Callout (pink border, arrow to the first diamond): "Condition 1"
- Callout (pink border, arrow to the second diamond): "Condition2"

**Code** (inside flowchart shapes; curly quotes; note the doubled opening quote in the "greater" box, exactly as shown):
```
x == y
print(‘equal’)
x < y
print(‘less’)
print(’‘greater’)
```

**Output shown**: none

**Diagrams/tables**: Flowchart: arrow into diamond `x == y` (Condition 1). "Yes" (left) → box `print(‘equal’)`. "No" (right) → diamond `x < y` (Condition2); its "Yes" (left) → box `print(‘less’)`; its "No" (right) → box `print(’‘greater’)`. The less/greater branches merge, then merge with the equal branch, and the flow continues downward.

**Notes for curriculum**: Nested if-else flowchart for the three-way comparison of x and y (compare with the chained version on slides 34–35).

**Issues**: Typo in the flowchart box: `print(’‘greater’)` has an extra quote character (two opening quote marks); it also uses curly quotes (invalid if typed into Python). Inconsistent label spacing "Condition 1" vs "Condition2". Grammar "A Program that check" (sic).

## Slide 43 — (no title; title bar empty) Nested condition flowchart and code

**Text**: none besides flowchart labels and code.

**Code** (screenshot, Jupyter-style; straight double quotes; a space before each `:` after the conditions; space in `print ("greater")`; indentation 4 and 8 spaces; the conditions `x == y` and `x < y` are highlighted with pink boxes matching pink boxes on the flowchart diamonds):
```
x = 10
y = 20
if x == y :
    print("equal")
else:
    if x < y :
        print("less")
    else:
        print ("greater")
```

**Output shown**:
```
less
```

**Diagrams/tables**: Same flowchart as slide 42 (left/top): diamond `x == y` — Yes → `print(‘equal’)`; No → diamond `x < y` — Yes → `print(‘less’)`, No → `print(’‘greater’)`; branches merge and continue downward. Pink boxes on the diamonds' conditions link them to the matching conditions in the code. The code screenshot overlaps and hides the lower-right part of the flowchart (where the less/greater branches merge).

**Notes for curriculum**: Python nested if-else implementing the flowchart: an if-else inside the else branch.

**Issues**: Slide has no title (empty title bar). The flowchart's "greater" box still shows the typo `print(’‘greater’)` (extra quote) and curly quotes. The code screenshot covers part of the flowchart. Output "less" is correct for x=10, y=20.

## Slide 44 — (no title; title bar empty) If else within if else

**Text**:
- If else within if else

**Code** (screenshot of a Jupyter cell labelled `In [35]:`; straight single quotes; indentation 4 and 8 spaces; inner `else:` and its print on one line):
```
if x == y:
    print('x and y are equal')
else:
    if x < y:
        print('x is less than y')
    else: print('x is greater than y')
```

**Output shown**:
```
x is less than y
```

**Diagrams/tables**: none

**Notes for curriculum**: Nested if-else (if-else inside the else branch) for comparing two values.

**Issues**: Slide has no title (empty title bar). `x` and `y` are not defined in the shown cell (the output depends on values set in an earlier, unshown notebook cell; run alone, this code raises NameError).

## Slide 45 — Nested Conditions

**Text**:
- **Examples** (red, underlined)
- Program that checks if a <u>number is positive</u>, and if <u>single digit number</u>.
- If within if:

**Code** (screenshot of a Jupyter cell labelled `In [29]:`; straight single quotes; indentation 4 and 8 spaces):
```
if 0 < x:
    if x < 10:
        print('x is a positive single-digit number.')
```

**Output shown**:
```
x is a positive single-digit number.
```

**Diagrams/tables**: none

**Notes for curriculum**: Nested if without else: the inner condition is checked only if the outer one is True.

**Issues**: `x` is not defined in the shown cell (the output depends on a value assigned in an earlier, unshown notebook cell; run alone, this raises NameError). Minor: for a non-integer such as x = 9.5 the program would also call it a "single-digit number".

## Slide 46 — (no title; title bar empty) Example – basketball/football

**Text**:
- **Example** (red, underlined)
- Write a program to accept number from the user, print “play basketball” if number is less than or equal to 15, otherwise print “Don’t play game”. However, if the number is equal to 10,  display “play football”.

**Code** (screenshot, Jupyter-style cell; straight double quotes in the prompt, straight single quotes in the prints; two spaces between "Enter" and "number:" in the prompt; parentheses around conditions; indentation 4 and 8 spaces; the apostrophe in `Don’t` appears to be a curly ’ inside a straight-single-quoted string):
```
n = int(input("Enter  number:"))
if (n<=15):
    if (n == 10):
        print('play football')
    else:
        print('play basketball')
else:
    print('Don’t play game')
```

**Output shown** (input 12):
```
Enter  number:12
play basketball
```

**Diagrams/tables**: none

**Notes for curriculum**: Nested if-else inside the outer if branch; special-case value (10) handled by the inner condition.

**Issues**: Slide has no title (empty title bar). The string 'Don’t play game' only works because the apostrophe is a curly ’; with a straight apostrophe `'Don't play game'` it would be a SyntaxError — worth flagging to students who retype it. Output is consistent with the code (12 ≤ 15 and ≠ 10 → "play basketball").

## Slide 47 — Exercise

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

**Issues**: The text says ratio = height ÷ weight, but the solution on slide 48 computes `r=w/h` (weight ÷ height) — contradiction. Boundary cases are unspecified: ratio exactly 5 or exactly 20 is not covered by the text. The quoted message “ Size XXL” has a leading space, and the solution prints different strings ("size XXL", "sixe L"). The last line ("otherwise print “Size S”") sits very close to the bottom edge of the slide, next to the Python logo.

## Slide 48 — solution

**Text**: none besides the code.

**Code** (screenshot of a Jupyter cell labelled `In [10]:`; straight double quotes; no trailing space in the input prompts; indentation 4 and 8 spaces; typo "sixe" is in the original):
```
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
```

**Output shown** (inputs 5 and 50; the prompts have no trailing space so the input is glued to the prompt):
```
enter your height in feet5
enter your weight in Kg50
sixe L
```

**Diagrams/tables**: none

**Notes for curriculum**: Solution to the shirt-size exercise using nested if-else in both branches of the outer if.

**Issues**: Typo in code and output: "sixe L" (should be "size L"). Inconsistent capitalization: "size XXL"/"sixe L" vs "Size M"/"Size S". Ratio is computed as `w/h` (weight/height) whereas slide 47 says height divided by weight. Height "in feet" is read with `int()`, so a value like 5.5 would raise ValueError. Output for inputs 5 and 50 (r = 10.0 → r>5, not >20 → else) is correct for this code: "sixe L".

## Slide 49 — Exercise

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

**Notes for curriculum**: Exercise: input of string and numeric values, arithmetic, and an if-elif-else chain over salary brackets to compute a percentage tax.

**Issues**: Overlapping bracket boundary: a salary of exactly 500 falls in both "1-500" (5%) and "500-1000" (10%). A salary of 0 (or below 1) is not covered. It is not stated whether the tax is a flat rate on the whole salary or progressive by bracket (no example given).

## Slide 50 — Exercises - Practice

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
4. Write a program to accept a number from 1 to 7, and display name of the day.
   Day = 1 is Sunday, Day = 2 is Monday …….

**Code**: none

**Output shown**: none

**Diagrams/tables**: Exercise 3 contains a small two-column list (Units | Price): First 100 | 20 baisa per unit; Next 200 | 30 baisa per unit; After 300 | 40 baisa per unit.

**Notes for curriculum**: Practice problems: modulus/divisibility checks, tiered (slab) billing with chained conditionals, and mapping 1–7 to day names with if-elif-else.

**Issues**: Exercise 1 is grammatically unclear ("check the last digit of given number is divisible 5 or not" — missing "if" and "by"); it also largely duplicates exercise 2 (a number is a multiple of 5 exactly when its last digit is 0 or 5). Exercise 3's example stops at the expression and does not state the total (100*20 + 200*30 + 50*40 = 10000 baisa); the example itself is consistent with the slab table. Exercise 4 ends with an ellipsis rather than listing all seven days, and does not say what to do for numbers outside 1–7.
