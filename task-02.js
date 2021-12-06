const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemOfIngredientsEl = ingredients.map(option => {
  const ingredientsEl = document.createElement('li')
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = option;
  return ingredientsEl;
})
const newArr = document.querySelector("ul");
newArr.append(...itemOfIngredientsEl);

