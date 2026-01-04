describe('Data-Driven Login Tests with Fixtures', () => {
    // Load fixture with alias '@users'
    beforeEach(() => {
        cy.fixture('user_credentials.json').as('users');
    });

    it('Should successfully log in with the Standard User data', () =>{
        cy.get('@users').then((userData) => {
            
            const standard = userData.standardUser; // Access the standardUser object

            cy.logInfo('USER DATA LOADED', `Attempting login for: ${standard.username}`);

            cy.login(standard.username, standard.password);

            cy.url().should('include', standard.expectedUrlSegment);
            cy.get('#flash').should('be.visible');
            cy.logInfo('LOGIN SUCCESS', `Redirected to ${standard.expectedUrlSegment}`);
        });
    });

    it('Should fail login with the Locked User data', () => {
        cy.get('@users').then((userData) => {

            const locked = userData.lockedUser;

            cy.login(locked.username, locked.password);

            cy.url().should('include', '/login');   // Assert we are still on the login page
            cy.get('#flash').should('contain', locked.expectedErrorMessage);
        });
    });
});