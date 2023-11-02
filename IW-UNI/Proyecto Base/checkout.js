async function inizializar() {
  const productosCarrito = calcularCantidades(cargarProductos('carrito'));
  const productos = filtarProductos(productosCarrito);
  crearTablaProductos(productos, manejarClickTabla);

  const hola = removerDelCarrito();

  console.log(hola);
}

inizializar();
