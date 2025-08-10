// Implement a type-checking utility function (like getType(value)) that accurately detects all primitive and reference types, including null and NaN.
function getType(value) {
  if (value === null) return "null";
  if (value !== value) return "NaN"; // NaN is the only value not equal to itself
  return Array.isArray(value) ? "Array" : typeof v;
}

// Test
console.log(getType(null)); // null
console.log(getType(NaN)); // NaN
console.log(getType(42)); // number
console.log(getType("hi")); // string
console.log(getType([1, 2])); // Array
console.log(getType({})); // object
