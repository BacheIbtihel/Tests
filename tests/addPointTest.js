module.exports = {
    '@tags' : ['addpoints'],
    
    'Login test' : function (browser) {
  
        const mainQuery = 'omdali1959@gmail.com';
        const mainQueryMdp = 'ibtihelarij';
        const mainQueryInputSelector = 'input[name="email"]';
        const mainQueryInputSelectorMdp = 'input[name="password"]';
        const submitButtonSelector = '.btn[block="true"]';
        const ButtonSelectorPoint = 'a[class="fix-display"]';
        const ButtonAddPoint = 'button[class="btn btn-sm btn-warning btn-block mt-4"]';

        browser 
            .url('https://app.takiacademy.com')
            //.assert.containsText(".x-float" , "Ou connectez-vous à votre compte")
            .setValue(mainQueryInputSelector, mainQuery)
            .setValue(mainQueryInputSelectorMdp, mainQueryMdp)
            .click(submitButtonSelector)
            .saveScreenshot ('tests_output/LoginTest.png')
            .click(ButtonSelectorPoint)

            .setValue('input[name=reference]','TT85478545')
            .setValue('input[name=amount]','300')
            .setValue('input[name=comment]','GOLD')
            .click(ButtonAddPoint)
            .saveScreenshot ('tests_output/PointsTests.png')

            .pause(900)
            .end();

    }
}
