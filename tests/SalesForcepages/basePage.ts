import { Page, Locator } from "@playwright/test";
export default class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  // Common method to navigate to a URL
  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.takeScreenshot(`navigateTo-${Date.now()}.png`);
  }

  // Common method to click an element
  async clickElement(element: Locator, actionName: string = "click") {
    await element.click();
    await this.takeScreenshot(`click-${actionName}-${Date.now()}.png`);
  }

  // Common method to fill out an element
  async enterValuesInElement(element: Locator, valuesToEnter: string, fieldName: string = "input" ) {
    await element.fill(valuesToEnter);
    await this.takeScreenshot(`fill-${fieldName}-${Date.now()}.png`);
  }

  // Common method to retrieve text from an element
  async getElementText(element: Locator): Promise<string> {
    return element.innerText();
  }

  // Common method to wait for an element to be visible
  async waitForElementVisible(element: Locator | string) {
    if (typeof element === "string") {
      await this.page.waitForSelector(element, { state: "visible" });
    } else {
      await element.waitFor({ state: "visible" });
    }
  }

  // Common method to wait for an element to be hidden
  async waitForElementHidden(element: Locator) {
    if (typeof element === "string") {
      await this.page.waitForSelector(element, { state: "hidden" });
    } else {
      await element.waitFor({ state: "hidden" });
    }
  }

  // Common method to take a screenshot
  async takeScreenshot(fileName: string) {
    await this.page.screenshot({path: `screenshots/${fileName}`,
      fullPage: true,
    });
  }
}
