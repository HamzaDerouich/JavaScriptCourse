
const btnRoller = document.getElementById("btnRoller");
const imgDisplay = document.getElementById("display");
const caraDado1 = "/DiceRoller/images/CarasDado/1.png" ;
const caraDado2 = "/DiceRoller/images/CarasDado/2.png" ;
const caraDado3 = "/DiceRoller/images/CarasDado/3.png" ;
const caraDado4 = "/DiceRoller/images/CarasDado/4.png" ;
const caraDado5 = "/DiceRoller/images/CarasDado/5.png" ;
const caraDado6 = "/DiceRoller/images/CarasDado/6.png" ;
const carasDados = [caraDado1,caraDado2, caraDado3, caraDado4, caraDado5, caraDado6];
btnRoller.onclick = function(){
  let tiradaValida = tiradas > 100 ? true : false ;
  if(!tiradaValida){
    limpiarDisplay(); //Antes de cada tirada limpia la anterior tirada
    crearImagen(); // Metodo que crea las caras de los dados
  } else{
    window.alert("Tirada no valida!!")
  }
  
};

function limpiarDisplay(){
  // Eliminar todas las imágenes dentro del contenedor display
  while (imgDisplay.firstChild) {
    imgDisplay.removeChild(imgDisplay.firstChild);
  }
}
function crearImagen(number){
  let tiradas = Number( document.getElementById("tiradas").value );
  let caraDado = 0;
  for (let index = 0; index < tiradas; index++) {
    caraDado = Math.floor( Math.random() * 6 );
    const imgElement = document.createElement('img');
    imgElement.src = carasDados[caraDado];
    document.getElementById('display').appendChild(imgElement);
  }
}



