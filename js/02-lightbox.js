//console.log(SimpleLightbox);
import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.forEach((element) => {
  const galleryItem = document.createElement("li");
  galleryItem.className = "gallery__item";

  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = element.preview;
  galleryImage.alt = element.description;
  galleryImage.setAttribute("title", element.original);

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);

  items.push(galleryItem);
});

gallery.append(...items);
//console.log(gallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  scrollZoomFactor: 2,
  navText: ["*", "*"],
  overlayOpacity: 0.9,
  fadeSpeed: 300,
  scrollZoom: true, //Можно масштабировать изображение с помощью колесика мыши
});
