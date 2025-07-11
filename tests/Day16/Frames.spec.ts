import {FrameLocator,Locator,test} from '@playwright/test'

test('nested frames',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames');
    const outerframe = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
 outerframe?.fill("//input[@type='text']", 'HI');
    const inner= await outerframe?.frameLocator("//iframe")
    await page.waitForTimeout(2000)
    const inner_ele= await inner?.locator('//div[@aria-label="Web Testing"]')
    await inner_ele?.click()
    await page.pause()
    
})