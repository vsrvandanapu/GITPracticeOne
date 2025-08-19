import { test, expect } from "@playwright/test";
test("Type the values in a textbox", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('input[name="username"]').type("Hema");
  await page.waitForTimeout(2000);
  await page.locator('input[name="username"]').clear();
  await page.waitForTimeout(2000);
  await page.locator('input[name="username"]').fill("Admin");
  await page.waitForTimeout(2000);
  await page.locator('input[name="password"]').fill('admin123', {force:true})
  await page.waitForTimeout(5000);
});
test("Press Sequentially method", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('input[name="username"]').pressSequentially("Admin");
  await page.waitForTimeout(2000);
  await page.locator('input[name="password"]').pressSequentially('admin123');
  await page.waitForTimeout(2000);
  await page.locator('input[name="password"]').press('Enter')
  await page.waitForTimeout(5000);
});
test("Press - Sequentially method with delay", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('input[name="username"]').pressSequentially("Admin",{delay:1000});
  await page.waitForTimeout(2000);
  await page.locator('input[name="password"]').pressSequentially('admin123',{delay:1000});
  await page.waitForTimeout(2000);
  await page.locator('input[name="password"]').press('Enter')
  await page.waitForTimeout(5000);
});
