// Hoisting with var

console.log(Name)
var Name = "Junaid"

// It will print undefined

// Hoisting with let and const

// console.log(City)
// let City = "Shakargarh"

// This will give error

// Function declaration

add1(6)

function add1(num) {

    console.log(num+1)
    
}

//It will print the answer

//Function expression

// add2(6)

const add2 = (value) => {
    console.log(value+2)
}

// This will give error if function is called before function expression