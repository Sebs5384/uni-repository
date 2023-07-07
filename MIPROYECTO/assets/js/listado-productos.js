import { obtenerProductos } from "./servicios-db.js";

export async function mostrarProductos(categoria) {
  const productos = await obtenerProductos(categoria);
  console.log(productos);
}

export async function verProductos(categoria) {
  localStorage.setItem("categoria", categoria);
  window.location.href = `lista-productos.html?table=${categoria}`;
}

async function inicializar() {
  const categoria = localStorage.getItem("categoria");
  await mostrarProductos(categoria);
}

inicializar();
