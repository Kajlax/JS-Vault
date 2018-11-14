// COUNT CHARACTER
// Pass in a text string and a character which you want to count.

function countCharacter(str, char) {
  const matchableChar = new RegExp(char, "g");
  const result = str.match(matchableChar).length;

  return result;
}

const x = countCharacter("Bring in the bees. Bees are swarming.", "B");
console.log(x);
