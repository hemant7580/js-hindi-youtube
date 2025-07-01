// Primitive


// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id===anotherId);

const bigNumber = 3456543576654356754n


// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name:"hemant",
    age:18,
}

const myFunction = function(){
    // 
    
}

// console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// Stack(Primitive)  ,   Heap(Non-Primitive)  

let myYoutubename = "hemantsinghdotcom"

let anothername = myYoutubename
anothername = "hemanttomar"

// console.log(myYoutubename);
// console.log(anothername);



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hemant@google.com"

console.log(userOne.email);
console.log(userTwo.email);
