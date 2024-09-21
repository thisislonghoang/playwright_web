//Các hàm helper (ví dụ: chụp ảnh, lấy text,...)

import { Page } from '@playwright/test';

// Hàm chụp ảnh màn hình với timestamp
export async function captureScreenshot(page: Page, testName: string): Promise<void> {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filePath = `./screenshots/${testName}-${timestamp}.png`;
  await page.screenshot({ path: filePath });
}

