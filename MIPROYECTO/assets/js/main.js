async function obtenerCategorias() {
  try {
    const URL = "http://localhost/MIPROYECTO/backend/lista-categorias.php";
    const $respuesta = await fetch(URL, {
      method: "GET",
    });
    const respuesta = await $respuesta.json();
    return respuesta;
  } catch (error) {
    throw new Error(`Error en promesa, no se pudo obtener las categorias: ${error}`);
  }
}

function crearCategorias(categorias) {
  const $lista = document.querySelector("#categoria-producto");

  categorias.forEach((categoria) => {
    const $nombreCategoria = document.createElement("option");
    $nombreCategoria.value = categoria.ID;
    $nombreCategoria.innerText = categoria.nombre_categoria;
    $lista.appendChild($nombreCategoria);
  });
  return $lista;
}

async function cargarCategorias() {
  const categorias = await obtenerCategorias();
  crearCategorias(categorias);
}

cargarCategorias();
