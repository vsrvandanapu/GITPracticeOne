import { test, expect } from "@playwright/test";
test("Drag and Dropd - Way 1", async ({ page }) => {
  // To load the demo page
  await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
  const washington = page.locator('#box3');
  const unitedStates = page.locator('#box103');
  await washington.hover();
  await page.mouse.down();
  await page.waitForTimeout(2000);
  await unitedStates.hover();
  await page.mouse.up();
  await page.waitForTimeout(5000);
});

test("Drag and Dropd - Way 2", async ({ page }) => {
  // To load the demo page
  await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
  await page.waitForTimeout(2000);
  const washington = page.locator('#box3');
  const unitedStates = page.locator('#box103');
  await washington.dragTo(unitedStates);
  await page.waitForTimeout(5000);
});