class CartPage{

    // Seletor de elementos

    btn_remove='//*[@id="remove-sauce-labs-backpack"]';
    lbl_qty='//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[1]';
    btn_checkout='//button[@data-test="checkout"]';
    
    //Ações / Funções

    assert_qty_cart(type){
        cy.xpath(this.lbl_qty).should(type);
    };

    remove_cart(){
        cy.xpath(this.btn_remove).click();
    };

    click_checkout(){
        cy.xpath(this.btn_checkout).click();
    };

    //Funcionalidade

    verify_if_cart_add(){
        this.assert_qty_cart("exist");
    };

    verify_if_remove_of_cart(){
        this.assert_qty_cart("not.exist");
    };

};

export default CartPage