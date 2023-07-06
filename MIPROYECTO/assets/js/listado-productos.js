import { obtenerProductos } from "./servicios-db.js";

export async function mostrarProductos(categoria) {
  const productos = await obtenerProductos(categoria);
  console.log(productos);
}

function redirigirA(URL) {
  window.location.href = URL;
}

mostrarProductos("seba");
