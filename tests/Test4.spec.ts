import {firefox, test} from '@playwright/test'
test("Verify Login", async () => {
    // To launch the browser
    // const browser = await firefox.launch({headless:false})
    const browser = await firefox.launch()
    
    // To get the browser new context
    const browserContext = await browser.newContext();
    // To get a new page
    const page = await browserContext.newPage();
    await page.pause()
    // Load the https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Username').fill("Admin");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder("Password").fill("admin123");
    await page.waitForTimeout(2000);
    await page.locator("button[type='submit']").click()
    // await page.waitForTimeout(5000);
    // await page.pause()
})
