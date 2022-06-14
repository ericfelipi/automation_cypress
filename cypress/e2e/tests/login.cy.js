import LoginPage from "../../pages/login_page";
import ProductsPage from "../../pages/products_page";

var login = new LoginPage
var products_page = new ProductsPage

describe("Funcionalidade de login", () =>{

    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");        
    });

    it("Login com sucesso",()=>{
        
        login.realize_login("standard_user","secret_sauce");
    
        products_page.check_if_products_exist();
        
    });

    it("Login com falha - senha incorreta",()=>{

        login.realize_login("standard_user","senha_incorreta");

        login.assert_error_contains("Username and password do not match any user in this service");

    });

    it("Login com falha - usuário incorreto",()=>{

        login.realize_login("login_incorreto","secret_sauce");

        login.assert_error_contains("Username and password do not match any user in this service");

    });

    it("Login com falha - usuário bloqueado",()=>{

        login.realize_login("locked_out_user","secret_sauce");

        login.assert_error_contains("Sorry, this user has been locked out.");

    });

    it("Usuário com problema",()=>{

        login.realize_login("problem_user","secret_sauce");

        products_page.check_if_products_error("exist");

    });

    it("Usuário com falha de desempenho",()=>{

        login.realize_login("performance_glitch_user","secret_sauce");
        
        cy.get('.title',{timeout:5000}).should('be.visible');
        //Não funciona como deveria, pois, o site simula a falta de desempenho parando o relógio do navegador;
        //Caso fosse falta de desempenho mesmo, o .title não deveria ser visível
    });

});