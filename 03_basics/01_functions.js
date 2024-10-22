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


// console.log(loginUserMessage())
// console.log(loginUserMessage("dilraj"))



// function calculateCartPrice(num1){
// function calculateCartPrice(...num1){
function calculateCartPrice(val1, val2, ...num1){
    return num1
}


// console.log(calculateCartPrice(10));
// console.log(calculateCartPrice(100, 300, 600, 800, 200, 8000));





// ***********next



const user = {
    username: "dilraj",
    price: 100
    // prices: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "raj",
    price: 100
})

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));