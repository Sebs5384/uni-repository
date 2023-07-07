import { obtenerCategorias, borrarCategoria } from "./servicios-db.js";
import { mostrarProductos } from "./listado-productos.js";
import { $tablaCategorias } from "./ui.js";
import { verProductos } from "./listado-productos.js";

async function cargarCategorias() {
  const tablas = await obtenerCategorias();
  crearTabla(tablas, crearElementosTabla);
}

function crearTabla(tablas, elementos) {
  const $cuerpoTabla = document.querySelector("#cuerpo-tabla");

  tablas.forEach((tabla, i) => {
    const $categorias = elementos(tabla, i);
    $cuerpoTabla.appendChild($categorias);
  });
}

async function manejarBotonesCategorias(event) {
  const $categoriaElegida = event.target;
  const $fila = $categoriaElegida.closest("tr");
  const $nombreCategoria = $fila.firstElementChild.innerText;
  console.log($nombreCategoria);
  if ($categoriaElegida.classList.contains("borrar")) {
    await removerCategoria($nombreCategoria, $fila);
  } else if ($categoriaElegida.classList.contains("mostrar")) {
    await verProductos($nombreCategoria);
  }
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

  $botonProductos.className = "btn btn-outline-secondary btn-sm mostrar";
  $botonBorrar.className = "btn btn-outline-secondary btn-sm borrar";

  $contenedorBotones.appendChild($botonProductos);
  $contenedorBotones.appendChild($espacioBlanco);
  $contenedorBotones.appendChild($botonBorrar);
  $lista.appendChild($nombreCategoria);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

async function removerCategoria(categoria, columna) {
  await borrarCategoria(categoria);
  columna.remove();
}

cargarCategorias();
$tablaCategorias.onclick = manejarBotonesCategorias;
