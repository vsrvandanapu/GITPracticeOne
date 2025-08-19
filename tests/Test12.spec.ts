import { expect, test } from "@playwright/test";
test("Handling static dropdowns", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.waitForTimeout(2000);
   // To select the language as 'Dansk' with the help of label 
    await page.selectOption('#searchLanguage', {label:"Dansk"});
    await page.waitForTimeout(2000);
   // To select the language as 'Hindi' with the help of index
    await page.selectOption('#searchLanguage', {index:24})
    await page.waitForTimeout(2000);
   // To select the language as 'Tamil' with the help of value attribute value
   await page.selectOption('#searchLanguage', {value:"ta"})
   await page.waitForTimeout(5000);
})
test("Handling static dropdowns - Finding the number of values in a dropdown", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.waitForTimeout(2000);
   // To find the number of languages in a launguage's dropdown 
   // To identify the dropdown
   const languagesDropdown = page.locator('#searchLanguage');
    // Fetch all the options from the launguage's dropdown 
   const allOptions = await languagesDropdown.locator('option').allTextContents();
   console.log("Total languages in a language's dropdown is : " + allOptions.length);
   await page.waitForTimeout(5000);
})
test("Handling static dropdowns - Printing all the values in a dropdown", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.waitForTimeout(2000);
   // To find the number of languages in a launguage's dropdown 
   // To identify the dropdown
   const languagesDropdown = page.locator('#searchLanguage');
    // Fetch all the options from the launguage's dropdown 
   const allOptions = await languagesDropdown.locator('option').allTextContents();
   console.log("Total languages in a language's dropdown is : " + allOptions.length);
   for(const language of allOptions)
   {
       console.log(language); // Printing each text value from a dropdown
        if(language === 'Dansk')
        {
            await languagesDropdown.selectOption({ label: 'Dansk' })
            console.log('Select language value as : ' + language);   
            break;
        }
   }
   await page.waitForTimeout(2000);
   //Assertion - 1
   // Assertion to confirm selected language- Verify the value attribute value(Backend Value)
    await expect(languagesDropdown).toHaveValue('da');
    await page.waitForTimeout(2000);
    //Assertion - 2 - Verify visible text
   await expect(languagesDropdown.locator('option:checked')).toHaveText('Dansk');
   await page.waitForTimeout(2000);
})
test("Handling static dropdowns - Printing all the values in a dropdown- For loop", async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    await page.waitForTimeout(2000);
   // To find the number of languages in a launguage's dropdown 
   // To identify the dropdown
   const languagesDropdown = page.locator('#searchLanguage');
    // Fetch all the options from the launguage's dropdown 
   const allOptions = await languagesDropdown.locator('option').allTextContents();
   console.log("Total languages in a language's dropdown is : " + allOptions.length);
   for(let i = 0; i < allOptions.length; i++){
       console.log(allOptions[i]);
       if(allOptions[i] === 'Eesti'){
        await languagesDropdown.selectOption({label:'Eesti'});
        console.log('Selected language is : ' + allOptions[i]);
       }
   }
   await page.waitForTimeout(2000);
   //Assertion - 1
   // Assertion to confirm selected language- Verify the value attribute value(Backend Value)
    await expect(languagesDropdown).toHaveValue('et');
    await page.waitForTimeout(2000);
    //Assertion - 2 - Verify visible text
   await expect(languagesDropdown.locator('option:checked')).toHaveText('Eesti');
   await page.waitForTimeout(2000);
})
test("Multi Static dropdown handling", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.waitForTimeout(2000);
    await page.selectOption('#multi-select',[
        {value:"California"},
        {label:"New Jersey"},
        {index: 5}
    ]);
   await page.waitForTimeout(2000);
})
test("Multi Static dropdown handling and deselect", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.waitForTimeout(2000);
    await page.selectOption('#multi-select',[
        {value:"California"},
        {label:"New Jersey"},
        {index: 5}
    ]);
   await page.waitForTimeout(2000);
   await page.selectOption('#multi-select', null);
   await page.waitForTimeout(2000);
})
test("Searchable dynamic dropdown", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.waitForTimeout(3000);
 // To click on the 'Select Country dropdown'
 await page.locator('span[role="combobox"]').click();
 await page.waitForTimeout(3000);
 // To type the value as 'Ind' in country dropdown textbox
 await page.locator('input[type="search"]').fill('Ind')
 await page.waitForTimeout(3000);
 await page.locator('#select2-country-results>li').click();
 // To click on the searched value
   await page.waitForTimeout(4000);
})
test("Non Searchable dynamic dropdown", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.waitForTimeout(3000);
 // To click on the 'Select Country dropdown'
 await page.locator('span[role="combobox"]').click();
 await page.waitForTimeout(3000);
//   await page.locator('#select2-country-results').locator('li', {hasText:"India"}).click();
 // To click on the searched value
 await page.locator('#select2-country-results>li', {hasText:"India"}).click();
   await page.waitForTimeout(4000);
})
