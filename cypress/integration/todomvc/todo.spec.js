/// <reference types="cypress" />

context("TODO MVC", () => {
  beforeEach(() => {
    cy.visit("https://todomvc.com/examples/vanillajs/");
  });
  
  it("Ejercicio #1", () => {
    cy.get('.new-todo').type("Practicar Cypress{enter}", {delay: 30});
    cy.get('.new-todo').type("Practicar Javascript{enter}", {delay: 30});
  });

  // Insertar 1 tarea
  // Marcar la tarea como completada
  // Ir al a la opción para ver los completados
  // Verificar que solo exista una tarea
  // Verificar que la tarea contenga el texto con el que la creamos
  it("Ejercicio #2", () => {
    cy.get('.new-todo').type("Practicar Cypress{enter}")
    cy.get(".todo-list .toggle").click();
    cy.get(".filters a[href='#/completed']").click();
    cy.get(".todo-list li").should("have.length", 1);
    cy.get(".todo-list li label").should("have.text", "Practicar Cypress")
  })

  // Click en cada una de las opciones “All”, “Active”, “Completed” y verificar que en la URL cargue la página adecuada.
  it("Ejercicio #3", () => {
    cy.get('.new-todo').type("Practicar Cypress{enter}");
    cy.get(".filters a[href='#/completed']").click();
    cy.location("href").should("contains", "#/completed");

    cy.get(".filters a[href='#/active']").click();
    cy.location("href").should("contains", "#/active");

    cy.get(".filters a[href='#/']").click();
    cy.location("href").should("not.contain", "#/active");
    cy.location("href").should("not.contain", "#/completed");
  })

  // Insertar una tarea
  // Verificar el texto de “x item left”, donde la X incremente en 1.
  // Insertar una segunda tarea y verificar lo mismo
  // Eliminar una tarea y verificar el decremento

  it("Ejercicio 4", () => {
    cy.get(".new-todo").type("Practicar Cypress{enter}");
    cy.get(".todo-count strong").should("have.text", "1");
    cy.get(".new-todo").type("Practicar Cypress{enter}");
    cy.get(".todo-count strong").should("have.text", "2");
    cy.get(".todo-list li:nth-child(1) .destroy").click({force: true});
    cy.get(".todo-count strong").should("have.text", "1");
  });

  // Insertar 7 tareas
  // Completar las tareas impares
  it("Ejercicio 5", () => {
    cy.get(".new-todo").type("Tarea #1{enter}");
    cy.get(".new-todo").type("Tarea #2{enter}");
    cy.get(".new-todo").type("Tarea #3{enter}");
    cy.get(".new-todo").type("Tarea #4{enter}");
    cy.get(".new-todo").type("Tarea #5{enter}");
    cy.get(".new-todo").type("Tarea #6{enter}");
    cy.get(".new-todo").type("Tarea #7{enter}");

    cy.get(".todo-list li:nth-child(2n + 1) .toggle").click({multiple: true});
  })

  // Insertar 3 tareas
  // Verificar que la opción de “Clear completed” no existe.
  // Completar una tarea
  // Verificar que la opción de “Clear completed” existe.
  it("Ejercicio #6", () => {
    cy.get(".new-todo").type("Tarea #1{enter}");
    cy.get(".new-todo").type("Tarea #2{enter}");
    cy.get(".new-todo").type("Tarea #3{enter}");
    cy.get(".clear-completed:visible").should("have.length", 0);
    cy.get(".todo-list li:nth-child(1) .toggle").click();
    cy.get(".clear-completed:visible").should("have.length", 1);
  });

  // Insertar 1 tarea.
  // Completar la tarea
  // Click en “Clear completed”
  // Verificar que no existen tareas
  it("Ejercicio #7", () => {
    cy.get(".new-todo").type("Tarea #1{enter}");
    cy.get(".todo-list li:nth-child(1) .toggle").click();
    cy.get(".clear-completed").click();
    cy.get(".todo-list li").should("have.length", 0);
  })

  // Insertar 1 tarea.
  // Click en la X que sale a la derecha de la tarea (cuando hacemos hover)
  // Verificar que ya no aparezca la tarea

  it("Ejercicio #8", () => {
    cy.get(".new-todo").type("Tarea #1{enter}");
    cy.get(".destroy").click({force: true});
    cy.get(".todo-list li").should("have.length", 0);
  })

});
