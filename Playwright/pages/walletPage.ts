import { Page, test } from "@playwright/test";
import { time } from "console";

export default class WalletPage {

    constructor(public page: Page) { }

    async findWalletByName(walletName:string){
        console.log(`//*[text()='${walletName}']`);
        console.log(this.page.url());
        await this.page.locator("xpath=//*[text()='${walletName}']").click();
        // await this.page.getByText(walletName).click();
        // await this.page.locator(`xpath=//*[text()='${walletName}']`).click();
        // await this.page.keyboard.press('Enter');
        console.log("yo");
        await this.page.locator(`xpath=//h1[text()='${walletName}']`).isVisible();
    }

    async moveToStakingTab(){
        await this.page.getByText('Staking').click();
        await this.page.getByText('Currently Staking').isVisible();
    }

    async clickNewStakeButton(){
        await this.page.getByText('New Stake').click();
        await this.page.getByText('Stake Details').isVisible();
    }

    async fillWalletPasswordAndCode() {
        await this.page.getByLabel('Wallet Password').fill('#Bondiola1234');
        await this.page.getByLabel('2FA Code').fill('000000');
    }

    async initiateStaking(amount:string){
        await this.clickNewStakeButton();
        await this.page.getByPlaceholder('Enter amount').fill(amount);
        await this.page.getByText('Initiate Stake').click();
        await this.page.getByText(`${amount} TSOL Stake`).isVisible();
        // await test.setTimeout(5000); 
        await this.fillWalletPasswordAndCode();
        await this.page.locator("xpath=//button[@type='submit']").click();
        await this.page.getByText('BitGo is preparing your staking transaction').isVisible();
        await this.page.getByText('Done').click();
        
        // await this.page.getByText(`Stake Request of ${amount} TSOL`).isVisible();
        // await this.moveToStakingTab();
        // this.page.locator('#cell-amounts-71')
    }
}