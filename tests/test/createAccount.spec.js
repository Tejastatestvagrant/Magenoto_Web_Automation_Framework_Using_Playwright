const { test, expect } = require("@playwright/test");
const { CreateAccount } = require("../pages/CreateAccount.page.js");

test("Test Account Creation", async ({ page }) => {
  const CreateAccount = new CreateAccount(page);

  await CreateAccount.visit();
  await CreateAccount.clickCreateAccountLink();
  await CreateAccount.fillRegistrationForm(
    "test",
    "play",
    "testplay123@gmail.com",
    "TestPlay@123"
  );
  await CreateAccount.clickCreateAccountButton();

  const isWelcomeMessageVisible = await CreateAccount.checkWelcomeMessage();
  await expect(isWelcomeMessageVisible).toBe(true);
});
