import { defineConfig, devices } from "@playwright/test";

// E2E tests run against the production build, served the way Vercel serves it (scripts/serve-vercel.mjs + vercel.json).
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 2,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:4175", trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "node scripts/serve-vercel.mjs",
    url: "http://localhost:4175",
    reuseExistingServer: true,
    timeout: 60_000,
  },
});
