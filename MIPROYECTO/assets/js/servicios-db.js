import { actualizarMensajeFormulario } from "./ui.js";
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
    throw new Error("Error en promesa");
  }
}

export async function obtenerDatos() {
  const URL = "http://localhost/MIPROYECTO/class/categorias.php";
  const $respuesta = await fetch(URL, {
    method: "GET",
  });

  const respuesta = await $respuesta.json();
  const json = JSON.parse(respuesta);
  console.log(json);
}
