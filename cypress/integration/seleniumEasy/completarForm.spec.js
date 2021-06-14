/// <reference types="cypress" />
import { build, fake, oneOf } from "@jackfranklin/test-data-bot";

const usuarioConstructor = build({
  fields: {
    nombre: fake((f) => f.name.firstName()),
    apellido: fake((f) => f.name.lastName()),
    correo: fake((f) => f.internet.email()),
    numero: fake((f) => f.phone.phoneNumber("##########")),
    direccion: fake((f) => f.address.streetAddress()),
    city: fake((f) => f.address.city()),
    estado: fake((f) => f.address.state()),
    zip: fake((f) => f.address.zipCode()),
    sitioweb: fake((f) => f.internet.domainName()),
    tieneHosting: oneOf("yes", "no"),
    comentario: fake((f) => f.lorem.text()),
  },
});

context("Selenium Easy: Completar Formulario", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  beforeEach(() => {
    cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
  });

  it("completar formulario", () => {
    const usuario = usuarioConstructor();
    cy.get("input[name='first_name']").type(usuario.nombre);
    cy.get("input[name='last_name']").type(usuario.apellido);
    cy.get("input[name='email']").type(usuario.correo);
    cy.get("input[name='phone']").type(usuario.numero);
    cy.get("input[name='address']").type(usuario.direccion);
    cy.get("input[name='city']").type(usuario.city);
    cy.get("select[name='state']").select(usuario.estado);
    cy.get("input[name='zip']").type(usuario.zip);
    cy.get("input[name='website']").type(usuario.sitioweb);
    cy.get(`input[type="radio"][value="${usuario.tieneHosting}"]`).check();
    cy.get("textarea[name='comment']").type(usuario.comentario);
    cy.get("button[type='submit']").click();
  });
});
