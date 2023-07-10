import { enviarFormulario, resetearFormulario, $botonEnviar, $botonRestablecer } from "./ui.js";

$botonEnviar.onclick = () => {
  enviarFormulario("productos");
};

$botonRestablecer.onclick = () => {
  resetearFormulario(".productos");
};
