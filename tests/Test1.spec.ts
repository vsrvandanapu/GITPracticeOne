import { chromium, firefox, test} from "@playwright/test"
// test.only("To launch a edge browser", async () => {
//     // To launch a browser -> To create a browser instance
//    const browser = await chromium.launch({headless:false, channel:'msedge'});
//    // Get the browser context
//    const browserContext = await browser.newContext();
//    // Get a new Page
//    const page = await browserContext.newPage();
//    // Load the url
//    await page.goto("https://www.gmail.com");

//    await page.waitForTimeout(10000);
// })

test("To launch a chrome browser", async () => {
    // To launch a browser -> To create a browser instance
   const browser = await chromium.launch({headless:false, channel:'chrome'});
   // Get the browser context
   const browserContext = await browser.newContext();
   // Get a new Page
   const page = await browserContext.newPage();
   // Load the url
   await page.goto("https://www.gmail.com");

   await page.waitForTimeout(10000);
})
test("To launch a firefox browser", async () => {
    // To launch a browser -> To create a browser instance
   const browser = await firefox.launch();
   // Get the browser context
   const browserContext = await browser.newContext();
   // Get a new Page
   const page = await browserContext.newPage();
   // Load the url
   await page.goto("https://www.facebook.com");

   await page.waitForTimeout(5000);
})
/*
test("To launch a firefox browser", async () => {
    // To launch a browser -> To create a browser instance
   const browser = await firefox.launch();
   // Get the browser context
   const browserContext = await browser.newContext();
   // Get a new Page
   const page = await browserContext.newPage();
   // Load the url
   await page.goto("https://www.facebook.com");

   await page.waitForTimeout(5000);
})*/