let intentosCategorias = 0;
let intentosProductos = 0;
const $formularioCategorias = $("#formulario-cargar-categorias");
const $formularioProductos = $("#formulario-cargar-productos");

$($formularioCategorias).submit(function (event) {
  event.preventDefault();
  const $categoria = $("#nombre-categoria");
  const categoria = $categoria.val().trim();

  this.reset();
  validarCampoCategoria(categoria);
});

$($formularioProductos).submit(function (event) {
  event.preventDefault();
  const nombreProducto = $("#nombre-producto").val().trim();
  const descripcionProducto = $("#descripcion-producto").val().trim();
  const precioProducto = $("#precio-producto").val().trim();
  const categoriaProducto = $("#categoria-producto").val().trim();
  const imagenProducto = $("#imagen-producto").val().trim();

  this.reset();
  validarCamposProducto(nombreProducto, descripcionProducto, precioProducto, categoriaProducto, imagenProducto);
});

function validarCampoCategoria(categoria) {
  if (!categoria) {
    intentosCategorias += 1;
    alert(`El campo nombre no debe estar vacio, \n intentos fallidos:${intentosCategorias}`);
    return false;
  }

  alert(`Formulario enviado, \n Categoria ${categoria} cargada exitosamente`);
  return true;
}

function validarCamposProducto(nombre, descripcion, precio, categoria, imagen) {
  const errores = [];

  if (!nombre) errores.push(`"Nombre"`);

  if (!descripcion) errores.push(`"Descripcion"`);

  if (!precio) errores.push(`"Precio"`);

  if (!categoria) errores.push(`"Categoria"`);

  if (!imagen) errores.push(`"Imagen"`);

  if (errores.length) {
    intentosProductos += 1;
    alert(`Debe completar ${errores.map((error) => `\n ${error}`)} \n\n Intentos fallidos: ${intentosProductos}`);

    return false;
  }

  alert(`Formulario enviado. \n Producto ${nombre} cargado exitosamente`);
  return true;
}
