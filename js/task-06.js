const input = document.createElement('input#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if (+input.data-length === input.value.trim().length) {

    }
}