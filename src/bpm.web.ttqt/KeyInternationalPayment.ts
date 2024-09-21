import { BrowserContext, Page } from "playwright";
import { CommonKey } from "src/commonWeb/keybasecommon";
import { getTtqtSelectors } from "../Object Repository/TTQT/selectors";



export class KeyInternationalPayment {
    private page: Page;
    private common: CommonKey;
    private context: BrowserContext;
    private selector: ReturnType<typeof getTtqtSelectors>;

    constructor(page: Page) {
        this.page = page;
        this.context = page.context();
        this.common = new CommonKey(page);
        this.selector = getTtqtSelectors();
        console.log(getTtqtSelectors()); // Kiểm tra giá trị trả về

    }

    async openNewTabAndNavigate(newUrl: string, switchToTitle?: string): Promise<void> {
        // Mở tab mới trong cùng context
        const newPage = await this.context.newPage();

        // Điều hướng đến URL mới trong tab vừa mở
        await newPage.goto(newUrl);

        // Chờ một khoảng thời gian ngắn để đảm bảo trang đã tải hoàn toàn
        await this.common.waitForTimeout(); // Chờ 2 giây

        // Nếu cần chuyển đổi tab theo tiêu đề, thực hiện chuyển đổi
        if (switchToTitle) {
            const pages = this.context.pages();
            for (const p of pages) {
                const title = await p.title();
                if (title === switchToTitle) {
                    this.page = p;
                    await this.page.bringToFront(); // Chuyển tab lên phía trước
                    break;
                }
            }
        }
    }

    async clickOnTransactionInitialization(): Promise<void> {
        const outerFrame = this.page.frameLocator(this.selector.iframeTTQT);
        await outerFrame.locator(this.selector.menuCreate).waitFor();
        await outerFrame.locator(this.selector.menuCreate).click();
    }

    async DropdownSelectTypeService(optionSelectionType: string): Promise<void> {
        const iframe_Chon_Loai_Chuyen_Tien = this.page.frameLocator(this.selector.iframe_Chon_Loai_Chuyen_Tien);
        await iframe_Chon_Loai_Chuyen_Tien.locator(this.selector.DropdownSelectTypeService).waitFor();
        await iframe_Chon_Loai_Chuyen_Tien.locator(this.selector.DropdownSelectTypeService).click();
        await iframe_Chon_Loai_Chuyen_Tien.locator(this.selector.DropdownSelectTypeService).selectOption(optionSelectionType); //select option CTDN
        console.log(optionSelectionType); // Kiểm tra giá trị trả về

        // Lấy text của dropdown sau khi chọn
        const selectedOptionText = await iframe_Chon_Loai_Chuyen_Tien.locator(this.selector.DropdownSelectTypeService).locator('option:checked').innerText();
        console.log(`Selected option text: ${selectedOptionText}`);

        await iframe_Chon_Loai_Chuyen_Tien.locator(this.selector.button_Chon_1).click();

    }

}