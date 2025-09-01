import { Page, Locator, Expect, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyText(selector: string, text: string) {
    await expect(this.page.locator(selector)).toContainText(text);
  }

  getByTestId(id: string): Locator {
    return this.page.getByTestId(id);
  }
}
