// Answer keys for Exams 3 and 4 (loaded only after an exam is submitted).
import type { AnswerKey } from "../types";

export const EXAM34_ANSWERS: Record<string, AnswerKey> = {
  // ===================================================================== EXAM 3
  "x3-mcq-01": {
    answer: 0,
    explanation:
      "`**` comes first: 2 ** 3 = 8. Next, `//` and `%` (same level as `*`) are worked out left to right: 8 // 3 = 2 and 7 % 4 = 3. Last, `-` and `+` go left to right: 10 - 2 + 3 = 11. You get 5 if you do the `+` before the `-` (10 - (2 + 3)). You get 9 if you treat 7 % 4 as the quotient 1 instead of the remainder 3. You get 1 if you ignore precedence and work strictly left to right.",
  },
  "x3-mcq-02": {
    answer: 0,
    explanation:
      "A name may start with a letter or an underscore and then use letters, digits and underscores, so `_total2` is valid. `total-2` has a hyphen, which Python reads as a minus sign. `2_total` starts with a digit. `None` is one of Python's 35 keywords (Topic 2, slide 21), so it cannot be a variable name. The last three all give a SyntaxError.",
  },
  "x3-mcq-03": {
    answer: 0,
    explanation:
      "`input()` always returns a string, so a is '4' and b is '5'. `*` is done before `+`, so '5' * 2 repeats the string and gives '55'. Then '4' + '55' joins the two strings: 455. 14 would need int() conversion (4 + 5 * 2). 4545 comes from joining first and then repeating. 18 comes from converting and adding first ((4 + 5) * 2).",
  },
  "x3-mcq-04": {
    answer: 0,
    explanation:
      "`a, b, c = 5, 10, 15` gives each variable its own value. `a < b < c` is a chained comparison (5 < 10 < 15), so it is True. In `a + b == c and b > c`, the arithmetic runs first, so 15 == 15 is True. But `b > c` is False, and `and` needs both sides to be True, so the result is False. On the second line, `not` is applied after the comparison `a > b`, so `not (5 > 10)` is `not False`, which is True. An `or` is True as soon as one side is True, so the line prints True. (The right side, 15 % 5 != 0, is False anyway.)",
  },
  "x3-mcq-05": {
    answer: 0,
    explanation:
      "Python checks the conditions from top to bottom and runs only the first block whose condition is True. 85 >= 50 is True straight away, so grade becomes 'Pass' and every elif is skipped, even though 85 >= 80 is also True. Only one branch of an if…elif…else chain can run, so 'Pass' and 'Merit' are never both printed. To fix it, test the highest boundary first: >= 90, then >= 80, then >= 50.",
  },
  "x3-mcq-06": {
    answer: 0,
    explanation:
      "The conditional expression gives rate the value 0.4 only when price > 50. 50 > 50 is False, so rate is 0.2. In `price - price * rate` the multiplication runs first: 50 * 0.2 = 10.0. Then 50 - 10.0 = 40.0. The result is a float because 0.2 is a float, so 40 (without .0) is wrong. 30.0 is what you get if you treat 50 as 'more than 50' and use 40%. 10.0 is only the discount, not the new price.",
  },
  "x3-mcq-07": {
    answer: 0,
    explanation:
      "A non-zero number used as a condition counts as True, and 0 counts as False (Topic 4, slide 8). So the loop runs while n is 3, 2 and 1. After 1 is printed, n becomes 0, the condition is False and the loop ends, so 0 is never printed. `end=\" \"` replaces the new line with a space, so the numbers stay on one line, and 'Go' is printed on that same line after the loop.",
  },
  "x3-mcq-08": {
    answer: 0,
    explanation:
      "Topic 4, slide 2 says definite iteration repeats a number of times known in advance (example: the for loop), and indefinite iteration repeats until some condition is met (example: the while loop). Here nobody knows how many attempts are needed, and the repetition stops when a condition is met (the password is correct). So this is indefinite iteration, and the slide's example is the while loop.",
  },
  "x3-tr-01": {
    answer: "Name:\tSara | Score: 21\nIt's done\nBye",
    explanation:
      "`score += 4` makes score 21. The line that starts with # is a comment, so it never runs and score is not multiplied by 10. The first print joins 'Name:', a tab (\\t) and 'Sara' with +. Its `end=\" | \"` replaces the usual new line, so the next print continues on the same line: 'Score: 21' (the f-string puts the value of score in the braces). In the last string, \\' prints a single quote and \\n starts a new line, so 'Bye' is on its own line.",
  },
  "x3-tr-02": {
    answer: "A\nD\nE\nEnd",
    explanation:
      "x is 10 and y is 4, and the program makes three separate decisions. 1) The if…elif: 10 > 4 is True, so it prints A and skips the elif. 2) A new if…else, which is always checked: 10 % 4 is 2, not 0, so it prints D. 3) Another separate if: 10 > 5 and 4 < 5 are both True, so it prints E. The last print is not indented, so End is always printed. A common mistake is to think the second and third ifs are skipped because A was printed. Only an elif or else is skipped when an earlier branch runs.",
  },
  "x3-tr-03": {
    answer: "Total: 22\nCount: 7",
    explanation:
      "Inside the loop, count takes the values 1, 2, 3, 4, 5 and 6. For 3 and 6 (the multiples of 3) the loop adds count * 2, which is 6 and then 12. For the other four values it adds 1. So total = 1 + 1 + 6 + 1 + 1 + 12 = 22. The update `count = count + 1` is outside the if…else, so it runs on every pass. The loop stops when count becomes 7, and that is the value printed after the loop.",
  },
  "x3-tr-04": {
    answer: "Level reached\nBonus: 39\nTotal: 174",
    explanation:
      "135 >= 100 is True, so the outer if block runs. It prints 'Level reached' and then checks the inner condition. member is 'gold', so bonus = 135 // 10 * 3. `//` and `*` have the same precedence and go left to right: 135 // 10 = 13, then 13 * 3 = 39. The outer else block, with 'Almost there' and 'No bonus', is skipped completely. The last two prints are not indented, so they always run: Bonus: 39 and Total: 135 + 39 = 174.",
  },
  "x3-err-01": {
    answer: 0,
    explanation:
      "Line 1 works: int() turns the text '25' into the integer 25. Line 2 calculates 60 - 25 = 35, an int. Line 3 tries to join a string and an int with +, and Python does not allow that: TypeError: can only concatenate str (not \"int\") to str. The line is valid Python, so it is not a SyntaxError. It only fails when it runs. Fix: use a comma, `print(\"Years until 60:\", years_left)`, or an f-string, `print(f\"Years until 60: {years_left}\")`.",
  },
  "x3-err-02": {
    answer: 0,
    explanation:
      "With 35, both conditions (35 >= 50 and 35 >= 40) are False, and there is no else, so no assignment to result runs. A variable only exists after an assignment to it has run, so line 6 raises NameError: name 'result' is not defined. The else part is optional (Topic 3, slide 33), so line 4 is not an error. Fix: add `else:` with `result = \"Fail\"`, or give result a starting value before the if.",
  },
  "x3-code-01": {
    answer: `quiz = float(input("Quiz mark: "))
mid = float(input("Midterm mark: "))
final = float(input("Final mark: "))
average = (quiz + mid + final) / 3
print("Average:", average)
if average >= 85:
    print("Grade: A")
elif average >= 70:
    print("Grade: B")
elif average >= 55:
    print("Grade: C")
else:
    print("Grade: F")`,
    explanation:
      "Read the marks with float(input(...)) so decimals work. The parentheses in (quiz + mid + final) / 3 make Python add first. Without them, only the final mark would be divided by 3. The chain tests the highest boundary first. Each elif is only reached when every earlier test was False, so `elif average >= 70` really means '70 or more but below 85'. Using >= makes the boundary values 85, 70 and 55 give A, B and C. The tests check every grade and the values just below 85 and 55.",
  },
  "x3-code-02": {
    answer: `n = int(input("How many days? "))
count = 0
hot = 0
total = 0
while count < n:
    temp = float(input("Temperature: "))
    total = total + temp
    if temp >= 35:
        hot = hot + 1
    count = count + 1
print("Hot days:", hot)
print("Average:", total / n)`,
    explanation:
      "The counter starts at 0 and the loop runs while count < n, so the body runs exactly n times. Each temperature is added to the running total. The if inside the loop adds 1 to hot only for temperatures of 35 or more, so 35 itself counts. `count = count + 1` sits at the loop-body level, not inside the if, so it runs on every pass. The two prints are not indented, so they run once after the loop. The average is total / n.",
  },

  // ===================================================================== EXAM 4
  "x4-mcq-01": {
    answer: 0,
    explanation:
      "`/` always gives a float, so 7 / 7 is 1.0 (float). 3e2 is scientific notation (3 × 10²), which is the float 300.0. \"12\" * 2 repeats the string to give \"1212\", which is still a str. 2 + 3j is a complex number. type() shows each type as <class '...'>. A common mistake is to think 7 / 7 is an int because the answer is a whole number, or that \"12\" * 2 becomes a number.",
  },
  "x4-mcq-02": {
    answer: 2,
    explanation:
      "`ok = \"UTAS\" == 'UTAS'` is fine: single and double quotes make the same kind of string, so the comparison is True and that value is stored in ok. `passed = true` gives a NameError, because Boolean values need a capital letter (True). `'It's late'` gives a SyntaxError, because the apostrophe ends the string early. It needs `\\'` or double quotes. `\"Total: \" + 5` gives a TypeError, because + cannot join a string and an int.",
  },
  "x4-mcq-03": {
    answer: 0,
    explanation:
      "In a script, a bare expression such as `x + 6` is evaluated, but the result is not shown or stored, and x does not change. Only interactive mode echoes the value of an expression (Topic 2, slides 48–49). So x is still 4, y = 4 * 2 = 8, and print(x, y) prints 4 8. You get 10 20 if you think the expression changes x. You get the answers with an extra 10 if you expect the script to display the expression like the >>> prompt does.",
  },
  "x4-mcq-04": {
    answer: 0,
    explanation:
      "`/` and `*` have the same precedence and go left to right, and both run before `-`. So 4 / 2 = 2.0, then 2.0 * 3 = 6.0, then 10 - 6.0 = 4.0. The result is a float because `/` always gives a float, so 4 is wrong. Next, 4.0 > 4 is False, so the `and` is already False and the whole result is False. The right side doesn't change it (7 % 3 = 1, so not (1 == 2) is True, but False and True is still False). 9.0 comes from working left to right: (10 - 4) / 2 * 3.",
  },
  "x4-mcq-05": {
    answer: 0,
    explanation:
      "`weather == True` compares the string 'raining' with the Boolean True. A string is never equal to True, so this is False. `transport == \"no\"` is also False, because transport is 'yes'. So the `or` is False and the else prints Campus. The second if is a separate statement: 'raining' == 'raining' and 'yes' == 'yes' are both True, so it prints Take an umbrella. The last print always runs. Thinking that a non-empty string equals True leads to the wrong answer 'Online class'.",
  },
  "x4-mcq-06": {
    answer: 0,
    explanation:
      "'Failed' is in the inner else, so the outer condition must be True (attendance >= 75) and the inner one must be False (mark below 50). Attendance 75 with mark 49 does this, because 75 >= 75 is True. With attendance 74 or 60, the outer test is False, so the inner test is never checked and the program prints Not eligible. With mark 50, 50 >= 50 is True, so it prints Passed.",
  },
  "x4-mcq-07": {
    answer: 0,
    explanation:
      "The condition is checked before every pass. k = 1 < 20, so k becomes 3 (steps 1). 3 < 20, so k becomes 9 (steps 2). 9 < 20, so k becomes 27 (steps 3). Now 27 < 20 is False and the loop stops. It prints 27 3. The loop does not stop before k goes past 20, because the test only happens at the top of the loop. So 9 2 is wrong, and 20 never appears.",
  },
  "x4-mcq-08": {
    answer: 0,
    explanation:
      "m is increased BEFORE the print. With `m < 10` the condition is tested with m = 0, 1, …, 9, and each pass prints m + 1, so the lines go from num x 1 to num x 10. When m reaches 10 the test is False, giving exactly 10 lines. `m <= 10` also runs the loop when m is 10 and prints num x 11. `m < 9` stops after num x 9. `m > 10` is False at the start (0 > 10), so nothing is printed.",
  },
  "x4-tr-01": {
    answer: "55 10\n2.5 2 1\n49 5050",
    explanation:
      "a is the string '5'. `a * b` repeats it twice: '55'. `int(a) * b` is 5 * 2 = 10. On line 2, float('5') / 2 = 2.5, 5 // 2 = 2 and 5 % 2 = 1. Then c = '5' + '0' joins two strings to make '50'. So int(c) - 1 = 49, and c * 2 repeats the string: '5050'. print puts a space between the values on each line.",
  },
  "x4-tr-02": {
    answer: "Bill: 6500 baisa\nUsage level: high",
    explanation:
      "250 <= 100 is False, so the program checks the elif: 250 <= 300 is True. So bill = 100 * 20 + (250 - 100) * 30 = 2000 + 4500 = 6500. The parentheses make Python subtract first, then multiply. The else is skipped. The conditional expression gives 'high', because 6500 > 5000 is True. print separates the values with spaces.",
  },
  "x4-tr-03": {
    answer: "big at 4\nbig at 5\nResult: 120",
    explanation:
      "product starts at 1 and is multiplied by i on each pass. i = 1 gives 1, i = 2 gives 2, i = 3 gives 6, i = 4 gives 24 and i = 5 gives 120. This is 5! (Topic 4, slide 13). The if inside the loop prints only when product > 20, so it prints for i = 4 (24) and i = 5 (120). After i becomes 6 the loop ends and the result line prints once. Starting product at 0 would make every product 0, which is why it starts at 1.",
  },
  "x4-tr-04": {
    answer: "13 is odd and large\nSum: 33",
    explanation:
      "a = 7, b = 13 and c = 13. The first test, 7 >= 13 and 7 >= 13, is False. The elif, 13 >= 7 and 13 >= 13, is True because >= accepts the tie, so big = 13. 13 % 2 is 1, so the outer else runs. Inside it, 13 > 10 is True, so it prints '13 is odd and large'. The last line always runs: 7 + 13 + 13 = 33. With strict > instead of >= (as on Topic 3, slide 37), the tie would wrongly give big = c, although here c is also 13.",
  },
  "x4-err-01": {
    answer: 0,
    explanation:
      "Line 1 stores the text 'Omar'. Line 2 calls int('7.5'). int() can only convert text that is a whole number, so Python stops with ValueError: invalid literal for int() with base 10: '7.5'. Lines 3 and 4 never run. If they did, float('3') would work, and print with commas can show strings and numbers together. Fix: read the hours with float(input(...)).",
  },
  "x4-err-02": {
    answer: 0,
    explanation:
      "`else` never takes a condition. It runs when every condition above it was False (Topic 3, slides 21 and 33). Python sees `else speed <= 100:` and reports SyntaxError: expected ':' on line 6. Because it is a syntax error, the program does not run at all, not even line 1. Fix: write `else:` alone, or `elif speed <= 100:`. Lines 4 and 7 are correct.",
  },
  "x4-code-01": {
    answer: `amount = float(input("Amount: "))
card = input("Student card (yes/no): ")
if amount > 30 and card == "yes":
    discount = amount * 0.15
elif amount > 30:
    discount = amount * 0.05
else:
    discount = 0
print("Discount:", discount)
print("To pay:", amount - discount)`,
    explanation:
      "The combined test must come first. The elif (amount > 30) is only reached when the first test is False, which means the amount is over 30 but the customer has no student card. Use > rather than >= so that exactly 30 gets no discount. `card == \"yes\"` compares strings, so the typed text must match exactly. The two prints come after the chain, so every customer sees both lines. The hidden tests check the 30 boundary, 30.5 just above it, and the no-discount branch.",
  },
  "x4-code-02": {
    answer: `count = 1
total = 0
while count <= 3:
    price = float(input("Price: "))
    if price >= 20:
        new_price = price - price * 0.25
    else:
        new_price = price - price * 0.10
    print("Discounted:", new_price)
    total = total + new_price
    count = count + 1
print("Total:", total)`,
    explanation:
      "The loop runs for count = 1, 2 and 3, then stops when count becomes 4. Inside the loop, the if…else picks the discount for that one price: 25% when price >= 20 (so 20 itself gets 25%), otherwise 10%. The discounted price is printed straight away and added to the running total. `count = count + 1` is outside the if…else, so it runs every time. The Total line is not indented, so it prints once, after the loop.",
  },
};
