const render = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}
let basicSize = 30;

function createBoxes(amount) {
  let boxSize = 0;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i+=1) {
    boxSize = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; margin: 5px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  basicSize = boxSize + 10;
  boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  basicSize = 30;
  }

function random() {
  return Math.floor(Math.random() * 256);
}