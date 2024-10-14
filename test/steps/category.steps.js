const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const categoryPage = require('../pages/category.page');
const loginPage = require('../pages/login.page');

Given(/^I open the Kasir Aja websites$/, async () => {
  await loginPage.openWebsite();
});



When(/^I do Login Process first$/, async () => {
  await loginPage.login('store.new3@mailinator.com', '@123Testing');
});

Then(/^Validate Login process is success$/, async () => {
  const storeName = await loginPage.storeName;
  await expect(storeName).toHaveText('Serba Ada Store');
});


When(/^I click Category Menu$/, async () => {
    await categoryPage.clickMenuKategori();
    const wordingDashborad = await categoryPage.wordingDashborad;
    const wordingKategori = await categoryPage.wordingKategori;
    await expect(wordingDashborad).toHaveText('dashboard');
    await expect(wordingKategori).toHaveText('kategori');
    await categoryPage.clickButtonTambah();
});

Then(/^I Add New Category$/, async () => {
    await categoryPage.addNewKategori('Buku', 'Buku Tulis, Buku Gambar, Novel, Kamus');
    await categoryPage.clickButtonSimpan();
    const successAddProduct = await categoryPage.toastMessageSuccessAddProduct;
    await expect(successAddProduct).toHaveText('item ditambahkan');
    
});