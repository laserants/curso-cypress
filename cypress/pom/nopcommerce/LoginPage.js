/// <reference types="cypress" />
export default class LoginPage {
  correoPorDefecto = "admin@yourstore.com";
  contraseniaPorDefecto = "admin";
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/login");
  }

  completarCorreo(correo = this.correoPorDefecto) {
    cy.get("#Email").completarCampo(correo);
  }

  completarContrasenia(pass = this.contraseniaPorDefecto) {
    cy.get("#Password").completarCampo(pass);
  }

  submit() {
    cy.get("button[type='submit']").click();
  }

  iniciarSesion() {
    this.visit();
    this.completarCorreo();
    this.completarContrasenia();
    this.submit();
  }

  cerrarSesion() {
    cy.get("a[href='/logout']").click();
  }
}
