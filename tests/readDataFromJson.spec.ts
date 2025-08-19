// using the Playwright's test frame work
// test : to define the test cases
// expect : To verify something is correct or visible on the screen after performing an action
import { test, expect } from '@playwright/test';
import * as orangeHRMData from './testData/orangeHRMCredentials.json'
test("Login Test with Valid Credentials", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill(orangeHRMData.validUsername);
    await page.locator('input[name="password"]').fill(orangeHRMData.validPasswrod);
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(3000);
    await page.locator('p[class="oxd-userdropdown-name"]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[text()="Logout"]').click();
    await page.waitForTimeout(3000);
})
test("Login Test with Invalid Credentials", async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill(orangeHRMData.InvalidUsername);
    await page.locator('input[name="password"]').fill(orangeHRMData.InvalidPasswrod);
    await page.locator('button[type="submit"]').click()
    await page.waitForTimeout(2000);
    await expect( page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toBeVisible();
    await page.waitForTimeout(3000);
})