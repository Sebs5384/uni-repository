export function obtenerElemento(selector) {
  const $elemento = document.querySelector(selector);
  return $elemento;
}

export function manejarErrores(errores, selector) {
  const $formulario = obtenerElemento("#formulario");
  const $error = document.querySelector(selector);
  const llaves = Object.keys(errores);
  let erroresPresente = 0;

  $error.innerText = "";
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
