async function obtenerProductos(llave) {
  try {
    return cargarProductos(llave);
  } catch (error) {
    const productos = await obtenerProductosDeApi();
    almacenarProducto(llave, productos);
    return productos;
  }
}
