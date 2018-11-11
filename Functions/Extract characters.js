// EXTRACT CHARACTERS
// Extract matching characters. Otherwise return no matches.

function extractCharacters(str) {
  let matched;

  if (str && (matched = str.match(/[aeiou]+/g))) {
    return matched;
  }
  return "No matches";
}

const x = extractCharacters("Hello world");
console.log(x);
