
const itemEl = document.querySelectorAll(".item");
const itemLengthEl = itemEl.length;
console.log(`Number of categories: ${itemLengthEl}`);

itemEl.forEach(element => {
  const titleEl = element.querySelector('h2');
  const numberEl = element.querySelectorAll('li');
  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${numberEl.length}`);
})


