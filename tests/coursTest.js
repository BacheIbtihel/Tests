module.exports = {
    '@tags' : ['cours'],

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
    
    'Cours' : function (browser) {
        const ButtonBurger = 'button[class="btn btn-navbar navbar-toggler"]';

        browser
            //.click(ButtonBurger)
            //.useXpath()
            //.click("//a[text()='Matières']")
            .url('https://app.takiacademy.com/subjects')
            .click('div[id="subject-78"]')
            .click('div[id="chapter-undefined"]')
            .click('div[id="lesson-58404"]')
            .saveScreenshot ('tests_output/CoursTest.png')

            .pause(10000)
            .end();
    },
    
}