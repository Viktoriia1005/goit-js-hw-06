function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBoxBtn = document.querySelector('[data-create]');
const destroyBoxBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector("#boxes");
