// CHUNK AN ARRAY
// Chunk an array based on the value of the second argument

function chunkArray(arr, len) {
  const chunkedArr = [];

  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];
    !last || last.length === len ? chunkedArr.push([val]) : last.push(val);
  });
  return chunkedArr;
}

const x = chunkArray([1, 2, 3, 4, 5, 6, 7], 4);
console.log(x);
