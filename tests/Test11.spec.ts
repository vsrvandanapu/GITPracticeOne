import { expect, test } from "@playwright/test";
test("Handling Checkboxes", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.waitForTimeout(2000);
    const cricketCheckbox = page.locator('#checkbox1');
    const moviesCheckbox = page.locator('#checkbox2');
    const hockeyCheckbox = page.locator('#checkbox3');
    await page.waitForTimeout(2000);
    await cricketCheckbox.check();
    await expect(cricketCheckbox).toBeChecked();
    await page.waitForTimeout(2000);
    await cricketCheckbox.uncheck();
    await expect(cricketCheckbox).not.toBeChecked();
    await page.waitForTimeout(2000);
    await moviesCheckbox.check();
    await page.waitForTimeout(2000);
    await hockeyCheckbox.check();
    await page.waitForTimeout(2000);
    expect(await cricketCheckbox.isChecked()).toBeFalsy();
    expect(await moviesCheckbox.isChecked()).toBeTruthy();
    expect(await hockeyCheckbox.isChecked()).toBeTruthy();
    await page.waitForTimeout(2000);
})

test("Handling Checkboxes - Select all - For..of loop", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Locate all the check boxes unders Hobbies section
    const hobiesCheckboxes = page.locator('input[type="checkbox"]');

    // Fetch total number of checkboxes
    const totalCheckboxes = hobiesCheckboxes.count();
    console.log("Total checkboxes are : " + (await totalCheckboxes).valueOf());
    await page.waitForTimeout(3000);
    // Use for... of loop to select checkboxes one by one
    for(const chkBox of await hobiesCheckboxes.all()){
        await chkBox.check();
        await page.waitForTimeout(1000);
    }
    await page.waitForTimeout(3000);
})  
test("Handling Checkboxes - Select all - For loop", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");

    // Locate all the check boxes unders Hobbies section
    const hobiesCheckboxes = page.locator('input[type="checkbox"]');

    // Fetch total number of checkboxes
    const totalCheckboxes = hobiesCheckboxes.count();
    console.log("Total checkboxes are : " + (await totalCheckboxes).valueOf());
    await page.waitForTimeout(2000);
    // Use for... loop to select checkboxes one by one
    for(let i = 0; i < (await totalCheckboxes).valueOf(); i++)
    {
        const  checkbox = hobiesCheckboxes.nth(i);
        checkbox.check();
        await page.waitForTimeout(2000);
    }
    await page.waitForTimeout(2000);
    // Assertion - Verify the first check box is selected
    await expect(hobiesCheckboxes.nth(0)).toBeChecked();
    await page.waitForTimeout(2000);
    for(let i = 0; i < (await totalCheckboxes).valueOf(); i++)
        {
            const  checkbox = hobiesCheckboxes.nth(i);
            checkbox.uncheck();
            await page.waitForTimeout(1000);
        }
        await page.waitForTimeout(1000);
     // Assertion - Verify the first check box is not selected
    await expect(hobiesCheckboxes.nth(0)).not.toBeChecked();
    await page.waitForTimeout(2000);
})  
