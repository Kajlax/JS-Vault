// FLATTEN ARRAYS
//  Pass in an array of arrays and flatten them to a single array

function flattenArray(arr) {
  return [].concat(...arr);
}

const x = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
console.log(x);
