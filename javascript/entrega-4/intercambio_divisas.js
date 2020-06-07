'use strict';

///////////////////////////////////////////////////////////////////////////////////////////////////
/// el intercambio de divisas genera un número aleatorio del 1 al 1000 y la consola nos muestra ///
/// el equivalente en dolares y yenes respectivamente                                           ///
///////////////////////////////////////////////////////////////////////////////////////////////////

const exchangeRate = 'https://api.exchangerate-api.com/v4/latest/EUR';

async function getRates(amount) {
  let euro = await (await fetch(exchangeRate)).json();
  console.log(`Dispone de ${amount} €`);
  console.log(`La cantidad cambiada equivalen a ${Math.round(euro.rates.USD * amount)} $`);
  console.log(`La cantidad cambiada equivalen a ${Math.round(euro.rates.JPY * amount)} ¥ `);
}

getRates(Math.round(Math.random() * 1000));
