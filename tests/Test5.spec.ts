import { chromium, expect, firefox, test } from "@playwright/test";
test('Locator strategy', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('#user-name').fill('standard_user');
    await page.locator("input[id='password']").fill("secret_sauce");
    await page.waitForTimeout(5000);
    // await page.locator('input[id="password"]').fill("secret_sauce");
    await page.locator('//input[@data-test="login-button"]').click()
    await page.waitForTimeout(5000);
    
})


