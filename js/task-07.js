const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeSize);

function onChangeSize() {
    const textSize = inputEl.value;
    textEl.style.fontSize = `${textSize}px`;
}