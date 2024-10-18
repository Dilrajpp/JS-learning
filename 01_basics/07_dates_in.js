// node 01_basics/07_dates_in.js

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());

// console.log(typeof myDate);



// let myCreateDate = new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString());

// let myCreateDate = new Date(2023, 0, 23, 5, 4)
// console.log(myCreateDate.toLocaleString());

// let myCreateDate = new Date("2023-01-14")
// console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Date.now());
// console.log(Date.now()/100);
// console.log(Math.floor(Date.now()/100));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time`

console.log(newDate.toLocaleString('default', {
    weekday: "long"
    // timeZone: ""
}))

