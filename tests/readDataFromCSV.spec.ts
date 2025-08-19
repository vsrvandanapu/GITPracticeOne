import { test, expect } from '@playwright/test';
import fs from "fs";
import path from 'path';
import { parse } from "csv-parse/sync";

const orangeHRMData = parse(fs.readFileSync(path.join(__dirname, 'testData', 'orangeHRMCreds.csv')),{
  columns:true,
  skip_empty_lines:true
})
test('Login test with valid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForLoadState();
    await page.waitForTimeout(2000);
    await page.locator('[placeholder="Username"]').fill(orangeHRMData[0].username);
    await page.locator('[placeholder="Password"]').fill(orangeHRMData[0].password);
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(2000)
    await page.locator('.oxd-userdropdown').click();
    await page.waitForTimeout(2000)
    await page.locator('text=Logout').click();
    await page.waitForTimeout(3000)
  });
  test('Login test with invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForLoadState()
    await page.waitForTimeout(2000);
    await page.locator('[placeholder="Username"]').fill(orangeHRMData[1].username);
    await page.locator('[placeholder="Password"]').fill(orangeHRMData[1].password);
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(2000);
    await expect( page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')).toBeVisible();
    await page.waitForTimeout(3000);
  });