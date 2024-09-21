// loginSelectors.ts
export const getTtqtSelectors = () => {
    return {
        usernameField: "//input[@id='username']",
        passwordField: "//input[@id='password']",
        loginButton: "//span[@class='submit-text']",
        menuCreate: "//a[@id='CREATE']",
        DropdownSelectTypeService:"//select[@id='singleselect-Single_Select1']",
        DroplistSlectTypeService: (option: string) => `//option[@value='${option}']`, // Sử dụng hàm để truyền tham số
        button_Chon_1: "//button[@id='button-button-Button1']",


        //Iframe
        iframeTTQT: "//iframe[@title='Desktop CTQT']",
        iframe_Chon_Loai_Chuyen_Tien: "//iframe[@title='Chọn loại Chuyển Tiền']"
        
    };
};


