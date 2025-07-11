import {test,expect} from'@playwright/test'

test('Webtable', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com");
    const table= page.locator("#productTable");
    const column= table.locator("thread tr th");
    console.log(await column.count() )
    const rows= table.locator("tbody tr");
    console.log(await rows.count() )
    //Pagination
    const pages= await page.locator('.pagination li a')
    console.log(pages.count())

    for(let p=0; p< await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }
        for(let i=0; i< await rows.count(); i++)
        {
            const row= rows.nth(i);
            const tds=row.locator('td')
            for(let j=0; j< await tds.count()-1; j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        } 
    }
    await page.waitForTimeout(5000)
})