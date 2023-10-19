function crearCartasProductos(productos) {
  const $contenedorCartas = document.querySelector("#contenedor-cartas");

  productos.forEach((producto, indice) => {
    const $carta = document.createElement("div");
    const $imagenCarta = document.createElement("div");
    const $nombreCarta = document.createElement("div");
    const $precioCarta = document.createElement("div");
    const $contenedorBotonAgregar = document.createElement("div");
    const $botonAgregar = document.createElement("button");

    $carta.className = "card";
    $imagenCarta.className = "card-image";
    $nombreCarta.className = "card-name";
    $precioCarta.className = "card-price";
    $contenedorBotonAgregar.className = "card-button";
    $botonAgregar.className = "button button-outline boton-agregar";

    $imagenCarta.innerText = `${producto.imagen}`;
    $nombreCarta.innerText = producto.nombre;
    $precioCarta.innerText = `$ ${producto.precio}`;
    $botonAgregar.innerText = "+";

    $botonAgregar.id = `agregar-producto-${indice + 1}`;

    $contenedorBotonAgregar.appendChild($botonAgregar);
    $carta.appendChild($imagenCarta);
    $carta.appendChild($nombreCarta);
    $carta.appendChild($precioCarta);
    $carta.appendChild($contenedorBotonAgregar);
    $contenedorCartas.appendChild($carta);
  });
}

crearCartasProductos(productos);

/*
function retonarCartaHTML(producto, indice) {
  return `
    <div class="card">
      <div class="card-image">
        ${producto.imagen}
      </div>
      <div class="card-name">
        ${producto.nombre}
      </div>
      <div class="card-price">
        $ ${producto.precio}
      </div>
      <div class="card-button">
        <button class="button button-outline boton-agregar" id="agregar-producto-${indice + 1}" title="Click para agregar al carrito">+</button>
      </div>
    </div>
  `;
}

function cargarProductos(productos) {
  const $contenedorCartas = document.querySelector("#contenedor-cartas");

  productos.forEach((producto, indice) => {
    $contenedorCartas.innerHTML += retonarCartaHTML(producto, indice);
  });
}

cargarProductos(productos);
*/

//Sebastian Araya
