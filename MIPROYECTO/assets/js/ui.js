import { validarCampoNombre } from "./validaciones.js";
import { crearCategoria } from "./servicios-db.js";

export const $botonEnviar = document.querySelector("#enviar-formulario");
export const $botonRestablecer = document.querySelector("#restablecer-formulario");
export const $tablaCategorias = document.querySelector("#tabla-categorias");
const $campoNombre = document.querySelector("#input-nombre");
const $formulario = document.querySelector("#formulario");

export function mostrarMensajeSiEsExitoso(campoNombre) {
  const nombreValido = campoNombre;

  if (nombreValido === true) {
    actualizarMensajeFormulario("exitoso");
    return true;
  } else {
    actualizarMensajeFormulario();
    return false;
  }
}

export function mostrarErrores(llaves, errores, selector) {
  const $error = document.querySelector(selector);
  let erroresPresente = 0;
  $error.innerText = "";

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
  actualizarEstadoInput("", "#input-nombre");
  actualizarMensajeFormulario();
}

export function actualizarMensajeFormulario(estado = "") {
  const $mensaje = document.querySelector("#mensaje-formulario");
  if (estado === "exitoso") {
    $mensaje.innerText = "ID y Nombre guardado con exito";
    $mensaje.className = "alert alert-success";
  } else if (estado === "error") {
    $mensaje.innerText = "Error al crear la categoria";
    $mensaje.className = "alert alert-danger";
  } else if (estado === "existente") {
    $mensaje.innerText = "Esta categoria ya existe";
    $mensaje.className = "alert alert-danger";
  } else {
    $mensaje.innerText = estado;
    $mensaje.className = estado;
  }
}

export function actualizarEstadoInput(estado, selector) {
  const $input = document.querySelector(`${selector}`);
  if (estado === "valido") {
    $input.className = "form-control is-valid";
  } else if (estado === "invalido") {
    $input.className = "form-control is-invalid";
  } else {
    $input.className = "form-control";
    $input.innerText = "";
  }
}

export function enviarFormulario() {
  const datosValidos = mostrarMensajeSiEsExitoso(validarCampoNombre($campoNombre));
  if (datosValidos) {
    crearCategoria();
  }
}
