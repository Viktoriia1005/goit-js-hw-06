const changeColorBtn = document.querySelector('.change-color');
const bodyEl = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onchangeColorBtn () {
  
  bodyEl.style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').innerHTML = bodyEl.style.backgroundColor;
  
}
changeColorBtn.addEventListener('click', onchangeColorBtn);