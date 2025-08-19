import { chromium, expect, firefox, test } from "@playwright/test";
test('Google Test', async({page})=>{
    await page.goto("https://www.google.com")
    expect(await page.title()).toEqual("Google");
})

test("To launch a edge browser", async () => {
    const browser = await firefox.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.google.com");
    // expect(await page.title()).toEqual("Google");
    await page.waitForTimeout(5000);
    await  page.close();
    
 })