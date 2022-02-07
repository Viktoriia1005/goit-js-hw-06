const input = document.querySelector('input#validation-input');

function onInputBlur() {
    if (+input.dataset.length === input.value.trim().length) {
        input.setAttribute('class', 'valid');
    } else {
        input.setAttribute('class', 'invalid');
    }
}

input.addEventListener('blur', onInputBlur);