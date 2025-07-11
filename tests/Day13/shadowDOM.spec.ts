import {chromium,test} from '@playwright/test';

test('Shadow DOM',async({})=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://books-pwakit.appspot.com/");
    await page.locator('#input').fill('Test');

    await page.pause();
});