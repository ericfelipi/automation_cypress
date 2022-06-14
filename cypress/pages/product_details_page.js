class ProductDetailsPage {

    // Seletor de elementos

    img_products = '//a[@id="item_4_img_link"]/img';
    img_details_product = '//img[@class="inventory_details_img"]';
   
    //Ações / Funções

    click_product() {
        cy.xpath(this.img_products).click();
    };

    assert_product_details(value) {
        cy.xpath(this.img_details_product).should(value)
    };

    

    //Funcionalidade

    verify_products_details() {
        this.assert_product_details("exist")
    };
    
};

export default ProductDetailsPage