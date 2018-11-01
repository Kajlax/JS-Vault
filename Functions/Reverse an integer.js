// REVERSE AN INTEGER
// Reverse an integer but if negative keep the sign at the beginning.

function reverseInt(int) {
  const reversed = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reversed) * Math.sign(int);
}

const x = reverseInt(-1234);
console.log(x);
