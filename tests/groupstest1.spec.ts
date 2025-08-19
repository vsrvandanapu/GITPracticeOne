import { test } from "@playwright/test";

test.describe('Sanity Testcases group', async () => {
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
});
test.describe.skip('Functional Testcases group',async () => {
 
  test("test3", async ({ page }) => {
    console.log("Executing Test3 Testcase...");
  });
  test("test4", async ({ page }) => {
    console.log("Executing Test4 Testcase...");
  });
  test.beforeAll("Before All Hook", async ({}) => {
    console.log("Database connection has established __ beforeAll");
  });
 
  test.beforeEach("Before Each Hook", async ({}) => {
    console.log("***Login to the application @@ beforeEach***");
  });
  test.afterEach("After Each Hook", async ({}) => {
    console.log("***Logout from the application @@ aftereEach***");
  });
  test.afterAll("After All Hook", async ({}) => {
    console.log("Database connection has disconnected __ afterAll");
  });
});
