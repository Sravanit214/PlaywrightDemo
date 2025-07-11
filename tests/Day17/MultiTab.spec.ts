import {chromium,test,expect} from'@playwright/test'

test('Multi Tab Context', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const pagepromise= context.waitForEvent('page')
    await page.getByText("OrangeHRM, Inc").click()
    const newpage= await pagepromise

    expect(newpage).toHaveTitle('Human Resources Management Software | OrangeHRM HR Software ')
    await newpage.getByPlaceholder('Enter your email address here').fill('xyz@gmail.com')
    await newpage.waitForTimeout(3000)
    await newpage.pause();

})

test.only('Multi Tab Promise', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const [multipage] = await Promise.all([
        context.waitForEvent('page'),
        await page.getByText("OrangeHRM, Inc").click()
    ]);

    await page.waitForTimeout(5000)
    const totalpages = multipage.context().pages();
    console.log(totalpages.length)

    totalpages.forEach((URL) => {
        console.log(URL.url())
    });

    let webpage;

    for(let i=0; i< await totalpages.length; i++)
    {
        const title= await totalpages[i].title()
        if(title=='Human Resources Management Software | OrangeHRM HR Software')
        {
                webpage =totalpages[i]
        }
    }
    await webpage.getByPlaceholder('Enter your email address here').fill('xyz@gmail.com')
    await webpage.waitForTimeout(3000)

})