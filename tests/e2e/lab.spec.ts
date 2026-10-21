import { expect, test } from "@playwright/test";
import { setEditor, waitForPython } from "./helpers";

test.beforeEach(async ({ page }) => {
  await page.goto("/#/lab?tab=script");
  await waitForPython(page);
});

const consoleOf = (page: import("@playwright/test").Page) => page.getByTestId("output-console");

test("runs valid code and shows real output", async ({ page }) => {
  await setEditor(page, page.locator(".cm-editor").first(), 'print("Hello World")\nprint(10 / 4, 7 // 2, type(3.0))');
  await page.getByTestId("run-button").click();
  await expect(consoleOf(page)).toContainText("Hello World");
  await expect(consoleOf(page)).toContainText("2.5 3 <class 'float'>");
});

test("shows a real SyntaxError and highlights the line", async ({ page }) => {
  await setEditor(page, page.locator(".cm-editor").first(), "x = 5\nif x > 3\n    print(x)");
  await page.getByTestId("run-button").click();
  await expect(consoleOf(page)).toContainText("SyntaxError: expected ':'");
  await expect(consoleOf(page)).toContainText('File "main.py", line 2');
  await expect(page.locator(".cm-error-line")).toHaveCount(1);
  await expect(page.getByText("Missing colon")).toBeVisible();
});

test("shows a real runtime error traceback", async ({ page }) => {
  await setEditor(page, page.locator(".cm-editor").first(), 'name = "Ali"\nprint("Age: " + 20)');
  await page.getByTestId("run-button").click();
  await expect(consoleOf(page)).toContainText("Traceback (most recent call last):");
  await expect(consoleOf(page)).toContainText('TypeError: can only concatenate str (not "int") to str');
});

test("input() works interactively, and cancelling raises EOFError", async ({ page }) => {
  await setEditor(page, page.locator(".cm-editor").first(), 'n1 = int(input("Enter a number : "))\nn2 = int(input("Enter another number : "))\nprint(n1 + n2)');
  await page.getByTestId("run-button").click();
  await page.getByTestId("stdin-input").fill("10");
  await page.getByTestId("stdin-input").press("Enter");
  await page.getByTestId("stdin-input").fill("20");
  await page.getByTestId("stdin-input").press("Enter");
  await expect(consoleOf(page)).toContainText("Enter a number : 10");
  await expect(consoleOf(page)).toContainText("30");

  await page.getByTestId("run-button").click();
  await page.getByRole("button", { name: "Cancel" }).click();
  await expect(consoleOf(page)).toContainText("EOFError: EOF when reading a line");
});

test("Stop terminates a long-running program and the UI stays responsive", async ({ page }) => {
  await setEditor(page, page.locator(".cm-editor").first(), "i = 0\nwhile i >= 0:\n    i = i + 1");
  await page.getByTestId("run-button").click();
  await expect(page.getByTestId("stop-button")).toBeEnabled();
  // the page still reacts while Python is busy
  await page.getByRole("tab", { name: /Notebook/ }).click();
  await page.getByRole("tab", { name: /Script editor/ }).click();
  await setEditor(page, page.locator(".cm-editor").first(), "i = 0\nwhile i >= 0:\n    i = i + 1");
  await page.getByTestId("run-button").click();
  await page.getByTestId("stop-button").click();
  await expect(consoleOf(page)).toContainText("Execution stopped by you");
  // a fresh interpreter works afterwards
  await setEditor(page, page.locator(".cm-editor").first(), "print('alive')");
  await page.getByTestId("run-button").click();
  await expect(consoleOf(page)).toContainText("alive", { timeout: 60_000 });
});

test("time limit stops a program that never finishes", async ({ page }) => {
  await page.goto("/#/settings");
  await page.getByLabel(/Execution time limit/).fill("3");
  await page.goto("/#/lab?tab=script");
  await setEditor(page, page.locator(".cm-editor").first(), "x = 1\nwhile x > 0:\n    x = x + 1");
  await page.getByTestId("run-button").click();
  await expect(consoleOf(page)).toContainText("ran for more than 3 second(s)", { timeout: 30_000 });
});

test("notebook cells share variables like Jupyter", async ({ page }) => {
  await page.getByRole("tab", { name: /Notebook/ }).click();
  const cells = page.getByTestId("notebook-cell");
  await setEditor(page, cells.nth(0), "price = 40");
  await cells.nth(0).getByRole("button", { name: "Run cell 1" }).click();
  await expect(cells.nth(0)).toContainText("[1]");
  await setEditor(page, cells.nth(2), "price * 2");
  await cells.nth(2).getByRole("button", { name: "Run cell 3" }).click();
  await expect(cells.nth(2).getByTestId("output-console")).toContainText("80");
});

test("a new notebook cell is not silently stuck behind a cell waiting for input", async ({ page }) => {
  await page.getByRole("tab", { name: /Notebook/ }).click();
  const cells = page.getByTestId("notebook-cell");
  await setEditor(page, cells.nth(1), 'name = input("Enter your name: ")');
  await cells.nth(1).getByRole("button", { name: "Run cell 2" }).click();
  await expect(cells.nth(1).getByTestId("stdin-input")).toBeVisible();
  await page.getByRole("button", { name: "Add a code cell" }).click();
  const n = await cells.count();
  const last = cells.nth(n - 1);
  await setEditor(page, last, 'print("new cell output")');
  await last.getByRole("button", { name: `Run cell ${n}` }).click();
  await expect(last.getByTestId("queued-notice")).toContainText("waiting for you to type its input()");
  await last.getByRole("button", { name: "Cancel the other input" }).click();
  await expect(last.getByTestId("output-console")).toContainText("new cell output");
  await expect(cells.nth(1).getByTestId("output-console")).toContainText("EOFError");
  await expect(last.getByTestId("queued-notice")).toHaveCount(0);
});
