// SPLIT TEXT INTO SHORT MESSAGES
// Pass in two arguments. First the string and second the length to divide the text.
// Text is splitting is done by spaces. Not in the middle of a word.

function solution(S, K) {
    let splitted = S.split("");
    let numOfMessages = 0;
  
    if (K < longestword(S)) {
      return -1;
    }
  
    for (let i = 0; i < splitted.length; i++) {
      if (splitted[K] === " ") {
        console.log(
          splitted
            .splice(0, K + 1)
            .join("")
            .trim()
        );
        numOfMessages++;
      }
  
      if (splitted[K] !== " ") {
        console.log(
          splitted
            .splice(0, splitted.lastIndexOf(" ", K + 1))
            .join("")
            .trim()
        );
        numOfMessages++;
      }
  
      if (splitted.length < K) {
        console.log(
          splitted
            .splice(0, K + 1)
            .join("")
            .trim()
        );
        numOfMessages++;
      }
    }
    return numOfMessages;
  }
  
  function longestword(str) {
    const longestWord = str.split(" ").reduce((longest, cur) => {
      return cur.length > longest.length ? cur : longest;
    });
    return longestWord.length;
  }
  
  const x = solution("The quick brown fox jumps over the lazy dog", 10);
  console.log(x);
  