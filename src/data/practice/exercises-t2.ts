import type { PracticeExercise } from "../types";

// Topic 2 practical exercises (input → process → output).
// Every sampleRun is the real terminal transcript of `solution` run with tests[0].inputs.

export const EXERCISES_T2: PracticeExercise[] = [
  // ------------------------------------------------------------------ 01
  {
    id: "ex-t2-01",
    kind: "coding",
    topicId: "t2",
    title: "Fix: Quotes Inside a String",
    category: "fix",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t2-escape", "t2-strings"],
    sources: [
      { file: "topic2", units: [15], note: "Exercise: print the sentence with double quotes around “sequence”" },
      { file: "topic2", units: [10], note: "Escaping a quote with a backslash; mixing quote types" },
    ],
    prompt:
      "Topic 2, slide 15 asks for one statement that prints this line, with double quotes around the word sequence:\n\n" +
      "A string is a \"sequence\" of characters\n\n" +
      "The starter code tries to do it, but Python stops with a SyntaxError. Fix the program so it prints exactly that line. " +
      "Use straight double quotes \" around sequence (the slide draws curly quotes, but Python prints straight ones), and make sure no backslash appears in the output. " +
      "The program reads no input.",
    starterCode: `# Goal: A string is a "sequence" of characters
print("A string is a "sequence" of characters")
`,
    solution: `print("A string is a \\"sequence\\" of characters")
`,
    sampleRun: `A string is a "sequence" of characters
`,
    tests: [
      {
        id: "t1",
        description: "Prints the sentence",
        inputs: [],
        hidden: false,
        checks: [{ type: "contains", text: 'A string is a "sequence" of characters', caseSensitive: true }],
      },
      {
        id: "t2",
        description: "sequence is inside straight double quotes and no backslash is printed",
        inputs: [],
        hidden: false,
        checks: [
          { type: "contains", text: '"sequence"', caseSensitive: true },
          { type: "notContains", text: "\\", label: "The output should not show a backslash" },
        ],
      },
      {
        id: "t3",
        description: "Prints only that one line",
        inputs: [],
        hidden: true,
        checks: [
          {
            type: "regex",
            pattern: '^\\s*A string is a "sequence" of characters\\s*$',
            label: "The output should be exactly one line: A string is a \"sequence\" of characters",
          },
        ],
      },
    ],
    hints: [
      "See Topic 2, slides 10 and 15: a backslash in front of a quote (an escape sequence) makes the quote part of the text instead of ending the string.",
      "Python reads the first \" as the start of the string and the \" just before sequence as its end. So sequence is left outside the string, which is a SyntaxError. Each double quote that should be printed must not end the string.",
      "print(\"A string is a ___sequence___ of characters\")   — replace each ___ with a backslash followed by a double quote.",
      "Write print(\"A string is a \\\"sequence\\\" of characters\"). Each \\\" puts a double-quote character into the text, and the backslash itself is not printed. Another correct fix is to put the whole string in single quotes: print('A string is a \"sequence\" of characters'), because inside single quotes you can freely use double quotes (slide 10).",
    ],
  },

  // ------------------------------------------------------------------ 02
  {
    id: "ex-t2-02",
    kind: "coding",
    topicId: "t2",
    title: "Attendance and Marks Statements",
    category: "write",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t2-input", "t2-print"],
    sources: [
      { file: "lab-ch2-practice-ii", units: [10, 11], note: "Attendance check: “Ali is present today.”" },
      { file: "lab-ch2-practice-ii", units: [12], note: "Marks entry: “Student Sara scored 90 marks in the test.”" },
      { file: "topic2", units: [67, 74], note: "Printing input values with + and with commas" },
    ],
    prompt:
      "A teacher wants two statements about a student (Ch2 Practice II, cells 10–12).\n\n" +
      "Read three values, in this order:\n" +
      "1. the student's name\n" +
      "2. the attendance word (for example present or absent)\n" +
      "3. the test mark\n\n" +
      "Then print two lines, using the values exactly as they were typed:\n" +
      "Ali is present today.\n" +
      "Student Ali scored 90 marks in the test.\n\n" +
      "(Here the name was Ali, the attendance word present and the mark 90.) No calculation is needed.",
    starterCode: `# Read the name, the attendance word and the mark (in this order)


# Print: <name> is <attendance> today.

# Print: Student <name> scored <mark> marks in the test.
`,
    solution: `name = input("Enter the student's name: ")
attendance = input("Present or absent? ")
mark = input("Enter the test mark: ")
print(name + " is " + attendance + " today.")
print("Student", name, "scored", mark, "marks in the test.")
`,
    sampleRun: "Enter the student's name: Ali\nPresent or absent? present\nEnter the test mark: 90\nAli is present today.\nStudent Ali scored 90 marks in the test.\n",
    tests: [
      {
        id: "t1",
        description: "Ali, present, 90",
        inputs: ["Ali", "present", "90"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Ali is present today" },
          { type: "contains", text: "Student Ali scored 90 marks in the test" },
        ],
      },
      {
        id: "t2",
        description: "Sara, absent, 75",
        inputs: ["Sara", "absent", "75"],
        hidden: false,
        checks: [
          { type: "contains", text: "Sara is absent today" },
          { type: "contains", text: "Student Sara scored 75 marks in the test" },
        ],
      },
      {
        id: "t3",
        description: "Another student; attendance line comes first",
        inputs: ["Mohammed", "present", "100"],
        hidden: true,
        checks: [
          { type: "order", texts: ["Mohammed is present today", "Student Mohammed scored 100 marks in the test"] },
          { type: "notContains", text: "Ali" },
        ],
      },
    ],
    hints: [
      "See Ch2 Practice II, cell 11: input() stores what the user types, and + joins strings (Topic 2, slide 67). print() with commas also works (slide 74).",
      "Use three input() calls and keep each value in its own variable. Then build each sentence from fixed words and the variables. Remember the spaces between words.",
      "name = input(\"Enter the student's name: \")\nattendance = ___\nmark = ___\nprint(name + \" is \" + ___ + \" today.\")\nprint(\"Student\", ___, \"scored\", ___, \"marks in the test.\")",
      "Read name, attendance and mark with input(). No int() is needed because we only print the mark. print(name + \" is \" + attendance + \" today.\") joins the strings, so you must type the spaces inside the quotes. print(\"Student\", name, \"scored\", mark, \"marks in the test.\") uses commas, and print() adds a space between the items for you.",
    ],
  },

  // ------------------------------------------------------------------ 03
  {
    id: "ex-t2-03",
    kind: "coding",
    topicId: "t2",
    title: "Welcome Message",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-input", "t2-print"],
    sources: [
      { file: "pe1", units: [1], item: "2", note: "Read name, age and college name; print as shown" },
      { file: "topic2", units: [74, 75], note: "Printing several values; f-strings" },
    ],
    prompt:
      "Practice Exercises I, Exercise 2. Read three values, in this order: your name, your age and your college name. Then print exactly three lines:\n\n" +
      "Welcome SAMI !\n" +
      "Your age is 21\n" +
      "Your college name is UTAS\n\n" +
      "(Here the typed values were SAMI, 21 and UTAS.)",
    starterCode: `# Read the name, the age and the college name


# Print the three lines
`,
    solution: `name = input("Enter your name:")
age = input("Enter your age:")
college = input("Enter your college name:")
print("Welcome", name, "!")
print("Your age is", age)
print("Your college name is", college)
`,
    sampleRun: "Enter your name:SAMI\nEnter your age:21\nEnter your college name:UTAS\nWelcome SAMI !\nYour age is 21\nYour college name is UTAS\n",
    tests: [
      {
        id: "t1",
        description: "SAMI, 21, UTAS (the worksheet's sample)",
        inputs: ["SAMI", "21", "UTAS"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Welcome SAMI" },
          { type: "contains", text: "Your age is 21" },
          { type: "contains", text: "Your college name is UTAS" },
        ],
      },
      {
        id: "t2",
        description: "Fatma, 19, UTAS Muscat",
        inputs: ["Fatma", "19", "UTAS Muscat"],
        hidden: false,
        checks: [
          { type: "contains", text: "Welcome Fatma" },
          { type: "contains", text: "Your age is 19" },
          { type: "contains", text: "Your college name is UTAS Muscat" },
        ],
      },
      {
        id: "t3",
        description: "Lines are printed in the right order",
        inputs: ["Ahmed", "30", "Sohar College"],
        hidden: true,
        checks: [
          { type: "order", texts: ["Welcome Ahmed", "Your age is 30", "Your college name is Sohar College"] },
        ],
      },
    ],
    hints: [
      "See Practice Exercises I (page 1), Exercise 2, and Topic 2, slide 74: read values with input() and print several items with commas.",
      "Call input() three times, in the order name, age, college. Then use three print() statements, one for each line.",
      "name = input(\"Enter your name:\")\nage = ___\ncollege = ___\nprint(\"Welcome\", ___, \"!\")\nprint(\"Your age is\", ___)\nprint(___, college)",
      "Store each typed value in a variable. print(\"Welcome\", name, \"!\") prints Welcome SAMI ! because print() puts a space between the items. The age is only printed, not used in a calculation, so it can stay a string. An f-string such as print(f\"Welcome {name} !\") works too (slide 75).",
    ],
  },

  // ------------------------------------------------------------------ 04
  {
    id: "ex-t2-04",
    kind: "coding",
    topicId: "t2",
    title: "Calculate Your Age",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-conversion", "t2-arithmetic", "t2-programs"],
    sources: [
      { file: "pe1", units: [1], item: "3", note: "Read name, year of birth and college; calculate the age" },
      { file: "topic2", units: [64], note: "int(input(...)) converts the typed text to an integer" },
    ],
    prompt:
      "Practice Exercises I, Exercise 3. Read three values, in this order: your name, your year of birth and your college name. Calculate the age and print exactly three lines:\n\n" +
      "Welcome Mohammed !\n" +
      "Your age is 31\n" +
      "Your college name is UTAS\n\n" +
      "Use 2021 as the current year. The worksheet's sample (born 1990, age 31) was made in 2021, so store it in a variable: current_year = 2021. " +
      "Age = current_year − year of birth.",
    starterCode: `current_year = 2021

# Read the name, the year of birth and the college name


# Calculate the age


# Print the three lines
`,
    solution: `current_year = 2021
name = input("Enter your name:")
birth_year = int(input("Enter your year of birth:"))
college = input("Enter your college name:")
age = current_year - birth_year
print("Welcome", name, "!")
print("Your age is", age)
print("Your college name is", college)
`,
    sampleRun: "Enter your name:Mohammed\nEnter your year of birth:1990\nEnter your college name:UTAS\nWelcome Mohammed !\nYour age is 31\nYour college name is UTAS\n",
    tests: [
      {
        id: "t1",
        description: "Mohammed, 1990, UTAS (the worksheet's sample)",
        inputs: ["Mohammed", "1990", "UTAS"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "contains", text: "Welcome Mohammed" },
          { type: "regex", pattern: "Your age is\\s*31\\b", flags: "i", label: "Output should contain “Your age is 31”" },
          { type: "contains", text: "Your college name is UTAS" },
        ],
      },
      {
        id: "t2",
        description: "Aisha, 2003, UTAS",
        inputs: ["Aisha", "2003", "UTAS"],
        hidden: false,
        checks: [
          { type: "contains", text: "Welcome Aisha" },
          { type: "regex", pattern: "Your age is\\s*18\\b", flags: "i", label: "Output should contain “Your age is 18”" },
          { type: "contains", text: "Your college name is UTAS" },
        ],
      },
      {
        id: "t3",
        description: "Born in 2000",
        inputs: ["Salim", "2000", "Nizwa College"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Your age is\\s*21\\b", flags: "i", label: "Output should contain “Your age is 21”" },
          { type: "order", texts: ["Welcome Salim", "Your age is", "Your college name is Nizwa College"] },
        ],
      },
    ],
    hints: [
      "See Practice Exercises I (page 1), Exercise 3, and Topic 2, slide 64: input() gives a string, so wrap it in int() before you subtract.",
      "Read the three values. Convert the year of birth with int(). Subtract it from current_year to get the age. Print the three lines.",
      "current_year = 2021\nname = input(\"Enter your name:\")\nbirth_year = ___(input(\"Enter your year of birth:\"))\ncollege = input(\"Enter your college name:\")\nage = ___ - ___\nprint(\"Your age is\", ___)",
      "birth_year = int(input(...)) stores the number 1990, not the text \"1990\". Then age = current_year - birth_year gives 2021 - 1990 = 31. Without int(), Python raises a TypeError because it cannot subtract a string from an integer. Print the lines with commas, for example print(\"Your age is\", age).",
    ],
  },

  // ------------------------------------------------------------------ 05
  {
    id: "ex-t2-05",
    kind: "coding",
    topicId: "t2",
    title: "Student and Course Details",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t2-input", "t2-print", "t2-escape"],
    sources: [
      { file: "pe1", units: [1], item: "1", note: "Read student id, name, course name and course id; print the table" },
      { file: "topic2", units: [11], note: "\\t (tab) escape sequence for lining up columns" },
    ],
    prompt:
      "Practice Exercises I, Exercise 1. Read four values, in this order: the student ID, the student name, the course name and the course ID. Then print the details like this (spacing between columns is up to you; \\t tabs work well):\n\n" +
      "--------------------------------------------------\n" +
      "Student ID      :   16J123\n" +
      "Student Name    :   SAMI\n" +
      "--------------------------------------------------\n" +
      "Course Details\n" +
      "--------------------------------------------------\n" +
      "Day         Room      Course Code     Course Name\n" +
      "MONTUEWED   Lab 10    ITSE101         PYTHON\n\n" +
      "The Day (MONTUEWED) and Room (Lab 10) are fixed text. In the last row the course ID comes before the course name, even though the course name is read first. " +
      "Separator lines are dashes (at least 10).",
    starterCode: `# Read: student ID, student name, course name, course ID (in this order)


# Print the student details


# Print the course details table
`,
    solution: `student_id = input("Student ID:")
student_name = input("Student Name:")
course_name = input("Enter the course name:")
course_id = input("Enter the course ID:")
print("--------------------------------------------------")
print("Student ID\\t:\\t", student_id)
print("Student Name\\t:\\t", student_name)
print("--------------------------------------------------")
print("Course Details")
print("--------------------------------------------------")
print("Day\\t\\tRoom\\tCourse Code\\tCourse Name")
print("MONTUEWED\\tLab 10\\t" + course_id + "\\t\\t" + course_name)
`,
    sampleRun: "Student ID:16J123\nStudent Name:SAMI\nEnter the course name:PYTHON\nEnter the course ID:ITSE101\n--------------------------------------------------\nStudent ID\t:\t 16J123\nStudent Name\t:\t SAMI\n--------------------------------------------------\nCourse Details\n--------------------------------------------------\nDay\t\tRoom\tCourse Code\tCourse Name\nMONTUEWED\tLab 10\tITSE101\t\tPYTHON\n",
    tests: [
      {
        id: "t1",
        description: "16J123, SAMI, PYTHON, ITSE101 (the worksheet's sample)",
        inputs: ["16J123", "SAMI", "PYTHON", "ITSE101"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 4 },
          {
            type: "order",
            texts: ["Student ID", "16J123", "Student Name", "SAMI", "Course Details", "Day", "Room", "Course Code", "Course Name", "MONTUEWED", "Lab 10", "ITSE101", "PYTHON"],
          },
          { type: "regex", pattern: "-{10,}", label: "Output should contain a separator line of dashes" },
        ],
      },
      {
        id: "t2",
        description: "20A456, Fatma, Calculus, MATH102",
        inputs: ["20A456", "Fatma", "Calculus", "MATH102"],
        hidden: false,
        checks: [
          { type: "order", texts: ["Student ID", "20A456", "Student Name", "Fatma", "Course Details"] },
          { type: "order", texts: ["MONTUEWED", "Lab 10", "MATH102", "Calculus"], label: "The last row should show MONTUEWED, Lab 10, the course ID, then the course name" },
        ],
      },
      {
        id: "t3",
        description: "Course ID is printed before the course name",
        inputs: ["19B777", "Khalid", "Web Technology", "ITSE205"],
        hidden: true,
        checks: [
          { type: "order", texts: ["19B777", "Khalid", "Course Details", "MONTUEWED", "Lab 10", "ITSE205", "Web Technology"] },
        ],
      },
    ],
    hints: [
      "See Practice Exercises I (page 1), Exercise 1. You only need input() and print(); \\t (Topic 2, slide 11) inserts a tab to line up columns.",
      "Read the four values first, in the order ID, name, course name, course ID. Then print the lines from top to bottom. Day and Room are fixed words, so type them straight into the print().",
      "student_id = input(\"Student ID:\")\nstudent_name = ___\ncourse_name = ___\ncourse_id = ___\nprint(\"-----------------------------\")\nprint(\"Student ID\\t:\\t\", ___)\n...\nprint(\"MONTUEWED\\tLab 10\\t\" + ___ + \"\\t\\t\" + ___)",
      "Store each typed value in its own variable. Print the dashed lines with print(\"------...\"). For the table, print the header row \"Day\\t\\tRoom\\tCourse Code\\tCourse Name\" and then a row that starts with the fixed text MONTUEWED and Lab 10, followed by course_id and then course_name. A common mistake is printing the course name before the course ID just because it was read first.",
    ],
  },

  // ------------------------------------------------------------------ 06
  {
    id: "ex-t2-06",
    kind: "coding",
    topicId: "t2",
    title: "Area of a Circle",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-programs", "t2-arithmetic", "t2-conversion"],
    sources: [{ file: "topic2", units: [80], note: "Exercise: read the radius, compute Area = Pi * radius * radius with Pi = 3.14" }],
    prompt:
      "Topic 2, slide 80. Read the radius of a circle (it may have decimals, e.g. 2.5). Compute the area with Pi = 3.14 and Area = Pi * radius * radius. Then print one line:\n\n" +
      "Area = 78.5\n\n" +
      "(That is the result for radius 5.) Use 3.14 exactly, not a longer value of Pi.",
    starterCode: `Pi = 3.14

# Read the radius (it may have decimals)


# Compute and print the area
`,
    solution: `Pi = 3.14
radius = float(input("Enter the radius: "))
Area = Pi * radius * radius
print("Area =", Area)
`,
    sampleRun: "Enter the radius: 5\nArea = 78.5\n",
    tests: [
      {
        id: "t1",
        description: "Radius 5",
        inputs: ["5"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          { type: "contains", text: "Area" },
          { type: "number", value: 78.5 },
        ],
      },
      {
        id: "t2",
        description: "Radius 2.5 (a decimal value)",
        inputs: ["2.5"],
        hidden: false,
        checks: [{ type: "number", value: 19.625, tolerance: 0.001 }],
      },
      {
        id: "t3",
        description: "Radius 10",
        inputs: ["10"],
        hidden: true,
        checks: [{ type: "number", value: 314 }],
      },
      {
        id: "t4",
        description: "Radius 1.5",
        inputs: ["1.5"],
        hidden: true,
        checks: [{ type: "number", value: 7.065, tolerance: 0.001 }],
      },
    ],
    hints: [
      "See Topic 2, slide 80 (the formula) and slides 72–73: float(input(...)) reads a number with decimals.",
      "Store 3.14 in Pi. Read the radius and convert it with float(). Multiply Pi * radius * radius. Print the result with a label.",
      "Pi = 3.14\nradius = ___(input(\"Enter the radius: \"))\nArea = ___ * ___ * ___\nprint(\"Area =\", ___)",
      "radius = float(input(\"Enter the radius: \")) turns the typed text into a number such as 2.5. Area = Pi * radius * radius computes 3.14 × 5 × 5 = 78.5. Use float(), not int(), because int(\"2.5\") raises a ValueError.",
    ],
  },

  // ------------------------------------------------------------------ 07
  {
    id: "ex-t2-07",
    kind: "coding",
    topicId: "t2",
    title: "Simple Calculator",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-arithmetic", "t2-programs", "t2-conversion"],
    sources: [
      { file: "topic2", units: [81], note: "Exercise: read two numbers and display +, -, * and / results" },
      { file: "topic2", units: [72, 73], note: "float(input(...)) for numbers with decimals" },
    ],
    prompt:
      "Topic 2, slide 81. Read two numbers, first and then second (they may have decimals). Print the four results, one per line, in this order:\n\n" +
      "Sum = 21.0\n" +
      "Difference = 9.0\n" +
      "Product = 90.0\n" +
      "Division = 2.5\n\n" +
      "(Those are the results for 15 and 6.) Difference = first − second, Division = first / second. You may assume the second number is not 0.",
    starterCode: `# Read the first and the second number (they may have decimals)


# Print Sum, Difference, Product and Division
`,
    solution: `num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
print("Sum =", num1 + num2)
print("Difference =", num1 - num2)
print("Product =", num1 * num2)
print("Division =", num1 / num2)
`,
    sampleRun: "Enter the first number: 15\nEnter the second number: 6\nSum = 21.0\nDifference = 9.0\nProduct = 90.0\nDivision = 2.5\n",
    tests: [
      {
        id: "t1",
        description: "15 and 6",
        inputs: ["15", "6"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "order", texts: ["Sum", "Difference", "Product", "Division"] },
          { type: "number", value: 21 },
          { type: "number", value: 9 },
          { type: "number", value: 90 },
          { type: "number", value: 2.5 },
        ],
      },
      {
        id: "t2",
        description: "7.5 and 2.5 (decimals)",
        inputs: ["7.5", "2.5"],
        hidden: false,
        checks: [
          { type: "number", value: 10 },
          { type: "number", value: 5 },
          { type: "number", value: 18.75 },
          { type: "number", value: 3 },
        ],
      },
      {
        id: "t3",
        description: "A negative first number",
        inputs: ["-8", "2"],
        hidden: true,
        checks: [
          { type: "number", value: -6 },
          { type: "number", value: -10 },
          { type: "number", value: -16 },
          { type: "number", value: -4 },
        ],
      },
      {
        id: "t4",
        description: "9 and 4 (division is not whole)",
        inputs: ["9", "4"],
        hidden: true,
        checks: [
          { type: "number", value: 13 },
          { type: "number", value: 5 },
          { type: "number", value: 36 },
          { type: "number", value: 2.25 },
        ],
      },
    ],
    hints: [
      "See Topic 2, slide 81 (the task) and slides 72–73: float(input(...)) reads numbers with decimals, and + - * / do the four calculations.",
      "Read both numbers with float(). Then print four lines. Each line has a label and one calculation: first + second, first - second, first * second, first / second.",
      "num1 = float(input(\"Enter the first number: \"))\nnum2 = ___\nprint(\"Sum =\", ___)\nprint(\"Difference =\", ___)\nprint(\"Product =\", ___)\nprint(\"Division =\", ___)",
      "After converting both inputs with float(), num1 + num2, num1 - num2, num1 * num2 and num1 / num2 give the four results. Without float(), num1 + num2 would join the strings (\"15\" + \"6\" = \"156\") and the other three would raise a TypeError. / always gives a float, e.g. 15 / 6 = 2.5.",
    ],
  },

  // ------------------------------------------------------------------ 08
  {
    id: "ex-t2-08",
    kind: "coding",
    topicId: "t2",
    title: "Grams to Kilograms and Centigrams",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-arithmetic", "t2-programs"],
    sources: [{ file: "topic2", units: [82], note: "Exercise: Kilogram = gram / 1000, Centigram = gram * 100" }],
    prompt:
      "Topic 2, slide 82. Read a person's weight in grams (it may have decimals). Convert it with Kilogram = gram / 1000 and Centigram = gram * 100. Print two lines, kilograms first:\n\n" +
      "Weight in kilograms: 65.0\n" +
      "Weight in centigrams: 6500000.0\n\n" +
      "(That is the result for 65000 grams.)",
    starterCode: `# Read the weight in grams


# Convert to kilograms and centigrams


# Print both results
`,
    solution: `gram = float(input("Enter the weight in grams: "))
kilogram = gram / 1000
centigram = gram * 100
print("Weight in kilograms:", kilogram)
print("Weight in centigrams:", centigram)
`,
    sampleRun: "Enter the weight in grams: 65000\nWeight in kilograms: 65.0\nWeight in centigrams: 6500000.0\n",
    tests: [
      {
        id: "t1",
        description: "65000 grams",
        inputs: ["65000"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 1 },
          { type: "order", texts: ["kilogram", "centigram"] },
          { type: "number", value: 65 },
          { type: "number", value: 6500000 },
        ],
      },
      {
        id: "t2",
        description: "2500 grams",
        inputs: ["2500"],
        hidden: false,
        checks: [
          { type: "number", value: 2.5 },
          { type: "number", value: 250000 },
        ],
      },
      {
        id: "t3",
        description: "750.5 grams (decimal input)",
        inputs: ["750.5"],
        hidden: true,
        checks: [
          { type: "number", value: 0.7505, tolerance: 0.0001 },
          { type: "number", value: 75050 },
        ],
      },
      {
        id: "t4",
        description: "1 gram",
        inputs: ["1"],
        hidden: true,
        checks: [
          { type: "number", value: 0.001, tolerance: 0.0001 },
          { type: "number", value: 100 },
        ],
      },
    ],
    hints: [
      "See Topic 2, slide 82: the two formulas are given there. Read the weight with float(input(...)) (slides 72–73).",
      "Read the grams and convert them to a number. Divide by 1000 for kilograms. Multiply by 100 for centigrams. Print both with labels, kilograms first.",
      "gram = float(input(\"Enter the weight in grams: \"))\nkilogram = gram ___ 1000\ncentigram = gram ___ 100\nprint(\"Weight in kilograms:\", ___)\nprint(\"Weight in centigrams:\", ___)",
      "kilogram = gram / 1000 and centigram = gram * 100. For 65000 g that gives 65.0 kg and 6500000.0 cg. A common mistake is swapping the operators: one kilogram is 1000 grams (so divide), and one gram is 100 centigrams (so multiply).",
    ],
  },

  // ------------------------------------------------------------------ 09
  {
    id: "ex-t2-09",
    kind: "coding",
    topicId: "t2",
    title: "Fix: Total and Average of Two Marks",
    category: "fix",
    difficulty: "easy",
    origin: "adapted",
    conceptIds: ["t2-input", "t2-conversion"],
    sources: [
      { file: "lab-ch3-iiii", units: [8], note: "Task: read Mark1 and Mark2, print the total and the average" },
      { file: "topic2", units: [68, 69, 72, 73], note: "Without conversion \"10\" + \"20\" gives 1020; float() fixes it" },
    ],
    prompt:
      "Ch3 Lab IIII, cell 8: read two marks, Mark1 and then Mark2, and print the total and the average (average = total / 2). Marks may have decimals, such as 72.5.\n\n" +
      "The starter program has a bug. For the marks 70 and 85 it prints Total marks: 7085 and then stops with a TypeError. Fix it so that it prints:\n\n" +
      "Total marks: 155.0\n" +
      "Average: 77.5",
    starterCode: `mark1 = input("Enter Mark1: ")
mark2 = input("Enter Mark2: ")
total = mark1 + mark2
print("Total marks:", total)
average = total / 2
print("Average:", average)
`,
    solution: `mark1 = float(input("Enter Mark1: "))
mark2 = float(input("Enter Mark2: "))
total = mark1 + mark2
print("Total marks:", total)
average = total / 2
print("Average:", average)
`,
    sampleRun: "Enter Mark1: 70\nEnter Mark2: 85\nTotal marks: 155.0\nAverage: 77.5\n",
    tests: [
      {
        id: "t1",
        description: "Marks 70 and 85",
        inputs: ["70", "85"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "notContains", text: "7085", label: "The marks should be added as numbers, not joined as text (7085)" },
          { type: "order", texts: ["Total", "Average"] },
          { type: "number", value: 155 },
          { type: "number", value: 77.5 },
        ],
      },
      {
        id: "t2",
        description: "Marks with decimals: 72.5 and 90",
        inputs: ["72.5", "90"],
        hidden: false,
        checks: [
          { type: "number", value: 162.5 },
          { type: "number", value: 81.25 },
        ],
      },
      {
        id: "t3",
        description: "Marks 45.5 and 60",
        inputs: ["45.5", "60"],
        hidden: true,
        checks: [
          { type: "number", value: 105.5 },
          { type: "number", value: 52.75 },
          { type: "notContains", text: "45.560" },
        ],
      },
    ],
    hints: [
      "See Topic 2, slides 68–69: input() always gives a string, so \"70\" + \"85\" joins the text into \"7085\". Slides 72–73 show the fix with float().",
      "The bug is in the two input lines. Convert each typed mark to a number before adding. Use float() because marks may have decimals.",
      "mark1 = ___(input(\"Enter Mark1: \"))\nmark2 = ___(input(\"Enter Mark2: \"))\ntotal = mark1 + mark2\naverage = total / 2",
      "Change the input lines to mark1 = float(input(\"Enter Mark1: \")) and mark2 = float(input(\"Enter Mark2: \")). Now + adds numbers (70.0 + 85.0 = 155.0) and total / 2 works (77.5). Before the fix, total was the string \"7085\", and dividing a string by 2 raised TypeError: unsupported operand type(s) for /: 'str' and 'int'. int() is not enough here, because int(\"72.5\") raises a ValueError.",
    ],
  },

  // ------------------------------------------------------------------ 10
  {
    id: "ex-t2-10",
    kind: "coding",
    topicId: "t2",
    title: "Average of Three Course Marks",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t2-programs", "t2-conversion", "t2-precedence"],
    sources: [{ file: "pe1", units: [1], item: "4", note: "Marks for Programming 1, Web Technology and Calculus; print the average" }],
    prompt:
      "Practice Exercises I, Exercise 4. Read a student's marks for three courses, in this order: Programming 1, Web Technology and Calculus (marks may have decimals). " +
      "Compute the average of the three marks and print a small table like this:\n\n" +
      "Courses            Marks\n" +
      "----------------------------------------\n" +
      "Programming 1      8.5\n" +
      "Web Technology     9.0\n" +
      "Calculus           10.0\n" +
      "----------------------------------------\n" +
      "Average            9.166666666666666\n\n" +
      "Each course name is followed by its mark on the same line, and the average is on the line that starts with Average. Do not round the average.",
    starterCode: `# Read the three marks (they may have decimals)


# Compute the average


# Print the table
`,
    solution: `prog = float(input("Programming 1 mark: "))
web = float(input("Web Technology mark: "))
calculus = float(input("Calculus mark: "))
average = (prog + web + calculus) / 3
print("Courses\\t\\t\\tMarks")
print("----------------------------------------")
print("Programming 1\\t\\t", prog)
print("Web Technology\\t\\t", web)
print("Calculus\\t\\t", calculus)
print("----------------------------------------")
print("Average\\t\\t\\t", average)
`,
    sampleRun: "Programming 1 mark: 8.5\nWeb Technology mark: 9\nCalculus mark: 10\nCourses\t\t\tMarks\n----------------------------------------\nProgramming 1\t\t 8.5\nWeb Technology\t\t 9.0\nCalculus\t\t 10.0\n----------------------------------------\nAverage\t\t\t 9.166666666666666\n",
    tests: [
      {
        id: "t1",
        description: "8.5, 9 and 10 (the worksheet's sample)",
        inputs: ["8.5", "9", "10"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 3 },
          { type: "order", texts: ["Programming 1", "Web Technology", "Calculus", "Average"] },
          { type: "regex", pattern: "Average[^\\d\\n]*9\\.16", flags: "i", label: "The Average line should show 9.1666…" },
        ],
      },
      {
        id: "t2",
        description: "6, 7.5 and 10",
        inputs: ["6", "7.5", "10"],
        hidden: false,
        checks: [{ type: "regex", pattern: "Average[^\\d\\n]*7\\.83", flags: "i", label: "The Average line should show 7.8333…" }],
      },
      {
        id: "t3",
        description: "7, 9.5 and 8",
        inputs: ["7", "9.5", "8"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Average[^\\d\\n]*8\\.16", flags: "i", label: "The Average line should show 8.1666…" },
          { type: "regex", pattern: "Web Technology[^\\d\\n]*9\\.5", flags: "i", label: "The Web Technology line should show its mark" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises I (page 1), Exercise 4. Read numbers with float(input(...)) (Topic 2, slides 72–73) and use brackets to add before dividing (slides 51–53).",
      "Read three marks as floats. Add them inside brackets and divide by 3. Print the heading, a dashed line, one line per course, another dashed line and the Average line.",
      "prog = float(input(\"Programming 1 mark: \"))\nweb = ___\ncalculus = ___\naverage = (___ + ___ + ___) / 3\nprint(\"Programming 1\\t\\t\", prog)\n...\nprint(\"Average\\t\\t\\t\", ___)",
      "average = (prog + web + calculus) / 3 adds the three marks first because of the brackets. Without brackets, prog + web + calculus / 3 divides only the Calculus mark (division happens before addition), giving 8.5 + 9 + 3.33 = 20.83 instead of 9.1666…. Use \\t or spaces inside the strings to line up the columns.",
    ],
  },

  // ------------------------------------------------------------------ 11
  {
    id: "ex-t2-11",
    kind: "coding",
    topicId: "t2",
    title: "Quiz, Exam and Total Mark",
    category: "write",
    difficulty: "medium",
    origin: "source",
    conceptIds: ["t2-programs", "t2-precedence", "t2-arithmetic"],
    sources: [{ file: "pe1", units: [1], item: "5", note: "Quiz Mark = quiz score / 40 * 50 + 50; Exam Mark = exam score / 60 * 50 + 50; total = average" }],
    prompt:
      "Practice Exercises I, Exercise 5. Read the quiz score and then the exam score (they may have decimals). Use the worksheet's formulas:\n\n" +
      "Quiz Mark = quiz score / 40 * 50 + 50\n" +
      "Exam Mark = exam score / 60 * 50 + 50\n" +
      "Total Mark = the average of the Quiz Mark and the Exam Mark\n\n" +
      "Print the three marks with headings, one per line, in this order:\n\n" +
      "Quiz Mark: 75.0\n" +
      "Exam Mark: 87.5\n" +
      "Total Mark: 81.25\n\n" +
      "(Those are the results for a quiz score of 20 and an exam score of 45.)",
    starterCode: `# Read the quiz score and the exam score


# Compute the quiz mark, the exam mark and the total mark


# Print the three marks with headings
`,
    solution: `quiz = float(input("Enter the quiz score: "))
exam = float(input("Enter the exam score: "))
quiz_mark = quiz / 40 * 50 + 50
exam_mark = exam / 60 * 50 + 50
total_mark = (quiz_mark + exam_mark) / 2
print("Quiz Mark:", quiz_mark)
print("Exam Mark:", exam_mark)
print("Total Mark:", total_mark)
`,
    sampleRun: "Enter the quiz score: 20\nEnter the exam score: 45\nQuiz Mark: 75.0\nExam Mark: 87.5\nTotal Mark: 81.25\n",
    tests: [
      {
        id: "t1",
        description: "Quiz 20, exam 45",
        inputs: ["20", "45"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "order", texts: ["Quiz Mark", "Exam Mark", "Total Mark"] },
          { type: "number", value: 75 },
          { type: "number", value: 87.5 },
          { type: "regex", pattern: "Total Mark[^\\d\\n]*81\\.25", flags: "i", label: "The Total Mark line should show 81.25" },
        ],
      },
      {
        id: "t2",
        description: "Quiz 30, exam 15",
        inputs: ["30", "15"],
        hidden: false,
        checks: [
          { type: "number", value: 87.5 },
          { type: "number", value: 62.5 },
          { type: "regex", pattern: "Total Mark[^\\d\\n]*75(\\.0+)?(?![\\d.])", flags: "i", label: "The Total Mark line should show 75.0" },
        ],
      },
      {
        id: "t3",
        description: "Quiz 10, exam 30",
        inputs: ["10", "30"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Quiz Mark[^\\d\\n]*62\\.5", flags: "i", label: "The Quiz Mark line should show 62.5" },
          { type: "regex", pattern: "Exam Mark[^\\d\\n]*75(\\.0+)?(?![\\d.])", flags: "i", label: "The Exam Mark line should show 75.0" },
          { type: "regex", pattern: "Total Mark[^\\d\\n]*68\\.75", flags: "i", label: "The Total Mark line should show 68.75" },
        ],
      },
    ],
    hints: [
      "See Practice Exercises I (page 1), Exercise 5, and Topic 2, slides 51–56 on the order of operations.",
      "Read both scores as floats. Compute quiz_mark and exam_mark with the formulas exactly as written: / and * go left to right, then + 50. For the total, add the two marks inside brackets and divide by 2.",
      "quiz = float(input(\"Enter the quiz score: \"))\nexam = ___\nquiz_mark = quiz / 40 * 50 + 50\nexam_mark = ___\ntotal_mark = (___ + ___) / 2\nprint(\"Quiz Mark:\", quiz_mark)",
      "quiz / 40 * 50 + 50 is evaluated as ((quiz / 40) * 50) + 50, so 20 gives 75.0. The exam formula gives 87.5 for 45. total_mark = (quiz_mark + exam_mark) / 2 = 81.25. Without the brackets, quiz_mark + exam_mark / 2 would divide only the exam mark (75 + 43.75 = 118.75), which is wrong.",
    ],
  },

  // ------------------------------------------------------------------ 12
  {
    id: "ex-t2-12",
    kind: "coding",
    topicId: "t2",
    title: "Online and Offline Students",
    category: "write",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-programs", "t2-arithmetic", "t2-conversion"],
    sources: [
      { file: "lab-ch3-ii", units: [5], note: "Read class size and online students; print offline count and online percentage" },
      { file: "topic2", units: [64], note: "int(input(...))" },
    ],
    prompt:
      "Ch3 Lab II, cell 5. Read the total number of students in a class and then the number of students attending online (whole numbers). " +
      "Calculate how many students attend offline (on campus) and the percentage of online students (online / total * 100). Print two lines, followed by a % sign on the second:\n\n" +
      "Number of students attending offline: 30\n" +
      "Percentage of online students: 25.0%\n\n" +
      "(That is the result for 40 students with 10 online.) Do not round the percentage. The lab's sample shows 11.5% for 26 students with 3 online because it was rounded; your program will print 11.538461538461538%, and both are accepted.",
    starterCode: `# Read the total number of students and the number attending online


# Calculate the offline students and the online percentage


# Print both results
`,
    solution: `total = int(input("Enter the total number of students in the class: "))
online = int(input("Enter the number of students attending online: "))
offline = total - online
percentage = online / total * 100
print("Number of students attending offline:", offline)
print(f"Percentage of online students: {percentage}%")
`,
    sampleRun: "Enter the total number of students in the class: 40\nEnter the number of students attending online: 10\nNumber of students attending offline: 30\nPercentage of online students: 25.0%\n",
    tests: [
      {
        id: "t1",
        description: "40 students, 10 online",
        inputs: ["40", "10"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "regex", pattern: "offline[^\\d\\n]*30(?![\\d.])", flags: "i", label: "The offline line should show 30" },
          { type: "regex", pattern: "percentage[^\\n]*25(\\.0+)?\\s*%", flags: "i", label: "The percentage line should show 25.0%" },
        ],
      },
      {
        id: "t2",
        description: "26 students, 3 online (the lab's sample)",
        inputs: ["26", "3"],
        hidden: false,
        checks: [
          { type: "regex", pattern: "offline[^\\d\\n]*23(?![\\d.])", flags: "i", label: "The offline line should show 23" },
          { type: "number", value: 11.54, tolerance: 0.05 },
          { type: "regex", pattern: "percentage[^\\n]*11\\.5\\d*\\s*%", flags: "i", label: "The percentage line should show about 11.5%" },
        ],
      },
      {
        id: "t3",
        description: "30 students, 12 online",
        inputs: ["30", "12"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "offline[^\\d\\n]*18(?![\\d.])", flags: "i", label: "The offline line should show 18" },
          { type: "regex", pattern: "percentage[^\\n]*40(\\.0+)?\\s*%", flags: "i", label: "The percentage line should show 40.0%" },
        ],
      },
      {
        id: "t4",
        description: "Everyone online",
        inputs: ["25", "25"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "offline[^\\d\\n]*0(?![\\d.])", flags: "i", label: "The offline line should show 0" },
          { type: "regex", pattern: "percentage[^\\n]*100(\\.0+)?\\s*%", flags: "i", label: "The percentage line should show 100.0%" },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab II, cell 5 (task and sample output) and Topic 2, slide 64: int(input(...)) reads a whole number.",
      "Read both numbers with int(). offline = total − online. percentage = online / total * 100. Print the two lines with labels, and put % right after the percentage.",
      "total = int(input(\"Enter the total number of students in the class: \"))\nonline = ___\noffline = ___ - ___\npercentage = ___ / ___ * 100\nprint(\"Number of students attending offline:\", offline)\nprint(f\"Percentage of online students: {___}%\")",
      "offline = total - online gives 30 for 40 and 10. percentage = online / total * 100 gives 10 / 40 * 100 = 25.0 (/ always gives a float). An f-string such as f\"Percentage of online students: {percentage}%\" puts the % sign right after the number. A common mistake is total / online * 100, which divides the wrong way round.",
    ],
  },

  // ------------------------------------------------------------------ 13
  {
    id: "ex-t2-13",
    kind: "coding",
    topicId: "t2",
    title: "Fix: Pizza Offer (Buy 2, Get 1 Free)",
    category: "fix",
    difficulty: "medium",
    origin: "adapted",
    conceptIds: ["t2-arithmetic", "t2-programs"],
    sources: [
      { file: "lab-ch3-iii", units: [1, 2, 3], note: "Pizza offer task, sample run and the correct // version" },
      { file: "lab-ch3-iii", units: [4], note: "The lab's / version, used here as the buggy starter code" },
      { file: "topic2", units: [33, 34], note: "/ gives a float; // rounds down to a whole number" },
    ],
    prompt:
      "Ch3 Lab III, cell 1. A pizza shop offers: buy 2 pizzas and get 1 free, so for every 3 pizzas 1 is free. Read the number of pizzas (a whole number) and then the price of one pizza (it may have decimals). " +
      "Free pizzas = number of pizzas ÷ 3, counting whole pizzas only. Total cost = (number of pizzas − free pizzas) × price. Print one line:\n\n" +
      "Total cost: 15.0 OMR\n\n" +
      "The starter code (from cell 4 of the lab) has a bug: for 7 pizzas at 3 OMR it prints 14.0 OMR, but 7 pizzas give 2 free pizzas, so the customer pays for 5 and the total is 15.0 OMR. Find and fix the bug.",
    starterCode: `pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas / 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
`,
    solution: `pizzas = int(input("Enter number of pizzas: "))
price = float(input("Enter price of one pizza: "))

free_pizzas = pizzas // 3
total = (pizzas - free_pizzas) * price

print("Total cost:", total, "OMR")
`,
    sampleRun: "Enter number of pizzas: 7\nEnter price of one pizza: 3\nTotal cost: 15.0 OMR\n",
    tests: [
      {
        id: "t1",
        description: "7 pizzas at 3 OMR (the lab's sample)",
        inputs: ["7", "3"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 2 },
          { type: "number", value: 15 },
          { type: "notNumber", value: 14, label: "Output should not show 14.0 (free pizzas must be whole pizzas)" },
          { type: "contains", text: "Total cost" },
        ],
      },
      {
        id: "t2",
        description: "5 pizzas at 4 OMR (1 free)",
        inputs: ["5", "4"],
        hidden: false,
        checks: [
          { type: "number", value: 16 },
          { type: "notNumber", value: 13.33, tolerance: 0.01 },
        ],
      },
      {
        id: "t3",
        description: "2 pizzas: no free pizza yet",
        inputs: ["2", "5"],
        hidden: true,
        checks: [{ type: "number", value: 10 }],
      },
      {
        id: "t4",
        description: "10 pizzas at 1.5 OMR (3 free)",
        inputs: ["10", "1.5"],
        hidden: true,
        checks: [
          { type: "number", value: 10.5 },
          { type: "notNumber", value: 10 },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab III, cells 1–3, and Topic 2, slides 33–34: / always gives a float (7 / 3 = 2.333…), while // gives the whole-number part (7 // 3 = 2).",
      "Look at the line that calculates free_pizzas. A customer cannot get 2.333 free pizzas. You need the number of complete groups of 3.",
      "free_pizzas = pizzas ___ 3\ntotal = (pizzas - free_pizzas) * price",
      "Change free_pizzas = pizzas / 3 to free_pizzas = pizzas // 3. For 7 pizzas, 7 // 3 = 2 free pizzas, so the customer pays for 7 − 2 = 5 pizzas: 5 × 3.0 = 15.0 OMR. With /, the program subtracted 2.333… pizzas and printed 14.0, which is cell 4's mistake.",
    ],
  },

  // ------------------------------------------------------------------ 14
  {
    id: "ex-t2-14",
    kind: "coding",
    topicId: "t2",
    title: "Complete: Stationery Shopping",
    category: "complete",
    difficulty: "easy",
    origin: "source",
    conceptIds: ["t2-programs", "t2-arithmetic", "t2-conversion"],
    sources: [{ file: "lab-ch3-iii", units: [5, 6, 7], note: "Stationery task, sample run and solution" }],
    prompt:
      "Ch3 Lab III, cell 5. The program reads the quantity and the price of four items, in this order: pencil quantity, pencil price, pen quantity, pen price, calculator quantity, calculator price, paper quantity, paper price. " +
      "The input lines and the print lines are already written. Complete the missing calculations:\n\n" +
      "each item's cost = quantity × price\n" +
      "Total Cost = Pencil Cost + Pen Cost + Calculator Cost + Paper Cost\n\n" +
      "Replace every ___ so the program prints, for the lab's sample (5, .2, 3, .5, 1, 5, 10, .1):\n\n" +
      "Pencil cost: 1.0 OMR\n" +
      "Pen cost: 1.5 OMR\n" +
      "Calculator cost: 5.0 OMR\n" +
      "Paper cost: 1.0 OMR\n" +
      "Total cost: 8.5 OMR",
    starterCode: `pencil_qty = int(input("Enter pencil quantity: "))
pencil_price = float(input("Enter pencil price: "))
pen_qty = int(input("Enter pen quantity: "))
pen_price = float(input("Enter pen price: "))
calculator_qty = int(input("Enter calculator quantity: "))
calculator_price = float(input("Enter calculator price: "))
paper_qty = int(input("Enter paper quantity: "))
paper_price = float(input("Enter paper price: "))

# Complete: cost = quantity * price
pencil_cost = ___
pen_cost = ___
calculator_cost = ___
paper_cost = ___

# Complete: add the four costs
total = ___

print("Pencil cost:", pencil_cost, "OMR")
print("Pen cost:", pen_cost, "OMR")
print("Calculator cost:", calculator_cost, "OMR")
print("Paper cost:", paper_cost, "OMR")
print("Total cost:", total, "OMR")
`,
    solution: `pencil_qty = int(input("Enter pencil quantity: "))
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
print("Pen cost:", pen_cost, "OMR")
print("Calculator cost:", calculator_cost, "OMR")
print("Paper cost:", paper_cost, "OMR")
print("Total cost:", total, "OMR")
`,
    sampleRun: "Enter pencil quantity: 5\nEnter pencil price: .2\nEnter pen quantity: 3\nEnter pen price: .5\nEnter calculator quantity: 1\nEnter calculator price: 5\nEnter paper quantity: 10\nEnter paper price: .1\nPencil cost: 1.0 OMR\nPen cost: 1.5 OMR\nCalculator cost: 5.0 OMR\nPaper cost: 1.0 OMR\nTotal cost: 8.5 OMR\n",
    tests: [
      {
        id: "t1",
        description: "The lab's sample: 5, .2, 3, .5, 1, 5, 10, .1",
        inputs: ["5", ".2", "3", ".5", "1", "5", "10", ".1"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 8 },
          { type: "order", texts: ["Pencil cost", "Pen cost", "Calculator cost", "Paper cost", "Total cost"] },
          { type: "regex", pattern: "Pen cost[^\\d\\n]*1\\.5", flags: "i", label: "Pen cost should be 1.5" },
          { type: "regex", pattern: "Calculator cost[^\\d\\n]*5(\\.0+)?(?![\\d.])", flags: "i", label: "Calculator cost should be 5.0" },
          { type: "regex", pattern: "Total cost[^\\d\\n]*8\\.5", flags: "i", label: "Total cost should be 8.5" },
        ],
      },
      {
        id: "t2",
        description: "2, 0.25, 4, 0.75, 2, 6.5, 3, 0.5",
        inputs: ["2", "0.25", "4", "0.75", "2", "6.5", "3", "0.5"],
        hidden: false,
        checks: [
          { type: "regex", pattern: "Pencil cost[^\\d\\n]*0?\\.5", flags: "i", label: "Pencil cost should be 0.5" },
          { type: "regex", pattern: "Calculator cost[^\\d\\n]*13(\\.0+)?(?![\\d.])", flags: "i", label: "Calculator cost should be 13.0" },
          { type: "regex", pattern: "Total cost[^\\d\\n]*18(\\.0+)?(?![\\d.])", flags: "i", label: "Total cost should be 18.0" },
        ],
      },
      {
        id: "t3",
        description: "No pens bought",
        inputs: ["10", "0.1", "0", "0.5", "1", "12", "4", "0.25"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "Pen cost[^\\d\\n]*0(\\.0+)?(?![\\d.])", flags: "i", label: "Pen cost should be 0.0" },
          { type: "regex", pattern: "Total cost[^\\d\\n]*14(\\.0+)?(?![\\d.])", flags: "i", label: "Total cost should be 14.0" },
        ],
      },
    ],
    hints: [
      "See Ch3 Lab III, cells 5–7: each item's cost is its quantity multiplied by its price, and the total adds the four costs.",
      "Fill the four cost lines with quantity * price for the matching item. Then set total to the sum of the four cost variables.",
      "pencil_cost = pencil_qty * ___\npen_cost = ___ * pen_price\ncalculator_cost = ___ * ___\npaper_cost = ___ * ___\ntotal = pencil_cost + ___ + ___ + ___",
      "pencil_cost = pencil_qty * pencil_price, and the same pattern for pen, calculator and paper. total = pencil_cost + pen_cost + calculator_cost + paper_cost. For the sample: 5 × 0.2 = 1.0, 3 × 0.5 = 1.5, 1 × 5 = 5.0, 10 × 0.1 = 1.0, so the total is 8.5. Note that Python accepts .2 as 0.2 when converting with float().",
    ],
  },

  // ------------------------------------------------------------------ 15
  {
    id: "ex-t2-15",
    kind: "coding",
    topicId: "t2",
    title: "School Trip and Library Rules",
    category: "write",
    difficulty: "medium",
    origin: "adapted",
    conceptIds: ["t2-logical", "t2-comparison", "t2-boolean"],
    sources: [
      { file: "lab-ch2-practice-ii", units: [5], note: "Trip: age 18 or more AND parent permission" },
      { file: "lab-ch2-practice-ii", units: [6, 7], note: "Library: ID card OR teacher allows; print(id_card or teacher_allowed)" },
      { file: "topic2", units: [43, 45], note: "and / or truth tables" },
    ],
    prompt:
      "Ch2 Practice II, cells 5–7. Read four values, in this order:\n" +
      "1. the student's age (a whole number)\n" +
      "2. has parent permission? (type yes or no)\n" +
      "3. has an ID card? (yes or no)\n" +
      "4. does the teacher allow? (yes or no)\n\n" +
      "Rules: a student can join the school trip if the age is 18 or more AND they have parent permission. A student can enter the library if they have an ID card OR the teacher allows.\n\n" +
      "Print two lines showing True or False, trip first:\n\n" +
      "Can join the trip: True\n" +
      "Can enter the library: False\n\n" +
      "Hint for the yes/no answers: a comparison such as answer == \"yes\" is already True or False. All answers are typed in lowercase.",
    starterCode: `# Read the age and the three yes/no answers


# Turn each yes/no answer into True or False with ==


# Combine with and / or, then print the two results
`,
    solution: `age = int(input("Enter your age: "))
permission = input("Parent permission (yes/no): ") == "yes"
id_card = input("Do you have an ID card (yes/no): ") == "yes"
teacher_allowed = input("Does the teacher allow (yes/no): ") == "yes"
print("Can join the trip:", age >= 18 and permission)
print("Can enter the library:", id_card or teacher_allowed)
`,
    sampleRun: "Enter your age: 20\nParent permission (yes/no): yes\nDo you have an ID card (yes/no): no\nDoes the teacher allow (yes/no): no\nCan join the trip: True\nCan enter the library: False\n",
    tests: [
      {
        id: "t1",
        description: "Age 20 with permission; no ID card, teacher does not allow",
        inputs: ["20", "yes", "no", "no"],
        hidden: false,
        checks: [
          { type: "minInputs", count: 4 },
          { type: "order", texts: ["trip", "library"] },
          { type: "regex", pattern: "[Tt]rip[^\\n]*True", label: "The trip line should say True" },
          { type: "regex", pattern: "[Ll]ibrary[^\\n]*False", label: "The library line should say False" },
        ],
      },
      {
        id: "t2",
        description: "Age 16 with permission; has an ID card",
        inputs: ["16", "yes", "yes", "no"],
        hidden: false,
        checks: [
          { type: "regex", pattern: "[Tt]rip[^\\n]*False", label: "The trip line should say False (too young)" },
          { type: "regex", pattern: "[Ll]ibrary[^\\n]*True", label: "The library line should say True" },
        ],
      },
      {
        id: "t3",
        description: "Exactly 18 with permission; teacher allows",
        inputs: ["18", "yes", "no", "yes"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "[Tt]rip[^\\n]*True", label: "Age 18 counts as 18 or more" },
          { type: "regex", pattern: "[Ll]ibrary[^\\n]*True", label: "The teacher allows, so the library line should say True" },
        ],
      },
      {
        id: "t4",
        description: "Age 25 without permission; no ID card, teacher does not allow",
        inputs: ["25", "no", "no", "no"],
        hidden: true,
        checks: [
          { type: "regex", pattern: "[Tt]rip[^\\n]*False", label: "No permission, so the trip line should say False" },
          { type: "regex", pattern: "[Ll]ibrary[^\\n]*False", label: "The library line should say False" },
        ],
      },
    ],
    hints: [
      "See Ch2 Practice II, cells 5–7, and Topic 2, slides 43 and 45: and is True only when both sides are True; or is True when at least one side is True.",
      "Convert the age with int(). For each yes/no answer, compare the typed text with \"yes\" using ==, which gives True or False. Then use age >= 18 and permission for the trip, and id_card or teacher_allowed for the library.",
      "age = int(input(\"Enter your age: \"))\npermission = input(\"Parent permission (yes/no): \") == ___\nid_card = ___\nteacher_allowed = ___\nprint(\"Can join the trip:\", age >= ___ and ___)\nprint(\"Can enter the library:\", ___ or ___)",
      "permission = input(...) == \"yes\" stores True when the user types yes and False otherwise. age >= 18 and permission is True only if both parts are True, so age 16 gives False even with permission. id_card or teacher_allowed is True if either is True. Use >= 18, not > 18, because a student who is exactly 18 may join.",
    ],
  },
];
