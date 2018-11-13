// REACH TARGET WITH ADDITION AND MULTIPLICATION
// Can the argument value passed in be reached only by adding 5 or mulptiplying by 3 repeatedly.
// Starting from value 1.

function findSolution(target) {
  function find(current, history) {
    if (current === target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

const x = findSolution(13);
console.log(x);
