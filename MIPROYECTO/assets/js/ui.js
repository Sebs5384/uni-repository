export const $botonEnviar = document.querySelector("#enviar-operacion");
export const $botonRestablecer = document.querySelector("#restablecer-operacion");
export const $campoId = document.querySelector("#input-id");
export const $campoNombre = document.querySelector("#input-nombre");

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
  const $mensajeExito = document.querySelector("#mensaje-exitoso");
  const $inputId = document.querySelector("#input-id");
  const $inputNombre = document.querySelector("#input-nombre");

  $inputId.value = "";
  $inputId.className = "";

  $inputNombre.value = "";
  $inputNombre.className = "";

  $mensajeExito.innerText = "";
  $mensajeExito.className = "";
}
