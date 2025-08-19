import  { test, expect } from "@playwright/test";
test("Enabled or Disbaled", async ({page})=>{
    await page.goto('file:///C:/Users/A1/Desktop/LoginPage.html');
    // expect(await page.locator('#username')).not.toBeEnabled();
    expect(page.locator('#username')).toBeEnabled();
    await page.locator('#username').fill("vasu");
    expect(page.locator('input[name="password"]')).toBeDisabled();
    expect(page.locator('#login')).toBeDisabled();
    expect(page.locator('#reset')).toBeEnabled();
    await page.waitForTimeout(5000);
})
test("ToBeVisible / ToBeHidden", async ({page})=>{
    await page.goto('https://login.salesforce.com/?locale=in');
    await expect(page.locator('#username')).toBeVisible();
    await page.locator('#username').fill('Radhika');
    // await expect(page.locator('#password')).toBeHidden();
    await expect(page.locator('#password')).toBeVisible();
    await page.locator('#password').fill('123456');
    await page.waitForTimeout(5000);
})
test("Text Match and mismatch", async ({page})=>{
    await page.goto('https://www.facebook.com/');
    await expect(page.locator('button[name="login"]')).toHaveText('Log in');
    await expect(page.locator('button[name="login"]')).not.toHaveText('Hema');
    await expect(page.locator('a[data-testid="open-registration-form-button"]')).toHaveText('Create new account');
    await page.waitForTimeout(5000);
})
test("Element attributes", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('input[name="username"]')).toHaveAttribute('placeholder', 'Username');
    await expect(page.locator('input[name="username"]')).toHaveAttribute('class', /.*oxd-input/);
    await expect(page.locator('input[name="username"]')).toHaveClass(/oxd-input/);
    await page.waitForTimeout(5000);
})
test("URL and Title", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    // const actualURL = page.url();
    // console.log("The current Page url is : " + actualURL);
    await expect (page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(2000);
    // const  actualTilte =  await page.title(); 
    // const expectedTitle = 'OrangeHRM';
    // await expect(actualTilte).toEqual(expectedTitle);
    expect(await page.title()).toEqual('OrangeHRM');
    await expect(page).toHaveTitle('OrangeHRM');
    await page.waitForTimeout(5000);
})

test("Number of elements", async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    expect(await page.locator('button[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator("text=Add Element").click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('//button[text()="Add Element"]').click();
    await page.locator('//button[text()="Add Element"]').click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(3);
    await page.locator('//button[text()="Delete"][1]').click();
    await page.locator('//button[text()="Delete"][1]').click();
    expect(await page.locator('button[onclick="deleteElement()"]')).toHaveCount(1);
    await page.waitForTimeout(5000);
})