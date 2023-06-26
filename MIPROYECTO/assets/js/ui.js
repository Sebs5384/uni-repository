import { obtenerElemento } from "./utilidades.js";

export const $botonGuardar = obtenerElemento("#guardar-operacion");
export const $botonCancelar = obtenerElemento("#cancelar-operacion");

export function mostrarMensajeSiEsExitoso(campoId, campoNombre) {
  const $exitoso = obtenerElemento("#mensaje-exitoso");
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

  $formulario.id.value = "";
  $formulario.id.className = "form-control";

  $formulario.nombre.value = "";
  $formulario.nombre.className = "form-control";

  $formulario.exitoso.innerText = "";
  $formulario.exitoso.className = "";

  $formulario.error.innerText = "";
  $formulario.error.className = "";
}
