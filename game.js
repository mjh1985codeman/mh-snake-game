let lastRenderTime = 0;
//setup game loop.
import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from "./snake.js";

const gameBoard = document.getElementById("game-board");

//Game Loop.
// currentTime is in milliSeconds.
function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //dividing by 1000 to convert from milliseconds to seconds.
  //this makes the browser tell us when we can render our next frame.
  window.requestAnimationFrame(main);
  //work to slow down the frame speed:
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
