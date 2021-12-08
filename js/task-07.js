const rangeEl = document.querySelector('#font-size-control');
const spanTextEl = document.querySelector('#text');

rangeEl.addEventListener('input', onRangeChange);

function onRangeChange(event) {
  const sizeEl = event.currentTarget.value;
  spanTextEl.style.fontSize = `${event.currentTarget.value}px`;
}
