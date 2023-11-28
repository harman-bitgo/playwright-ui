import { expect } from "@playwright/test";

const base_url= "https://app.bitgo-test.com/";


export async function accountLabel({page}) {
    return page.locator("xpath=//button[@aria-label='Account']");
}

export async function manualSignIn({ page }){

    await page.goto(base_url);
    await expect(page).toHaveTitle('Login - BitGo');
    await page.getByLabel('Email Address').fill("qaindiauser@gmail.com");
    await page.getByLabel('Password').fill("#Bondiola1234");
    await page.getByText('Log in').click();
    await page.getByLabel('2FA Code').fill('000000');
    await page.getByText('Verify').click();
    await page.waitForTimeout(10000);
    await expect(page.locator("xpath=//button[@aria-label='Account']")).toBeVisible();
}

export async function loginValidationusingCookies({ page }) {

    await page.goto(base_url);
    await expect(page.locator("xpath=//button[@aria-label='Account']")).toBeVisible();
}
