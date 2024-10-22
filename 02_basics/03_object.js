//  node 02_basics/03_object.js

//  singleton

//  Object literals

// object literale

const mySym = Symbol("key1")


const JsUser = {
    name: "dilraj",
    "full name": "Dilraj Raj Patel",
    [mySym]: "mykey1",
    // mySym: "mykey1",
    age: 17,
    location: "Gurugram",
    email: "dilrajpp77@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Sunday", "Monday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);


JsUser.email = "dilrajchatGpt.com"
// Object.freeze(JsUser)
JsUser.email = "dilrajgoogle.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello our User");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello our User, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());