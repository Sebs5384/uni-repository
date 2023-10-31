function obtenerKeyProducto(producto) {
  return `${producto}`;
}

function almacenarProducto(llave, valor) {
  if (llave === undefined) throw new Error('Llave no identificada');

  localStorage.setItem(obtenerKeyProducto(llave), JSON.stringify(valor));
}

function cargarProductos(productos) {
  const producto = JSON.parse(localStorage.getItem(obtenerKeyProducto(productos)));

  if (producto === null) throw new Error('El producto no existe');

  return producto;
}
