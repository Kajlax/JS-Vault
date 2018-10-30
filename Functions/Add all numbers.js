// ADD ALL NUMBERS
// Return the sum of all numbers

function AddNumbers(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}

const x = AddNumbers(1, 2, 3, 4, 5, 10);
console.log(x);
