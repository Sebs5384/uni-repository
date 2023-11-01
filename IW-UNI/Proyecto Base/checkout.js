async function inizializar() {
  const productosCarrito = calcularCantidades(cargarProductos('carrito'));
  crearTablaProductos(productosCarrito);
}

inizializar();
