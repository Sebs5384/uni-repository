function obtenerProductos(id, nombre) {
  try {
    return obtenerProductosDeStorage(id);
  } catch (error) {
    agregarAlCarrito(id);
    almacenarProducto(id, productos[id]);
  }
}
