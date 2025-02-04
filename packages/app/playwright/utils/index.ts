/* eslint-disable no-empty-pattern */
import type { BrowserContext } from '@playwright/test';
import { test as base, chromium } from '@playwright/test';
import path from 'path';

const pathToExtension = path.join(__dirname, '../../dist-crx');

export const test = base.extend<{
  extensionId: string;
}>({
  extensionId: async ({ context }, use) => {
    let [background] = context.serviceWorkers();
    if (!background) background = await context.waitForEvent('serviceworker');

    const extensionId = background.url().split('/')[2];
    await use(extensionId);
  },
});

let context: BrowserContext;

test.beforeAll(async () => {
  context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
});

test.use({
  context: ({}, use) => {
    use(context);
  },
});
