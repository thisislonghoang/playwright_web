import { Page } from "playwright";
import { profile } from 'src/utils/default';
import { KeyInternationalPayment } from "./KeyInternationalPayment";


export class CreateInternationalPayment {
    private page: Page;
    private keyPayment: KeyInternationalPayment;

    constructor(page: Page) {
        this.page = page;
        this.keyPayment = new KeyInternationalPayment(page);
    }

    // Điều hướng tới URL TTQT
    async switchToTabTTQT(): Promise<void> {
        await this.keyPayment.openNewTabAndNavigate(profile.G_URL_TTQT, 'TTQT_Portal');
    }

    async clickOnTransactionInitialization(): Promise<void> {
        await this.keyPayment.clickOnTransactionInitialization();

    }

    async dropdownSelectTypeService(optionSelectionType: string): Promise<void>{
        await this.keyPayment.DropdownSelectTypeService(optionSelectionType);
    }

}