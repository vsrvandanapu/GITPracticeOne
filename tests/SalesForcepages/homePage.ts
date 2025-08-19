import { Page, Locator } from '@playwright/test';
import BasePage from "./basePage";
export class HomePage extends BasePage{
    // loactors
    // private readonly page: Page;
    private readonly accoutsTab: Locator;
    private readonly leadsTab: Locator;
    private readonly arrowButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page){
        super(page)
        this.accoutsTab = page.locator('a[title="Accounts Tab"]');
        this.leadsTab = page.locator('a[title="Leads Tab - Selected"]');
        this.arrowButton = page.locator('div[id="userNav-arrow"]');
        this.logoutLink = page.locator('a[title="Logout"]');
    }

    async clickAccountsTab(){
        // This method is used to click the accounts tab.
        await this.clickElement(this.accoutsTab);
    }
    async clickLeadsTab(){
        // This method is used to click the leads tab.
        await this.clickElement(this.leadsTab)
    }
    async clickArrowButton(){
        // This method is used to click the arrow button.
        await this.clickElement(this.arrowButton);
    }   
    async clickLogoutLink(){
        // This method is used to click the logout link.
        await this.clickElement(this.logoutLink);
    }
    async logoutFromTheApplication(){
        // This method is used to perform the logout action by clicking the arrow button and then clicking the logout link.
        await this.clickElement(this.arrowButton);
        await this.clickElement(this.logoutLink);
        // await this.clickArrowButton();
        // await this.clickLogoutLink();
    }
}