/// <reference types="cypress" />
import LoginPage from "../../pom/nopcommerce/LoginPage";

context("Nop Commerce: Login", () => {
  const lp = new LoginPage();
  beforeEach(() => {
    lp.visit();
  });

  it("Probar Login", () => {
    lp.completarCorreo();
    lp.completarContrasenia();
    lp.submit();
  });
});
