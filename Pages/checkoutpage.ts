import {Locator, Page, expect } from '@playwright/test'
import dt from "../TestData/checkoutdata.json"
import { URL } from '../constants/url'

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
        this.proceedtocheckout=page.locator('')
        this.placeorder=page.locator('')


    }

    async checkout(){

    }
}