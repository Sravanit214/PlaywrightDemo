import {Locator, Page, expect } from '@playwright/test'
import dt from "../TestData/checkoutdata.json"

export class Checkout{
    page:Page
    private proceedtocheckout:Locator
    private placeorder:Locator
    private cardname:Locator
    private cardNumber:Locator
    private cardMM:Locator
    private cardYYYY:Locator
    private cardCVC:Locator
    private submitButton:Locator
    private verifytext:Locator
    constructor(page:Page){
        this.page=page;
        this.proceedtocheckout=page.getByText('Proceed To Checkout')
        this.placeorder=page.getByRole('link',{name:'Place Order'})
        this.cardname=page.locator('input[name="name_on_card"]')
        this.cardNumber=page.locator('input[name="card_number"]')
        this.cardMM=page.getByPlaceholder('MM')
        this.cardYYYY=page.getByPlaceholder('YYYY')
        this.cardCVC=page.locator('input[name="cvc"]')
        this.submitButton=page.locator('#submit')
        this.verifytext=page.locator('h2[data-qa="order-place"] ~p')
    }

    async checkout(){
        await this.proceedtocheckout.click()
        await this.placeorder.click({timeout:3000})
        await this.cardname.fill('')
        await this.cardNumber.click()
        await this.cardMM.click()
        await this.cardYYYY.click()
        await this.cardCVC.click()
        await this.submitButton.click()
        await this.verifytext.click()

    }
}