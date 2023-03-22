const inputForm = document.querySelector('.login-form');

inputForm.addEventListener('submit', event => {
  event.preventDefault();

  const dataForm = {};
  for (const element of inputForm.elements) {
    if (element.name) {
        dataForm[element.name] = element.value;
    }
  }
  if (dataForm.email && dataForm.password) {
    console.log(dataForm);
    inputForm.reset();
  } else {
    alert('Всі поля повинні бути заповнені');
  }
});