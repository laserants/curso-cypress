/// <reference types="cypress" />

context("Alertas DEMOQA", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/alerts");
  });
  it("Click Button to see alert", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You clicked a button");
    });

    cy.get("#alertButton").click();
  });

  it("On button click, alert will appear after 5 seconds", () => {
    cy.on("window:alert", (str) => {
      expect(str).to.equal("This alert appeared after 5 seconds");
    });

    cy.get("#timerAlertButton").click();
  });

  it("On button click, confirm box will appear and select cancel", () => {
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Do you confirm action?");
    });

    cy.on("window:confirm", () => false);

    cy.get("#confirmResult").should("have.text", "You selected Cancel");
  });

  it("On button click, confirm box will appear and select accept", () => {
    cy.get("#confirmButton").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Do you confirm action?");
    });

    cy.on("window:confirm", () => true);

    cy.get("#confirmResult").should("have.text", "You selected Ok");
  });

  it("On button click, prompt box will appear", () => {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Fernando Barrios");
      cy.get("#promtButton").click();
    });

    cy.get("#promptResult").should("have.text", "You entered Fernando Barrios");
  });
});
