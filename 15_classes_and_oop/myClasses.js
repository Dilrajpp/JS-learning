// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encrptPassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const saino = new User("saino", "saino@gmail.com", "123")

console.log(saino.encrptPassword());
console.log(saino.changeusername());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}


User.prototype.encrptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeusername = function(){
    return `${this.password}abc`
}

const tea = new User("tea", "tea@gmail.com", "123");


console.log(tea.encrptPassword());
console.log(tea.changeusername());




// node 15_classes_and_oop/myClasses.js