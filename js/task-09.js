const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.body;
changeColorBtn.addEventListener('click', onchangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onchangeColorBtn () {
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = bodyEl.style.backgroundColor;
  
}
