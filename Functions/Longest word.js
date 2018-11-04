// LONGEST WORD
// Find the longest word in the text

function longestWord(str) {
  const longest = str.split(" ").reduce((longest, cur) => {
    return cur.length > longest.length ? cur : longest;
  });
  return longest.length;
}
const x = longestWord("The quick brown fox jumps over the lazy dog");
console.log(x);
