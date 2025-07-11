import {test,chromium,Browser,BrowserContext,Page} from '@playwright/test'
let browser:Browser;
let page:Page;
let context:BrowserContext;

test.beforeAll("Before All Test",async({page})=>{
    // browser= await chromium.launch({headless:false})
    // context =await browser.newContext()
    // page =await context.newPage();
    console.log("*** Before All Test ***")
})
test.beforeEach("Before Each Test",async()=>{
    console.log("*** Before Each Test ***")
})
test.describe("Describe",async()=>{
    test.beforeAll("Before All inside describe",async()=>{
        console.log("*** Before All inside describe ***")
    })
    test.beforeEach("Before Each inside describe",async({page})=>{
        await page.goto("https://www.saucedemo.com/v1/")
        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");
        await page.getByRole('button', {name:'Login'}).click();
        console.log("*** Before Each inside describe ***")
    })
    test("Test1", async()=>{
        console.log("*** Executed Test1 inside Describe ***")
    })
    test("Test2", async()=>{
        console.log("*** Executed Test2 inside Describe ***")
    })
    test.afterEach("After Each inside describe",async()=>{
        console.log("*** After Each inside describe ***")
    })
    test.afterAll("After All inside describe",async()=>{
        console.log("*** After All inside describe ***")
    })
})
test.afterEach("After Each Test",async()=>{
    console.log("*** After Each Test ***")
})
test.afterAll("After All Test",async()=>{
    console.log("*** After All Test ***")
})
