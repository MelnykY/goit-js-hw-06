const inputControlElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textElement.style.fontSize = inputControlElement.value + "px";

const textResizing = () => {
  textElement.style.fontSize = `${inputControlElement.value}px`;
};

inputControlElement.addEventListener("input", textResizing);


