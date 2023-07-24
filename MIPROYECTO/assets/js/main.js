async function obtenerCategorias() {
  try {
    const URL = "http://localhost/uni-repository/MIPROYECTO/backend/carga-categorias.php";
    const $respuesta = await fetch(URL, {
      method: "GET",
    });
    const respuesta = await $respuesta.json();
    console.log(respuesta[0].nombre_categoria);
    return respuesta;
  } catch (error) {
    throw new Error(`Error en promesa, no se pudo obtener las categorias: ${error}`);
  }
}

function crearCategorias(categorias) {
  const $lista = document.querySelector("#categoria-options");

  categorias.forEach((categoria, index) => {
    const $nombreCategoria = document.createElement("option");
    $nombreCategoria.value = categoria[index].nombre_categoria;
    $nombreCategoria.innerText = categoria[index].nombre_categoria;
    $lista.appendChild($nombreCategoria);
  });
  console.log($lista);
  return $lista;
}

async function cargarCategorias() {
  const categorias = await obtenerCategorias();
  crearCategorias(categorias);
}

cargarCategorias();
