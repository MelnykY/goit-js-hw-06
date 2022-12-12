const inputControlElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

const textResizing = () => {
  textElement.style.fontSize = inputControlElement.value + "px";
};

inputControlElement.addEventListener("input", textResizing);
