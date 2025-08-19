import { test, expect } from "@playwright/test";
test("Frame Handling - Buton Click", async ({ page }) => {
  await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get", {waitUntil:'load'});
// await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
await page.waitForLoadState();
await page.waitForTimeout(2000);
// To find the total frames
const allFrames = page.frames();
console.log("Total iframes are : " + allFrames.length);
// To switch from main page to frame
const frame1 = page.frame({name:'iframeResult'});
 // To click on the 'Try it' button
frame1?.locator('button[onclick="myFunction()"]').click();
 await page.waitForTimeout(5000);
});
test("Frame Handling  Using Page.Frame()", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/", {waitUntil:'load'});
    await page.waitForTimeout(2000);
    const totalFrames = page.frames();
    console.log("Total iframes are : " + totalFrames.length);
    const frameOne = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

    frameOne?.locator('input[name="mytext1"]').fill("Radhika");

   await page.waitForTimeout(5000);
  });
  test("Frame Handling  Using Page.FrameLocator()", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/", {waitUntil:'load'});
    await page.waitForTimeout(2000);
    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    await frame2?.locator('input[name="mytext2"]').fill('Hema');
   await page.waitForTimeout(5000);
  });
  // test("Nested Frame Handling  Using using Child Frames)", async ({ page }) => {
  //   await page.goto("https://ui.vision/demo/webtest/frames/", {waitUntil:'load'});
  //   await page.waitForTimeout(2000);
  //  const frameThree = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
  //  const childFrames = frameThree?.childFrames();
  //  console.log("Total child frames are : " + childFrames?.length);
  //  childFrames[0].locator('#i6').click();
  //  await page.waitForTimeout(5000);
  // });
  test("Printing the total iframes - for of loop[", async ({ page }) => {
    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get", {waitUntil:'domcontentloaded'});
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(2000);
  // To get all frames (including main/root frame)
    const totalIframes = page.frames();
    // console.log("Main frame is : " + page.mainFrame());
    const mainFrame = page.mainFrame();
    console.log("Main frame URL: " + mainFrame.url());
    console.log("Main frame Name: " + mainFrame.name());
  //   const iframeCount = totalIframes.length - 1; // exluding the main frame / root frame
  // console.log("Total iframes found : " + iframeCount);
  // for(const frame of totalIframes){
  //   // To skip the main frame
  //   if(frame === page.mainFrame())
  //   {
  //       continue;
  //   }
  //   const name = frame.name(); // name attribute of the iframe
  //   const url = frame.url(); // src url of the iframe
  //   console.log('------iframe information-------------');
  //   console.log(`Name : ${name || 'No name '}`);
  //   console.log(`URL : ${url || 'No URL '}`);
  // }
   await page.waitForTimeout(5000);
  });