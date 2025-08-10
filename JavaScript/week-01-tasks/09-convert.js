// Convert all primitive types to objects and back again, explaining how JavaScript handles this internally.
// Primitive values
let num = 42;
let str = "hello";
let bool = true;

// Convert primitives to objects
let numObj = new Number(num);
let strObj = new String(str);
let boolObj = new Boolean(bool);

console.log(typeof numObj, numObj); // object [Number: 42]
console.log(typeof strObj, strObj); // object [String: 'hello']
console.log(typeof boolObj, boolObj); // object [Boolean: true]

// Convert back to primitives
console.log(typeof numObj.valueOf(), numObj.valueOf()); // number 42
console.log(typeof strObj.valueOf(), strObj.valueOf()); // string 'hello'
console.log(typeof boolObj.valueOf(), boolObj.valueOf()); // boolean true