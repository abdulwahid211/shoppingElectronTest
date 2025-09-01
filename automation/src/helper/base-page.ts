import { Page, Locator, Expect, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyText(selector: Locator, text: string | RegExp, timeout = 15000) {
    const element = selector.first();
    await element.waitFor({ state: 'visible', timeout });
    await expect(element).toContainText(text, { timeout });
  }

  async verifyNotExist(selector: Locator, timeout = 5000) {
    await expect(selector).toHaveCount(0, { timeout });
  }

  getByTestId(id: string): Locator {
    return this.page.getByTestId(id);
  }
}
