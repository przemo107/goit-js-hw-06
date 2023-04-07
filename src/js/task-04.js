const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById('value');

let counterValue = 0;

const updateCounterView = () => {
  counterValueSpan.textContent = counterValue;
};

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounterView();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounterView();
});
