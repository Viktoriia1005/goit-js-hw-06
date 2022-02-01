const form = document.querySelector('.login-form');


form.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(event) {
event.preventDefault();
console.dir(event.currentTarget.elements)
}
