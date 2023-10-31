function obtenerProductos(id) {
  try {
    return cargarProducto(id);
  } catch (error) {
    agregarAlCarrito(id);
    almacenarProducto(id, productos[id]);
  }
}
