// LONGEST WORD 2
// If multiple equal length words, return an array of words.
// Discard special characters (commas, colons).

function longestWord(str) {
  const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((cur, next) => next.length - cur.length);
  const longestWordArray = sorted.filter(
    word => word.length === sorted[0].length
  );
  return longestWordArray.length === 1 ? longestWordArray[0] : longestWordArray;
}

const x = longestWord("The quick brown fox jumps over the lazy dog");
console.log(x);
