import {test} from '@playwright/test'

test("Login Test @UI",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    await page.getByPlaceholder('Username').fill("standard_user");
    await page.getByPlaceholder('Password').fill("secret_sauce");
    await page.getByRole('button', {name:'Login'}).click();
    console.log("*** Login Test ***")
})

test("Logout Test @Smoke",async()=>{
    console.log("*** LogOut Test ***")
})

test.describe("Describe Test @Sanity",async()=>{
    test("Test1",{tag:["@Smoke","@API"]}, async()=>{
        console.log("*** Test1 ***")
    })

    test("Test2 @API", async()=>{
        console.log("*** Test2 ***")
    })
})