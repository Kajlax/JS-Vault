// THE FIBONACCI NUMBERS
// Pass in an argument how many Fibonacci's numbers should be returned.

function fibonacci(val) {
  let sequence = [1, 2];

  for (let i = 2; i <= val; i++) {
    sequence.push((sequence[i] = sequence[i - 1] + sequence[i - 2]));
  }
  sequence.pop();
  return sequence;
}

const x = fibonacci(12);
console.log(x);
