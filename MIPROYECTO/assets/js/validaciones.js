function validarId(id) {
  const $id = convertirAString(id.value);
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

export function validarCampoId() {
  const $campoId = document.querySelector("#input-id");
  const errorEnCampoId = validarId($campoId);

  const errorEnCampo = {
    id: errorEnCampoId,
  };

  const esExistoso = manejarErrores(errorEnCampo, "#error-id") === 0;
  return esExistoso;
}

export function validarCampoNombre() {
  const $campoNombre = document.querySelector("#input-nombre");
  const errorEnCampoCategoria = validarNombre($campoNombre);

  const errorEnCampo = {
    nombre: errorEnCampoCategoria,
  };

  const esExistoso = manejarErrores(errorEnCampo, "#error-nombre") === 0;
  return esExistoso;
}
