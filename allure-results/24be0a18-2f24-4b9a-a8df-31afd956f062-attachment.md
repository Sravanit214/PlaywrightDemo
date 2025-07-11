# Test info

- Name: login
- Location: /Users/c2383213/Documents/PlayWrightDemo/tests/Day24/pomtest.spec.ts:6:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /Users/c2383213/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import {test} from '@playwright/test'
   2 | import { LoginFunctionality } from '../../Pages/loginpage'
   3 | // import { ProductSelection } from '../../Pages/productselectionpage'
   4 | // import { Checkout } from '../../Pages/checkoutpage'
   5 |
>  6 | test("login", async({page})=>{
     |     ^ Error: browserType.launch: Executable doesn't exist at /Users/c2383213/Library/Caches/ms-playwright/chromium_headless_shell-1169/chrome-mac/headless_shell
   7 |     const loginpage=new LoginFunctionality(page)
   8 |     await loginpage.launchApp()
   9 |     await loginpage.login()
  10 |
  11 |     // const prodsel= new ProductSelection(page)
  12 |     // await prodsel.SelectProduct()
  13 |
  14 |     // const check= new Checkout(page)
  15 |     // await check.checkout()
  16 |
  17 | })
```