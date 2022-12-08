let counterValue = document.querySelector("#value");

const decrementBtnElement = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnElement = document.querySelector(
  'button[data-action="increment"]'
);

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};

const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementBtnElement.addEventListener("click", decrement);
incrementBtnElement.addEventListener("click", increment);

