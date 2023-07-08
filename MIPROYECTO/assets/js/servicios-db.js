import { actualizarEstadoInput, actualizarMensajeFormulario } from "./ui.js";
export async function insertarProducto() {
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

export async function obtenerProductos(table) {
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
    console.log(datosFormulario);
    const $respuesta = await fetch(URL, {
      method: "POST",
      body: datosFormulario,
    });

    const respuesta = await $respuesta.json();
    console.log(respuesta.estado);
    const categoriaExistente = respuesta.estado === "existente";

    if (categoriaExistente) {
      actualizarEstadoInput("invalido", "#input-categoria");
      actualizarMensajeFormulario("existente");
    } else {
      return respuesta;
    }
  } catch (error) {
    throw new Error("Error en promesa, no se pudo crear la categoria");
  }
}

export async function borrarCategoria(categoria) {
  try {
    const URL = `http://localhost/MIPROYECTO/class/categorias.php?table=${categoria}`;
    const $respuesta = await fetch(URL, {
      method: "DELETE",
    });

    const respuesta = await $respuesta.json();
    return respuesta;
  } catch (error) {
    throw new Error("Error en promesa, no se pudo borrar la categoria");
  }
}
