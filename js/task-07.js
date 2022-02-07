const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = inputEl.value + 'px';

function onChangeSize() {
    const textSize = inputEl.value;
    textEl.style.fontSize = `${textSize}px`;
}

inputEl.addEventListener('input', onChangeSize);

