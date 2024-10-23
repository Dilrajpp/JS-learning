//  node 03_basics/02_scopes.js


// var VarC = 300

let VarA = 300


if (true) {
    let VarA = 10
    const VarB = 20
    var VarC = 30
    // console.log("INNER: ", VarA);
    
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


// console.log(VarA);
// console.log(VarB);
// console.log(VarC);


//          ********************nested*****************


function One(){
    const username = "dilraj"

    function Two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    Two()
}

// One()

if (true){
    const username = "dilraj"
    if (username === "dilraj") {
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);




//          ********************* intersting *****************************


console.log(addOne(5))



function addOne(num){
    return num + 1
}

// addOne(5)



addTwo(5)

const addTwo = function(num){
    return num + 2
}

// addTwo(5)