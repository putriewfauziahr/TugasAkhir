class categoryPage {

    get wordingDashborad() {
      return $('a[href="/dashboard"]');
    }

    get wordingKategori() {
        return $('a[href="/categories"]');
    }

    get toastMessageSuccessAddProduct(){
        return $('div.chakra-alert__desc.css-zycdy9');
    }

    get inputNama() {
        return $('#nama');
    }
    
    get inputDeskripsi() {
        return $('#deskripsi');
    }
    


    async clickButtonSimpan(){
        await $('button.chakra-button.css-l5lnz6').click();
    }

    async clickButtonTambah(){
        await $('a[href="/categories/create"]').click();
    }
    
    async clickMenuKategori(){
      await $('body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-tnxwfz div.chakra-stack.css-owjkmg a:nth-child(6) div.css-ewi1jp div.css-1xhj18k > div.css-1mqa38q').click();
    }


    async addNewKategori(nama, deskripsi) {
        await this.inputNama.setValue(nama);
        await this.inputDeskripsi.setValue(deskripsi);
    }

}
  
  module.exports = new categoryPage ();
  
