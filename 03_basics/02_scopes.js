//  node 03_basics/02_scopes.js


// var VarC = 300

let VarA = 300


if (true) {
    let VarA = 10
    const VarB = 20
    var VarC = 30
    console.log("INNER: ", VarA);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


console.log(VarA);
// console.log(VarB);
// console.log(VarC);


