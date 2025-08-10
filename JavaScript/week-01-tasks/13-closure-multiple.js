// Build a counter module using closures where you can add multiple counters independently without interfering with each other.

function createCounter(start = 0) {
  let count = start; // private
  return {
    inc: () => ++count,
    dec: () => --count,
    value: () => count,
  };
}

// multiple counters
const count1 = createCounter(0);
const count2 = createCounter(10);

console.log(count1.inc()); // 1
console.log(count1.inc()); // 2
console.log(count2.dec()); // 9
console.log(count1.value()); // 2
console.log(count2.value()); // 9