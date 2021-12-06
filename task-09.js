const btnEl = document.querySelector('.change-color');
const backgroundColorEl = document.querySelector("body");
const colorEl = document.querySelector(".color");

btnEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  backgroundColorEl.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  colorEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


