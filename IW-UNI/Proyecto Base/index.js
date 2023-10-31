async function inizializar() {
  const productos = await obtenerProductos('productos');
  crearCartasProductos(productos, manejarClickProductos);
}

inizializar();
