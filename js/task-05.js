const input = document.querySelector('input#name-input');
const nameLabel = document.querySelector('span#name-output');

function onInputChange (event) {

    event.currentTarget.value.trim() === '' ?
    nameLabel.textContent = 'Anonymous' :
    nameLabel.textContent = event.currentTarget.value;

} 

input.addEventListener('input', onInputChange);

