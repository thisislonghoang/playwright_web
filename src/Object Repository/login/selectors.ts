// loginSelectors.ts

export const getLoginSelectors = () => {
    return{
        usernameField: "//input[@id='username']",
        passwordField: "//input[@id='password']",
        loginButton: "//span[@class='submit-text']",
        makeAppButton: '//a[@id="btn-make-appointment"]'
    }

}