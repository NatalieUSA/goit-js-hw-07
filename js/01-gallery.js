// Создай галерею с возможностью клика по её элементам и
//просмотра полноразмерного
// изображения в модальном окне.
// Посмотри демо видео работы галереи.

// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js.
//Разбей его на несколько подзадач:

//     Создание и рендер разметки по массиву данных galleryItems
//и предоставленному шаблону элемента галереи.
//     Реализация делегирования на div.gallery и получение
//url большого изображения.
//     Подключение скрипта и стилей библиотеки модального
//окна basicLightbox.Используй CDN сервис jsdelivr и
//     добавь в проект ссылки на минифицированные(.min) файлы
//библиотеки.
//     Открытие модального окна по клику на элементе галереи.
//Для этого ознакомься с документацией и примерами.
//     Замена значения атрибута src элемента < img > в
//модальном окне перед открытием.Используй готовую разметку
//     модального окна с изображением из примеров библиотеки
//basicLightbox.

// Разметка элемента галереи
// Ссылка на оригинальное изображение должна храниться в
//data - атрибуте source
// на элементе < img >, и указываться в href ссылки.Не добавляй
// другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

// Обрати внимание на то, что изображение обернуто в ссылку, а значит при
//клике по умолчанию
// пользователь будет перенаправлен на другую страницу.Запрети это
//поведение по умолчанию.

// Закрытие с клавиатуры
// Этот функционал не обязателен при сдаче задания, но будет хорошей
//дополнительной практикой.
//     Добавь закрытие модального окна по нажатию клавиши Escape.Сделай так,
//чтобы прослушивание
//     клавиатуры было только пока открыто модальное окно.У библиотеки
// basicLightbox есть метод для
//     программного закрытия модального окна.

//console.log(basicLightbox);

import { galleryItems } from "./gallery-items.js";
// Change code below this line
//console.log(galleryItems);

//     Создание и рендер разметки по массиву данных galleryItems
//и предоставленному шаблону элемента галереи.
const gallery = document.querySelector(".gallery");
console.log(gallery);

gallery.addEventListener("click", onGalleryClick);

const galleryMarkup = createGalleryItems();
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryItems() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a href="${original}" class="gallery__link">
    <img
     class="gallery__image"
    src="${preview}" 
    alt="${description}" 
    data-source="${original}" />
  </a>
</div>`;
    })
    .join("");
  //console.log(markup);
  return markup;
}

function onGalleryClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  const selectedImage = e.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${selectedImage}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEsc.bind(instance));
      },

      onClose: () => {
        document.removeEventListener("keydown", onEsc);
      },
    }
  );

  instance.show();
}

function onEsc(e) {
  if (e.code === "Escape") {
    this.close();
  }
}
