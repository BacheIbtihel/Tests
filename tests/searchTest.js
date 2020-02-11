module.exports = {
    '@tags' : ['search'],

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

    'Search test' : function (browser) {
        browser
            .click('button[class="btn btn-navbar toggle-search"]')
            .setValue('input[placeholder="Chercher"]','maths')
            .click('button[id="button-search"]')
            //.click("//a[text()='ex1 (Maths) proba + conique']")
            .saveScreenshot ('tests_output/SearchTest.png')
            .pause(9000)
            .end();
    }
}