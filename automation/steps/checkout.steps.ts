import { Given, When, Then, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import assert from 'assert';

let browser: Browser;
let page: Page;

Given('I open the Google homepage', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.google.com');
});

When('I search for {string}', async function (searchQuery: string) {
  await page.fill("input[name='q']", searchQuery);
  await page.press("input[name='q']", 'Enter');
});

Then(
  'I should see results related to {string}',
  async function (expected: string) {
    const content = await page.textContent('body');
    assert(content && content.includes(expected));
  }
);

AfterAll(async () => {
  await browser.close();
});
