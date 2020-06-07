'use strict';

function dice() {
  return Math.ceil(Math.random() * 6);
}

function puntuacion() {
  let totalScore = 0;
  for (let i = 0; totalScore <= 50; i++) {
    const diceNum = dice();
    totalScore = totalScore + diceNum;
    console.log(`Tirada numero ${i}: ha salido un ${diceNum}. Total ${totalScore}`);
  }
  return totalScore;
}
console.log(puntuacion());
