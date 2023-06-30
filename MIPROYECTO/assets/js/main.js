import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { mostrarMensajeSiEsExitoso, resetearFormulario, $botonEnviar, $botonRestablecer, $campoId, $campoNombre } from "./ui.js";

$botonEnviar.onclick = enviarFormulario;
$botonRestablecer.onclick = resetearFormulario;

function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId($campoId), validarCampoNombre($campoNombre));
}
