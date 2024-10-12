const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const registrationPage = require('../pages/registration.page');

Given(/^I open the KasirAja website$/, async () => {
  await registrationPage.open();
  await registrationPage.clickRegister();
});



When(/^I do Registration Process$/, async () => {
  await registrationPage.regist('Serba Ada Store', 'store.new3@mailinator.com', '@123Testing');
});

Then(/^Registration process is success$/, async () => {
  const toastMessage = await registrationPage.successToastMessage;
  await expect(toastMessage).toHaveText('anda dapat menggunakan login sekarang');
});



When(/^I do Registration Without Input Nama Toko$/, async () => {
  await registrationPage.registWithoutInputNamaToko('putri.store@mailinator.com', '@123Testing');
});

Then(/^Error Message for Empty Nama Toko Field is Shown$/, async () => {
  const errorMessage = await registrationPage.errorMessage;
  await expect(errorMessage).toHaveText('"name" is not allowed to be empty');
});



When(/^I do Registration Without Input Email$/, async () => {
  await registrationPage.registWithoutInputEmail('Store New Test', '@123Testing');
});

Then(/^Error Message for Empty Email Field is Shown$/, async () => {
  const errorMessage = await registrationPage.errorMessage;
  await expect(errorMessage).toHaveText('"email" is not allowed to be empty');
});



When(/^I do Registration Process but Input Invalid Format Email$/, async () => {
  await registrationPage.regist('Serba Ada Store', 'putri store @mailinator.com', '@123Testing');
});

Then(/^Error Message for Invalid Format Email is Shown$/, async () => {
  const errorMessage = await registrationPage.errorMessage;
  await expect(errorMessage).toHaveText('"email" must be a valid email');
});

