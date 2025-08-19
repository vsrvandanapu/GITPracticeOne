import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

// ✅ 1. Define an interface for a row of Excel data
interface LoginRow {
  Username: string;
  Password: string;
  ExpectedResult: 'Pass' | 'Fail';
}

// ✅ 2. Function to read Excel and return typed data
function readExcelData(fileName: string, sheetName: string): LoginRow[] {
  const filePath = path.resolve(__dirname, fileName);

  if (!fs.existsSync(filePath)) {
    throw new Error(`❌ Excel file not found at path: ${filePath}`);
  }

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];

  // ✅ Return the Excel data as an array of LoginRow
  return XLSX.utils.sheet_to_json<LoginRow>(worksheet);
}

// ✅ 3. Read test data from Excel
const testData = readExcelData('./testData/LoginData.xlsx', 'Sheet1');

// ✅ 4. Loop over each row and generate a test dynamically
for (const data of testData) {
  // Skip rows with missing values
  if (!data.Username || !data.Password) {
    console.warn('⚠️ Skipping invalid row:', data);
    continue;
  }

  test(`🔐 Login Test - Username: ${data.Username}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // 🔤 Fill in username and password
    await page.locator('[placeholder="Username"]').fill(data.Username);
    await page.locator('[placeholder="Password"]').fill(data.Password);

    // 🖱️ Click the login button
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(2000);

    if (data.ExpectedResult === 'Pass') {
      // ✅ Expect login to succeed
      await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();

      // 🔓 Log out if login is successful
      await page.locator('p[class="oxd-userdropdown-name"]').click();
      await page.waitForTimeout(1000);
      await page.locator('//a[text()="Logout"]').click();
    } else {
      // 🔒 Expect login to fail
      // If login succeeds unexpectedly, throw an error
      if (await page.locator('.oxd-topbar-header-breadcrumb-module').isVisible()) {
        throw new Error('❌ Login was expected to fail, but it succeeded.');
      }

      // Expect the error message to be visible
      await expect(page.locator('.oxd-alert.oxd-alert--error')).toBeVisible();
    }

    await page.waitForTimeout(1000); // Optional wait before next test
  });
}
