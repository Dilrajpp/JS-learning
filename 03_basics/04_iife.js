//  node 03_basics/04_iife.js

//  Immediately Invoked Function Expressions (IIFE)

(function saino(){
    // named iife
    console.log(`DB CONNECTED`);
})();

// saino()

// ( function sainoaurcode() {
//     console.log(`DB CONNECTED TWO`);
    
// })()

( (name) => {
        console.log(`DB CONNECTED TWO ${name}`);
        
})('dilraj')