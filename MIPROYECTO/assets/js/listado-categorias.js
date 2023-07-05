import { obtenerCategorias } from "./servicios-db.js";

async function cargarCategorias() {
  const tablas = await obtenerCategorias();
  crearTabla(tablas, crearElementosTabla);
}

function crearTabla(tablas, elementos) {
  const $cuerpoTabla = document.querySelector("#table-body");

  tablas.forEach((tabla) => {
    const $categorias = elementos(tabla);
    $cuerpoTabla.appendChild($categorias);
  });
}

function crearElementosTabla(tabla) {
  const $lista = document.createElement("tr");
  const $nombreCategoria = document.createElement("td");
  const $botonProductos = document.createElement("button");
  const $botonBorrar = document.createElement("button");
  const $contenedorBotones = document.createElement("td");
  const $espacioBlanco = document.createTextNode(" ");

  $nombreCategoria.innerText = tabla.Tables_in_testeandoo;
  $botonProductos.innerText = "Ver productos";
  $botonBorrar.innerText = "Borrar";

  $botonProductos.className = "btn btn-outline-secondary btn-sm";
  $botonBorrar.className = "btn btn-outline-secondary btn-sm";

  $contenedorBotones.appendChild($botonProductos);
  $contenedorBotones.appendChild($espacioBlanco);
  $contenedorBotones.appendChild($botonBorrar);
  $lista.appendChild($nombreCategoria);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

cargarCategorias();
