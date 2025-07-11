const {test, expect} =require('@playwright/test')
// test('built in Locators',async({page})=>{
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.getByPlaceholder('Username').fill("Admin")
//     await page.getByPlaceholder('Password').fill("admin123")
//     await page.getByRole('button',{type: 'submit'}).click()
//     await page.pause()
// })

test('get started link', async({page})=>
{
    await page.goto("https://www.saucedemo.com/v1/");
    await page.locator("//input[@type='text']").fill("standard_user");
    await page.locator("input#password").fill("secret_sauce");
    await page.locator("input.btn_action").waitFor();
    await page.locator("input.btn_action").click();
    await page.locator("div.inventory_item").filter({hasText:'Sauce Labs Backpack'}).getByRole('button').click();
    await page.pause();      
  
})