import { test, expect } from '@playwright/test';

test('Download PDF after generating', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html');

  const downloadLink = page.locator('//a[@type="button" and text()="Download"]');
  await expect(downloadLink).toBeVisible();
  const download = await Promise.all([
    page.waitForEvent('download'),
    await downloadLink.click()
  ]).then(results => results[0]); // Extract the download object
  await page.waitForTimeout(2000); 

   // save with the original suggested  fileName 
   await download.saveAs(download.suggestedFilename());
  // save with the custom fileName 
//   await download.saveAs('Hema.pdf');
//   console.log('Downloaded file ', download.path());
  await page.waitForTimeout(5000); 
});

test('Download Text File', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/FileDownload.html');
    const textbox = page.locator('textarea[id="textbox"]');
    await expect(textbox).toBeVisible();
    await textbox.click();
    await page.waitForTimeout(2000); 
    await textbox.pressSequentially('Welcome to the Playwright session');
    await page.waitForTimeout(2000); 
    // To click on the generate file button
    await page.locator('button[id="createTxt"]').click();
    await page.waitForTimeout(2000); 

   const download = await Promise.all([
    page.waitForEvent('download'),
    await page.locator('a[id="link-to-download"]').click()
   ])
   await download[0].saveAs(download[0].suggestedFilename());
    await page.waitForTimeout(5000); 
  });

  test('Upload single File', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('input[type="file"]').click()
    ])
    await uploadFile[0].setFiles(['filesToUpload/playwright_1.png']);
    await page.waitForTimeout(5000); 
});
test('Upload multiple Files - Approach 1', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('input[type="file"]').click()
    ])
    await uploadFile[0].setFiles(['filesToUpload/playwright_1.png','filesToUpload/playwright_2.png']);
    await page.waitForTimeout(5000); 
});
test('Upload multiple Files - Approach 2', async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.waitForTimeout(2000);
    await page.setInputFiles('input[type="file"]', ['filesToUpload/playwright_1.png','filesToUpload/playwright_2.png'])
    await page.waitForTimeout(5000); 
});