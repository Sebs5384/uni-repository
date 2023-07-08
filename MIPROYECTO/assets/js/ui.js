import { validarCampoCategoria } from "./validaciones.js";
import { crearCategoria } from "./servicios-db.js";

export const $botonEnviar = document.querySelector("#enviar-formulario");
export const $botonRestablecer = document.querySelector("#restablecer-formulario");
export const $tablaCategorias = document.querySelector("#tabla-categorias");
const $campoCategoria = document.querySelector("#input-categoria");
const $formulario = document.querySelector("#formulario");

export function mostrarMensajeSiEsExitoso($campoCategoria) {
  const nombreCategoriaValido = $campoCategoria;

  if (nombreCategoriaValido === true) {
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
      $elemento.className = "form-control is-invalid mt-2";
      $error.innerText = error;
      $error.className = "invalid-feedback";
    } else {
      $elemento.className = "form-control is-valid mt-2";
    }
  });

  return erroresPresente;
}

export function resetearFormulario() {
  actualizarEstadoInput("", "#input-categoria");
  actualizarMensajeFormulario();
}

export function actualizarMensajeFormulario(estado = "") {
  const $mensaje = document.querySelector("#mensaje-formulario");
  if (estado === "exitoso") {
    $mensaje.innerText = "ID y Nombre guardado con exito";
    $mensaje.className = "alert alert-success mt-2";
  } else if (estado === "error") {
    $mensaje.innerText = "Error al crear la categoria";
    $mensaje.className = "alert alert-danger mt-2";
  } else if (estado === "existente") {
    $mensaje.innerText = "Esta categoria ya existe";
    $mensaje.className = "alert alert-danger mt-2";
  } else {
    $mensaje.innerText = estado;
    $mensaje.className = estado;
  }
}

export function actualizarEstadoInput(estado, selector) {
  const $input = document.querySelector(`${selector}`);
  if (estado === "valido") {
    $input.className = "form-control is-valid mt-2";
  } else if (estado === "invalido") {
    $input.className = "form-control is-invalid mt-2";
  } else {
    $input.className = "form-control mt-2";
    $input.innerText = "";
  }
}

export function enviarFormulario() {
  const datosValidos = mostrarMensajeSiEsExitoso(validarCampoCategoria($campoCategoria));
  if (datosValidos) {
    crearCategoria();
  }
}
