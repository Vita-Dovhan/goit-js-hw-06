const namelabelEl = document.querySelector('h1 > span');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  namelabelEl.textContent = event.currentTarget.value.trim() || "Anonymous"
}