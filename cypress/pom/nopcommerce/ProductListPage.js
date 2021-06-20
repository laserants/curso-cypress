/// <reference types="cypress" />
export default class ProductListPage {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Product/List");
  }

  irHaciaAniadirProducto() {
    cy.get("a[href='/Admin/Product/Create']").click();
  }

  completarNombreProducto(producto) {
    cy.get("#SearchProductName").completarCampo(producto);
  }

  buscarProducto() {
    cy.get("#search-products").click();
  }

  completarProductoYBuscar(producto) {
    this.completarNombreProducto(producto);
    this.buscarProducto();
  }

  validarProductoEnTabla(producto) {
    cy.get("#products-grid_wrapper")
      .contains(producto)
      .should("have.text", producto);
  }
}
