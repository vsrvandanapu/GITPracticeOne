// import { test, expect } from '@playwright/test';

// const credentialData = [
//     {
//         "username" : "Admin",
//         "password" : "admin123"
//     },
//     {
//         "username" : "Admin1",
//         "password" : "admin1234"
//     }
// ]
// credentialData.forEach( creds => {

//     test(`Login with ${creds.username} with ${creds.password}`, async ({page}) => {
//         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//         await page.locator('input[name="username"]').fill(creds.username);
//         await page.locator('input[name="password"]').fill(creds.password)
//         await page.locator('button[type="submit"]').click()
//         await page.waitForTimeout(2000);
//         await expect(page.locator('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toBeVisible();
//         await page.waitForTimeout(3000);
//       });
// }
// )
// Define a type for credentials
// type Credentials = {
//     username: string;
//     password: string;
//   };
  
//   // Create an array of credential objects
//   const credentialData: Credentials[] = [
//     {
//       username: 'Admin',
//       password: 'admin123',
//     },
//     {
//       username: 'Admin1',
//       password: 'admin1234',
//     },
//   ];
  
//   // Loop through each credentials set and log to console
//   credentialData.forEach((creds: Credentials) => {
//     console.log(`Login with username: ${creds.username} and password: ${creds.password}`);
//   });
  
