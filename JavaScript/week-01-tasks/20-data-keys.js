// Use Object.entries() and Object.fromEntries() to convert objects to arrays and back while transforming data keys.
const original = {
  name: "Junaid",
  age: 19,
  city: "Shakargarh",
};

// 1. Object to array of [key, value]
const entries = Object.entries(original);
console.log(entries);
// Output: [ ['name', 'Junaid'], ['age', 19], ['city', 'Shakargarh'] ]

// 2. Modify keys, uppercase all keys
const modifiedEntries = entries.map(([key, value]) => [
  key.toUpperCase(),
  value,
]);
console.log(modifiedEntries);
// Output: [ ['NAME', 'Junaid'], ['AGE', 19], ['CITY', 'Shakargarh'] ]

// 3. Convert back to object
const modifiedObject = Object.fromEntries(modifiedEntries);
console.log(modifiedObject);
// Output: { NAME: 'Junaid', AGE: 19, CITY: 'Shakargarh' }