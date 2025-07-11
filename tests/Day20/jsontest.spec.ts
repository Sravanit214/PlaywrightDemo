import {test,expect} from '@playwright/test'
import data from '../../TestData/testdata.json'

for(const dt of data){
    test(`json test ${dt.Id}`, async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForLoadState()
        await page.getByPlaceholder("Username").fill("Admin")
        await page.getByPlaceholder("Password").fill("admin123")
        await page.getByRole('button',{name:/Login/}).click()
        await page.getByRole('link',{name:'Recruitment'}).click()
        await page.getByRole('button',{name:' Add '}).click()
        await expect(page.locator('#app')).toContainText('Add Candidate')
        await page.getByPlaceholder("First Name").fill(dt.fname)
        await page.getByPlaceholder("Last Name").fill(dt.lname)
        await page.getByPlaceholder('Type Here').first().fill(dt.email);
        await page.getByRole('button',{name:'Save'}).click();
        await page.waitForTimeout(5000)
        await expect(page.getByText('Application Stage')).toBeVisible()

    })
}