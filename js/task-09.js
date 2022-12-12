function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyСolorChange = document.querySelector("body");
const buttonСolorChange = document.querySelector(".change-color");
const nameColorChange = document.querySelector(".color");

buttonСolorChange.addEventListener("click", () => {
  let randomHexColor = getRandomHexColor();
  bodyСolorChange.style.backgroundColor = randomHexColor;
  nameColorChange.textContent = randomHexColor;
});