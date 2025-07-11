import {expect,test} from '@playwright/test';

test('RadioButton',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('#female').check();
    await expect(page.locator('#female')).toBeChecked();
    await expect(page.locator('#male')).not.toBeChecked();
    await page.pause();
});

test('Multiple CheckBox',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkBox= ["#sunday", "#monday", "#tuesday"];
    for(const locator of checkBox)
    {
        await page.locator(locator).check();
    }
    await page.waitForTimeout(3000);

    for(const newlocator of checkBox)
    {
        if(await page.locator(newlocator).isChecked()){
            await page.locator(newlocator).uncheck()
        }
    }
    await page.waitForTimeout(3000);
});

test('Prompt Alert',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async (dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message())
        console.log(dialog.defaultValue())
        await dialog.accept("Sravani");
    })
    await page.click("button:has-text('Prompt Alert')");
    await page.waitForTimeout(10000);
});

test('AlertBox',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async (dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message)
        await dialog.accept();
    })
    await page.click("button:has-text('Simple Alert')");
    await page.waitForTimeout(10000);
});


test('ComfirmationBox',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on('dialog',async (dialog)=>{
        console.log(dialog.type())
        console.log(dialog.message)
        await dialog.accept();
    })
    await page.click("button:has-text('Confirmation Alert')");
    await page.waitForTimeout(10000);
});

test('KeyBoard Actions',async({page})=>{

    await page.goto("https://gotranscript.com/text-compare");
    await page.fill("[name='text1']",'Welcome to Automation')

    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000);
    await page.pause();
});