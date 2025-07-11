import { test} from "@playwright/test"

test("Multiple File Upload",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.setInputFiles("#multipleFilesInput",["./tests/Files/File1.xlsx","./tests/Files/File2.xlsx"]);
    await page.waitForTimeout(5000)
    await page.setInputFiles("#multipleFilesInput",[])
    await page.waitForTimeout(3000)
})

test("Multiple File Upload- Event Handler",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    const uploadFile= page.waitForEvent('filechooser')
    await page.locator("#multipleFilesInput").click()
    const upload =await uploadFile
    upload.setFiles(["./tests/Files/File1.xlsx","./tests/Files/File2.xlsx"]);
    await page.waitForTimeout(3000)
    
})