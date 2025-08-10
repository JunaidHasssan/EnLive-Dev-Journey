// Use reduce() to flatten a nested array of arbitrary depth.

function flatten(arr) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      // recursively flatten val if it's an array
      return acc.concat(flatten(val));
    } else {
      return acc.concat(val);
    }
  }, []);
}

const nested = [1, [2, 3, 4, [5, 6, 7], 8], 9];

console.log(flatten(nested));