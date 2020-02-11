module.exports = {
    '@tags' : ['transfert'],

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

    'Transfert test' : function (browser) {
        browser
            .click('li[id="transfrer-points"]')
            .setValue('input[class="form-control mb-2"]','114442')
            .setValue('input[placeholder="Montant"]','10')
            .click('button[class="btn btn-sm btn-block mb-2"]')
            .saveScreenshot ('tests_output/TransfertTest.png')
            .pause(9000)
            .end();

    }
}