import { test } from "@playwright/test";
test("screenshot demo", async ({ page }) => {
  // To capture the screeshot -> page.screenshot() -Visible part or full page
  /*
     1) await page.screenshot({path:'screenshot.png/.jpeg'});
     2) await locator.screenshot({path:'screenshot.png/.jpeg'});
    */
  await page.goto("https://www.amazon.in/");
  await page.waitForTimeout(2000);
  // To capture the visbile page
  await page.screenshot({ path: "visiblepage.png" });
  await page.waitForTimeout(2000);
  // To capture the full page
  await page.screenshot({ path: "entirepage.png", fullPage: true });
  await page.waitForTimeout(2000);
  const link = page.locator('//a[text()="Interest-Based Ads"]');
  await link.waitFor();
  await link.screenshot({ path: "footer.png" });
  await page.waitForTimeout(5000);
});
test("screenshot demo - Specified Path", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.waitForTimeout(2000);
  // To capture the visbile page
  await page.screenshot({ path: "C:\\Users\\A1\\Desktop\\Screenshots\\screen1.png", fullPage:false });
  await page.waitForTimeout(2000);
  const userName = page.locator('input[name="username"]');
  await userName.fill('Radhika'); 
  await page.waitForTimeout(2000);
  await userName.screenshot({ path: "C:/Users/A1/Desktop/Screenshots/hema.jpeg", quality:100 });
  await page.waitForTimeout(5000);
});