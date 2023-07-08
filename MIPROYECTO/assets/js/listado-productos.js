import { obtenerProductos } from "./servicios-db.js";
import { crearTabla } from "./listado-categorias.js";

export async function mostrarListaProductos(categoria) {
  const productos = await obtenerProductos(categoria);
  console.log(productos);
}

export async function verProductos(categoria) {
  localStorage.setItem("categoria", categoria);
  window.location.href = `lista-productos.html?table=${categoria}`;
}

async function cargarProductos() {
  const categoria = localStorage.getItem("categoria");
  await mostrarListaProductos(categoria);
}

function elementosProducto(tabla) {
  const $lista = document.createElement("tr");
}

cargarProductos();
