Cypress.Commands.add('login', (type) => {
  cy.fixture('logear').then((data) => {
    const formData = data[type];
    cy.get('#user-name').clear().type(formData.userName);
    cy.get('#password').clear().type(formData.password);
    cy.get('#login-button').click();
  });
});
Cypress.Commands.add('addToCart', (buttonIndex) => {
        //cy.get('button.btn_primary')
        cy.get('button[data-test^="add-to-cart"]') 
          .eq(buttonIndex)  
          .should('be.visible')                       
          .click();                               
      });
Cypress.Commands.add('removeToCart', (buttonIndex) => {
   cy.get('button.btn_secondary')
    .eq(buttonIndex)  
    .click();                             
      });                    
Cypress.Commands.add('loginUserNameWrong', () => {
        cy.login('loginUsernameEmpty');
});
Cypress.Commands.add('loginPasswordWrong', () => {
        cy.login('loginPasswordEmpty');
});
Cypress.Commands.add('loginEmpty', () => {
        cy.login('loginEmpty');
});
Cypress.Commands.add('loginSuccessfull', () => {
        cy.login('loginOK');
});
Cypress.Commands.add('logOut', () => {
        cy.wait(1000)
        cy.contains('Open Menu').click()
        cy.contains('Logout').click()
});

Cypress.Commands.add('verifyPage', (statusPage) => {
    cy.url().should('eq', statusPage);
});
Cypress.Commands.add('verifyQCart', (expectedCount) => {
    cy.get('.shopping_cart_badge', { timeout: 5000 }) // Aumenta el tiempo de espera si es necesario
          .should('exist', 'El icono del carrito no existe')
          .and(
            'have.text',expectedCount.toString(),
            `La cantidad esperada de productos es ${expectedCount}`
          );
      });
Cypress.Commands.add('clickCartList', () => {
 cy.get('a[data-test="shopping-cart-link"]', { timeout: 5000 })
        .should('be.visible', 'El botón del carrito no es visible')
        .click();
});
Cypress.Commands.add('clickContinueShopping', () => {
 cy.get('#continue-shopping', { timeout: 5000 })
        .should('exist', 'El botón "Continue Shopping" no existe')
        .click()
})
Cypress.Commands.add('clickCheckOut', () => {
 cy.get('#checkout', { timeout: 3000 })
        .should('exist', 'El botón "Checkout" no existe')
        .click();
})
Cypress.Commands.add('itemInventoryQ', (expectedCount) => {
 cy.get('.inventory_item_name', { timeout: 5000 })
        .should('have.length', expectedCount, `Se esperaban ${expectedCount} productos en el inventario`);  
})
Cypress.Commands.add('CheckOutInfo', (type) => {
        cy.fixture('checkOut').then((data) => {
                const formData = data[type];
        cy.get('input[placeholder="First Name"]').clear().type(formData.firstName)
        cy.get('input[placeholder="Last Name"').clear().type(formData.lastName)
        cy.get('input[placeholder="Zip/Postal Code"').clear().type(formData.postalCode)
        cy.get('input[type="submit"]').click()
        })
})
Cypress.Commands.add('checkoutOK', () => {
        cy.CheckOutInfo('chkValid')        
})
Cypress.Commands.add('checkoutWrong', () => {
        cy.CheckOutInfo('chkInvalid')      
})
Cypress.Commands.add('chkErrorMassage', () => {
        cy.get('.error-button').should('exist')   
})
Cypress.Commands.add('clickContinueChkOne', () => {
        cy.wait(2000)
        cy.get('#continue').should('exist').dblclick()  
})
Cypress.Commands.add('clickFinish', () => {
        cy.wait(2000)
        cy.get('#finish').should('exist').dblclick()  
})
Cypress.Commands.add('clickBackHome', () => {
        cy.wait(2000)
        cy.get('#checkout').should('exist').click()  
})
//
Cypress.Commands.add('LoginProblemUser', () => {
        cy.login('loginProblemUser')
})
Cypress.Commands.add('chkProblem', () => {
        cy.get('#first-name').type('Pedro{enter}');  
})



