import { test} from "@playwright/test"

test("File Download",async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')
    await page.type("#textbox","Hi")
    await page.waitForTimeout(5000)
    await page.click('#create')

    const download= page.waitForEvent('download')
    await page.locator("#link-to-download").click()
    const File =await download
    
    await File.saveAs("Download File/"+ File.suggestedFilename())
    
})