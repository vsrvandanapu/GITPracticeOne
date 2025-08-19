import { Page, Locator } from "@playwright/test";
import BasePage from "./basePage";
export class HomePage extends BasePage{
//   private readonly page: Page;
  private readonly userdropdown: Locator;
  private readonly logoutLink: Locator;
  private readonly leaveSidePanel: Locator;

  constructor(page: Page) {
    super(page)
    this.userdropdown = page.locator('span[class="oxd-userdropdown-tab"]');
    this.logoutLink = page.locator('a[href="/web/index.php/auth/logout"]');
    this.leaveSidePanel = page.locator('//span[text()="Leave"]');
  }


  async logoutFromTheApplication() {
    await this.clickElement(this.userdropdown)
    await this.clickElement(this.logoutLink);
    // await this.userdropdown.click({timeout:2000});
    // await this.logoutLink.click({timeout:2000});
    
  }
  async clickLeaveInSidePanel(){
    await this.clickElement(this.leaveSidePanel)
    // await this.leaveSidePanel.click();
  }
}

/*
import { Page, Locator } from "@playwright/test";
export class HomePage {
  private readonly page: Page;
  private readonly userdropdown: Locator;
  private readonly logoutLink: Locator;
  private readonly leaveSidePanel: Locator;

  constructor(page: Page) {
    this.userdropdown = page.locator('span[class="oxd-userdropdown-tab"]');
    this.logoutLink = page.locator('a[href="/web/index.php/auth/logout"]');
    this.leaveSidePanel = page.locator('//span[text()="Leave"]');
  }

  async logoutFromTheApplication() {
    await this.userdropdown.click({timeout:2000});
    await this.logoutLink.click({timeout:2000});
    
  }
  async clickLeaveInSidePanel(){
    await this.leaveSidePanel.click();
  }
}*/