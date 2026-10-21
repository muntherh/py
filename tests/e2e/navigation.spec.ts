import { expect, test } from "@playwright/test";
import { collectErrors } from "./helpers";

const PAGES: [string, string][] = [
  ["Dashboard", "Welcome to Python Mastery Lab"],
  ["Learn", "Lessons"],
  ["Topic Summaries", "Revision sheets"],
  ["Python Coding Lab", "Write and run real Python"],
  ["Practice Questions", "Multiple-choice practice"],
  ["Exam Simulator", "Six timed practice exams"],
  ["My Results", "Your performance"],
  ["Mistake Review", "Learn from your mistakes"],
  ["Curriculum Sources", "Where every lesson and question comes from"],
  ["Settings", "Preferences"],
];

test("every sidebar page loads without errors", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto("/");
  for (const [link, heading] of PAGES) {
    await page.getByRole("navigation", { name: "Main navigation" }).getByRole("link", { name: link, exact: true }).click();
    await expect(page.getByRole("heading", { level: 1, name: heading })).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("source citation opens the original slide preview", async ({ page }) => {
  await page.goto("/#/learn/lesson-t3-if-else");
  await page.getByRole("button", { name: /Topic 3 — Conditional Execution \| Slides 19–26/ }).first().click();
  const dialog = page.getByRole("dialog");
  await expect(dialog.getByRole("img")).toBeVisible();
  await expect(dialog).toContainText("Slide 19");
  await dialog.getByRole("button", { name: "Next" }).click();
  await expect(dialog).toContainText("Slide 20");
});

test("Topic 4 boundary is documented and excluded slides have no preview", async ({ page }) => {
  await page.goto("/#/sources");
  await expect(page.getByText("slide 19 is the section title “Infinite loop”")).toBeVisible();
  // Excluded slides are not shipped (the SPA server answers with HTML, not an image).
  const res = await page.request.get("/sources/t4-19.webp");
  expect(res.headers()["content-type"] ?? "").not.toContain("image");
  const ok = await page.request.get("/sources/t4-18.webp");
  expect(ok.headers()["content-type"]).toContain("image/webp");
});
