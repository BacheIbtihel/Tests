module.exports = {
    '@tags' : ['sd'],
    //'@unitTest' : true,

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
    
    'SD test' : function (browser) {      
        const startButton = 'button[class="btn btn-info btn-sm"]';
        browser
            .url('https://app.takiacademy.com/sessions')
            .click('div[id="event-64422"]')
            .waitForElementVisible(startButton, 2000)
            .click('button[class="btn btn-info btn-sm"]')
            .closeWindow()

            .pause(10000)
            //.saveScreenshot ('tests_output/SDTest.png')
            .end();      
        },
}