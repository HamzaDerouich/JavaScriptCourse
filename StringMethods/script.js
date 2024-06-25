// String methods 

let username = "Hamza" ;

//username = username.trim(); Remove spaces "  Hamza  " -> "Hamza"
//username = username.toUpperCase(); Hamza
//username = username.toLowerCase(); hamza
//username = username.repeat(3) Hamza Hamza Hamza
//username.indexOf("a"); positon of leter a = 1
//username.lenght(); 5
//username.startsWith("H") -> true
//username.endsWith("a") -> true
//username.includes("z") -> true
// username.replaceAll("a","o") Homzo 
// username.padStart(10, "0") 00000Hamza
// username.padEnd(10, "0") Hamza0000


// String slicing = creating a substring from a partition of another string 
// String slice(start, end) -> substring in java 

let fullName = "Hamza Derouich" ;
let firstName = fullName.slice(0,5);
let lastName = fullName.slice(5,14);
let firstCharacter = fullName.slice(0,1);
let lastCharacter = fullName.slice(-1);

console.log(`Your first name is $${firstName}`);
console.log(`Your last name is $${lastName}`);
console.log(`The first character is $${firstCharacter}`);
console.log(`The first character is $${lastCharacter}`);

let user;
let mail;
let fullMail = window.prompt("Digit your mail:");
user = fullMail.slice( 0 , fullMail.indexOf("@"));
mail = fullMail.slice( fullMail.indexOf("@") + 1 , fullMail.indexOf(".") );
console.log(`User: ${user} , Mail: ${mail}`);




