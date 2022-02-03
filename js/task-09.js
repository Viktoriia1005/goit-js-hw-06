

const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', onchangeColorBtn);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const getRandomHexColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`

function onchangeColorBtn () {
  
  document.body.style.backgroundColor = getRandomHexColor;
  document.querySelector('.color').innerHTML = getRandomHexColor;
}
