const $botonGuardar = document.querySelector("#guardar-operacion");
const $botonCancelar = document.querySelector("#cancelar-operacion");
const $formulario = document.querySelector("#form-categoria");

function convertirAString(integro) {
  const string = integro.toString();
  return string;
}

function manejarErrores(errores, selector) {
  const llaves = Object.keys(errores);
  const $error = document.querySelector(selector);
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

function resetearFormulario() {
  const $inputId = document.querySelector("#input-id");
  const $inputCategoria = document.querySelector("#input-categoria");
  const $exitoso = document.querySelector("#exitoso");

  $inputId.value = "";
  $inputId.className = "form-control";

  $inputCategoria.value = "";
  $inputCategoria.className = "form-control";

  $exitoso.innerText = "";
  $exitoso.className = "";
}
