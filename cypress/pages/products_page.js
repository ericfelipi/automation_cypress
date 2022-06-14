class ProductsPage{
    
    // Seletor de elementos

    lbl_products='//span[@class="title"]';
    img_products='//a[@id="item_4_img_link"]/img';
    btn_add_cart='//*[@id="add-to-cart-sauce-labs-backpack"]';
    btn_cart='//a[@class="shopping_cart_link"]';
    
    //Ações / Funções

    assert_products_should(type){
        cy.xpath(this.lbl_products).should(type);
    };

    assert_products_error(type){
        cy.xpath(this.img_products).should(type);
    };

    click_add_cart(){
        cy.xpath(this.btn_add_cart).click();
    };

    click_cart(){
        cy.xpath(this.btn_cart).click();
    };

    click_product(){
        cy.xpath(this.img_products).click();
    };

    //Funcionalidade

    check_if_products_exist(){
        this.assert_products_should("exist");
    };

    check_if_products_error(){
        this.assert_products_error("exist");
    };
};

export default ProductsPage;