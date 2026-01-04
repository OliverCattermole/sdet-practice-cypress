describe('My First Test', () => {
  it('Visits the correct URL', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click() // Find an element with the text 'type' and click it
    cy.url().should('include', '/commands/actions') // Assert the URL changed
  })
})