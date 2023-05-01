import SimpleLightbox from 'simplelightbox';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';

function createCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__piont"><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}/></a></li>`;
    })
    .join('');
}

const divRef = document.querySelector('.gallery');

divRef.insertAdjacentHTML('afterbegin', createCardMarkup(galleryItems));

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
