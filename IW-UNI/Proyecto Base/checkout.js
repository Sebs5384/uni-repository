async function inizializar() {
  const productosCarrito = calcularCantidades(cargarProductos('carrito'));
  crearTablaProductos(productosCarrito, manejarClickTabla);

  const hola = removerDelCarrito();

  console.log(hola);
}

inizializar();
