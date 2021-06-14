/// <reference types="cypress" />

context("Selenium Easy: Validar alertas", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  beforeEach(() => {
    cy.visit(
      "https://www.seleniumeasy.com/test/javascript-alert-box-demo.html"
    );
  });

  it.only("Validar Alerta", () => {
    cy.on("window:alert", (tituloAlerta) => {
      expect(tituloAlerta).to.equal("I am an alert box!");
    });
    cy.contains("Click me!").click();
  });

  it.only("Validar Confirm: True", () => {
    cy.on("window:confirm", () => {
      return true;
    });
    cy.get(":nth-child(5) > .panel-body > .btn").click();
    cy.get("#confirm-demo").should("have.text", "You pressed OK!");
  });

  it.only("Validar Confirm: Cancel", () => {
    cy.on("window:confirm", () => {
      return false;
    });
    cy.get(":nth-child(5) > .panel-body > .btn").click();
    cy.get("#confirm-demo").should("have.text", "You pressed Cancel!");
  });

  it.only("Validar Prompt", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Fernando");
      cy.get(":nth-child(6) > .panel-body > .btn").click();
      cy.get("#prompt-demo").should(
        "have.text",
        "You have entered 'Fernando' !"
      );
    });
  });
});
