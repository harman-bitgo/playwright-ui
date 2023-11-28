import { Page } from "@playwright/test";
import * as config from "../data/config.json";

export default class HomePage {

    constructor(public page: Page) { }

    async changeAssetType(assetsType:string){
        // console.log("s1:"+this.page.url());
        // await this.page.locator('xpath=//button/span[text()="Assets"]').click();
        // console.log(`xpath=//span[text()='by ${assetsType.toLowerCase()}']`);
        // // await this.page.getByText(`by ${assetsType.toLowerCase()}`).click();
        // await this.page.locator(`xpath=//span[text()=${assetsType.toLowerCase()}]`).click();
        await this.page.goto(this.page.url()+"/wallets");
        console.log("s2:"+this.page.url());
        // await this.page.getByText(assetsType).isVisible();
    }

    async searchBox(searchText:string){
        await this.page.locator("//input[@type='search']").fill(searchText);
        await this.page.keyboard.press('Enter');
    }

    async goToWallet(walletID:string){
        let url=config.test.url+'/web/enterprises/'+config.test.enterpriseID+'/assets/wallets/'+walletID;
        await console.log("Url:"+url);
        await this.page.goto(url);
        // https://app.bitgo-test.com/web/enterprises/60f86562ae803c0006d1a30dc0082138/assets/wallets/63f769fbb99cdf00074597d7d664a29a
    }

    async getEnterpriseName(){
        return await this.page.locator('xpath=//button[@aria-label="Select Enterprise"]//span[2]')
    }

    async switchEnterprise(enterpriseName:string){
        var currentEnterprise = await this.page.locator('xpath=//button[@aria-label="Select Enterprise"]//span[2]').textContent();
        // console.log("$$:",currentEnterprise);
        // console.log(typeof(currentEnterprise));
        if (currentEnterprise != enterpriseName){
            await this.page.locator('xpath=//button[@aria-label="Select Enterprise"]').click();
            await this.page.locator('xpath=//button[@value="60f86562ae803c0006d1a30dc0082138"]').click();
            if(enterpriseName != await this.page.locator('xpath=//button[@aria-label="Select Enterprise"]//span[2]').textContent()){
                await console.log('Unable to switch org!')
            }
        }
    }
}