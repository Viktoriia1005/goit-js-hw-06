const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter [data-action="decrement"]');
const incrementBtn = document.querySelector('#counter [data-action="increment"]');

let counterValueEl = Number(counterValue.textContent);

function onDecrementBtnClick () {
    counterValue.innerHTML = counterValueEl -= 1;
}
function onIncrementBtnClick () {
    counterValue.innerHTML = counterValueEl += 1;
}

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

