const btnSubmit = document.getElementById("submit");
const radioFahrenheit = document.getElementById("cardFahrenheit");
const radioCelsius = document.getElementById("cardCelsius");



function fahrenheitToCelsius(number){
  let formula = ( number - 32 ) / 1.8 ;
  document.getElementById("display").textContent = `${formula}ºC` ;
};

function celsiusToFahrenheit(number){
  let formula = ( number * 1.8 ) + 32 ;
  document.getElementById("display").textContent = `${formula}ºF` ;
};

btnSubmit.onclick = function(){
  let number = Number(document.getElementById("inputConversion").value);
  if(radioFahrenheit.checked){
      fahrenheitToCelsius(number);
  } else if( radioCelsius.checked ) {
      celsiusToFahrenheit(number);
  }
};

