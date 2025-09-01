import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

import path from 'path';
import {
  test,
  expect,
  _electron as electron,
  ElectronApplication,
} from '@playwright/test';
import { assert } from 'console';

let app: ElectronApplication; // <-- declare it
let win: Page;

Given('a product {string} is in stock', async (s: string) => {
  const entry = path.resolve(process.cwd(), '../shopping-electron/app/main.js');

  app = await electron.launch({ args: [entry] });
  win = await app.firstWindow();
  await win.waitForLoadState('domcontentloaded');
});

When('apple is red', async () => {
  await win.getByTestId('go-checkout').click(); 
});

Then('it should work', async () => {
  const actualText = await win.locator('#summary-items').allInnerTexts();
  await expect(actualText).toEqual(['Your cart is empty.']);
});

AfterAll(async () => {
  await win.close();
  await app.close();
});

/// to run npx cucumber-js
