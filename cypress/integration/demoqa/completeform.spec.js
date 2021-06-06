/// <reference types="cypress" />
import { build, fake, oneOf } from "@jackfranklin/test-data-bot";

const estudianteConstructor = build({
  fields: {
    nombre: fake((f) => f.name.firstName()),
    apellido: fake((f) => f.name.lastName()),
    correo: fake((f) => f.internet.email()),
    genero: oneOf("Male", "Female", "Other"),
    numero: fake((f) => f.phone.phoneNumber("##########")),
    fechaNac: fake((f) => f.date.past(12)),
    asunto: "Computer Science",
    imagen: "images/persona.png",
    direccion: fake((f) => f.address.streetAddress()),
  },
});

context("Todas las pruebas relacionadas con completar el formulario", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("Completar form", function () {
    // Cuerpo de la prueba
    const estudiante = estudianteConstructor();
    const dia = estudiante.fechaNac.getDate().toString();
    const diaFormateado = `000${dia}`.slice(-3); // 001, 030, 010, 005
    const anio = estudiante.fechaNac.getFullYear();
    const mes = estudiante.fechaNac.getMonth();
    const meses = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    cy.get("#firstName").type("Fernando");
    cy.get("#firstName").type("{selectall}{del}");
    cy.get("#firstName").type("Fernando");
    cy.get("#firstName").clear();
    cy.get("#firstName").type(estudiante.nombre);
    cy.get("#lastName").type(estudiante.apellido);
    cy.get("#userEmail").type(estudiante.correo);
    cy.get(`input[name='gender'][value='${estudiante.genero}']`).check({
      force: true,
    });
    cy.get("#userNumber").type(estudiante.numero);
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select(mes.toString());
    cy.get(".react-datepicker__year-select").select(anio.toString());
    cy.get(
      `div.react-datepicker__day--${diaFormateado}:not(.react-datepicker__day--outside-month)`
    ).click();

    cy.get(".subjects-auto-complete__value-container").type(estudiante.asunto);
    cy.get("#react-select-2-option-0").click();

    cy.get("#hobbiesWrapper .custom-checkbox input[type='checkbox']").check({
      multiple: true,
      force: true,
    });

    cy.get(
      "#hobbiesWrapper .custom-checkbox:nth-child(3) input[type='checkbox']"
    ).uncheck({
      force: true,
    });

    cy.fixture("images/persona.png").as("persona");

    cy.get("#uploadPicture").then((el) => {
      // Convertir el archivo de base64 a blob
      const blob = Cypress.Blob.base64StringToBlob(this.persona, "image/png");

      // Generar un archivo apartir del blob
      const file = new File([blob], estudiante.imagen, {
        type: "image/png",
      });

      const list = new DataTransfer(); // Crear un DataTransfer para simular un drag and drop

      list.items.add(file); // añadir al drag and drop el archivo que creamos

      el[0].files = list.files;

      // Aún cuando cargamos al elemento el archivo debemos de emitir un evento de tipo change
      el[0].dispatchEvent(new Event("change", { bubbles: true }));
    });

    cy.get("#currentAddress").type(estudiante.direccion);

    cy.get("#state").click();
    cy.get("#react-select-3-option-1").click();

    cy.get("#city").click();

    cy.get("#react-select-4-option-1").click();

    cy.get("#submit").click();

    cy.get(".table tbody tr:nth-child(1) td:nth-child(2)").should(
      "have.text",
      `${estudiante.nombre} ${estudiante.apellido}`
    );

    cy.get(".table tbody tr:nth-child(2) td:nth-child(2)").should(
      "have.text",
      estudiante.correo
    );

    cy.get(".table tbody tr:nth-child(3) td:nth-child(2)").should(
      "have.text",
      estudiante.genero
    );

    cy.get(".table tbody tr:nth-child(4) td:nth-child(2)").should(
      "have.text",
      estudiante.numero
    );

    cy.get(".table tbody tr:nth-child(5) td:nth-child(2)").should(
      "have.text",
      `${dia} ${meses[mes]},${anio}`
    );

    cy.get(".table tbody tr:nth-child(6) td:nth-child(2)").should(
      "have.text",
      estudiante.asunto
    );

    cy.get(".table tbody tr:nth-child(8) td:nth-child(2)").should(
      "have.text",
      estudiante.imagen
    );

    cy.get(".table tbody tr:nth-child(9) td:nth-child(2)").should(
      "have.text",
      estudiante.direccion
    );
  });
});
