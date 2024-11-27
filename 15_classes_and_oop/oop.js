const user = {
    username: "dilraj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
        
        
    }
}


// const user2 = {
//     username: "dilraj",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
        
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);



// const promiseOne = new Promise()
// const date = new Date()



function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const userOne = new User("dilraj", 12, true)
const userTwo = new User("SainoAurCode", 12, false)

console.log(userOne.constructor);
// console.log(userTwo);





// node 15_classes_and_oop/oop.js