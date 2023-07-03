import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { insertarDatos, obtenerDatos } from "./servicios-db.js";

export const $botonEnviar = document.querySelector("#enviar-formulario");
export const $botonRestablecer = document.querySelector("#restablecer-formulario");
const $campoId = document.querySelector("#input-id");
const $campoNombre = document.querySelector("#input-nombre");

export function mostrarMensajeSiEsExitoso(campoId, campoNombre) {
  const idValido = campoId;
  const nombreValido = campoNombre;

  if (idValido && nombreValido === true) {
    actualizarMensajeFormulario("exitoso");
    return true;
  } else {
    actualizarMensajeFormulario();
    return false;
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

export function resetearFormulario() {
  const $inputId = document.querySelector("#input-id");
  const $inputNombre = document.querySelector("#input-nombre");

  $inputId.value = "";
  $inputId.className = "form-control";
  $inputNombre.value = "";
  $inputNombre.className = "form-control";

  actualizarMensajeFormulario();
}

export function actualizarMensajeFormulario(estado = "") {
  const $mensaje = document.querySelector("#mensaje-formulario");
  if (estado === "exitoso") {
    $mensaje.innerText = "ID y Nombre guardado con exito";
    $mensaje.className = "alert alert-success";
  } else if (estado === "error") {
    $mensaje.innerText = "Error; al insertar los datos.";
    $mensaje.className = "alert alert-danger";
  } else {
    $mensaje.innerText = estado;
    $mensaje.className = estado;
  }
}

export function enviarFormulario() {
  const datosValidos = mostrarMensajeSiEsExitoso(validarCampoId($campoId), validarCampoNombre($campoNombre));
  if (datosValidos) {
    insertarDatos();
    obtenerDatos();
  }
}
