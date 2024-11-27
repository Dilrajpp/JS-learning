class User {
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`USERNAME is ${this.username}`);
        }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const saino = new Teacher("saino", "sainoteacher.com", "123")

saino.addCourse()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

// console.log(saino === masalaChai);
// console.log(saino === Teacher);
console.log(saino instanceof Teacher);
console.log(saino instanceof User);






// node 15_classes_and_oop/inhertance.js