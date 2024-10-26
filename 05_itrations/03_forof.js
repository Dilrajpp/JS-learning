//  node 05_itrations/03_forof.js
// for of


// ["", "", ""]
// [{}, {}, {}]


const arr = [1, 2, 3, 4, 5, 6]

for (const saino of arr) {
    // console.log(num
    
    
}


const greetings = "Hello world"
for (const great of greetings) {
    // console.log(`Each chat is ${great}`);
    
}


// Maps

const map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('UK', "United Kingdom")
map.set('Fr', "France")
// map.set('IN', "India")

// console.log(map);



// for (const key of map) {
//     console.log(key);  
// }

for (const [key, value] of map) {
    console.log(key, ':-', value);  
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman',
//     'game3': 'cricket'
// }

// const myObject = {
//     game: 'NFS',
//     game2: 'spiderman',
//     game3: 'cricket'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); 
// }