import { Then, When } from '@cucumber/cucumber';

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

When(
  'the user fills the shipping form with all valid details except an invalid email {string}',
  async function (email: string) {
    await this.checkout.fillAllValidCheckoutDetailsExceptEmail(email);
  }
);

Then('they should see the error message {string}', async function (message: string) {
  await this.checkout.expectInvalidErrorMessage(message);
});

Then('the order should not be submitted', async function () {
  // Write code here that turns the phrase above into concrete actions
});
