let counterValue = 0;
const buttonsRefs = document.querySelectorAll("[data-action]");
const spanRefs = document.querySelector("#value");
const changeValue = i => {
  counterValue = counterValue + i;
  spanRefs.textContent = counterValue;
}
buttonsRefs[0].addEventListener('click', () => changeValue(-1))
buttonsRefs[1].addEventListener('click', () => changeValue(+1))


