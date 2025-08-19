import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx'
import * as path from 'path'
import * as fs from 'fs'

// step 1 : Read excel Data
function readExcelData(fileName:string, sheetName: string){
  const filePath = path.resolve(__dirname, fileName);
  if(!fs.existsSync(filePath)){
    throw new Error(`Excel file not found at path: ${filePath}`);
  }
  const workbook = XLSX.readFile(filePath);
  const workSheet = workbook.Sheets[sheetName];
  const jsonData : any[] = XLSX.utils.sheet_to_json(workSheet);
  return jsonData;

}
// Step2: Adjust relative path from this spec file to the Excel File
const testData = readExcelData('./testData/LoginData.xlsx', 'Sheet1');
// step3 : Loop and run test
for(const data of testData){
  
  if(!data.Username || !data.Password){
    console.warn('Skipping invalid row: ', data)
    continue;
  }
  test(`OrangeHRM_Login test for Username : ${data.Username}`, async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(data.Username);
    await page.locator('[placeholder="Password"]').fill(data.Password);
    await page.locator('[type="submit"]').click();
    await page.waitForTimeout(2000)
    if(data.ExpectedResult === 'Pass')
    {
      await page.waitForTimeout(2000)
      await page.locator('.oxd-userdropdown').click();
      await page.waitForTimeout(2000)
      await page.locator('text=Logout').click();
      await page.waitForTimeout(3000)
      const errorVisible = await page.locator('.oxd-alert--error').isVisible();
      if(errorVisible){
        await expect(page.locator('.oxd-alert--error')).toBeVisible();
      }else{
        console.error('Expected Error Message not visible for failed login');
        await page.screenshot({path:`error-${data.Username}.png`, fullPage:true});
      }
    }
    await page.waitForTimeout(3000)
  });
}

 