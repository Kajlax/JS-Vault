const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const blockSize = 10;
const widthInBlocks = width / blockSize;
const heightInBlocks = height / blockSize;
let score = 0;

drawBorder = () => {
  ctx.fillStyle = "Gray";
  ctx.fillRect(0, 0, width, blockSize);
  ctx.fillRect(0, height - blockSize, width, blockSize);
  ctx.fillRect(0, 0, blockSize, height);
  ctx.fillRect(width - blockSize, 0, blockSize, height);
};

drawScore = () => {
  ctx.font = "20px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + score, blockSize, blockSize);
};

gameOver = () => {
  clearInterval(intervalId);
  ctx.font = "50px Arial";
  ctx.fillStyle = "Black";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Game Over", width / 2, height / 2);
};

circle = (x, y, radius, fillCircle) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

let Block = function(col, row) {
  this.col = col;
  this.row = row;
};

Block.prototype.drawSquare = function(color) {
  let x = this.col * blockSize;
  let y = this.row * blockSize;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, blockSize, blockSize);
};

Block.prototype.drawCircle = function(color) {
  let centerX = this.col * blockSize + blockSize / 2;
  let centerY = this.row * blockSize + blockSize / 2;
  ctx.fillStyle = color;
  circle(centerX, centerY, blockSize / 2, true);
};

Block.prototype.equal = function(otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

let Snake = function() {
  this.segments = [new Block(7, 5), new Block(6, 5), new Block(5, 5)];
  this.direction = "ArrowRight";
  this.nextDirection = "ArrowRight";
};

Snake.prototype.draw = function() {
  for (let i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare("Coral");
  }
};

Snake.prototype.move = function() {
  let head = this.segments[0];
  let newHead;
  this.direction = this.nextDirection;
  if (this.direction === "ArrowRight") {
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === "ArrowDown") {
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === "ArrowLeft") {
    newHead = new Block(head.col - 1, head.row);
  } else if (this.direction === "ArrowUp") {
    newHead = new Block(head.col, head.row - 1);
  }
  if (this.checkCollision(newHead)) {
    gameOver();
    return;
  }
  this.segments.unshift(newHead);
  if (newHead.equal(apple.position)) {
    score++;
    apple.move();
  } else {
    this.segments.pop();
  }
};

Snake.prototype.checkCollision = function(head) {
  let leftCollision = head.col === 0;
  let topCollision = head.row === 0;
  let rightCollision = head.col === widthInBlocks - 1;
  let bottomCollision = head.row === heightInBlocks - 1;
  let wallCollision =
    leftCollision || topCollision || rightCollision || bottomCollision;
  let selfCollision = false;
  for (let i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }
  return wallCollision || selfCollision;
};

Snake.prototype.setDirection = function(newDirection) {
  if (this.direction === "ArrowUp" && newDirection === "ArrowDown") {
    return;
  } else if (this.direction === "ArrowRight" && newDirection === "ArrowLeft") {
    return;
  } else if (this.direction === "ArrowDown" && newDirection === "ArrowUp") {
    return;
  } else if (this.direction === "ArrowLeft" && newDirection === "ArrowRight") {
    return;
  }
  this.nextDirection = newDirection;
};

let Apple = function() {
  this.position = new Block(10, 10);
};

Apple.prototype.draw = function() {
  this.position.drawCircle("LimeGreen");
};

Apple.prototype.move = function() {
  let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
  let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};

let snake = new Snake();
let apple = new Apple();

let intervalId = setInterval(function() {
  ctx.clearRect(0, 0, width, height);
  snake.move();
  snake.draw();
  apple.draw();
  drawScore();
  drawBorder();
}, 100);

document.addEventListener("keydown", event => {
  let newDirection = event.key;
  if (
    newDirection === "ArrowUp" ||
    newDirection === "ArrowDown" ||
    newDirection === "ArrowRight" ||
    newDirection === "ArrowLeft"
  ) {
    snake.setDirection(newDirection);
  }
});
