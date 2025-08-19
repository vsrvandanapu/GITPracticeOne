import { Page, Locator } from "@playwright/test";
export default class BasePage {
    readonly page:Page;
    constructor(page:Page){
        this.page= page;
    }

    // common methods to navigate to a url
    async navigateTo(url:string){
        await this.page.goto(url);
    }

    // To click an element
    async clickElement(element:Locator){
        await element.click();
    }
    // To fill the value in an element
    async enterValuesInElement(element:Locator, valuesToEnter:string){
        await element.fill(valuesToEnter)
    }
    async waitForElementToBeVisible(element:Locator | string){
        if(typeof element === 'string'){
            await this.page.waitForSelector(element, {state:'visible'})
        }
        else{
            await element.waitFor({state:'hidden'})
        }
    }
    // To capture the screen shot
    async takeScreenshot(fileName: string){
        await this.page.screenshot({path:fileName})
    }
}