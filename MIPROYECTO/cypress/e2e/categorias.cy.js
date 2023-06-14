const URL = "http://127.0.0.1:8080/backend/views/categorias.html";

describe("Testeo de alta categorias", () => {
  it("Testea el uso correcto de la pagina", () => {
    cy.visit(URL);

    cy.get("#input-id").type(1234);
    cy.get("#input-categoria").type("PLACADEVIDEO");

    cy.get("#guardar-operacion").click();
    cy.get("#error-id").should("have.text", "");
    cy.get("#error-nombre").should("have.text", "");
    cy.get("#exitoso").should("have.class", "alert alert-success");
    cy.get("#exitoso").should("have.text", "ID y Categoria guardado con exito");

    cy.get("#cancelar-operacion").click();

    cy.get("#input-id").should("have.value", "");
    cy.get("#input-categoria").should("have.text", "");
    cy.get("#error-id").should("have.text", "");
    cy.get("#error-nombre").should("have.text", "");
    cy.get("#exitoso").should("have.class", "");
    cy.get("#exitoso").should("have.text", "");
  });
});
