// 01 Javascript Data Types

function heading(title) {
    console.log(title);
};
heading("====== JavaScript Data Types =======");

// 1- Primitive Data Types

heading("===== 1- Primitive Data Types =====");

// a- String

heading("=== a- String ===");

let name = "Junaid"
console.log("Name:", name);

console.log("Type of 'Name':", typeof name)

// b- Number

heading("=== b- Number ===");

let age = 19
console.log("Age:", age);

console.log("Type of 'Age':", typeof age);

// c- Boolean

heading("=== c- Boolean ===");

let isinlove = true
console.log("Junaid is in Love.", isinlove);

console.log("Type of this part:", typeof isinlove);

// d- BigNum

heading("=== d- BigNum ===");

let BigNum = 1234567890123456789012345678901234567890n;
console.log("How much does Junaid love?", "More Than", BigNum);

console.log("Type of this part:", typeof BigNum);

// e- Undefined

heading("=== e- Undefined ===");

let notassigned;

console.log("Does she also love Junaid?", notassigned);
console.log("Type of this part:", typeof notassigned);

// f- Null

heading("=== f- Null ===");

let value = null;
console.log("Can you imagine this?", value);
console.log("Type of this part:", typeof value);

// 2- Non Primitive Data Types

heading("===== 2- Non Premitive Data Types =====");

// a- Object

heading("=== a- Object ===");

let Student = {
    name: "Junaid",
    age: 19,
    isenrolled: true
};

console.log("Student:", Student);

console.log("Type of 'Student' is:", typeof Student);

// b- Array

heading("=== b- Array ===");

let hobbies = ["Coding", "Movie Watching", "Coin Collecting"]
console.log("Hobbies of Junaid are:", hobbies);

console.log("Is this Array?", Array.isArray(hobbies));

console.log("Type of Array is:", typeof hobbies);

// c- Function

heading("=== c- Function ===");

function greet() {
    console.log("Hello");
}
greet();

console.log("Type of greet:", typeof greet);