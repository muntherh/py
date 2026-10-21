import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const ROUTES = ["/", "/learn/lesson-t2-values-types", "/lab?tab=exercises", "/practice", "/exams", "/exams/exam-1", "/sources", "/settings"];

for (const theme of ["dark", "light"] as const) {
  test(`no serious accessibility violations (${theme} theme)`, async ({ page }) => {
    await page.goto("/#/settings");
    await page.getByText(theme === "light" ? "Light" : "Dark", { exact: true }).click();
    for (const r of ROUTES) {
      await page.goto(`/#${r}`);
      await page.locator("main h1").first().waitFor();
      await page.waitForTimeout(400);
      const results = await new AxeBuilder({ page: page as never }).include("main").analyze();
      const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
      expect(serious.map((v) => `${r}: ${v.id} — ${v.help} (${v.nodes.length}) ${v.nodes.slice(0, 3).map((n) => n.target.join(" ") + " :: " + (n.failureSummary ?? "").slice(0, 160)).join(" || ")}`)).toEqual([]);
    }
  });
}

test("keyboard: skip link and visible focus", async ({ page }) => {
  await page.goto("/#/");
  await page.locator("main h1").first().waitFor();
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Tab");
  const outline = await page.evaluate(() => getComputedStyle(document.activeElement!).outlineStyle);
  expect(outline).not.toBe("none");
});
