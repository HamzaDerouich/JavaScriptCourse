// Declaracion de constantes 
let numeroAleatorio = Math.floor(Math.random() * 100);
const rendirseButton = document.getElementById("giveUpButton");
const adivinarButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
let contadorErrores = 0;

// Funcionalidad
adivinarButton.onclick = function () {    
  let numeroIngresado = Number(document.getElementById("numberInput").value);
  if (!isNaN(numeroIngresado) && document.getElementById("numberInput").value.trim() !== "") {
    if (numeroIngresado < 0 || numeroIngresado > 100) {
      window.alert("Digite un número correcto!!");
    } else {
      if (numeroIngresado !== numeroAleatorio) {
        contadorErrores++;
        if (numeroIngresado > numeroAleatorio) {
          document.getElementById("mensaje").textContent = "El número es más pequeño!!";
          document.getElementById("numberInput").value = "";
        } else {
          document.getElementById("mensaje").textContent = "El número es más grande!!";
          document.getElementById("numberInput").value = "";
        }
      } else {
        window.alert(`¡Has acertado!, total de intentos: ${contadorErrores}`);
        numeroAleatorio = Math.floor(Math.random() * 100);
        contadorErrores = 0;
        
      }
    }
  } else {
    window.alert("Digite un número correcto, no es un número!!");
  }
};

resetButton.onclick = function () {
  document.getElementById("numberInput").value = "";
  document.getElementById("mensaje").textContent = "";
  numeroAleatorio = Math.floor(Math.random() * 100);
  contadorErrores = 0;
};

rendirseButton.onclick = function () {
  if (contadorErrores < 20) {
    window.alert("¡Primero tienes que intentarlo 20 veces antes de rendirte!");
  } else {
    window.alert(`El número a adivinar es: ${numeroAleatorio}`);
  }
};
