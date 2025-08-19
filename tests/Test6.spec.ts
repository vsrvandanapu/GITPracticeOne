import { test } from "@playwright/test";
test("Katalon Demo Application", async ({ page }) => {
  // load the url as "https://katalon-demo-cura.herokuapp.com/"
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  // To click on MakeAppointment // Hema
  await page.locator("#btn-make-appointment").click();
  // To enter the user name as "John Doe" // Radhika
  await page.locator('input[name="username"]').fill("John Doe");
  // To enter the password as "ThisIsNotAPassword"// Hema
  await page.locator("//input[@type='password']").fill("ThisIsNotAPassword");
  // To click on login button// Radhika
  await page.locator("//button[@class='btn btn-default']").click();
  await page.waitForTimeout(5000);
});
