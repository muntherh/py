import { describe, expect, it } from "vitest";
import {
  evaluateCheck,
  extractNumbers,
  gradeCoding,
  normalizeWs,
  renderTerminal,
  stripComments,
  tracingMatches,
  checkRequirement,
  type ExecResult,
  type Runner,
} from "../../src/grading/checks";
import type { CodingTest } from "../../src/data/types";

const ok = (stdout: string, prompts = 0): ExecResult => ({
  status: "ok",
  errorType: null,
  error: null,
  line: null,
  stdout,
  transcript: [...Array.from({ length: prompts }, () => ["prompt", "?"] as ["prompt", string]), ["stdout", stdout]],
});

describe("output normalisation", () => {
  it("collapses spaces and tabs", () => {
    expect(normalizeWs("a \t  b\n  c  ")).toBe("a b\nc");
  });
  it("extracts ints, floats, negatives and leading-dot numbers", () => {
    expect(extractNumbers("Total = 9.0, avg -2.5 and .5 then 1e3")).toEqual([9, -2.5, 0.5, 1000]);
  });
  it("renders a terminal transcript with typed input on the prompt line", () => {
    expect(
      renderTerminal([
        ["prompt", "Name: "],
        ["input", "Ali"],
        ["stdout", "Hello Ali\n"],
      ]),
    ).toBe("Name: Ali\nHello Ali\n");
  });
});

describe("checks", () => {
  it("number accepts 9, 9.0 and 9.00 and respects tolerance", () => {
    for (const out of ["Average 9", "Average 9.0", "Average 9.00"]) expect(evaluateCheck({ type: "number", value: 9 }, out, [])).toBe(true);
    expect(evaluateCheck({ type: "number", value: 9.1666, tolerance: 0.001 }, "9.166666666666666", [])).toBe(true);
    expect(evaluateCheck({ type: "number", value: 9 }, "Average 8.9", [])).toBe(false);
  });
  it("contains is case-insensitive and spacing-insensitive by default", () => {
    expect(evaluateCheck({ type: "contains", text: "you passed" }, "You   Passed\n", [])).toBe(true);
    expect(evaluateCheck({ type: "contains", text: "you passed", caseSensitive: true }, "You Passed", [])).toBe(false);
  });
  it("notContains guards the wrong branch", () => {
    expect(evaluateCheck({ type: "notContains", text: "Failed" }, "Passed", [])).toBe(true);
    expect(evaluateCheck({ type: "notContains", text: "Failed" }, "Passed\nfailed", [])).toBe(false);
  });
  it("order requires fragments in sequence", () => {
    expect(evaluateCheck({ type: "order", texts: ["1", "2", "3"] }, "1\n2\n3\n", [])).toBe(true);
    expect(evaluateCheck({ type: "order", texts: ["3", "2"] }, "2\n3\n", [])).toBe(false);
  });
  it("minInputs counts input() prompts", () => {
    expect(evaluateCheck({ type: "minInputs", count: 2 }, "", [["prompt", "a"], ["prompt", "b"]])).toBe(true);
    expect(evaluateCheck({ type: "minInputs", count: 3 }, "", [["prompt", "a"]])).toBe(false);
  });
});

describe("requirements and comments", () => {
  it("ignores keywords inside comments but not inside code", () => {
    expect(stripComments("x = 1  # while loop here\nprint('#not a comment')")).toBe("x = 1  \nprint('#not a comment')");
    expect(checkRequirement({ pattern: "\\bwhile\\b", message: "use while" }, "# while\nprint(1)")).toBe(false);
    expect(checkRequirement({ pattern: "\\bwhile\\b", message: "use while" }, "i = 0\nwhile i < 3:\n    i += 1")).toBe(true);
    expect(checkRequirement({ pattern: "\\bfor\\b", forbid: true, message: "no for" }, "i = 0")).toBe(true);
  });
});

describe("tracing comparison", () => {
  it("ignores extra spaces and surrounding blank lines but not case", () => {
    expect(tracingMatches("the sum is 55\n", "the sum is  55\n")).toBe(true);
    expect(tracingMatches("\n1\n2\n\n", "1\n2\n")).toBe(true);
    expect(tracingMatches("true", "True")).toBe(false);
    expect(tracingMatches("1 2", "1\n2")).toBe(false);
  });
});

describe("gradeCoding", () => {
  const tests: CodingTest[] = [
    { id: "t1", description: "pass case", inputs: ["60"], hidden: false, checks: [{ type: "contains", text: "Pass" }] },
    { id: "t2", description: "fail case", inputs: ["40"], hidden: true, checks: [{ type: "contains", text: "Fail" }, { type: "notContains", text: "Pass" }] },
  ];
  it("passes when every test and requirement passes", async () => {
    const run: Runner = async (_c, inputs) => ok(Number(inputs[0]) >= 50 ? "Pass\n" : "Fail\n", 1);
    const g = await gradeCoding({ id: "q", tests, requirements: [{ pattern: "\\bif\\b", message: "use if" }] }, "if x: pass", run);
    expect(g.passedAll).toBe(true);
    expect(g.fraction).toBe(1);
    expect(g.headline).toBe("pass");
  });
  it("gives partial credit and reports wrong output", async () => {
    const run: Runner = async () => ok("Pass\n", 1);
    const g = await gradeCoding({ id: "q", tests }, "code", run);
    expect(g.passedAll).toBe(false);
    expect(g.fraction).toBe(0.5);
    expect(g.tests[1].category).toBe("wrong_output");
  });
  it("stops running after a syntax error and marks every test", async () => {
    let calls = 0;
    const run: Runner = async () => {
      calls++;
      return { status: "syntax_error", errorType: "SyntaxError", error: "SyntaxError: expected ':'", line: 2, stdout: "", transcript: [] };
    };
    const g = await gradeCoding({ id: "q", tests }, "if x\n", run);
    expect(calls).toBe(1);
    expect(g.tests.every((t) => t.category === "syntax_error")).toBe(true);
    expect(g.syntaxError).toContain("expected ':'");
  });
  it("explains EOFError as asking for too much input", async () => {
    const run: Runner = async () => ({ status: "runtime_error", errorType: "EOFError", error: "EOFError: EOF when reading a line", line: 3, stdout: "", transcript: [] });
    const g = await gradeCoding({ id: "q", tests }, "code", run);
    expect(g.tests[0].category).toBe("runtime_error");
    expect(g.tests[0].failedChecks[0]).toMatch(/more input/);
  });
  it("reports timeouts and empty output distinctly", async () => {
    const timeout: Runner = async () => ({ status: "timeout", errorType: null, error: null, line: null, stdout: "", transcript: [], labNotice: "stopped" });
    expect((await gradeCoding({ id: "q", tests }, "c", timeout)).headline).toBe("timeout");
    const silent: Runner = async () => ok("");
    expect((await gradeCoding({ id: "q", tests }, "c", silent)).headline).toBe("no_output");
  });
});
