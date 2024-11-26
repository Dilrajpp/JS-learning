const user = {
    username: "dilraj",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
        
    }
}

console.log(user.username);
console.log(user.getUserDetails);

// node 15_classes_and_oop/oop.js