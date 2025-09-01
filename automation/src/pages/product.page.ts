import { Locator, expect } from '@playwright/test';
import { BasePage } from '../helper/base-page';

export class ProductPage extends BasePage {
  readonly checkoutBtn: Locator = this.getByTestId('nav-checkout');
  readonly productStickerPack: Locator = this.getByTestId('product-sku-stickers');
  readonly productStickerPackAddButton: Locator = this.getByTestId('add-sku-stickers');
  readonly productStickerPackText: Locator = this.page.locator(
    '[data-testid="product-sku-stickers"] div.title'
  );
  readonly cartGrandTotal: Locator = this.getByTestId('grand');

  readonly orderSummary: Locator = this.page.locator('#summary-items');
  readonly emailError: Locator = this.page.getByText('A valid email is required');

  readonly productStickerPackCartItem: Locator = this.getByTestId('cart-row-sku-stickers');

  async expectProductStickerPack(title: string) {
    await expect(this.productStickerPackText).toHaveText(title);
  }

  async selectStickerPackItem() {
    // await this.page.waitForTimeout(4000); // debugging
    await this.productStickerPackAddButton.click();
  }

  async expectCartGrandTotal(total: string) {
    await this.verifyText(this.cartGrandTotal, new RegExp(total, 'i'));
  }

  async goToCheckOutPage() {
    //    await this.page.waitForTimeout(4000); // debugging
    await this.checkoutBtn.click();
  }

  async expectStickerPackItemCard() {
    await this.verifyText(this.productStickerPackCartItem, 'Sticker Pack');
  }
}
