describe('End-to-End Workflow', () =>{

    it('Completes the full document lifecycle', () => {
        // Login
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('button[type="submit"]').click();
        cy.get('.flash.success').should('be.visible');

        // Upload
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/config.json', {
            action: 'drag-drop'
        });

        // Download and extract - set up known data
        const fileUrl = 'https://jsonplaceholder.typicode.com/todos/1';
        const fileName = 'stable_data.json';

        // Request file and write to downloads folder
        cy.request(fileUrl).then((response) => {
        cy.writeFile(`cypress/downloads/${fileName}`, response.body);
        });

        // Read and extract
        cy.readFile(`cypress/downloads/${fileName}`).then((data) => {
            const userId = data.userId;

            cy.logInfo('User ID EXTRACTED:', userId);

            // Visit input page and enter user id (int)
            cy.visit('https://the-internet.herokuapp.com/inputs');
            cy.get('input[type="number"]').type(userId); 
        });

    });

});