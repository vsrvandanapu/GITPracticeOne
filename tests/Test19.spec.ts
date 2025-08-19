import { test, expect } from '@playwright/test';

test.beforeEach("Before Each Hook", async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill("Admin");
  await page.locator('input[name="password"]').fill('admin123')
  await page.locator('button[type="submit"]').click()
  await page.waitForTimeout(3000);
});
test.afterEach("After Each Hook", async ({page}) => {
  await page.waitForTimeout(3000);
  await page.locator('p[class="oxd-userdropdown-name"]').click();
  await page.waitForTimeout(3000);
  await page.locator('//a[text()="Logout"]').click();
  await page.waitForTimeout(3000);
});

test('Admin Module Test', async ({ page }) => {
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
  await page.waitForTimeout(3000);
 
});

test('PIM Module Test', async ({ page }) => {
  await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
  await page.waitForTimeout(3000);

  });

  test('Leave Module', async ({ page }) => {
  await page.locator('a[href="/web/index.php/leave/viewLeaveModule"]').click();
  await page.waitForTimeout(3000);
  });