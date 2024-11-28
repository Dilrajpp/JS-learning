 const descripter = Object.getOwnPropertyDescriptors(Math, "PI")

//  console.log(descripter);
 

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const saino = {
    name: 'black chai',
    price: 300,
    isAvailable: true,

    orderSaino: function(){
        console.log("chai nhi bni");
        
    }
}

console.log(Object.getOwnPropertyDescriptors(saino, "name"));



Object.defineProperty(saino, 'price', {
    // writable: false,
    // enumerable: false
    enumerable: true
})


console.log(Object.getOwnPropertyDescriptors(saino, "name"));



for (let [key, value] of Object.entries(saino)) {
    if (typeof value !== 'function') {
        console.log(`${key} i ${value}`);
        
    }
    
    
}



// node 15_classes_and_oop/mathpi.js