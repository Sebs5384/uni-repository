async function inizializar() {
  const productos = await obtenerProductos();
  console.log(productos);
  crearCartasProductos(productos, manejarClickProductos);
}

inizializar();
