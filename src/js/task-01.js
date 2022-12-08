const listItemsElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemsElements.length}`);

const allCategoriesArray = listItemsElements.forEach((el) => {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
});
