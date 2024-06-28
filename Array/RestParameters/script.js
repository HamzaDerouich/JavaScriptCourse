
// Example One 

let food1 = "food1" ;
let food2 = "food2" ;
let food3 = "food3" ;
let food4 = "food4" ;

function showFoods(...food){
  return food;
}

const foodsArrays = showFoods(food1, food2, food3, food4);
console.log("Arrays foods: "+foodsArrays);


let numbers = [1,2,3,4,5,6];
let numbersTwo = [...numbers, 7,8,9];
console.log(numbersTwo);

//Example two 

let number1 = 34 ;
let number2 = 24;
let number3 = 59 ;
let number4 = 8 ;
let number5 = 9 ;
let number6 = 6 ;

function sumNumbers(...number){
  let sum = 0;
  for( i of number ){
     sum += i ;
  }
  return sum / number.length ;
};

const total = Math.floor(sumNumbers(number1, number2, number3, number4 , number5 , number6));


console.log( ` Averige of numbers ${total}` )

// Combine strings

function combinenString(...strings){
  return strings.join(" "); 
};

const fullName = combinenString("Mr.","SpongeBob","Squarepants","III");

console.log(fullName);