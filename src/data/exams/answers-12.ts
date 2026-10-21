// Answer keys for Exams 1 and 2 (loaded lazily after submission).
// mcq / error: index of the correct option (original order). tracing: exact stdout.
// coding: reference solution (verified against every test by scripts/verify-curriculum.ts).
import type { AnswerKey } from "../types";

const py = (...lines: string[]): string => lines.join("\n");

export const EXAM12_ANSWERS: Record<string, AnswerKey> = {
  // ==================================================================== EXAM 1
  "x1-mcq-01": {
    answer: 2,
    explanation:
      "2.5 has a decimal point and no quotes, so it is a float (Topic 2, slide 5). 25 has no decimal point, so it is an int (slide 4). " +
      '"2.5" is inside quotes, so it is a string even though it looks like a number (slide 8). 2j ends in j, so it is a complex number (slide 6).',
  },
  "x1-mcq-02": {
    answer: 2,
    explanation:
      "_price1 starts with an underscore and then uses only letters and digits, so it follows the rules on Topic 2, slide 20. " +
      "1st_price starts with a digit, unit-price contains a hyphen (a special symbol; Python would read it as unit minus price), " +
      "and unit price contains a space. All three break the naming rules (slides 20 and 23).",
  },
  "x1-mcq-03": {
    answer: 1,
    explanation:
      "// is floor division: 17 / 5 is 3.4, and rounding down gives 3 (Topic 2, slide 34). % gives the remainder: 5 goes into 17 three times (15) " +
      "with 2 left over (slide 35). print() puts a space between the two values, so the output is 3 2. The value 3.4 is what / would give, not //.",
  },
  "x1-mcq-04": {
    answer: 1,
    explanation:
      'The value "90" is written inside quotes, so it is a string. The type of a variable is the type of the value it refers to (Topic 2, slide 24), ' +
      "and print(type(mark)) shows <class 'str'>. It is not int: the quotes make it text, not a number. " +
      "Note: slide 13 shortens the result to just str, but real Python prints <class 'str'>.",
  },
  "x1-mcq-05": {
    answer: 1,
    explanation:
      "An if statement needs the keyword if in lowercase, a Boolean condition, and a colon at the end (Topic 3, slide 6). " +
      "== compares two values; a single = is assignment and causes a SyntaxError inside a condition. " +
      "if score == 10 forgets the colon, and === is not a Python operator (equality is written ==), so both are also errors.",
  },
  "x1-mcq-06": {
    answer: 1,
    explanation:
      "In value1 if condition else value2, Python first evaluates the condition (Topic 3, slide 27). 18 >= 25 is False, so the expression takes " +
      'the value after else, which is "cool", and that string is stored in weather (like Result on slide 28). "warm" would be chosen only if the ' +
      "condition were True. The expression gives one of the two strings, not the True/False result of the condition.",
  },
  "x1-mcq-07": {
    answer: 0,
    explanation:
      "Python checks the conditions from top to bottom and runs only the FIRST block whose condition is True; the rest of the chain, including else, " +
      "is skipped and execution continues after the chain (Topic 3, slides 32–33). Running every True branch is what happens with several " +
      "separate if statements, not with elif. Two True conditions are allowed and cause no error.",
  },
  "x1-mcq-08": {
    answer: 1,
    explanation:
      "Topic 4, slide 2: definite iteration repeats a number of times fixed in advance (example: for loop), while indefinite iteration repeats " +
      "until some condition is met (example: while loop). A while loop repeats its block as long as its condition is True (slide 4). " +
      "Alternative execution is the if…else statement from Topic 3, and sequential execution has no repetition at all.",
  },
  "x1-tr-01": {
    answer: "Student: Sara has 50 marks",
    explanation:
      "marks += 5 means marks = marks + 5, so marks becomes 50 (Topic 2, slide 37). The first print shows its values with a space between them and, " +
      'because of end=" ", finishes with a space instead of a new line (slides 76–77). So the second print continues on the same line, where the ' +
      "f-string replaces {marks} with 50 (slide 75). Common mistakes: writing the output on two lines, or keeping 45 because you forgot that += changes the variable.",
  },
  "x1-tr-02": {
    answer: "-4 is not a positive even number\nDone",
    explanation:
      "-4 % 2 is 0, so n % 2 == 0 is True, but n > 0 is False. With and, BOTH parts must be True (Topic 2, slide 43), so the whole condition is False " +
      'and the else block runs (Topic 3, slide 21). print("Done") is not indented, so it is outside the if…else and always runs (Topic 3, slide 16). ' +
      "The tempting mistake is to pick the if branch just because -4 is even.",
  },
  "x1-tr-03": {
    answer: "B\nGrade done",
    explanation:
      "Python checks the conditions in order. 85 >= 90 is False; 85 >= 80 is True, so it prints B and skips the rest of the chain (Topic 3, slides 32–33). " +
      "85 >= 70 is also True, but that branch is never checked, so C is NOT printed. The last print is outside the chain and always runs. " +
      "Writing B and C is the classic mistake of treating elif like separate if statements.",
  },
  "x1-tr-04": {
    answer: "4 * 1 = 4\n4 * 2 = 8\n4 * 3 = 12\nEnd of table",
    explanation:
      "The counter i starts at 1 (initialize), the loop runs while i <= 3 (test), and i = i + 1 moves it on (update): the pattern on Topic 4, slide 10. " +
      'The body runs for i = 1, 2 and 3, printing num, "*", i, "=" and num * i separated by spaces, like the table on slide 15. When i becomes 4 the ' +
      "condition is False, the loop ends, and the unindented print runs once. Printing a line for i = 4 is the usual off-by-one mistake.",
  },
  "x1-err-01": {
    answer: 0,
    explanation:
      'input() always returns a string (Topic 2, slide 61), so num1 holds "3", not the number 3. Line 3 then tries "3" + 5. + can join two strings ' +
      'or add two numbers (slide 29) but cannot mix them, so Python raises TypeError: can only concatenate str (not "int") to str on line 3. ' +
      "The prompt inside input() is optional, so line 1 is fine, and input() does store what the user types. The fix is num1 = int(input()) (slides 64 and 71). " +
      "Expecting the answer 8 is the classic mistake of forgetting the conversion.",
  },
  "x1-err-02": {
    answer: 0,
    explanation:
      "Topic 3, slide 6: we end the if statement with a colon. Line 2 has no colon, so Python cannot read the statement and reports " +
      "SyntaxError: expected ':' on line 2 before running anything. The indentation on line 3 is correct (that line belongs to the if block), " +
      ">= is the right way to write 'greater than or equal to' (=> does not exist), and mark is given a value on line 1.",
  },
  "x1-code-01": {
    answer: py(
      'mark1 = float(input("Enter first mark: "))',
      'mark2 = float(input("Enter second mark: "))',
      "total = mark1 + mark2",
      "average = total / 2",
      'print("Total:", total)',
      'print("Average:", average)',
    ),
    explanation:
      "Read each mark with input() and convert it with float(), because input() returns a string and the marks may have decimals " +
      '(Topic 2, slides 72–73). Without the conversion, mark1 + mark2 would join the text ("80" + "70" gives "8070"). total = mark1 + mark2, ' +
      "and average = total / 2: / always gives a float, so 9 and 4 give an average of 6.5 (using // would wrongly give 6.0). " +
      "Print the total first and the average second, each with its label. Any labels with the right numbers in the right order pass the tests.",
  },
  "x1-code-02": {
    answer: py('N = int(input("Enter N: "))', "A = 1", "while A <= N:", "    print(A)", "    A = A + 1", 'print("Done")'),
    explanation:
      "This is the counting pattern from Topic 4, slides 9–10: initialize the counter (A = 1), test it (while A <= N:), and update it inside the body " +
      "(A = A + 1). Using < instead of <= would stop one number early, and starting at 0 would print an extra 0. Forgetting the update means the " +
      'condition never becomes False. print("Done") is not indented, so it runs once, after the loop has finished.',
  },

  // ==================================================================== EXAM 2
  "x2-mcq-01": {
    answer: 1,
    explanation:
      "A Boolean is True or False, and the first letter must be uppercase (Topic 2, slide 7). Lowercase false is not a Python keyword, so Python " +
      "treats it as a variable name; no variable called false exists, so it stops with NameError: name 'false' is not defined (compare type(true) " +
      'on slide 13). passed = "false" is allowed: it simply stores a string, not a Boolean. passed = True stores a Boolean, and passed = 5 > 3 stores ' +
      "the Boolean result of a comparison, True (slide 38).",
  },
  "x2-mcq-02": {
    answer: 1,
    explanation:
      "Inside a string written with single quotes, a plain ' ends the string early, so print('It's easy') is a SyntaxError. Putting a backslash " +
      "before the quote (\\') tells Python the quote is part of the text (Topic 2, slide 10), so print('It\\'s easy') prints It's easy. " +
      'The forward slash / is not an escape character, and \\" puts a double-quote character into the text, which prints It"s easy. ' +
      "(Writing the string in double quotes, \"It's easy\", would also work, as slide 10 explains.)",
  },
  "x2-mcq-03": {
    answer: 1,
    explanation:
      "Python follows the precedence rules (PEMDAS, Topic 2, slides 51–52): ** first (4 ** 2 = 16), then * (3 * 16 = 48), then + (2 + 48 = 50). " +
      "400 comes from working strictly left to right ((2 + 3) * 4, then squared), 146 from doing 3 * 4 before the power, and 80 from adding 2 + 3 first.",
  },
  "x2-mcq-04": {
    answer: 0,
    explanation:
      "Topic 2, slide 49: a statement is a unit of code Python can execute; print and assignment are statements, and the assignment statement " +
      "produces no output. x + 17 is an expression (slide 48): Python works out its value, but x itself does not change. print(x) displays a value; " +
      "it does not store anything. And an assignment never displays the value it stores.",
  },
  "x2-mcq-05": {
    answer: 1,
    explanation:
      "In an if…else exactly one of the two blocks runs (Topic 3, slides 20–21). 4 > 5 is False, so only the else block runs: x = 4 + 10 = 14. " +
      "8 would come from the if block, which is skipped. 18 would need both blocks to run (4 * 2 = 8, then 8 + 10), which never happens with if…else.",
  },
  "x2-mcq-06": {
    answer: 0,
    explanation:
      "The inner if is indented inside the outer if, so it is part of the outer if's block (Topic 3, slides 40–41). Python only reaches it when " +
      "a > 0 is True; if a > 0 is False, the whole block, including the inner if, is skipped. Placing an if inside another if is allowed: slide 40 calls it a nested if.",
  },
  "x2-mcq-07": {
    answer: 0,
    explanation:
      'Both rules must hold, so the two comparisons are joined with and; or would let in a student who meets only one rule (Topic 2, slides 43 and 45). ' +
      'Each side must be a full comparison using == (a single = is assignment and is a SyntaxError in a condition). "75 or more" means >= 75, so ' +
      "> 75 would wrongly reject a student with exactly 75. Lab III cell 12 uses the same pattern: amount > 50 and member == \"yes\".",
  },
  "x2-mcq-08": {
    answer: 0,
    explanation:
      "Topic 4, slide 8: Python treats 0 (and None) as False in a while condition, and any non-zero number as True. count is 0, so the condition is " +
      "False the very first time it is checked and the body never runs; only End is printed. A while loop checks its condition before every pass, " +
      "including the first (slide 6), so the body does not run 'once to start'.",
  },
  "x2-tr-01": {
    answer: "False\nTrue\nFalse",
    explanation:
      "a > b is True but b > 5 is False; and needs both sides True, so the first print shows False (Topic 2, slide 43). a != b is True, so the or " +
      "expression is True (slide 45). The line # print(a == b) is a comment, so Python ignores it and prints nothing for it (slide 79). " +
      "not a > b means not (a > b), because the comparison is done before not (slides 52 and 58): not True is False.",
  },
  "x2-tr-02": {
    answer: "No discount\nThank you",
    explanation:
      '80 > 50 is True, so Python enters the outer if block and checks the inner condition (Topic 3, slide 41). member is "no", so member == "yes" ' +
      'is False and the inner else prints No discount. The outer else is skipped. print("Thank you") is not indented, so it always runs. ' +
      "Printing Minimum not reached would mean the outer condition was False, which it is not.",
  },
  "x2-tr-03": {
    answer: "15 5.0",
    explanation:
      "total starts at 0 and each pass of the loop adds the number typed (Topic 4, slide 12). The loop runs for n = 1, 2 and 3, reading 4, 6 and 5, " +
      "so total becomes 15. After the loop, total / 3 uses /, which always gives a float (Topic 2, slide 33), so it prints 5.0, not 5. " +
      "Both values are printed on one line with a space between them.",
  },
  "x2-tr-04": {
    answer: "Passed\nFailed\nPassed\nChecked 3 students",
    explanation:
      "The if…else is inside the loop body, so a decision is made for every mark read (Topic 4, slide 17). 70 >= 50 gives Passed, 35 gives Failed, " +
      "and 50 >= 50 is True, so the third mark also gives Passed (the code uses >=, so exactly 50 passes). count = count + 1 is at the same indentation " +
      "as the if, so it runs on every pass. After three passes count is 4, the loop stops, and count - 1 is 3.",
  },
  "x2-err-01": {
    answer: 0,
    explanation:
      "Identifiers are case-sensitive (Topic 2, slide 22): Total and total are two different names. Line 2 creates Total, but line 3 asks for total, " +
      "which was never assigned, so Python raises NameError: name 'total' is not defined (Python 3.13 adds: Did you mean: 'Total'?). Slide 57 shows the " +
      "same kind of error with a and A. Capital letters are allowed in names (slide 23 lists Num and Max1 as valid), and print(total) without quotes " +
      "is the right way to print a variable.",
  },
  "x2-err-02": {
    answer: 0,
    explanation:
      "The lines after if and else must be indented (Topic 3, slide 21, point c). Line 3 is not indented, so Python reports " +
      "IndentationError: expected an indented block after 'if' statement on line 2, pointing at line 3, before running anything. " +
      "else never takes a condition, the colon after the condition is required, and line 5 is correctly indented.",
  },
  "x2-code-01": {
    answer: py(
      'length = float(input("Enter length: "))',
      'width = float(input("Enter width: "))',
      "area = length * width",
      "perimeter = 2 * (length + width)",
      'print("Area:", area)',
      'print("Perimeter:", perimeter)',
    ),
    explanation:
      "Both sides are read with input() and converted with float(), because input() returns a string and the sides may have decimals " +
      "(Topic 2, slides 72–73). area = length * width. In the perimeter the brackets matter: 2 * (length + width) adds first (Topic 2, slides 51 and 53), " +
      "while 2 * length + width multiplies only the length (for 7 and 2 it gives 16 instead of 18). Print the area first, then the perimeter, each with its label.",
  },
  "x2-code-02": {
    answer: py(
      'name = input("Enter your name: ")',
      'mark = int(input("Enter your mark: "))',
      "if mark >= 50:",
      '    print("Pass")',
      "else:",
      '    print("Fail")',
      'print("Thank you", name)',
    ),
    explanation:
      "The name stays a string, but the mark is converted with int() so it can be compared with 50. \"50 or more\" means >=, so a mark of exactly 50 " +
      "passes; using > 50 would wrongly print Fail for 50. The if…else prints exactly one of Pass or Fail (Topic 3, slides 20–21). The last print is " +
      "not indented, so it runs whatever the mark is, like the always-displayed message in Topic 3, slide 17.",
  },
};
