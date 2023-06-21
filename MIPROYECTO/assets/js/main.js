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
  event.preventDefault();
};

$botonCancelar.onclick = (event) => {
  resetearFormulario();
  event.preventDefault();
};
