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



                //  ************NEXT***************

                                            // JavaScript Execution Context

                                            //Global EC  ---this keywords

                                            // Global EC
                                            // Function EC
                                            // Eval EC


                                            //This is two phase run
                                            // 1. Memory Cretion Phase
                                            // 2. Execution Phase


            // How to Execute code

            // 1. Global Execution ---this

            // 2. Memory Phase --valu1-----> undefined
            //                 --valu2-----> undefined
            //                 --adnum------>definition
            //                 --result1---->undefined
            //                 --result2---->undefined

            // 3. Execution Phase --val1-->10
            //                    --val2-->5
            //                    --addnum--->new variable environment + Execution thread    // eork end than end

                                        // Memory Phase                  // Execution Context
            //                           --valu1-----> undefined         // num1 --> 10
            //                           --valu2-----> undefined         // num2 --> 5
            //                           --total-----> undefined         // total --> 15