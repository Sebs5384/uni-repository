function manejarBotonComprar(removerCompras, removerProductos) {
  const $botonComprar = document.querySelector('#boton-comprar');

  $botonComprar.onclick = () => {
    removerCompras('carrito');
    removerProductos();
    actualizarTextoCompras('Gracias por su compra !');
  };
}

function actualizarTextoCompras(texto) {
  const $textoCompras = document.querySelector('#texto-compras');

  $textoCompras.innerText = texto;
}
