// CHESSBOARD
// Create a chessboard pattern that is scalable in size.

function chessboard(size) {
  let board = "";

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }

  return board;
}

const x = chessboard(8);
console.log(x);
