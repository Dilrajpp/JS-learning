//  node 05_itrations/05_foreach.js


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )


// coding.forEach( (item) => {
//     console.log(item);
    
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
        langaugeName: "javaScript",
        langaugeFileName: "js"
    },
    {
        langaugeName: "HTML",
        langaugeFileName: "html"
    },
    {
        langaugeName: "Java",
        langaugeFileName: "java"
    },
    {
        langaugeName: "python",
        langaugeFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langaugeName);
    
})