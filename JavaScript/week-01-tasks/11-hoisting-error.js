// Write an example where hoisting creates unexpected behavior in a loop, then fix it.
// Error
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("var:", i); // Prints 4, 4, 4 (unexpected)
  }, 1000);
}

// Fix

for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("let:", i); // Prints 1, 2, 3 (correct)
  }, 1000);
}