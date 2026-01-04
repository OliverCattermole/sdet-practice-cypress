describe('Login Feature Basics', () => {
    it('Should successfully log in with valid credentials', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        
        // Input credentials
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        
        // Click Submit
        cy.get('button[type="submit"]').click();
        
        // Assert URL and flash message
        cy.url().should('include', '/secure');
        cy.get('#flash')
            .should('be.visible').and('contain', 'You logged into a secure area!');
        
        // Logout (Teardown)
        cy.contains('Logout').click();
        
        // Assert the page returns to the login page
        cy.url().should('include', '/login');
    });
});