async function obtenerProductos() {
  try {
    return cargarProductos('productos');
  } catch (error) {
    const productos = await obtenerProductosDeApi();
    almacenarProducto('productos', productos);
    return productos;
  }
}
