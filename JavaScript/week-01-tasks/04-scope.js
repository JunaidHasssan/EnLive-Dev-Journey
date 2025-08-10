// Create a code example that demonstrates the difference between var, let, and const in nested functions and block scopes, then explain output.

function testScope() {
  if (true) {
    var a = "I am var"; // function scoped
    let b = "I am let"; // block scoped
    const c = "I am const"; // block scoped
    console.log("Inside block:", a, b, c);
  }
  console.log("Outside block:", a); // works (var is function-scoped)
  // console.log(b); // Error: b is not defined
  // console.log(c); // Error: c is not defined
}

testScope();
