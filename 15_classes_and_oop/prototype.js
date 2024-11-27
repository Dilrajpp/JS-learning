// let myName = "dilraj"
// let myName = "dilraj        "
// let myCmpny = "saino        "

// console.log(myName.trim().length);
// console.log(myName.length);


let myCourse = ["math", "science"]

let courseMake = {
    math: "engineer",
    science: "doctor",

    getMathPower: function(){
        // console.log(`Math poweer is ${this.math}`);
        
    }
}

Object.prototype.dilraj = function(){
    // console.log(`dilraj is prasent in all object`);
    
}

Array.prototype.heydilraj = function(){
    // console.log(`Dilraj says hello`);
    
}
// courseMake.dilraj()
myCourse.dilraj()
myCourse.heydilraj()
// courseMake.heydilraj()



// inheritance
const User = {
    name: "saino",
    email: "saino@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Tech learning',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "SainoAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"dilraj".trueLength()
"iceTea".trueLength()
// node 15_classes_and_oop/prototype.js
