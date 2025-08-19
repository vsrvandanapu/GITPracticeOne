import { test } from "@playwright/test";

test.beforeAll("Before All Hook", async ({}) => {
  console.log("-------Before All Hook-------");
});
test.afterAll("After All Hook", async ({}) => {
  console.log("-------After All Hook-------");
});
test.beforeEach("Before Each Hook", async ({}) => {
  console.log("***Before Each Hook***");
});
test.afterEach("After Each Hook", async ({}) => {
  console.log("***After Each Hook***");
});
test("test1", async ({ page }) => {
  console.log("Executing Test1 Testcase...");
});
test("test2", async ({ page }) => {
  console.log("Executing Test2 Testcase...");
});
test("test3", async ({ page }) => {
  console.log("Executing Test3 Testcase...");
});
