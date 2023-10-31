function obtenerKeyProducto(producto) {
  return `producto_${producto}`;
}

function almacenarProducto(llave, valor) {
  if (llave === undefined) throw new Error('Llave no identificada');

  localStorage.setItem(obtenerKeyProducto(llave), JSON.stringify(valor));
}

function cargarProducto(id) {
  const producto = JSON.parse(localStorage.getItem(obtenerKeyProducto(id)));

  if (producto === null) throw new Error('El producto no existe');

  return producto;
}
