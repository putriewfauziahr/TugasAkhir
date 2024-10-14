const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const loginPage = require('../pages/login.page');

Given(/^I open the KasirAja websites$/, async () => {
  await loginPage.openWebsite();
});



When(/^I do Login Process$/, async () => {
  await loginPage.login('store.new3@mailinator.com', '@123Testing');
});

Then(/^Login process is success$/, async () => {
  const storeName = await loginPage.storeName;
  await expect(storeName).toHaveText('Serba Ada Store');
});


