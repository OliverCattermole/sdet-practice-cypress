describe('Reusable Command Text', () => {

    it('Login using the custom cy.login command and check dashboard features', () => {
        // Valid credentials
        cy.login('tomsmith', 'SuperSecretPassword!');

        // Assertions post login
        cy.log('Login Successful');
        cy.get('h4').should('contain', 'Welcome to the Secure Area.');

        // Teardown
        cy.contains('Logout').click();
        cy.url().should('not.include', '/secure');

    });

    it('Login with invalid credentials', () =>{
        // Invalid credentials
        cy.login('baduser', 'badpassword');

        cy.url().should('include', '/login');

        cy.get('#flash').should('contain', 'Your username is invalid!');

    });

});