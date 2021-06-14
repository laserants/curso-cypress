/// <reference types="cypress" />
import { build, fake } from "@jackfranklin/test-data-bot";

context("DemoQA.com", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Completar nombre y apellido", function () {
    cy.fixture("caracteresInvalidos").then((caracteresInvalidos) => {
      const userBuilder = build("User", {
        fields: {
          nombre: fake((f) => {
            const caracter = caracteresInvalidos[f.random.number(5)];
            return "%" + f.name.firstName() + caracter;
          }),
          apellido: fake((f) => f.name.lastName()),
        },
      });

      const usuario1 = userBuilder();
      cy.log(usuario1);
      cy.completarNombre(usuario1.nombre);
      cy.get("#lastName").type("prev-");
      cy.get("#lastName").completarCampo(usuario1.apellido);
      // cy.get("#lastName")
      //   .type(usuario1.apellido)
      //   .should("have.value", usuario1.apellido);
    });
  });
});
