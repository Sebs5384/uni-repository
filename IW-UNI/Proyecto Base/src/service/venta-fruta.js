function obtenerProductos(id, nombre) {
  try {
    return obtenerProductosDeStorage(`producto_${id}`, nombre);
  } catch (error) {
    agregarAlCarrito(id);
    almacenarProducto(id, productos[id]);
  }
}
