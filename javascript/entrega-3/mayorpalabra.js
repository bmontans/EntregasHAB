'use strict';

function letterCount() {
  let frase = 'Hoy es un dia super fantastico y esplendidisimo ademas de caluroso blablablabla';
  let splitWords = frase.split(' ');
  let longest = [];
  for (let i = 0; i < splitWords.length; i++) {
    if (splitWords[i].length > longest.length) {
      longest = splitWords[i];
    }
  }
  return longest;
}
console.log(letterCount());
