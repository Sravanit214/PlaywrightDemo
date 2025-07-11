import {test} from '@playwright/test'
import { LoginFunctionality } from '../../Pages/loginpage'
import { ProductSelection } from '../../Pages/productselectionpage'
import { Checkout } from '../../Pages/checkoutpage'

test("login", async({page})=>{
    const loginpage=new LoginFunctionality(page)
    await loginpage.launchApp()
    await loginpage.login()

    const prodsel= new ProductSelection(page)
    await prodsel.SelectProduct()

    const check= new Checkout(page)
    await check.checkout()

})