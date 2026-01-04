const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    includeShadowDom: true,
    specPattern: 'cypress/{e2e,my_tests}/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
