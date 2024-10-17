// node 01_basics/dataTypes_summary.js

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId);

// const bigNumber = 5646545684646889n




            // Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "raj"]

let myObj = {
    name: "dilraj",
    age: 20,
}

const myfunction = function(){
    console.log("hello raj")
}


console.log(typeof isLoggedIn);





//              ******************************************************

//Stack (Primitive),            Heap (Non-Primitive)

let myYoutubename = "dilrajyoutubechanel"

let anothername = "myYoutubename"
anothername = "chaiaurdilraj"


console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "dilrajpp@ybl"
}

let userTwo = userOne

userTwo.email = "dilraj@google.com"

console.log(userOne.email);
console.log(userTwo.email);
