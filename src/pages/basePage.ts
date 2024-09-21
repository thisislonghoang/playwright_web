//Định nghĩa hành động và đối tượng cho trang login

import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Điều hướng tới URL
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // Kiểm tra URL hiện tại
  async verifyUrl(expectedUrl: string): Promise<void> {
    if (this.page.url() !== expectedUrl) {
      throw new Error(`Expected URL to be ${expectedUrl} but got ${this.page.url()}`);
    }
  }
}

