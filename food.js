import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition();
const snakeExpansionRate = 1;
export let score = 0;

export function update() {
  if (onSnake(food)) {
    expandSnake(snakeExpansionRate);
    food = getRandomFoodPosition();
    score++;
    console.log(score);
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("image");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }

  return newFoodPosition;
}
