
let counterValue = 0;

const valueElement = document.getElementById('value');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
  counterValue++;
  valueElement.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  valueElement.textContent = counterValue;
});

