const PRODUCTOS_PATH = 'data/productos.json';

async function obtenerProductosDeApi() {
  return await fetch(PRODUCTOS_PATH)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
