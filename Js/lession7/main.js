

// let obj = {};

// console.log(obj)
// console.log(typeof(obj))

let username = {
    firstname: "Iman", 
    isLoggedin: true
}

console.log(username);

const personDetail = {
    name: "paul",
    isActive: true // All the data in this object are mutable you can change them
};

personDetail.name = "Mr Tola"; //only memory refrencess can only not alllow to be change

console.log(personDetail.name)

//DATE is also an Object

let today = new Date();

console.log(today)
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getFullYear())

console.log(typeof(today));

//ARRAY

let heros = ["Ade", "Paul", "Kane"];

console.log(heros[1]) //I pointed to the second value

console.log("1" + 1)
console.log(1 + 1)

// let isValue = true;        
// console.log(isValue + 1) //This will 2 because javascript understand true = 1 while false = 0


let isActive = "2"
console.log(typeof Number(isActive))

let isAct = "2av"
console.log( Number(isAct))
console.log(typeof Number(isAct))