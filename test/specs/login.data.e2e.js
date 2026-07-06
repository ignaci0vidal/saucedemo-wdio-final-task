import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

const loginCases = [
  {
    username: 'standard_user',
    password: 'secret_sauce',
    shouldLogin: true,
  },
  {
    username: 'locked_out_user',
    password: 'secret_sauce',
    shouldLogin: false,
    expectedError: 'Epic sadface: Sorry, this user has been locked out.',
  },
  {
    username: 'invalid_user',
    password: 'wrong_password',
    shouldLogin: false,
    expectedError:
      'Epic sadface: Username and password do not match any user in this service',
  },
];

describe('SauceDemo data-driven login', () => {
  for (const testCase of loginCases) {
    it(`should validate login for ${testCase.username}`, async () => {
      await LoginPage.open();

      await LoginPage.login(testCase.username, testCase.password);

      if (testCase.shouldLogin) {
        await expect(InventoryPage.inventoryContainer).toBeDisplayed();

        await expect(browser).toHaveUrl(
          expect.stringContaining('inventory.html'),
        );
      } else {
        await expect(LoginPage.errorMessage).toBeDisplayed();

        await expect(LoginPage.errorMessage).toHaveText(testCase.expectedError);
      }
    });
  }
});
