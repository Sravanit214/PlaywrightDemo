import {chromium, test} from "@playwright/test"

test("Date Picker",async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.fill('SelectedDate','01/07/2025')
    await page.waitForTimeout(3000)

})