// EVEN & ODD SUMS
// Return the sums of even and odd numbers in an array

// evenAndOddSums([10, 25, 33, 50, 60, 60, 45, 71]) == [180, 174]

function evenAndOddSums(arr) {
  let sumEven = 0;
  let sumOdd = 0;

  arr.forEach(num => (num % 2 === 0 ? (sumEven += num) : (sumOdd += num)));
  let result = new Array(sumEven, sumOdd);

  return result;
}

const x = evenAndOddSums([10, 25, 33, 50, 60, 60, 45, 71]);
console.log(x);
