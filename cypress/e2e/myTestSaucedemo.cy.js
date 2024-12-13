const { beforeEach } = require("mocha");
//Compra con User1: Standart_User
describe('Validacion de Login',{testIsolation:false},()=>{
    it('Precondiciones',() => {
        cy.visit('https://www.saucedemo.com');
      });

    it('Login wrong Password',()=>{
        cy.loginPasswordWrong()
        cy.verifyPage('https://www.saucedemo.com/')
    })
    it('Login wrong Username',()=>{
        cy.loginUserNameWrong()
        cy.verifyPage('https://www.saucedemo.com/')
    })
    it('Login Empty',()=>{
        cy.loginEmpty()
        cy.verifyPage('https://www.saucedemo.com/')
    })
    it('Login exitoso',()=>{
        cy.loginSuccessfull();
        cy.verifyPage('https://www.saucedemo.com/inventory.html');
        cy.logOut();
    })

})
describe('Verificacion de agregar productos',{testIsolation: false},()=>{
    it( 'Precondiciones',()=>{
        cy.clearCookies();
        cy.clearLocalStorage();
        cy,wait(5000)
        cy.visit('https://www.saucedemo.com')
        cy.loginSuccessfull(); 
        cy.url().should('include', '/inventory.html');
    })
it('Agregar productos al carrito',()=>{
    cy.wait(1000)
    cy.addToCart(0)
    cy.addToCart(1)
    cy.addToCart(2)
    cy.verifyQCart(3)//Verificar la cantidad de productos agregados al carrito
    })
    it('Elimnar productos al carrito',()=>{
        cy.wait(1000)
        cy.removeToCart(0)
        cy.removeToCart(1)
        cy.verifyQCart(1)//Verificar la cantidad de productos agregados al carrito
    })

})
describe('Validar el funcionamiento del CheckOut',{ testIsolation: false },()=>{
    it('Precondiciones',()=>{
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://www.saucedemo.com')
        cy.loginSuccessfull(); 
        cy.addToCart(0)
        cy.addToCart(1)
        cy.addToCart(2)
        cy.clickCartList()
        cy.url().should('include', '/cart.html');
    })
    it('Remover un producto del CheckOut',()=>{
        cy.removeToCart(0)
        cy.itemInventoryQ(2)//verifica la cantidad de items en el checkOut  
    })
    it('Verificar el boton Continue Shopping',()=>{
    cy.clickContinueShopping()
    cy.url().should('include', '/inventory.html');
    cy.go('back');

    })
    it('Verificar el boton Checkout',()=>{
    cy.clickCheckOut() 
    cy.url().should('include', '/checkout-step-one.html');
    })
})
describe('Validar el CheckOutOneAndTwo',{ testIsolation: false },()=>{
    it('Precondiciones',()=>{
        cy.clearLocalStorage()
        cy.clearCookies()
        cy.visit('https://www.saucedemo.com')
        cy.loginSuccessfull(); 
        cy.addToCart(0)
        cy.addToCart(1)
        cy.addToCart(2)
        cy.clickCartList()
        cy.clickCheckOut()
        cy.url().should('include', '/checkout-step-one.html');
        cy.clickContinueChkOne()
        cy.wait(2000)
        //cy.checkoutOK()
    })
    it('CheckOutStepOne succesfull',()=>{
        cy.wait(2000)
       cy.checkoutOK()
       cy.url().should('include', '/checkout-step-two.html');
    })
    it('CheckOutStepTwo succesfull',()=>{
        cy.clickFinish()
        cy.url().should('include', '/checkout-complete.html');
    })
    it('Complete CheckOut',()=>{
        cy.clickBackHome()
        cy.url().should('include', '/inventory.html');
    })
    it('logOut',()=>{
        cy.wait(2000)
        cy.logOut();
        cy.url().should('include', '.saucedemo.com');
    })
})
//Compra con User2
describe('Login Successfull',{testIsolation: false},()=>{
it('Login problemUser',() =>{
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit('https://www.saucedemo.com')
    cy.LoginProblemUser()
    cy.verifyPage('https://www.saucedemo.com/inventory.html')
    })
it('Agregar productos al carrito',()=>{
    cy.wait(3000)
    cy.addToCart(0)
    cy.addToCart(2)
    cy.addToCart(4)
    cy.clickCartList()
    cy.verifyPage('https://www.saucedemo.com/cart.html')
    cy.wait(2000)
    })
it('Validar CheckOut',()=>{
    cy.wait(2000)
    cy.clickCheckOut()
    cy.chkProblem()
    cy.clickCartList()
    cy.verifyPage("https://www.saucedemo.com/checkout-step-one.html")
   })   
    it('logOut',()=>{
        cy.wait(2000)
        cy.logOut();
        cy.url().should('include', '.saucedemo.com');
    })
})