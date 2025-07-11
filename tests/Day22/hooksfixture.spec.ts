import {test} from '../../Fixtures/hooksfixture'

test("test1 ",async({page, loginfixture})=>{
    await page.locator('div.inventory_item').filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button').click();       
})

test("test2 ",async({page, loginfixture})=>{
    await page.locator(".bm-burger-button").isVisible()
})