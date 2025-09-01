import { Locator, expect } from '@playwright/test';
import { BasePage } from '../helper/base-page';

export class CheckoutPage extends BasePage {
  readonly placeOrderButton: Locator = this.getByTestId('place-order');

  readonly checkOutGrandTotal: Locator = this.getByTestId('sum-grand');

  readonly successfulOrderConfirmationText: Locator =
    this.getByTestId('order-success');

  readonly fullNameField: Locator = this.getByTestId('chk-name');
  readonly emailField: Locator = this.getByTestId('chk-email');
  readonly addressField: Locator = this.getByTestId('chk-address');
  readonly cityField: Locator = this.getByTestId('chk-city');
  readonly postcodeField: Locator = this.getByTestId('chk-postcode');

  readonly emailError: Locator = this.page.getByText(
    'A valid email is required'
  );

  async fillAllValidCheckoutDetails() {
    await this.fullNameField.fill('Abdul Wahid');
    await this.emailField.fill('abdulwahid211@gmail.com');
    await this.addressField.fill('123 Main St');
    await this.cityField.fill('London');
    await this.postcodeField.fill('12345');
  }

  async submitOrder() {
    await this.placeOrderButton.click();
  }

  async expectOrderSuccessfulMessage() {
    await expect(this.successfulOrderConfirmationText).toContainText(
      'Order placed! Reference:'
    );
  }
}
