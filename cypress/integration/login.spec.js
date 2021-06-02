/// <reference types="cypress" />

context("Pruebas de login", () => {
  it("Probar login satisfactorio", () => {
    // visitar la URL para crear usuario
    cy.visit("http://thedemosite.co.uk/addauser.php");

    // Rellenar formulario de añadir usuario
    cy.get('input[name="username"]').type("telusprueba1", { delay: 500 });
    cy.get('input[name="username"]')
      .type("{selectall}{del}")
      .type("telusprueba1")
      .should("have.value", "telusprueba1");
    cy.get('input[name="password"]').type("telusprueba1");
    cy.get('input[name="FormsButton2"]').click();

    // Visitar la pagina para probar el usuario y contraseña
    cy.get('form a[href="login.php"]').click();
    cy.location("pathname").should("contains", "login.php");

    // Rellenar formulario para inicio de sesión
    cy.get('input[name="username"]').type("telusprueba1");
    cy.get('input[name="password"]').type("telusprueba1");
    cy.get('input[name="FormsButton2"]').click();
    cy.get("table big blockquote > blockquote b").should(
      "have.text",
      "**Successful Login**"
    );
  });
});
