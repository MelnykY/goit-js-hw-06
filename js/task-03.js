const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryELements = document.querySelector(".gallery");

galleryELements.style.listStyle = "none";
galleryELements.style.display = "flex";
galleryELements.style.flexDirection = "row";
galleryELements.style.gap = "15px";

const galleryCard = ({ url, alt } = {}) => {
  const imagesList = `<li><img src="${url}" alt="${alt}" width = "200px" height = "125px"></li>`;
  return imagesList;
};

const galleryLiElements = images.map(galleryCard).join("");

galleryELements.insertAdjacentHTML("beforeend", galleryLiElements);
//console.dir(galleryELements);
