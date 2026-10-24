import type { Page } from "@playwright/test";

/** Wait until the latest exam attempt is saved in IndexedDB (persistence is asynchronous). */
export async function waitForSavedExam(page: Page, expected: { answers: number; flagged?: number }) {
  await page.waitForFunction(
    (exp) =>
      new Promise<boolean>((resolve) => {
        const req = indexedDB.open("cssy1208-midterm-academy");
        req.onsuccess = () => {
          const get = req.result.transaction("state").objectStore("state").get("isma-exams");
          get.onsuccess = () => {
            const a = get.result ? JSON.parse(get.result).state.attempts[0] : null;
            resolve(!!a && Object.keys(a.answers).length === exp.answers && (exp.flagged === undefined || a.flagged.length === exp.flagged));
          };
          get.onerror = () => resolve(false);
        };
        req.onerror = () => resolve(false);
      }),
    expected,
  );
}
