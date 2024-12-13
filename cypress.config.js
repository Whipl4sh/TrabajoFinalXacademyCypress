const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: true, // Guardar los videos
  screenshotOnRunFailure: true, // Guardar las capturas de pantallas de los tests que fallaron
  videosFolder: "cypress/videos", // Le decimos en que carpeta guardar los videos
  screenshotsFolder: "cypress/screenshots", // Le decimos en que carpeta guardar las capturas
  
});
