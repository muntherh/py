import { expect, test } from "@playwright/test";

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "laptop", width: 1280, height: 800 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "iphone", width: 390, height: 844 },
];
const ROUTES = ["/", "/learn/lesson-t3-elif", "/lab", "/practice", "/exams", "/sources", "/results"];

for (const vp of VIEWPORTS) {
  test(`no horizontal overflow on ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    for (const r of ROUTES) {
      await page.goto(`/#${r}`);
      await page.locator("main h1").first().waitFor();
      await page.waitForTimeout(350);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow, `${r} overflows by ${overflow}px`).toBeLessThanOrEqual(1);
    }
    await page.goto("/#/");
    await page.screenshot({ path: `test-results/screens/${vp.name}-dashboard.png`, fullPage: false });
  });
}

test("phone tab bar and More sheet navigate", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/#/");
  const tabs = page.getByRole("navigation", { name: "Tab bar" });
  await tabs.getByRole("link", { name: "Exams" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Six timed practice exams" })).toBeVisible();
  await tabs.getByRole("button", { name: "More pages" }).click();
  await page.getByRole("dialog", { name: "More pages" }).getByRole("link", { name: "Settings" }).click();
  await expect(page.getByRole("heading", { level: 1, name: "Preferences" })).toBeVisible();
  await expect(page.getByRole("dialog", { name: "More pages" })).toHaveCount(0);
});
