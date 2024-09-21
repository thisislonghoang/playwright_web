//Định nghĩa hành động và đối tượng cho trang dashboard

import { expect } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  private dashboardHeader = 'CURA Healthcare Service';

  // Hàm kiểm tra xem tiêu đề dashboard có xuất hiện không
  async verifyDashboardHeader(): Promise<void> {
    await this.page.waitForSelector(this.dashboardHeader);
    expect(await this.page.isVisible(this.dashboardHeader)).toBe(true);
  }
}