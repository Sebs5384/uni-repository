document.querySelector("#guardar-operacion").onclick = function (event) {
  const $campoId = document.querySelector("#id-categoria");
  validarID($campoId);

  event.preventDefault();
};

function validarID(ID) {
  const $id = convertirAString(ID.value);
  if ($id % 1 !== 0) {
    return "El campo ID no acepta decimales";
  } else if (!/^[1-9][0-9]*$/.test($id)) {
    return "El campo ID solo acepta numeros y no puede empezar con 0";
  } else if (!/^.{1,4}$/.test($id)) {
    return "El campo ID solo acepta 4 digitos como maximo";
  }
  return "";
}

function validarCategorias(categoria) {
  if (/\d/.test(categoria)) {
    return "El nombre de la categoria no puede tener valores numericos";
  } else if (/^$/.test(categoria)) {
    return "El nombre de la categoria no debe estar vacio";
  } else if (!/^[A-Z]+$/.test(categoria)) {
    return "El nombre de la categoria debe ser solo en mayusculas";
  }
  return "";
}
