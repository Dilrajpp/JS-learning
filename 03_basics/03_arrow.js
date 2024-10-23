//  node 03_basics/03_arrow.js


// const user = {
//     username: "dilraj",
//     price: 105,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
        
//     }
// }

// // user.welcomeMessage()
// // user.username = "raj"
// // user.welcomeMessage()

// console.log(this);


const user = {
    username: "dilraj",
    price: 105,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()

// console.log(this);




// function saino(){
//     let username = "dilraj"
//     console.log(this.username);
    
// }
// saino()





// const saino = function () {
//     let username = "dilraj"
//     console.log(this.username);
    
// }

// saino()



const saino = () => {
    let username = "dilraj"
    console.log(this);
    
}

// saino()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({usernam: "dilraj"})


console.log(addTwo(3,5));



// const myArray = [ 2, 3, 4, 5, 6]

// myArray.forEach();