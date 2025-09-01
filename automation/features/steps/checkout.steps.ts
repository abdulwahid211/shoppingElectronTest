import { Then } from '@cucumber/cucumber';

Then('the user submits the order', async function () {
  await this.checkout.submitOrder();
});

Then('the user fills valid shipping details', async function () {
  await this.checkout.fillAllValidCheckoutDetails();
});

Then('they should see an order successful message', async function () {
  await this.checkout.expectOrderSuccessfulMessage();
});

Then(
  'the order summary reflects the cart grand total which should be {string}',
  async function (total: string) {
    await this.checkout.expectCheckOutGrandTotal(total);
  }
);
