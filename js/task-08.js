const form = document.querySelector('.login-form');


form.addEventListener('submit', onButtonSubmit);

function onButtonSubmit(event) {
    // отключить перезагрузку страницы

event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;

// проверка на заполнение полей

if(mail === '' || password === '') {
    alert ('Убедитесь, что все поля формы заполнены');
    form.reset();
    return;
}

// собрать данные с формы 

const formData = new FormData(event.currentTarget);

formData.forEach((value, name) => {
    
});
console.log(formData);

form.reset();
}
