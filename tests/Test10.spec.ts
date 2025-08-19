import { expect, test } from "@playwright/test";
test("Radio Button Handling", async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    await page.locator('#txt-username').fill('John Doe');
    await page.locator('#txt-password').fill('ThisIsNotAPassword');
    await page.locator('#btn-login').click();
    await page.waitForTimeout(2000);
    const medicareRadioBtn = page.locator('#radio_program_medicare');
    const medicaidRadioBtn = page.locator('#radio_program_medicaid');
    const noneRadioBtn = page.locator('#radio_program_none');
    await page.waitForTimeout(2000);
    expect(await medicareRadioBtn.isChecked()).toBeTruthy();
    expect(await medicaidRadioBtn.isChecked()).toBeFalsy();
    await page.waitForTimeout(2000);
    await medicaidRadioBtn.check();
    await page.waitForTimeout(2000);
    expect(medicareRadioBtn).not.toBeChecked();
    expect(medicaidRadioBtn).toBeChecked();
    expect(noneRadioBtn).not.toBeChecked();
    await page.waitForTimeout(2000);
})
test("Radio Buttons selection", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    // Radio buttons locator
    const radioButtons = page.locator('input[type="radio"]');
    for(const radio of await radioButtons.all())
    {
        await radio.check();
        await page.waitForTimeout(2000);
    }

    await page.waitForTimeout(5000);
})
test("Radio Button selection based on value ", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");

    await page.waitForTimeout(2000);
    await page.locator('input[value="Male"]').check();
    await page.waitForTimeout(2000);
    // Radio buttons locator
    const radioButtons = page.locator('input[type="radio"]');

    // To select the "Male" raido button based on value attribute
    for(const radio of await radioButtons.all())    {
        await page.waitForTimeout(3000);
        const value = await radio.getAttribute('value'); // Get value like 'Male' or 'Female'
        if(value === 'Male'){
            if( !(await radio.isChecked() )){
               await  radio.check();
               await page.waitForTimeout(2000);
               console.log('Selected the Male Radio button');
            }else{
                console.log('Male Radio button is already selected..');
            }
        }
        await page.waitForTimeout(2000);
    }

    await page.waitForTimeout(5000);
})