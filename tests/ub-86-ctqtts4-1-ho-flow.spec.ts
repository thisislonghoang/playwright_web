import { test } from '@playwright/test';
import dataTest from '../fixtures/ttqt-9.json';
import { LoginPage } from '../src/pages/loginPage';
import { CommonKey } from 'src/commonWeb/keybasecommon';
import { CreateInternationalPayment } from 'src/bpm.web.ttqt/createInternationalPayment'; 
import { TestData } from 'src/interfaces/dataTest.interface';


// Lọc để chỉ lấy TC1
const filteredData = (dataTest as TestData[]).filter(dt => dt.tc_id === "9");

filteredData.forEach((dt: TestData) => {
  test(`Test case ID: ${dt.tc_id} - ${dt.tc_name}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    const commonkey = new CommonKey(page); // Khởi tạo CommonKey
    const createInternationalPayment = new CreateInternationalPayment(page);
    
    await loginPage.openLoginPage();    // Mở trang login
    await loginPage.login(dt.username, dt.password);  // Đăng nhập với dữ liệu từ TC1
    await createInternationalPayment.switchToTabTTQT();
    await createInternationalPayment.clickOnTransactionInitialization();
    await createInternationalPayment.dropdownSelectTypeService(dt.selectTypeService);
  });
});
