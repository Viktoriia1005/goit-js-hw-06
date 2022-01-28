// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter [data-action="decrement"]');
const incrementBtn = document.querySelector('#counter [data-action="increment"]');

let counterValueEl = Number(counterValue.textContent);

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick () {
    counterValue.innerHTML = counterValueEl -= 1;
}
function onIncrementBtnClick () {
    counterValue.innerHTML = counterValueEl += 1;
}