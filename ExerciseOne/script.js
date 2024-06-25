// Declaracion de constantes - variables 

const decrease = document.getElementById("decrease");
const increment = document.getElementById("increment");
const reset = document.getElementById("reset");
let count = 0 ;

// Funcionalidad 

decrease.onclick = function(){
  count -= 1 ;
  document.getElementById("output").textContent = count ;
}

increment.onclick = function(){
  count += 1 ;
  document.getElementById("output").textContent = count ;
}
reset.onclick = function(){
  count = 0 ;
  document.getElementById("output").textContent = count ;
}