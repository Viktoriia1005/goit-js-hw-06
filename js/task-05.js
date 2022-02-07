const input = document.querySelector('input#name-input');
const nameLabel = document.querySelector('span#name-output');

function onInputChange (event) {
    nameLabel.textContent = event.currentTarget.value;

    if (event.currentTarget.value.trim() === '') {
        nameLabel.textContent = 'Anonymous';
    }
} 

input.addEventListener('input', onInputChange);

