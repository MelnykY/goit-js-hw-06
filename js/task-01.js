const listItemsElements = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItemsElements.length}`);

const categoryDetails = [...listItemsElements]
  .map(
    (categories) => `Category: ${categories.children[0].textContent} 
Element: ${categories.children[1].children.length}`
  )
  .join("\r\n");

console.log(categoryDetails);