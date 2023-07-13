import { obtenerCategorias, borrarCategoria } from "./servicios-db.js";
import { $tabla } from "./ui.js";
import { verProductos } from "./listado-productos.js";
import { reemplazarEnNombre } from "./utilidades.js";

async function cargarCategorias() {
  const categorias = await obtenerCategorias();
  const nombreCategorias = reemplazarEnNombre(categorias, "Tables_in_testeandoo", /_/g, " ");
  crearTabla(nombreCategorias, "#cuerpo-tabla-categorias", elementosCategoria);
}

export function crearTabla(tablas, cuerpo, elementos, subElementos = "") {
  const $cuerpoTabla = document.querySelector(cuerpo);

  if ($cuerpoTabla === null) return;

  tablas.forEach((tabla, index) => {
    const $elementosTabla = elementos(tabla, index);
    $cuerpoTabla.appendChild($elementosTabla);

    if (subElementos) {
      const $subElementosTabla = subElementos(tabla, index);
      $cuerpoTabla.appendChild($subElementosTabla);
    }
  });
}

async function manejarBotonesCategorias(event) {
  const $botonElegido = event.target;
  const $fila = $botonElegido.closest("tr");
  const $nombreCategoria = $fila.firstElementChild.innerText;
  const nombreCategoria = reemplazarEnNombre($nombreCategoria, "", / /g, "_");

  if ($botonElegido.classList.contains("borrar")) await removerCategoria(nombreCategoria, $fila);
  if ($botonElegido.classList.contains("mostrar")) verProductos(nombreCategoria);
}

function elementosCategoria(tabla) {
  const $lista = document.createElement("tr");
  const $nombreCategoria = document.createElement("td");
  const $botonProductos = document.createElement("button");
  const $botonBorrar = document.createElement("button");
  const $contenedorBotones = document.createElement("td");
  const $espacioBlanco = document.createTextNode(" ");

  $nombreCategoria.innerText = tabla;
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
$tabla.onclick = manejarBotonesCategorias;
