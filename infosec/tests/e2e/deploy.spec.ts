// Deployment checks against the Vercel-style server (scripts/serve-vercel.mjs + vercel.json).
import { expect, test } from "@playwright/test";
import { waitForSavedExam } from "./helpers";

const ROUTES = ["/", "/learn", "/learn/ch1-cia", "/learn/lab4-steps", "/crypto?tab=route", "/flashcards", "/practice", "/exams", "/revision", "/mistakes", "/progress", "/sources", "/settings"];

test("every hash route survives a browser refresh", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  for (const r of ROUTES) {
    await page.goto(`/#${r}`);
    await expect(page.locator("h1").first()).toBeVisible();
    const title = await page.locator("h1").first().textContent();
    await page.reload();
    await expect(page.locator("h1").first()).toHaveText(title!);
    expect(page.url()).toContain(`#${r}`);
  }
  expect(errors, "page errors or CSP violations").toEqual([]);
});

test("plain paths (no #) are served and redirected to the right page", async ({ page }) => {
  for (const [path, heading] of [
    ["/learn/ch1-cia", "The CIA triad"],
    ["/crypto", "Cryptography Lab"],
    ["/exams", "Mock midterm exams"],
  ]) {
    const res = await page.goto(path);
    expect(res!.status()).toBe(200);
    await expect(page.locator("h1").first()).toHaveText(heading);
    expect(page.url()).toContain(`/#${path}`);
  }
});

test("an exam in progress survives a refresh", async ({ page }) => {
  await page.goto("/#/exams");
  await page.getByRole("button", { name: "Start" }).first().click();
  await page.getByRole("button", { name: "Begin exam" }).click();
  await page.locator("article input[type=radio]").first().check();
  await waitForSavedExam(page, { answers: 1 });
  await page.reload();
  await expect(page.getByText("1/22 answered")).toBeVisible();
  await expect(page.getByRole("timer")).toBeVisible();
});

test("security and cache headers are sent", async ({ request }) => {
  const html = await request.get("/");
  expect(html.headers()["content-security-policy"]).toContain("default-src 'self'");
  expect(html.headers()["x-content-type-options"]).toBe("nosniff");
  expect(html.headers()["cache-control"]).toBe("no-cache");
  const page = await request.get("/");
  const js = (await page.text()).match(/assets\/[^"]+\.js/)![0];
  const asset = await request.get(`/${js}`);
  expect(asset.status()).toBe(200);
  expect(asset.headers()["cache-control"]).toContain("immutable");
});

test("course slides and Lab Manual pages are not deployed", async ({ request, page }) => {
  for (const p of ["/sources/l1-5.webp", "/sources/lab-14.webp", "/sources/l3-16.webp"]) {
    const res = await request.get(p);
    expect(res.headers()["content-type"] ?? "").not.toContain("image");
  }
  // Citations still give the exact reference, as text.
  await page.goto("/#/learn/ch1-cia");
  await page.getByRole("button", { name: /Ch 1 · s5/ }).first().click();
  const dialog = page.getByRole("dialog", { name: "Source reference" });
  await expect(dialog).toContainText("Chapter 1 (Lecture 1), slide 5");
  await expect(dialog.locator("img")).toHaveCount(0);
  await expect(page.locator('img[src*="sources/"]')).toHaveCount(0);
});
