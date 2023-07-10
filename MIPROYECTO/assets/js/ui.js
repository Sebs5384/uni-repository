import { validarCampoCategoria, validarCamposProducto } from "./validaciones.js";
import { crearCategoria, insertarProducto } from "./servicios-db.js";

export const $botonEnviar = document.querySelector("#enviar-formulario");
export const $botonRestablecer = document.querySelector("#restablecer-formulario");
export const $tablaCategorias = document.querySelector("#tabla-categorias");
const $campoCategoria = document.querySelector("#input-categoria");
const $camposProducto = document.querySelectorAll(".productos");
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
  let erroresPresente = 0;

  if (selector.startsWith("#")) {
    llaves.forEach((llave) => {
      const $error = document.querySelector(selector);
      const error = errores[llave];
      const $elemento = $formulario.querySelector(`[name="${llave}"]`);

      if (error) {
        erroresPresente++;
        $elemento.className = "form-control is-invalid mt-2";
        $error.innerText = error;
        $error.className = "invalid-feedback";
      } else {
        $elemento.className = "form-control is-valid mt-2";
        $error.innerText = "";
      }
    });
  } else if (selector.startsWith(".")) {
    llaves.forEach((llave) => {
      const error = errores[llave];

      const $errores = $formulario.querySelector(`[name="${llave}"]`).nextElementSibling;
      const $elemento = $formulario.querySelector(`[name="${llave}"]`);

      if (error) {
        erroresPresente++;
        $elemento.className = "form-control is-invalid mt-2 productos";
        $errores.innerText = error;
        $errores.style.fontSize = "9px";
        $errores.className = "invalid-feedback";
      } else {
        $elemento.className = "form-control is-valid productos";
        $errores.innerText = "";
      }
    });
  }

  return erroresPresente;
}

export function resetearFormulario(campos) {
  actualizarEstadoCampos("", campos);
  actualizarMensajeFormulario();
}

export function actualizarMensajeFormulario(estado = "") {
  const $mensaje = document.querySelector("#mensaje-formulario");
  if (estado === "exitoso") {
    $mensaje.innerText = "Formulario enviado con exito";
    $mensaje.className = "alert alert-success mt-2";
  } else if (estado === "error") {
    $mensaje.innerText = "Error al3 crear la categoribnm,.-a";
    $mensaje.className = "alert alert-danger mt-2";
  } else if (estado === "existente") {
    $mensaje.innerText = "Esta categoria ya existe";
    $mensaje.className = "alert alert-danger mt-2";
  } else {
    $mensaje.innerText = estado;
    $mensaje.className = estado;
  }
}

export function actualizarEstadoCampos(estado, selector) {
  const $inputs = document.querySelectorAll(`${selector}`);

  $inputs.forEach(($input) => {
    if (estado === "valido") {
      $input.className = "form-control is-valid mt-2";
    } else if (estado === "invalido") {
      $input.className = "form-control is-invalid mt-2";
    } else {
      $input.className = "form-control mt-2";
      $input.innerText = "";
    }
  });
}

export function enviarFormulario(formulario) {
  if (formulario === "categoria") {
    const datosValidos = mostrarMensajeSiEsExitoso(validarCampoCategoria($campoCategoria));
    if (datosValidos) {
      crearCategoria();
    }
  } else if (formulario === "productos") {
    const datosValidos = mostrarMensajeSiEsExitoso(validarCamposProducto($camposProducto));
    if (datosValidos) {
      insertarProducto();
    }
  }
}
