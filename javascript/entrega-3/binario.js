'use strict';

// no he conseguido obtener un numero binario a partir de un ciclo
// unicamente lo he conseguido mediante el parseInt

function binaryConvert(str) {
  str = str.split('');
  console.log(str);
  let decimal = [];
  for (let i = str.length - 1; i > 0; i--) {
    decimal = decimal + str * 2;
  }
  return decimal;
}

console.log(binaryConvert('101101'));

const binario = [101101];
const decimal = parseInt(binario, 2);

console.log(decimal);
