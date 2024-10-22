//  node 03_basics/01_functions.js


// console.log("D");
// console.log("I");
// console.log("L");
// console.log("R");
// console.log("A");
// console.log("J");



function sayMyName(){
    console.log("D");
    console.log("I");
    console.log("L");
    console.log("R");
    console.log("A");
    console.log("J");

}

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
// }

function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // // console.log("dilraj");
    // return result

    return number1 + number2

    
}

// addTwoNumbers(2, 9)
// addTwoNumbers(2, "9")
// addTwoNumbers(2, "a")
// addTwoNumbers(2, "null")

const result = addTwoNumbers(2, 9)

// console.log("Result", result);


// function loginUserMessage(username){
function loginUserMessage(username = "raj"){
    // if(username === undefined){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("dilraj"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())
// console.log(loginUserMessage("dilraj"))