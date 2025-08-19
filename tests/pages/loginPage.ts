import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage.ts"

export class LoginPage extends BasePage{
  // readonly page: Page;
  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page)
    this.usernameTextbox = page.locator('input[name="username"]');
    this.passwordTextbox = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async enterUsername(usernameValue:string){
    await this.enterValuesInElement(this.usernameTextbox, usernameValue)
    // await this.usernameTextbox.fill(usernameValue)
  }
   async enterPassword(passwordValue:string){
     await this.enterValuesInElement(this.passwordTextbox, passwordValue)
    // await this.passwordTextbox.fill(passwordValue)
  }
  async clickLoginButton(){
    await this.clickElement(this.loginButton)
    // await this.loginButton.click();
  }
}
/*
import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly usernameTextbox: Locator;
  private readonly passwordTextbox: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.usernameTextbox = page.locator('input[name="username"]');
    this.passwordTextbox = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async enterUsername(usernameValue:string){
    await this.usernameTextbox.fill(usernameValue)
  }
   async enterPassword(passwordValue:string){
    await this.passwordTextbox.fill(passwordValue)
  }
  async clickLoginButton(){
    await this.loginButton.click();
  }
}
  */