//Cấu hình Playwright

import { defineConfig } from '@playwright/test';
import { PlaywrightTestConfig, devices } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// // Tự động load file .env dựa vào ENVIRONMENT
// const environment = process.env.ENVIRONMENT || 'default';
// dotenv.config({ path: path.resolve(__dirname, `.env.${environment}`) });

// Hàm tạo tên thư mục theo thời gian hiện tại
// Tạo timestamp cho thư mục báo cáo
// const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
// const reportFolder = path.join(__dirname, `./playwright-report/${timestamp}`);

// // Đảm bảo rằng thư mục báo cáo tồn tại
// fs.mkdirSync(reportFolder, { recursive: true });


export default defineConfig({
  testDir: './tests',  // Thư mục chứa các file test
  timeout: 30 * 1000,  // Timeout cho mỗi test case
  // retries: 1,          // Số lần thử lại khi test fail
  use: {
    browserName: 'chromium',
    headless: false,
    // viewport: { width: 1280, height: 720 },
    viewport: null,  // Mở trình duyệt toàn màn hình
    launchOptions: {
      args: ['--start-maximized'],  // Mở trình duyệt toàn màn hình
    },
    screenshot: 'off', // only-on-failure:Chụp ảnh lại khi có lỗi, on:cho tất cả trường hợp
    video: 'on',  // Lưu video khi test fail-retain-on-failure, on: Ghi lại video cho mọi test
    trace: 'on-first-retry',  // Ghi lại khi có lỗi
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
      // use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
  ],

  reporter: [
    ['list'],  // In kết quả ra console theo dạng danh sách
    ['html', { outputFolder: 'playwright-report', open: 'never' }],  // Tạo báo cáo HTML trong thư mục ngẫu nhiên
    ['json', { outputFile: 'test-results.json' }]
  ]

});

