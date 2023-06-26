import { validarCampoId, validarCampoNombre } from "./validaciones.js";
import { mostrarMensajeSiEsExitoso, $botonEnviar, $botonCancelar, resetearFormulario } from "./ui.js";

$botonEnviar.onclick = function enviarFormulario() {
  mostrarMensajeSiEsExitoso(validarCampoId(), validarCampoNombre());
};

$botonCancelar.onclick = resetearFormulario;
