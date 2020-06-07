'use strict';

const primerNumero = 3;
const segundoNumero = 6;
const opcion = 3;

let result = 0;

if (opcion === 0) {
  result = primerNumero + segundoNumero;
  console.log(`La suma de ${primerNumero} y ${segundoNumero} es ${result}.`);
} else if (opcion === 1) {
  result = primerNumero - segundoNumero;
  console.log(`La resta de ${primerNumero} y ${segundoNumero} es ${result}.`);
} else if (opcion === 2) {
  result = primerNumero * segundoNumero;
  console.log(`La multiplicación de ${primerNumero} y ${segundoNumero} es ${result}.`);
} else if (opcion === 3) {
  result = primerNumero / segundoNumero;
  console.log(`La división de ${primerNumero} y ${segundoNumero} es ${result}.`);
} else {
  console.log('Has usado una opción inválida.');
}
