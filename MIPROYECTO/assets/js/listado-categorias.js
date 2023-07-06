import { obtenerCategorias } from "./servicios-db.js";

async function cargarCategorias() {
  const tablas = await obtenerCategorias();
  crearTabla(tablas, crearElementosTabla);
}

function crearTabla(tablas, elementos) {
  const $cuerpoTabla = document.querySelector("#table-body");

  tablas.forEach((tabla, i) => {
    const $categorias = elementos(tabla, i);
    $cuerpoTabla.appendChild($categorias);
  });
}

const $tabla = document.querySelector("#tabla-categorias");
$tabla.onclick = (event) => {
  const $clickedButton = event.target;
  console.log($clickedButton);
  if ($clickedButton.classList.contains("borrar")) {
    $clickedButton.closest("tr").remove();
  }
};

function crearElementosTabla(tabla, i) {
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
  $botonBorrar.className = "btn btn-outline-secondary btn-sm borrar";

  $contenedorBotones.appendChild($botonProductos);
  $contenedorBotones.appendChild($espacioBlanco);
  $contenedorBotones.appendChild($botonBorrar);
  $lista.appendChild($nombreCategoria);
  $lista.appendChild($contenedorBotones);

  return $lista;
}

cargarCategorias();
