// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector('.gallery');

function createDivCardMarkup(items) {
  return items
    .map(item => {
      return `
          <div class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                  <img
                      class="gallery__image"
                      src="${item.preview}"
                      data-source="${item.original}"
                      alt="${item.description}"
                  />
              </a>
          </div>
          `;
    })
    .join('');
}

const createGalleryMarcup = createDivCardMarkup(galleryItems);

divRef.innerHTML = createGalleryMarcup;

divRef.addEventListener('click', onImgClick, {
  onClose: () => {
    document.removeEventListener('keydown', closeModal);
  },
});

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => document.addEventListener('keydown', onEscPress),
      onClose: () => document.removeEventListener('keydown', onEscPress),
    }
  );
  instance.show();

  function onEscPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }
}

console.log('hello');
