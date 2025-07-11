import {test} from '@playwright/test'

test("MouseActions", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.evaluate(()=>{
        window.scrollBy(0,80)
        //window.scrollBy(20,0)
    })
    await  page.waitForTimeout(10000)

    
    let val = page.locator("#country")
    const box= await val.boundingBox();
    if(box)
    {
        console.log(box.x)
        console.log(box.y)
        await page.mouse.wheel(0,box.y)
    }
    await  page.waitForTimeout(5000)
})