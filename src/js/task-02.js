const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients");

const createItemEl = ingredients.map((el) => {
  const ingredientsItemsEl = document.createElement("li");
  ingredientsItemsEl.classList.add("item");
  ingredientsItemsEl.textContent = el;

  return ingredientsItemsEl;
});

ingredientsElement.append(...createItemEl);
//console.dir(ingredientsElement);