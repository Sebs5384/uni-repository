const URL = "http://127.0.0.1:8080/backend/views/categorias.html";

describe("Testeo de alta categorias", () => {
  it("Testea el uso correcto de la pagina", () => {
    cy.visit(URL);

    cy.get("#input-id").type(1234);
    cy.get("#input-nombre").type("PLACADEVIDEOS");

    cy.get("#enviar-formulario").click();
    cy.get("#error-id").should("have.text", "");
    cy.get("#error-nombre").should("have.text", "");
    cy.get("#mensaje-exitoso").should("have.class", "alert alert-success");
    cy.get("#mensaje-exitoso").should("have.text", "ID y Nombre guardado con exito");

    cy.get("#restablecer-formulario").click();

    cy.get("#input-id").should("have.value", "");
    cy.get("#input-nombre").should("have.text", "");
    cy.get("#error-id").should("have.text", "");
    cy.get("#error-nombre").should("have.text", "");
    cy.get("#mensaje-exitoso").should("have.class", "");
    cy.get("#mensaje-exitoso").should("have.text", "");
  });

  it("Testea el uso incorrecto de la pagina", () => {
    cy.visit(URL);

    cy.get("#input-id").type(12345);
    cy.get("#input-nombre").type("placadevideo");

    cy.get("#enviar-formulario").click();

    cy.get("#input-id").should("have.class", "form-control is-invalid");
    cy.get("#input-nombre").should("have.class", "form-control is-invalid");

    cy.get("#error-id").should("have.text", "El campo ID solo acepta 4 digitos como maximo");
    cy.get("#error-id").should("have.class", "invalid-feedback");
    cy.get("#error-nombre").should("have.text", "El campo nombre solo acepta caracteres en mayuscula");
    cy.get("#error-nombre").should("have.class", "invalid-feedback");

    cy.get("#mensaje-exitoso").should("have.class", "");
    cy.get("#mensaje-exitoso").should("have.text", "");

    cy.get("#restablecer-formulario").click();

    cy.get("#input-id").should("have.value", "");
    cy.get("#input-nombre").should("have.text", "");
    cy.get("#input-id").should("have.class", "form-control");
    cy.get("#input-nombre").should("have.class", "form-control");
  });

  it("Testea el uso del boton guardar al principio del programa", () => {
    cy.visit(URL);

    cy.get("#enviar-formulario").click();

    cy.get("#error-id").should("have.text", "El campo ID no puede estar vacio");
    cy.get("#error-id").should("have.class", "invalid-feedback");
    cy.get("#error-nombre").should("have.text", "El campo nombre no debe estar vacio");
    cy.get("#error-nombre").should("have.class", "invalid-feedback");

    cy.get("#mensaje-exitoso").should("have.text", "");
    cy.get("#mensaje-exitoso").should("have.class", "");
  });
});
