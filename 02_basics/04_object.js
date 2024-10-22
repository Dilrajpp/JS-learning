//  node 02_basics/04_object.js


// const trendUser = new Object()
const trendUser = {}

trendUser.id = "js123"
trendUser.name = "Rajhai"
trendUser.isLoggedIn = false


// console.log(trendUser);

const regularUser = {
    email: "dilrajpp77@gmail.com",
    fullname: {
        userfullname: {
            firstname: "dilraj",
            lastname: "patel"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "rajji@gmail.com"
    },

    {
        id: 2,
        email: "rajji2@gmail.com"
    },

    {
        id: 3,
        email: "rajji3@gmail.com"
    },

    {
        id: 4,
        email: "rajji4@gmail.com"
    },
]

users[1].email
console.log(trendUser);


console.log(Object.keys(trendUser));
console.log(Object.values(trendUser));
console.log(Object.entries(trendUser));


console.log(trendUser.hasOwnProperty('isLogged'));
