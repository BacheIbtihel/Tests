module.exports = {
    '@tags' : ['logout'],

    'Login test' : function (browser) {
        const mainQuery = 'omdali1959@gmail.com';
        const mainQueryMdp = 'ibtihelarij';
        const mainQueryInputSelector = 'input[name="email"]';
        const mainQueryInputSelectorMdp = 'input[name="password"]';
        const submitButtonSelector = '.btn[block="true"]';
        const userButton = 'button[id="user"]';
        browser 
            .url('https://app.takiacademy.com')
            .setValue(mainQueryInputSelector, mainQuery)
            .setValue(mainQueryInputSelectorMdp, mainQueryMdp)
            .click(submitButtonSelector)
            .click(userButton)
    },

    'Logout test' : function (browser) {
        browser
            .click('li[id="logout"]')
            .saveScreenshot ('tests_output/LogoutTest.png')
            .pause(9000)
            .end();

    }
}