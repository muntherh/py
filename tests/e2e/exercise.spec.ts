import { expect, test } from "@playwright/test";
import { setEditor, waitForPython } from "./helpers";
import { EXERCISES } from "../../src/data/practice/exercises";

const ex = EXERCISES.find((e) => e.topicId === "t4") ?? EXERCISES[0];

test("a correct solution passes all tests; a wrong one is reported precisely", async ({ page }) => {
  await page.goto(`/#/lab/exercise/${ex.id}`);
  await waitForPython(page);
  const editor = page.locator(".cm-editor").first();
  await setEditor(page, editor, 'print("I did not read the task")');
  await page.getByTestId("submit-exercise").click();
  await expect(page.getByTestId("grade-report")).toHaveAttribute("data-passed", "false", { timeout: 60_000 });

  await setEditor(page, editor, ex.solution);
  await page.getByTestId("submit-exercise").click();
  await expect(page.getByTestId("grade-report")).toHaveAttribute("data-passed", "true", { timeout: 60_000 });
  await expect(page.getByText("All tests passed")).toBeVisible();
  // hidden test inputs are not revealed
  await expect(page.getByText(/Hidden test 1/)).toBeVisible();
});

test("exercise code is saved and survives a refresh", async ({ page }) => {
  await page.goto(`/#/lab/exercise/${ex.id}`);
  await setEditor(page, page.locator(".cm-editor").first(), "# my saved draft 123");
  await expect(page.getByText("Saved", { exact: true })).toBeVisible({ timeout: 10_000 });
  await page.waitForTimeout(800);
  await page.reload();
  await expect(page.locator(".cm-content").first()).toContainText("# my saved draft 123");
});

test("hints unlock one level at a time", async ({ page }) => {
  await page.goto(`/#/lab/exercise/${ex.id}`);
  await page.getByRole("button", { name: /Level 1 · Concept hint/ }).click();
  await expect(page.getByText("Level 1 · Concept hint")).toBeVisible();
  await expect(page.getByRole("button", { name: /Level 3/ })).toBeDisabled();
});
