// REVERSE A STRING

function reverseString(str) {
    return Array.from(str)
      .reverse()
      .join("");
  }
  
  const x = reverseString("hello world");
  console.log(x);