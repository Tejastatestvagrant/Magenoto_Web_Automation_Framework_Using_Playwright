class CreateAccountPage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("https://magento.softwaretestingboard.com/");
  }

  async clickCreateAccountLink() {
    await this.page.click('a:has-text("Create an Account")');
  }

  async fillRegistrationForm(firstName, lastName, email, password) {
    await this.page.fill('input[name="firstname"]', firstName);
    await this.page.fill('input[name="lastname"]', lastName);
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="password_confirmation"]', password);
  }

  async clickCreateAccountButton() {
    await this.page.click('button:has-text("Create an Account")');
  }

  async checkWelcomeMessage() {
    return await this.page.isVisible('header:has-text("Welcome, test play!")');
  }
}

module.exports = { CreateAccountPage };
