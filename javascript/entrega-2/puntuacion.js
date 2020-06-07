'use strict';

const maria = [62, 34, 55];
const paula = [35, 60, 59];
const rebeca = [40, 39, 63];
let resultado = 0;

function totalMaria() {
  let total = resultado;
  const mariaCopy = [...maria];
  for (let i = 0; i < mariaCopy.length; i++) {
    total = total + mariaCopy[i] / mariaCopy.length;
  }
  return Math.ceil(total);
}

function totalPaula() {
  let total = resultado;
  const paulaCopy = [...paula];
  for (let i = 0; i < paulaCopy.length; i++) {
    total = total + paulaCopy[i] / paulaCopy.length;
  }
  return Math.ceil(total);
}

function totalRebeca() {
  let total = resultado;
  const rebecaCopy = [...rebeca];
  for (let i = 0; i < rebecaCopy.length; i++) {
    total = total + rebecaCopy[i] / rebecaCopy.length;
  }
  return Math.ceil(total);
}

console.log(totalMaria());
console.log(totalPaula());
console.log(totalRebeca());
