// Demonstrate temporal dead zone behavior and explain why let and const act differently from var.

console.log(a); // undefined (var hoisted)
var a = 10;

// console.log(b); // ReferenceError (TDZ)
let b = 20;

// console.log(c); // ReferenceError (TDZ)
const c = 30;
