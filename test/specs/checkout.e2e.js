import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('SauceDemo checkout flow', () => {
  it('should complete a purchase successfully', async () => {
    await LoginPage.open();

    await LoginPage.login('standard_user', 'secret_sauce');

    await expect(InventoryPage.inventoryContainer).toBeDisplayed();

    await InventoryPage.addProductToCart('Sauce Labs Backpack');

    await expect(InventoryPage.cartBadge).toHaveText('1');

    await InventoryPage.openCart();

    await CartPage.expectProductPresent('Sauce Labs Backpack');

    await CartPage.checkout();

    await CheckoutPage.fillCustomerInformation('Ignacio', 'Vidal', '1426');

    await CheckoutPage.finishCheckout();

    await CheckoutPage.expectSuccessfulCheckout();
  });
});
