class InventoryPage {
  get inventoryContainer() {
    return $('#inventory_container');
  }

  get cartLink() {
    return $('.shopping_cart_link');
  }

  get cartBadge() {
    return $('.shopping_cart_badge');
  }

  async getProductCard(productName) {
    const productNames = await $$('.inventory_item_name');

    for (const nameElement of productNames) {
      const name = await nameElement.getText();

      if (name === productName) {
        return nameElement.parentElement().parentElement().parentElement();
      }
    }

    throw new Error(`Product not found: ${productName}`);
  }

  async addProductToCart(productName) {
    const productCard = await this.getProductCard(productName);
    const addButton = await productCard.$('button');

    await addButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

export default new InventoryPage();
