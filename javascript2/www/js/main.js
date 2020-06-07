"use strict";

//variables que nos permiten adjudicar a cada una de ellas un elemento correspondiente del html //

const firstCurrencyName = document.getElementById("from_currency");
const firstCurrencyAmmount = document.getElementById("from_ammount");
const secondCurrencyName = document.getElementById("to_currency");
const secondCurrencyAmmount = document.getElementById("to_ammount");
const rate = document.getElementById("rate");

firstCurrencyName.addEventListener("change", calculate);
firstCurrencyAmmount.addEventListener("input", calculate);
secondCurrencyName.addEventListener("change", calculate);
secondCurrencyAmmount.addEventListener("input", calculate);

function calculate() {
  const fromCurrency = firstCurrencyName.value;
  const toCurrency = secondCurrencyName.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then(currencyRates => currencyRates.json())
    .then(currencyRates => {
      const getRate = currencyRates.rates[toCurrency];
      rate.innerText = `1 ${fromCurrency} = ${getRate} ${toCurrency}`;
      secondCurrencyAmmount.value = (
        firstCurrencyAmmount.value * getRate
      ).toFixed(2);
    });
}

calculate();
