import { test, expect } from '@playwright/test';

test('should load Playwright homepage', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
