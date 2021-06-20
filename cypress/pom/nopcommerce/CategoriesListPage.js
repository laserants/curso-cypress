/// <reference types="cypress" />
export default class CategoriesListPage {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/Admin/Category/List");
  }

  irHaciaAniadirCategoria() {
    cy.get("a[href='/Admin/Category/Create']").click();
  }
}
