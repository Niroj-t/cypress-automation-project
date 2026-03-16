const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
   reporter: 'mochawesome',
   reporterOptions: {
    reportDir: 'cypress/reports',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
