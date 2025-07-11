import {test as basetest} from'@playwright/test'

type hooksfixture={
    loginfixture:any
}

export const test= basetest.extend<hooksfixture>({
    loginfixture : async({page},use)=>{
        const loginfixture=undefined
        await page.goto("https://www.saucedemo.com/v1/");

        await page.getByPlaceholder('Username').fill("standard_user");
        await page.getByPlaceholder('Password').fill("secret_sauce");
        await page.getByRole('button', {name:'Login'}).click();
        
        await use(loginfixture)

        await page.waitForSelector(".bm-burger-button")
        await page.locator(".bm-burger-button").click()
        await page.locator("#logout_sidebar_link").click()
    }
})