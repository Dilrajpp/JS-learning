class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const dilraj = new User("dilraj")
// console.log(dilraj.createId());


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}


const airdop = new Teacher("airdop", "air@dop.com")
airdop.logMe();
// console.log(airdop.createId());


// node 15_classes_and_oop/staticprop.js