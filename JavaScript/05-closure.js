// Basic Closure

function outer() {
  let Name = "Junaid";
  function inner() {
    console.log(Name);
  }
  return inner;
}

// Example

function createClickCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(`You clicked ${count} times`);
  };
}
const counter = createClickCounter();

counter();
counter();
counter();

