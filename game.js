let lastRenderTime = 0;
//setup game loop.
import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

import { update as updateFood, draw as drawFood, score } from "./food.js";

import { outsideGrid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
const scoreBoard = document.getElementById("score-board");
let gameOver = false;

//Game Loop.
// currentTime is in milliSeconds.
function main(currentTime) {
  if (gameOver) {
    return;
  }
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
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
  if (gameOver) {
    const scoreElement = document.createElement("div");
    scoreElement.innerHTML = `Your Score is ${score}`;
    scoreBoard.appendChild(scoreElement);
  }
}
