// Built-in, source-grounded explanations for common Python errors.
// These are fixed tips matched against the REAL error Python produced — not AI output.
import type { SourceRef } from "../data/types";

export interface ErrorTip {
  title: string;
  tip: string;
  source?: SourceRef;
}

interface Rule {
  type: string;
  match?: RegExp;
  tip: ErrorTip;
}

const RULES: Rule[] = [
  { type: "SyntaxError", match: /expected ':'/, tip: { title: "Missing colon", tip: "Lines that start a block — if, elif, else and while — must end with a colon (:).", source: { file: "topic3", units: [6, 21, 33] } } },
  { type: "SyntaxError", match: /invalid character '[“”‘’]'/, tip: { title: "Curly quotes", tip: "Python only accepts straight quotes ' and \". Curly “smart” quotes often appear when code is copied from slides or documents — retype them.", source: { file: "topic2", units: [8] } } },
  { type: "SyntaxError", match: /unterminated (triple-quoted )?string/, tip: { title: "String not closed", tip: "A string must start and end with the same kind of quote. Use \\' or the other quote type if the text contains a quote.", source: { file: "topic2", units: [8, 9, 10] } } },
  { type: "SyntaxError", match: /was never closed|unmatched/, tip: { title: "Brackets don't match", tip: "Every ( needs a matching ). Count the brackets on the reported line, especially around int(input(...))." } },
  { type: "SyntaxError", match: /cannot assign to (literal|expression)/, tip: { title: "Assignment goes right-to-left", tip: "The variable name goes on the left of =, the value on the right: x = 5, not 5 = x.", source: { file: "topic2", units: [19, 36] } } },
  { type: "SyntaxError", match: /invalid decimal literal/, tip: { title: "Invalid name or number", tip: "Variable names cannot start with a digit (e.g. 3rd_row). They start with a letter or underscore.", source: { file: "topic2", units: [20, 23] } } },
  { type: "SyntaxError", match: /Maybe you meant '==' or ':=' instead of '='/, tip: { title: "= vs ==", tip: "Use == to compare inside a condition. A single = assigns a value.", source: { file: "topic2", units: [38] } } },
  { type: "SyntaxError", match: /'break' outside loop|'continue'/, tip: { title: "Statement outside a loop", tip: "break and continue only work inside loops (they are not part of the topics covered here)." } },
  { type: "SyntaxError", tip: { title: "Syntax error", tip: "Python could not understand this line. Look at the ^ marker, check for missing colons, quotes, brackets or operators.", source: { file: "topic2", units: [49] } } },
  { type: "IndentationError", match: /expected an indented block/, tip: { title: "Indent the block", tip: "The statements inside if/elif/else/while must be indented (usually 4 spaces) under the line ending with a colon.", source: { file: "topic3", units: [6, 14] } } },
  { type: "IndentationError", match: /unexpected indent/, tip: { title: "Unexpected indent", tip: "This line is indented but is not inside a block. Remove the extra spaces at the start of the line.", source: { file: "topic3", units: [16] } } },
  { type: "IndentationError", tip: { title: "Indentation doesn't line up", tip: "All statements in the same block must start at exactly the same column. Don't mix tabs and spaces.", source: { file: "topic4", units: [6] } } },
  { type: "TabError", tip: { title: "Tabs and spaces mixed", tip: "Use spaces only (the editor inserts 4 spaces when you press Tab)." } },
  { type: "NameError", match: /name '(true|false)' is not defined/, tip: { title: "True/False need capitals", tip: "Booleans are written True and False with an uppercase first letter.", source: { file: "topic2", units: [7] } } },
  { type: "NameError", match: /name 'Print' is not defined/, tip: { title: "print is lowercase", tip: "Python is case-sensitive: print, not Print.", source: { file: "topic2", units: [22] } } },
  { type: "NameError", tip: { title: "Unknown name", tip: "Python doesn't know this name. Check the spelling and capitalisation (names are case-sensitive), and make sure the variable is assigned before it is used — and on every path through your if/else.", source: { file: "topic2", units: [19, 22] } } },
  { type: "TypeError", match: /can only concatenate str \(not "(int|float)"\) to str/, tip: { title: "Joining text and a number", tip: "+ joins two strings. To print text with a number, separate them with commas in print(), or use an f-string.", source: { file: "topic2", units: [29, 74, 75] } } },
  { type: "TypeError", match: /unsupported operand type\(s\).*'str'/, tip: { title: "Doing maths with text", tip: "input() always returns a string. Convert it first with int(...) or float(...) before calculating.", source: { file: "topic2", units: [61, 64, 65] } } },
  { type: "TypeError", match: /'(<|>|<=|>=)' not supported between instances of 'str' and '(int|float)'/, tip: { title: "Comparing text with a number", tip: "Convert the input with int(...) or float(...) before comparing it with a number.", source: { file: "topic2", units: [64, 65] } } },
  { type: "TypeError", tip: { title: "Wrong type of value", tip: "An operation received a value of the wrong type. Use type(...) to check what you have.", source: { file: "topic2", units: [13] } } },
  { type: "ValueError", match: /invalid literal for int\(\)/, tip: { title: "int() can't convert this text", tip: "int() only converts whole numbers like '20'. For decimals like '5.5' use float().", source: { file: "topic2", units: [65] } } },
  { type: "ValueError", match: /could not convert string to float/, tip: { title: "Not a number", tip: "float() needs text that looks like a number, e.g. '8.3'.", source: { file: "topic2", units: [65, 72] } } },
  { type: "ZeroDivisionError", tip: { title: "Division by zero", tip: "Check that the divisor is not 0 before dividing (an if statement can protect the division).", source: { file: "topic3", units: [15] } } },
  { type: "EOFError", tip: { title: "No input received", tip: "input() was cancelled or the program asked for more input than was provided." } },
];

export function explainError(errorType: string | null, message: string | null): ErrorTip | null {
  if (!errorType) return null;
  const text = message ?? "";
  for (const r of RULES) if (r.type === errorType && (!r.match || r.match.test(text))) return r.tip;
  return null;
}
