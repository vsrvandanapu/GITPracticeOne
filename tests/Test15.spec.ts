import { test, expect } from "@playwright/test";
test("Single tab Handling - link Click", async ({ page }) => {
  // To load the facebook page
  await page.goto("https://www.facebook.com/");
  // To click on the create new account link
  await page.locator('a[data-testid="open-registration-form-button"]').click();
  // To capture the current page (homepage) title
  const homepageTitle = await page.title();
  console.log("The home page title is " + homepageTitle);
  // To capture the current page (homepage) url
  const homepageUrl = page.url();
  console.log("The  home page URL is : " + homepageUrl);
  await page.waitForTimeout(3000);
  // To click on the Privacy Policy link
  const [newTab] = await Promise.all([
    page.waitForEvent("popup"),
    page.click('a[href="/about/privacy/update"]'),
  ]);
  await newTab.waitForLoadState();
  // To capture the another page (tab) title
  const tabTilte = await newTab.title();
  console.log("The newly opened tab title is : " + tabTilte);
  // To capture the another page (tab) url
  const tabUrl = newTab.url();
  console.log("The newly opened tab URL is : " + tabUrl);
  await page.waitForTimeout(5000);
  // To close the newly opened Tab
  await newTab.close();
  await page.waitForTimeout(5000);
});
test("Single tab Handling - Buton Click", async ({ page }) => {
    // To load the demo page
    await page.goto("https://demo.automationtesting.in/Windows.html");

    await page.waitForTimeout(3000);
    // To click on the Privacy Policy link
    const [newTab] = await Promise.all([
      page.waitForEvent("popup"),
      page.click('button:has-text("click")'),
    ]);
    await newTab.waitForLoadState();
    // To click on the "Downlaods" link in new tab
    newTab.locator('a[href="/downloads"]').click()
    await page.waitForTimeout(2000);
    // To close the newly opened Tab
    await newTab.close();
    await page.waitForTimeout(5000);
});
test("Single Window Handling - Buton Click", async ({ page }) => {
    // To load the demo page
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.waitForTimeout(2000);
    await page.locator('a[href="#Seperate"]').click();
    await page.waitForTimeout(2000);
    // To click on the click button
    const [newWindow] = await Promise.all([
      page.waitForEvent("popup"),
      page.click('button[onclick="newwindow()"]'),
    ]);
    await newWindow.waitForLoadState();
    // To click on the "Downlaods" link in new tab
    newWindow.locator('a[href="/downloads"]').click()
    await page.waitForTimeout(4000);
    // To close the newly opened Tab
    await newWindow.close();
    await page.waitForTimeout(5000);
  });
  test("Multiple Tab Handling - Buton Click", async ({ page }) => {
    // To load the demo page
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.waitForTimeout(2000);
    await page.locator('a[href="#Multiple"]').click();
    await page.waitForTimeout(2000);
    const [multipleTab] = await Promise.all([
      page.waitForEvent('popup'), // This waitss for new window to open
      page.click('button[onclick="multiwindow()"]') // This button triggers the popup
    ])
    const context = page.context();
    await page.waitForTimeout(2000);
    const pages = context.pages();
    /*
      page[0] ->  Original Tab / Home Page
      page[1] -> First Popup / Tab
      page[2] -> Secodn Popup /Tab
    */
   console.log(`Total pages/tabs : ${pages.length}`);
    await page.waitForTimeout(5000);
    await pages[1].waitForLoadState('domcontentloaded');
    await pages[1].bringToFront();
    await pages[1].locator('#email').click();
    await page.waitForTimeout(2000);
    await pages[1].locator('#email').fill('Radhika@gmail.com');
    await page.waitForTimeout(2000);
    await pages[2].waitForLoadState('domcontentloaded');
    await pages[2].bringToFront();
    await page.waitForTimeout(2000);
    await pages[2].locator('a[href="/downloads"]').click();
    await page.waitForTimeout(2000);
    // To close the first Tab (newly Opened first tab)
    await pages[1].close();
    await page.waitForTimeout(2000);
    // To close the second Tab (newly Opened second tab)
    await pages[2].close();
    await page.waitForTimeout(2000);
  });