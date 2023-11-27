import { chromium, test as baseTest } from "@playwright/test";
import LoginPage from "../pages/loginPage.ts";
import HomePage from "../pages/homePage.ts";
import WalletPage from "../pages/walletPage.ts";


type pages = {
    loginPage: LoginPage;
    homePage: HomePage;
    walletPage: WalletPage;
}

const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest"
};

const testPages = baseTest.extend<pages>({
    
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    walletPage: async ({ page }, use) => {
        await use(new WalletPage(page));
    },
})

export const test = testPages;
export const expect = testPages.expect;