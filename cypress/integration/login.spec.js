context("Pruebas de Login", () => {
    it("Crear una cuenta", () => {
      cy.visit("http://thedemosite.co.uk/addauser.php");
      cy.get("input[name='username']").type("telusqatest");
      cy.get("input[type='password']").type("telusqatest");
      cy.get("input[name='FormsButton2']").click();
      cy.get('form a[href="login.php"]').click();
      cy.location('pathname').should('contain', 'login.php');
      cy.get("input[name='username']").type("telusqatest");
      cy.get("input[type='password']").type("telusqatest");
      cy.get("input[name='FormsButton2']").click();
      cy.get(".auto-style1 big blockquote > blockquote b").should('have.text', '**Successful Login**');
    });
  });
  