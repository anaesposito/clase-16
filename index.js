const verificarNro = (nro) => {
  if (nro <= -1) {
    return `positivo`;
  } else {
    return `negativo`;
  }
};

console.log(verificarNro(9));
console.log(verificarNro(-9));

// Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

// console.log(puedeAvanzar('verde'))     // true
// console.log(puedeAvanzar('amarillo'))  // false

const puedeAvanzar = (color) => {
  if (color == `verde`) {
    return true;
  } else if (color == `amarillo`) {
    return false;
  } else if (color == `rojo`) {
    return false;
  } else {
    return `Error: color de semáforo inválido`;
  }
};
console.log(puedeAvanzar("verde")); // true
console.log(puedeAvanzar("amarillo")); // false
console.log(puedeAvanzar("rojo")); // false
console.log(puedeAvanzar("lila")); // 'Error: color de semáforo inválido'

// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

const avanzarSemaforo = (color) => {
  if (color == `verde`) {
    return `amarillo`;
  } else if (color == `amarillo`) {
    return `rojo`;
  } else if (color == `rojo`) {
    return `verde`;
  } else {
    return `color no valido`;
  }
};

console.log(avanzarSemaforo("verde")); // 'amarillo'
console.log(avanzarSemaforo("amarillo")); // 'rojo'
console.log(avanzarSemaforo("rojo")); // 'verde'

// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

const esVocal = (letra) => {
  if (
    letra == `a` ||
    letra == `e` ||
    letra == `i` ||
    letra == `o` ||
    letra == `u`
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(esVocal("a")); // true
console.log(esVocal("n")); // false
console.log(esVocal("e")); // true

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos,
// y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet
/// si pasó los tests, no tiene multas impagas y pagó todos los impuestos
const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
  if (
    pasoTest == true &&
    tieneMultasImpagas == false &&
    pagoImpuestos == true
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(puedeRenovarCarnet(true, true, true)); // false
console.log(puedeRenovarCarnet(true, true, false)); // false
console.log(puedeRenovarCarnet(true, false, true)); // true
console.log(puedeRenovarCarnet(true, false, false)); // false
console.log(puedeRenovarCarnet(false, true, true)); // false
console.log(puedeRenovarCarnet(false, true, false)); // false
console.log(puedeRenovarCarnet(false, false, true)); // false
console.log(puedeRenovarCarnet(false, false, false)); // false

//Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

const esConsonante = (letra) => {
  if (
    letra == `a` ||
    letra == `e` ||
    letra == `i` ||
    letra == `o` ||
    letra == `u`
  ) {
    return false;
  } else {
    return true;
  }
};

console.log(esConsonante("a")); // false
console.log(esConsonante("n")); // true
console.log(esConsonante("e")); // false
