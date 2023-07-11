import { obtenerProductos } from "./servicios-db.js";
import { crearTabla } from "./listado-categorias.js";

export async function mostrarListaProductos(categoria) {
  const productos = await obtenerProductos(categoria);
  crearTabla(productos, "#cuerpo-tabla-productos", elementosProducto);
}

export async function verProductos(categoria) {
  localStorage.setItem("categoria", categoria);
  window.location.href = `lista-productos.html?table=${categoria}`;
}

async function cargarProductos() {
  const categoria = localStorage.getItem("categoria");
  await mostrarListaProductos(categoria);
}

async function manejarBotonesProductos(event) {
  const $botonElegido = event.target;
  const $fila = $botonElegido.closest("tr");
  const $nombreProducto = $fila.firstElementChild.innerText;
  console.log($nombreProducto);
}

function elementosProducto(productos) {
  const $lista = document.createElement("tr");
  const $nombreProducto = document.createElement("td");
  const $descripcionProducto = document.createElement("td");
  const $precio = document.createElement("td");
  const $ultimaModificacion = document.createElement("td");
  const $contenedorBotones = document.createElement("td");
  const $botonEditar = document.createElement("button");
  const $botonBorrar = document.createElement("button");

  $nombreProducto.innerText = productos.nombre_producto;
  $descripcionProducto.innerText = productos.descripcion_producto;
  $precio.innerText = `$ ${productos.precio}`;
  $ultimaModificacion.innerText = productos.update_at;

  $botonEditar.innerText = "Editar";
  $botonBorrar.innerText = "Borrar";

  $botonEditar.className = "btn btn-outline-secondary btn-sm editar";
  $botonBorrar.className = "btn btn-outline-secondary btn-sm borrar";

  $contenedorBotones.appendChild($botonEditar);
  $contenedorBotones.appendChild($botonBorrar);

  $lista.appendChild($nombreProducto);
  $lista.appendChild($descripcionProducto);
  $lista.appendChild($precio);
  $lista.appendChild($ultimaModificacion);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

cargarProductos();
