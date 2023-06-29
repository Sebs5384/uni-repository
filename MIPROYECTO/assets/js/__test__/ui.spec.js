import { mostrarMensajeSiEsExitoso } from "../ui.js";

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
});
