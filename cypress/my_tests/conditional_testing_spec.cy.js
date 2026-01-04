describe('Conditional Testing', () => {
    
    // Use .skip to prevent this test from running if a condition is met
    it('Should ONLY run if the base URL is NOT the production URL', function() {
        
        const currentBaseUrl = Cypress.config('baseUrl');
        
        // Skip if production URL detected
        if (currentBaseUrl && currentBaseUrl.includes('prod.myapp.com')) {
            this.skip(); 
            return; // Exit the test function
        }
        
        cy.visit('/');
        cy.contains('Admin Dashboard').should('be.visible');
    });

    // Skip an entire suite
    const requiresAdmin = true;
    
    context('Admin Tests', () => { 
        if (!requiresAdmin) {
            it.skip('Skips all admin tests when flag is false', () => {
                // This test will be grayed out in the runner
            });
            return;
        }

        it('Runs only when admin flag is true', () => {
            cy.log('Admin test executing...');
            // ... admin-specific logic ...
        });
    });
});