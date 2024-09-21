import { Page } from '@playwright/test'; // Import Page nếu cần
import { CommonKey } from '../commonWeb/keybasecommon';
import { getLoginSelectors } from '../Object Repository/login/selectors'

export class KeyBase extends CommonKey {
    private selectors = getLoginSelectors();
    private common: CommonKey;

    constructor(page: Page) {
        super(page);
        this.common = new CommonKey(page);  // Khởi tạo CommonKey
    }

    // Ví dụ hàm để nhập username
    async inputUsername(username: string): Promise<void> {
        const usernameSelector = this.selectors.usernameField;
        await this.common.fillInput(usernameSelector,username)
        console.log(`Input username: ${username}`);
    }

    // Ví dụ hàm để nhập password
    async inputPassword(password: string): Promise<void> {
        const passwordSelector = this.selectors.passwordField; // Selector của trường password
        await this.common.fillInput(passwordSelector,password)
        console.log(`Input password: ${password}`);
    }

    // Ví dụ hàm để nhấp vào nút đăng nhập
    async clickLoginButton(): Promise<void> {
        const loginButtonSelector = this.selectors.loginButton; // Selector của nút đăng nhập
        await this.common.clickButton(loginButtonSelector);
        await this.common.waitForTimeout;
        // await this.common.takeScreenshot;
        console.log('Clicked on login button');
    }
}
