// Pruebas basicas usando vanilla Javascript, metodo console.assert

function pruebaValidarId() {
  console.assert(validarId({ value: "" }) === "El campo ID no puede estar vacio", "validarId fallo al no verificar si el campo esta vacio");
  console.assert(validarId({ value: 2.2 }) === "El campo ID no acepta decimales", "validarId fallo al no verificar si el campo contiene valores decimales");
  console.assert(validarId({ value: 0 }) === "El campo ID solo acepta numeros y no puede empezar con 0", "validarId fallo al no verificar si el campo contiene valores de 0");
  console.assert(validarId({ value: 12345 }) === "El campo ID solo acepta 4 digitos como maximo", "validarId fallo al no verificar si el campo contiene mas de 4 caracteres");
  console.assert(validarId({ value: 1234 }) === "", "validarId dejo de funcionar correctamente");
}

function pruebaValidarNombre() {
  console.assert(validarNombre({ value: 1234 }) === "El campo nombre no puede tener valores numericos", "validarNombre fallo al no verificar si el campo contiene valores integros");
  console.assert(validarNombre({ value: "" }) === "El campo nombre no debe estar vacio", "validarNombre fallo al no verificar si el campo esta vacio");
  console.assert(validarNombre({ value: "rtX" }) === "El campo nombre solo acepta caracteres en mayuscula", "validarNombre fallo al no verificar si el campo contenia caracters en minusculas");
  console.assert(validarNombre({ value: "PLACADEVIDEO" }) === "", "validarNombre dejo de funcionar correctamente");
}

function pruebaConvertirAString() {
  console.assert(convertirAString(5) === "5", "convertirAString dejo de funcionar correctamente");
  console.assert(convertirAString(-5) === "-5", "convertirAString no esta manejando numeros negativos correctamente");
  console.assert(convertirAString(3.4) === "3.4", "convertirAString no esta manejando decimales correctamente");
  console.assert(convertirAString(0) === "0", "convertirAString no esta manejando valores de 0 correctamente");
}

pruebaValidarId();
pruebaValidarNombre();
pruebaConvertirAString();
