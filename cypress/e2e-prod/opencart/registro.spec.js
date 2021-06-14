/// <reference types="cypress" />
import { build, fake, oneOf } from "@jackfranklin/test-data-bot";

const usuarioConstructor = build({
  fields: {
    nombre: fake((f) => f.name.firstName()),
    apellido: fake((f) => f.name.lastName()),
    correo: fake((f) => f.internet.email()),
    telefono: fake((f) => f.phone.phoneNumber("##########")),
    pass: fake((f) => f.internet.password()),
  },
});

context("Pruebas de login", () => {
  it("Probar registro satisfactorio", () => {
    const usuario = usuarioConstructor();
    // visitar la URL para crear usuario
    cy.visit("https://demo.opencart.com/index.php?route=account/register");

    cy.intercept("https://demo.opencart.com/index.php?route=account/register", {
      statusCode: 500,
    });

    cy.get("input[name='firstname']").type(usuario.nombre);
    cy.get("input[name='lastname']").type(usuario.apellido);
    cy.get("input[name='email']").type(usuario.correo);
    cy.get("input[name='telephone']").type(usuario.telefono);
    cy.get("input[name='password']").type(usuario.pass);
    cy.get("input[name='confirm']").type(usuario.pass);
    cy.get("input[name='agree']").check();
    cy.get("input[type='submit']").click();
  });
});
