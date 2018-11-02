// FIZZBUZZ
// Print all the numbers from 1 to 100.
// For multiples of 3 print "Fizz".
// For multiples of 5 print "Buzz".
// For multiples of both 3 and 5 print "FizBuzz".

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const x = fizzBuzz();
console.log(x);
