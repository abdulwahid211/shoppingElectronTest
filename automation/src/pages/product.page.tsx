import { Locator, expect } from '@playwright/test';
import { BasePage } from '../helper/base-page';

export class ProductPage extends BasePage {
  readonly checkoutBtn: Locator = this.getByTestId('go-checkout');
  readonly productStickerPack: Locator = this.getByTestId(
    'product-sku-stickers'
  );

  readonly productStickerPackAddButton: Locator =
    this.getByTestId('add-sku-stickers');

  readonly productStickerPackText: Locator = this.page.locator(
    '[data-testid="product-sku-stickers"] div.title'
  );

  readonly cartGrandTotal: Locator = this.getByTestId('grand');

  // Other UI
  readonly orderSummary: Locator = this.page.locator('#summary-items');
  readonly emailError: Locator = this.page.getByText(
    'A valid email is required'
  );

  readonly productStickerPackCartItem: Locator = this.getByTestId(
    'cart-row-sku-stickers'
  );

  async selectStickerPactItem() {
    await this.productStickerPackAddButton.click();
  }

  async expectCartGrandTotal(total: string) {
    await expect(this.cartGrandTotal).toHaveText(total);
  }

  async goToCheckOutPage() {
    await this.checkoutBtn.click();
  }

  async expectStickerPactItemCard() {
    await expect(this.productStickerPackCartItem).toContainText('Sticker Pack');
  }
}
