class CheckoutPage {
  get firstNameInput() {
    return $('#first-name');
  }

  get lastNameInput() {
    return $('#last-name');
  }

  get postalCodeInput() {
    return $('#postal-code');
  }

  get continueButton() {
    return $('#continue');
  }

  get finishButton() {
    return $('#finish');
  }

  get completeHeader() {
    return $('.complete-header');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  async fillCustomerInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.waitForClickable();
    await this.finishButton.click();
  }

  async expectSuccessfulCheckout() {
    await expect(this.completeHeader).toBeDisplayed();
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}

export default new CheckoutPage();
