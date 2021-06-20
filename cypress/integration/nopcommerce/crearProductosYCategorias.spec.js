/// <reference types="cypress" />
import LoginPage from "../../pom/nopcommerce/LoginPage";
import ProductListPage from "../../pom/nopcommerce/ProductListPage";
import AddCategoryPage from "../../pom/nopcommerce/AddCategoryPage";
import CategoriesListPage from "../../pom/nopcommerce/CategoriesListPage";
import AddProductPage from "../../pom/nopcommerce/AddProductPage";

context("Nop Commerce: Crear Producto", () => {
  const lp = new LoginPage();
  const plp = new ProductListPage();
  const app = new AddProductPage();
  const clp = new CategoriesListPage();
  const acp = new AddCategoryPage();

  before(() => {
    lp.iniciarSesion();
  });

  it("Crear una categoría y un producto", () => {
    // Pagina de listado de categorías
    clp.visit();
    clp.irHaciaAniadirCategoria();

    // Página de añadir categoría
    acp.completarNombre("Categoría Custom 1");
    acp.completarDescripcion("Esta es una categoria automatizada de pruebas");
    acp.mostrarEnLaPaginaPrincipal();
    acp.guardar();

    // Página de listado de productos
    plp.visit();
    plp.irHaciaAniadirProducto();

    // Página de añadir producto
    app.completarNombre("Producto Custom 1");
    app.completarDescripcionCorta("Producto automatizado");
    app.completarDescripcionLarga(
      "Este es un producto creado apartir de pruebas automatizadas"
    );
    app.completarPrecio("255");
    app.completarSku("123321");
    app.seleccionarCategoria("Categoría Custom 1");
    app.guardar();
  });

  // after(() => {
  //   lp.cerrarSesion();
  // });
});
