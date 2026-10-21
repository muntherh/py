import { expect, type Locator, type Page } from "@playwright/test";

/** Replace the contents of a CodeMirror editor without auto-indent/bracket side effects. */
export async function setEditor(page: Page, editor: Locator, code: string) {
  await editor.locator(".cm-content").click();
  await page.keyboard.press("ControlOrMeta+a");
  await page.keyboard.press("Delete");
  await page.keyboard.insertText(code);
}

export async function waitForPython(page: Page) {
  await expect(page.getByTestId("runtime-badge").first()).toHaveAttribute("data-state", /ready|idle/, { timeout: 90_000 });
}

export function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(`console: ${m.text()}`);
  });
  return errors;
}
