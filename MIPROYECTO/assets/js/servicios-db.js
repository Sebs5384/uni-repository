import { actualizarEstadoCampos, actualizarMensajeFormulario } from "./ui.js";
export async function insertarProducto(tabla) {
  try {
    const URL = `http://localhost/MIPROYECTO/class/productos.php?tabla=${tabla}`;
    const $fomulario = document.querySelector("#formulario");
    const datosFormulario = new FormData($fomulario);

    const $respuesta = await fetch(URL, {
      method: "POST",
      body: datosFormulario,
    });
    const respuesta = await $respuesta.json();
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    actualizarMensajeFormulario("error");
    throw new Error(`Error en promesa, no se pudo insertar los datos, ${error}`);
  }
}

export async function obtenerProductos(tabla) {
  try {
    const URL = `http://localhost/MIPROYECTO/class/productos.php?tabla=${tabla}`;
    const $respuesta = await fetch(URL, {
      method: "GET",
    });
    const respuesta = await $respuesta.json();
    console.log(respuesta );
    return respuesta;
  } catch (error) {
    throw new Error(`Error en promesa, no se pudo obtener las filas, ${error}`);
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
    throw new Error(`Error en promesa, no se pudo obtener las tablas, ${error}`);
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
    const categoriaExistente = respuesta.estado === "existente";

    if (categoriaExistente) {
      actualizarEstadoCampos("invalido", "#input-categoria");
      actualizarMensajeFormulario("existente");
    } else {
      return respuesta;
    }
  } catch (error) {
    throw new Error(`Error en promesa, no se pudo crear la categoria, ${error}`);
  }
}

export async function borrarCategoria(categoria) {
  try {
    const URL = `http://localhost/MIPROYECTO/class/categorias.php?tabla=${categoria}`;
    const $respuesta = await fetch(URL, {
      method: "DELETE",
    });

    const respuesta = await $respuesta.json();
    return respuesta;
  } catch (error) {
    throw new Error(`Error en promesa, no se pudo borrar la categoria, ${error}`);
  }
}
