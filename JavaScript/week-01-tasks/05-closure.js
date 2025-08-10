// Write a small program where a variable accidentally leaks into global scope and fix it using closures or IIFE.

// Global variable leak
function badFunction() {
  leakedVar = "I am global now!"; // no var/let/const, becomes global
}
badFunction();
console.log("Global scope leak:", leakedVar); // Accessible anywhere (bad)

// Using IIFE
(function () {
  let safeVar = "I stay private!";
  console.log("Inside IIFE:", safeVar);
})();

// console.log(safeVar); // safeVar is not defined
