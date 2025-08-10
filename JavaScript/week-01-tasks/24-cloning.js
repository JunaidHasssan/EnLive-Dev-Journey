// Compare and explain cloning performance for shallow vs deep copy in a large nested object.
// Deeply nested object
const obj = { a: { b: { c: 1 } } };

// Shallow copy
console.time("shallow");
const shallow = Object.assign({}, obj);
console.timeEnd("shallow"); // super fast

// Deep copy
function deepCopy(o) {
  if (o === null || typeof o !== "object") return o;
  const c = Array.isArray(o) ? [] : {};
  for (let k in o) c[k] = deepCopy(o[k]);
  return c;
}

console.time("deep");
const deep = deepCopy(obj);
console.timeEnd("deep"); // slower

// Check references
console.log(obj.a === shallow.a); // true (shared)
console.log(obj.a === deep.a); // false (new copy)
