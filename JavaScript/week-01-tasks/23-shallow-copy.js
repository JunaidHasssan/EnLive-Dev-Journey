// Show how shallow copy can lead to bugs in nested objects by providing a broken example, then fix it using deep copy.
// Shallow copy example causing bug
const original = {
  user: { name: "Junaid", age: 25 },
  active: true
};

const shallowCopy = Object.assign({}, original);
shallowCopy.user.age = 30;

console.log("After shallow copy modification:");
console.log("Original user age:", original.user.age); // 30 (bug)

// Deep copy function
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

// Fixed deep copy example
const deepCopyObj = deepCopy(original);
deepCopyObj.user.age = 40;

console.log("\nAfter deep copy modification:");
console.log("Original user age:", original.user.age); // 30 (unchanged now)
console.log("Deep copy user age:", deepCopyObj.user.age); // 40
