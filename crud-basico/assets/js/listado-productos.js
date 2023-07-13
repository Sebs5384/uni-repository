import { obtenerProductos } from "./servicios-db.js";
import { crearTabla } from "./listado-categorias.js";
import { $tabla, mostrarMensajeSiEsExitoso } from "./ui.js";
import { validarCamposProducto } from "./validaciones.js";

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
  if ($botonElegido.classList.contains("actualizar")) {
    const $camposEditar = document.querySelectorAll(`#editar${$botonElegido.id} .productos`);
    console.log($camposEditar[0]);
    console.log($camposEditar[1]);
    console.log($camposEditar[2]);

    mostrarMensajeSiEsExitoso(validarCamposProducto($camposEditar));
  }
}

function listaProductos(productos, index) {
  const $lista = document.createElement("tr");

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

  $lista.appendChild($nombreProducto);
  $lista.appendChild($descripcionProducto);
  $lista.appendChild($precio);
  $lista.appendChild($ultimaModificacion);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

function subListaProductos(productos, index) {
  const $subFilaEditar = document.createElement("tr");
  $subFilaEditar.className = "collapsed-row";

  const $colapsable = document.createElement("td");
  $colapsable.colSpan = 5;

  const $contenidoColapsable = document.createElement("div");
  $contenidoColapsable.className = "collapse";
  $contenidoColapsable.id = `editar${index + 1}`;

  const $labelNombre = document.createElement("label");
  const $nuevoNombre = document.createElement("input");
  const $errorNuevoNombre = document.createElement("strong");
  $labelNombre.className = "form-label small";
  $labelNombre.innerText = "Nuevo nombre";
  $nuevoNombre.type = "text";
  $nuevoNombre.className = `form-control productos`;
  $nuevoNombre.name = "nombre";
  $errorNuevoNombre.id = "error-nombre";
  $errorNuevoNombre.className = "";

  const $labelDescripcion = document.createElement("label");
  const $nuevaDescripcion = document.createElement("textarea");
  const $errorNuevaDescripcion = document.createElement("strong");
  $labelDescripcion.className = "form-label small";
  $labelDescripcion.innerText = "Nueva descripcion";
  $nuevaDescripcion.className = `form-control productos`;
  $nuevaDescripcion.name = "descripcion";
  $errorNuevaDescripcion.id = "error-descripcion";
  $errorNuevaDescripcion.className = "";

  const $labelPrecio = document.createElement("label");
  const $nuevoPrecio = document.createElement("input");
  const $errorNuevoPrecio = document.createElement("strong");
  $labelPrecio.className = "form-label small";
  $labelPrecio.innerText = "Nuevo precio";
  $nuevoPrecio.type = "number";
  $nuevoPrecio.className = `form-control productos`;
  $nuevoPrecio.name = "precio";
  $errorNuevoPrecio.id = "error-precio";
  $errorNuevoPrecio.className = "";

  const $botonActualizar = document.createElement("button");
  const $botonCancelar = document.createElement("button");
  const $espacioBlanco = document.createTextNode(" ");
  $botonActualizar.innerText = "Actualizar";
  $botonActualizar.id = productos.id;
  $botonActualizar.name = productos.nombre_producto;
  $botonCancelar.innerText = "Cancelar";
  $botonActualizar.className = "btn btn-outline-secondary btn-sm actualizar";
  $botonCancelar.className = "btn btn-outline-secondary btn-sm";
  $botonCancelar.dataset.bsToggle = "collapse";
  $botonCancelar.dataset.bsTarget = `#editar${index + 1}`;

  const $contenedorNuevoNombre = document.createElement("td");
  $contenedorNuevoNombre.className = "col-3";
  $contenedorNuevoNombre.appendChild($labelNombre);
  $contenedorNuevoNombre.appendChild($nuevoNombre);
  $contenedorNuevoNombre.appendChild($errorNuevoNombre);

  const $contenedorNuevaDescripcion = document.createElement("td");
  $contenedorNuevaDescripcion.className = "col-4";
  $contenedorNuevaDescripcion.appendChild($labelDescripcion);
  $contenedorNuevaDescripcion.appendChild($nuevaDescripcion);
  $contenedorNuevaDescripcion.appendChild($errorNuevaDescripcion);

  const $contenedorNuevoPrecio = document.createElement("td");
  $contenedorNuevoPrecio.className = "col-3";
  $contenedorNuevoPrecio.appendChild($labelPrecio);
  $contenedorNuevoPrecio.appendChild($nuevoPrecio);
  $contenedorNuevoPrecio.appendChild($errorNuevoPrecio);

  const $contenedorBotones = document.createElement("td");
  const $botones = document.createElement("div");
  $botones.className = "container text-center";
  $botones.appendChild($botonActualizar);
  $botones.appendChild($espacioBlanco);
  $botones.appendChild($botonCancelar);
  const $mensaje = document.createElement("strong");
  const $divmensaje = document.createElement("div");
  $mensaje.id = "mensaje-formulario";
  $mensaje.innerText = "prueba";
  $divmensaje.appendChild($mensaje);
  $contenedorBotones.appendChild($botones);
  $contenedorBotones.appendChild($divmensaje);

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
