import { chromium, test } from "@playwright/test";
test('To launch a browser using browser contexts', async()=>{
    const browser = await chromium.launch({headless:false, channel:"chrome"});
    const browserContext1 = await browser.newContext();
    const browserContext2 = await browser.newContext();

    const page1 = await browserContext1.newPage();
    const page2 = await browserContext2.newPage();

   
    page1.goto("https://login.salesforce.com/?locale=in");
    page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page1.waitForTimeout(5000);
    await page2.waitForTimeout(5000);
})
