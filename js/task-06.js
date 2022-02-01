const input = document.querySelector('input#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (+input.dataset.length === input.value.trim().length) {
        input.setAttribute('class', 'valid');
    } else {
        input.setAttribute('class', 'invalid');
    }
}