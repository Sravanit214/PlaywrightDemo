import {chromium, test} from "@playwright/test"

test("First Script",async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await page.getByRole("heading",{name:'' } )

})