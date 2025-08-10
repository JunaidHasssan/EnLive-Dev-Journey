// Implement a polyfill for Object.assign() and explain the difference between copying references and values.
function myAssign(target, ...sources) {
  if (target == null)
    throw new TypeError("Cannot convert undefined or null to object");
  let to = Object(target);

  for (let source of sources) {
    if (source != null) {
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }
  return to;
}

// Example usage:
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = myAssign({}, obj1, obj2);
console.log(merged);