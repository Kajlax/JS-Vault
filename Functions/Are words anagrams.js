// ARE WORDS ANAGRAMS
// Return true if anagram.
// Example "elbow" === "below"

function isAnagram(str1, str2) {
  function formatStr(str) {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
  return formatStr(str1) === formatStr(str2) ? true : false;
}

const x = isAnagram("elbow", "below");
console.log(x);
