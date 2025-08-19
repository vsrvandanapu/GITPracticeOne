import { test } from "@playwright/test";
import { LoginPage } from "./SalesForcepages/loginPage.ts";
import { HomePage } from "./SalesForcepages/homePage.ts";
import * as salesForceData from './testData/salesForceCredentials.json'

let loginPage : LoginPage;
let homePage : HomePage;
test.beforeEach(async ({page}) =>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.navigateTo("https://login.salesforce.com/?locale=in")
    await loginPage.login(salesForceData.validUsername, salesForceData.validPassword);
      await page.waitForTimeout(2000);
})
test.afterEach(async ({page}) =>{
    homePage = new HomePage(page);
      await page.waitForTimeout(2000);
    await homePage.logoutFromTheApplication();
   console.log("Logout completed after test");
})
test("Verify Home Page title", async ({ page }) => {
   const title = await page.title();
   console.log("Page title : ", title);
  await page.waitForTimeout(2000);
});

test("Verify Home Page url", async ({ page }) => {
   const url = await page.url();
   console.log("Page url : ", url);
  await page.waitForTimeout(2000);
});

/*
test("SalesForceLogin- TC1", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo("https://login.salesforce.com/?locale=in");
  await loginPage.enterUsername(salesForceData.validUsername);
  await loginPage.enterPassword(salesForceData.validPassword);
  await loginPage.clickLoginButton();
  await page.waitForTimeout(2000);
});

test("SalesForceLogin and Logout- TC2", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.navigateTo("https://login.salesforce.com/?locale=in");
  await loginPage.enterUsername("srinivas@cisolutions.com");
  await loginPage.enterPassword("Selenium@1");
  await loginPage.clickLoginButton();
  await page.waitForTimeout(2000);
  await homePage.clickArrowButton();
  await homePage.clickLogoutLink();
  await page.waitForTimeout(2000);
});
*/