/// <reference types="cypress" />
export default class ProductListPage {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/Create");
  }

  completarNombre(nombre) {
    cy.get("#Name").completarCampo(nombre);
  }

  completarDescripcionCorta(descripcion) {
    cy.get("#ShortDescription").completarCampo(descripcion);
  }

  obtenerIframe() {
    return cy
      .get("#FullDescription_ifr")
      .its("0.contentDocument")
      .its("body")
      .then(cy.wrap);
  }

  completarDescripcionLarga(descripcion) {
    this.obtenerIframe()
      .find("p")
      .then((p) => {
        p.html(descripcion);
      });
  }

  completarSku(sku) {
    cy.get("#Sku").completarCampo(sku);
  }

  seleccionarCategoria(categoria) {
    cy.get("#SelectedCategoryIds").select(categoria, { force: true });
  }

  completarPrecio(precio) {
    cy.get("#product-price-area .k-formatted-value").click();
    cy.get("#Price").clear({ force: true }).type(precio, { force: true });
  }

  guardar() {
    cy.get('[name="save"]').click();
  }
}
