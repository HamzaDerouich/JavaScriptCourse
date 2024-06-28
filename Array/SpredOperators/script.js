
// Spread operators 

// maximum and minimum with spread operators 

let numbers = [1,2,3,4,5,6,7];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);


// Method join 

let username = "Hamza Derouich";
let letters = [...username].join("-"); // Insert caracters between caracters
console.log(letters);

// copy one array in other array with spreads operators 

let newFruits = [...fruits];
console.log(newFruits);

// combinen two arrays with spread operators 
let vegetables = [ "carrots", "celery", "potatoes" ] ;
let foods = [...vegetables , ...fruits, "eggs", "milk"];
console.log(foods);