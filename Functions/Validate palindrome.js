// VALIDATE PALINDROME
// Return true if palindrome, example "racecar" === true.

function validatePalindrome(str) {
  const wordReversed = Array.from(str)
    .reverse()
    .join("");

  return str === wordReversed ? true : "Not a palindrome";
}

const x = validatePalindrome("racecar");
console.log(x);
