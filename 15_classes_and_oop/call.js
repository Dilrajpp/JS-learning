function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createwUser(username, email, password){
    SetUsername.call(this, username)
    // this.username = username
    this.email = email
    this.password = password
}


const saino = new createwUser("saino", "saino@dr.com", "1234")
console.log(saino);


// node 15_classes_and_oop/call.js
