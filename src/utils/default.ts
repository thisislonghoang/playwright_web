// default.ts
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Nạp file .env tương ứng với ENVIRONMENT
const ENVIRONMENT = process.env.ENVIRONMENT || 'DEFAULT';

// Xác định đường dẫn tới file .env tương ứng với môi trường
// const envFilePath = path.resolve(__dirname, `../env/.env.${ENVIRONMENT.toLowerCase()}`);
// const envFilePath = path.resolve(__dirname, `../../env/.env.${ENVIRONMENT.toLowerCase()}`);
const envFilePath = path.resolve(__dirname, `../../env/.env.${ENVIRONMENT.toLowerCase()}`);

// Kiểm tra xem file .env có tồn tại hay không
if (fs.existsSync(envFilePath)) {
  dotenv.config({ path: envFilePath });
} else {
  throw new Error(`Environment file ${envFilePath} not found!`);
}

// Tạo đối tượng profile dựa trên môi trường
export const profile = {
  BASE_URL: process.env.BASE_URL!,
  USERNAME: process.env.USERNAME!,
  PASSWORD: process.env.PASSWORD!,
  G_URL_TTQT: process.env.G_URL_TTQT!

  //add more
};
