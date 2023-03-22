const symbolsInput = document.querySelector('#validation-input');

symbolsInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        symbolsInput.classList.add('valid');
        symbolsInput.classList.remove('invalid');
    } else {
        symbolsInput.classList.add('invalid');
        symbolsInput.classList.remove('valid');
    }
});

