import {test, expect} from'@playwright/test'

test("Fail Annotation",async({page})=>{
    test.fail()
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#female')
    await expect(page.locator('#female')).toBeChecked();
})

test("Slow Annotation",async({page})=>{
    test.slow()
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
})