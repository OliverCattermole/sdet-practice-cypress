
describe('File Management in Cypress', () => {
    
    it('Upload a file from the fixtures folder', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');

        // Target the 'Choose File' input and upload image
        cy.get('#file-upload').selectFile('cypress/fixtures/logo.png');

        // Click upload button
        cy.get('#file-submit').click();

        // Assertion: Verify the success message and filename
        cy.get('h3').should('have.text', 'File Uploaded!');
        cy.get('#uploaded-files').should('contain', 'logo.png');

    });

    it('Upload a file via Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');

        cy.get('#drag-drop-upload').selectFile('cypress/fixtures/logo.png', {
            action: 'drag-drop'
        });

        cy.get('#drag-drop-upload').should('contain', 'logo.png');
    });

    it('Download a file and verify that it exists in the downloads folder', () => {
        cy.visit('https://the-internet.herokuapp.com/download');

        // Trigger the download by clicking the first link
        cy.get('.example a').first().then(($link) => {
            const fileName = $link.text();

            // Use wrap to turn the jQuery object back into a Cypress object
            cy.wrap($link).click();

            // Verify the file exists in the download folder
            cy.readFile(`cypress/downloads/${fileName}`).should('exist');
            
            cy.log(`Successfully verified download of: ${fileName}`);
        });
    });

    it('Read downloaded text file', () => {
        const fileName = 'bb.txt';

        // Read the file
        cy.readFile(`cypress/downloads/${fileName}`).then((fileContent) => {
            // fileContent is now a raw string
            expect(fileContent).to.contain('123');

            cy.log(`Contents of file: ${fileContent}`)
        });
    });

});