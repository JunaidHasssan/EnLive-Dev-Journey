// Recreate map(), filter(), and reduce() from scratch without using built-in methods.

// Custom map function
// Takes array and callback function fn
// Returns new array after applying fn on each element
function myMap(arr, fn) {
  let result = []; // create empty array for results
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i)); // apply fn and add result
  }
  return result; // return new mapped array
}

// Custom filter function
// Takes array and callback function fn
// Returns new array with elements where fn returns true
function myFilter(arr, fn) {
  let result = []; // empty array for filtered elements
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      // if callback returns true
      result.push(arr[i]); // add element to result
    }
  }
  return result; // return filtered array
}

// Custom reduce function
// Takes array, reducer function fn, and initial value init
// Returns single accumulated value
function myReduce(arr, fn, init) {
  let accumulator = init; // start with initial value
  for (let i = 0; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i); // update accumulator
  }
  return accumulator; // return final value
}

// Example usage
const numbers = [1, 2, 3, 4];

console.log(myMap(numbers, (x) => x * 2)); // [2, 4, 6, 8]
console.log(myFilter(numbers, (x) => x % 2 === 0)); // [2, 4]
console.log(myReduce(numbers, (a, b) => a + b, 0)); // 10
