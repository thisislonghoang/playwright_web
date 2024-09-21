import { Page } from '@playwright/test'; // Import Page nếu cần
import { profile } from 'src/utils/default';
import { getLoginSelectors } from '../Object Repository/login/selectors'; // Định nghĩa selector trong file selectors.ts
import { CommonKey } from '../commonWeb/keybasecommon'; // Import từ commonkey.ts
import { BasePage } from './basePage';
import { KeyBase } from './keyBase';

export class LoginPage extends BasePage {
  private selectors = getLoginSelectors();  // Lấy selector từ file selectors.ts
  private common: CommonKey;  // Khai báo common
  private key: KeyBase;

  constructor(page: Page) {
    super(page);  // Gọi constructor của BasePage
    this.common = new CommonKey(page);  // Khởi tạo CommonKey
    this.key = new KeyBase(page);
  }

  // Hàm mở trang login
  async openLoginPage(): Promise<void> {
    await this.navigateTo(profile.BASE_URL);  // Thay đổi URL nếu cần
  }

  // Hàm đăng nhập với username và password
  async login(username: string, password: string): Promise<void> {
    await this.key.inputUsername(username);
    await this.key.inputPassword(password)
    await this.key.clickLoginButton();
    // await this.common.takeScreenshot();
  }

}
