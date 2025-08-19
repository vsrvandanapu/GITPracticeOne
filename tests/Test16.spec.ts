import { test, expect } from "@playwright/test";
import { DateTime } from "luxon";
test("Using Fill Method - Date Input", async ({ page }) => {
  // To load the demo page
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  await page.waitForTimeout(2000);
  // await page.locator('#birthday').fill('22-04-1980');
  await page.locator("#birthday").fill("1980-04-22");
  await page.waitForTimeout(5000);
});

test("Using Luxon - Past Date", async ({ page }) => {
  // To load the demo page
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  await page.waitForTimeout(2000);
  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(2000);
  const prevMonthButton = page.locator('(//th[@class="prev"])[1]');
  const nextMonthButton = page.locator('(//th[@class="next"])[1]');
  const monthYear = page.locator('(//th[@class="datepicker-switch"])[1]');
  // To select the past date as 'October 2020'
  const monthYearToSelect = "October 2020";
  /*
      Month short form  - MM
      Month full form   - MMMM
      Year short form  - yy
      Year full form   - yyyy
    */
  const formattedMonthDate = DateTime.fromFormat(
    monthYearToSelect,
    "MMMM yyyy"
  );
  console.log("Formated date is : " + formattedMonthDate);
  console.log("Month Year is " + monthYear.textContent());
  while ((await monthYear.textContent()) != monthYearToSelect) {
    if (formattedMonthDate < DateTime.fromJSDate(new Date())) {
      await prevMonthButton.click();
    } else {
      await nextMonthButton.click();
    }
  }
  await page.waitForTimeout(2000);
  await page.locator('//td[@class="day"][text()="16"]').click();
  await page.waitForTimeout(5000);
});
test("Using Luxon - future Date", async ({ page }) => {
  // To load the demo page
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo"
  );
  await page.waitForTimeout(2000);
  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(2000);
  const prevMonthButton = page.locator('(//th[@class="prev"])[1]');
  const nextMonthButton = page.locator('(//th[@class="next"])[1]');
  const monthYear = page.locator('(//th[@class="datepicker-switch"])[1]');
  // To select the past date as 'October 2020'
  const monthYearToSelect = "October 2026";

  const formattedMonthDate = DateTime.fromFormat(
    monthYearToSelect,
    "MMMM yyyy"
  );
  console.log("Formated date is : " + formattedMonthDate);
  console.log("Month Year is " + monthYear.textContent());
  while ((await monthYear.textContent()) != monthYearToSelect) {
    if (formattedMonthDate < DateTime.fromJSDate(new Date())) {
      await prevMonthButton.click();
    } else {
      await nextMonthButton.click();
    }
  }
  await page.waitForTimeout(2000);
  await page.locator('//td[@class="day"][text()="16"]').click();
  await page.waitForTimeout(5000);
});
test("Using Luxon - Date - user defined function ", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
  await page.waitForTimeout(2000);
  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(2000);
  // To select the past date as 'October 2020'
  await calendarSelect("18", "October 2023")
  await page.waitForTimeout(2000);
  // To select the future date as 'October 2025'
  await page.reload();
  await page.waitForLoadState();
  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(2000);
  await calendarSelect("18", "October 2025")
  await page.waitForTimeout(2000);
  // To select the Next day as 'October 2025'
  await page.reload();
  await page.waitForLoadState();
  await page.locator('input[placeholder="Start date"]').click();
  await page.waitForTimeout(1000);
  await calendarSelect("22", "April 2025")

  async function calendarSelect(date: string, monthYearValue: string) {
    const prevMonthButton = page.locator('(//th[@class="prev"])[1]');
    const nextMonthButton = page.locator('(//th[@class="next"])[1]');
    const monthYear = page.locator('(//th[@class="datepicker-switch"])[1]');
    const formattedMonthDate = DateTime.fromFormat(monthYearValue, "MMMM yyyy");
    console.log("Formated date is : " + formattedMonthDate);
    console.log("Month Year is " + monthYear.textContent());
    while ((await monthYear.textContent()) != monthYearValue) {
      if (formattedMonthDate < DateTime.fromJSDate(new Date())) {
        await prevMonthButton.click();
      } else {
        await nextMonthButton.click();
      }
    }
    await page.waitForTimeout(2000);
    await page.locator(`//td[@class="day"][text()="${date}"]`).click();
  }
  await page.waitForTimeout(2000);
});
test("Using Custom Date Calendar ", async ({ page }) => {
  // To load the demo page
  await page.goto("https://jqueryui.com/datepicker/#dropdown-month-year");
  // Switch to the frame where the calendar input is
  const frame = page.frameLocator('.demo-frame');

  await page.waitForTimeout(2000);
 // To enter the date as 24/04/2025 in Date textbox
 await frame.locator('//input[@id="datepicker" and @type="text"]').fill('24/04/2025')
//  await page.locator('//input[@id="datepicker" and @type="text"]').fill('24/04/2025')
  await page.waitForTimeout(5000);
});
test("Using Custom Date Calendar - Find the Total Days - For loop", async ({ page }) => {
  // To load the demo page
  await page.goto("https://jqueryui.com/datepicker/#dropdown-month-year");
  // Switch to the frame where the calendar input is
  const frame = page.frameLocator('.demo-frame');

  await page.waitForTimeout(2000);
 // To clciking on the date field in Date textbox
 await frame.locator('//input[@id="datepicker" and @type="text"]').click()

 const days = await frame.locator('//table[@class="ui-datepicker-calendar"]//following::tbody/tr/td/a').all();
 console.log("Total days are : " + days.length);

  for(const day of days)
  {
    const dateText = await day.textContent();
    const targetDay = '29';
    console.log(dateText);
    if(dateText === targetDay){
      await day.click();
      break;
    }
   
  }
  await page.waitForTimeout(5000);
  /*
   for(const day of days)
  {
    console.log(await day.textContent());
  }*/
});
test("Using Custom Date Calendar - Find the Total Days - For of loop", async ({ page }) => {
  // To load the demo page
  await page.goto("https://jqueryui.com/datepicker/#dropdown-month-year");
  // Switch to the frame where the calendar input is
  const frame = page.frameLocator('.demo-frame');

  await page.waitForTimeout(2000);
 // To clciking on the date field in Date textbox
 await frame.locator('//input[@id="datepicker" and @type="text"]').click()
 const alldays = frame.locator('td[data-handler="selectDay"]');
 const totalDays = await alldays.count();
 console.log("Total days are : " +totalDays);
const targetDayFor = '25';
 for(let i = 0; i < totalDays; i++) 
  {
  
  const dateText = await alldays.nth(i).textContent();
  console.log(dateText);
  if(dateText === targetDayFor) {
    await alldays.nth(i).click();
    break;
  }
 }
  await page.waitForTimeout(5000);
 
});
test("Using Custom Date Calendar - Find the Total months - For loop", async ({ page }) => {
  // To load the demo page
  await page.goto("https://jqueryui.com/datepicker/#dropdown-month-year");
  // Switch to the frame where the calendar input is
  const frame = page.frameLocator('.demo-frame');

  await page.waitForTimeout(2000);
 // To clciking on the date field in Date textbox
 await frame.locator('//input[@id="datepicker" and @type="text"]').click()
 await page.waitForTimeout(2000);

 const months = await frame.locator('//select[@class="ui-datepicker-month"]/option').all();
 console.log("Total months  are : " + months.length);
 const targetMonth = 'May';
  for(const month of months)
  {
    const monthText = (await month.textContent())?.trim();
    console.log("Month Found : ", monthText);

    if(monthText === targetMonth){
      await frame.locator('//select[@class="ui-datepicker-month"]').selectOption({label:monthText});
      console.log(`Selected Month : ${monthText}`);
      // break;
    }
   
  }
  await page.waitForTimeout(5000);
});
test("Using Custom Date Calendar - Find the Total Years - For loop", async ({ page }) => {
  // To load the demo page
  await page.goto("https://jqueryui.com/datepicker/#dropdown-month-year");
  // Switch to the frame where the calendar input is
  const frame = page.frameLocator('.demo-frame');

  await page.waitForTimeout(2000);
 // To clciking on the date field in Date textbox
 await frame.locator('//input[@id="datepicker" and @type="text"]').click()
 await page.waitForTimeout(2000);
// To Find the total years in a Year's dropdown
 const years = await frame.locator('//select[@class="ui-datepicker-year"]/option').all();
 console.log("Total Years  are : " + years.length);
 const targetYear = '2021';
  for(const year of years)
  {
    const yearText = (await year.textContent())?.trim();
    console.log("Year Found : ", yearText);

    if(yearText === targetYear){
      await frame.locator('//select[@class="ui-datepicker-year"]').selectOption({label:yearText});
      console.log(`Selected Year : ${yearText}`);
      // break;
    }
   
  }
  await page.waitForTimeout(5000);
});

