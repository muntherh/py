import { expect, test } from "@playwright/test";

test("lesson shows all parts, quick check works and completion persists", async ({ page }) => {
  await page.goto("/#/learn");
  await page.getByRole("link", { name: "Start" }).first().click();
  await expect(page.getByText("Topic 2 · Lesson 1 of")).toBeVisible();
  for (const h of ["Explanation", "Key concepts", "Python examples, line by line", "Common mistakes", "Try it yourself", "Quick knowledge check", "Source references"]) {
    await expect(page.getByRole("heading", { name: h })).toBeVisible();
  }
  // quick check: choose the first option and check — feedback appears either way
  const firstCheck = page.locator("#check");
  await firstCheck.locator("label").first().click();
  await firstCheck.getByRole("button", { name: "Check answer" }).first().click();
  await expect(firstCheck.getByRole("status").first()).toBeVisible();

  await page.getByTestId("complete-lesson").click();
  await expect(page.getByTestId("complete-lesson")).toHaveText(/Mark as not complete/);
  await page.reload();
  await expect(page.getByTestId("complete-lesson")).toHaveText(/Mark as not complete/);
  await page.goto("/#/learn");
  await expect(page.getByText("1/13").first()).toBeVisible();
});

test("lesson navigation moves to the next lesson", async ({ page }) => {
  await page.goto("/#/learn/lesson-t2-values-types");
  const next = page.getByRole("navigation", { name: "Lesson navigation" }).getByRole("button").last();
  await next.click();
  await expect(page.getByText("Topic 2 · Lesson 2 of")).toBeVisible();
});
