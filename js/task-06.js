// Pobranie elementu DOM
const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', event => {
  const inputValue = event.target.value;
  const expectedLength = parseInt(event.target.getAttribute('data-length'));

  if (inputValue.length === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
