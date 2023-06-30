import { mostrarMensajeSiEsExitoso, mostrarErrores } from "../ui.js";

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
      const $formulario = document.querySelector("#formulario");
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
});
