const dollarAmount = document.querySelector('#dollar-amount');
const currency = document.querySelector('#currency');
const submitButton = document.querySelector('#submit');


function currencyConversion (num) {

  let exchangeRate = 0.0;

  const currencyLower = currency.value.toLowerCase();

  if(currencyLower == "euro") {
    exchangeRate = 0.91;
    console.log("euro")
  }
  else if(currencyLower == "pound" || currencyLower == "pound sterling" || 
    currencyLower == "british pound" || currencyLower == "pounds" ||  
    currencyLower == "british pounds") {
      exchangeRate = 0.80;
  }
  else if(currencyLower == "yen") {
    exchangeRate = 134.30
  }
  else if(currencyLower == "pesos" || currencyLower == "peso") {
    exchangeRate = 17.91
  }
  answer = num * exchangeRate;
  console.log(answer);
  return answer;
}

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    dollarFloat = parseFloat(dollarAmount.value);
    currencyConversion(dollarFloat);
  }
);

