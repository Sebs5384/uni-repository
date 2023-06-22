// Unit tests basicos usando vanilla Javascript, metodo console.assert

function pruebaValidarId() {
  console.assert(validarId({ value: "" }) === "El campo ID no puede estar vacio", "validarId fallo al no verificar si el campo esta vacio");
  console.assert(validarId({ value: 2.2 }) === "El campo ID no acepta decimales", "validarId fallo al no verificar si el campo contiene valores decimales");
  console.assert(validarId({ value: 0 }) === "El campo ID solo acepta numeros y no puede empezar con 0", "validarId fallo al no verificar si el campo contiene valores de 0");
  console.assert(validarId({ value: 12345 }) === "El campo ID solo acepta 4 digitos como maximo", "validarId fallo al no verificar si el campo contiene mas de 4 caracteres");
  console.assert(validarId({ value: 1234 }) === "", "validarId no esta funcionando correctamente");
}

pruebaValidarId();
