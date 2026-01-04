describe('API Interception and Fixtures', () => {
    
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('Should mock API response to control test data', () => {
        
        // Set up the mock response with exampl.json fixture
        cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments/*', { 
            statusCode: 200, 
            fixture: 'example.json' 
        }).as('getComment');
        
        // Click 'Get comment' to trigger API response
        cy.contains('Get Comment').click();

        // Wait for Mocked request to run and verify request details
        cy.wait('@getComment').then((interception) => {

            expect(interception.response.statusCode).to.equal(200);
            expect(interception.response.body.name).to.equal('Using fixtures to represent data'); // This data comes from the fixture
            cy.log('Successfully intercepted and mocked a real API call!');
        });
    });
});