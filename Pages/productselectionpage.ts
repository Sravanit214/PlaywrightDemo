import {Locator, Page, expect } from '@playwright/test'

export class ProductSelection{
    
    page:Page 
    private firstproduct: Locator
    private secondproduct: Locator
    private continueshopping: Locator
    private viewcart: Locator

    constructor(page:Page){
        this.page = page;
        this.firstproduct=page.locator('').first()
        this.secondproduct=page.locator('').first()
        this.continueshopping=page.getByRole('button',{name:''})
        this.viewcart=page.getByRole('link', {name:""})

    }

    async SelectProduct(){
        await this.firstproduct.click()
        await this.continueshopping.click()
        await this.secondproduct.click()
        await this.continueshopping.click()
        await this.viewcart.click()

    }
}