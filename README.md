# SauceDemo WebDriverIO Final Task

## Task Description

### "End-to-End" Flow

**Focus:** Happy path execution and checkout logic.

**Launch URL:** https://www.saucedemo.com/

### UC-1 Checkout Flow

- Login with `standard_user`.
- Add a specific product to the cart.
- Navigate to the cart and validate that the item is present.
- Proceed to checkout.
- Fill in the information form:
  - First name
  - Last name
  - ZIP code
- Complete the checkout.
- Validate the success message:
  - `Thank you for your order!`

### UC-2 Data-Driven Login

The login flow is tested with:

- `standard_user`: successful login.
- `locked_out_user`: login rejected with the expected error message.
- Invalid credentials: login rejected with the expected error message.

## Technical Requirements

- WebDriverIO
- JavaScript
- Mocha
- Page Object Model
- CSS selectors
- Chrome and Microsoft Edge
- Parallel execution
- Allure Report
- Screenshots on test failure

## Project Structure

```text
test/
├── pageobjects/
│   ├── page.js
│   ├── login.page.js
│   ├── inventory.page.js
│   ├── cart.page.js
│   └── checkout.page.js
└── specs/
    ├── checkout.e2e.js
    └── login.data.e2e.js
```

## Installation

```bash
npm install
```

## Run Tests

```bash
npx wdio run ./wdio.conf.js
```

## Generate Allure Report

```bash
npx allure generate allure-results --clean
```

## Open Allure Report

```bash
npx allure open
```

## Test Results

The automated suite contains:

- 1 checkout test
- 3 data-driven login tests
- Execution in Chrome and Microsoft Edge
- 8 total test executions

Current result:

```text
8 passed
100% successful
```
