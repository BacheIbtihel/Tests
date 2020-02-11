module.exports = {
    '@tags' : ['phone'],
    
    'Login Mobile test' : function (browser) {
        const mainQuery = '54688916';
        const mainQueryMdp = 'ibtihelarij';
        const mainQueryInputSelector = 'input[name="email"]';
        const mainQueryInputSelectorMdp = 'input[name="password"]';
        const submitButtonSelector = '.btn[type="submit"]';
      
        browser 
            .url('https://app.takiacademy.com')
            .setValue(mainQueryInputSelector, mainQuery)
            .setValue(mainQueryInputSelectorMdp, mainQueryMdp)
            .click(submitButtonSelector)
            .saveScreenshot ('tests_output/LoginPhoneTest.png')

            .pause(900)
            .end();

    }
}