import { obtenerElemento } from "./utilidades.js";

export const $botonGuardar = obtenerElemento("#guardar-operacion");
export const $botonCancelar = obtenerElemento("#cancelar-operacion");

export function mostrarMensajeSiEsExitoso(campoId, campoNombre) {
  const $exitoso = document.querySelector("#mensaje-exitoso");
  const idValido = campoId;
  const nombreValido = campoNombre;

  if (idValido && nombreValido === true) {
    $exitoso.innerText = "ID y Nombre guardado con exito";
    $exitoso.className = "alert alert-success";
  } else {
    $exitoso.innerText = "";
    $exitoso.className = "";
  }
}

export function resetearFormulario() {
  const $formulario = obtenerElemento("#formulario");
  const $inputId = document.querySelector("#input-id");
  const $inputCategoria = document.querySelector("#input-nombre");
  const $exitoso = document.querySelector("#exitoso");
  const $errorId = document.querySelector("#error-id");
  const $errorNombre = document.querySelector("#error-nombre");

  $inputId.value = "";
  $inputId.className = "form-control";

  $inputCategoria.value = "";
  $inputCategoria.className = "form-control";

  $exitoso.innerText = "";
  $exitoso.className = "";

  $errorId.innerText = "";
  $errorId.className = "";

  $errorNombre.innerText = "";
  $errorNombre.className = "";
}
