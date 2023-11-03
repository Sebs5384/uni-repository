async function inizializar() {
  const productosCarrito = calcularCantidades(cargarProductos('carrito'));
  const productos = filtarProductos(productosCarrito);
  crearTablaProductos(productos, manejarClickTabla);
  manejarBotonComprar(removerKeyProducto, removerProductosTabla);
}

inizializar();
