import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector('.gallery');

const createCardMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__list"><a class-"gallery__item" href-"${original}">
    <img class="gallery__image" src="${preview}" alt="${description} data-source='${original}" /></a></li>`;
  })
  .join('');

divRef.innerHTML = createCardMarkup;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
