import { enviarFormulario, resetearFormulario, $botonEnviar, $botonRestablecer } from "./ui.js";
import { $campoCategoria } from "./ui.js";
$botonEnviar.onclick = () => {
  enviarFormulario("categoria", $campoCategoria);
};

$botonRestablecer.onclick = () => {
  resetearFormulario("#input-categoria");
};
