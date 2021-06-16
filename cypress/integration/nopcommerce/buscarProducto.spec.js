/// <reference types="cypress" />
import LoginPage from "../../pom/nopcommerce/LoginPage";
import ProductListPage from "../../pom/nopcommerce/ProductListPage";

context("Nop Commerce: Login", () => {
  const lp = new LoginPage();
  const pp = new ProductListPage();
  before(() => {
    lp.iniciarSesion();
  });

  it("Buscar un producto", () => {
    pp.visit();
    pp.completarNombreProducto("Build your own computer");
    pp.buscarProducto();
    pp.validarProductoEnTabla("Build your own computer");
  });
});
