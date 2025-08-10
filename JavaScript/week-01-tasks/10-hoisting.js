// Show how function hoisting differs from variable hoisting with arrow functions vs traditional functions.
console.log(sum(2, 3)); // function declaration is fully hoisted

// console.log(add(2, 3)); // Cannot access 'add' before initialization
// console.log(sub(2, 3)); // sub is undefined

// Traditional function hoisted completely
function sum(a, b) {
  return a + b;
}

// Arrow function with let hoisted but in Temporal Dead Zone
let add = (a, b) => a + b;

// Function expression with var hoisted as undefined
var sub = function(a, b) {
  return a - b;
};

// After initialization
console.log(add(2, 3)); // Works now
console.log(sub(5, 2)); // Works now