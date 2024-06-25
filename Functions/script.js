const calcular = document.getElementById("calc");

calcular.onclick = function() {
  let numberOne = document.getElementById("numberOne").value;
  let numberTwo = document.getElementById("numberTwo").value;
  let operation = document.getElementById("operations").value;

  let valido = validarNumeros(numberOne, numberTwo);
  if (!valido) {
    window.alert("Números no válidos, vuelva a digitarlos!!");
  } else {
    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);
    realizarOperaciones(operation, numberOne, numberTwo);
  }
};

function validarNumeros(numberOne, numberTwo) {
  let numeroValido = true;
  if (isNaN(numberOne) || isNaN(numberTwo) || numberOne === "" || numberTwo === "") {
    numeroValido = false;
  }
  return numeroValido;
}

function realizarOperaciones(operation, numberOne, numberTwo) {
  let result;
  switch (operation) {
    case 'suma':
      result = numberOne + numberTwo;
      break;
    case 'resta':
      result = numberOne - numberTwo;
      break;
    case 'multiplicacion':
      result = numberOne * numberTwo;
      break;
    case 'division':
      result = numberOne / numberTwo;
      break;
    default:
      result = "Invalid operation";
  }

  let display = document.getElementById("display");
  display.textContent = result;
}
