export const $botonEnviar = document.querySelector("#enviar-operacion");
export const $botonRestablecer = document.querySelector("#restablecer-operacion");

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

export function mostrarErrores(llaves, errores, selector) {
  const $formulario = document.querySelector("#formulario");
  const $error = document.querySelector(selector);
  $error.innerText = "";

  let erroresPresente = 0;

  llaves.forEach((llave) => {
    const error = errores[llave];
    if (error) {
      erroresPresente++;
      $formulario[llave].className = "form-control is-invalid";
      $error.innerText = error;
      $error.className = "invalid-feedback";
    } else {
      $formulario[llave].className = "form-control is-valid";
    }
  });
  return erroresPresente;
}

export function resetearFormulario() {
  const $formulario = document.querySelector("#formulario");
  const $mensajeExito = document.querySelector("#mensaje-exitoso");

  $formulario.id.value = "";
  $formulario.id.className = "form-control";

  $formulario.nombre.value = "";
  $formulario.nombre.className = "form-control";

  $mensajeExito.innerText = "";
  $mensajeExito.className = "";
}
