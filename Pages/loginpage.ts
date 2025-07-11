import {Locator, Page, expect } from '@playwright/test'
import dt from "../TestData/pomdata.json"
import { URL } from '../constants/url'

export class LoginFunctionality{
    page:Page
    static pageurl = URL.baseURL
    private loginclick:Locator
    private username:Locator
    private password:Locator
    private submitbutton:Locator
    private loggedin:Locator
    constructor(page:Page){
        this.page=page;
        this.loginclick=page.getByRole('link',{name:' Signup / Login'}).first()
        this.username=page.locator("div.login-form input[name='email']")
        this.password=page.locator("div.login-form input[name='password']")
        this.submitbutton=page.getByRole('button',{name:'Login'})
        this.loggedin=page.getByRole('link',{name:' Logout'})
    }
    async launchApp(){
        await this.page.goto(LoginFunctionality.pageurl)
        await this.page.waitForLoadState('load')
    }

    async login(){
        try{
            await this.loginclick.click()
            await this.username.fill(dt.username)
            await this.password.fill(dt.password)
            await this.submitbutton.click()
            await this.loggedin.waitFor({state:"visible",timeout:30000})
            expect(await this.loggedin.isVisible()).toBeTruthy()
        }
        catch(err){
            console.log(`Error : ${err}`)
        }
    }
    
}