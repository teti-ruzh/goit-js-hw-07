import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

function createGalleryMarkup(images) {
return images.map(({preview, original, description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
}).join('')
};

galleryContainer.addEventListener ('click', onGalleryClick);


function onGalleryClick(event) {
  event.preventDefault();
if (!event.target.classList.contains('gallery__item')){
  return;
}
const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`).show();
}


