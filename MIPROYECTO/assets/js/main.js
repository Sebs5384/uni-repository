function submitForm() {
  const $botonGuardar = getButton("#guardar-operacion");
  $botonGuardar.onclick = saludar;
}

function saludar() {
  console.log("hola");
}

function getButton(selector) {
  const $button = document.querySelector(selector);
  return $button;
}

submitForm();
