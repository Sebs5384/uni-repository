import { validarCampoId, validarCampoNombre } from "./validaciones";

const $botonGuardar = document.querySelector("#guardar-operacion");
$botonGuardar.onclick = (event) => {
  const $exitoso = document.querySelector("#exitoso");
  const $campoId = document.querySelector("#input-id");
  const $campoNombre = document.querySelector("#input-nombre");

  const idValido = validarCampoId($campoId);
  const nombreValido = validarCampoNombre($campoNombre);

  if (idValido && nombreValido === true) {
    $exitoso.innerText = "ID y Nombre guardado con exito";
    $exitoso.className = "alert alert-success";
  } else {
    $exitoso.innerText = "";
    $exitoso.className = "";
  }
};

const $botonCancelar = document.querySelector("#cancelar-operacion");
$botonCancelar.onclick = (event) => {
  resetearFormulario();
  event.preventDefault();
};

$botonGuardar.onclick = validarCampos(validarCampoId, validarCampoNombre);

function validarCampos(campoId, campoNombre) {
  const $exitoso = document.querySelector("#exitoso");

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
