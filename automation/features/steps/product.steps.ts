import { Given, Then, When } from '@cucumber/cucumber';

Given('a product {string} is in stock', async function (productName) {
  await this.product.expectProductStickerPack(productName);
});

Given('the user has added the product to the cart', async function () {
  await this.product.selectStickerPackItem();
});

When('the user reviews the cart', async function () {
  await this.product.expectStickerPackItemCard();
});

Then('the user proceeds to checkout', async function () {
  await this.product.goToCheckOutPage();
});

Then(
  'the user should see the grand total to be {string}',
  async function (total: string) {
    return this.product.expectCartGrandTotal(total);
  }
);
