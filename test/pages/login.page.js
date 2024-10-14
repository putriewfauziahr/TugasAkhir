class loginPage {
  
    async openWebsite() {
      await browser.url('https://kasirdemo.vercel.app/');
    }

    get emailInput() {
      return $('#email');
    }

    get passwordInput() {
      return $('#password');
    }
  
    get clickLoginButton() {
      return $('button.chakra-button.css-1n8i4of');
    }

    get storeName(){
        return $('dt.chakra-stat__label.css-14go5ty')
    }

    get errorMessage(){
        return $('.chakra-alert__icon css-vjdx0l')
    }

    

    async login(email, password) {
      await this.emailInput.setValue(email);
      await this.passwordInput.setValue(password);
      await this.clickLoginButton.click();
    }



  }
  
  module.exports = new loginPage ();
  