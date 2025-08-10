// Write a script using some() and every() to validate data (e.g., form validation).
// Sample form data object
const formData = {
  username: "junaid",
  email: "junaid@gmail.com",
  age: 19,
  password: "********",
  confirmPassword: "********",
};

// Validation rules as functions
const validators = {
  username: (val) => val.length >= 3,
  email: (val) => val.includes("@") && val.includes("."),
  age: (val) => val >= 18,
  password: (val) => val.length >= 6,
  confirmPassword: (val, data) => val === data.password,
};

// Check if all required fields are filled (not empty, not undefined)
const allFilled = Object.values(formData).every(
  (val) => val !== "" && val !== undefined && val !== null
);

// Check if any field is invalid according to validators
const anyInvalid = Object.entries(validators).some(
  ([field, validate]) => !validate(formData[field], formData)
);

if (!allFilled) {
  console.log("Please fill all required fields.");
} else if (anyInvalid) {
  console.log("Some fields have invalid data.");
} else {
  console.log("Form is valid!");
}