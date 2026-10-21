# Topic 4 - Iteration — Slide transcription (slides 1–22)

Source: `render/hi/t4-01.png` … `t4-22.png` (rendered from `topic4.pdf`, 55 pages). Each image was checked, and code/output pictures were checked against zoomed renders and the original embedded images in `topic4.pptx`. Slide numbers match the footer page numbers. Title/section slides 1, 3, 16, 19 and 22 have no footer number. No slides in this range are hidden.

Conventions: Code inside screenshots is from Jupyter-style editors. Indentation is transcribed as 4 spaces, which is what the screenshots show. "(no title)" means the slide's brown title bar is empty.

---

## Slide 1 — Topic 4 - Iteration

**Text**:
- Topic 4 - Iteration
- (Python logo with "python™" wordmark above the title)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none (title slide with logo only).

**Notes for curriculum**: Deck title slide for Topic 4 (Iteration / loops).

**Issues**: none

---

## Slide 2 — What is iteration?

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

---

## Slide 3 — While Loop

**Text**:
- While Loop
- (Python logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none (section title slide).

**Notes for curriculum**: Section divider. Start of the while-loop section.

**Issues**: none

---

## Slide 4 — The while loop

**Text**:
- The **while loop** (red, bold) statement allows you to repeatedly <u>execute a block</u> of statements <u>as long as a condition is true.</u>

(Footer: 4)

**Code**: none

**Output shown**: none

**Diagrams/tables**: A flowchart (picture). An incoming arrow from the top goes into an unlabeled decision diamond. The **[True]** branch goes down into a box labelled **Statement 1**, and an arrow from Statement 1 loops back up into the diamond's right side. The **[False]** branch leaves the diamond to the left and goes down, exiting the loop. (This picture is a cropped part of a larger "Sequence / Selection / Iteration" figure. Only the iteration part shows on the slide, and its heading is cropped out.)

**Notes for curriculum**: The while loop repeats a block while a condition is true. Flowchart of iteration.

**Issues**: none

---

## Slide 5 — Syntax of while Loop

**Text**:
- Syntax of while Loop (bullet in red, underlined)
- Syntax template: **while** **<test_condition>**(blue)**:** / **<Body of while>**(green)
- Label "indentation" (blue-violet) with a small bracket line, beside <Body of while>
- Label "Test the condition again" next to the loop-back arrow of the flowchart

(Footer: 5)

**Code** (syntax template as written in the slide's text box; the source text is `\t\twhile <test_condition>: ` / `\t\t\t<Body of while>`):
```
while <test_condition>:
	<Body of while>
```

**Output shown**: none

**Diagrams/tables**: Flowchart (picture). "Enter the while loop" leads by arrow into a diamond labelled **Test Condition**. **True** goes down to a rounded box "**while loop body**". From the body, a line goes left and back up, then arrows into Test Condition. The overlaid slide label on this return path reads "Test the condition again". **False** goes right then down to "**Exit the while loop**".

**Notes for curriculum**: while-loop syntax (`while <condition>:` plus an indented body). Control flow of a while loop: test, run the body, test again.

**Issues**: Layout quirk. In the rendered slide the text box is too narrow, so "while" sits on one line and "<test_condition>:" wraps onto the next line. The source text has them on one line, as `while <test_condition>:`. The small "indentation" bracket is drawn over the letters "_cond" of <test_condition> instead of marking the indent before <Body of while>.

---

## Slide 6 — While loop

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

**Issues**: Grammar: "evaluate to False" should be "evaluates". The terminology is inconsistent: "test expression" in the first sub-bullet, "<test_condition>" elsewhere.

---

## Slide 7 — (no title)

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
- Right tree (slide shapes): root rounded box "Comparison operators" (wrapped as "Compariso / n operators") with six children (red text), left to right: `==`, `<`, `<=`, `>`, `>=`, `!=`.

**Notes for curriculum**: The while condition is a Boolean expression built with comparison operators (==, !=, <, <=, >, >=) and logical operators.

**Issues**:
- The logical operators are written in uppercase (AND, OR, NOT). Python's keywords are lowercase `and`, `or`, `not`, and the uppercase forms are not valid Python operators.
- The layout is misleading. "Use the logical operators." sits under the "True" arrow and "Use the comparison operators" under the "False" arrow, which suggests a link between True/False and the operator type that the content does not intend.
- Cosmetic: the title bar is empty. "Comparison operators" is broken mid-word ("Compariso / n operators"). The red box starts in the middle of "while".

---

## Slide 8 — (no title)

**Text**:
- **while** **<test_condition>**(blue)**:** (red box) / **<Body of while>** (green)
- Python interprets any <u>non-zero number</u> for the **<test_condition>** as **True**. <u>None</u> and <u>0</u> are interpreted as **False**.

(Footer: 8)

**Code** (three screenshots):
```
while 3:
    print ("Hello")
```
```
while None:
    print ("Hello")
```
```
while 0:
    print ("Hello")
```

**Output shown** (under `while 3:` only; the screenshot shows 12 lines and is cut off):
```
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
```
No output is shown for `while None:` or `while 0:`.

**Diagrams/tables**: none

**Notes for curriculum**: Truthiness in while conditions. A non-zero number is truthy (here it gives an infinite loop). `None` and `0` are falsy, so the body never runs.

**Issues**: The `while 3:` loop never ends in real Python. The screenshot shows only the first 12 "Hello" lines, and the slide does not say that this is an infinite loop. The statement covers numbers and None only and does not mention other falsy values. This is a simplification, not an error. Title bar is empty.

---

## Slide 9 — The while loop (Examples)

**Text**:
- while loop to print numbers from 1 to 5.

(Footer: 9)

**Code**:
```
A=1
while A<=5:
    print (A)
    A=A+1
```

**Output shown**:
```
1
2
3
4
5
```

**Diagrams/tables**: none. The picture is built from six overlapping crops of one screenshot, animated so the output lines appear one by one. The final render shows the full code and output.

**Notes for curriculum**: Counter-controlled while loop (initialize, test, update). Prints 1 to 5.

**Issues**: none. The output matches Python 3.

---

## Slide 10 — Pattern to follow in While Loop

**Text**:
- "A is Iterator" (dark red label above the flowchart)

(Footer: 10)

**Code** (same screenshot as slide 9, code part only):
```
A=1
while A<=5:
    print (A)
    A=A+1
```

**Output shown**: none

**Diagrams/tables**: Flowchart (picture): **Initialization** box → arrow into the **Condition** diamond. **T** goes down to the **Updation** box, then a line goes left and back up into the Condition input. **F** goes right then down to the oval **End of Loop**. Red arrows link the flowchart to the code: Initialization → `A=1`, Condition → `while A<=5:`, Updation → `A=A+1`.

**Notes for curriculum**: The three-part while-loop pattern: initialize the loop variable, test the condition, update the variable.

**Issues**:
- Terminology: the slide calls `A` an "Iterator". In Python, "iterator" means an object with `__next__`. Here `A` is a loop counter or control variable.
- "Updation" is non-standard English ("Update").
- The flowchart has no box for the loop body (`print (A)`). Only the update step appears on the True path.

---

## Slide 11 — The while loop (Examples)

**Text**:
- Here is a simple program that counts down **from 5 until 1.**

(Footer: 11)

**Code**:
```
N=5
while N>=1:
    print(N)
    N=N-1
```

**Output shown**:
```
5
4
3
2
1
```

**Diagrams/tables**: none. As on slide 9, the picture is made of overlapping animated crops of one screenshot.

**Notes for curriculum**: Countdown while loop with a decrementing counter.

**Issues**: none. The output matches Python 3. A stray tiny vertical mark to the left of `while` comes from the overlapping cropped pictures and is not code.

---

## Slide 12 — The while loop (Examples)

**Text**:
- Program to find sum of numbers from 1 to 10:(1+2+3+4+5+6+7+8+9+10)  (the series in parentheses is in red)

(Footer: 12)

**Code** (editor screenshot with line numbers 1–10; shown as displayed on the slide):
```
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
```

**Output shown**:
```
the sum is  55
```
(There are two spaces between "is" and "55".)

**Diagrams/tables**: none

**Notes for curriculum**: Accumulator pattern. Summing 1 to 10 with a while loop and a running total.

**Issues**:
- The `1` in `i = 1` (line 2) is not part of the screenshot. It is a separate green text box with an editor-grey (#F7F7F7) fill placed over the screenshot. The underlying screenshot reads `i = 0`, and a small leftover mark of it is visible. The "1" also sits slightly below the line's baseline. Both values give 55, so the output is correct either way.
- The output picture covers the editor's line 11. A partial line number "11" is visible behind it.
- Comment grammar: "hold the result" should be "holds".
- `i` is called an "iterator", as on slide 10.
- The variable name `sum` shadows Python's built-in `sum()`. This is a pedagogical concern, not a bug here.
- The output `the sum is  55` (two spaces) is correct for Python 3.

---

## Slide 13 — (no title) [first bullet: "Exercises"]

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

**Issues**: The title bar is empty, and "Exercises" is the first bullet. There is a double space in "write  a Program". No solution or sample output is given.

---

## Slide 14 — Exercise

**Text**:
- Write  a Program to Calculate the Average of **N** Numbers, where **N** is a number given by the user,  based on **N** ask the user to enter the numbers and calculate the average value. Were the average = sum of numbers/N  ("average = sum of numbers/N" in red)

(Footer: 14)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
```
How many numbers you want to enter? 4
Enter a number: 2
Enter a number: 4
Enter a number: 6
Enter a number: 8
the average value of the 4 number is 5.0
```

**Diagrams/tables**: none

**Notes for curriculum**: A user-controlled count of loop iterations (read N, then N inputs). Averaging with true division (`5.0`).

**Issues**:
- Typo: "Were the average" should be "Where".
- Extra spaces: "Write  a", "user,  based".
- The sample output's grammar: "the 4 number" should be "numbers". The average value 5.0 is correct for 2, 4, 6, 8.

---

## Slide 15 — Exercise

**Text** (entire exercise body is a picture of a document, serif font):
- Write a program that will read an integer value and will display the multiplication table of the number entered. The value of the last multiplier should be 10.

(Footer: 15)

**Code**: none

**Output shown** (labelled "Example output:" in the picture; column spacing is tab-aligned in a proportional font and is approximate here):
```
Example output:
Enter a number                 : 5
Multiplication table:
5 * 1        =      5
5 * 2        =      10
5 * 3        =      15
5 * 4        =      20
....
5 * 10       =      50
```

**Diagrams/tables**: none

**Notes for curriculum**: Exercise: printing a multiplication table (multipliers 1 to 10) with a loop.

**Issues**: The ellipsis line is shown as four dots, but the exact characters ("…." or "....") cannot be told apart in the image. The sample output's spacing is a document layout, not literal program output. No solution is given.

---

## Slide 16 — While loop and conditionals

**Text**:
- While loop and conditionals
- (Python logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none (section title slide).

**Notes for curriculum**: Section divider: combining while loops with if/else.

**Issues**: none

---

## Slide 17 — Exercise

**Text**:
- Write python program that accept the final mark for programming course for 4 students. If the student score is higher than 50, print( you passed ). Otherwise print (you Failed ).

(Footer: 17)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot):
```
Enter your final mark in the course: 45
you Failed
Enter your final mark in the course: 80
you Passed
Enter your final mark in the course: 70
you Passed
Enter your final mark in the course: 50
you Passed
```

**Diagrams/tables**: none

**Notes for curriculum**: A while loop running a fixed number of times (4) with an if/else inside the body.

**Issues**:
- The output contradicts the spec. The text says "higher than 50" (strictly greater), but a mark of **50** prints "you Passed". Under the stated rule it should print "you Failed". The program used appears to test `>= 50`.
- Case mismatch: the spec says "you passed" (lowercase p) but the output says "you Passed".
- Grammar: "accept" should be "accepts".

---

## Slide 18 — Exercise

**Text**:
- Write python program that display the price of products after discount. The program accepts 3 products price purchased by the user.
- If the product price is higher than 50 OMR, the discount percentage is 40%. Otherwise, the discount percentage is 20%. Calculate the discount price for each product.
- Discounted price = product price –(product price * discount percentage )  (red; uses an en dash "–" as the minus sign)

(Footer: 18)

**Code**: none (no solution shown).

**Output shown** (sample run screenshot, as visible on the slide):
```
Enter product 1 price in OMR: 20.5
the dicounted price is  16.4 OMR
Enter product 2 price in OMR: 50
the dicounted price is  30.0 OMR
Enter product 3 price in OMR: 60
the dicounted price is  36.0 OMR
```
(There are two spaces between "is" and the value.)

**Diagrams/tables**: none

**Notes for curriculum**: A loop over 3 inputs with an if/else choosing the discount rate, and arithmetic on floats.

**Issues**:
- The output contradicts the spec. For a price of **50**, the rule "higher than 50 → 40%, otherwise 20%" gives 20%, so the result should be 40.0. The slide shows **30.0**, which is a 40% discount, so the program used appears to test `>= 50`. The values 20.5 → 16.4 (20%) and 60 → 36.0 (40%) are correct.
- Typo in the output: "dicounted" should be "discounted".
- Spec grammar: "that display" should be "displays", and "3 products price" should be "prices of 3 products".
- The red formula line is partly hidden: the bottom of "percentage )" is covered by the output screenshot.
- Not visible on the slide: the embedded screenshot is cropped. The hidden part (seen only in the .pptx) shows a 4th product, `Enter product 4 price in OMR: 5.6` / `the dicounted price is  4.4799999999999995 OMR`. It is excluded from the visible slide.

---

## Slide 19 — Infinite loop

**Text**:
- Infinite loop
- (Python logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none (section title slide).

**Notes for curriculum**: **Section divider. This is the first slide of the "Infinite loop" section**, which is outside course scope.

**Issues**: none

---

## Slide 20 — Infinite loops

**Text**:
- An infinite loop repeats the statements without stop.
- This loop is obviously an *infinite loop* because the logical expression on the while statement is simply the logical constant **True**:
- One of the simplest ways to stop an infinite loop in Python is by using a keyboard interrupt.
- This method involves pressing the “Ctrl + C” keys on your keyboard while the program is running.

(Footer: 20)

**Code** (picture, orange background):
```
n = 10
while True:
    print(n, end=' ')
    n = n - 1
print('Done!')
```

**Output shown**: none

**Diagrams/tables**: none

**Notes for curriculum**: Infinite loops (`while True`) and stopping them with Ctrl + C (KeyboardInterrupt).

**Issues**: The top edge of the code picture slightly clips the first line `n = 10`, but it is still readable. `print('Done!')` is never reached. That is the point of the example, not an error.

---

## Slide 21 — Infinite loops (Example)

**Text**: (title only)

(Footer: 21)

**Code** (screenshot):
```
n = 10
while True:
    print(n, end=' ')
    n = n - 1
print('Done!')
```

**Output shown** (the screenshot's display wraps lines at a fixed width, so some numbers are split across lines exactly as shown; the output continues beyond the screenshot):
```
10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6 -7 -8 -9 -10 -11 -12 -13 -14 -15 -16 -17 -18 -19 -20 -21 -22 -23 -24 -25
-26 -27 -28 -29 -30 -31 -32 -33 -34 -35 -36 -37 -38 -39 -40 -41 -42 -43 -44 -45 -46 -47 -48 -49 -50 -51 -52 -53 -5
4 -55 -56 -57 -58 -59 -60 -61 -62 -63 -64 -65 -66 -67 -68 -69 -70 -71 -72 -73 -74 -75 -76 -77 -78 -79 -80 -81 -82
-83 -84 -85 -86 -87 -88 -89 -90 -91 -92 -93 -94 -95 -96 -97 -98 -99 -100 -101 -102 -103 -104 -105 -106 -107 -108 -1
09 -110 -111 -112 -113 -114 -115 -116 -117 -118 -119 -120 -121 -122 -123 -124 -125 -126 -127 -128 -129 -130 -131 -1
32 -133 -134 -135 -136 -137 -138 -139 -140 -141 -142 -143 -144 -145 -146 -147 -148 -149 -150 -151 -152 -153 -154 -1
55 -156 -157 -158 -159 -160 -161 -162 -163 -164 -165 -166 -167 -168 -169 -170 -171 -172 -173 -174 -175 -176 -177 -1
78 -179 -180 -181 -182 -183 -184 -185 -186 -187 -188 -189 -190 -191 -192 -193 -194 -195 -196 -197 -198 -199 -200 -2
01 -202 -203 -204 -205 -206 -207 -208 -209 -210 -211 -212 -213 -214 -215 -216 -217 -218 -219 -220 -221 -222 -223 -2
24 -225 -226 -227 -228 -229 -230 -231 -232 -233 -234 -235 -236 -237 -238 -239 -240 -241 -242 -243 -244 -245 -246 -2
47 -248 -249 -250 -251 -252 -253 -254 -255 -256 -257 -258 -259 -260 -261 -262 -263 -264 -265 -266 -267 -268 -269 -2
70 -271 -272 -273 -274 -275 -276 -277 -278 -279 -280 -281 -282 -283 -284 -285 -286 -287 -288 -289 -290 -291 -292 -2
93 -294 -295 -296 -297 -298 -299 -300 -301 -302 -303 -304 -305 -306 -307 -308 -309 -310 -311 -312 -313 -314 -315 -3
16 -317 -318 -319 -320 -321 -322 -323 -324 -325 -326 -327 -328 -329 -330 -331 -332 -333 -334 -335 -336 -337 -338 -3
39 -340 -341 -342 -343 -344 -345 -346 -347 -348 -349 -350 -351 -352 -353 -354 -355 -356 -357 -358 -359 -360 -361 -3
62 -363 -364 -365 -366 -367 -368 -369 -370 -371 -372 -373 -374 -375 -376 -377 -378 -379 -380 -381 -382 -383 -384 -3
85 -386 -387 -388 -389 -390 -391 -392 -393 -394 -395 -396 -397 -398 -399 -400 -401 -402 -403 -404 -405 -406 -407 -4
08 -409 -410 -411 -412 -413 -414 -415 -416 -417 -418 -419 -420 -421 -422 -423 -424 -425 -426 -427 -428 -429 -430 -4
31 -432 -433 -434 -435 -436 -437 -438 -439 -440 -441 -442 -443 -444 -445 -446 -447 -448 -449 -450 -451 -452 -453 -4
[last row cut off at the bottom edge; only the tops of the characters are visible, consistent with: 54 -455 -456 ... -476 -4]
```
"Done!" is never printed.

**Diagrams/tables**: none

**Notes for curriculum**: Demonstrates the runaway output of an infinite `while True` loop whose counter keeps decreasing.

**Issues**: The output screenshot is cut off at the bottom: the last visible row is only half shown, and the real output never ends. The displayed sequence is consistent with Python 3 (`print(n, end=' ')` counting down from 10).

---

## Slide 22 — For Loop

**Text**:
- For Loop
- (Python logo)

**Code**: none

**Output shown**: none

**Diagrams/tables**: none (section title slide).

**Notes for curriculum**: Section divider: start of the for-loop section. The "Infinite loop" section (slides 19–21) ends just before this slide.

**Issues**: none
