const btnEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

btnEl.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
  colorEl.textContent = document.body.style.background;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
