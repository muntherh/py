import { expect, test, type Page } from "@playwright/test";
import { EXAMS } from "../../src/data/exams/exams";
import { EXAM_QUESTION_MAP } from "../../src/data/exams/questions";
import { EXAM_ANSWERS } from "../../src/data/exams/answers";
import { setEditor } from "./helpers";

async function startExam(page: Page, n: number) {
  await page.goto(`/#/exams/exam-${n}`);
  await page.getByTestId("start-exam").click();
  await page.getByRole("button", { name: "Start now" }).click();
  await expect(page.getByTestId("exam-timer")).toBeVisible();
}

const remaining = async (page: Page) => Number(await page.getByTestId("exam-timer").getAttribute("data-remaining-ms"));

test("all six exams open with a 30-minute timer", async ({ page }) => {
  expect(EXAMS).toHaveLength(6);
  for (const e of EXAMS) {
    await page.goto(`/#/exams/${e.id}`);
    await expect(page.getByRole("heading", { level: 1, name: e.title })).toBeVisible();
    await expect(page.getByText("30 min").first()).toBeVisible();
  }
  await startExam(page, 3);
  const ms = await remaining(page);
  expect(ms).toBeGreaterThan(29.9 * 60_000);
  expect(ms).toBeLessThanOrEqual(30 * 60_000);
});

test("timer and answers survive a page refresh", async ({ page }) => {
  await startExam(page, 1);
  await page.locator('[data-testid="exam-question"] label[data-option]').first().click();
  await page.waitForTimeout(2500);
  const before = await remaining(page);
  await page.reload();
  await expect(page.getByTestId("exam-timer")).toBeVisible();
  const after = await remaining(page);
  expect(after).toBeLessThan(before + 1000);
  expect(after).toBeGreaterThan(25 * 60_000);
  await expect(page.locator('[data-testid="exam-question"] input[type=radio]:checked')).toHaveCount(1);
  await expect(page.getByTestId("nav-q-1")).toHaveAccessibleName(/answered/);
});

test("answering everything correctly scores 40/40 (MCQ, tracing, error, real coding grading)", async ({ page }) => {
  test.setTimeout(240_000);
  await startExam(page, 2);
  for (let i = 0; i < 16; i++) {
    const q = page.getByTestId("exam-question");
    const label = (await q.getAttribute("aria-label"))!;
    expect(label).toBe(`Question ${i + 1}`);
    const qid = await q.getAttribute("data-qid");
    expect(qid, `question ${i + 1} identified`).toBeTruthy();
    const qq = EXAM_QUESTION_MAP[qid!];
    const key = EXAM_ANSWERS[qid!];
    if (qq.kind === "mcq" || qq.kind === "error") await q.locator(`label[data-option="${key.answer}"]`).click();
    else if (qq.kind === "tracing") await q.getByTestId("tracing-answer").fill(String(key.answer));
    else await setEditor(page, q.locator(".cm-editor"), String(key.answer));
    if (i < 15) await page.getByTestId("next-question").click();
  }
  await page.getByTestId("submit-exam").click();
  await page.getByRole("button", { name: "Submit exam" }).click();
  await expect(page.getByTestId("exam-score")).toContainText("40", { timeout: 180_000 });
  await expect(page.getByTestId("exam-score")).toHaveText("40/40");
  await expect(page.getByTestId("review-question")).toHaveCount(16);
});

test("the exam is submitted automatically when time runs out", async ({ page }) => {
  await page.clock.install();
  await startExam(page, 5);
  await page.locator('[data-testid="exam-question"] label[data-option]').first().click();
  await page.clock.fastForward("31:00");
  await expect(page.getByText("automatically when time ran out")).toBeVisible({ timeout: 60_000 });
  await expect(page.getByTestId("exam-score")).toBeVisible();
});
