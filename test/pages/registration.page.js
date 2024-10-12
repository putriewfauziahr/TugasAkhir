class registrationPage {
  
    async open() {
      await browser.url('https://kasirdemo.vercel.app/');
    }

    get nameInput() {
      return $('#name');
    }
  
    get emailInput() {
      return $('#email');
    }

    get passwordInput() {
      return $('#password');
    }
  
    get clickRegisterButton() {
      return $('body.chakra-ui-light:nth-child(2) div.css-1y1lvqg div.css-16in75i div.css-1w7v3tn div.css-11jlpvc > button.chakra-button.css-1n8i4of:nth-child(5)');
    }

    get successToastMessage(){
      return $('body.chakra-ui-light:nth-child(2) li.chakra-toast div.chakra-toast__inner div.chakra-alert.css-1hp6ttu div.css-njbp03 > div.chakra-alert__desc.css-zycdy9'); 
    }

    get errorMessage(){
      return $('div.chakra-alert.css-qwanz3:nth-child(1)')
    }



    async clickRegister(){
      await $('a[href="/register"]').click();
    }

    async regist(name, email, password) {
      await this.nameInput.setValue(name);
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.clickRegisterButton.click();
    }

    async registWithoutInputNamaToko(email, password) {
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.clickRegisterButton.click();
    }

    async registWithoutInputEmail(name, password) {
      await this.nameInput.setValue(name);
      await this.passwordInput.setValue(password);
      await this.clickRegisterButton.click();
    }




  }
  
  module.exports = new registrationPage ();
  