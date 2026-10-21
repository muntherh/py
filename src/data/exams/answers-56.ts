// Answer keys for Exams 5 and 6 (loaded lazily, only after an exam is submitted).
import type { AnswerKey } from "../types";

export const EXAM56_ANSWERS: Record<string, AnswerKey> = {
  // ====================================================================== EXAM 5
  "x5-mcq-01": {
    answer: 2,
    explanation:
      "** is evaluated right to left (slide 52): 3 ** 2 = 9 first, then 2 ** 9 = 512. Next come //, % and the binary minus. // and % share one level and go left to right: 512 // 10 = 51, then 51 % 7 = 2. On the right side the unary minus belongs to 7, so -7 // 2 means (-7) // 2. Floor division rounds DOWN, so -3.5 becomes -4 (like -13 // 3 = -5 on slide 34). Finally 2 - (-4) = 6. You get 5 if you round -3.5 toward zero. You get 10 or 9 if you work out 2 ** 3 first (64), which ignores the right-to-left rule.",
  },
  "x5-mcq-02": {
    answer: 0,
    explanation:
      "b != 0 is False, so in `False and a / b > 1` Python stops at once (short-circuit evaluation, slide 44). a / b is never calculated, so there is no ZeroDivisionError. and is evaluated before or, so next comes `False or c > a > b`. The chained comparison means 7 > 4 and 4 > 0, which is True. For the second value, not has lower precedence than the comparisons, so it means not (a < c == 7). a < c is True and c == 7 is True, so the chain is True and not makes it False. The program prints True False.",
  },
  "x5-mcq-03": {
    answer: 1,
    explanation:
      "a is the string \"4\", so a * b repeats it twice and gives the string \"44\" (slide 31). It does not give the number 8. int(\"44\") is 44. Then 44 // 10 = 4 and b ** 2 = 4, so c = 4 + 4 = 8. type(a * b) is the type of \"44\", which is <class 'str'>. \"4 <class 'int'>\" treats \"4\" * 2 as the number 8. \"3\" comes from adding before dividing (44 // 14). Multiplying a string by an int is allowed, so there is no error.",
  },
  "x5-mcq-04": {
    answer: 3,
    explanation:
      "The else is at the same indentation as `if x > 10:`, so it belongs to the OUTER if (slide 41). x = 15 makes the outer condition True, so the whole else block is skipped: B is not printed and the check for C is never made. Inside the outer block, 15 % 2 == 0 is False. That inner if has no else, so nothing is printed there. Only the unindented print(\"D\") runs. \"B, C, D\" is what you would get by wrongly attaching the else to the inner if.",
  },
  "x5-mcq-05": {
    answer: 1,
    explanation:
      "In an if…elif…else chain Python checks the conditions from top to bottom and runs ONLY the first True branch (slide 32). 85 >= 50 is True, so grade = \"pass\" and the two elif conditions are never checked, even though 85 >= 80 is also True. grade is not \"merit\", so the conditional expression gives bonus = 0, and the program prints pass 85. To grade correctly, the highest threshold must be checked first.",
  },
  "x5-mcq-06": {
    answer: 0,
    explanation:
      "and is evaluated before or (slide 52), so the first condition means temp > 30 or (raining and windy == \"no\"). temp > 30 is True, so the whole condition is True and the program prints Stay inside. If you group it as (temp > 30 or raining) and windy == \"no\", you get Go out, which is wrong. windy == True compares the string \"yes\" with the Boolean True. They are different values, so the result is False and Take a jacket is not printed. Done is not indented, so it always prints.",
  },
  "x5-mcq-07": {
    answer: 2,
    explanation:
      "Trace n and total. n=1: no jump, total=1, n=2. n=2: total=3, n=3. n=3: 3 % 3 == 0, so n=5, total=8, n=6. n=6: n=8, total=16, n=9. n=9: n=11, total=27, n=12. Now 12 < 10 is False and the loop stops, so it prints 27 12. \"45 10\" is the plain sum 1+…+9, which ignores the jump inside the if. In the last iteration n is updated twice (9 → 11 → 12), so the final value is 12, not 10.",
  },
  "x5-mcq-08": {
    answer: 3,
    explanation:
      "When the condition is a number, any non-zero value counts as True and 0 counts as False (slide 8). 7 % 4 = 3 (True), so it prints 7 and count becomes 10. 10 % 4 = 2, so it prints 10 and count becomes 13. 13 % 4 = 1, so it prints 13 and count becomes 16. 16 % 4 = 0 (False), so the loop ends and 16 is not printed inside the loop. end=\",\" replaces the new line with a comma, so everything stays on one line and the last print continues it: 7,10,13,end 16.",
  },
  "x5-tr-01": {
    answer: "x = 3; y=3\tdone\nIt's -3",
    explanation:
      "x *= 2 + 1 means x = x * (2 + 1). The right side is worked out first, so x = 15 (not 5 * 2 + 1 = 11). x //= 4 gives 15 // 4 = 3. In y = x % 3 ** 2 the ** comes first, so y = 3 % 9 = 3. The first print shows x = 3 and ends with \"; \" instead of a new line. The f-string output therefore continues the same line: y=3, then a tab (\\t), then done. In 'It\\'s' the backslash makes the apostrophe part of the string. x - y * 2 = 3 - 6 = -3.",
  },
  "x5-tr-02": {
    answer: "far\neven 3",
    explanation:
      "a = 12 and b = 4. a > b is True, so the nested chain runs. Its first condition, a - b > 5 (8 > 5), is True, so it prints far. The elif a % b == 0 is never checked, even though 12 is a multiple of 4: only the first True branch runs. The outer elif and else are skipped. Next, (12 + 4) % 2 == 0 is True, so r = \"even\", and 12 // 4 = 3. Output: far, then even 3.",
  },
  "x5-tr-03": {
    answer: "4 * 3 = 12\n4 * 9 = 36\nlast m: 11",
    explanation:
      "m starts at 1 and grows by 2, so the loop runs with m = 1, 3, 5, 7, 9. The products are 4, 12, 20, 28 and 36. Only 12 and 36 are divisible by 3, so only those two rows are printed. print with commas puts one space between the items. After m = 9 the update makes m = 11. 11 <= 10 is False, so the loop stops and the program prints last m: 11.",
  },
  "x5-tr-04": {
    answer: "4.0 2",
    explanation:
      "Trace table. count=0: value 2.0, total 2.0. Is 2.0 > 2.0/1? No. count=1: value 6.0, total 8.0. Is 6.0 > 8.0/2 = 4.0? Yes, so above = 1. count=2: value 1.0, total 9.0. Is 1.0 > 9.0/3 = 3.0? No. count=3: value 7.0, total 16.0. Is 7.0 > 16.0/4 = 4.0? Yes, so above = 2. count becomes 4 and the loop stops. total / count = 16.0 / 4 = 4.0, a float because the values were read with float() and / always gives a float. Output: 4.0 2.",
  },
  "x5-err-01": {
    answer: 1,
    explanation:
      "input() always returns text, so hours is the string \"7.5\". int() can only convert text that looks like a whole number. int(\"7.5\") raises ValueError: invalid literal for int() with base 10: '7.5' on line 3. Line 2 is fine: float(\"4\") gives 4.0 (a decimal point is not needed). Lines 4 and 5 are valid but never reached. Fix: use float(hours).",
  },
  "x5-err-02": {
    answer: 0,
    explanation:
      "65 >= 50 is True, so the outer if block runs. The else lines up with the OUTER if, so it is skipped. Inside the block, 65 >= 80 is False, and that inner if has no else. So no line ever assigns level, and line 7 raises NameError: name 'level' is not defined. There is no syntax or indentation problem. The bug only shows for marks from 50 to 79, which is why it is easy to miss.",
  },
  "x5-code-01": {
    answer: `ctype = input("Customer type: ")
amount = float(input("Amount: "))
if ctype == "member":
    if amount >= 100:
        rate = 0.15
    elif amount >= 50:
        rate = 0.10
    else:
        rate = 0.05
else:
    if amount > 200:
        rate = 0.05
    else:
        rate = 0
discount = amount * rate
final = amount - discount
print("Discount:", discount)
print("Final:", final)
`,
    explanation:
      "The outer if…else separates members from everyone else. Inside the member branch, an if…elif…else checks the bands from the highest down (>= 100, then >= 50, then the rest). Checking >= 50 first would give 100 only 10%. Inside the else branch, the rule is strictly more than 200, so 200 gets no discount. Storing the rate and computing the discount once after the conditions avoids repeating the formula. Examples: member 120 gives 18.0 and 102.0; guest 250 gives 12.5 and 237.5; member 100 gives 15.0 and 85.0; guest 200 gives 0 and 200.0.",
  },
  "x5-code-02": {
    answer: `n = int(input("How many marks? "))
if n <= 0:
    print("No marks")
else:
    count = 0
    total = 0
    passed = 0
    failed = 0
    while count < n:
        mark = float(input("Enter mark: "))
        total = total + mark
        if mark >= 50:
            passed = passed + 1
        else:
            failed = failed + 1
        count = count + 1
    print("Passed:", passed)
    print("Failed:", failed)
    print("Average:", total / n)
`,
    explanation:
      "The outer if handles N <= 0 first, so the program never divides by zero. Inside the else, the loop follows the counter pattern: count starts at 0, the loop runs while count < n, and count = count + 1 is the last line of the loop body. It is NOT inside the if or the else, otherwise only some marks would be counted. Every mark is added to total, and the if…else adds 1 to passed (mark >= 50, so 50 is a pass) or to failed. After the loop the average is total / n. For 45, 80, 70 and 50 that gives Passed: 3, Failed: 1, Average: 61.25.",
  },

  // ====================================================================== EXAM 6
  "x6-mcq-01": {
    answer: 1,
    explanation:
      "Three lines are valid. _total2 starts with an underscore. Total_2 uses only letters, a digit and an underscore. from_ is also valid: from is a keyword, but from_ is a different name. Three lines are invalid. 2nd_total starts with a digit. total-2 contains a hyphen, so Python reads it as the expression total - 2, and you cannot assign to an expression. None is one of the 35 reserved keywords (slide 21), so it cannot be assigned to.",
  },
  "x6-mcq-02": {
    answer: 3,
    explanation:
      "1.5e2 is scientific notation for 1.5 × 10², which is 150.0. Written with e it is always a float, even when the value is whole. Floor division with a float operand gives a float: 150.0 // 4 = 37.0. 37.5 would be the result of /, not //. 7j is a complex number (slide 6), so type(b) is <class 'complex'>.",
  },
  "x6-mcq-03": {
    answer: 1,
    explanation:
      "A backslash at the end of a line continues the string on the next line WITHOUT adding a new line (slide 12). So 'h\\ followed by a' is the string \"ha\". \"ha\" * 2 + \"ha\" is \"hahaha\". print with a comma puts one space between items, so the first line is hahaha !!!. A triple-quoted string keeps its real line break and may contain both ' and \" (slide 9). So the second print shows It's on one line and \"ok\" on the next.",
  },
  "x6-mcq-04": {
    answer: 2,
    explanation:
      "Python checks the syntax of the whole program before running any of it. In 'Result: isn't low' the apostrophe in isn't closes the single-quoted string early (slide 10). The rest of the line then starts a string that is never closed, so Python reports SyntaxError: unterminated string literal on line 4. Because it is a syntax error, no line runs: no input is read and Student: Ali is never printed. Fix: use double quotes, \"Result: isn't low\", or escape the apostrophe, 'Result: isn\\'t low'.",
  },
  "x6-mcq-05": {
    answer: 0,
    explanation:
      "A conditional expression takes the WHOLE expression on each side (slide 27: <expr1> if <condition> else <expr2>). So z = (x - y) if x > 10 else (x + y * 2). 7 > 10 is False, so z = 7 + 3 * 2 = 13. In the same way, w = (10 + 5) if z % 2 == 0 else (-5 * 2). 13 % 2 is 1, so the condition is False and w = -10. \"13 0\" comes from reading the line as 10 + (5 if … else -5) * 2. \"20 -10\" comes from computing (x + y) * 2.",
  },
  "x6-mcq-06": {
    answer: 2,
    explanation:
      "n = 12 is even, so n = 12 // 2 = 6. The next if is a new, separate statement, so it is also checked: 6 % 3 == 0 is True, so n = 7. Its elif is skipped, because only one branch of one if…elif runs. The third if is separate again: 7 > 6, so it prints big 7. The last print is not indented, so it always runs: end 7. \"end 6\" treats all the ifs as one chain. \"big 70\" wrongly runs the elif as well.",
  },
  "x6-mcq-07": {
    answer: 3,
    explanation:
      "For 27: 27 >= 20 is True. In the inner chain, 27 > 30 is False and 27 >= 25 is True, so it prints Warm. The separate if t % 5 == 0 is also inside the outer block. 27 % 5 = 2, so nothing more is printed: exactly one line. For 25 and 30 the program prints Warm and then Round, because both are multiples of 5 (30 > 30 is False, so 30 is Warm, not Hot). For 35 it prints Hot and Round.",
  },
  "x6-mcq-08": {
    answer: 1,
    explanation:
      "Trace: total 0, n 5. Is 5 > 0 and 0 < 8? Yes, so total 5, n 3. Is 3 > 0 and 5 < 8? Yes, so total 8, n 1. Is 1 > 0 and 8 < 8? No, because 8 < 8 is False, so the loop stops and prints 8 1. \"9 -1\" ignores the total < 8 part of the condition. Slide 2 calls this indefinite iteration: the body repeats until a condition is met, and the slide's example of indefinite iteration is the while loop. The number of repetitions is not given in advance.",
  },
  "x6-tr-01": {
    answer: "1 4 | False False",
    explanation:
      "In a script, x + 10 is only an expression: Python calculates it and throws the result away. x stays 4 and nothing is printed (slides 48–49). The next line starts with #, so it is a comment and is ignored. y = x ** 2 // 3 % 4 = 16 // 3 % 4 = 5 % 4 = 1. In x, y = y, x the right side (1, 4) is evaluated first and then assigned, so the values swap: x = 1, y = 4. The first print ends with \" | \" instead of a new line. On the same line, x * y > 10 is 4 > 10 = False, and not x < y means not (1 < 4) = False.",
  },
  "x6-tr-02": {
    answer: "Access\nToo many tries\nlow",
    explanation:
      "and is evaluated before or, so the condition means (user == \"admin\" and pin == 1234) or tries > 3. \"Admin\" == \"admin\" is False because string comparison is case-sensitive (slide 41), so the bracket is False. But tries > 3 (5 > 3) is True, so the whole condition is True: the program prints Access, and the nested if prints Too many tries. In the conditional expression, pin % 2 == 0 is True but tries <= 3 is False, so the and is False and level is \"low\".",
  },
  "x6-tr-03": {
    answer: "24! 9? 4! stop -1",
    explanation:
      "n takes the values 24, 19, 14, 9, 4 and then -1. 24 % 4 == 0, so it prints 24!. 24 is also a multiple of 3, but the elif is skipped. 19 and 14 match neither condition. 9 % 4 is 1 and 9 % 3 is 0, so it prints 9?. 4 % 4 == 0, so it prints 4!. Then n = -1, n > 0 is False, and the loop stops. Each print inside the loop ends with a space instead of a new line, so everything, including stop -1, is on one line.",
  },
  "x6-tr-04": {
    answer: "product: -30 zeros: 1\n-8",
    explanation:
      "count goes from 1 to 4, so four values are read. 3 makes product 3. 0 makes zeros 1 and leaves product unchanged. -2 makes product -6. 5 makes product -30. After the fourth value count becomes 5 and the loop stops. count - zeros = 5 - 1 = 4. -30 // 4 is -7.5 rounded DOWN, so the answer is -8, not -7 (slide 34: -13 // 3 = -5).",
  },
  "x6-err-01": {
    answer: 3,
    explanation:
      "45 >= 60 is False, but member == \"gold\" is True, so the or makes the first condition True and the first branch runs. fee is the int 5, and \"Reduced fee: \" + fee tries to join a string and an int with +. That raises TypeError: can only concatenate str (not \"int\") to str on line 5. The other branches would work because they use a comma in print. Combining a number test and a string test with or is fine (line 3). Python never reaches line 11.",
  },
  "x6-err-02": {
    answer: 0,
    explanation:
      "n = 6 makes total 2.0. n = 4 makes it 5.0. n = 2 makes it 11.0, and then n becomes 0. The condition n >= 0 is still True for 0, so the body runs once more. 12 / 0 raises ZeroDivisionError: division by zero on line 4. With the condition n > 0 the loop would stop before n reaches 0 and print Total: 11.0. >= is a normal comparison in a while condition, and print can show a string and a float together.",
  },
  "x6-code-01": {
    answer: `vtype = input("Vehicle type: ")
hours = int(input("Hours parked: "))
if hours < 0 or hours > 24:
    print("Invalid hours")
elif vtype == "car":
    if hours <= 2:
        fee = 0
    else:
        fee = (hours - 2) * 0.5
    print("Fee:", fee, "OMR")
elif vtype == "truck":
    if hours <= 3:
        fee = hours * 1
    else:
        fee = 3 + (hours - 3) * 2
    print("Fee:", fee, "OMR")
else:
    print("Unknown vehicle")
`,
    explanation:
      "The first condition joins two comparisons with or. Each side needs a full comparison (hours < 0 or hours > 24). Because it comes first, an invalid number of hours never produces a fee. The elif branches choose the vehicle, and each one holds a nested if…else for its two price bands. For a car, (hours - 2) * 0.5 charges only the hours after the 2 free ones. For a truck, 3 + (hours - 3) * 2 adds 3 OMR for the first three hours and 2 OMR for each extra hour. Checks: car 5 gives 1.5, truck 7 gives 11, truck 24 gives 45, car 1 gives 0. The final else catches any other type.",
  },
  "x6-code-02": {
    answer: `count = 0
total = 0
big = 0
while count < 5:
    price = float(input("Price: "))
    if price <= 0:
        print("Invalid price")
    else:
        if price >= 10:
            total = total + price * 0.9
            big = big + 1
        else:
            total = total + price
        count = count + 1
print("Total:", total)
print("Big items:", big)
if total > 40:
    print("Free delivery")
else:
    print("Delivery fee applies")
`,
    explanation:
      "The key idea is that count is updated ONLY in the valid branch. An invalid price does not count, so the loop reads one extra price for each invalid one. With inputs 12, 5, -3, 20, 8, 4 it reads 6 values. Inside the valid branch, a nested if…else charges 90% for prices of 10 or more (10 itself is a big item) and the full price otherwise. After the loop, the delivery rule uses strictly more than 40, so a total of exactly 40 still pays the fee. Example: 10.8 + 5 + 18 + 8 + 4 = 45.8 with 2 big items, so Free delivery.",
  },
};
