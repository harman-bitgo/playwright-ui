import { test, expect } from '@playwright/test';
import * as SignIn from '../framework/signIn';


test.beforeAll('Manual login validation', async ({ browser })=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await SignIn.manualSignIn( {page} );
    const cntx = page.context();
    await cntx.storageState({path:"./auth.json"});
});

test('Login Cookie validation', async ({ browser })=>{

    const context = await browser.newContext({
        storageState: './auth.json'
    })
    const page = await context.newPage();
    await SignIn.loginValidationusingCookies( {page} );
});