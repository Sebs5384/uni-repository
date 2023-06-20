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
  }
  event.preventDefault();
};

$botonCancelar.onclick = (event) => {
  resetearFormulario();
  event.preventDefault(event);
};

function validarID(ID) {
  const $id = convertirAString(ID.value);
  if ($id % 1 !== 0) {
    return "El campo ID no acepta decimales";
  } else if (/^$/.test($id)) {
    return "El campo ID no puede estar vacio";
  } else if (!/^[1-9][0-9]*$/.test($id)) {
    return "El campo ID solo acepta numeros y no puede empezar con 0";
  } else if (!/^.{1,4}$/.test($id)) {
    return "El campo ID solo acepta 4 digitos como maximo";
  }
  return "";
}

function validarNombre(nombre) {
  const $categoria = nombre.value;
  if (/\d/.test($categoria)) {
    return "El campo nombre no puede tener valores numericos";
  } else if (/^$/.test($categoria)) {
    return "El campo nombre no debe estar vacio";
  } else if (!/^[A-Z]+$/.test($categoria)) {
    return "El campo nombre solo acepta caracteres en mayuscula";
  }
  return "";
}

function validarCampoId(ID) {
  const errorEnCampoId = validarID(ID);

  const errorEnCampo = {
    id: errorEnCampoId,
  };

  const esExistoso = manejarErrores(errorEnCampo, "#error-id") === 0;
  return esExistoso;
}

function validarCampoNombre(nombre) {
  const errorEnCampoCategoria = validarNombre(nombre);

  const errorEnCampo = {
    nombre: errorEnCampoCategoria,
  };

  const esExistoso = manejarErrores(errorEnCampo, "#error-nombre") === 0;
  return esExistoso;
}
