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

// Comandos padres
Cypress.Commands.add("completarNombre", (nombre) => {
  cy.get("#firstName").type(nombre).should("have.value", nombre);
});

// Ejemplos de comandos que podría hacer
// cy.login('admin')
// cy.logout()

// Comandos hijos
Cypress.Commands.add(
  "completarCampo",
  { prevSubject: true },
  (subject, value) => {
    cy.get(subject.selector)
      .clear({ force: true })
      .type(value, { force: true })
      .should("have.value", value);
  }
);
