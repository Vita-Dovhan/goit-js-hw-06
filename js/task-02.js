const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newArr = document.querySelector("ul");
const itemOfIngredientsEl = ingredients.map(option => {
  const ingredientsEl = document.createElement('li')
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = option;
  return ingredientsEl;
})

newArr.append(...itemOfIngredientsEl);

