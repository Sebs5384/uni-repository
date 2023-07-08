import { manejarErrores } from "./utilidades.js";

function validarPrecio(precio) {
  const $precio = precio.value;
  if (/^$/.test($precio)) {
    return "El campo precio no puede estar vacio";
  } else if (!/^[1-9][0-9]*$/.test($precio)) {
    return "El campo precio solo acepta numeros y no puede empezar con 0";
  } else if (!/^.{1,8}$/.test($precio)) {
    return "El campo precio solo acepta 8 digitos como maximo";
  }
  return "";
}

function validarNombre(nombre) {
  const $nombre = nombre.value;
  if (/^$/.test($nombre)) {
    return "El campo nombre no debe estar vacio";
  } else if (!/^[A-Za-z0-9\s-]+$/.test($nombre)) {
    return "El campo nombre solo acepta caracteres en mayuscula, minisculas, numeros y guiones";
  } else if (!/^.{1,20}$/.test($nombre)) {
    return "El campo nombre solo acepta 20 caracteres como maximo";
  } else if (!/^.{5,}$/.test($nombre)) {
    return "El campo nombre no puede tener menos de 5 caracteres";
  }
  return "";
}

function validarDescripcion(descripcion) {
  const $descripcion = descripcion.value;
  if (!/^[A-Za-z0-9\s]+$/.test($descripcion)) {
    return "El campo descripcion solo acepta caracteres en mayuscula, minisculas y numeros";
  } else if (!/^.{1,50}$/.test($descripcion)) {
    return "El campo descripcion solo acepta 50 caracteres como maximo";
  }
  return "";
}

function validarCategoria(categoria) {
  const $categoria = categoria.value;
  if (/\d/.test($categoria)) {
    return "El campo nombre no puede tener valores numericos";
  } else if (/^$/.test($categoria)) {
    return "El campo nombre no debe estar vacio";
  } else if (!/^[A-Za-z\s]+$/.test($categoria)) {
    return "El campo nombre solo acepta caracteres en mayuscula y minusculas";
  } else if (!/^.{1,15}$/.test($categoria)) {
    return "El campo categoria solo acepta 15 caracteres como maximo";
  } else if (!/^.{5,}$/.test($categoria)) {
    return "El campo categoria no puede tener menos de 5 caracteres";
  }
  return "";
}

export function validarCamposProducto($camposProducto) {
  const errorEnCampoNombre = validarNombre($camposProducto);
  const errorEnCampoDescripcion = validarDescripcion($camposProducto);
  const errorEnCampoPrecio = validarPrecio($camposProducto);

  const errorEnCampos = {
    nombre: errorEnCampoNombre,
    descripcion: errorEnCampoDescripcion,
    precio: errorEnCampoPrecio,
  };

  const esExistoso = manejarErrores(errorEnCampos, ".productos") === 0;
  return esExistoso;
}

export function validarCampoCategoria($campoNombre) {
  const errorEnCampoCategoria = validarCategoria($campoNombre);

  const errorEnCampo = {
    categoria: errorEnCampoCategoria,
  };

  const esExistoso = manejarErrores(errorEnCampo, "#error-nombre") === 0;
  return esExistoso;
}
