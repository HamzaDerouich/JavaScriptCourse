// Ternary operator = a shorcut to if{} and else{} statements 
// helps to assign a variable based on a condition 
// condition ? codeIfTrue : codIfFalse 

let age = 11 ;
let message  = age >=18 ? "You're and adult" : "You're a minor ";
console.log(message)

let time = 16 ;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!! ";
console.log(greeting);


let isStudente = true ;
let message2 = isStudente ? "You're a studente" : "You're not a student" ;

let purchaseAmount = 450 ;
let discount = purchaseAmount > 100 ? 10 : 0 ;
console.log(`Your total is $${ purchaseAmount - purchaseAmount * (discount / 100 )  }`)