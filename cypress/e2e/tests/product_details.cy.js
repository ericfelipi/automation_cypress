import LoginPage from "../../pages/login_page";
import ProductsPage from "../../pages/products_page";
import ProductDetailsPage from "../../pages/product_details_page";

var login = new LoginPage
var products_page = new ProductsPage
var product_details = new ProductDetailsPage 


describe("Funcionalidade detalhes do produto", () =>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");        
    });

    it("Produto visualizado com sucesso",()=>{

        login.realize_login("standard_user", "secret_sauce");
        products_page.click_product();
        product_details.verify_products_details("exist");
        
    });

    it("Preço do produto na vitrine é o mesmo exibido na tela de produtos",()=>{

        login.realize_login("standard_user", "secret_sauce");
        cy.get(':nth-child(1)>.inventory_item_description').find('.inventory_item_price').invoke("text").then((el)=>{
            products_page.click_product()
            product_details.verify_products_details("exist");

            cy.get('.inventory_details_price').invoke("text").then((el2)=>{            
                expect(el).to.eq(el2);
            });            
        });

    });

});