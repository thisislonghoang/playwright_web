import { Page } from '@playwright/test'; // Đảm bảo import Page

export class CommonKey {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Hàm chụp màn hình
  async takeScreenshot(): Promise<void> {
    await this.page.screenshot({ path: `./screenshots/${Date.now()}.png` });

  }

  // Chờ phần tử xuất hiện
  async waitForSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  // Chờ một khoảng thời gian bổ sung nếu cần
  async waitForTimeout(): Promise<void> {
    await this.page.waitForTimeout(1000);
  }

  // Hàm điền văn bản vào một trường tối ưu
  async fillInput(selector: string, text: string): Promise<void> {
    // Đợi phần tử xuất hiện (phần tử có trong DOM và hiển thị)
    await this.page.waitForSelector(selector, { state: 'visible' });

    // Đảm bảo phần tử không bị disabled (kiểm tra thuộc tính 'disabled')
    // const isDisabled = await this.page.$eval(selector, (element) => (element as HTMLInputElement).disabled);
    // if (isDisabled) {
    //   throw new Error(`The element with selector ${selector} is disabled and cannot receive input.`);
    // }

    // Xóa nội dung trước khi điền text
    await this.page.fill(selector, '');  // Clear text trước

    // Điền text vào trường input
    await this.page.fill(selector, text);
  }

  // Nhấp vào một nút hoặc phần tử với tùy chọn timeout
  async clickButton(selector: string, timeout: number = 5000): Promise<void> {
    await this.page.waitForSelector(selector, { state: 'visible', timeout }); // Chờ cho đến khi phần tử xuất hiện, có thể nhấp và nằm trong trạng thái 'visible'

    await this.page.click(selector);  // Thực hiện click vào phần tử
  }


}

