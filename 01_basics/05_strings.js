// node 01_basics/05_strings.js

const name = "dilraj"
const repoCount = 70

// console.log(name + repoCount + " Value");  //old

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //new rule


const glassNmae = new String('dilraj-dc-com')

// console.log(glassNmae[0]);
// console.log(glassNmae.__proto__);

// console.log(glassNmae.length);
console.log(glassNmae.charAt(3));
console.log(glassNmae.indexOf('r'));


const newString = glassNmae.substring(0, 4)
// const newString = glassNmae.substring(-8, 4)
console.log(newString);


const anotherString = glassNmae.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    dilraj  "
console.log(newStringOne);
console.log(newStringOne.trim());



const url = "https:/dilraj.com/dilraj%70patel"

console.log(url.replace('%70', '-'))

console.log(url.includes('dilraj')) //true
console.log(url.includes('krishnpal')) //false

console.log(glassNmae.split('-'));
