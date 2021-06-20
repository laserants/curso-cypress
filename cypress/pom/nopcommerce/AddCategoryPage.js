/// <reference types="cypress" />
export default class AddCategoryPage {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Category/Create");
  }

  completarNombre(nombreCategoria) {
    cy.get("input[name='Name']").completarCampo(nombreCategoria);
  }

  obtenerIframe() {
    return cy
      .get("#Description_ifr")
      .its("0.contentDocument")
      .its("body")
      .then(cy.wrap);
  }

  completarDescripcion(descripcion) {
    this.obtenerIframe()
      .find("p")
      .then((p) => {
        p.html(descripcion);
      });
  }

  mostrarEnLaPaginaPrincipal() {
    cy.get("#ShowOnHomepage").check();
  }

  guardar() {
    cy.get("button[name='save']").click();
  }
}
