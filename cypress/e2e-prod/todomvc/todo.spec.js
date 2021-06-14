/// <reference types="cypress" />

context("TODO MVC", () => {
  beforeEach(() => {
    cy.visit("examples/vanillajs/");
  });

  it("Ejercicio #1", () => {
    cy.get(".new-todo").type("Practicar Cypress{enter}", { delay: 30 });
    cy.get(".new-todo").type("Practicar Javascript{enter}", { delay: 30 });
  });
});
