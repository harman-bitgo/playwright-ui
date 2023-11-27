import { Page } from "@playwright/test";
import * as data from "../data/users/user.json";

export default class LoginPage {

    constructor(public page: Page) { }

    async login(user: string) {
        await this.enterEmail(data[user].email);
        await this.enterLoginPassword(data[user].password);
        await this.clickLoginBtn();
        await this.enter2FACode(data[user].code);
        await this.clickVerifyBtn();
        await this.page.waitForNavigation({waitUntil:"networkidle"});

    }

    async enterEmail(emailaddress: string) {
        await this.page.getByLabel('Email Address').fill(emailaddress);
    }

    async enterLoginPassword(password: string) {
        await this.page.getByLabel('Password')
            .fill(password);
    }

    async clickLoginBtn() {
        await this.page.getByText('Log in').click();
    }

    async clickVerifyBtn() {
        await this.page.getByText('Verify').click();
    }

    async enter2FACode(code: string) {
        await this.page.getByLabel('2FA Code').fill(code);
    }   
}