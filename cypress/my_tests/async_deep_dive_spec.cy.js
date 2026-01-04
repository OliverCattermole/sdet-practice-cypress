describe('Advanced Asynchronous Waiting and Closures', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/traversal');
  });

  it('Should correctly find and store the first item for later reuse', () => {
    cy.get('.traversal-pagination')
      .find('li') // Find all list items
      .first() // Select only the first one
      .invoke('text') // Extract text content
      
      // Use .then() to grab the raw text and wrap it as a Cypress alias
      .then((text) => {
        // Use cy.wrap() to make the JS variable available as a Cypress alias
        cy.wrap(text).as('firstItemText'); 
      });

    cy.get('@firstItemText').then((storedText) => {
      // Assert that the stored text is exactly what we expected
      expect(storedText.trim()).to.equal('«'); // The first item's text is '«'
      cy.log(`Stored text successfully retrieved: ${storedText.trim()}`);
    });
  });

  it('Should retry until a complex condition (text change) is met', () => {
    
    cy.get('.traversal-table td') // Find a cell in the table
      .eq(4) // Select the 5th cell (zero-indexed)
      .as('statusCell')
      .should('contain', '34'); // Assert initial value

    // Simulated Action: Assume this click updates the status cell text to 'Ready'
    cy.log('Simulating an action that asynchronously updates the status cell...');
    
    cy.get('.dropdown-toggle').click(); // Makes a dropdown visible

    // Use .should(callback) to poll for a complex state
    // Wait until the text of the status cell is NO LONGER '34'.
    cy.get('@statusCell').should(($cell) => {
      
      // $cell is the jQuery object yielded by Cypress.
      const text = $cell.text();
      
      // ***NOTE: This line is designed to FAIL by timing out, demonstrating the retry mechanism (4 secs by default).***
      expect(text).to.not.equal('34'); 
      
    });
    
    cy.log('Successfully waited for a custom, complex condition to be met.');
  });

});