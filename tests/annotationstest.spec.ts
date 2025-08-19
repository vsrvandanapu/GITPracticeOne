import { test } from "@playwright/test";

test.skip("skipped test", async () => {
  console.log("I am a skip Test Example...");
});

test.fail("Not yet ready test", async () => {
  console.log("I am a skip with condition Test Example..");
});
test("Fail in WebKit", async ({ page, browserName }) => {
  test.fail(browserName === "webkit", "This setup will not work for safari");
  console.log("I am Failed with condition Test Example..");
});

test.fixme("Fix me test", async () => {
  console.log("I am a fix me Test Example..");
  //
});
test("slow test", async () => {
  test.slow();
  console.log("I am a slow Test Example..");
});
test("slow test with condiotion", async ({ browserName }) => {
  test.slow(browserName === "webkit", "This feature is not implemented for MAC" );
  console.log("I am a slow Test Example..");
});
test("only test", async ({}) => {
  console.log("I am only Test Example..");
});
