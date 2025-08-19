import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";
export class LoginPage extends BasePage {
  // This class is used to define the locators and methods for the login page
  // of the application. It contains locators for username, password, and login button.
  // readonly page: Page;
  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameTextbox = page.locator('input[name="username"]');
    this.passwordTextbox = page.locator('input[name="pw"]');
    this.loginButton = page.locator('input[value="Log In"]');
  }

  async enterUsername(usernameValue: string) {
    await this.enterValuesInElement(this.usernameTextbox, usernameValue);
  }

  async enterPassword(passwordValue: string) {
    // This method is used to enter the password in the password textbox.
    await this.enterValuesInElement(this.passwordTextbox, passwordValue);
  }
  async clickLoginButton() {
    // This method is used to click the login button.
    await this.clickElement(this.loginButton);
  }
  async login(usernameValue: string, passwordValue: string) {
    // This method is used to perform the login action by entering the username and password
    // and clicking the login button.
    await this.enterValuesInElement(this.usernameTextbox, usernameValue);
    await this.enterValuesInElement(this.passwordTextbox, passwordValue);
    await this.clickElement(this.loginButton);
  }
}