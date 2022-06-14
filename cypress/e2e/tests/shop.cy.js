import LoginPage from "../../pages/login_page";
import ProductsPage from "../../pages/products_page";
import CartPage from "../../pages/cart_page";
import CheckoutPage from "../../pages/checkout_page";

var login = new LoginPage;
var products_page = new ProductsPage;
var cart_page = new CartPage;
var checkout_page= new CheckoutPage;

describe("Funcionalidade de compras",()=>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
    });

    it("Compra efetuada com sucesso",()=>{

        login.realize_login("standard_user", "secret_sauce");
        products_page.click_add_cart();
        products_page.click_cart();
        cart_page.verify_if_cart_add("exist");
        cart_page.click_checkout();
        checkout_page.realize_checkout("nome_ficticio", "sobrenome_ficticio", "88067210");    
        checkout_page.check_if_shop_exist();
        checkout_page.click_finish();  
        checkout_page.assert_complete_contains("THANK YOU FOR YOUR ORDER");  

    });

});