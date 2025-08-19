import { test } from "@playwright/test";
test("Screeshot demo", async ({ page }) => {
    await page.goto("https://www.amazon.in/");
 
    //Visible page
    // await page.screenshot({ path: 'C:\\Users\\A1\\Desktop\\visiblepage.png', fullPage: false });
    await page.screenshot({ path: 'VisiblePage.png', fullPage: false });
    await page.waitForTimeout(2000);
    //Full Page
    // await page.screenshot({ path: 'C:\\Users\\A1\\Desktop\\fullpage.png', fullPage: true });
    await page.screenshot({ path: 'FullPage.png', fullPage: true });
    // Screenshot of a specific element
      await page.waitForTimeout(2000);
  const heading = page.locator('//h5[text()="Amazon Web Services"]');
  heading.waitFor();
  await page.waitForTimeout(2000);
  // await heading.screenshot({ path: 'C:/Users/A1/Desktop/email.png' });
  await heading.screenshot({ path: 'HeadingElement.jpeg', quality:50 });

    await page.waitForTimeout(5000)
})