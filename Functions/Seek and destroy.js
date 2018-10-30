// SEEK & DESTROY
// Pass in two arguments. First the whole array, then the values that should be removed

function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}

const x = seekAndDestroy([1, 2, 3, 4, 5, 5, 5, "destroy"], 2, 5);
console.log(x);
