import { mostrarMensajeSiEsExitoso, mostrarErrores, resetearFormulario } from "../ui.js";

describe("Testea mostrarMensajeSiExitoso", () => {
  beforeEach(() => {
    document.body.innerHTML = "<div id='mensaje-exitoso'></div>";
  });

  it("Deberia de mostrar un mensaje exitoso si los campos evaluan a true", () => {
    const campoId = true;
    const campoNombre = true;
    const $exitoso = document.querySelector("#mensaje-exitoso");

    mostrarMensajeSiEsExitoso(campoId, campoNombre);
    expect($exitoso.innerText).toBe("ID y Nombre guardado con exito");
    expect($exitoso.className).toBe("alert alert-success");
  });

  it("Deberia de dejar de mostrar el mensaje exitoso si uno de los campos no evalua a true", () => {
    const campoId = false;
    const campoNombre = true;

    const $exitoso = document.querySelector("#mensaje-exitoso");

    mostrarMensajeSiEsExitoso(campoId, campoNombre);
    expect($exitoso.innerText).toBe("");
    expect($exitoso.className).toBe("");
  });

  describe("Testea mostrarErrores", () => {
    beforeEach(() => {
      document.body.innerHTML = "<form id='formulario'><input type='number' id='input-id' name='id' class=''><div id='error-id'></div></form>";
    });

    it("Deberia mostrar error por pantalla si existen errores", () => {
      const errores = {
        id: "El campo ID no acepta decimales",
      };
      const selector = "#error-id";
      const llaves = Object.keys(errores);
      const $error = document.querySelector("#error-id");
      const result = mostrarErrores(llaves, errores, selector);

      expect(result).toBe(1);
      expect($error.innerText).toBe("El campo ID no acepta decimales");
      expect($error.className).toBe("invalid-feedback");
    });

    it("Deberia mostrar validez por pantalla si no existen errores", () => {
      const errores = {
        id: "",
      };
      const selector = "#error-id";
      const llaves = Object.keys(errores);
      const $formulario = document.querySelector("#formulario");
      const $error = document.querySelector("#error-id");
      const result = mostrarErrores(llaves, errores, selector);

      expect(result).toBe(0);
      expect($error.innerText).toBe("");
      expect($error.className).toBe("");
    });
  });

  describe("Testea resetearFormulario", () => {
    beforeEach(() => {
      document.body.innerHTML = "<input type='number' id='input-id' name='id'><input type='text' id='input-nombre'><div id='error-id'><div id='mensaje-exitoso'><div id='error-nombre'></div></div></div>";
    });

    it("Deberia de resetear el formulario si este contiene clases exitosas", () => {
      const $inputId = document.querySelector("#input-id");
      const $inputNombre = document.querySelector("#input-nombre");
      const $mensajeExito = document.querySelector("#mensaje-exitoso");

      $inputId.value = "123";
      $inputNombre.value = "PLACADEVIDEO";

      $inputId.className = "form-control is-valid";
      $inputNombre.className = "form-control is-valid";

      $mensajeExito.innerText = "ID y Nombre guardado con exito";
      $mensajeExito.className = "alert alert-success";

      resetearFormulario();

      expect($inputId.value).toBe("");
      expect($inputId.className).toBe("form-control");
      expect($inputNombre.value).toBe("");
      expect($inputNombre.className).toBe("form-control");
      expect($mensajeExito.innerText).toBe("");
      expect($mensajeExito.className).toBe("");
    });

    it("Deberia de resetear el formulario si este contiene errores", () => {
      const $inputId = document.querySelector("#input-id");
      const $inputNombre = document.querySelector("#input-nombre");
      const $errorId = document.querySelector("#error-id");
      const $errorNombre = document.querySelector("#error-nombre");

      $inputId.value = 1.2;
      $inputNombre.value = "placadevideo";

      $inputId.className = "form-control is-invalid";
      $inputNombre.className = "form-control is-invalid";

      $errorId.innerText = "El campo ID no acepta decimales";
      $errorNombre.innerText = "El campo nombre solo acepta caracteres en mayuscula";
      $errorId.className = "invalid-feedback";
      $errorNombre.className = "invalid-feedback";

      resetearFormulario();

      expect($inputId.value).toBe("");
      expect($inputId.className).toBe("form-control");
      expect($inputNombre.value).toBe("");
      expect($inputNombre.className).toBe("form-control");
    });

    it("Deberia de resetear el formulario si esta vacio", () => {
      const $inputId = document.querySelector("#input-id");
      const $inputNombre = document.querySelector("#input-nombre");

      $inputId.value = "";
      $inputNombre.value = "";
      $inputId.className = "";
      $inputNombre.className = "";

      resetearFormulario();

      expect($inputId.value).toBe("");
      expect($inputId.className).toBe("form-control");
      expect($inputNombre.value).toBe("");
      expect($inputNombre.className).toBe("form-control");
    });
  });
});
