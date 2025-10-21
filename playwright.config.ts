import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  reporter: [
    ['list'],
    ['junit', { outputFile: 'results.xml' }]
  ],
  use: {
    ...devices['Desktop Chrome'],
    headless: true,
  },
});
