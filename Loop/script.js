
// While loop 

let loggedIn = false;
let username;
let password;

while(!loggedIn){
  username = window.prompt(`Enter your username:`);
  password = window.prompt(`Enter your passord:`)
  loggedIn = (username === "hamza") && ( password === "hamza" ) ? true : false ;
  if( loggedIn === true ){
    console.log("You are logged in")
  } else {
    console.log("Invalid credentials!! Please tray again")
  }
}
// for loop = reap some code a limited amount of times 

for (let i = 0; i < 10 ; i++) {
  console.log(i);
}

for( let i = 10 ; i >= 0 ; i-- ){
  console.log(i); 
}