// Write a function to deep compare two values of any data type (primitive, array, object) to check for equality.
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a == null || b == null)
    return false;

  for (let key in a) {
    if (!deepEqual(a[key], b[key])) return false;
  }
  for (let key in b) {
    if (!(key in a)) return false;
  }
  return true;
}

// Tests
console.log(deepEqual(1, 1)); // true
console.log(deepEqual({x:1}, {x:1})); // true
console.log(deepEqual({x:1}, {x:2})); // false
console.log(deepEqual([1,2], [1,2])); // true