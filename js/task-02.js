const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector("#ingredients");

const createItemElement = ingredients.map((el) => {
  const ingredientsItemsElement = document.createElement("li");
  ingredientsItemsElement.classList.add("item");
  ingredientsItemsElement.textContent = el;

  return ingredientsItemsElement;
});

ingredientsElement.append(...createItemElement);
//console.dir(ingredientsElement);

