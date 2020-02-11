module.exports = {
    '@tags' : ['offre'],

    'Login test' : function (browser) {
        const mainQuery = 'omdali1959@gmail.com';
        const mainQueryMdp = 'ibtihelarij';
        const mainQueryInputSelector = 'input[name="email"]';
        const mainQueryInputSelectorMdp = 'input[name="password"]';
        const submitButtonSelector = '.btn[block="true"]';
        const BurgerButton = 'button[class="btn btn-navbar navbar-toggler';
        browser 
            .url('https://app.takiacademy.com')
            .setValue(mainQueryInputSelector, mainQuery)
            .setValue(mainQueryInputSelectorMdp, mainQueryMdp)
            .click(submitButtonSelector)
            .click(BurgerButton)
            .saveScreenshot ('tests_output/LoginTest.png')
    },
    

    'Offres' : function (browser) {
        const ButtonAchat = 'button[class="btn btn-outline-success btn-sm btn-block mt-2"]';
        const ButtonBurger = 'button[class="btn btn-navbar navbar-toggler"]';
        const ButtonConfirm = 'button[class="swal-button swal-button--confirm"]';
        browser
            .click(ButtonBurger)
            .useXpath()
            .click("//a[text()='Offres']")
            .useXpath()
            .click("//button[text()='Acheter']")
            .pause(9000)
            .saveScreenshot ('tests_output/OffreTest.png')

            .end();
    }
}
