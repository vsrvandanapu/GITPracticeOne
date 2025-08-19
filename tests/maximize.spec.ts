import {  test } from "@playwright/test";
test.only('Browser Window maximize', async({browser})=>{
    
    const context = await browser.newContext({
        viewport:{width:1500, height:800}
        // viewport:{width:1552, height:840}
        // viewport:{width:1920, height:980}
    });
    const  page = await context.newPage();
    await page.goto("https://www.computechis.in")
    await page.waitForLoadState();
    await page.waitForTimeout(5000);
    
})