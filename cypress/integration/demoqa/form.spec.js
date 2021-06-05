/// <reference types="cypress" />
import { build, fake } from "@jackfranklin/test-data-bot";

const usuarioBuilder = build('Usuario', {
  fields: {
    nombre: fake(f => f.name.firstName()),
    apellido: fake(f => f.name.lastName())
  }
})

context("Formulario de DemoQA", () => {
  before(() => {
    cy.fixture("datosFer").as("datosFer");
  });
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Completar nombre y apellido con fixtures", function () {
    cy.get("#firstName")
      .type(this.datosFer.nombre)
      .should("have.value", this.datosFer.nombre);
    cy.get("#lastName")
      .type(this.datosFer.apellido)
      .should("have.value", this.datosFer.apellido);
  });

  it("Completar nombre y apellido con builder", () => {
    const usuario1 = usuarioBuilder();

    cy.log(usuario1)

    cy.get("#firstName")
      .type(usuario1.nombre)
      .should("have.value", usuario1.nombre);
    cy.get("#lastName")
      .type(usuario1.apellido)
      .should("have.value", usuario1.apellido);
  })
});
