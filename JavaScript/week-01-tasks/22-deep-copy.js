// Write your own deep copy function without using JSON.stringify() and explain edge cases like functions or circular references.
function simpleDeepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    // Return primitives as is
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Recursively copy each property
      copy[key] = simpleDeepCopy(obj[key]);
    }
  }

  return copy;
}

// Example:
const original = { a: 1, b: { c: 3 } };
const copied = simpleDeepCopy(original);

copied.b.c = 10;

console.log(original.b.c); // 3 (unchanged)
console.log(copied.b.c); // 10 (changed)
