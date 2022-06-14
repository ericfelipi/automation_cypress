class LoginPage{

    // Seletor de elementos

    txt_user = '//input[@placeholder="Username"]';
    txt_pass = '//input[@placeholder="Password"]';
    btn_login = '//input[@name="login-button"]';
    lbl_error = '//h3[@data-test="error"]';

    // Funções / Ações

    type_user(username){
        cy.xpath(this.txt_user).type(username);
        };

    type_pass(password){
        cy.xpath(this.txt_pass).type(password);
        };

    click_login(){
        cy.xpath(this.btn_login).click();
        };

    assert_error_contains(value){
        cy.xpath(this.lbl_error).contains(value);
        };

    // Funcionalidades / Fluxo lógico

    realize_login(username,password){
        this.type_user(username);
        this.type_pass(password);
        this.click_login();
    };

};

export default LoginPage
