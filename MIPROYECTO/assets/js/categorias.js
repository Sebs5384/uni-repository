import { enviarFormulario, resetearFormulario, $botonEnviar, $botonRestablecer } from "./ui.js";

$botonEnviar.onclick = () => {
  enviarFormulario("categoria");
};

$botonRestablecer.onclick = () => {
  resetearFormulario("#input-categoria");
};
