// node 05_itrations/08_reduce.js


const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentValue}`);
//     return accumulator + currentValue
// }, 0)
// // }, 6)

// console.log(myTotal);
// acc = accumulator
// curval = currentValue

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 899
    },
    {
        itemName: "wev dev couerse",
        price: 99999
    },
    {
        itemName: "data course",
        price: 2569
    },
    {
        itemName: "AI course",
        price: 105891
    },
    {
        itemName: "Designer",
        price: 994
    },
    {
        itemName: "Sub Domain",
        price: 12999
    },
]


const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);