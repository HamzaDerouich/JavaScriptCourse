const numberGenerator = document.getElementById("generator");
numberGenerator.onclick = function(){
  let numeroAleatorio = Math.floor(Math.random()*1000);
  let numeroAleatorio1 = Math.floor(Math.random(1000) * 1000);
  let numeroAleatorio2 = Math.floor(Math.random(1000)*1000);
  document.getElementById("output0").textContent = numeroAleatorio;
  document.getElementById("output1").textContent = numeroAleatorio1;
  document.getElementById("output2").textContent = numeroAleatorio2;
}