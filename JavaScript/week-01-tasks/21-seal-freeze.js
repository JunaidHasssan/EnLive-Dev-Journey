// Demonstrate Object.seal() and Object.freeze() with practical examples and explain their difference in immutability.
const user = {
  name: "Junaid",
  age: 19,
};

// Object.seal prevents adding or removing properties, but allows modifying existing ones
Object.seal(user);
user.name = "Hassan"; // Allowed modifying existing property
user.age = 38; // Allowed
user.city = "Lahore"; // NOT allowed adding new property
delete user.age; // NOT allowed deleting property

console.log(user);
// city not added, age not deleted

// Object.freeze prevents adding, removing, and modifying properties
const user2 = {
  name: "Ali",
  age: 30,
};

Object.freeze(user2);
user2.name = "Ahmad"; // NOT allowed
delete user2.age; // NOT allowed
user2.city = "Lahore"; // NOT allowed

console.log(user2);
