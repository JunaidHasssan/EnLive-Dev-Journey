// Create a function that returns different “greeting” functions depending on time of day (Morning, Afternoon, Evening) using closure-based memory.
function greeting(timeOfDay) {
  return function (name) {
    // return `Good ${timeOfDay}, ${name}!`;
    return "Good " + timeOfDay + " " + name + "!"
  };
}

// different greeting functions
const morningGreet = greeting("Morning");
const afternoonGreet = greeting("Afternoon");
const eveningGreet = greeting("Evening");

console.log(morningGreet("Junaid"));
console.log(afternoonGreet("Enlive Team"));
console.log(eveningGreet("Virat Kohli"));
