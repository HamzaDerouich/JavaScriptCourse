//.cheked = property that determines the cheked state of an 
// html checkbox or radio button element 

const myCheckBox = document.getElementById("myChekBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
  if( myCheckBox.checked){
    subResult.textContent = "You are subscribed!!"
  }else{
    subResult.textContent = "You are not subscribed!!"

  }

  if(visaBtn.checked){
    paymentResult.textContent = ` You are paying with Visa ` ;
  } else if ( masterCardBtn.checked ) {
    paymentResult.textContent = ` You are paying with MasterCard ` ;
  } else if( payPalBtn.checked ){
    paymentResult.textContent = ` You are paying with PayPal ` ;

  }

}


