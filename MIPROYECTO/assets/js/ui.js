import { validarCampoId, validarCampoNombre } from "./validaciones.js";

export const $botonEnviar = document.querySelector("#enviar-formulario");
export const $botonRestablecer = document.querySelector("#restablecer-formulario");
const $campoId = document.querySelector("#input-id");
const $campoNombre = document.querySelector("#input-nombre");

export function mostrarMensajeSiEsExitoso(campoId, campoNombre) {
  const $mensaje = document.querySelector("#mensaje-formulario");
  const idValido = campoId;
  const nombreValido = campoNombre;
  console.log($mensaje);

  if (idValido && nombreValido === true) {
    $mensaje.innerText = "ID y Nombre guardado con exito";
    $mensaje.className = "alert alert-success";
  } else {
    $exitoso.innerText = "";
    $exitoso.className = "";
  }
}

export function mostrarErrores(llaves, errores, selector) {
  const $error = document.querySelector(selector);
  const $formulario = document.querySelector("#formulario");
  $error.innerText = "";

  let erroresPresente = 0;

  llaves.forEach((llave) => {
    const error = errores[llave];
    const $elemento = $formulario.querySelector(`[name="${llave}"]`);

    if (error) {
      erroresPresente++;
      $elemento.className = "form-control is-invalid";
      $error.innerText = error;
      $error.className = "invalid-feedback";
    } else {
      $elemento.className = "form-control is-valid";
    }
  });
  return erroresPresente;
}

export function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId($campoId), validarCampoNombre($campoNombre));
}

export function resetearFormulario() {
  const $mensajeFormulario = document.querySelector("#mensaje-formulario");
  const $inputId = document.querySelector("#input-id");
  const $inputNombre = document.querySelector("#input-nombre");

  $inputId.value = "";
  $inputId.className = "form-control";

  $inputNombre.value = "";
  $inputNombre.className = "form-control";

  $mensajeFormulario.innerText = "";
  $mensajeFormulario.className = "";
}
