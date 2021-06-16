/// <reference types="cypress" />

context("Pruebas e2e calculadora", () => {
  it("Suma", () => {
    cy.visit("http://laserants.com/curso-cypress/calculadora.html");
    cy.get(".key-5").click();
    cy.get(".key-add").click();
    cy.get(".key-8").click();
    cy.get(".key-equals").click();
    cy.get(".key-equals").click();
    cy.get(".auto-scaling-text").should("have.text", "13");
  });
});
