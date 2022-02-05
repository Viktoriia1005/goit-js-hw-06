

// const input = document.querySelector("#controls input");
// const createBoxBtn = document.querySelector('[data-create]');
// const destroyBoxBtn = document.querySelector('[data-destroy]');
// const boxes = document.querySelector("#boxes");

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// input.addEventListener("input", getAmount);

// function getAmount() {
//   var amount = +document.querySelector("#controls input").value;
//   createBox(amount);
// }

// createBoxBtn.addEventListener('click', createBox);

// function createBox(amount) {
//   let defaultBoxSize = 30;
//   let fragment = document.createDocumentFragment();
//   for (let i = 0; i < amount; i+=1) {
//     let size = defaultBoxSize + i * 10;
//     let div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; margin: 5px; background-color: ${getRandomHexColor()}`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// destroyBoxBtn.addEventListener('click', destroyBox);

// function destroyBox() {
//   boxes.innerHTML = "";
// }



const render = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i+=1) {
    let size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; margin: 5px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}