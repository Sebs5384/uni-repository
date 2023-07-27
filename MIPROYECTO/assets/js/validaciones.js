let intentosCategorias = 0;
let intentosProductos = 0;
const $formularioCategorias = $("#formulario-cargar-categorias");
const $formularioProductos = $("#formulario-cargar-productos");

$($formularioCategorias).submit(function (event) {
  event.preventDefault();
  const categoria = $("#nombre-categoria").val().trim();

  const $valido = validarCampoCategoria(categoria);
  if ($valido) this.submit();
});

$($formularioProductos).submit(function (event) {
  event.preventDefault();
  const nombreProducto = $("#nombre-producto").val().trim();
  const descripcionProducto = $("#descripcion-producto").val().trim();
  const precioProducto = $("#precio-producto").val().trim();
  const categoriaProducto = $("#categoria-producto").val().trim();

  const $valido = validarCamposProducto(nombreProducto, descripcionProducto, precioProducto, categoriaProducto);

  if ($valido) this.submit();
});

function validarCampoCategoria(categoria) {
  if (!categoria) {
    intentosCategorias += 1;
    alert(`El campo nombre no debe estar vacio, \n\n Sebastian Araya \n intentos fallidos:${intentosCategorias}`);
    return false;
  }

  alert(`Formulario enviado, \n Categoria ${categoria} cargada exitosamente`);
  return true;
}

function validarCamposProducto(nombre, descripcion, precio, categoria) {
  const errores = [];

  if (!nombre) errores.push(`"Nombre"`);

  if (!descripcion) errores.push(`"Descripcion"`);

  if (!precio) errores.push(`"Precio"`);

  if (categoria <= 0) errores.push(`"Categoria"`);

  if (errores.length) {
    intentosProductos += 1;
    errores.push("\n Sebastian Araya");
    alert(`Debe completar ${errores.map((error) => `\n ${error}`)} \n\n Intentos fallidos: ${intentosProductos}`);

    return false;
  }

  alert(`Formulario enviado. \n Producto ${nombre} cargado exitosamente`);
  return true;
}
