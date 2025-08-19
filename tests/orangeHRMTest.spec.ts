import { test } from "@playwright/test";
import * as orangeHRMData from './testData/orangeHRMCredentials.json'
import {LoginPage} from './pages/loginPage.ts'
import { HomePage } from "./pages/homePage.ts";
test('Oragne HRM Login- TC1', async ({page}) => {
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const loginPage = new LoginPage(page);
    loginPage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await loginPage.enterUsername(orangeHRMData.validUsername);
    await loginPage.enterPassword(orangeHRMData.validPasswrod);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
})
test('Oragne HRM Login-Logout TC2', async ({page}) => {
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const loginPage = new LoginPage(page);
     loginPage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await loginPage.enterUsername(orangeHRMData.validUsername);
    await loginPage.enterPassword(orangeHRMData.validPasswrod);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
    const homePage = new HomePage(page);
    homePage.logoutFromTheApplication();
    await page.waitForTimeout(3000);
})
test('Oragne HRM - Leave Page TC3', async ({page}) => {
    const loginPage = new LoginPage(page);
     loginPage.navigateTo('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await loginPage.enterUsername(orangeHRMData.validUsername);
    await loginPage.enterPassword(orangeHRMData.validPasswrod);
    await loginPage.clickLoginButton();
    await page.waitForTimeout(3000);
    const homePage = new HomePage(page);
    homePage.clickLeaveInSidePanel();
    await page.pause();
})
