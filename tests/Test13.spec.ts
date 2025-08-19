import { test,expect } from "@playwright/test";
test('General alert handling - OK button', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);
    page.on("dialog", async(alert)=>{
        const alertMessge = alert.message();
        console.log("The alert message is : " + alertMessge);
        console.log("Type of alert  : " +alert.type());
        await page.waitForTimeout(2000);
        expect(alertMessge).toEqual('I am a JS Alert');
        await page.waitForTimeout(2000);
        // To handle the alert message -> To click on OK button
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
        await page.waitForTimeout(2000);
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.waitForTimeout(3000);
})
test('Confirm alert handling - OK button', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);
    page.on("dialog", async(alert)=>{
        const alertMessge = alert.message();
        console.log("The alert message is : " + alertMessge);
        console.log("Type of alert  : " +alert.type());
        await page.waitForTimeout(2000);
        expect(alertMessge).toEqual('I am a JS Confirm');
        await page.waitForTimeout(2000);
        // To handle the Confirmation alert message -> To click on OK button
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You clicked: Ok');
        await page.waitForTimeout(2000);
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.waitForTimeout(3000);
})
test('Confirm alert handling - Cancel button', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);
    page.on("dialog", async(alert)=>{
        const alertMessge = alert.message();
        console.log("The alert message is : " + alertMessge);
        console.log("Type of alert  : " +alert.type());
        await page.waitForTimeout(2000);
        expect(alertMessge).toEqual('I am a JS Confirm');
        await page.waitForTimeout(2000);
        // To handle the Confiramtion alert message -> To click on OK button
        await alert.dismiss();
        await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
        await page.waitForTimeout(2000);
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await page.waitForTimeout(3000);
})
test('Prompt alert handling - OK  button', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);
    page.on("dialog", async(dialog)=>{
        const alertMessge = dialog.message();
        console.log("The alert message is : " + alertMessge);
        console.log("Type of alert  : " +dialog.type());
        await page.waitForTimeout(2000);
        expect(alertMessge).toEqual('I am a JS prompt');
        // await page.waitForTimeout(2000);
        // To handle the Prompt alert message -> To click on OK button
        await dialog.accept("Radhika")
        await page.waitForTimeout(2000);
        await expect(page.locator('#result')).toHaveText('You entered: Radhika');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(2000);
})
test('Prompt alert handling - Cancel  button', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    await page.waitForTimeout(2000);
    page.on("dialog", async(alert)=>{
        const alertMessge = alert.message();
        console.log("The alert message is : " + alertMessge);
        console.log("Type of alert  : " +alert.type());
        await page.waitForTimeout(2000);
        expect(alertMessge).toEqual('I am a JS prompt');
        // await page.waitForTimeout(2000);
        // To handle the Prompt alert message -> To click on OK button
        await alert.dismiss();
        await page.waitForTimeout(2000);
        await expect(page.locator('#result')).toHaveText('You entered: null');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await page.waitForTimeout(2000);
})