class CheckoutPage{

    txt_firstName='//input[@placeholder="First Name"]';
    txt_lastName='//input[@placeholder="Last Name"]';
    txt_postalCode='//input[@placeholder="Zip/Postal Code"]';
    btn_continue='//input[@id="continue"]';
    txt_total='//div[@class="summary_total_label"]';
    btn_finish='//*[@id="finish"]';
    lbl_complete='//h2[@class="complete-header"]';

    type_first(firstname){
        cy.xpath(this.txt_firstName).type(firstname);
    };

    type_last(lastname){
        cy.xpath(this.txt_lastName).type(lastname);
    };

    type_zip(zipcode){
        cy.xpath(this.txt_postalCode).type(zipcode);
    };

    click_continue(){
        cy.xpath(this.btn_continue).click();
    };

    assert_total_value(type){
        cy.xpath(this.txt_total).should(type);
    };

    click_finish(){
        cy.xpath(this.btn_finish).click();
    };

    assert_complete_contains(value){
        cy.xpath(this.lbl_complete).contains(value);
    };

    realize_checkout(firstname,lastname,zipcode){
        this.type_first(firstname);
        this.type_last(lastname);
        this.type_zip(zipcode);
        this.click_continue();
    };

    check_if_shop_exist(){
        this.assert_total_value("exist");
    };

};

export default CheckoutPage