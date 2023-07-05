import { actualizarEstadoInput, actualizarMensajeFormulario } from "./ui.js";
export async function insertarDatos() {
  try {
    const URL = "http://localhost/MIPROYECTO/class/categorias.php";
    const $fomulario = document.querySelector("#formulario");
    const datosFormulario = new FormData($fomulario);

    const $respuesta = await fetch(URL, {
      method: "POST",
      body: datosFormulario,
    });
    const respuesta = await $respuesta.json();
    const json = JSON.parse(respuesta);
    console.log(json);
  } catch (error) {
    actualizarMensajeFormulario("error");
    throw new Error("Error en promesa, no se pudo insertar los datos");
  }
}

export async function obtenerFilas(table) {
  try {
    const URL = `http://localhost/MIPROYECTO/class/productos.php?table=${table}`;
    const $respuesta = await fetch(URL, {
      method: "GET",
    });
    const respuesta = await $respuesta.json();
    return respuesta;
  } catch (error) {
    throw new Error("Error en promesa, no se pudo obtener las filas");
  }
}

export async function obtenerCategorias() {
  try {
    const URL = "http://localhost/MIPROYECTO/class/categorias.php";
    const $respuesta = await fetch(URL, {
      method: "GET",
    });

    const respuesta = await $respuesta.json();
    return respuesta;
  } catch (error) {
    throw new Error("Error en promesa, no se pudo obtener las tablas");
  }
}

export async function crearCategoria() {
  try {
    const URL = "http://localhost/MIPROYECTO/class/categorias.php";
    const $formulario = document.querySelector("#formulario");
    const datosFormulario = new FormData($formulario);
    const $respuesta = await fetch(URL, {
      method: "POST",
      body: datosFormulario,
    });

    return $respuesta.json();
  } catch (error) {
    actualizarEstadoInput("invalido", "#input-nombre");
    actualizarMensajeFormulario("existente");
    throw new Error("Error en promesa, no se pudo crear la categoria");
  }
}
