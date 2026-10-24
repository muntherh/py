import { expect, test, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { waitForSavedExam } from "./helpers";

const ROUTES = ["/", "/learn", "/learn/ch1-cia", "/learn/ch3-acl", "/learn/lab4-steps", "/learn/lab5-steps", "/learn/lab6-route", "/crypto", "/crypto?tab=caesar", "/crypto?tab=vigenere", "/crypto?tab=rail", "/crypto?tab=route", "/crypto?tab=nocalc", "/crypto?tab=manual", "/practice", "/exams", "/flashcards", "/revision", "/mistakes", "/progress", "/sources", "/settings"];

async function go(page: Page, path: string) {
  await page.goto(`/#${path}`);
  await expect(page.locator("#main")).toBeVisible();
}

test("every route renders without errors and without horizontal page scroll", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const r of ROUTES) {
    await go(page, r);
    await page.waitForTimeout(150);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `horizontal overflow on ${r}`).toBeLessThanOrEqual(0);
    await expect(page.locator("h1").first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("practice: answering gives deterministic feedback, explanation and source", async ({ page }) => {
  await go(page, "/practice");
  await page.getByLabel("Question type").selectOption("tf");
  await page.getByLabel("Chapter / lab").selectOption("ch1");
  await page.getByRole("button", { name: /^Start/ }).click();
  await page.getByRole("radio", { name: "True" }).click();
  await page.getByRole("button", { name: "Check answer" }).click();
  const status = page.getByRole("status").filter({ hasText: /Correct|Not quite/ });
  await expect(status).toBeVisible();
  await expect(status).toContainText("Explanation");
  await expect(status.getByRole("button", { name: /Chapter 1|Ch 1/ })).toBeVisible();
});

test("crypto worksheet detects the wrong cell and validates the manual's answer", async ({ page }) => {
  await go(page, "/crypto?tab=caesar&text=SECRET&key=3&mode=encrypt");
  await page.getByLabel("Row 1, x (value)").fill("18");
  await page.getByLabel("Row 1, x + 3").fill("22"); // wrong: should be 21
  await page.getByRole("button", { name: "Check my table" }).click();
  await expect(page.getByText(/First mistake — row 1, x \+ 3/)).toBeVisible();
  await expect(page.getByText("18 + 3 = 21.")).toBeVisible();
  // Hints come before the solution.
  await page.getByRole("button", { name: "Hint" }).click();
  await expect(page.getByText(/Hint 1: Formula: E\(x\) = \(x \+ K\) mod 26/)).toBeVisible();
  // Wrong direction diagnosis.
  await page.getByLabel("Final answer").fill("PBZOBQ");
  await page.getByRole("button", { name: "Validate" }).click();
  await expect(page.getByText(/You subtracted K/)).toBeVisible();
  await page.getByLabel("Final answer").fill("VHFUHW");
  await page.getByRole("button", { name: "Validate" }).click();
  await expect(page.getByText("Correct!")).toBeVisible();
});

test("rail fence and route reproduce the manual's answers", async ({ page }) => {
  await go(page, "/crypto?tab=rail&text=CIPHERTEXT&depth=3&mode=encrypt");
  await page.getByRole("button", { name: "Show full solution" }).click();
  await expect(page.getByText("CEXIHRETPT").first()).toBeVisible();
  await go(page, "/crypto?tab=route&text=WEAREDISCOVEREDFLEEATONCE&rows=5&cols=5&fill=columns&route=corner-tr&mode=encrypt");
  await page.getByRole("button", { name: "Show full solution" }).click();
  await expect(page.getByText("TONCEADOEFLEEECRVERSADIEW").first()).toBeVisible();
});

test("alphabet builder checks every cell", async ({ page }) => {
  await go(page, "/crypto?tab=alphabet");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 26; i++) await page.getByLabel(`Number for ${letters[i]}`).fill(String(i === 5 ? 6 : i));
  await page.getByRole("button", { name: "Check my table" }).click();
  await expect(page.getByText("25/26")).toBeVisible();
  await expect(page.getByText(/F should be 5/)).toBeVisible();
});

test("mock exam: start, answer, submit, graded out of 20, review and persistence", async ({ page }) => {
  await go(page, "/exams");
  await page.getByRole("button", { name: "Start" }).first().click();
  await page.getByRole("button", { name: "Begin exam" }).click();
  await expect(page.getByRole("timer")).toBeVisible();
  await expect(page.getByText("0/22 answered")).toBeVisible();
  // Answer the first question (a multiple choice) and flag it.
  await page.locator("article input[type=radio]").first().check();
  await page.getByRole("button", { name: "Flag for review" }).click();
  await expect(page.getByText("1/22 answered")).toBeVisible();
  // Persistence is asynchronous: wait until IndexedDB really holds the answer and the flag.
  await waitForSavedExam(page, { answers: 1, flagged: 1 });
  // Answers survive a reload (IndexedDB) and the timer keeps its deadline.
  await page.reload();
  await expect(page.getByText("1/22 answered")).toBeVisible();
  await expect(page.getByRole("button", { name: "Flagged", exact: true })).toBeVisible();
  // No hints/feedback during the exam.
  await expect(page.getByText("Explanation")).toHaveCount(0);
  await page.getByRole("button", { name: "Submit" }).first().click();
  await page.getByRole("button", { name: "Submit and grade" }).click();
  await expect(page).toHaveURL(/review$/);
  await expect(page.getByText("out of 20")).toBeVisible();
  await expect(page.getByText("Topic-by-topic performance")).toBeVisible();
  await expect(page.getByText("Detailed answer review")).toBeVisible();
  // History persists after reload.
  await go(page, "/exams");
  await page.reload();
  await expect(page.getByRole("link", { name: "Review" })).toBeVisible();
  await expect(page.getByText(/\/20$/).first()).toBeVisible();
  // Wrong/unanswered items reached the mistake notebook.
  await go(page, "/mistakes");
  await expect(page.getByRole("button", { name: /^Open \(\d+\)/ })).not.toHaveText("Open (0)");
});

test("lesson completion and the Arabic toggle persist across reload", async ({ page }) => {
  await go(page, "/learn/ch2-iaa");
  await page.getByRole("button", { name: "Mark lesson complete" }).click();
  await page.getByLabel(/Show Arabic explanations/).check();
  await expect(page.locator('[lang="ar"]').first()).toBeVisible();
  await page.reload();
  await expect(page.getByRole("button", { name: "Mark as not done" })).toBeVisible();
  await expect(page.getByLabel(/Show Arabic explanations/)).toBeChecked();
  await go(page, "/");
  await expect(page.getByText("1/39")).toBeVisible();
});

test("Lab 4 simulator walks through Steps 1–10", async ({ page }) => {
  await go(page, "/learn/lab4-steps");
  await page.getByRole("button", { name: /Confidential Data/ }).click();
  await page.getByRole("button", { name: /Security tab → Advanced/ }).click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.getByLabel("Username").fill("student");
  await page.getByRole("button", { name: "Check Names" }).click();
  await page.getByRole("button", { name: "OK", exact: true }).click();
  await page.getByRole("button", { name: "Type set → next" }).click();
  await page.getByRole("button", { name: "Scope set → next" }).click();
  await page.getByLabel("Read", { exact: true }).check();
  await page.getByRole("button", { name: "OK", exact: true }).click();
  await page.getByRole("button", { name: /new user is listed/ }).click();
  await page.getByRole("button", { name: "Disable inheritance" }).click();
  await page.getByRole("button", { name: /Remove all inherited permissions/ }).click();
  await expect(page.getByText(/Inherited entries were removed/)).toBeVisible();
});

test("Lab 5 simulator: filter and find", async ({ page }) => {
  await go(page, "/learn/lab5-steps");
  await page.getByRole("button", { name: /Open Event Viewer/ }).click();
  await page.getByRole("button", { name: "Windows Logs" }).click();
  await page.getByRole("button", { name: "Application", exact: true }).click();
  await page.getByRole("button", { name: /Filter Current Log/ }).click();
  await page.getByLabel("Warning").check();
  await page.getByLabel("Error", { exact: true }).check();
  await page.getByRole("dialog", { name: "Filter Current Log" }).getByRole("combobox").selectOption("week");
  await page.getByRole("button", { name: "OK" }).click();
  await expect(page.getByText(/Application · 3 event\(s\) \(filtered\)/)).toBeVisible();
});

test("flashcards flip and rate", async ({ page }) => {
  await go(page, "/flashcards");
  await page.getByRole("button", { name: "Reveal", exact: true }).click();
  await page.getByRole("button", { name: "Knew it" }).click();
  await expect(page.getByText(/Card 2 of/)).toBeVisible();
});

test("accessibility: no serious axe violations on key pages", async ({ page }) => {
  for (const r of ["/", "/learn/ch1-cia", "/crypto?tab=caesar", "/practice", "/exams", "/flashcards"]) {
    await go(page, r);
    await page.waitForTimeout(300);
    const res = await new AxeBuilder({ page: page as never }).analyze();
    const serious = res.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => `${r}: ${v.id} — ${v.nodes[0]?.target}`)).toEqual([]);
  }
});

test("keyboard: skip link and focusable navigation", async ({ page, isMobile }) => {
  test.skip(!!isMobile, "desktop keyboard flow");
  await go(page, "/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
});
