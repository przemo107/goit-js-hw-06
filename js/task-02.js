const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulList = document.getElementById('ingredients');

const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.classList.add('item');
  fragment.appendChild(liItem);
});

ulList.appendChild(fragment);
