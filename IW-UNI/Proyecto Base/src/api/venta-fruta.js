const PRODUCTOS_PATH = 'data/productos.json';

function obtenerProductos() {
  return fetch(PRODUCTOS_PATH)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

obtenerProductos().then((data) => {
  console.log(data);
});
