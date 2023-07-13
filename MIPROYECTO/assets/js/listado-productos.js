import { obtenerProductos } from "./servicios-db.js";
import { crearTabla } from "./listado-categorias.js";
import { $tabla } from "./ui.js";

export function verProductos(categoria) {
  localStorage.setItem("categoria", categoria);
  window.location.href = `lista-productos.html?table=${categoria}`;
}

export async function mostrarListaProductos(categoria) {
  const productos = await obtenerProductos(categoria);
  crearTabla(productos, "#cuerpo-tabla-productos", listaProductos, subListaProductos);
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

function listaProductos(productos, index) {
  const $lista = document.createElement("tr");

  const $id = document.createElement("td");
  $id.innerText = productos.id;
  $id.className = "hidden";

  const $nombreProducto = document.createElement("td");
  const $descripcionProducto = document.createElement("td");
  const $precio = document.createElement("td");
  const $ultimaModificacion = document.createElement("td");
  $nombreProducto.innerText = productos.nombre_producto;
  $descripcionProducto.innerText = productos.descripcion_producto;
  $precio.innerText = `$ ${productos.precio}`;
  $ultimaModificacion.innerText = productos.update_at;

  const $botonEditar = document.createElement("button");
  $botonEditar.innerText = "Editar";
  $botonEditar.className = "btn btn-outline-secondary btn-sm editar";
  $botonEditar.dataset.bsToggle = "collapse";
  $botonEditar.dataset.bsTarget = `#editar${index + 1}`;

  const $botonBorrar = document.createElement("button");
  $botonBorrar.innerText = "Borrar";
  $botonBorrar.className = "btn btn-outline-secondary btn-sm borrar";

  const $espacioBlanco = document.createTextNode(" ");

  const $contenedorBotones = document.createElement("td");
  $contenedorBotones.appendChild($botonEditar);
  $contenedorBotones.appendChild($espacioBlanco);
  $contenedorBotones.appendChild($botonBorrar);

  $lista.appendChild($id);
  $lista.appendChild($nombreProducto);
  $lista.appendChild($descripcionProducto);
  $lista.appendChild($precio);
  $lista.appendChild($ultimaModificacion);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

function subListaProductos(index) {
  const $subFilaEditar = document.createElement("tr");
  $subFilaEditar.className = "collapsed-row";

  const $colapsable = document.createElement("td");
  $colapsable.colSpan = 5;

  const $contenidoColapsable = document.createElement("div");
  $contenidoColapsable.className = "collapse";
  $contenidoColapsable.id = `editar${index + 1}`;

  const $labelNombre = document.createElement("label");
  const $nuevoNombre = document.createElement("input");
  $labelNombre.className = "form-label small";
  $labelNombre.innerText = "Nuevo nombre";
  $nuevoNombre.type = "text";
  $nuevoNombre.className = "form-control";
  $nuevoNombre.name = "nombre";

  const $labelDescripcion = document.createElement("label");
  const $nuevaDescripcion = document.createElement("textarea");
  $labelDescripcion.className = "form-label small";
  $labelDescripcion.innerText = "Nueva descripcion";
  $nuevaDescripcion.className = "form-control";
  $nuevaDescripcion.name = "descripcion";

  const $labelPrecio = document.createElement("label");
  const $nuevoPrecio = document.createElement("input");
  $labelPrecio.className = "form-label small";
  $labelPrecio.innerText = "Nuevo precio";
  $nuevoPrecio.type = "number";
  $nuevoPrecio.className = "form-control";
  $nuevoPrecio.name = "precio";

  const $botonActualizar = document.createElement("button");
  const $botonCancelar = document.createElement("button");
  const $espacioBlanco = document.createTextNode(" ");
  $botonActualizar.innerText = "Actualizar";
  $botonCancelar.innerText = "Cancelar";
  $botonActualizar.className = "btn btn-outline-secondary btn-sm actualizar";
  $botonCancelar.className = "btn btn-outline-secondary btn-sm";
  $botonCancelar.dataset.bsToggle = "collapse";
  $botonCancelar.dataset.bsTarget = `#editar${index + 1}`;

  const $contenedorNuevoNombre = document.createElement("td");
  $contenedorNuevoNombre.className = "col-3";
  $contenedorNuevoNombre.appendChild($labelNombre);
  $contenedorNuevoNombre.appendChild($nuevoNombre);

  const $contenedorNuevaDescripcion = document.createElement("td");
  $contenedorNuevaDescripcion.className = "col-4";
  $contenedorNuevaDescripcion.appendChild($labelDescripcion);
  $contenedorNuevaDescripcion.appendChild($nuevaDescripcion);

  const $contenedorNuevoPrecio = document.createElement("td");
  $contenedorNuevoPrecio.className = "col-3";
  $contenedorNuevoPrecio.appendChild($labelPrecio);
  $contenedorNuevoPrecio.appendChild($nuevoPrecio);

  const $contenedorBotones = document.createElement("td");
  const $divBotones = document.createElement("div");
  $divBotones.className = "container text-center";
  $divBotones.appendChild($botonActualizar);
  $divBotones.appendChild($espacioBlanco);
  $divBotones.appendChild($botonCancelar);
  $contenedorBotones.appendChild($divBotones);

  $contenidoColapsable.appendChild($contenedorNuevoNombre);
  $contenidoColapsable.appendChild($contenedorNuevaDescripcion);
  $contenidoColapsable.appendChild($contenedorNuevoPrecio);
  $contenidoColapsable.appendChild($contenedorBotones);

  $colapsable.appendChild($contenidoColapsable);
  $subFilaEditar.appendChild($colapsable);

  return $subFilaEditar;
}

cargarProductos();
$tabla.onclick = manejarBotonesProductos;
