import { test, expect, defineConfig } from '@playwright/test';
import * as SignIn from '../../../framework/signIn';
// import * as HomePage from '../../../pages/homePage';
import { base } from "../../../base/walletsPlatformBase";
// import { time } from 'console';
import * as data from '../../../data/coins/sol.json';
import HomePage from '../../../pages/homePage';
import WalletPage from '../../../pages/walletPage';


test('Sol Staking validation', async ({ browser })=>{

    const context = await browser.newContext({
        storageState: './auth.json'
    })
    const page = await context.newPage();
    const homePage = new HomePage(page);
    const walletPage = new WalletPage(page);
    await SignIn.loginValidationusingCookies( {page} );
    // await homePage.switchEnterprise('QA');
    // await homePage.changeAssetType("Wallets");
    // await test.setTimeout(5000);
    // await homePage.searchBox(data.test.stakeWalletName);
    // await walletPage.findWalletByName(data.test.stakeWalletName);
    await homePage.goToWallet(data.test.stakeWalletId);
    await walletPage.moveToStakingTab();
    await walletPage.initiateStaking('0.03');
});