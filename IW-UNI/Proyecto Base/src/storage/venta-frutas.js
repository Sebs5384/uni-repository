function obtenerKeyProducto(producto) {
  return `producto_${producto}`;
}

function almacenarProducto(llave, valor) {
  if (llave === undefined) throw new Error('Llave no identificada');

  localStorage.setItem(obtenerKeyProducto(llave), JSON.stringify(valor));
}

function obtenerProductosDeStorage(productos, fruta) {
  const producto = JSON.parse(localStorage.getItem(obtenerKeyProducto(productos)));
  const frutaAlmacendas = producto.some((producto) => producto.nombre === fruta);

  if (!frutaAlmacendas) {
    throw new Error('No se encontro el producto en memoria.');
  }

  return producto;
}
