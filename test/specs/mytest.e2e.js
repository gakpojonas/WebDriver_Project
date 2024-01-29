

describe('Demo Tests', function () {

    it('My First Test', async () => {

       browser.url('https://qatest-dev.indvp.com/');

       const mySearchField = $(".Header-Button_type_account");

       await mySearchField.click();

       await $("#email").setValue("jonasgakpo14@gmail.com");

       await $("#password").setValue("Cantona12");

       await $$(".Button")[2].click();

       await browser.pause(3000);
    
    })
})