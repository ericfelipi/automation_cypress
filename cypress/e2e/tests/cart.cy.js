import LoginPage from "../../pages/login_page";
import ProductsPage from "../../pages/products_page";
import CartPage from "../../pages/cart_page";

var login = new LoginPage
var products_page = new ProductsPage
var cart_page = new CartPage

describe("Funcionalidade de carrinho de compras", () =>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");        
    });

    it("Adicionar produto ao carrinho",()=>{

        login.realize_login("standard_user","secret_sauce");

        products_page.click_add_cart();
        products_page.click_cart();
        cart_page.verify_if_cart_add("exist");

    });

    it("Remover produto do carrinho",()=>{

        login.realize_login("standard_user","secret_sauce");

        products_page.click_add_cart();
        products_page.click_cart();
        cart_page.verify_if_cart_add("exist");
        cart_page.remove_cart();
        cart_page.verify_if_remove_of_cart("not.exist");

    });

});