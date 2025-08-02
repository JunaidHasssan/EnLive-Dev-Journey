// +++++++++++ Array +++++++++++

// Arrays can be written in following ways

let Arr1 = [1, 2, 3, 4, 5];

const Arr2 = new Array("One", "Two", "Three", "Four", "Five");

// console.log(Arr1);
// console.log(Arr2);

// +++++++++++ Array methods +++++++++++

// 1- Push and Pop

// Push adds element at the end of array

Arr1.push(6);
// console.log(Arr1)

// Pop removes last element of array

Arr1.pop();
// console.log(Arr1)

// 2- Shift and Unshift

// Unshift adds element at start of array

Arr2.unshift("Zero");
// console.log(Arr2)

// Shift removes element from start of array

Arr2.shift();
// console.log(Arr2);

// 3- Slice and Splice

// Slice is used to copy a portion without including last value

let Fruits = ["Apple", "Mango", "Banana", "Kiwi", "Lichee"];

//  console.log(Fruits.slice(1 , 4));

// Splice is used to remove replace or add items
// first parameter is index, second is how many elements to remove, third is
// which element you want to add. if there is only 1 element it removes
// all the elements after that inidex

let num = [2, 4, 6, 8, 10];

num.splice(2); //removes all elements after index 2
//  console.log(num)

num.splice(1, 3); //delete three elements from index 1
//  console.log(num)

num.splice(1, 0, 3); //adds element '3' at index 1 without deleting any element
// console.log(num)

// 4- Join ... It joins array elements with the thing provided

let Animals = ["dog", "cat", "tiger", "elephant", "mokey"];

let New = Animals.join(".and.");
//  console.log(New)

// 5- from

// returns array form structure

// console.log(Array.from("Junaid"))
// console.log(Array.from({name : "Junaid"})) //returns empty array

// 6- of

// returns array from different variables

const City1 = "Narowal";
const City2 = "Shakargarh";
const City3 = "Lahore";

// console.log(Array.of(City1, City2, City3))

//7- isArray

// Checks if array or not

const Sports = ["Cricket", "Rugby", "Baseball"];

// console.log(Array.isArray(Sports))

// 8- length

// console.log(Sports.length)

// 9- Sort

const Number = [2, 24, 3, 45, 56, 63, 8, 76, 5, 7];

// Ascending sorting

Number.sort((a, b) => a - b);
// console.log(Number)

// Descending sorting

Number.sort((a, b) => b - a);
// console.log(Number)

// 10 - Reverse

// reverse the order

const array = ["one", "two", "three"];

array.reverse();
// console.log(array);

// 11- INdex of

// check index value of element

const Device = ["Mobile", "Laptop", "Computer"];

// console.log(Device.indexOf("Laptop"));

// 12- For each

// applies to all elements

const OS = ["Linux", "Windows", "Mac"];

// OS.forEach((Element) =>
//     console.log("The OS is" + " " + Element));

// 13- Find
//find any specific value

const even = [2, 4, 6, 8];

let less = even.find((Element) => Element > 6);
// console.log(less);

// 14- Filter
// find all values of same kind

const againAnimals = ["dog", "cat", "tiger", "elephant", "mokey"];

let filtered = againAnimals.filter((Element) => Element.length < 5);
// console.log(filtered);

// 15- Concat
// add different arrays

const numb = [1, 2, 3, 4, 5, 6, 7];
const alpha = ["a", "b", "c", "d", "e", "f", "g"];

// const alphanumb = numb.concat(alpha)
// console.log(alphanumb)

// 16- Map
// perform specifi operation and return new array

const odd = [1, 3, 5, 7, 9];

const mapped = odd.map((x) => x * 5);
// console.log(mapped)
