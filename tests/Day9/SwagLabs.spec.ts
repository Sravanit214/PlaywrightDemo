import {chromium, test} from "@playwright/test"

test("First Script",async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.saucedemo.com/v1/");

    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button', {name:'Login'}).click();
    await page.locator('div.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button',{name:'ADD TO CART'}).click();
    
})