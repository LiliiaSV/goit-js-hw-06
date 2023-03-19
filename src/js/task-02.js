const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(element => {
  const ingredient = document.createElement('li');

  ingredient.textContent = element;
  ingredient.classList.add('item');

  return ingredient;
});

ingredientsList.append(...items);