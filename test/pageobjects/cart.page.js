class CartPage {
  get cartItems() {
    return $$('.cart_item');
  }

  get checkoutButton() {
    return $('#checkout');
  }

  async getProductNames() {
    const productElements = await $$('.inventory_item_name');
    const productNames = [];

    for (const productElement of productElements) {
      productNames.push(await productElement.getText());
    }

    return productNames;
  }

  async expectProductPresent(productName) {
    const productNames = await this.getProductNames();

    await expect(productNames).toContain(productName);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
