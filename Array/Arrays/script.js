// Array = a variable like structure that can hold more than 1 value 

let fruits = ["apple", "orange","banana","coconut"];

console.log(fruits)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Methods of array 

fruits.push("coconut"); // push element in the end of array
console.log(fruits)
fruits.pop("coconut"); // pop remove the last element
console.log(fruits);
fruits.unshift("mango") // add the element of the beginig of array
console.log(fruits);
fruits.shift("mango") // remove the element of the beginig of array
console.log(fruits);

let index = fruits.indexOf("apple");
console.log("The index of apple is:"+index)

console.log("--------------------------------");

for(let i = 0 ; i < fruits.length ; i++){
  console.log(fruits[i]);
};
console.log("--------------------------------");

for(let i = fruits.length - 1  ; i >= 0 ; i--){
  console.log(fruits[i]);
};

// Sort Methods 
console.log("-------------Sort-Reverse-Method-------------------");
fruits.sort().reverse();
for(let i = 0 ; i < fruits.length ; i++){
  console.log(fruits[i]);
};

