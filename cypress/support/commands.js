// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * @name login
 * @description Custom command to perform a full user login sequence.
 * @param {string} username - The username to type.
 * @param {string} password - The password to type.
 */

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();

});

/**
 * Custom command to add a highly visible, custom entry to the Cypress Command Log
 * @param {string} name - The main title of the log entry
 * @param {string} message = The detail message to display
 */
Cypress.Commands.add('logInfo', (name, message) => {
    Cypress.log({
        name: 'INFO',
        displayName: name.toUpperCase(),
        message: message,
        consoleProps: () => {
            // Log the data to the brwoser console
            return {
                'Log Name': name,
                'Details': message
            };
        }
    });
});