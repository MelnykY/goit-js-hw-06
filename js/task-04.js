// let counterValue = document.querySelector("#value");

// const decrementBtnElement = document.querySelector(
//   'button[data-action="decrement"]'
// );
// const incrementBtnElement = document.querySelector(
//   'button[data-action="increment"]'
// );

// const increment = () => {
//   counterValue.textContent = Number(counterValue.textContent) + 1;
// };

// const decrement = () => {
//   counterValue.textContent = Number(counterValue.textContent) - 1;
// };

// decrementBtnElement.addEventListener("click", decrement);
// incrementBtnElement.addEventListener("click", increment);
//=============================================================================
// let counterValue = 0;

// const btnCounter = {
//   counterIncrement: document.querySelector("[data-action='increment']"),
//   counterDecrement: document.querySelector("[data-action='decrement']"),
//   counterValueEl: document.querySelector("#value"),
// }; 

//  btnCounter.counterIncrement.addEventListener("click", onClickIncrement);
//  btnCounter.counterDecrement.addEventListener("click", onClickDecrement);

// function onClickIncrement() {
//   counterValue += 1;
//  btnCounter.counterValueEl.textContent = counterValue;
// }

// function onClickDecrement() {
//   counterValue -= 1;
//  btnCounter.counterValueEl.textContent = counterValue;
// };


//REFACTORED
let counterValue = 0;

const btnCounter = {
  counterIncrement: document.querySelector("[data-action='increment']"),
  counterDecrement: document.querySelector("[data-action='decrement']"),
  counterValueEl: document.querySelector("#value"),
};

btnCounter.counterIncrement.addEventListener("click", (onClickIncrement) => {
  counterValue += 1;
  btnCounter.counterValueEl.textContent = counterValue;
});

btnCounter.counterDecrement.addEventListener("click", (onClickDecrement) => {
  counterValue -= 1;
  btnCounter.counterValueEl.textContent = counterValue;
});
