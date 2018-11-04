// LONGEST WORD
// Find the longest word in the text

function longestWord(str) {
  const longest = str.split(" ").reduce((longest, cur) => {
    return cur.length > longest.length ? cur : longest;
  });
  return longest.length;
}
const x = longestWord("");
console.log(x);
