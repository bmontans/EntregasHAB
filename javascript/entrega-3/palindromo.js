'use strict';

// el ejercicio no me funciona porque al hacer split me incluye los espacios entre palabras
// no he conseguido hacer que excluyera los espacios
// si cambiamos 'arriba la birra' por algun palíndromo de una sola palabra sí devuelve 'true'

function checkPalindrome(str) {
  str = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('eye'));
