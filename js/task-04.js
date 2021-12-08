let counterValue = 0;
const buttonPlusEl = document.querySelector('button[data-action="decrement"]');
const buttonMinusEl = document.querySelector('button[data-action="increment"]');
const spanRefs = document.querySelector("#value");
const changeValue = i => {
  counterValue = counterValue + i;
  spanRefs.textContent = counterValue;
}
buttonPlusEl.addEventListener('click', () => changeValue(-1));
buttonMinusEl.addEventListener('click', () => changeValue(+1));


